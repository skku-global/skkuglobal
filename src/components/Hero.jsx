import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-tag animate">Available for work</div>
      <h1 className="animate animate-delay-1">I Build Fintech.<br /><span>I Trade Markets.</span><br />I Document Both.</h1>
      <p className="animate animate-delay-2">Full-Stack Developer · Trader · Fintech Founder<br />Building from Nigeria, going global.</p>
      <div className="hero-btns animate animate-delay-3">
        <a href="#contact" className="btn-primary">Hire Me</a>
        <a href="#projects" className="btn-secondary">See My Work</a>
      </div>
    </section>
  )
}
