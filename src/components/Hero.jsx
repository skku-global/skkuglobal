import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Hero.css'

export default function Hero() {
  const featuredWork = projects.slice(0, 4)

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
          <Link to="/contact" className="btn-primary">
            <span>Start a Project</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/work" className="btn-secondary">
            <span>Explore Case Studies</span>
          </Link>
        </div>

        {/* ── Enterprise Trust Bar ─────────────────── */}
        <div className="hero-trust-strip animate animate-delay-4">
          <div className="trust-item">
            <span className="trust-check" aria-hidden="true">✓</span>
            <span>CAC-Registered Limited Entity</span>
          </div>
          <span className="trust-divider" aria-hidden="true">/</span>
          <div className="trust-item">
            <span className="trust-check" aria-hidden="true">✓</span>
            <span>SecuScan Security Engine</span>
          </div>
          <span className="trust-divider" aria-hidden="true">/</span>
          <div className="trust-item">
            <span className="trust-check" aria-hidden="true">✓</span>
            <span>Founder-Led Engineering</span>
          </div>
          <span className="trust-divider" aria-hidden="true">/</span>
          <div className="trust-item">
            <span className="trust-check" aria-hidden="true">✓</span>
            <span>Sub-30s Automated Audits</span>
          </div>
        </div>

        {/* ── Hero Spotlight Showcase ───────────────── */}
        <div className="hero-showcase-container animate animate-delay-5">
          <div className="showcase-header">
            <div className="showcase-title-group">
              <span className="showcase-label">FEATURED LIVE DEPLOYMENTS</span>
              <p className="showcase-hint">Click any project to inspect live architecture &amp; feature slides</p>
            </div>
            <Link to="/work" className="showcase-view-all">
              <span>View All Projects</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hero-project-cards-grid" role="list">
            {featuredWork.map((project) => (
              <Link
                key={project.id || project.title}
                to="/work"
                className="hero-project-card"
                role="listitem"
              >
                <div className="hero-card-media">
                  {project.poster ? (
                    <img
                      src={project.poster}
                      alt={`${project.title} live interface`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="hero-card-placeholder">
                      <span>{project.title.slice(0, 2).toUpperCase()}</span>
                    </div>
                  )}
                  <div className="hero-card-hover-overlay">
                    <span className="overlay-badge">Inspect 5 Feature Slides →</span>
                  </div>
                </div>

                <div className="hero-card-content">
                  <div className="hero-card-top">
                    <span className="hero-card-category">{project.category || 'Platform'}</span>
                    <span className="card-badge">
                      <span className="badge-dot" aria-hidden="true" />
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="hero-card-title">{project.title.split('—')[0].trim()}</h3>
                  <p className="hero-card-desc">{project.tagline || project.description.slice(0, 80) + '…'}</p>

                  <div className="hero-card-tags">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span className="tag" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
