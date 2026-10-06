import { useEffect, useRef, useState } from 'react'

const W = 1000
const H = 160
const LOOPS = 9
const R = 52
const DOT = 10
const A = W / (LOOPS * 2 * Math.PI)

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

export default function Tangle({ replayable = false }) {
  const svg = useRef(null)
  const p1 = useRef(null)
  const p2 = useRef(null)
  const dot = useRef(null)
  const raf = useRef(0)
  const reduced = useRef(false)
  const s = useRef({ k: 1, target: 1, ph: 0 })
  const [solved, setSolved] = useState(false)

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
      reduced.current = true
      st.k = 0
      st.target = 0
      render()
      setSolved(true)
      return
    }
    let last = 0
    let inView = false
    const tick = (now) => {
      const dt = Math.min((now - (last || now)) / 1000, 0.05)
      last = now
      st.ph -= dt * 1.6
      st.k += (st.target - st.k) * Math.min(1, dt * 2.4)
      render()
      raf.current = requestAnimationFrame(tick)
    }
    const start = () => {
      cancelAnimationFrame(raf.current)
      last = 0
      raf.current = requestAnimationFrame(tick)
    }
    const stop = () => cancelAnimationFrame(raf.current)
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

  const toggle = () => {
    const st = s.current
    const next = !solved
    st.target = next ? 0 : 1
    if (reduced.current) {
      st.k = st.target
      render()
    }
    setSolved(next)
  }

  return (
    <div className="tgl">
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
        <circle ref={dot} className="tgl-dot" cx={W - DOT} cy={H / 2} r="0" />
      </svg>
      {replayable && (
        <button type="button" className="tgl-replay" onClick={toggle}>
          {solved ? 'Tangle again' : 'Untangle'}
        </button>
      )}
    </div>
  )
}
