import { useState } from 'react'
import { GIGS } from '../data'

/* Career as gig list: venue, city, setlist. */
export default function Gigs() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section aria-labelledby="gigs-h" className="border-b-4 border-red bg-ink">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-red mb-4">02 / agenda</p>
            <h2 id="gigs-h" className="mosh text-5xl md:text-7xl">Turnês</h2>
          </div>
          <p className="font-mono text-xs text-paper/50 max-w-xs leading-relaxed">
            Cada empresa é um venue. Cada projeto, um set. 2022–2026, sem gap.
          </p>
        </div>

        <div className="border-t-2 border-paper/15">
          {GIGS.map((g, i) => (
            <article key={g.venue} className="gig-row border-b-2 border-paper/15">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full text-left px-2 md:px-4 py-6 md:py-8 flex flex-wrap items-baseline gap-x-6 gap-y-1"
              >
                <span className="font-mono text-[11px] text-paper/40 w-24 shrink-0 gig-period">{g.period}</span>
                <span className="mosh text-3xl md:text-5xl">{g.venue}</span>
                <span className="font-mono text-[11px] text-paper/40 ml-auto gig-city">{g.city}</span>
                <span className="gig-plus font-mono text-2xl text-red inline-block transition-transform duration-300" aria-hidden="true">+</span>
              </button>
              {open === i && (
                <div className="px-2 md:px-4 pb-8 md:pl-[7.5rem] -mt-2">
                  <p className="font-type text-sm text-red mb-4">— {g.role}</p>
                  <ul className="space-y-2 max-w-3xl">
                    {g.tracks.map((t, j) => (
                      <li key={j} className="font-mono text-sm leading-relaxed flex gap-3">
                        <span className="text-red shrink-0" aria-hidden="true">▸</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
