import { StreamLines } from './ScreenShell'
import { CONTACT } from '../data'

export default function ContactScreen() {
  return (
    <div>
      <StreamLines lines={CONTACT} />
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          className="tlink text-xl"
          href="https://www.linkedin.com/in/daniellucasfaraujo/"
          target="_blank"
          rel="noopener"
        >
          [ ABRIR LINKEDIN → ]
        </a>
        <a
          className="tlink text-xl"
          href="https://github.com/daniellucasdev"
          target="_blank"
          rel="noopener"
        >
          [ ABRIR GITHUB → ]
        </a>
      </div>
      <p className="mt-10 dimmer text-sm">
        ESTA TRANSMISSAO FOI FEITA COM REACT 19 · VITE 7 · TAILWIND 4 · THREE.JS · WEB AUDIO.
        NENHUM NUKA-COLA FOI GASTA.
      </p>
    </div>
  )
}
