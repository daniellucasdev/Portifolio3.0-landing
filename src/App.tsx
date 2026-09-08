import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import BootScreen from './components/BootScreen'
import LoginScreen from './components/LoginScreen'
import MenuScreen from './components/MenuScreen'
import ScreenRouter from './components/ScreenRouter'
import { sfx } from './sfx'

/* three.js only downloads when the hologram actually opens */
const Hologram = lazy(() => import('./components/Hologram'))

export type Phase = 'boot' | 'login' | 'menu' | 'screen'
export type ScreenId = 'whoami' | 'experiencia' | 'projetos' | 'skills' | 'contato'

export default function App() {
  const [phase, setPhase] = useState<Phase>('boot')
  const [screen, setScreen] = useState<ScreenId | null>(null)
  const [holoOpen, setHoloOpen] = useState(false)
  const [audioOn, setAudioOn] = useState(false)
  const audioUnlocked = useRef(false)

  /* first user gesture unlocks WebAudio (autoplay policy) */
  useEffect(() => {
    const unlock = () => {
      if (audioUnlocked.current) return
      audioUnlocked.current = true
      setAudioOn(true)
      sfx.hum()
    }
    window.addEventListener('pointerdown', unlock, { once: true })
    window.addEventListener('keydown', unlock, { once: true })
    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }
  }, [])

  const go = useCallback(
    (id: ScreenId) => {
      sfx.select()
      setScreen(id)
      setPhase('screen')
    },
    [],
  )

  const backToMenu = useCallback(() => {
    sfx.back()
    setScreen(null)
    setPhase('menu')
  }, [])

  /* global keyboard: ESC always returns */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (holoOpen) setHoloOpen(false)
        else if (phase === 'screen') backToMenu()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, holoOpen, backToMenu])

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#020603]">
      {/* CRT layers */}
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="crt-beam" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
      <div className="crt-edge" aria-hidden="true" />

      <div className="relative z-10 h-full w-full flex flex-col">
        {phase === 'boot' && <BootScreen onDone={() => setPhase('login')} />}
        {phase === 'login' && <LoginScreen onDone={() => { setPhase('menu'); sfx.select() }} />}
        {phase === 'menu' && <MenuScreen onSelect={go} audioOn={audioOn} />}
        {phase === 'screen' && screen && (
          <ScreenRouter id={screen} onBack={backToMenu} onOpenHolo={() => setHoloOpen(true)} />
        )}
      </div>

      {holoOpen && (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020603]/95 text-xl glow">
              CARREGANDO HOLO-FITA<span className="cursor-block" />
            </div>
          }
        >
          <Hologram onClose={() => { sfx.back(); setHoloOpen(false) }} />
        </Suspense>
      )}
    </div>
  )
}
