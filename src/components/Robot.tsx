import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/* Punk wireframe robot — red on black, moshing gently. Reuses the
   ProjetoBOT silhouette but in the v5 palette. Lazy-loaded. */
export default function Robot() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.05)

    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 1.4, 6.5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const red = 0xe10600
    const mat = new THREE.MeshBasicMaterial({ color: red, wireframe: true, transparent: true, opacity: 0.85 })

    const bot = new THREE.Group()
    scene.add(bot)

    const torso = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.5, 0.9), mat)
    torso.position.y = 1.6
    bot.add(torso)

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.65, 0.75), mat)
    head.position.y = 2.75
    bot.add(head)

    /* mohawk: triangle spikes on the head */
    for (let i = 0; i < 5; i++) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.55, 4), mat)
      spike.position.set(-0.28 + i * 0.14, 3.25, 0)
      bot.add(spike)
    }

    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff5a4f, wireframe: false, transparent: true, opacity: 0.95 })
    const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.06), eyeMat)
    eyeL.position.set(-0.18, 2.8, 0.4)
    bot.add(eyeL)
    const eyeR = eyeL.clone()
    eyeR.position.x = 0.18
    bot.add(eyeR)

    const armL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 1.1, 0.28), mat)
    armL.position.set(-0.95, 1.6, 0)
    bot.add(armL)
    const armR = armL.clone()
    armR.position.x = 0.95
    bot.add(armR)

    /* guitar? no — a wrench. punk robot holds a red wrench */
    const wrench = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.3, 0.14), mat)
    wrench.position.set(1.15, 1.7, 0.3)
    wrench.rotation.z = 0.5
    bot.add(wrench)

    const wheelGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.22, 10)
    const wheelL = new THREE.Mesh(wheelGeo, mat)
    wheelL.rotation.z = Math.PI / 2
    wheelL.position.set(-0.6, 0.5, 0)
    bot.add(wheelL)
    const wheelR = wheelL.clone()
    wheelR.position.x = 0.6
    bot.add(wheelR)

    const grid = new THREE.GridHelper(16, 30, 0xe10600, 0x330000)
    ;(grid.material as THREE.Material).transparent = true
    ;(grid.material as THREE.Material).opacity = 0.25
    scene.add(grid)

    /* red particles rising */
    const pCount = 140
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 3.4
      pPos[i * 3 + 1] = Math.random() * 4.6
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 3.4
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({ color: 0xe10600, size: 0.04, transparent: true, opacity: 0.6 })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    let px = 0
    let py = 0
    const onPointer = (e: PointerEvent) => {
      const r = mount.getBoundingClientRect()
      px = ((e.clientX - r.left) / r.width) * 2 - 1
      py = ((e.clientY - r.top) / r.height) * 2 - 1
    }
    mount.addEventListener('pointermove', onPointer)

    const ro = new ResizeObserver(() => {
      camera.aspect = mount.clientWidth / Math.max(mount.clientHeight, 1)
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    })
    ro.observe(mount)

    let raf = 0
    const loop = (t: number) => {
      if (!reduce) {
        bot.rotation.y = Math.sin(t / 1600) * 0.5
        /* headbang */
        head.rotation.x = Math.sin(t / 210) * 0.22
        /* arm swing — devil horns */
        armL.rotation.x = Math.sin(t / 300) * 0.35
        armR.rotation.x = -Math.sin(t / 300) * 0.35

        const arr = pGeo.attributes.position.array as Float32Array
        for (let i = 0; i < pCount; i++) {
          arr[i * 3 + 1] += 0.006
          if (arr[i * 3 + 1] > 4.6) arr[i * 3 + 1] = 0
        }
        pGeo.attributes.position.needsUpdate = true
      }
      camera.position.x += (px * 0.7 - camera.position.x) * 0.05
      camera.position.y += (1.4 - py * 0.4 - camera.position.y) * 0.05
      camera.lookAt(0, 1.8, 0)
      renderer.render(scene, camera)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mount.removeEventListener('pointermove', onPointer)
      renderer.dispose()
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh || o instanceof THREE.Points) {
          o.geometry.dispose()
          ;(o.material as THREE.Material).dispose()
        }
      })
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="h-[420px] w-full" aria-label="Robô punk wireframe fazendo headbang" role="img" />
}
