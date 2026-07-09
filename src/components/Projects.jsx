import './Projects.css'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header animate">
        <div className="section-label">PROJECTS</div>
        <h2>What I've built</h2>
        <p>Real projects, deployed and live — not just tutorials.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className={`card animate animate-delay-${i + 1}`} key={i}>
            <div className="card-top">
              <span className="card-title">{project.title}</span>
              <span className="card-badge">{project.badge}</span>
            </div>
            <p className="card-desc">{project.description}</p>
            <div className="card-stack">
              {project.stack.map((tech, j) => (
                <span className="tag" key={j}>{tech}</span>
              ))}
            </div>
            <div className="card-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-btn">Live demo</a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-btn-ghost">GitHub</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
