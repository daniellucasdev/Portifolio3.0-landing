import { SIDEB } from '../data'

/* Side B: volunteer, teaching, army merit, D&D/metal. */
export default function SideB() {
  return (
    <section aria-labelledby="sideb-h" className="border-b-4 border-red bg-ink">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-red mb-4">06 / lado b</p>
            <h2 id="sideb-h" className="mosh text-5xl md:text-7xl">Lado B</h2>
          </div>
          <p className="font-mono text-xs text-paper/50 max-w-xs leading-relaxed">
            O que não sai no contracheque: ensino, consultoria gratuita, Exército, D&D.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {SIDEB.map((s, i) => (
            <article
              key={s.h}
              className={`zine-card-dark p-6 md:p-8 ${i % 2 ? 'md:rotate-[0.6deg]' : 'md:rotate-[-0.5deg]'} border-2 border-paper/10`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-mono text-sm font-bold tracking-wider uppercase">{s.h}</h3>
                <span className="stamp text-[9px] shrink-0">{s.stamp}</span>
              </div>
              <p className="font-type text-[15px] leading-relaxed text-paper/70">{s.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
