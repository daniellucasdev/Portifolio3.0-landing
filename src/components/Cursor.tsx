import { useEffect, useRef, useState } from 'react'

/* ————— Custom cursor: red crosshair + trailing ring —————
   Morphs into a "VER ↗" stamp over interactive targets
   ([data-cursor="view"]) and shrinks on plain links.
   Disabled on touch / reduced-motion / coarse pointers. */

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    let x = -100
    let y = -100
    let rx = -100
    let ry = -100
    let raf = 0

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      const t = (e.target as HTMLElement).closest?.('[data-cursor], a, button')
      if (!t) setLabel(null)
      else if (t.getAttribute('data-cursor')) setLabel(t.getAttribute('data-cursor'))
      else setLabel('')
    }

    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px)`
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    window.addEventListener('pointermove', onMove)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  if (!enabled) return null

  const isView = label !== null && label.length > 0
  const isLink = label === ''

  return (
    <>
      {/* native cursor hidden only when custom is active */}
      <style>{`@media (pointer: fine) { body { cursor: none; } a, button, [data-cursor] { cursor: none; } }`}</style>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[90] pointer-events-none will-change-transform"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isView ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* crosshair */}
          <div className="absolute -left-[9px] -top-[1px] w-[18px] h-[2px] bg-red" />
          <div className="absolute -left-[1px] -top-[9px] w-[2px] h-[18px] bg-red" />
          <div className="absolute -left-[2px] -top-[2px] w-[4px] h-[4px] bg-paper" />
        </div>
      </div>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[89] pointer-events-none will-change-transform"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center border-2 transition-all duration-200 font-mono text-[10px] font-bold tracking-widest ${
            isView
              ? 'w-16 h-16 bg-red border-red text-white rotate-[-8deg]'
              : isLink
                ? 'w-9 h-9 border-red/70 rotate-45'
                : 'w-7 h-7 border-red/35 rotate-45'
          }`}
        >
          <span className={isView ? '' : 'hidden'}>{label}</span>
        </div>
      </div>
    </>
  )
}
