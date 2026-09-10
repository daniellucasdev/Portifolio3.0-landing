import { useEffect, useRef, type ReactNode } from 'react'

/* ————— Skew-on-velocity —————
   Leans the child while the user scrolls fast — like tape warping. */

export default function SkewOnScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let lastY = window.scrollY
    let skew = 0
    let raf = 0

    const loop = () => {
      const dy = window.scrollY - lastY
      lastY = window.scrollY
      const target = Math.max(-6, Math.min(6, dy * 0.35))
      skew += (target - skew) * 0.12
      el.style.transform = `skewY(${skew.toFixed(2)}deg)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  )
}
