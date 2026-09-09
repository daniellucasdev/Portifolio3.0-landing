import { TICKER } from '../data'

export default function Ticker() {
  const row = [...TICKER, ...TICKER]
  return (
    <div className="bg-red text-white border-b-4 border-ink overflow-hidden py-2.5 select-none" aria-hidden="true">
      <div className="ticker-track flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((t, i) => (
              <span key={`${half}-${i}`} className="font-mono text-xs md:text-sm font-bold tracking-[0.15em] uppercase flex items-center gap-8">
                {t}
                <span className="text-ink">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
