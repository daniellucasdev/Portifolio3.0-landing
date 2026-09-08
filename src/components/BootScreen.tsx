import { useEffect, useState } from 'react'
import { BOOT_LINES } from '../data'
import { sfx } from '../sfx'
import { useAutoScroll } from '../hooks'

const MEM_CHECKS = [
  'ROBCO BIOS v4.02.08 — OK',
  'VAULT-TEC OS v7.4.0.3 — OK',
  'HOLO-TAPE DRIVE A: — OK',
  'SERVIDOR 6 // DANIEL LUCAS — ONLINE',
  'CRT PHOSPHOR LAYER — 98%',
  'MODULO DE SEGURANCA — ATIVO',
]

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const [skipped, setSkipped] = useState(false)
  const scrollRef = useAutoScroll<HTMLDivElement>(lines.length + progress)

  useEffect(() => {
    if (skipped) return
    const timers: ReturnType<typeof setTimeout>[] = []
    let t = 200
    BOOT_LINES.forEach((l) => {
      timers.push(setTimeout(() => { setLines((p) => [...p, l]); sfx.type() }, t))
      t += 140
    })
    MEM_CHECKS.forEach((l) => {
      timers.push(setTimeout(() => { setLines((p) => [...p, '  > ' + l]); sfx.key() }, t))
      t += 190
    })
    const iv = setInterval(() => setProgress((p) => Math.min(100, p + Math.ceil(Math.random() * 7))), 90)
    timers.push(setTimeout(() => {
      clearInterval(iv)
      setProgress(100)
      setLines((p) => [...p, '', 'CARREGANDO PERFIL DO OPERADOR... '])
    }, t))
    timers.push(setTimeout(onDone, t + 650))
    return () => { timers.forEach(clearTimeout); clearInterval(iv) }
  }, [onDone, skipped])

  const skip = () => {
    if (skipped) return
    setSkipped(true)
    sfx.select()
    onDone()
  }

  return (
    <div
      ref={scrollRef}
      className="term-scroll h-full overflow-y-auto px-4 py-6 md:px-10 md:py-10 text-lg md:text-xl glow flicker"
      onClick={skip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && skip()}
      aria-label="Boot do terminal — clique para pular"
    >
      {lines.map((l, i) => (
        <p key={i} className="line-in whitespace-pre">{l}</p>
      ))}
      {progress > 0 && (
        <div className="mt-4">
          <div className="boot-bar h-3 w-64 max-w-full" style={{ width: `${Math.min(100, progress)}%`, backgroundImage: undefined }} />
          <p className="mt-1 dim">{progress < 100 ? `${progress}%` : '100% — OK'}</p>
        </div>
      )}
      <p className="mt-6 dimmer text-base">
        [ CLIQUE / ENTER PARA PULAR ]
      </p>
    </div>
  )
}
