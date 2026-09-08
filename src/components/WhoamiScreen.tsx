import { StreamLines } from './ScreenShell'
import { WHOAMI } from '../data'

export default function WhoamiScreen() {
  return (
    <div className="space-y-0">
      <StreamLines lines={WHOAMI} />
      <div className="mt-8 flex items-center gap-4">
        <img
          src="https://github.com/daniellucasdev.png"
          alt="Foto do operador Daniel Lucas"
          width={96}
          height={96}
          className="w-24 h-24 border border-[#0a6e2f]"
          style={{ imageRendering: 'pixelated', filter: 'grayscale(1) contrast(1.35) brightness(1.1) sepia(1) hue-rotate(70deg) saturate(2.4)' }}
        />
        <div className="text-base dim">
          <p>FOTO DO OPERADOR — IDENTIFICACAO BIOMETRICA</p>
          <p className="dimmer">github.com/daniellucasdev.png</p>
        </div>
      </div>
    </div>
  )
}
