import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { sfx } from '../sfx'

/* Holographic projection of the ProjetoBOT robot — Three.js wireframe.
   Opens as a full-screen overlay. ESC or click closes. */
export default function Hologram({ onClose }: { onClose: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /* scene */
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x020603, 0.06)

    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    )
    camera.position.set(0, 1.1, 6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    /* hologram group */
    const holo = new THREE.Group()
    scene.add(holo)

    const green = 0x00ff41
    const mat = new THREE.MeshBasicMaterial({
      color: green,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    })

    /* robot body: boxy torso + head + antenna + wheels — ProjetoBOT vibe */
    const torso = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.4, 0.8), mat)
    torso.position.y = 1.5
    holo.add(torso)

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 0.7), mat)
    head.position.y = 2.6
    holo.add(head)

    /* eyes: two small glowing boxes */
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xbaffc9, wireframe: false, transparent: true, opacity: 0.9 })
    const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.05), eyeMat)
    eyeL.position.set(-0.18, 2.65, 0.36)
    holo.add(eyeL)
    const eyeR = eyeL.clone()
    eyeR.position.x = 0.18
    holo.add(eyeR)

    /* antenna */
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.7, 6), mat)
    antenna.position.y = 3.2
    holo.add(antenna)
    const antTip = new THREE.Mesh(new THREE.OctahedronGeometry(0.09), eyeMat)
    antTip.position.y = 3.6
    holo.add(antTip)

    /* arms */
    const armL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.0, 0.25), mat)
    armL.position.set(-0.85, 1.5, 0)
    holo.add(armL)
    const armR = armL.clone()
    armR.position.x = 0.85
    holo.add(armR)

    /* wheels */
    const wheelGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.2, 12)
    const wheelL = new THREE.Mesh(wheelGeo, mat)
    wheelL.rotation.z = Math.PI / 2
    wheelL.position.set(-0.55, 0.45, 0)
    holo.add(wheelL)
    const wheelR = wheelL.clone()
    wheelR.position.x = 0.55
    holo.add(wheelR)

    /* ground grid: holo projector base */
    const grid = new THREE.GridHelper(14, 28, 0x00ff41, 0x0a6e2f)
    ;(grid.material as THREE.Material).transparent = true
    ;(grid.material as THREE.Material).opacity = 0.22
    grid.position.y = 0
    scene.add(grid)

    /* particles rising (dust in the holo beam) */
    const pCount = 160
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 3
      pPos[i * 3 + 1] = Math.random() * 4.5
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 3
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({ color: 0x00ff41, size: 0.035, transparent: true, opacity: 0.55 })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    /* scanline plane sweeping the robot */
    const scan = new THREE.Mesh(
      new THREE.PlaneGeometry(4, 4),
      new THREE.MeshBasicMaterial({ color: 0x00ff41, transparent: true, opacity: 0.08, side: THREE.DoubleSide }),
    )
    scan.rotation.x = -Math.PI / 2
    scene.add(scan)

    /* pointer + resize */
    let px = 0
    let py = 0
    const onPointer = (e: PointerEvent) => {
      px = (e.clientX / window.innerWidth) * 2 - 1
      py = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onPointer)

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    /* loop */
    let raf = 0
    let scanY = 0
    const loop = (t: number) => {
      holo.rotation.y += reduce ? 0 : 0.006
      antTip.rotation.y += reduce ? 0 : 0.03
      camera.position.x += (px * 0.8 - camera.position.x) * 0.04
      camera.position.y += (1.1 - py * 0.5 - camera.position.y) * 0.04
      camera.lookAt(0, 1.6, 0)

      if (!reduce) {
        /* rising particles */
        const arr = pGeo.attributes.position.array as Float32Array
        for (let i = 0; i < pCount; i++) {
          arr[i * 3 + 1] += 0.004
          if (arr[i * 3 + 1] > 4.5) arr[i * 3 + 1] = 0
        }
        pGeo.attributes.position.needsUpdate = true

        /* scan plane loop */
        scanY = (t / 24) % 4.5
        scan.position.y = scanY
      }

      renderer.render(scene, camera)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    sfx.static(0.25, 0.03)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('resize', onResize)
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

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#020603]/95" role="dialog" aria-label="Holograma do ProjetoBOT">
      <header className="flex items-center justify-between px-4 md:px-10 py-3 border-b border-[#0a6e2f]">
        <p className="glow text-lg md:text-xl">HOLO-PROJECAO — PROJETOBOT [RASPBERRY PI + GEMINI]</p>
        <button onClick={onClose} className="kbd cursor-pointer bg-transparent hover:bg-p hover:text-term-bg">
          ESC ✕ FECHAR
        </button>
      </header>
      <div ref={mountRef} className="relative flex-1" />
      <footer className="px-4 md:px-10 py-2 border-t border-[#0a6e2f] dim text-base flex flex-wrap gap-x-6">
        <span>ARRASTE O MOUSE PARA ORBITAR</span>
        <span>ROBO FISICO: RASPBERRY PI · API GEMINI · TTS EM NUVEM</span>
        <span>PERGUNTA AI — ELE RESPONDE EM TEMPO REAL</span>
      </footer>
    </div>
  )
}
