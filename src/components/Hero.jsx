import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-inner">
        <div className="hero-tag animate">
          <span className="dot" aria-hidden="true" />
          Available for work
        </div>

        <h1 className="animate animate-delay-1">
          I Build Fintech.
          <br />
          <span>I Trade Markets.</span>
          <br />
          I Document Both.
        </h1>

        <p className="animate animate-delay-2">
          Full-Stack Developer · Trader · Founder of SKKU Global Technologies
          Limited. Building borderless banking from Nigeria, going global.
        </p>

        <div className="hero-btns animate animate-delay-3">
          <a href="#contact" className="btn-primary">
            Hire Me
          </a>
          <a href="#projects" className="btn-secondary">
            See My Work
          </a>
        </div>

        <p className="hero-note animate animate-delay-4">
          CAC-registered company · 4 products shipped end-to-end · Trading funded
          prop accounts
        </p>
      </div>
    </section>
  )
}
