import './Stats.css'

const stats = [
  { num: '4', label: 'Products shipped' },
  { num: '2+', label: 'Years trading' },
  { num: '4.2k', label: 'YouTube subscribers' },
  { num: 'CAC', label: 'Registered company' },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="shell stats">
        {stats.map((stat, i) => (
          <div className={`stat animate animate-delay-${i + 1}`} key={stat.label}>
            <div className="stat-num">{stat.num}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
