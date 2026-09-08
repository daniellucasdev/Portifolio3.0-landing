/* Retro terminal SFX synthesized with WebAudio — no audio assets.
   All sounds are short square/noise blips, Fallout-terminal flavored. */

let ctx: AudioContext | null = null
let enabled = true

function ac(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

export function setSfxEnabled(v: boolean) {
  enabled = v
}
export function sfxEnabled() {
  return enabled
}

function blip(
  freq: number,
  dur = 0.045,
  type: OscillatorType = 'square',
  gain = 0.05,
  slide = 0,
) {
  if (!enabled) return
  const c = ac()
  if (!c) return
  const o = c.createOscillator()
  const g = c.createGain()
  o.type = type
  o.frequency.setValueAtTime(freq, c.currentTime)
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), c.currentTime + dur)
  g.gain.setValueAtTime(gain, c.currentTime)
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur)
  o.connect(g).connect(c.destination)
  o.start()
  o.stop(c.currentTime + dur + 0.02)
}

function noise(dur = 0.08, gain = 0.04) {
  if (!enabled) return
  const c = ac()
  if (!c) return
  const buf = c.createBuffer(1, c.sampleRate * dur, c.sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  const src = c.createBufferSource()
  src.buffer = buf
  const f = c.createBiquadFilter()
  f.type = 'bandpass'
  f.frequency.value = 1800
  const g = c.createGain()
  g.gain.setValueAtTime(gain, c.currentTime)
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur)
  src.connect(f).connect(g).connect(c.destination)
  src.start()
}

export const sfx = {
  type: () => blip(2400 + Math.random() * 500, 0.012, 'square', 0.012),
  key: () => blip(1400 + Math.random() * 300, 0.03, 'square', 0.035),
  select: () => {
    blip(880, 0.05, 'square', 0.05)
    setTimeout(() => blip(1320, 0.06, 'square', 0.05), 45)
  },
  back: () => blip(620, 0.07, 'square', 0.045, -200),
  error: () => blip(180, 0.18, 'sawtooth', 0.06, -60),
  boot: () => {
    blip(320, 0.1, 'square', 0.04)
    setTimeout(() => blip(480, 0.1, 'square', 0.04), 90)
    setTimeout(() => blip(640, 0.14, 'square', 0.045), 180)
  },
  hum: () => {
    // 15kHz CRT whine — very quiet, one-shot when terminal starts
    if (!enabled) return
    const c = ac()
    if (!c) return
    const o = c.createOscillator()
    const g = c.createGain()
    o.type = 'sine'
    o.frequency.value = 15600
    g.gain.setValueAtTime(0.003, c.currentTime)
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 1.6)
    o.connect(g).connect(c.destination)
    o.start()
    o.stop(c.currentTime + 1.7)
  },
  static: noise,
}
