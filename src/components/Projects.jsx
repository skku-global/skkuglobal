import './Projects.css'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">PROJECTS</div>
          <h2>What I&apos;ve built</h2>
          <p>
            Real products, deployed and live — built end-to-end, not cloned from
            tutorials.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              className={`card project-card animate animate-delay-${i + 1}`}
              key={project.title}
            >
              <div className="card-top">
                <h3 className="card-title">{project.title}</h3>
                <span className="card-badge">
                  <span className="badge-dot" aria-hidden="true" />
                  {project.badge}
                </span>
              </div>

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
