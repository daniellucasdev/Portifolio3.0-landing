import { useEffect, useState } from 'react'
import { StreamLines } from './ScreenShell'
import { PROJECTS } from '../data'
import { sfx } from '../sfx'

type Stars = Record<string, number>

/* live stars from the GitHub API */
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

export default function ProjectsScreen({ onOpenHolo }: { onOpenHolo: () => void }) {
  const stars = useLiveStars()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      <p className="dim mb-2">HOLO-ARQUIVOS DO OPERADOR — 8 ENTRADAS:</p>
      <p className="dimmer text-base mb-4">[ +/- PARA EXPANDIR ]  [ ABRA ProjetoBOT PARA O HOLOGRAMA 3D ]</p>
      <div className="space-y-5">
        {PROJECTS.map((p, i) => {
          const st = p.repo in stars ? stars[p.repo] : p.stars
          return (
            <div key={p.name}>
              <button
                onClick={() => {
                  if (p.clickAction === 'holo') {
                    onOpenHolo()
                    return
                  }
                  setOpen(open === i ? null : i)
                  sfx.key()
                }}
                className="opt block w-full text-left"
              >
                <span className="opt-label inline-block px-1">
                  {open === i ? '[-]' : '[+]'} {String(i + 1).padStart(2, '0')} — {p.name.toUpperCase()}
                </span>
                <span className="ml-3 text-base dim">★{st} · {p.lang}</span>
              </button>
              {open === i && (
                <div className="mt-2 ml-4 border-l border-[#0a6e2f] pl-4 text-base md:text-lg">
                  <StreamLines lines={[p.desc]} />
                  <p className="mt-2">
                    <a className="tlink" href={`https://github.com/daniellucasdev/${p.repo}`} target="_blank" rel="noopener">
                      VER CODIGO →
                    </a>
                    {p.live && (
                      <>
                        {'  ·  '}
                        <a className="tlink" href={p.live} target="_blank" rel="noopener">
                          ACESSO AO LIVE →
                        </a>
                      </>
                    )}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <p className="mt-8 dim text-base">
        ↳ TODOS OS ARQUIVOS EM GITHUB.COM/DANIELLUCASDEV — 27 REPOS PUBLICOS.
      </p>
    </div>
  )
}
