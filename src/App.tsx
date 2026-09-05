import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Playground from './components/Playground'
import Stack from './components/Stack'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.11,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })
    lenisRef.current = lenis

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: -64, duration: 1.1 })
    else el.scrollIntoView()
  }

  return (
    <>
      <Header onNavigate={scrollTo} />
      <main>
        <Hero onCta={scrollTo} />
        <Marquee />
        <Experience />
        <Projects />
        <Playground />
        <Stack />
        <About />
      </main>
      <Footer />
    </>
  )
}