import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'playground', label: 'Playground' },
  { id: 'stack', label: 'Stack' },
  { id: 'sobre', label: 'Sobre' },
]

export default function Header({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    onNavigate(id)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-line' : 'border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => go('top')}
          className="font-mono text-sm tracking-tight"
          aria-label="Voltar ao topo"
        >
          daniel<span className="text-blue">.</span>lucas<span className="text-blue">®</span>
        </button>

        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="eyebrow sweep">
              {l.label}
            </button>
          ))}
          <a
            href="https://github.com/daniellucasdev"
            target="_blank"
            rel="noopener"
            className="eyebrow bg-ink text-paper px-4 py-2 hover:bg-blue transition-colors"
          >
            GitHub ↗
          </a>
        </nav>

        <button
          className="md:hidden eyebrow border border-ink px-3 py-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-line bg-paper"
          aria-label="Mobile"
        >
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full text-left px-5 py-4 border-b border-line eyebrow"
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://github.com/daniellucasdev"
            target="_blank"
            rel="noopener"
            className="block px-5 py-4 eyebrow text-blue"
          >
            GitHub ↗
          </a>
        </nav>
      )}
    </header>
  )
}
