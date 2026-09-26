import { Link } from 'react-router-dom'
import { LuCheck, LuArrowRight } from 'react-icons/lu'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero Introduction">
      {/* High-tech luminous ambient light glow */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="shell hero-inner">
        {/* ── Status Pill ──────────────────────────── */}
        <div className="hero-status-pill animate">
          <span className="live-status-dot" aria-hidden="true" />
          <span>Verified Tech Solutions · Now Booking Q3/Q4 Projects</span>
        </div>

        {/* ── Main High-Impact Headline ────────────── */}
        <h1 className="hero-title animate animate-delay-1">
          We Build.{' '}
          <span className="gradient-text">We Secure.</span>
          <br />
          We Deploy.
        </h1>

        <p className="hero-subtitle animate animate-delay-2">
          SKKU Global Technologies Limited engineers mission-critical web applications,
          conducts automated vulnerability audits via <strong>SecuScan</strong>, and builds high-conversion e-commerce systems.
          CAC-registered in Nigeria, delivering software globally.
        </p>

        {/* ── Action Buttons ────────────────────────── */}
        <div className="hero-actions animate animate-delay-3">
          <a
            href="mailto:admin@skkuglobal.com?subject=Project%20Consultation%20Inquiry%20%E2%80%94%20SKKU%20Global"
            className="btn-primary"
          >
            <span>Start a Project</span>
            <LuArrowRight size={15} aria-hidden="true" />
          </a>
          <Link to="/work" className="btn-secondary">
            <span>Explore Case Studies</span>
          </Link>
        </div>

        {/* ── Enterprise Trust Bar ─────────────────── */}
        <div className="hero-trust-strip animate animate-delay-4">
          <div className="trust-item">
            <LuCheck size={14} className="trust-check" aria-hidden="true" />
            <span>CAC-Registered Limited Entity</span>
          </div>
          <span className="trust-divider" aria-hidden="true">/</span>
          <div className="trust-item">
            <LuCheck size={14} className="trust-check" aria-hidden="true" />
            <span>SecuScan Security Engine</span>
          </div>
          <span className="trust-divider" aria-hidden="true">/</span>
          <div className="trust-item">
            <LuCheck size={14} className="trust-check" aria-hidden="true" />
            <span>Founder-Led Engineering</span>
          </div>
          <span className="trust-divider" aria-hidden="true">/</span>
          <div className="trust-item">
            <LuCheck size={14} className="trust-check" aria-hidden="true" />
            <span>Sub-30s Automated Audits</span>
          </div>
        </div>
      </div>
    </section>
  )
}
