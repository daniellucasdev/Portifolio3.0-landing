import { lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Record from './components/Record'
import Gigs from './components/Gigs'
import SkillRadar from './components/SkillRadar'
import Demos from './components/Demos'
import CyberSection from './components/CyberSection'
import SideB from './components/SideB'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

/* the wireframe robot only downloads when its section is near */
const Robot = lazy(() => import('./components/Robot'))

export default function App() {
  return (
    <div className="grain">
      <Cursor />
      <Hero />
      <Ticker />
      <Record />
      <Gigs />
      <SkillRadar />
      <Demos />
      <CyberSection>
        <Suspense fallback={<div className="h-[420px] grid place-items-center font-mono text-paper/40">carregando o robô…</div>}>
          <Robot />
        </Suspense>
      </CyberSection>
      <SideB />
      <Footer />
    </div>
  )
}
