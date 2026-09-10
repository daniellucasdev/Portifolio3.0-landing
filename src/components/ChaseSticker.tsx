import { useEffect, useRef } from 'react'

/* ————— Hover sticker that chases the pointer —————
   Inside a container: a rotated rubber-stamp follows the cursor.
   Punk twist on the "image-follows-cursor" list pattern. */

export default function ChaseSticker({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const stRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const st = stRef.current
    if (!wrap || !st) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    let tx = 0
    let ty = 0
    let x = 0
    let y = 0
    let visible = false
    let raf = 0

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect()
      tx = e.clientX - r.left
      ty = e.clientY - r.top
    }
    const onEnter = () => {
      visible = true
      st.style.opacity = '1'
    }
    const onLeave = () => {
      visible = false
      st.style.opacity = '0'
    }
    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      st.style.transform = `translate(${x - 60}px, ${y - 60}px) rotate(-8deg) scale(${visible ? 1 : 0.6})`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    wrap.addEventListener('pointermove', onMove)
    wrap.addEventListener('pointerenter', onEnter)
    wrap.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      wrap.removeEventListener('pointermove', onMove)
      wrap.removeEventListener('pointerenter', onEnter)
      wrap.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative">
      <div
        ref={stRef}
        aria-hidden="true"
        className="absolute top-0 left-0 z-20 pointer-events-none opacity-0 transition-opacity duration-200 will-change-transform"
      >
        <div className="stamp text-[11px] bg-ink/80">{text}</div>
      </div>
      {children}
    </div>
  )
}
