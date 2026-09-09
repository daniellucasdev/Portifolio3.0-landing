import { useMemo, useState } from 'react'
import { SKILLS, RINGS, type SkillNode } from '../data'

/* ————— Skill radar —————
   Analog radar: 3 rings from mainstream (center) to underground (edge).
   A needle sweeps; hovering/focusing a skill points the needle at it and
   freezes the sweep. Ordered: least niche (ring 0) → most niche (ring 2). */

const SIZE = 560
const C = SIZE / 2
const RING_R = [70, 155, 245]
const RING_COLORS = ['#f4f1ea', '#c9c4b5', '#e10600']

type Placed = SkillNode & { x: number; y: number; angle: number }

export default function SkillRadar() {
  const [active, setActive] = useState<Placed | null>(null)
  const [frozen, setFrozen] = useState(false)

  const placed = useMemo<Placed[]>(() => {
    return SKILLS.map((s) => {
      const inRing = SKILLS.filter((x) => x.ring === s.ring)
      const idx = inRing.indexOf(s)
      const spread = inRing.length
      // offset per-ring so labels don't align radially
      const base = s.ring === 0 ? -Math.PI / 2 : s.ring === 1 ? -Math.PI / 2 + 0.35 : -Math.PI / 2 + 0.75
      const angle = base + (idx / spread) * Math.PI * 2
      const r = RING_R[s.ring]
      return { ...s, x: C + Math.cos(angle) * r, y: C + Math.sin(angle) * r, angle }
    })
  }, [])

  const activeAngle = active ? Math.atan2(active.y - C, active.x - C) * (180 / Math.PI) + 90 : 0

  return (
    <section aria-labelledby="radar-h" className="border-b-4 border-red bg-ink relative overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-red mb-4">03 / som</p>
            <h2 id="radar-h" className="mosh text-5xl md:text-7xl">Radar</h2>
          </div>
          <p className="font-mono text-xs text-paper/50 max-w-xs leading-relaxed">
            Do mains streams ao underground: centro = o que uso todo dia.
            Borda = nicho, e é onde a coisa fica divertida. Passa o mouse.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px] items-center">
          <div className="relative mx-auto w-full max-w-[560px]">
            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="w-full h-auto"
              role="img"
              aria-label="Círculo de habilidades ordenadas do menos nichado (centro) ao mais nichado (borda)"
              onMouseLeave={() => setFrozen(false)}
            >
              {/* rings */}
              {RING_R.map((r, i) => (
                <circle key={i} cx={C} cy={C} r={r} fill="none" stroke="#2a2a2a" strokeWidth="1.5" />
              ))}
              {/* ring labels */}
              {RINGS.map((ring, i) => {
                const y = C - RING_R[i] + 18
                return (
                  <text key={ring.id} x={C} y={y} textAnchor="middle" className="fill-paper/35 font-mono" fontSize="10" letterSpacing="2">
                    {ring.label}
                  </text>
                )
              })}
              {/* cross hairs */}
              <line x1={C} y1={C - RING_R[2] - 16} x2={C} y2={C + RING_R[2] + 16} stroke="#2a2a2a" />
              <line x1={C - RING_R[2] - 16} y1={C} x2={C + RING_R[2] + 16} y2={C} stroke="#2a2a2a" />

              {/* sweep gradient wedge */}
              <defs>
                <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#e10600" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#e10600" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* sweep wedge — only this group rotates; labels stay put */}
              <g
                className="radar-sweep"
                style={{
                  transformOrigin: `${C}px ${C}px`,
                  animationPlayState: frozen ? 'paused' : 'running',
                }}
              >
                <path d={`M ${C} ${C} L ${C} ${C - RING_R[2]} A ${RING_R[2]} ${RING_R[2]} 0 0 1 ${C + RING_R[2] * Math.sin(Math.PI / 4)} ${C - RING_R[2] * Math.cos(Math.PI / 4)} Z`} fill="url(#sweep)" />
              </g>

              {/* needle */}
              <g
                className="radar-needle"
                style={{ transform: `rotate(${active ? activeAngle : 0}deg)`, transformOrigin: `${C}px ${C}px` }}
              >
                <line x1={C} y1={C} x2={C} y2={C - RING_R[2] - 10} stroke="#e10600" strokeWidth="2.5" />
                <circle cx={C} cy={C - RING_R[2] - 10} r="4" fill="#e10600" />
              </g>
              <circle cx={C} cy={C} r="6" fill="#e10600" />

              {/* skills */}
              {placed.map((s) => (
                <g
                  key={s.name}
                  className="skill-node"
                  tabIndex={0}
                  role="button"
                  aria-label={`${s.name}: ${s.note}`}
                  onMouseEnter={() => { setActive(s); setFrozen(true) }}
                  onFocus={() => { setActive(s); setFrozen(true) }}
                  onBlur={() => setFrozen(false)}
                >
                  <circle cx={s.x} cy={s.y} r={active?.name === s.name ? 7 : 4.5} fill={RING_COLORS[s.ring]} className="transition-all" />
                  <text
                    x={s.x + (s.x > C ? 10 : -10)}
                    y={s.y + 4}
                    textAnchor={s.x > C ? 'start' : 'end'}
                    fontSize="12.5"
                    className="fill-paper/80 font-mono pointer-events-none"
                  >
                    {s.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* readout panel */}
          <aside className="zine-card-dark p-6 md:p-7 border-2 border-red/60">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">
              leitura do radar
            </p>
            {active ? (
              <div>
                <p className="mosh text-3xl mb-1">{active.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40 mb-4">
                  faixa: {RINGS[active.ring].label} — {RINGS[active.ring].sub}
                </p>
                <p className="font-type text-[15px] text-paper/80 leading-relaxed">{active.note}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-type text-[15px] text-paper/75 leading-relaxed">
                  Agulha varrendo. Toque em qualquer habilidade pra fixar
                  a leitura — teclado também funciona (Tab + Enter).
                </p>
                <ul className="space-y-2.5">
                  {RINGS.map((r) => (
                    <li key={r.id} className="font-mono text-xs text-paper/55">
                      <span className={r.id === 2 ? 'text-red font-bold' : 'text-paper'}>{r.label}</span>
                      {' — '}{r.sub}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
