import './Vision.css'

export default function Vision() {
  return (
    <section className="vision-section" id="vision">
      <div className="section-header animate">
        <div className="section-label">THE VISION</div>
        <h2>Building SKKU Global</h2>
        <p>A borderless fintech platform for everyone.</p>
      </div>
      <div className="vision-card animate animate-delay-1">
        <h3>Borderless banking for everyone</h3>
        <p>A global fintech platform — multi-currency accounts, international transfers, investment access, and Islamic finance products. Built for the people who were told global finance wasn't for them.</p>
        <div className="email-row">
          <input className="email-input" placeholder="your@email.com" type="email" />
          <button className="btn-primary">Get early access</button>
        </div>
      </div>
    </section>
  )
}
