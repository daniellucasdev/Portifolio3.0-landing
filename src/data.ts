/* ————————————————————————————————
   CONTEÚDO — extraído de LinkedIn + GitHub (2026)
   ———————————————————————————————— */

export const TICKER = [
  'ENG. DE SOFTWARE × 5 ANOS',
  '4 APPS NAS LOJAS',
  'CYBER SECURITY',
  'ROBÓTICA / RASPBERRY PI',
  'VUE · NUXT · TS · LARAVEL',
  'DUNGEON DESK',
  'SDD 4→7 ENTREGAS/DIA',
  'EDUCAÇÃO GRATUITA',
]

export const MANIFESTO = [
  'Meu portfólio anterior era um terminal do Fallout.',
  'Antes dele, um editorial suíço. Eu gosto de quebrar o padrão —',
  'mas o código que eu escrevo não quebra: app publicado em 2 meses,',
  'auditoria que economizou 3,3% de uma plataforma de TPV milionário,',
  'Lighthouse de 38 pra 94. Design punk, entrega enterprise.',
]

export const RECORD = {
  title: 'DOCUMENTO VERIFICADO',
  rows: [
    ['FUNÇÃO', 'Engenheiro de Software e Segurança'],
    ['EXPERIÊNCIA', '5 anos · 2 meses'],
    ['APPS PUBLICADOS', '4 (App Store + Play Store)'],
    ['ATUAL', 'Consultoria financeira · 22 países'],
    ['STACK NÚCLEO', 'Vue · Nuxt · TypeScript · Laravel · Node'],
    ['IDIOMAS', 'PT nativo · EN nativo-bilíngue · DE profissional'],
    ['BASE', 'Governador Valadares, MG — remoto'],
  ],
}

export const GIGS = [
  {
    venue: 'CONSULTORIA FINANCEIRA',
    city: 'remoto · 22 países',
    period: '2026 — AGORA',
    role: 'Eng. de Software e Segurança',
    tracks: [
      'Engenharia + segurança aplicada em produtos financeiros',
      'Cyber security embutida no fluxo de desenvolvimento',
    ],
  },
  {
    venue: 'PAGAH',
    city: 'checkout + pagamentos em escala',
    period: '2026',
    role: 'Eng. de Software',
    tracks: [
      'App da empresa de ponta a ponta em 2 meses — DUNS, Auth, APIs, push, lojas',
      'Fluxo SDD: entregas diárias de 4 → 7',
      'Área de Cursos completa: admin + aluno, loading 5s → 1s',
      'Auditoria: bug de saque com juros → 3,3% de economia no TPV',
    ],
  },
  {
    venue: 'BRAIP',
    city: 'marketplace · 6 produtos · +20 comerciais',
    period: '2022 — 2026',
    role: 'Front-End → Mid-Level (Pleno)',
    tracks: [
      'Líder do app BraipV2: squad, desenvolvimento, publicação nas lojas',
      'Marketplace do zero ao pós-lançamento · Lighthouse 38 → 94',
      'Liderança de sprints, revisão de PRs, i18n liderando equipes',
      'Onboarding de trainees · tradução internacional em eventos',
    ],
  },
  {
    venue: 'WASTELAND FREELANCE',
    city: 'clientes no Brasil e fora',
    period: '2022 — 2024',
    role: 'Full-Stack',
    tracks: [
      'Reino 2.0 — marca de livro na Bienal (500 mil pessoas)',
      'Darksteel — negócio de mineração em MMO',
      'Bot de Discord + API de arte generativa · i18n de faturas',
    ],
  },
]

export const DEMOS = [
  {
    name: 'Dungeon Desk',
    year: "'26",
    tag: 'APP · IA · SDD',
    desc: 'App independente pra sessões de D&D com IA: gera NPCs, one-shots, locais e itens com engenharia de prompt. Deve tá rolando dado agora em alguma mesa.',
    link: 'https://www.dungeondesk.com.br/',
    stamp: 'INDIE',
  },
  {
    name: 'Pagah App',
    year: "'26",
    tag: 'FINTECH · MOBILE',
    desc: 'App da plataforma financeira Pagah, do certificado DUNS à publicação. Painel do usuário, valores, perfil, notificações.',
    link: null,
    stamp: '2 MESES',
  },
  {
    name: 'BraipV2 + Logg',
    year: "'25",
    tag: 'MOBILE · SQUAD LEAD',
    desc: 'App da plataforma Braip + app de logística com mapeamento de rotas e scan de etiquetas por câmera/QR. Montei o squad, publiquei nas lojas.',
    link: null,
    stamp: '2 APPS',
  },
  {
    name: 'BigBotUI',
    year: 'OSS',
    tag: 'VUE 3 · NPM · LÍDER',
    desc: 'Lib open-source de componentes Vue 3. Subi o repositório inicial, publiquei no NPM e lidero curadores e revisões.',
    link: 'https://www.npmjs.com/',
    stamp: 'OPEN SOURCE',
  },
  {
    name: 'ProjetoBOT',
    year: "'25",
    tag: 'C++ · RASPBERRY PI · GEMINI',
    desc: 'Robô físico em Raspberry Pi conectado à API do Gemini com TTS em nuvem. Pergunta aí — ele responde em tempo real.',
    link: 'https://github.com/daniellucasdev/ProjetoBOT',
    stamp: 'HARDWARE',
  },
  {
    name: '404 — o fórum',
    year: "'25",
    tag: 'NEXT · POSTGRES · NODE',
    desc: 'Fórum fullstack com posts e contas. A educação gratuita em forma de software — meu lema compila.',
    link: 'https://github.com/daniellucasdev/404',
    stamp: 'WIP',
  },
  {
    name: 'Reino 2.0',
    year: "'24",
    tag: 'E-COMMERCE · FANTASIA',
    desc: 'Site-marca de livro de fantasia na Bienal do Livro (500 mil visitantes). Merchan + livro, atmosfera vintage.',
    link: 'https://www.livroreino.com',
    stamp: 'BIENAL',
  },
  {
    name: 'calc-cat',
    year: "'24",
    tag: 'LOLCODE',
    desc: 'Calculadora em LOLCODE — C misturado com memes de gatos. Porque memória muscular também merece diversão.',
    link: 'https://github.com/daniellucasdev/calc-cat',
    stamp: 'ESOLANG',
  },
]

/* ——— Círculo de habilidades: do amplamente usado ao underground ——— */
export type SkillNode = { name: string; note: string; ring: 0 | 1 | 2 }

export const RINGS = [
  { id: 0, label: 'NÚCLEO', sub: 'todo dia, em tudo' },
  { id: 1, label: 'PISTA', sub: 'domínio de estrada' },
  { id: 2, label: 'UNDERGROUND', sub: 'nicho — e é aqui que é divertido' },
]

export const SKILLS: SkillNode[] = [
  // ring 0 — mainstream
  { name: 'JavaScript', note: 'onde tudo começou em 2022', ring: 0 },
  { name: 'HTML/CSS', note: 'handmade, sem medo do cascade', ring: 0 },
  { name: 'TypeScript', note: 'tipos salvam vidas à noite', ring: 0 },
  { name: 'Git', note: 'commits pequenos, consciência limpa', ring: 0 },
  // ring 1 — solid mid
  { name: 'Vue', note: 'meu campista elétrico', ring: 1 },
  { name: 'Nuxt', note: 'SSR sem drama', ring: 1 },
  { name: 'React', note: 'este site aqui é prova', ring: 1 },
  { name: 'Node.js', note: 'APIs que pagam boleto', ring: 1 },
  { name: 'Laravel/PHP', note: 'artisan das cavernas', ring: 1 },
  { name: 'PostgreSQL', note: 'joins sem arrependimento', ring: 1 },
  { name: 'Tailwind', note: 'utility-first punk', ring: 1 },
  { name: 'SEO', note: 'Lighthouse 38 → 94 no Braip', ring: 1 },
  // ring 2 — niche
  { name: 'Cyber Security', note: 'auditoria que achou o bug do saque', ring: 2 },
  { name: 'SDD', note: 'Spec Driven: 4 → 7 entregas/dia', ring: 2 },
  { name: 'Raspberry Pi', note: 'robô de mesa com Gemini', ring: 2 },
  { name: 'Prompt Eng.', note: 'Dungeon Desk gera NPCs', ring: 2 },
  { name: 'i18n', note: 'liderei a internacionalização do Braip', ring: 2 },
  { name: 'LOLCODE', note: 'HAI, calculadora de gatos', ring: 2 },
  { name: 'Discord Bots', note: 'Kermit dá boas-vindas com meme', ring: 2 },
  { name: 'Acessibilidade', note: 'web pra todo mundo — sempre', ring: 2 },
]

export const CYBER = {
  title: 'BACKLINE: SEGURANÇA & ROBÓTICA',
  lead: 'O punk é estética. A segurança é método. Eu uso os dois.',
  points: [
    {
      h: 'CYBER SECURITY EM PRODUÇÃO',
      p: 'Segurança aplicada no fluxo de desenvolvimento de produtos financeiros — não como checklist, como princípio. Na auditoria da Pagah, verifiquei os cálculos do valor sacável e achei o bug que deixava sacar venda com juros inclusos. Correção: 3,3% de economia numa plataforma de TPV milionário.',
    },
    {
      h: 'SPEC DRIVEN DEVELOPMENT',
      p: 'Estruturei o fluxo de SDD para features pós-lançamento: spec antes do código, código antes do deploy. Média de entregas diárias subiu de 4 para 7 — sem abrir mão de segurança.',
    },
    {
      h: 'ROBÓTICA COM IA',
      p: 'ProjetoBOT: Raspberry Pi + API do Gemini + TTS interpolado em nuvem. Um robô físico que responde perguntas em tempo real. Eletrônica da formação em Engenharia Eletrônica (Pitágoras, 2018–2023) virando brinquedo sério.',
    },
  ],
}

export const SIDEB = [
  {
    h: 'CONSULTORIA GRATUITA DE CV',
    p: 'Realoquei 20+ profissionais de tech no mercado — de Júnior a Tech Lead — reformulando currículo (ATS, palavras-chave, dados) e LinkedIn. Gratuito, de propósito.',
    stamp: '20+ REALOCADOS',
  },
  {
    h: 'MONITOR & PROFESSOR',
    p: 'Monitor de lógica, automação industrial e eng. de software na Pitágoras; monitor no Code Artisan, programa filantrópico da prefeitura de Governador Valadares. Gosto de docência — e a educação gratuita é meu lema.',
    stamp: 'EDUCAÇÃO LIVRE',
  },
  {
    h: 'HONRA AO MÉRITO — EXÉRCITO',
    p: 'Premiação do Alistamento Militar Obrigatório para poucos alistados: zero atrasos, voluntariado alto, alto desempenho. Disciplina também é punk.',
    stamp: 'EXÉRCITO BR',
  },
  {
    h: 'D&D, METAL & ALEMÃO',
    p: 'Mestre de mesa (o Dungeon Desk nasceu de uma sessão), fã de metal e punk rock, alemão em nível profissional. O resto do tempo é código.',
    stamp: 'SIDE B',
  },
]

export const CONTACT = {
  linkedin: 'https://www.linkedin.com/in/daniellucasfaraujo/',
  github: 'https://github.com/daniellucasdev',
  old: 'https://daniellucas.dev',
}
