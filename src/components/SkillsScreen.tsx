import { SKILLS, EDUCATION } from '../data'

export default function SkillsScreen() {
  return (
    <div className="space-y-10">
      {(Object.keys(SKILLS) as (keyof typeof SKILLS)[]).map((group) => (
        <section key={group}>
          <p className="border-b border-[#0a6e2f] pb-1 mb-3">{group}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {SKILLS[group].map((s) => (
              <span key={s}>[{s}]</span>
            ))}
          </div>
        </section>
      ))}

      <section>
        <p className="border-b border-[#0a6e2f] pb-1 mb-3">TREINAMENTO VAULT-TEC</p>
        {EDUCATION.map((e) => (
          <div key={e.title} className="mb-4">
            <p>{e.title}</p>
            <p className="dim text-base">{e.place}</p>
            {e.notes.map((n) => (
              <p key={n} className="dim text-base">  — {n}</p>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}
