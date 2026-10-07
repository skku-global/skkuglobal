import { useEffect, useRef, useState } from 'react'

const W = 1000
const H = 160
const LOOPS = 9
const R = 52
const DOT = 10
const A = W / (LOOPS * 2 * Math.PI)
const STOPS = [
  ['Website', 0.125],
  ['SEO', 0.375],
  ['Ads video', 0.625],
  ['Flyers', 0.875],
]
const HOLD_TANGLED = 3200
const HOLD_SOLVED = 5200

function pathFor(k, ph) {
  const b = R * k
  const t0 = -2 * Math.PI
  const span = (LOOPS + 2) * 2 * Math.PI
  const N = 330
  let d = ''
  for (let i = 0; i <= N; i++) {
    const t = t0 + (i / N) * span
    const x = A * t - b * Math.sin(t + ph)
    const y = H / 2 - b * Math.cos(t + ph)
    d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)
  }
  return d
}

export default function Tangle() {
  const svg = useRef(null)
  const p1 = useRef(null)
  const p2 = useRef(null)
  const dot = useRef(null)
  const raf = useRef(0)
  const timer = useRef(0)
  const s = useRef({ k: 1, target: 1, ph: 0 })
  const [state, setState] = useState('tangled')

  const render = () => {
    const { k, ph } = s.current
    p1.current?.setAttribute('d', pathFor(k, ph))
    p2.current?.setAttribute('d', pathFor(k, ph + 1.8))
    p2.current?.setAttribute('opacity', (k * 0.45).toFixed(2))
    dot.current?.setAttribute('r', (DOT * Math.min(1, Math.max(0, (0.3 - k) / 0.3))).toFixed(1))
  }

  useEffect(() => {
    const st = s.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      st.k = 0
      st.target = 0
      render()
      setState('solved')
      return
    }
    let last = 0
    let inView = false
    let mode = 'tangled'
    const tick = (now) => {
      const dt = Math.min((now - (last || now)) / 1000, 0.05)
      last = now
      st.ph -= dt * 1.6
      st.k += (st.target - st.k) * Math.min(1, dt * 2.4)
      render()
      raf.current = requestAnimationFrame(tick)
    }
    const stop = () => {
      cancelAnimationFrame(raf.current)
      clearTimeout(timer.current)
    }
    const go = (next) => {
      mode = next
      st.target = next === 'solved' ? 0 : 1
      setState(next)
      timer.current = setTimeout(
        () => go(next === 'solved' ? 'tangled' : 'solved'),
        next === 'solved' ? HOLD_SOLVED : HOLD_TANGLED
      )
    }
    const start = () => {
      stop()
      last = 0
      raf.current = requestAnimationFrame(tick)
      timer.current = setTimeout(
        () => go(mode === 'tangled' ? 'solved' : 'tangled'),
        mode === 'tangled' ? HOLD_TANGLED : HOLD_SOLVED
      )
    }
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting
      if (inView) start()
      else stop()
    })
    io.observe(svg.current)
    const vis = () => {
      if (document.hidden) stop()
      else if (inView) start()
    }
    document.addEventListener('visibilitychange', vis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', vis)
      stop()
    }
  }, [])

  return (
    <div className="tgl" data-state={state}>
      <svg ref={svg} className="tgl-svg" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="tgl-clip">
            <rect x="0" y="0" width={W} height={H} />
          </clipPath>
        </defs>
        <g clipPath="url(#tgl-clip)">
          <path ref={p2} className="tgl-echo" d={pathFor(1, 1.8)} opacity="0.45" />
          <path ref={p1} className="tgl-line" d={pathFor(1, 0)} />
        </g>
        {STOPS.map(([label, p], i) => (
          <circle key={label} className="tgl-node" style={{ '--i': i }} cx={W * p} cy={H / 2} r="6" />
        ))}
        <circle ref={dot} className="tgl-dot" cx={W - DOT} cy={H / 2} r="0" />
      </svg>
      <ul className="tgl-stops" aria-label="What we untangle">
        {STOPS.map(([label, p], i) => (
          <li key={label} style={{ '--p': p, '--i': i }}>{label}</li>
        ))}
      </ul>
      <p className="tgl-cap">
        <span className="tgl-cap-a">Your business feels tangled.</span>
        <span className="tgl-cap-b">We untangle it.</span>
      </p>
    </div>
  )
}
