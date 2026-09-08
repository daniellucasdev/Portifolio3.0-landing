import { useEffect, useState, type ReactNode } from 'react'
import { sfx } from '../sfx'
import { useAutoScroll, useLineReveal } from '../hooks'

/* Shared shell for all content screens: header, back, streamed lines. */
export default function ScreenShell({
  title,
  children,
  onBack,
  footer,
}: {
  title: string
  children: ReactNode
  onBack: () => void
  footer?: ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const lines = useLineReveal(1, 1, true)
  const scrollRef = useAutoScroll<HTMLDivElement>(lines)

  return (
    <div className="h-full flex flex-col">
      <header className="flex items-center justify-between border-b border-[#0a6e2f] px-4 md:px-10 py-3 shrink-0">
        <p className="text-lg md:text-xl glow">{title}</p>
        <button
          onClick={onBack}
          className="kbd text-base cursor-pointer bg-transparent hover:bg-p hover:text-term-bg"
        >
          ESC ↩ VOLTAR
        </button>
      </header>
      <div ref={scrollRef} className="term-scroll flex-1 overflow-y-auto px-4 md:px-10 py-6 text-lg md:text-xl glow-soft">
        {mounted && children}
      </div>
      {footer && (
        <footer className="border-t border-[#0a6e2f] px-4 md:px-10 py-2 shrink-0 dim text-base">
          {footer}
        </footer>
      )}
    </div>
  )
}

/* helper: renders streamed lines with type sound */
export function StreamLines({ lines, onDone }: { lines: string[]; onDone?: () => void }) {
  const n = useLineReveal(lines.length, 55)
  useEffect(() => {
    if (n > 0 && n <= lines.length) sfx.type()
  }, [n, lines.length])
  useEffect(() => {
    if (n >= lines.length && onDone) onDone()
  }, [n, lines.length, onDone])
  return (
    <>
      {lines.slice(0, n).map((l, i) => (
        <p key={i} className="line-in whitespace-pre-wrap">{l || '\u00A0'}</p>
      ))}
    </>
  )
}
