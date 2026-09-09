import { CONTACT } from '../data'

export default function Footer() {
  return (
    <footer className="bg-red text-white">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10 pt-16 md:pt-24 pb-10">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/70 mb-6">
          última faixa — bônus escondido
        </p>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener" className="group block mb-12">
          <span className="mosh block text-[13vw] md:text-[9vw] leading-[0.85] group-hover:text-ink transition-colors duration-300">
            BORA
            <br />
            TOCAR
            <br />
            JUNTOS<span className="text-ink">↗</span>
          </span>
        </a>

        <div className="grid gap-6 md:grid-cols-3 border-t-2 border-ink/30 pt-8 font-mono text-xs">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a className="underline-offset-4 hover:underline" href={CONTACT.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
            <a className="underline-offset-4 hover:underline" href={CONTACT.github} target="_blank" rel="noopener">GitHub ↗</a>
            <a className="underline-offset-4 hover:underline" href={CONTACT.old} target="_blank" rel="noopener">v2 (2024) ↗</a>
          </div>
          <p className="text-white/60 md:text-center">
            Feito à mão em React 19 · Three.js · Tailwind 4<br />
            sem template, sem medo, sem foto de banco de imagens
          </p>
 <p className="text-white/60 md:text-right">
            © {new Date().getFullYear()} Daniel Lucas F. de Araújo<br />
            Gov. Valadares, MG — remoto
          </p>
        </div>
      </div>
     </footer>
  )
}
