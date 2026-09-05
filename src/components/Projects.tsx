import { useEffect, useState } from 'react'
import { PROJECTS, type Repo } from '../data'

/* live stars from GitHub API; falls back to static snapshot */
function useLiveStars() {
  const [stars, setStars] = useState<Record<string, number>>({})
  useEffect(() => {
    let cancelled = false
    fetch('https://api.github.com/users/daniellucasdev/repos?per_page=100')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((repos: { name: string; stargazers_count: number }[]) => {
        if (cancelled) return
        const map: Record<string, number> = {}
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

export default function Projects() {
  const stars = useLiveStars()
  const starOf = (r: Repo) => (r.name in stars ? stars[r.name] : (r.stars ?? 0))

  return (
    <section id="projetos" className="border-b border-line bg-ink text-paper dark-zone">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
        <div className="flex items-baseline gap-4 mb-6 md:mb-8">
          <span className="font-mono text-xs text-gwerk">02</span>
          <h2 className="mega text-4xl md:text-6xl">Projetos</h2>
        </div>
        <p className="max-w-2xl text-paper/60 text-[15px] leading-relaxed mb-14 md:mb-20">
          Coisas que construí e mantive — no trabalho e por vontade própria. Stars atualizadas
          direto da API do GitHub.
        </p>

        <div className="border-t border-night-line">
          {PROJECTS.map((r) => (
            <a
              key={r.name}
              href={r.live || r.url}
              target="_blank"
              rel="noopener"
              className="row-link group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-night-line py-6 md:py-7 px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-paper/30 group-hover:text-gwerk transition-colors w-8 shrink-0">
                  {String(PROJECTS.indexOf(r) + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl md:text-4xl font-extrabold tracking-tight group-hover:translate-x-2 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}>
                  {r.name}
                </span>
                {r.live && (
                  <span className="hidden md:inline font-mono text-[10px] uppercase tracking-widest text-gwerk border border-gwerk/40 px-2 py-0.5">
                    live
                  </span>
                )}
                <span className="row-meta font-mono text-xs text-paper/40 md:ml-auto">
                  {r.lang}
                </span>
                <span className="row-meta font-mono text-xs text-paper/40 flex items-center gap-1">
                  ★ {starOf(r)}
                </span>
                <span className="font-mono text-paper/40 group-hover:text-gwerk group-hover:translate-x-1 transition-all" aria-hidden="true">→</span>
              </span>
              <p className="col-start-2 md:col-start-1 md:ml-12 text-sm text-paper/55 leading-relaxed max-w-2xl group-hover:text-paper/85 transition-colors">
                {r.desc}
              </p>
            </a>
          ))}
        </div>
        <p className="mt-8 font-mono text-xs text-paper/40">
          ↳ tudo em github.com/daniellucasdev — 27 repos públicos, de Java a LOLCODE.
        </p>
      </div>
    </section>
  )
}
