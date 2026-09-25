import './Stats.css'

const stats = [
  { num: '7+', label: 'Production Platforms Shipped' },
  { num: '<30s', label: 'SecuScan Automated Audit Speed' },
  { num: '24/7', label: 'Security Incident Alert Support' },
  { num: '100%', label: 'On-Time Delivery & SLA Record' },
]

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Key Performance Indicators">
      <div className="shell">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className={`stat-card animate animate-delay-${i + 1}`} key={stat.label}>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
