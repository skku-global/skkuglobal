import './Stats.css'

export default function Stats() {
  const stats = [
    { num: "2+", label: "Years building" },
    { num: "4", label: "Live projects" },
    { num: "4.2k", label: "YouTube subscribers" },
    { num: "Global", label: "Vision" },
  ]

  return (
    <section className="stats">
      {stats.map((stat, i) => (
        <div className={`stat animate animate-delay-${i + 1}`} key={i}>
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  )
}
