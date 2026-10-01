import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuArrowUpRight, LuArrowRight, LuSparkles, LuCheck, LuShieldCheck, LuZap } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { waLink } from '../seo/siteMeta.js'
import './Hero.css'

export default function Hero() {
  return (
    <div className="struct-wrapper">
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION (STRUCT Agency Reference)
          ══════════════════════════════════════════════════════════════ */}
      <section className="struct-hero" id="top" aria-label="STRUCT Hero Introduction">
        {/* Deep Dark Ambient Canvas & Warm Glows */}
        <div className="struct-ambient-bg" aria-hidden="true">
          <div className="struct-glow-orb struct-glow-amber" />
          <div className="struct-glow-orb struct-glow-warm" />
          <div className="struct-noise-overlay" />
        </div>

        <div className="shell struct-hero-shell">
          {/* ── Top Left: Main Headline ── */}
          <div className="struct-headline-box animate">
            <h1 className="struct-main-heading">
              Design That<br />
              Reveals The True<br />
              Essence Of Your<br />
              Brand
            </h1>
          </div>

          {/* ── Center: Cinematic Silhouette Portrait with Amber Rim Light ── */}
          <div className="struct-center-portrait animate animate-delay-1">
            <div className="portrait-glow-halo" aria-hidden="true" />
            <img
              src="/struct/hero-portrait.jpg"
              alt="SKKU Global — Modern Digital Engineering"
              className="struct-model-img"
              loading="eager"
            />
          </div>

          {/* ── Top Right: "FUTURE-READY" Floating Card ── */}
          <div className="struct-floating-card card-future-ready animate animate-delay-2">
            <div className="future-card-content">
              <div className="future-card-header">
                <span className="future-badge">FUTURE-READY</span>
              </div>
              <p className="future-card-desc">
                Integrating advanced AI solutions and high-end design to keep your brand ahead of the digital wave.
              </p>
              <div className="future-card-bottom">
                <a
                  href={waLink("Hello SKKU Global, I want to book a consultation for a future-ready website/platform.")}
                  target="_blank"
                  rel="noreferrer"
                  className="future-pill-btn"
                >
                  <span>Consultation</span>
                  <LuArrowUpRight size={13} aria-hidden="true" />
                </a>
                <div className="future-thumb-box">
                  <img
                    src="/struct/future-avatar.jpg"
                    alt="Futuristic AI wireframe visual"
                    className="future-thumb-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Left: Stacked Floating Cards ── */}
          <div className="struct-bottom-left-stack animate animate-delay-2">
            {/* Orange Card: Digital Strategy & Research */}
            <div className="struct-orange-card">
              <div className="card-dots-row">
                <span className="dot" /><span className="dot" /><span className="dot" />
              </div>
              <div className="orange-card-title">
                DIGITAL<br />
                STRATEGY &amp;<br />
                RESEARCH
              </div>
            </div>

            {/* White Glass Card: Full-Cycle */}
            <div className="struct-fullcycle-card">
              <div className="fullcycle-text">
                <span className="fullcycle-badge">FULL-CYCLE</span>
                <p className="fullcycle-desc">
                  From deep-rooted strategy to flawless code. We build the core of your digital success.
                </p>
                <Link to="/services" className="fullcycle-link">
                  <span>View services</span>
                </Link>
              </div>
              <div className="fullcycle-action-thumb">
                <div className="fullcycle-art-preview">
                  <img
                    src="/struct/future-avatar.jpg"
                    alt="Full-cycle preview"
                    className="fullcycle-art-img"
                  />
                  <div className="fullcycle-arrow-circle">
                    <LuArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Right: Massive Typography & CTA ── */}
          <div className="struct-bottom-right-anchor animate animate-delay-3">
            <div className="struct-agency-callout">
              <div className="agency-title-row">
                <span className="agency-bold-text">digital</span>
                <a
                  href={waLink("Hello SKKU Global, I'm ready to start a project. Let's discuss requirements and get a quote.")}
                  target="_blank"
                  rel="noreferrer"
                  className="struct-start-project-btn"
                >
                  <span>Start a Project</span>
                </a>
              </div>
              <div className="agency-subline-text">agency</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHILOSOPHY INTRODUCTORY BLOCK (STRUCT Reference Section 01)
          ══════════════════════════════════════════════════════════════ */}
      <section className="struct-philosophy-section" aria-label="Agency Philosophy">
        <div className="shell struct-philosophy-shell">
          {/* Left Column: Number & Manifesto */}
          <div className="philosophy-col-left animate">
            <span className="philosophy-number-tag">01/ philosophy</span>

            <div className="philosophy-manifesto">
              <h4>DECONSTRUCT.<br />STRUCTURE. ELEVATE.</h4>
              <p>
                We strip away the digital noise to find the core of your business. By structuring chaos into logic and UI/UX, we create digital ecosystems that command authority and drive growth.
              </p>
            </div>
          </div>

          {/* Right Column: Statement & Visual Cards */}
          <div className="philosophy-col-right animate animate-delay-1">
            <h2 className="philosophy-headline">
              We don&apos;t just draw interfaces.{' '}
              <span className="struct-amber-text">We build the invisible architecture</span>{' '}
              that supports your brand&apos;s growth. Engineering aesthetics for visionaries.
            </h2>

            {/* Visual Cards Row */}
            <div className="philosophy-cards-grid">
              {/* Card 1: Warm Golden Corridor Image */}
              <div className="philosophy-image-card">
                <img
                  src="/struct/gold-corridor.jpg"
                  alt="Futuristic architectural illuminated corridor"
                  className="philosophy-corridor-img"
                  loading="lazy"
                />
                <div className="corridor-ambient-vignette" />
              </div>

              {/* Card 2: White Zero Templates Card */}
              <div className="philosophy-white-card">
                <div className="white-card-dots">
                  <span className="dot dark" />
                  <span className="dot orange" />
                  <span className="dot orange" />
                </div>
                <h3 className="white-card-title">Zero Templates</h3>
                <p className="white-card-desc">
                  We design from absolute scratch. Every digital system by SKKU Global is custom-crafted to your business objectives, creating a distinctive market presence that cannot be replicated.
                </p>
                <div className="white-card-footer">
                  <span className="white-card-spec">100% Custom Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
