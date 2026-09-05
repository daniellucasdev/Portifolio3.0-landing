import { EDUCATION } from '../data'
import { motion } from 'motion/react'

export default function About() {
  return (
    <section id="sobre" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
        <div className="flex items-baseline gap-4 mb-14 md:mb-20">
          <span className="font-mono text-xs text-blue">05</span>
          <h2 className="mega text-4xl md:text-6xl">Sobre</h2>
          <span className="hidden md:block flex-1 h-px bg-line ml-6" />
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-ink max-w-2xl">
              Eu sou Daniel Lucas, de Governador Valadares — e eu gosto de pegar as coisas{' '}
              <em className="not-italic text-blue font-bold">de ponta a ponta</em>: a pesquisa, a
              spec, o back-end, o front, a publicação nas lojas. E de achar o bug de cálculo que
              ninguém tinha visto.
            </p>
            <p className="mt-8 text-[15px] leading-relaxed text-ink-2 max-w-2xl">
              Comecei freelando front-end em 2022, entrei na Braip ainda no começo e saí pleno,
              liderando o app principal da empresa. Hoje construo e protejo produtos financeiros.
              Formação em Engenharia Eletrônica, onde co-fundei o clube de programação &amp;
              automação e fui monitor de lógica, automação industrial e engenharia de software.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-2 max-w-2xl">
              Fora do trabalho: robôs com Raspberry Pi, bots de Discord, uma calculadora em
              LOLCODE — e inglês C2 certificado pra fechar o pacote.
            </p>

            <blockquote className="mt-10 border-l-2 border-blue pl-5 max-w-2xl">
              <p className="text-lg font-semibold tracking-tight">
                “Educação de qualidade e gratuita pra todo mundo.”
              </p>
              <cite className="mt-2 block font-mono text-xs text-ink-2 not-italic">
                — meu lema no GitHub, e o porquê de quase tudo que eu construo
              </cite>
            </blockquote>
          </motion.div>

          <div>
            <h3 className="eyebrow text-ink-2 mb-6 border-b border-line pb-3">Educação</h3>
            {EDUCATION.map((e) => (
              <div key={e.title} className="py-5 border-b border-line">
                <p className="font-bold tracking-tight">{e.title}</p>
                <p className="font-mono text-xs text-ink-2 mt-1">{e.place}</p>
                {e.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {e.points.map((p) => (
                      <li key={p} className="text-sm text-ink-2 flex gap-2">
                        <span className="text-blue" aria-hidden="true">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <h3 className="eyebrow text-ink-2 mt-10 mb-4 border-b border-line pb-3">
              Formações complementares
            </h3>
            <p className="font-mono text-[11px] leading-loose text-ink-2">
              Vue.js 3 · JS 60h · DevOps 51h · Linux 32h · CSS 36h · Web Acessível · UI Design
              (Origamid 60h) · Tipografia 24h · CSS Animations · Dev Web 200h (IFMS)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
