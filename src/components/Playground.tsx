import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

/* "Playground" — the weird side of the repos, dark+green terminal mood.
   This is the Fallout-terminal register of Daniel's GitHub. */
const ITEMS = [
  {
    k: 'robô físico',
    name: 'ProjetoBOT',
    desc: 'Raspberry Pi + API do Gemini + TTS em nuvem. Um robô de mesa que responde perguntas em tempo real — projetado, impresso e programado por mim.',
    tech: 'C++ · Python · Gemini API',
  },
  {
    k: 'terminal fallout',
    name: 'Projeto-Term',
    desc: 'Terminal web verde-fósforo inspirado em Fallout, com login funcionando (admin). Feito porque sim, mantido porque as pessoas pedem.',
    tech: 'HTML · JS · CSS animations',
  },
  {
    k: 'esolang',
    name: 'calc-cat',
    desc: 'Calculadora escrita em LOLCODE — a linguagem dos memes de gatos. Sintaxe de C refrescada do jeito mais criativo possível.',
    tech: 'LOLCODE',
  },
  {
    k: 'bot de discord',
    name: 'Kermit 1.2',
    desc: 'Bot que responde comandos com humor e gera imagens personalizadas quando alguém entra ou sai do servidor. O meme vira feature.',
    tech: 'JavaScript · discord.js',
  },
]

export default function Playground() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} id="playground" className="relative border-b border-night-line bg-night text-paper dark-zone overflow-hidden">
      {/* scanline texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, #9fe870 2px, #9fe870 3px)',
        }}
      />
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="absolute left-[6%] top-[12%] mega text-[26vw] leading-none text-transparent" style={{ WebkitTextStroke: '1px rgba(159,232,112,0.10)' }}>
          PLAY
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-mono text-xs text-gwerk">03</span>
          <h2 className="mega text-4xl md:text-6xl">Playground</h2>
        </div>
        <p className="max-w-2xl text-paper/60 text-[15px] leading-relaxed mb-14 md:mb-20 font-mono">
          $ ls ~/projetos-pessoais — o lado esquisito do meu GitHub. Aqui não tem cliente nem
          deadline: tem robô com IA, esolang e terminal de Fallout.
        </p>

        <div className="grid gap-px bg-night-line md:grid-cols-2">
          {ITEMS.map((it) => (
            <motion.article
              key={it.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-night p-7 md:p-9 group hover:bg-night-2 transition-colors"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gwerk/80 mb-4">
                {it.k}
              </p>
              <h3 className="text-2xl font-extrabold tracking-tight mb-3 group-hover:text-gwerk transition-colors">
                {it.name}
              </h3>
              <p className="text-sm text-paper/60 leading-relaxed">{it.desc}</p>
              <p className="mt-5 font-mono text-[11px] text-paper/35">{it.tech}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
