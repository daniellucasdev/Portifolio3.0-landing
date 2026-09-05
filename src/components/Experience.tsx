import { motion } from 'motion/react'
import { XP } from '../data'

export default function Experience() {
  return (
    <section id="experiencia" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
        <div className="flex items-baseline gap-4 mb-14 md:mb-20">
          <span className="font-mono text-xs text-blue">01</span>
          <h2 className="mega text-4xl md:text-6xl">Experiência</h2>
          <span className="hidden md:block flex-1 h-px bg-line ml-6" />
        </div>

        <div className="border-t border-line">
          {XP.map((job, i) => (
            <motion.article
              key={job.org + job.period}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-10 py-9 border-b border-line"
            >
              <div className="font-mono text-xs text-ink-2 leading-loose">
                <p>{job.period}</p>
                <p className="text-blue">{job.note}</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  {job.role} <span className="text-ink-2 font-normal">· {job.org}</span>
                </h3>
                <ul className="mt-4 space-y-2.5 max-w-3xl">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                      <span className="text-blue mt-1" aria-hidden="true">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
