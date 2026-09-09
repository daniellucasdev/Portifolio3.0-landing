import { useEffect, useState } from 'react'
import { MANIFESTO, CONTACT } from '../data'

const GLITCH_CHARS = ['#', '%', '&', '@', '§', '▓', '░', '?', 'X']

/* Punk hero: oversized mosh-pit type, glitch flicker, tape, stamps. */
export default function Hero() {
  const [glitchName, setGlitchName] = useState(false)

  useEffect(() => {
    const iv = setInterval(() => {
      setGlitchName(true)
      setTimeout(() => setGlitchName(false), 160)
    }, 3800)
    return () => clearInterval(iv)
  }, [])

  return (
    <header className="relative overflow-hidden border-b-4 border-red">
      {/* red halftone backdrop hint */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#e10600 1.2px, transparent 1.2px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative mx-auto max-w-[1300px] px-5 md:px-10 pt-24 md:pt-32 pb-16 md:pb-24">
        {/* top strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 md:mb-16">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50">
            PORTFÓLIO / VOL. 5 — 2026
          </p>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50">
            GOVERNADOR VALADARES, MG — REMOTO
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-start">
          <div>
            <p className="font-type text-sm md:text-base text-red mb-6 tracking-wide">
              // engenheiro de software & segurança — o que você vai ler levou 5 anos pra acontecer
            </p>

            <h1 className="mosh text-[19vw] md:text-[11.5vw] leading-[0.82]">
              <span className="block">DANIEL</span>
              <span className="block relative">
                LUCAS
                {glitchName && (
                  <span
                    aria-hidden="true"
                    className="mosh-glitch absolute inset-0 text-red opacity-80 select-none"
                    style={{ transform: 'translate(6px, -4px) skewX(-8deg)' }}
                  >
                    {GLITCH_CHARS.map((c, i) => (
                      <span key={i} className={i % 2 ? 'opacity-60' : ''}>{c}</span>
                    ))}
                    LUCAS
                  </span>
                )}
              </span>
            </h1>

            <p className="mt-6 font-mono text-sm md:text-base text-paper/70 max-w-xl leading-relaxed">
              Design <span className="text-red font-bold">punk</span>. Entrega{' '}
              <span className="text-paper font-bold">enterprise</span>. 4 apps nas lojas,
              auditoria de 3,3% no TPV, Lighthouse 38→94 — e um robô de mesa com IA.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener"
                className="mosh text-xl md:text-2xl bg-red text-white px-6 py-3 hover:bg-paper hover:text-ink transition-colors"
              >
                CONTRATA ↗
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener"
                className="font-mono text-sm border-2 border-paper/40 px-5 py-3 hover:border-red hover:text-red transition-colors"
              >
                github/daniellucasdev
              </a>
              <span className="stamp text-xs md:text-sm ml-2">não sou robô*</span>
            </div>
            <p className="mt-3 font-mono text-[10px] text-paper/35">*mentira, tenho um em casa</p>
          </div>

          {/* manifesto card */}
          <aside className="zine-card p-7 md:p-9 max-w-md justify-self-end tape rotate-[1.2deg]">
            <p className="font-type text-xs tracking-[0.2em] uppercase mb-5 text-ink/60">
              manifesto do operário
            </p>
            {MANIFESTO.map((line, i) => (
              <p key={i} className="font-type text-[15px] leading-relaxed text-ink/85">
                {line}
              </p>
            ))}
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-red-deep">
              — impresso em papel reciclado de briefing antigo
            </p>
          </aside>
        </div>
      </div>
    </header>
  )
}
