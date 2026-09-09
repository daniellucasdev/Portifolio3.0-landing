import { useEffect, useState } from 'react'
import { DEMOS } from '../data'

type Stars = Record<string, number>

function useLiveStars() {
  const [stars, setStars] = useState<Stars>({})
  useEffect(() => {
    let cancelled = false
    fetch('https://api.github.com/users/daniellucasdev/repos?per_page=100')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((repos: { name: string; stargazers_count: number }[]) => {
        if (cancelled) return
        const map: Stars = {}
        for (const r of repos) map[r.name] = r.stargazers_count
        setStars(map)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])
  return stars
}

/* Demos as demo-tape cards: rotated, taped, stamped. */
export default function Demos() {
  const stars = useLiveStars()
  const repoStars = (link: string | null) => {
    if (!link) return null
    const m = link.match(/github\.com\/daniellucasdev\/([^/]+)/)
    return m && m[1] in stars ? stars[m[1]] : null
  }

  return (
    <section aria-labelledby="demos-h" className="border-b-4 border-red bg-ink">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-red mb-4">04 / demos</p>
            <h2 id="demos-h" className="mosh text-5xl md:text-7xl">Demos</h2>
          </div>
          <p className="font-mono text-xs text-paper/50 max-w-xs leading-relaxed">
            Fita cassete da carreira: apps, OSS, hardware e uma calculadora de gatos.
            Stars ao vivo da API do GitHub.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DEMOS.map((d, i) => {
            const st = repoStars(d.link)
            const Card = (
              <article
                className={`zine-card p-6 md:p-7 h-full flex flex-col ${i % 3 === 0 ? 'md:rotate-[-1deg]' : i % 3 === 1 ? 'md:rotate-[0.8deg]' : ''}`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">{d.tag}</p>
                  <p className="font-type text-sm text-red-deep">{d.year}</p>
                </div>
                <h3 className="mosh text-3xl text-ink mb-3">{d.name}</h3>
                <p className="font-type text-[14px] leading-relaxed text-ink/75 flex-1">{d.desc}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="stamp text-[9px]">{d.stamp}</span>
                  {st !== null && (
                    <span className="font-mono text-[11px] text-ink/50">★ {st}</span>
                  )}
                </div>
              </article>
            )
            return d.link ? (
              <a key={d.name} href={d.link} target="_blank" rel="noopener" className="block hover:-translate-y-1 transition-transform">
                {Card}
              </a>
            ) : (
              <div key={d.name}>{Card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
