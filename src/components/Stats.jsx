import './Stats.css'

const stats = [
  {
    num: '7+',
    label: 'Production Platforms Shipped',
    desc: 'Bespoke web, SaaS & retail systems deployed live',
  },
  {
    num: '<30s',
    label: 'SecuScan Audit Speed',
    desc: 'Multi-threaded automated vulnerability inspection',
  },
  {
    num: '24/7',
    label: 'Security Incident Support',
    desc: 'Continuous threat response & engineering oversight',
  },
  {
    num: '100%',
    label: 'Delivery SLA Record',
    desc: 'Milestones guaranteed with founder-led execution',
  },
]

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Key Performance Indicators">
      <div className="shell">
        <div className="stats-header animate text-center">
          <div className="stats-badge-pill">
            <span className="badge-pulse-dot" aria-hidden="true" />
            PROVEN TRACK RECORD
          </div>
          <h3 className="stats-heading">
            Engineering Rigor in <span className="gradient-text">Verifiable Numbers</span>
          </h3>
          <p className="stats-subtext">
            Every solution we build is backed by measurable reliability, rapid turnaround, and uncompromising zero-trust security.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className={`stat-card animate animate-delay-${i + 1}`} key={stat.label}>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
