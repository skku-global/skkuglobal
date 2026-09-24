import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-inner">
        <div className="hero-tag animate">
          <span className="dot" aria-hidden="true" />
          Now taking projects
        </div>

        <h1 className="animate animate-delay-1">
          We Build.
          <br />
          <span>We Secure.</span>
          <br />
          We Ship.
        </h1>

        <p className="animate animate-delay-2">
          Web development · Security auditing · Digital protection —
          built from Nigeria, shipping globally.
        </p>

        <div className="hero-btns animate animate-delay-3">
          <a href="#contact" className="btn-primary">
            Start a project
          </a>
          <a href="#projects" className="btn-secondary">
            See our work
          </a>
        </div>

        <p className="hero-note animate animate-delay-4">
          CAC-registered company · 5 products live · Security-first from day one
        </p>
      </div>
    </section>
  )
}
