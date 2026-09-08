import { useEffect, useRef, useState } from 'react'

/* Types out `text` char by char; returns the visible slice. */
export function useTypewriter(text: string, cps = 220, start = true) {
  const [out, setOut] = useState('')
  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOut(text)
      return
    }
    setOut('')
    let i = 0
    const iv = setInterval(() => {
      i += Math.random() < 0.5 ? 1 : 2 // human cadence
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(iv)
    }, 1000 / cps)
    return () => clearInterval(iv)
  }, [text, cps, start])
  return out
}

/* Reveals lines one by one (typewriter feel for lists). */
export function useLineReveal(count: number, msPer = 60, start = true) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(count)
      return
    }
    setN(0)
    let i = 0
    const iv = setInterval(() => {
      i++
      setN(i)
      if (i >= count) clearInterval(iv)
    }, msPer)
    return () => clearInterval(iv)
  }, [count, msPer, start])
  return n
}

/* Terminal scroll container helper: keeps view pinned to bottom while new
   content streams in, unless the user scrolled up to read. */
export function useAutoScroll<T extends HTMLElement>(dep: unknown) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80
    if (nearBottom) el.scrollTop = el.scrollHeight
  }, [dep])
  return ref
}
