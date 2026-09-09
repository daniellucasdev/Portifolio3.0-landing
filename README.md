# Portifolio3.0 — v5 "fanzine punk"

Portfolio de **Daniel Lucas Ferreira de Araújo**: design de fanzine photocopy-punk,
conteúdo de engenheiro enterprise. Preto/vermelho, tipografia distorcida,
grão de xerox — e dados verificáveis como contrapeso.

**Live:** https://daniellucasdev.github.io/Portifolio3.0-landing/

## O conceito

O recrutador entende em 3 segundos que este dev **gosta de arriscar** — e em
mais 10 que ele **entrega**: cada seção estética tem um contrapeso factual
(carimbos "VERIFICADO", ficha parseável, métricas duras).

- **Hero** — tipografia mosh gigante (Rubik Dirt), glitch periódico no nome, manifesto em papel colado com fita adesiva
- **Ticker** vermelho de fatos da carreira em loop
- **01/Provas** — "DOCUMENTO VERIFICADO": ficha profissional limpa, ATS-friendly
- **02/Turnês** — carreira como agenda de shows: venue, cidade, setlist (2022–2026)
- **03/Radar** — a micro-interação de círculo de habilidades: radar analógico com agulha que varre do núcleo (mainstream) à borda (underground/nicho). Hover/foco fixa a agulha e mostra a leitura; teclado funciona (Tab + hover)
- **04/Demos** — projetos como fitas demo: cards rotacionados, carimbos, stars ao vivo da API do GitHub
- **05/Backline** — cyber security & robótica em destaque + **robô punk wireframe em Three.js** (lazy): mohawk, headbang, chifre de metal — só baixa quando a seção aparece
- **06/Lado B** — consultoria gratuita (20+ devs realocados), monitorias, Honra ao Mérito do Exército, D&D/metal/alemão
- **Footer** — "BORA TOCAR JUNTOS"

## Tech

React 19 · Vite 7 · TypeScript strict · Tailwind CSS 4 · Three.js (code-split ~130KB on-demand)
· Spline Sans Mono + Special Elite + Rubik Dirt/Glitch (fontes com personalidade, nada de Inter)
· grain SVG inline · `prefers-reduced-motion` respeitado · deploy GitHub Actions → Pages

Bundle inicial: ~70KB gzip.

## Rodar

```bash
npm install
npm run dev
```

## Histórico de versões

- v1/v2 (2022/2024) — vanilla · v3 — editorial Locomotive · v4 — terminal RobCo Fallout
- **v5 (atual)** — fanzine punk com radar de skills e robô Three.js
- Repo privado `Portifolio3.0` (Next WIP 2023) preservado intacto
