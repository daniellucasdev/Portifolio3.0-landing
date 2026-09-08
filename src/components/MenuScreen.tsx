import { useEffect, useRef, useState } from 'react'
import { MENU } from '../data'
import { sfx } from '../sfx'
import type { ScreenId } from '../App'

/* The main RobCo menu — arrow keys / 1-5 / click. This is the hub. */
export default function MenuScreen({
  onSelect,
  audioOn,
}: {
  onSelect: (id: ScreenId) => void
  audioOn: boolean
}) {
  const [sel, setSel] = useState(0)
  const [clock, setClock] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tick = () => {
      setClock(
        new Intl.DateTimeFormat('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(new Date()),
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '5') {
        const i = Number(e.key) - 1
        setSel(i)
        sfx.key()
        onSelect(MENU[i].cmd as ScreenId)
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        setSel((s) => (s + (e.key === 'ArrowDown' ? 1 : MENU.length - 1)) % MENU.length)
        sfx.type()
      } else if (e.key === 'Enter') {
        sfx.select()
        onSelect(MENU[sel].cmd as ScreenId)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sel, onSelect])

  return (
    <div className="term-scroll h-full overflow-y-auto px-4 py-6 md:px-10 md:py-10 text-lg md:text-xl glow">
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#0a6e2f] pb-3">
        <p>ROBCO INDUSTRIES — TERMLINK MK III</p>
        <p className="dim text-base">SERVIDOR 6 // {clock} BRT</p>
      </header>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4">SELECIONE UMA OPCAO:</p>
          <div ref={listRef} role="listbox" aria-label="Menu principal">
            {MENU.map((m, i) => (
              <button
                key={m.cmd}
                role="option"
                aria-selected={sel === i}
                onClick={() => { setSel(i); onSelect(m.cmd as ScreenId) }}
                onMouseEnter={() => { setSel(i); sfx.type() }}
                className={`opt block w-full text-left py-1.5 px-2 -mx-2 leading-snug ${sel === i ? 'selected' : ''}`}
              >
                <span className="opt-label inline-block">
                  {m.key}&gt; {m.label}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-8 dim text-base">
            [ SETAS ↑↓ + ENTER ]&nbsp;&nbsp;[ TECLAS 1-5 ]&nbsp;&nbsp;[ CLIQUE ]&nbsp;&nbsp;—&nbsp;&nbsp;{audioOn ? 'AUDIO: ON' : 'AUDIO: AGUARDANDO INTERACAO'}
          </p>
        </div>

        <aside className="lg:border-l lg:border-[#0a6e2f] lg:pl-10">
          <p className="dim">TL;DR PARA RECRUTADORES:</p>
          <div className="mt-3 space-y-2 text-base md:text-lg">
            <p>▸ Engenheiro de Software e Seguranca — 5 anos de XP</p>
            <p>▸ 2 apps publicados (App Store + Play Store)</p>
            <p>▸ Vue · Nuxt · TypeScript · PHP/Laravel · Node</p>
            <p>▸ App end-to-end em 2 meses; entregas 4→7/dia (SDD)</p>
            <p>▸ Lighthouse 38→94 · economia de 3,3% no TPV</p>
            <p>▸ Governador Valadares/MG · remoto · ingles C2</p>
          </div>
          <p className="mt-6 dimmer text-sm">
            O operador responde rapido. Nao deixe outra vault contratar primeiro.
          </p>
        </aside>
      </div>
    </div>
  )
}
