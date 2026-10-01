import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LuArrowRight } from 'react-icons/lu'
import './ScrollCapability.css'

// ─── Architecture (Software & Platforms) diagram ──────────────────────────────

const ARCH_NODES = [
  { id: 'interface', x: 180, y: 30,  w: 160, h: 44, label: 'interface', active: true },
  { id: 'api',       x: 40,  y: 130, w: 130, h: 44, label: 'api' },
  { id: 'workers',   x: 310, y: 130, w: 130, h: 44, label: 'workers' },
  { id: 'postgres',  x: 165, y: 230, w: 160, h: 44, label: 'postgres' },
]
const ARCH_EDGES = [
  ['interface', 'api'],
  ['interface', 'workers'],
  ['api',       'postgres'],
  ['workers',   'postgres'],
]

function buildCurvePath(from, to) {
  const fx = from.x + from.w / 2
  const fy = from.y + from.h
  const tx = to.x + to.w / 2
  const ty = to.y
  const my = fy + (ty - fy) / 2
  return `M ${fx} ${fy} C ${fx} ${my} ${tx} ${my} ${tx} ${ty}`
}

function ArchDiagram({ diagProgress }) {
  const nodeById = Object.fromEntries(ARCH_NODES.map((n) => [n.id, n]))

  function nodeOn(idx) { return diagProgress >= idx / ARCH_NODES.length }
  function edgeProg(i) {
    const start = (i + ARCH_NODES.length) / (ARCH_NODES.length + ARCH_EDGES.length)
    return Math.max(0, Math.min(1, (diagProgress - start + 0.2) / 0.2))
  }

  return (
    <svg viewBox="0 0 520 310" className="scap-svg" fill="none">
      {ARCH_EDGES.map(([fId, tId], i) => (
        <path
          key={`${fId}-${tId}`}
          d={buildCurvePath(nodeById[fId], nodeById[tId])}
          stroke="var(--primary)"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="1"
          strokeDashoffset={1 - edgeProg(i)}
          pathLength="1"
          style={{ transition: 'stroke-dashoffset 0.45s cubic-bezier(0.4,0,0.2,1)' }}
        />
      ))}
      {ARCH_NODES.map((node, idx) => {
        const on = nodeOn(idx)
        return (
          <g
            key={node.id}
            style={{
              opacity: on ? 1 : 0,
              transform: `translateY(${on ? 0 : 14}px)`,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            <rect
              x={node.x} y={node.y} width={node.w} height={node.h} rx="9"
              stroke={node.active ? 'var(--primary)' : 'var(--border-hover)'}
              strokeWidth={node.active ? '1.5' : '1'}
              fill={node.active ? 'var(--primary-light)' : 'var(--bg)'}
            />
            <text
              x={node.x + node.w / 2} y={node.y + 27}
              textAnchor="middle"
              fill={node.active ? 'var(--primary)' : 'var(--text-muted)'}
              fontSize="12.5" fontFamily="var(--font-mono)"
              fontWeight={node.active ? '700' : '500'} letterSpacing="0.06em"
            >
              {node.label}
            </text>
            {node.active && (
              <circle cx={node.x + node.w - 16} cy={node.y + 22} r="5" fill="var(--primary)" />
            )}
          </g>
        )
      })}
    </svg>
  )
}

// ─── Browser mockup (High-performing Websites) diagram ───────────────────────

function BrowserDiagram({ diagProgress }) {
  // 5 elements appear sequentially: chrome bar, then 3 content bars, then CTA pill
  const items = [
    { delay: 0 },
    { delay: 0.2 },
    { delay: 0.35 },
    { delay: 0.5 },
    { delay: 0.65 }, // CTA pill
  ]
  function itemOn(delay) { return diagProgress >= delay }
  function itemOpacity(delay) { return itemOn(delay) ? 1 : 0 }
  function itemY(delay) { return itemOn(delay) ? 0 : 10 }

  // Progress bar fill (LCP indicator)
  const barFill = Math.min(1, diagProgress / 0.8) * 100

  return (
    <svg viewBox="0 0 480 300" className="scap-svg" fill="none">
      {/* Browser chrome frame */}
      <rect
        x="20" y="20" width="440" height="260" rx="12"
        stroke="var(--border-hover)" strokeWidth="1.2"
        fill="var(--bg-surface)"
        style={{ opacity: diagProgress > 0 ? 1 : 0, transition: 'opacity 0.3s ease' }}
      />

      {/* Chrome bar with dots */}
      <g style={{ opacity: itemOpacity(0), transform: `translateY(${itemY(0)}px)`, transition: 'opacity 0.35s ease, transform 0.35s ease' }}>
        <circle cx="44"  cy="40" r="5" fill="var(--border-hover)" />
        <circle cx="60"  cy="40" r="5" fill="var(--border-hover)" />
        <circle cx="76"  cy="40" r="5" fill="var(--border-hover)" />
        <rect x="96" y="32" width="300" height="16" rx="8" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="1" />
        <line x1="20" y1="58" x2="460" y2="58" stroke="var(--border)" strokeWidth="1" />
      </g>

      {/* Content bar 1 — hero text line (wide) */}
      <g style={{ opacity: itemOpacity(0.2), transform: `translateY(${itemY(0.2)}px)`, transition: 'opacity 0.35s ease, transform 0.35s ease' }}>
        <rect x="40" y="76" width="240" height="14" rx="7"
          fill="var(--border)" stroke="none" />
      </g>

      {/* Content bar 2 — subtext (narrower) */}
      <g style={{ opacity: itemOpacity(0.35), transform: `translateY(${itemY(0.35)}px)`, transition: 'opacity 0.35s ease, transform 0.35s ease' }}>
        <rect x="40" y="100" width="320" height="10" rx="5"
          fill="var(--border)" stroke="none" opacity="0.7" />
        <rect x="40" y="118" width="280" height="10" rx="5"
          fill="var(--border)" stroke="none" opacity="0.5" />
      </g>

      {/* Content bar 3 — body text lines */}
      <g style={{ opacity: itemOpacity(0.5), transform: `translateY(${itemY(0.5)}px)`, transition: 'opacity 0.35s ease, transform 0.35s ease' }}>
        <rect x="40" y="142" width="200" height="10" rx="5"
          fill="var(--border)" stroke="none" opacity="0.4" />
      </g>

      {/* CTA pill */}
      <g style={{ opacity: itemOpacity(0.65), transform: `translateY(${itemY(0.65)}px)`, transition: 'opacity 0.4s ease, transform 0.4s ease' }}>
        <rect x="40" y="170" width="120" height="36" rx="18"
          stroke="var(--primary)" strokeWidth="1.5"
          fill="var(--primary-light)" />
        <rect x="176" y="178" width="80" height="20" rx="10"
          stroke="var(--border-hover)" strokeWidth="1"
          fill="var(--bg)" />
      </g>

      {/* Metrics strip */}
      <g style={{ opacity: diagProgress > 0.55 ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        <line x1="20" y1="232" x2="460" y2="232" stroke="var(--border)" strokeWidth="1" />

        {/* Progress bar track */}
        <rect x="40" y="243" width="160" height="3" rx="1.5" fill="var(--border)" />
        {/* Progress bar fill */}
        <rect
          x="40" y="243"
          width={barFill * 1.6}
          height="3" rx="1.5"
          fill="var(--primary)"
          style={{ transition: 'width 0.3s ease' }}
        />

        {/* LCP label */}
        <text x="40" y="262" fill="var(--primary)" fontSize="10"
          fontFamily="var(--font-mono)" fontWeight="700" letterSpacing="0.06em">
          LCP 0.6s
        </text>
        <text x="120" y="262" fill="var(--text-muted)" fontSize="10"
          fontFamily="var(--font-mono)" letterSpacing="0.04em">
          CLS 0.00
        </text>
        <text x="240" y="262" fill="var(--text-muted)" fontSize="10"
          fontFamily="var(--font-mono)" letterSpacing="0.04em">
          100 / 100
        </text>
      </g>
    </svg>
  )
}

// ─── Shared scroll-pinned section engine ─────────────────────────────────────

function ScrollCapabilitySection({ num, label, title, words, ctaLabel, ctaTo, Diagram, tinted = false }) {
  const outerRef  = useRef(null)
  const [progress, setProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  useEffect(() => {
    if (!isMounted) return
    function onScroll() {
      const el = outerRef.current
      if (!el) return
      const rect      = el.getBoundingClientRect()
      const scrollable = el.offsetHeight - window.innerHeight
      setProgress(Math.max(0, Math.min(1, -rect.top / scrollable)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMounted])

  const visibleWords = Math.round(Math.min(1, progress / 0.7) * words.length)
  const diagProgress = Math.max(0, Math.min(1, (progress - 0.1) / 0.85))

  return (
    <div ref={outerRef} className="scap-outer">
      <div className={['scap-sticky', tinted ? 'scap-sticky--tinted' : ''].filter(Boolean).join(' ')}>
        <div className="scap-inner shell">

          {/* Left: text */}
          <div className="scap-text">
            <div className="scap-eyebrow-row">
              <span className="scap-num">{num}</span>
              <span className="scap-slash" aria-hidden="true" />
              <span className="scap-label-tag">{label}</span>
            </div>

            <h2 className="scap-title">{title}</h2>

            <p className="scap-desc" aria-label={words.map((w) => w.text).join(' ')}>
              {words.map((word, i) => (
                <span
                  key={i}
                  className={[
                    'scap-word',
                    i < visibleWords  ? 'scap-word--on'    : '',
                    word.accent       ? 'scap-word--accent' : '',
                  ].filter(Boolean).join(' ')}
                >
                  {word.text}{' '}
                </span>
              ))}
            </p>

            <Link
              to={ctaTo}
              className="scap-btn"
              style={{
                opacity:   progress > 0.55 ? 1 : 0,
                transform: `translateY(${progress > 0.55 ? 0 : 10}px)`,
              }}
              tabIndex={progress > 0.55 ? 0 : -1}
            >
              <span>{ctaLabel}</span>
              <LuArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Right: diagram */}
          <div className="scap-diagram" aria-hidden="true">
            <Diagram diagProgress={diagProgress} />
          </div>

        </div>

        {/* Scroll progress bar */}
        <div className="scap-bar" aria-hidden="true">
          <div className="scap-bar-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </div>
  )
}

// ─── Exported section instances ───────────────────────────────────────────────

const SW_WORDS = [
  { text: 'SaaS' }, { text: 'products,' }, { text: 'internal' }, { text: 'tools,' },
  { text: 'APIs' }, { text: 'and' }, { text: 'the' }, { text: 'backends' },
  { text: 'behind' }, { text: 'them.' }, { text: 'Built' }, { text: 'to' }, { text: 'be' },
  { text: 'maintainable,', accent: true }, { text: 'documented' },
  { text: 'on' }, { text: 'the' }, { text: 'way' }, { text: 'in.' },
]

const WEB_WORDS = [
  { text: 'Marketing' }, { text: 'sites' }, { text: 'and' }, { text: 'web' },
  { text: 'apps' }, { text: 'that' }, { text: 'load' }, { text: 'in' },
  { text: 'under', accent: true }, { text: 'a', accent: true }, { text: 'second.', accent: true },
  { text: 'Server-rendered,' }, { text: 'accessible,' }, { text: 'measured' },
  { text: '—' }, { text: 'no', accent: true }, { text: 'tracking', accent: true },
  { text: 'scripts,', accent: true }, { text: 'no' }, { text: 'cookie' }, { text: 'theatre.' },
]

const HOSTING_WORDS = [
  { text: 'Your' }, { text: 'workload' }, { text: 'runs' }, { text: 'on' },
  { text: 'our', accent: true }, { text: 'own', accent: true }, { text: 'hardware', accent: true },
  { text: 'in' }, { text: 'Europe' }, { text: '—' }, { text: 'no' },
  { text: 'hyperscaler' }, { text: 'underneath,' }, { text: 'no' },
  { text: 'subprocessor' }, { text: 'you' }, { text: 'did' }, { text: 'not' },
  { text: 'agree' }, { text: 'to.' }, { text: 'GDPR', accent: true }, { text: 'is', accent: true },
  { text: 'the', accent: true }, { text: 'floor:', accent: true }, { text: 'encrypted' },
  { text: 'at' }, { text: 'rest' }, { text: 'and' }, { text: 'in' },
  { text: 'transit,' }, { text: 'patched' }, { text: 'and' }, { text: 'restored' },
  { text: 'by' }, { text: 'the' }, { text: 'people' }, { text: 'who' }, { text: 'wrote' }, { text: 'it.' },
]

// ─── Server rack + padlock diagram ────────────────────────────────────────────

function ServerDiagram({ diagProgress }) {
  const RACK_ROWS = 6
  const ROW_FILLS = [0.45, 0.85, 0.65, 0, 0, 0]

  function rowOn(idx)      { return diagProgress >= idx * 0.12 }
  function rowOpacity(idx) { return rowOn(idx) ? 1 : 0 }

  const lockOn   = diagProgress >= 0.5
  const uplinkOn = diagProgress >= 0.35
  const connOn   = diagProgress >= 0.45
  const edgeProg = Math.max(0, Math.min(1, (diagProgress - 0.45) / 0.35))

  return (
    <svg viewBox="0 0 520 310" className="scap-svg" fill="none">

      {/* Rack chassis */}
      <rect
        x="55" y="25" width="250" height="245" rx="10"
        stroke="var(--border-hover)" strokeWidth="1.2"
        fill="var(--bg-surface)"
        style={{ opacity: diagProgress > 0 ? 1 : 0, transition: 'opacity 0.3s ease' }}
      />

      {/* Rack rows */}
      {Array.from({ length: RACK_ROWS }).map((_, idx) => {
        const y = 45 + idx * 37
        const fillRatio = ROW_FILLS[idx] ?? 0
        return (
          <g key={idx} style={{ opacity: rowOpacity(idx), transition: 'opacity 0.3s ease' }}>
            <rect x="75" y={y} width="210" height="24" rx="5"
              stroke="var(--border)" strokeWidth="1" fill="var(--bg)" />
            {fillRatio > 0 && (
              <rect x="77" y={y + 2} width={fillRatio * 206} height="20" rx="3"
                fill={idx === 0 ? 'var(--primary-light)' : '#F1F5F9'}
                stroke={idx === 0 ? 'var(--primary-border)' : 'var(--border)'}
                strokeWidth="1" />
            )}
            {idx < 3 && (
              <circle cx="88" cy={y + 12} r="4.5"
                fill={idx === 0 ? 'var(--primary)' : 'var(--border-hover)'} />
            )}
          </g>
        )
      })}

      {/* Uplink */}
      <g style={{ opacity: uplinkOn ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        <line x1="180" y1="270" x2="180" y2="292"
          stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.5" />
        <text x="180" y="306" textAnchor="middle"
          fill="var(--text-muted)" fontSize="11"
          fontFamily="var(--font-mono)" letterSpacing="0.06em">
          uplink
        </text>
      </g>

      {/* Connection to lock */}
      <path
        d="M 305 148 C 368 148 368 108 408 108"
        stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.4"
        fill="none"
        strokeDasharray="1" strokeDashoffset={1 - edgeProg}
        pathLength="1"
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />

      {/* Padlock */}
      <g style={{
        opacity: lockOn ? 1 : 0,
        transform: `translateY(${lockOn ? 0 : -8}px)`,
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}>
        {/* Body */}
        <rect x="392" y="114" width="54" height="46" rx="8"
          stroke="var(--primary)" strokeWidth="1.5"
          fill="var(--primary-light)" />
        {/* Shackle */}
        <path d="M 403 114 L 403 98 Q 419 84 435 98 L 435 114"
          stroke="var(--primary)" strokeWidth="1.5"
          fill="none" strokeLinecap="round" />
        {/* Keyhole */}
        <circle cx="419" cy="137" r="5" fill="var(--primary)" opacity="0.7" />
        {/* Label */}
        <text x="419" y="178" textAnchor="middle"
          fill="var(--text-muted)" fontSize="10.5"
          fontFamily="var(--font-mono)" letterSpacing="0.06em">
          encrypted
        </text>
      </g>

    </svg>
  )
}

export function ScrollCapabilitySoftware() {
  return (
    <ScrollCapabilitySection
      num="02"
      label="CAPABILITY"
      title="Software &amp; Platforms"
      words={SW_WORDS}
      ctaLabel="SCOPE A BUILD"
      ctaTo="/services"
      Diagram={ArchDiagram}
    />
  )
}

export function ScrollCapabilityWeb() {
  return (
    <ScrollCapabilitySection
      num="03"
      label="CAPABILITY"
      title="High-performing websites"
      words={WEB_WORDS}
      ctaLabel="SEE A BUILD"
      ctaTo="/work"
      Diagram={BrowserDiagram}
      tinted
    />
  )
}

export function ScrollCapabilityHosting() {
  return (
    <ScrollCapabilitySection
      num="04"
      label="CAPABILITY"
      title="Managed hosting, privacy-first"
      words={HOSTING_WORDS}
      ctaLabel="SEE THE STACK"
      ctaTo="/services"
      Diagram={ServerDiagram}
    />
  )
}

// Default export: all three sections in sequence
export default function ScrollCapability() {
  return (
    <>
      <ScrollCapabilitySoftware />
      <ScrollCapabilityWeb />
      <ScrollCapabilityHosting />
    </>
  )
}
