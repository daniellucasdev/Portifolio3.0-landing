const WORDS = [
  'de ponta a ponta',
  'vue · nuxt · typescript',
  'php · laravel · node',
  'apps nas lojas',
  'segurança no fluxo',
  'educação gratuita pra todo mundo',
]

export default function Marquee() {
  const row = [...WORDS, ...WORDS]
  return (
    <div className="border-b border-line bg-ink text-paper overflow-hidden py-4 select-none" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {row.map((w, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10">
                <span className="mega text-xl md:text-2xl tracking-tight">{w}</span>
                <span className="text-blue text-lg">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
