import { useEffect, useState } from 'react'
import { StreamLines } from './ScreenShell'
import { XP_RECORDS } from '../data'
import { sfx } from '../sfx'

export default function ExperienceScreen() {
  const [open, setOpen] = useState<number | null>(0)
  const [openedOnce, setOpenedOnce] = useState(false)

  useEffect(() => {
    if (!openedOnce) {
      setOpenedOnce(true)
    }
  }, [openedOnce])

  return (
    <div>
      <p className="dim mb-4">SELECIONE UM REGISTRO PARA EXPANDIR:</p>
      <div className="space-y-6">
        {XP_RECORDS.map((r, i) => (
          <div key={r.header}>
            <button
              onClick={() => { setOpen(open === i ? null : i); sfx.key() }}
              className="opt block w-full text-left"
            >
              <span className="opt-label inline-block px-1">{open === i ? '[-]' : '[+]'} {r.header} — {r.org}</span>
            </button>
            {open === i && (
              <div className="mt-2 ml-4 border-l border-[#0a6e2f] pl-4">
                <StreamLines
                  lines={[`CARGO: ${r.role}`, `CONTEXTO: ${r.meta}`, '', ...r.lines]}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
