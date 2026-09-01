import './Projects.css'
import { projects } from '../data/projects'
import ProjectDemo from './ProjectDemo'

export default function Projects() {
  // A featured card spans the whole grid, so only the plain ones pair up into
  // two-column rows. An odd number of them leaves the last card alone in its
  // row, half the width of everything above it and reading like a mistake — so
  // that one is widened to fill the row instead. Counted here rather than in CSS
  // because `nth-child` counts the featured cards too, which would make the rule
  // quietly wrong the moment a third reel is added.
  const plainCount = projects.filter((project) => !project.featured).length
  const orphanTitle =
    plainCount % 2 === 1
      ? projects.filter((project) => !project.featured).at(-1).title
      : null

  return (
    <section className="projects-section" id="projects">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">PROJECTS</div>
          <h2>What I&apos;ve built</h2>
          <p>
            Real products, deployed and live — built end-to-end, not cloned from
            tutorials. The reels are recordings of the real build: short, silent,
            sound optional.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              className={`card project-card animate animate-delay-${i + 1}${
                project.featured ? ' project-card-featured' : ''
              }${project.title === orphanTitle ? ' project-card-wide' : ''}`}
              key={project.title}
            >
              <div className="card-top">
                <h3 className="card-title">{project.title}</h3>
                <span className="card-badge">
                  <span className="badge-dot" aria-hidden="true" />
                  {project.badge}
                </span>
              </div>

              {/* Context first, then the reel, then the detail underneath */}
              {project.demo && (
                <ProjectDemo title={project.title} {...project.demo} />
              )}

              <p className="card-desc">{project.description}</p>
              {project.detail && <p className="card-detail">{project.detail}</p>}

              <div className="card-stack">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="card-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-btn"
                  >
                    Live demo
                    <span className="sr-only"> — {project.title}</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-btn-ghost"
                  >
                    GitHub
                    <span className="sr-only"> — {project.title}</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
