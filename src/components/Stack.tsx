import { STACK } from '../data'

export default function Stack() {
  return (
    <section id="stack" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
        <div className="flex items-baseline gap-4 mb-14 md:mb-20">
          <span className="font-mono text-xs text-blue">04</span>
          <h2 className="mega text-4xl md:text-6xl">Stack</h2>
          <span className="hidden md:block flex-1 h-px bg-line ml-6" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(STACK) as (keyof typeof STACK)[]).map((group) => (
            <div key={group}>
              <h3 className="eyebrow text-ink-2 mb-5 border-b border-line pb-3">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {STACK[group].map((t) => (
                  <li
                    key={t}
                    className="font-mono text-xs border border-line px-3 py-1.5 hover:border-blue hover:text-blue transition-colors cursor-default"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
