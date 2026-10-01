import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuCheck, LuExternalLink, LuChevronLeft, LuChevronRight, LuArrowRight, LuShieldCheck, LuQuote } from 'react-icons/lu'
import './Projects.css'
import { projects } from '../data/projects'

export default function Projects({ isHome = false, limit }) {
  const allFeatured = projects.filter((p) => p.featured)
  const featured = limit ? allFeatured.slice(0, limit) : allFeatured
  const rest = projects.filter((p) => !p.featured)

  return (
    <section className="think-work-section" id="projects" aria-labelledby="work-heading">
      <div className="shell">
        {/* ── Think Company Style Section Header ── */}
        <div className="think-work-header animate">
          <div className="think-work-label">{isHome ? 'PROVEN TRACK RECORD' : 'OUR WORK'}</div>
          <h2 id="work-heading" className="think-work-title">
            {isHome ? (
              <>
                Featured Work.{' '}
                <span className="think-work-subhead">We solve the problems worth solving.</span>
              </>
            ) : (
              <>
                Our Work.{' '}
                <span className="think-work-subhead">We solve the problems worth solving.</span>
              </>
            )}
          </h2>
          <p className="think-work-desc">
            {isHome
              ? 'Real platforms engineered and deployed by SKKU Global. Browse interactive slide decks below to inspect system architecture, user workflows, and business outcomes.'
              : 'Explore actual software systems engineered and deployed by SKKU Global. Interact with the live walkthroughs below to inspect the architecture, user workflows, and core features of each platform.'}
          </p>
        </div>

        {/* ── Think Company Editorial Case Study Cards ── */}
        <div className="think-case-studies-list">
          {featured.map((project) => (
            <ThinkCaseStudyCard key={project.id || project.title} project={project} />
          ))}
        </div>

        {isHome && (
          <div className="home-view-all-projects animate">
            <Link to="/work" className="btn-secondary view-all-work-btn">
              <span>View All Live Case Studies &amp; Deployments</span>
              <LuArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}

        {/* ── Compact Grid for Additional Live Work (Only on full /work page) ── */}
        {!isHome && rest.length > 0 && (
          <>
            <div className="additional-work-header">
              <h3>Additional Shipped Work</h3>
              <p>Biometric banking auth, a job tracker, and a listings site with zero framework bloat.</p>
            </div>

            <div className="projects-grid">
              {rest.map((project, i) => (
                <SmallProjectCard key={project.id || project.title} project={project} delay={i + 1} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

/* ── Think Company Signature Case Study Card ── */
function ThinkCaseStudyCard({ project }) {
  const slides = project.slides && project.slides.length > 0
    ? project.slides
    : [{ id: 1, title: '01. Overview', caption: project.description, image: project.poster, highlight: project.outcome }]

  const [activeSlide, setActiveSlide] = useState(0)

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const current = slides[activeSlide]

  return (
    <article className="think-case-card animate animate-delay-1" id={project.id}>
      {/* ── Top Editorial Header (Think Company Style) ── */}
      <div className="think-card-header">
        <div className="think-meta-row">
          <span className="think-category-pill">{project.category || 'Web Application'}</span>
          <span className="think-badge-pill">
            <span className="think-badge-dot" aria-hidden="true" />
            {project.badge || 'Live in Production'}
          </span>
        </div>

        {/* Big Bold Client Name */}
        <h3 className="think-client-name">{project.clientName || project.title}</h3>

        {/* Editorial Story Headline */}
        <p className="think-editorial-quote">
          {project.editorialHeadline || project.description}
        </p>
      </div>

      {/* ── Interactive Device Frame with Floating Visuals ── */}
      <div className="think-device-container">
        {/* Device Top Bar */}
        <div className="think-device-topbar">
          <div className="device-controls" aria-hidden="true">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <div className="device-address">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span className="address-url">{project.siteLabel || project.liveUrl}</span>
          </div>

          <div className="device-slide-counter">
            Slide {activeSlide + 1} of {slides.length}
          </div>
        </div>

        {/* Slide Feature Pills Nav */}
        {slides.length > 1 && (
          <div className="think-slide-nav" role="tablist" aria-label="Feature slides">
            {slides.map((s, idx) => (
              <button
                key={s.id || idx}
                type="button"
                role="tab"
                aria-selected={activeSlide === idx}
                className={`think-slide-pill ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
              >
                {s.title.split('.')[1]?.trim() || s.title}
              </button>
            ))}
          </div>
        )}

        {/* Viewport Image Area with Angled/Crisp Presentation */}
        <div className="think-slide-viewport">
          <img
            key={current.image}
            src={current.image}
            alt={`${project.title} — ${current.title}`}
            className="think-slide-img"
            loading="lazy"
          />

          {/* Navigation Controls */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                className="think-nav-btn prev"
                aria-label="Previous slide"
                onClick={prevSlide}
              >
                <LuChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="think-nav-btn next"
                aria-label="Next slide"
                onClick={nextSlide}
              >
                <LuChevronRight size={20} aria-hidden="true" />
              </button>
            </>
          )}

          {/* Floating Architect Video / Avatar Badge in Corner (Think Company Signature) */}
          <div className="think-floating-architect-badge" aria-label="Lead architect insight">
            <div className="architect-avatar-ring">
              <img src="/founder.jpg" alt="Abdulkabir Ajiboye" className="architect-avatar-img" />
              <span className="architect-live-pulse" />
            </div>
            <div className="architect-text-bubble">
              <span className="architect-tag">LEAD ARCHITECT NOTE</span>
              <p className="architect-snippet">
                &ldquo;{project.architectQuote || project.outcome}&rdquo;
              </p>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          {slides.length > 1 && (
            <div className="think-dots-bar">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`think-dot ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Current Feature Caption Bar */}
        <div className="think-feature-bar">
          <div className="feature-desc">
            <span className="feature-step-name">{current.title}</span>
            <p className="feature-step-caption">{current.caption}</p>
          </div>
          {current.highlight && (
            <div className="feature-badge-pill">
              <LuCheck size={14} className="feature-check-icon" aria-hidden="true" />
              <span>{current.highlight}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Case Study Technical Summary & Live Action ── */}
      <div className="think-card-footer">
        <div className="think-footer-details">
          <div className="footer-spec-row">
            <span className="spec-label">Architecture &amp; Build:</span>
            <span className="spec-value">{project.detail}</span>
          </div>

          <div className="footer-spec-row">
            <span className="spec-label">Business Outcome:</span>
            <span className="spec-value outcome-highlight">{project.outcome}</span>
          </div>

          <div className="footer-tech-stack">
            <span className="spec-label">Tech Stack:</span>
            <div className="tech-pills">
              {project.stack.map((tech) => (
                <span className="tag" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="think-footer-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="think-launch-btn"
            >
              <span>Visit Live Platform</span>
              <LuExternalLink size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/* ── Compact Grid Card ── */
function SmallProjectCard({ project, delay }) {
  return (
    <article className={`card small-project-card animate animate-delay-${delay}`} id={project.id}>
      <div className="card-top">
        <span className="project-category">{project.category || 'Web Application'}</span>
        <span className="card-badge">
          <span className="badge-dot" aria-hidden="true" />
          {project.badge}
        </span>
      </div>

      <h4 className="card-title">{project.title}</h4>
      <p className="card-desc">{project.description}</p>
      
      {project.detail && (
        <p className="card-detail">{project.detail}</p>
      )}

      {project.outcome && (
        <div className="card-outcome">
          <span className="outcome-label">Result:</span>
          <span>{project.outcome}</span>
        </div>
      )}

      <div className="card-stack">
        {project.stack.map((tech) => (
          <span className="tag" key={tech}>{tech}</span>
        ))}
      </div>

      <div className="card-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-btn">
            <span>Live Preview</span>
            <LuExternalLink size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
