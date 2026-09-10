import { useEffect, useRef, useState } from 'react'

/* ————— Scramble-on-hover text —————
   Hovering (or focusing) decodes the text through glitch chars.
   Punk-zine flavor; respects reduced motion. */

const CHARS = ['#', '%', '&', '@', '§', '▓', '░', 'X', '!', '?']

export default function Scramble({ text, className }: { text: string; className?: string }) {
  const [out, setOut] = useState(text)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const stop = () => {
    if (timer.current) clearInterval(timer.current)
    timer.current = null
    setOut(text)
  }

  const start = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (timer.current) clearInterval(timer.current)
    let i = 0
    timer.current = setInterval(() => {
      i++
      setOut(
        text
          .split('')
          .map((ch, j) => {
            if (ch === ' ') return ' '
            if (j < i / 2) return ch
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join(''),
      )
      if (i / 2 >= text.length) stop()
    }, 28)
  }

  useEffect(() => stop, [])

  return (
    <span className={className} onMouseEnter={start} onFocus={start} onMouseLeave={stop} onBlur={stop}>
      {out}
    </span>
  )
}
