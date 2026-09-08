# Portifolio3.0 — RobCo Termlink

Portfolio de **Daniel Lucas Ferreira de Araújo** como um terminal RobCo do Fallout.

**Live:** https://daniellucasdev.github.io/Portifolio3.0-landing/

## A experiência

O visitante boota um terminal RobCo Industries MK III, faz login (`admin` — a senha clássica — ou espera 9s pelo acesso de convidado) e navega por um menu estilo Fallout:

1. **WHOAMI** — registro do operador (LinkedIn: cargo, XP, stack, localização, C2)
2. **REGISTROS DE SERVIÇO** — carreira 2022–2026 em registros expansíveis
3. **ARQUIVOS DE PROJETOS** — 8 holo-arquivos com stars ao vivo da API do GitHub
4. **PROTOCOLOS** — stack + formação
5. **TRANSMISSÃO** — contato

O menu lateral traz um **TL;DR para recrutadores** — quem não quer "jogar" resolve em 5 segundos.

## Tech

- **React 19 + Vite 7 + TypeScript strict + Tailwind CSS 4**
- **Three.js** — holograma wireframe do ProjetoBOT (robô Raspberry Pi real do GitHub), code-split via `React.lazy`: só baixa quando abre
- **Web Audio API** — SFX sintetizados (teclas, beeps, estática, hum de CRT), zero assets
- **CRT layer** — scanlines, beam sweep, vignette, flicker, glow de fósforo
- **Lenis** não usado aqui: terminal tem scroll próprio por tela
- Navegação: setas + 1–5 + Enter + ESC + mouse/touch. `prefers-reduced-motion` respeitado
- Deploy: GitHub Actions → Pages, a cada push na `main`

Bundle: ~70KB gzip no boot; +130KB só se abrir o holograma.

## Rodar local

```bash
npm install
npm run dev
```

## Histórico

- **1.0** (2022) / **2.0** (2024) — vanilla, [daniellucas.dev](https://daniellucas.dev)
- **3.0** — landing editorial (Locomotive style), depois terminal
- **v4 (atual)** — terminal RobCo Fallout com holograma Three.js
- O repo privado `Portifolio3.0` (Next.js WIP de 2023) segue intacto
