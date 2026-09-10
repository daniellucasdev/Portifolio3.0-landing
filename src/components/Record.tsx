import { RECORD } from '../data'
import CountUp from './CountUp'
import Scramble from './Scramble'

/* Parse the numeric part of a record value for count-up. */
function numeric(v: string): { n: number; dec: number } | null {
  const m = v.match(/(\d+(?:[.,]\d+)?)/)
  if (!m) return null
  const raw = m[1].replace(',', '.')
  const dec = raw.includes('.') ? 1 : 0
  return { n: parseFloat(raw), dec }
}

/* The professional counterweight: clean "verified document" card. */
export default function Record() {
  return (
    <section aria-labelledby="record-h" className="border-b-4 border-red bg-ink">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-red mb-4">01 / provas</p>
            <h2 id="record-h" className="mosh text-5xl md:text-6xl">
              Sem<br />estética<br />sem<br />substância
            </h2>
            <p className="mt-6 font-mono text-sm text-paper/60 max-w-xs leading-relaxed">
              A parte punk é o layout. Esta aqui é a ficha — dados que um
              sistema de RH consegue parsear sem se assustar.
            </p>
          </div>

          <div className="zine-card p-7 md:p-10 rotate-[-0.6deg]" data-cursor="CHECK">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="font-type text-lg tracking-[0.15em] text-ink">
                  <Scramble text={RECORD.title} />
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-1">
                  emitido por: código real em produção · válido indefinidamente
                </p>
              </div>
              <span className="stamp text-[10px] shrink-0">verificado</span>
            </div>
            <dl className="divide-y divide-ash">
              {RECORD.rows.map(([k, v]) => {
                const num = numeric(v)
                return (
                  <div key={k} className="grid grid-cols-[130px_1fr] gap-4 py-2.5">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-ink/50 pt-0.5">{k}</dt>
                    <dd className="font-type text-[15px] text-ink/90">
                      {num ? (
                        <>
                          <CountUp to={num.n} decimals={num.dec} className="text-red-deep font-bold" />
                          {v.replace(/^[\d.,\s]+/, '')}
                        </>
                      ) : (
                        v
                      )}
                    </dd>
                  </div>
                )
              })}
            </dl>
            <p className="mt-6 font-mono text-[10px] text-ink/40">
              * fontes: LinkedIn /in/daniellucasfaraujo · GitHub daniellucasdev · as duas lojas de app
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
