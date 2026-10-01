import { Link } from 'react-router-dom'
import { LuArrowRight, LuBrain, LuZap, LuEye, LuCode2 } from 'react-icons/lu'
import './AiSection.css'

const FEATURES = [
  {
    icon: LuBrain,
    label: 'Smart Audit',
    copy: 'AI reads your codebase and flags security holes before they ship.',
  },
  {
    icon: LuZap,
    label: 'Instant Reports',
    copy: 'Vulnerability summary in plain English. No jargon, no filler.',
  },
  {
    icon: LuEye,
    label: 'Always Watching',
    copy: 'Continuous scans after launch. Your stack stays clean over time.',
  },
  {
    icon: LuCode2,
    label: 'Works With Anything',
    copy: 'React, Next.js, Node, Django, raw PHP — one tool, every stack.',
  },
]

export default function AiSection() {
  return (
    <section className="ai-section accent-violet" aria-labelledby="ai-heading">

      {/* ── Animated node network background ── */}
      <div className="ai-canvas" aria-hidden="true">
        {/* Nodes */}
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className={`ai-node ai-node--${i + 1}`} />
        ))}
        {/* Connection lines (SVG, static positions) */}
        <svg className="ai-lines" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice">
          <line x1="120" y1="90"  x2="360" y2="260" stroke="rgba(124,58,237,0.18)" strokeWidth="1" />
          <line x1="360" y1="260" x2="600" y2="140" stroke="rgba(124,58,237,0.22)" strokeWidth="1" />
          <line x1="600" y1="140" x2="840" y2="320" stroke="rgba(124,58,237,0.18)" strokeWidth="1" />
          <line x1="840" y1="320" x2="1080" y2="100" stroke="rgba(124,58,237,0.15)" strokeWidth="1" />
          <line x1="360" y1="260" x2="600" y2="400" stroke="rgba(124,58,237,0.12)" strokeWidth="1" />
          <line x1="600" y1="400" x2="840" y2="320" stroke="rgba(124,58,237,0.15)" strokeWidth="1" />
          <line x1="120" y1="90"  x2="600" y2="400" stroke="rgba(124,58,237,0.08)" strokeWidth="1" />
          <line x1="1080" y1="100" x2="600" y2="400" stroke="rgba(124,58,237,0.1)" strokeWidth="1" />
        </svg>
      </div>

      <div className="shell ai-inner">

        {/* ── Left: text ── */}
        <div className="ai-text">
          <div className="ai-eyebrow">
            <span className="ai-eye-dot" aria-hidden="true" />
            <span>AI · COMING NEXT</span>
          </div>

          <h2 id="ai-heading" className="ai-heading">
            Security that<br />
            <span className="ai-heading-accent">thinks for itself.</span>
          </h2>

          <p className="ai-body">
            SecuScan is getting smarter. AI-powered analysis that reads your
            stack, understands context, and tells you exactly what to fix —
            not just what broke.
          </p>

          <Link to="/services" className="ai-cta">
            <span>See what's live now</span>
            <LuArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        {/* ── Right: feature cards ── */}
        <div className="ai-cards">
          {FEATURES.map(({ icon: Icon, label, copy }) => (
            <div className="ai-card" key={label}>
              <div className="ai-card-icon">
                <Icon size={17} aria-hidden="true" />
              </div>
              <div>
                <div className="ai-card-label">{label}</div>
                <p className="ai-card-copy">{copy}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
