import ScreenShell from './ScreenShell'
import WhoamiScreen from './WhoamiScreen'
import ExperienceScreen from './ExperienceScreen'
import ProjectsScreen from './ProjectsScreen'
import SkillsScreen from './SkillsScreen'
import ContactScreen from './ContactScreen'
import type { ScreenId } from '../App'

export default function ScreenRouter({
  id,
  onBack,
  onOpenHolo,
}: {
  id: ScreenId
  onBack: () => void
  onOpenHolo: () => void
}) {
  const titles: Record<ScreenId, string> = {
    whoami: 'WHOAMI — REGISTRO DO OPERADOR',
    experiencia: 'REGISTROS DE SERVICO — 2072-2076',
    projetos: 'ARQUIVOS DE PROJETOS — GITHUB',
    skills: 'PROTOCOLOS — STACK',
    contato: 'TRANSMISSAO — CONTATO',
  }

  return (
    <ScreenShell title={titles[id]} onBack={onBack}>
      {id === 'whoami' && <WhoamiScreen />}
      {id === 'experiencia' && <ExperienceScreen />}
      {id === 'projetos' && <ProjectsScreen onOpenHolo={onOpenHolo} />}
      {id === 'skills' && <SkillsScreen />}
      {id === 'contato' && <ContactScreen />}
    </ScreenShell>
  )
}
