import './Projects.css'
import { projects } from '../data/projects'

export default function Projects() {
  // Split featured (have poster) from smaller cards
  const featured = projects.filter((p) => p.featured)
  const rest     = projects.filter((p) => !p.featured)

  return (
    <section className="projects-section" id="projects">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">WORK</div>
          <h2>Case studies &amp; deployed work</h2>
          <p>
            Real products, deployed and live — built end-to-end with production architecture,
            security-first data flows, and zero filler.
          </p>
        </div>

        {/* ── Featured (full-width poster) cards ── */}
        {featured.map((project, i) => (
          <FeaturedCard key={project.title} project={project} delay={i + 1} />
        ))}

        {/* ── Grid of remaining cards ─────────── */}
        <div className="projects-grid">
          {rest.map((project, i) => (
            <SmallCard key={project.title} project={project} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Full-width featured card with screenshot ── */
function FeaturedCard({ project, delay }) {
  return (
    <article className={`featured-card animate animate-delay-${delay}`}>
      {project.poster && (
        <div className="featured-card-visual">
          <div className="browser-chrome">
            <div className="browser-dots" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div className="browser-url">
              <span className="url-lock" aria-hidden="true">🔒</span>
              {project.siteLabel || project.liveUrl}
            </div>
          </div>
          <div className="featured-screenshot">
            <img
              src={project.poster}
              alt={`${project.title} — live screenshot`}
              loading="lazy"
            />
          </div>
        </div>
      )}

      <div className="featured-card-body">
        <div className="card-top">
          <h3 className="card-title">{project.title}</h3>
          <span className="card-badge">
            <span className="badge-dot" aria-hidden="true" />
            {project.badge}
          </span>
        </div>

        <p className="card-desc">{project.description}</p>
        {project.detail && <p className="card-detail">{project.detail}</p>}

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
              Live site ↗
              <span className="sr-only"> — {project.title}</span>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-btn-ghost">
              GitHub
              <span className="sr-only"> — {project.title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/* ── Compact grid card ──────────────────────── */
function SmallCard({ project, delay }) {
  return (
    <article className={`card project-card animate animate-delay-${delay}`}>
      {project.poster && (
        <div className="small-card-thumb">
          <img
            src={project.poster}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        </div>
      )}

      <div className="card-top">
        <h3 className="card-title">{project.title}</h3>
        <span className="card-badge">
          <span className="badge-dot" aria-hidden="true" />
          {project.badge}
        </span>
      </div>

      <p className="card-desc">{project.description}</p>
      {project.detail && <p className="card-detail">{project.detail}</p>}

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
            Live site ↗
            <span className="sr-only"> — {project.title}</span>
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-btn-ghost">
            GitHub
            <span className="sr-only"> — {project.title}</span>
          </a>
        )}
      </div>
    </article>
  )
}
