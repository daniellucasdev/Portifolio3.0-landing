export interface Repo {
  name: string
  url: string
  desc: string
  lang: string
  stars: number | null
  live?: string
}

/* Static snapshot (used as fallback + first paint).
   Stars refresh live from the GitHub API at runtime. */
export const PROJECTS: Repo[] = [
  {
    name: '404',
    url: 'https://github.com/daniellucasdev/404',
    desc: 'Fórum fullstack em Next + Postgres + Node. Sistema de posts e contas pra compartilhar conhecimento — a educação gratuita em forma de software.',
    lang: 'JavaScript · Next',
    stars: 0,
    live: 'https://404-eight.vercel.app',
  },
  {
    name: 'ProjetoBOT',
    url: 'https://github.com/daniellucasdev/ProjetoBOT',
    desc: 'Robô em Raspberry Pi ligado na API do Gemini, com TTS em nuvem. Pergunta aí, ele responde em tempo real.',
    lang: 'C++ · Raspberry Pi',
    stars: 0,
  },
  {
    name: 'Marketplace0.2',
    url: 'https://github.com/daniellucasdev/Marketplace0.2',
    desc: 'Loja completa com TypeScript, React e Bootstrap. Do carrinho ao checkout.',
    lang: 'TypeScript · React',
    stars: 2,
    live: 'https://marketplace-cyan.vercel.app',
  },
  {
    name: 'dnxPJ',
    url: 'https://github.com/daniellucasdev/dnxPJ',
    desc: 'Site institucional que desenhei e construí pra uma empresa real de sistemas e consultoria. Cliente de verdade, deadline de verdade.',
    lang: 'JavaScript',
    stars: 2,
    live: 'https://dnx-pj.vercel.app',
  },
  {
    name: 'Kermit 1.2',
    url: 'https://github.com/daniellucasdev/Kermit1.2v14',
    desc: 'Bot de Discord com respostas engraçadas e imagens de boas-vindas geradas na hora. Quem entra no servidor ganha meme personalizado.',
    lang: 'JavaScript · Discord',
    stars: 2,
  },
  {
    name: 'Portifolio 2.0',
    url: 'https://github.com/daniellucasdev/Portifolio2.0',
    desc: 'Meu portfólio anterior, aberto pra quem quiser usar de template. É a v2 — você está olhando pra v3.',
    lang: 'HTML · CSS · JS',
    stars: 4,
    live: 'https://daniellucas.dev',
  },
  {
    name: 'Projeto-Term',
    url: 'https://github.com/daniellucasdev/Projeto-Term',
    desc: 'Terminal web inspirado em Fallout. Login: admin. Sim, tem aquela cor de tela.',
    lang: 'HTML · JS',
    stars: 0,
    live: 'https://projeto-term.vercel.app',
  },
  {
    name: 'calc-cat',
    url: 'https://github.com/daniellucasdev/calc-cat',
    desc: 'Calculadora em LOLCODE — sintaxe de C misturada com memes de gatos. Refrescando a memória muscular do C do jeito certo.',
    lang: 'LOLCODE',
    stars: 0,
  },
]

export const XP = [
  {
    period: '2026 — hoje',
    role: 'Engenheiro de Software e Segurança',
    org: 'Consultoria financeira',
    note: '22 países, 100–150 pessoas',
    points: [
      'Engenharia e segurança de software pra produtos financeiros, com cyber security aplicada no fluxo de desenvolvimento.',
    ],
  },
  {
    period: '2026 — hoje',
    role: 'Engenheiro de Software',
    org: 'Pagah',
    note: 'checkout + call center + pagamento em escala',
    points: [
      'App da empresa de ponta a ponta em 2 meses — da burocracia (DUNS, e-mails) ao back-end (Auth, APIs), front, push notifications e publicação nas lojas.',
      'Fluxo de SDD (Spec Driven Development) que subiu a média de entregas diárias de 4 pra 7, sem abrir mão de segurança.',
      'Área de Cursos entregue em 2 meses: painel admin completo + plataforma do aluno, com loading de 5s pra 1s.',
      'Auditoria financeira: achei o bug que deixava usuário sacar venda com juros inclusos. Correção = 3,3% de economia numa plataforma de TPV milionário.',
    ],
  },
  {
    period: '2025 — 2026',
    role: 'Mid-Level Software Developer',
    org: 'Braip',
    note: 'promoção a Pleno',
    points: [
      'Líder e principal responsável pelo app BraipV2: start, desenvolvimento, publicação nas lojas Android e Apple, push notifications e delegação pro time.',
    ],
  },
  {
    period: '2022 — 2025',
    role: 'Front-End Developer',
    org: 'Braip',
    note: '6 produtos · +20 comerciais',
    points: [
      'Braip Marketplace do zero ao pós-lançamento. SEO que levou o Lighthouse de 38 pra 94.',
      'Liderança de sprints, revisão de PRs e a estrutura de internacionalização do site — liderando as equipes.',
      'Onboarding de trainees e tradução pro público internacional em eventos.',
    ],
  },
  {
    period: '2022 — 2024',
    role: 'Full-Stack Freelancer',
    org: 'clientes no Brasil e fora',
    note: 'landing pages, sites, bots',
    points: [
      'De site pra autor de fantasia a landing de curso de direito, passando por empresa de mineração de MMO RPG — cada uma com identidade própria.',
      'No back-end: bot de Discord ligado a API de arte generativa e i18n de software de emissão de faturas.',
    ],
  },
]

export const STACK = {
  'Front-end': ['Vue', 'Nuxt', 'React', 'TypeScript', 'SCSS', 'Tailwind CSS', 'Bootstrap'],
  'Back-end & dados': ['Node.js', 'PHP · Laravel', 'PostgreSQL', 'Next.js', 'Express', 'Java', 'C++', 'Shell'],
  'Mobile & entrega': ['Apps iOS/Android', 'Push notifications', 'CI/CD', 'DevOps', 'Linux', 'Vercel'],
  'Práticas': ['Spec Driven Development', 'Cyber security', 'Revisão de PRs', 'Liderança de sprints', 'i18n', 'SEO', 'Acessibilidade'],
}

export const EDUCATION = [
  {
    title: 'Engenharia Eletrônica — Bacharelado',
    place: 'Faculdade Pitágoras · 2018 — 2023',
    points: [
      'Co-fundador do clube de programação & automação',
      'Monitor de lógica de programação, automação industrial e eng. de software',
    ],
  },
  {
    title: 'Inglês — C2 certificado',
    place: 'EF Standard English Test',
    points: [],
  },
]
