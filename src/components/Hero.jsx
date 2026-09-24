import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Background grid pattern */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="shell hero-inner">
        {/* ── Tag pill ──────────────────────────── */}
        <div className="hero-tag animate">
          <span className="dot" aria-hidden="true" />
          Now taking projects
        </div>

        {/* ── Headline ──────────────────────────── */}
        <h1 className="animate animate-delay-1">
          We Build.{' '}
          <span className="gradient-text">We Secure.</span>
          <br />
          We Ship.
        </h1>

        <p className="hero-sub animate animate-delay-2">
          Web development · Security auditing · Digital protection —
          <br className="hide-mobile" />
          built from Nigeria, shipping globally.
        </p>

        {/* ── CTAs ──────────────────────────────── */}
        <div className="hero-btns animate animate-delay-3">
          <Link to="/contact" className="btn-primary">
            Start a project
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/work" className="btn-secondary">
            See our work
          </Link>
        </div>

        {/* ── Trust bar ─────────────────────────── */}
        <div className="hero-trust animate animate-delay-4">
          <span className="trust-item">
            <span className="trust-dot" aria-hidden="true" />
            CAC-registered
          </span>
          <span className="trust-sep" aria-hidden="true">·</span>
          <span className="trust-item">
            <span className="trust-dot" aria-hidden="true" />
            5 products live
          </span>
          <span className="trust-sep" aria-hidden="true">·</span>
          <span className="trust-item">
            <span className="trust-dot" aria-hidden="true" />
            Security-first
          </span>
        </div>
      </div>

      {/* ── Work preview strip ────────────────── */}
      <div className="hero-work-strip animate animate-delay-5">
        <div className="work-strip-label">
          <span>Selected work</span>
          <Link to="/work" className="work-strip-more">
            View all →
          </Link>
        </div>
        <div className="work-scroll-track" role="list" aria-label="Featured projects">
          {projects.map((project) => (
            <WorkCard key={project.title} project={project} />
          ))}
          {/* Duplicate for infinite feel on wide screens */}
          {projects.slice(0, 3).map((project) => (
            <WorkCard key={`dup-${project.title}`} project={project} aria-hidden />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ project, ...rest }) {
  return (
    <div className="work-card" role="listitem" {...rest}>
      {project.demo?.poster && (
        <div className="work-card-thumb">
          <img
            src={project.demo.poster}
            alt={`${project.title} preview`}
            loading="lazy"
          />
          <div className="work-card-overlay">
            <Link to="/work" className="work-card-cta">View case study →</Link>
          </div>
        </div>
      )}
      {!project.demo?.poster && (
        <div className="work-card-thumb work-card-thumb--placeholder">
          <span className="work-card-initials">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      <div className="work-card-body">
        <div className="work-card-head">
          <span className="work-card-title">{project.title}</span>
          <span className="work-card-badge">
            <span className="badge-dot" aria-hidden="true" />
            {project.badge}
          </span>
        </div>
        <p className="work-card-desc">{project.description.slice(0, 70)}…</p>
        <div className="work-card-stack">
          {project.stack.slice(0, 3).map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
