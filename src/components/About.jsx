import './About.css'

const companyHighlights = [
  {
    title: 'Security-First Architecture',
    body: 'Every application we ship is engineered with rigorous authentication, strict data privacy controls, and proactive exposure defense from day one.',
  },
  {
    title: '100% Shipped Production Work',
    body: 'We build real, working platforms and deploy them live. Every case study in our portfolio is active in production — frontend, backend, database, and cloud infrastructure.',
  },
  {
    title: 'Verified Corporate Entity',
    body: 'SKKU Global Technologies Limited is a legally registered Nigerian entity (CAC) with corporate banking, official enterprise domain, and enterprise-grade code infrastructure.',
  },
]

const founderHighlights = [
  {
    title: 'Engineering Pedigree',
    body: 'Completing the ADSE diploma at Aptech Mokola, Ibadan — on a direct academic pathway to a BSc in Computer Science at Middlesex University, UK.',
  },
  {
    title: 'Vulnerability Research',
    body: 'Independently identified critical authentication weaknesses in active fintech applications on the market, inspiring the development of the SecuScan audit engine.',
  },
  {
    title: 'Execution Over Theory',
    body: 'Self-directed builder with production software in active use. Every architecture decision is tested against real-world throughput and security benchmarks.',
  },
]

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="shell">

        {/* ── Block 1: About SKKU ───────────────────────────────────── */}
        <div className="section-header animate">
          <div className="section-label">ABOUT THE COMPANY</div>
          <h2 id="about-heading">
            Enterprise Engineering.{' '}
            <span className="gradient-text">Built Security-First.</span>
          </h2>
          <p>
            SKKU Global Technologies Limited is a technology solutions company delivering custom
            web platforms, SecuScan automated vulnerability audits, and e-commerce infrastructure
            for ambitious founders, high-growth startups, and established enterprises.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio animate animate-delay-1">
            <p>
              Headquartered in Nigeria’s commercial tech corridor, we engineer software for a global client base spanning North America, the United Kingdom, Europe, Africa, and the Middle East.
              Our competitive advantage lies at the intersection of production-hardened full-stack engineering and deep vulnerability research.
            </p>
            <p>
              Rather than treating cybersecurity as a secondary checklist, security is baked into our foundational schemas, API routing, and state machines.
              Clients receive clean, maintainable codebases with documented architecture, enterprise SLA uptime, and zero guesswork.
            </p>
            
            <div className="about-metrics-row">
              <div className="metric-box">
                <span className="metric-num">100%</span>
                <span className="metric-text">Production Deployment Rate</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">&lt;30s</span>
                <span className="metric-text">SecuScan Audit Speed</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">8</span>
                <span className="metric-text">Platforms Shipped to Production</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            {companyHighlights.map((item, i) => (
              <div
                className={`about-card animate animate-delay-${i + 2}`}
                key={item.title}
              >
                <div className="card-indicator" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Block 2: Founder Leadership ───────────────────────────── */}
        <div className="section-header animate about-founders-header">
          <div className="section-label">FOUNDER &amp; LEAD ENGINEER</div>
          <h2>Abdulkabir Adekunle — Founder &amp; Lead Systems Architect</h2>
          <p>
            Hands-on technical leadership with direct engineering oversight on every production solution.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio animate animate-delay-1">
            <p>
              I am Abdulkabir — a full-stack software engineer and the founder of SKKU Global Technologies Limited.
              My engineering philosophy is rooted in concrete execution: building real software that handles actual traffic, protects real user data, and converts visitors into loyal customers.
            </p>
            <p>
              After independently uncovering security vulnerabilities in active fintech products, I built <strong>SecuScan</strong> to make automated security auditing accessible, rigorous, and fast.
              That exact mindset governs every client engagement at SKKU Global.
            </p>
            <p>
              Beyond software systems, I have spent years trading global financial markets (XAUUSD, BTCUSD) using strict quantitative risk management models.
              That same structured discipline, risk management, and mathematical precision is applied to our server architectures, database integrity, and client deliverables.
            </p>
          </div>

          <div className="about-highlights">
            {founderHighlights.map((item, i) => (
              <div
                className={`about-card animate animate-delay-${i + 2}`}
                key={item.title}
              >
                <div className="card-indicator" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
