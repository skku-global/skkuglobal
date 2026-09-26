import { useState } from 'react'
import { LuCheck, LuExternalLink, LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import './Projects.css'
import { projects } from '../data/projects'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section className="projects-section" id="projects" aria-labelledby="work-heading">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">PRODUCTION PORTFOLIO</div>
          <h2 id="work-heading">
            Live Software &amp; Tech Solutions.{' '}
            <span className="gradient-text">Zero Filler.</span>
          </h2>
          <p>
            Explore actual software systems engineered and deployed by SKKU Global.
            Browse the interactive slide walkthroughs below to inspect the architecture, user workflows, and core features of each platform.
          </p>
        </div>

        {/* ── Featured Multi-Slide Showcases ── */}
        <div className="featured-showcase-list">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.id || project.title} project={project} />
          ))}
        </div>

        {/* ── Compact Grid for Additional Live Work ── */}
        <div className="additional-work-header">
          <h3>Additional Production Deployments</h3>
          <p>Full-stack platforms, client-side neural auth, and zero-framework high-speed web apps.</p>
        </div>

        <div className="projects-grid">
          {rest.map((project, i) => (
            <SmallProjectCard key={project.id || project.title} project={project} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Interactive Multi-Slide Featured Project Card ── */
function FeaturedProjectCard({ project }) {
  const slides = project.slides && project.slides.length > 0
    ? project.slides
    : [{ id: 1, title: '01. Overview', caption: project.description, image: project.poster, highlight: project.outcome }]

  const [activeSlide, setActiveSlide] = useState(0)

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const current = slides[activeSlide]

  return (
    <article className="featured-project-card animate animate-delay-1">
      {/* ── Top Header Bar with Project Info ── */}
      <div className="project-headline-bar">
        <div className="headline-meta">
          <span className="project-category">{project.category || 'Web Application'}</span>
          <span className="card-badge">
            <span className="badge-dot" aria-hidden="true" />
            {project.badge}
          </span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline || project.description}</p>
      </div>

      {/* ── Interactive Slide Deck Browser Frame ── */}
      <div className="browser-device-frame">
        {/* Chrome Header */}
        <div className="browser-topbar">
          <div className="browser-controls" aria-hidden="true">
            <span className="ctrl-dot red" />
            <span className="ctrl-dot yellow" />
            <span className="ctrl-dot green" />
          </div>

          <div className="browser-address">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span className="address-text">{project.siteLabel || project.liveUrl}</span>
          </div>

          <div className="slide-counter-badge">
            Slide {activeSlide + 1} of {slides.length}
          </div>
        </div>

        {/* Slide Feature Navigation Tabs */}
        {slides.length > 1 && (
          <div className="slide-nav-pills" role="tablist" aria-label="Feature slides">
            {slides.map((s, idx) => (
              <button
                key={s.id || idx}
                type="button"
                role="tab"
                aria-selected={activeSlide === idx}
                className={`slide-pill-btn ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
              >
                {s.title.split('.')[1]?.trim() || s.title}
              </button>
            ))}
          </div>
        )}

        {/* Viewport Image Area */}
        <div className="slide-viewport">
          <img
            key={current.image}
            src={current.image}
            alt={`${project.title} — ${current.title}`}
            className="slide-image"
            loading="lazy"
          />

          {/* Navigation Controls */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                className="slide-arrow prev"
                aria-label="Previous slide"
                onClick={prevSlide}
              >
                <LuChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="slide-arrow next"
                aria-label="Next slide"
                onClick={nextSlide}
              >
                <LuChevronRight size={18} aria-hidden="true" />
              </button>
            </>
          )}

          {/* Dot Pagination */}
          {slides.length > 1 && (
            <div className="slide-dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`dot-indicator ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Feature Caption & Value Explanation Panel */}
        <div className="slide-feature-footer">
          <div className="feature-info-left">
            <span className="feature-step-tag">{current.title}</span>
            <p className="feature-caption-text">{current.caption}</p>
          </div>
          {current.highlight && (
            <div className="feature-highlight-badge">
              <LuCheck size={14} className="highlight-icon" aria-hidden="true" />
              <span>{current.highlight}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Project Technical Details & Live Action ── */}
      <div className="project-detail-footer">
        <div className="detail-meta-group">
          <div className="detail-row">
            <span className="detail-label">Architecture &amp; Implementation:</span>
            <span className="detail-value">{project.detail}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Client / Business Impact:</span>
            <span className="detail-value outcome-value">{project.outcome}</span>
          </div>

          <div className="tech-stack-row">
            <span className="detail-label">Technology Stack:</span>
            <div className="tech-tags-list">
              {project.stack.map((tech) => (
                <span className="tag" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-cta-group">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <span>Launch Live Site</span>
              <LuExternalLink size={15} aria-hidden="true" />
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
    <article className={`card small-project-card animate animate-delay-${delay}`}>
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
