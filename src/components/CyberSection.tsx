import type { ReactNode } from 'react'
import { CYBER } from '../data'

/* Cyber security + robotics section — the red-wire backline. */
export default function CyberSection({ children }: { children: ReactNode }) {
  return (
    <section aria-labelledby="cyber-h" className="border-b-4 border-red bg-smoke relative overflow-hidden">
      {/* circuit trace backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#e10600 1px, transparent 1px), linear-gradient(90deg, #e10600 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative mx-auto max-w-[1300px] px-5 md:px-10 py-16 md:py-24">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-red mb-4">05 / backline</p>
        <h2 id="cyber-h" className="mosh text-5xl md:text-7xl mb-4 max-w-3xl">
          Segurança &<br />robótica
        </h2>
        <p className="font-type text-lg text-paper/70 max-w-xl mb-12">{CYBER.lead}</p>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <div className="space-y-8">
            {CYBER.points.map((p) => (
              <article key={p.h} className="border-l-4 border-red pl-5">
                <h3 className="font-mono text-sm font-bold tracking-wider uppercase text-paper mb-2">{p.h}</h3>
                <p className="font-type text-[15px] leading-relaxed text-paper/70">{p.p}</p>
              </article>
            ))}
          </div>
          <div className="border-2 border-red/50 p-2 rotate-[0.8deg] bg-ink">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
