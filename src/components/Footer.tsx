import { useEffect, useState } from 'react'

export default function Footer() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'America/Sao_Paulo',
        }).format(new Date()),
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="bg-ink text-paper dark-zone">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-24 md:pt-32 pb-10">
        <p className="eyebrow text-paper/50 mb-8">Tem um produto pra sair do papel?</p>
        <a
          href="https://www.linkedin.com/in/daniellucasfaraujo/"
          target="_blank"
          rel="noopener"
          className="group block"
        >
          <span className="mega block text-[13vw] md:text-[9vw] leading-[0.9] group-hover:text-gwerk transition-colors duration-500">
            Vamos
            <br />
            conversar<span className="text-blue group-hover:text-gwerk transition-colors">↗</span>
          </span>
        </a>

        <div className="mt-16 md:mt-24 grid gap-8 md:grid-cols-3 border-t border-night-line pt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="https://github.com/daniellucasdev" target="_blank" rel="noopener" className="eyebrow sweep">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/daniellucasfaraujo/" target="_blank" rel="noopener" className="eyebrow sweep">
              LinkedIn ↗
            </a>
            <a href="https://daniellucas.dev" target="_blank" rel="noopener" className="eyebrow sweep">
              Portfolio v2 ↗
            </a>
          </div>
          <p className="font-mono text-xs text-paper/40 md:text-center">
            Governador Valadares, MG — BR
            <br />
            <span className="text-gwerk/80">{time ? `⏱ ${time} BRT` : ''}</span>
          </p>
          <p className="font-mono text-xs text-paper/40 md:text-right">
            © {new Date().getFullYear()} Daniel Lucas F. de Araújo
            <br />
            React 19 · Vite 7 · Tailwind 4 · Lenis · Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
