import { Link } from 'react-router-dom'
import { LuArrowLeft, LuArrowDown } from 'react-icons/lu'
import { FOUNDER } from '../seo/siteMeta'
import './AboutHero.css'

export default function AboutHero() {
  return (
    <section className="ah-hero" aria-label="About the founder">

      {/* ── Top nav row ── */}
      <div className="ah-topbar shell">
        <Link to="/" className="ah-back" aria-label="Back to home">
          <span className="ah-back-dot" aria-hidden="true" />
          <LuArrowLeft size={14} aria-hidden="true" />
          <span>BACK</span>
        </Link>

        <nav className="ah-breadcrumb" aria-label="Breadcrumb">
          <span>ABOUT</span>
          <span className="ah-bc-sep" aria-hidden="true">/</span>
          <span className="ah-bc-name">{FOUNDER.name.toUpperCase()}</span>
        </nav>
      </div>

      {/* ── Main split ── */}
      <div className="ah-body shell">

        {/* Left: text */}
        <div className="ah-text">
          <h1 className="ah-heading">
            <span className="ah-heading-light">Why I build</span>
            <br />
            <span className="ah-heading-dim">SKKU Global.</span>
          </h1>

          <p className="ah-bio">
            I'm Abdulkabir. I started SKKU Global because I was tired of watching
            businesses run on software they couldn't see into, on infrastructure they
            didn't control. Every platform we ship comes with a working security
            audit and architecture you can read.
          </p>

          {/* Bottom meta row */}
          <div className="ah-meta">
            <div className="ah-location">
              <span className="ah-location-dot" aria-hidden="true" />
              <span>IBADAN · NIGERIA</span>
            </div>
          </div>
        </div>

        {/* Right: portrait with neon glow */}
        <div className="ah-portrait-wrap" aria-hidden="true">
          {/* Neon ring layers */}
          <div className="ah-ring ah-ring--outer" />
          <div className="ah-ring ah-ring--inner" />

          {/* Circular photo */}
          <div className="ah-portrait-circle">
            <img
              src="/founder.jpg"
              alt="Abdulkabir Ajiboye — Founder of SKKU Global"
              className="ah-portrait-img"
              loading="eager"
              draggable="false"
            />
          </div>
        </div>

      </div>

      {/* ── Scroll indicator (bottom right) ── */}
      <div className="ah-scroll-hint" aria-hidden="true">
        <span className="ah-scroll-text">SCROLL</span>
        <span className="ah-scroll-line">
          <LuArrowDown size={11} />
        </span>
      </div>

    </section>
  )
}
