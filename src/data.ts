/* ————— Terminal content ————— */

export const BOOT_LINES: string[] = [
  '*********************************************************************',
  '* ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL                            *',
  '* COPYRIGHT 2075-2077 ROBCO INDUSTRIES                              *',
  '* LOADING VAULT-TEC OPERATING SYSTEM v7.4.0.3                       *',
  '* SERVER 6 - DANIEL LUCAS F. DE ARAUJO                              *',
  '*********************************************************************',
]

export const LOGIN_HINT = 'ENTRE COM SENHA OU AGUARDE ACESSO DE CONVIDADO:'

export const MENU: { key: string; cmd: string; label: string }[] = [
  { key: '1', cmd: 'whoami', label: 'OPERADOR — Daniel Lucas, Engenheiro de Software' },
  { key: '2', cmd: 'experiencia', label: 'REGISTROS DE SERVICO — carreira 2022-2026' },
  { key: '3', cmd: 'projetos', label: 'ARQUIVOS DE PROJETOS — GitHub #27 repos' },
  { key: '4', cmd: 'skills', label: 'PROTOCOLOS — stack e ferramentas' },
  { key: '5', cmd: 'contato', label: 'TRANSMISSAO — contato e educaçao' },
]

export const WHOAMI = [
  'REGISTRO DO OPERADOR — VAULT-TEC PERSONNEL FILE',
  '===================================================',
  '',
  '  NOME..............: Daniel Lucas Ferreira de Araujo',
  '  FUNCAO............: Engenheiro de Software e Seguranca',
  '  CLASSE............: FULL-STACK (DE PONTA A PONTA)',
  '  XP TOTAL..........: 5 anos e contando',
  '  BASE..............: Governador Valadares, MG [BRASIL]',
  '  STATUS............: ONLINE — disponivel para remoto',
  '  IDIOMAS...........: PT (nativo) / EN C2 certificado (EF SET)',
  '',
  'PERGUNTA DE SEGURANCA: "O que voce faz?"',
  'RESPOSTA:',
  '  Pego o produto inteiro — do briefing ao deploy. App publicado',
  '  nas lojas em 2 meses, plataforma de TPV milionario, Lighthouse',
  '  de 38 pra 94. E se tiver um bug de calculo escondido, eu acho.',
  '',
  'MOTTO PESSOAL:',
  '  "Educaçao de qualidade e gratuita pra todo mundo."',
  '  (o porquê de quase tudo o que eu construo)',
]

export const XP_RECORDS = [
  {
    header: '>>> REGISTRO 2076-08 — ATIVO',
    org: 'CONSULTORIA FINANCEIRA (ANONIMA)',
    role: 'Engenheiro de Software e Seguranca',
    meta: '22 paises · 100-150 pessoas · remoto',
    lines: [
      'Engenharia e seguranca de software para produtos financeiros,',
      'com principios de cyber security aplicados no fluxo de',
      'desenvolvimento.',
    ],
  },
  {
    header: '>>> REGISTRO 2076-02 — ATIVO',
    org: 'PAGAH',
    role: 'Engenheiro de Software',
    meta: 'checkout + call center + pagamento em escala',
    lines: [
      'APP DA EMPRESA: desenvolvido de ponta a ponta em 2 meses — da',
      'burocracia (DUNS, e-mails) ao back-end (Auth, APIs), front-end,',
      'push notifications e publicaçao nas lojas.',
      '',
      'FLUXO SDD: implementei Spec Driven Development para features',
      'pos-lancamento. Media de entregas diarias: 4 -> 7.',
      '',
      'AREA DE CURSOS: painel admin completo + plataforma do aluno em',
      '2 meses. Loading refinado: 5s -> 1s.',
      '',
      'AUDITORIA FINANCEIRA: descobri que usuarios podiam sacar vendas',
      'com juros inclusos. Correçao = 3,3% de economia em plataforma',
      'de TPV milionario.',
    ],
  },
  {
    header: '>>> REGISTRO 2075-03 ATE 2076-03',
    org: 'BRAIP — MID LEVEL (PLENO)',
    role: 'Mid-Level Software Developer',
    meta: 'promocao recebida pelo time',
    lines: [
      'LIDER DO APP BRAIPV2: start do projeto, desenvolvimento,',
      'publicaçao nas lojas Android e Apple, push notifications e',
      'delegaçao de tarefas ao time.',
    ],
  },
  {
    header: '>>> REGISTRO 2072-12 ATE 2075-03',
    org: 'BRAIP — FRONT-END',
    role: 'Front-End Developer',
    meta: '6 produtos · +20 comerciais',
    lines: [
      'BRAIP MARKETPLACE: do zero ao pos-lancamento. SEO que elevou',
      'o Lighthouse de 38 para 94.',
      '',
      'Liderança de sprints, revisao de PRs e estrutura de',
      'internacionalizaçao do site — liderando as equipes.',
      '',
      'Onboarding de trainees e traduçao para publico internacional',
      'em eventos.',
    ],
  },
  {
    header: '>>> REGISTRO 2072-09 ATE 2074-02',
    org: 'FREELANCER — WASTELAND SOLO',
    role: 'Full-Stack Freelancer',
    meta: 'clientes no Brasil e no exterior',
    lines: [
      'De site para autor de fantasia a landing de curso de direito,',
      'passando por empresa de mineracao de MMO RPG.',
      '',
      'Back-end: bot de Discord ligado a API de arte generativa e i18n',
      'de software de emissao de faturas.',
    ],
  },
]

export const SKILLS = {
  'FRONT-END': ['Vue', 'Nuxt', 'React', 'TypeScript', 'SCSS', 'Tailwind CSS', 'Bootstrap'],
  'BACK-END': ['Node.js', 'PHP / Laravel', 'PostgreSQL', 'Next.js', 'Express', 'Java', 'C++', 'Shell'],
  'MOBILE & ENTREGA': ['Apps iOS/Android', 'Push Notifications', 'CI/CD', 'DevOps', 'Linux', 'Vercel'],
  'PROTOCOLOS DE TRABALHO': ['Spec Driven Development', 'Cyber Security', 'Revisao de PRs', 'Liderança de Sprints', 'i18n', 'SEO', 'Acessibilidade'],
}

export const EDUCATION = [
  {
    title: 'Bacharelado em Engenharia Eletronica',
    place: 'Faculdade Pitagoras · 2018-2023',
    notes: [
      'Co-fundador do clube de programaçao & automaçao',
      'Monitor de logica de programaçao, automaçao industrial e eng. de software',
    ],
  },
  {
    title: 'Ingles C2 — certificado',
    place: 'EF Standard English Test',
    notes: [],
  },
]

export const CONTACT = [
  'ABRIR CANAL DE TRANSMISSAO:',
  '',
  '  LINKEDIN.....: linkedin.com/in/daniellucasfaraujo',
  '  GITHUB.......: github.com/daniellucasdev',
  '  PORTFOLIO V2.: daniellucas.dev',
  '  LOCAL........: Governador Valadares, MG — Brasil',
  '',
  'Disponivel para remoto. Ingles C2. Tempo de resposta: rapido,',
  'gostoso de ver. Fale comigo antes que outro Vault contrate.',
]

export const PROJECTS = [
  {
    name: '404',
    repo: '404',
    desc: 'Forum fullstack em Next + Postgres + Node. Sistema de posts e contas para compartilhar conhecimento — a educaçao gratuita em forma de software.',
    lang: 'JavaScript · Next',
    stars: 0,
    live: 'https://404-eight.vercel.app',
  },
  {
    name: 'ProjetoBOT',
    repo: 'ProjetoBOT',
    desc: 'Robo em Raspberry Pi ligado na API do Gemini, com TTS em nuvem. Pergunta ai, ele responde em tempo real.',
    lang: 'C++ · Raspberry Pi',
    clickAction: 'holo', // shows the hologram screen
    stars: 0,
  },
  {
    name: 'Marketplace0.2',
    repo: 'Marketplace0.2',
    desc: 'Loja completa com TypeScript, React e Bootstrap. Do carrinho ao checkout.',
    lang: ' TypeScript · React',
    stars: 2,
    live: 'https://marketplace-cyan.vercel.app',
  },
  {
    name: 'dnxPJ',
    repo: 'dnxPJ',
    desc: 'Site institucional desenhado e construido para uma empresa real de sistemas e consultoria. Cliente de verdade, deadline de verdade.',
    lang: 'JavaScript',
    stars: 2,
    live: 'https://dnx-pj.vercel.app',
  },
  {
    name: 'Kermit 1.2',
    repo: 'Kermit1.2v14',
    desc: 'Bot de Discord com respostas engracadas e imagens de boas-vindas geradas na hora.',
    lang: 'JavaScript · Discord',
    stars: 2,
  },
  {
    name: 'Portifolio 2.0',
    repo: 'Portifolio2.0',
    desc: 'Meu portfolio anterior, aberto pra quem quiser usar de template.',
    lang: 'HTML · CSS · JS',
    stars: 4,
    live: 'https://daniellucas.dev',
  },
  {
    name: 'Projeto-Term',
    repo: 'Projeto-Term',
    desc: 'Terminal web inspirado em Fallout. Login: admin. Sim, esse mesmo que voce esta usando.',
    lang: 'HTML · JS',
    stars: 0,
    live: 'https://projeto-term.vercel.app',
  },
  {
    name: 'calc-cat',
    repo: 'calc-cat',
    desc: 'Calculadora em LOLCODE — sintaxe de C misturada com memes de gatos.',
    lang: 'LOLCODE',
    stars: 0,
  },
]

/* ASCII art: RobCo terminal frame header */
export const ASCII_HEADER = String.raw`┌─────────────────────────────────────────────┐
│ ROBCO INDUSTRIES — TERMLINK MK III          │
└─────────────────────────────────────────────┘`
