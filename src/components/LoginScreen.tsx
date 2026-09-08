import { useEffect, useRef, useState } from 'react'
import { sfx } from '../sfx'

/* Fallout-style login: type anything (hint: the classic "admin"),
   or wait for guest access. Validates like the game: any password
   from the "approved" list works, anything else = ACCESS DENIED. */
const APPROVED = ['admin', 'daniellucas', 'daniel', 'robcO'.toLowerCase(), 'vault13']

export default function LoginScreen({ onDone }: { onDone: () => void }) {
  const [value, setValue] = useState('')
  const [denied, setDenied] = useState<string | null>(null)
  const [granted, setGranted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    // guest access timer: 9s
    const t = setTimeout(() => {
      if (!granted) {
        setGranted(true)
        sfx.select()
        setTimeout(onDone, 900)
      }
    }, 9000)
    return () => clearTimeout(t)
  }, [onDone, granted])

  const submit = () => {
    if (APPROVED.includes(value.trim().toLowerCase())) {
      setGranted(true)
      sfx.select()
      setTimeout(onDone, 900)
    } else {
      setDenied(value)
      setValue('')
      sfx.error()
      setTimeout(() => setDenied(null), 2600)
    }
  }

  return (
    <div className="term-scroll h-full overflow-y-auto flex flex-col justify-center px-4 py-8 md:px-10 text-xl md:text-2xl glow">
      <pre className="ascii-box text-base md:text-lg mb-8">{`┌─────────────────────────────────────────────┐
│ ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL      │
└─────────────────────────────────────────────┘`}</pre>

      <p>WELCOME TO ROBCO INDUSTRIES (TM) TERMLINK</p>
      <p className="mt-2">FEDERATION LOGIN REQUIRED.</p>

      <form
        className="mt-8 flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <label htmlFor="pw" className="dim">PASSWORD&gt;</label>
        <input
          id="pw"
          ref={inputRef}
          type="text"
          autoComplete="off"
          spellCheck={false}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            sfx.type()
          }}
          className="flex-1 max-w-md bg-transparent border-none outline-none text-p placeholder:text-dimmer"
          placeholder="tente: admin"
          aria-label="Senha do terminal"
        />
        <button type="submit" className="kbd cursor-pointer bg-transparent">ENTER ↵</button>
      </form>

      {denied !== null && (
        <p className="mt-4 text-amber flicker-fast">ACCESS DENIED — FIM DE LINHA PARA "{denied}". TENTE NOVAMENTE.</p>
      )}

      {granted ? (
        <p className="mt-6 line-in">ACESSO CONCEDIDO&gt; INICIANDO INTERFACE...<span className="cursor-block" /></p>
      ) : (
        <p className="mt-6 dim text-base">
          [ DICA: A SENHA PADRAO DE TODO BOM TERMINAL ]&nbsp;&nbsp;·&nbsp;&nbsp;[ ACESSO DE CONVIDADO EM 9s ]
        </p>
      )}
    </div>
  )
}
