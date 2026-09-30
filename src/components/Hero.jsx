import { Link } from 'react-router-dom'
import { LuCheck, LuArrowRight } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { waLink } from '../seo/siteMeta.js'
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
          <span>Now booking Q3/Q4 projects</span>
        </div>

        {/* ── Main High-Impact Headline ────────────── */}
        <h1 className="hero-title animate animate-delay-1">
          We Build.{' '}
          <span className="gradient-text">We Secure.</span>
          <br />
          We Deploy.
        </h1>

        <p className="hero-subtitle animate animate-delay-2">
          We build web apps and e-commerce systems, then audit them for security
          flaws with <strong>SecuScan</strong>. CAC-registered in Nigeria, working worldwide.
        </p>

        {/* ── Action Buttons ────────────────────────── */}
        <div className="hero-actions animate animate-delay-3">
          <a
            href={waLink('Hello SKKU Global, I want to build a website/web application for my business. Can I get a consultation and quote?')}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hero-btn-whatsapp"
          >
            <FaWhatsapp size={18} aria-hidden="true" />
            <span>Chat on WhatsApp — Instant Quote</span>
          </a>
          <Link to="/work" className="btn-secondary">
            <span>Explore Case Studies</span>
            <LuArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* ── Value & Turnaround Strip ─────────────── */}
        <div className="hero-guarantee-strip animate animate-delay-3">
          <span className="guarantee-pill">⚡ 5–7 Day Turnaround</span>
          <span className="guarantee-pill">🛡️ Free SecuScan Audit</span>
          <span className="guarantee-pill">🤝 Milestone Payments</span>
        </div>

        {/* ── Enterprise Trust Bar ─────────────────── */}
        <div className="hero-trust-strip animate animate-delay-4">
          <div className="trust-item">
            <LuCheck size={14} className="trust-check" aria-hidden="true" />
            <span>CAC-registered company</span>
          </div>
          <span className="trust-divider" aria-hidden="true">/</span>
          <div className="trust-item">
            <LuCheck size={14} className="trust-check" aria-hidden="true" />
            <span>Our own scan engine</span>
          </div>
          <span className="trust-divider" aria-hidden="true">/</span>
          <div className="trust-item">
            <LuCheck size={14} className="trust-check" aria-hidden="true" />
            <span>Founder-led</span>
          </div>
          <span className="trust-divider" aria-hidden="true">/</span>
          <div className="trust-item">
            <LuCheck size={14} className="trust-check" aria-hidden="true" />
            <span>Scans under 30s</span>
          </div>
        </div>
      </div>
    </section>
  )
}
