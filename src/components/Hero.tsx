import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

const LINES = [
  'dan@valadares:~$ quem sou eu',
  '$ cargo: engenheiro de software',
  '$ escopo: de ponta a ponta',
]

export default function Hero({ onCta }: { onCta: (id: string) => void }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  /* typing */
  const [text, setText] = useState('')
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(LINES.join('\n'))
      return
    }
    let line = 0
    let ch = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const target = LINES[line]
      setText(LINES.slice(0, line).join('\n') + (line > 0 ? '\n' : '') + target.slice(0, ++ch))
      if (ch < target.length) timer = setTimeout(tick, 30)
      else if (line < LINES.length - 1) {
        line++
        ch = 0
        timer = setTimeout(tick, 420)
      }
    }
    timer = setTimeout(tick, 350)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-28 md:pt-36 pb-16 md:pb-24">
        <motion.div style={{ y, opacity }}>
          <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-8 items-end">
            <div>
              <pre
                aria-hidden="true"
                className="font-mono text-[11px] md:text-xs leading-relaxed text-ink-2 whitespace-pre-wrap min-h-[4.2em] mb-8"
              >
                {text}
                <span className="inline-block w-[7px] bg-blue animate-pulse">&nbsp;</span>
              </pre>

              <h1 className="mega text-[15vw] md:text-[9.5vw] lg:text-[8.2rem]">
                Daniel
                <br />
                Lucas
                <span className="text-blue align-top text-[0.45em]">®</span>
              </h1>

              <p className="mt-8 max-w-xl text-base md:text-lg text-ink-2 leading-relaxed">
                Engenheiro de software com 5 anos de estrada. App publicado em 2 meses,
                plataforma de TPV milionário, Lighthouse de 38 a 94 —{' '}
                <span className="text-ink font-semibold">
                  eu pego o produto inteiro, do briefing ao deploy.
                </span>
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() => onCta('projetos')}
                  className="eyebrow bg-ink text-paper px-6 py-3.5 hover:bg-blue transition-colors"
                >
                  Ver projetos ↘
                </button>
                <a
                  href="https://www.linkedin.com/in/daniellucasfaraujo/"
                  target="_blank"
                  rel="noopener"
                  className="eyebrow border border-ink px-6 py-3.5 hover:bg-ink hover:text-paper transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-ink-2">
                <span>📍 Governador Valadares, MG — remoto</span>
                <span>🗣️ EN C2 · PT nativo</span>
                <span className="text-blue">↟ disponível pra conversar</span>
                <span> followers no LinkedIn</span>
              </div>
              <span data-followers className="hidden" />
            </div>

            <div className="justify-self-end max-w-[280px] w-full">
              <div className="relative">
                <span className="absolute -top-2 -left-2 h-5 w-5 border-t-2 border-l-2 border-blue" />
                <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-blue" />
                <img
                  src="https://github.com/daniellucasdev.png"
                  alt="Daniel Lucas"
                  width={280}
                  height={280}
                  className="w-full aspect-square object-cover grayscale-[35%] contrast-[1.05]"
                  loading="eager"
                />
              </div>
              <p className="mt-3 font-mono text-[11px] text-ink-2 flex justify-between">
                <span>@daniellucasdev</span>
                <span className="text-blue">● online</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
