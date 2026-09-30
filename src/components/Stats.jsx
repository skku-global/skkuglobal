import {
  LuRocket,
  LuShieldCheck,
  LuActivity,
  LuCircleCheck,
} from 'react-icons/lu'
import { projects } from '../data/projects.js'
import './Stats.css'

const stats = [
  {
    icon: LuRocket,
    num: String(projects.length),
    label: 'Platforms shipped',
    desc: 'Web, SaaS and retail systems',
  },
  {
    icon: LuShieldCheck,
    num: '<30s',
    label: 'Audit time',
    desc: 'A full SecuScan run',
  },
  {
    icon: LuActivity,
    num: '24/7',
    label: 'Scan on demand',
    desc: 'SecuScan runs whenever you need it',
  },
  {
    icon: LuCircleCheck,
    num: '100%',
    label: 'Live in production',
    desc: 'Every case study here is running',
  },
]

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Key Performance Indicators">
      <div className="shell">
        <div className="stats-header animate text-center">
          <div className="stats-badge-pill">
            <span className="badge-pulse-dot" aria-hidden="true" />
            TRACK RECORD
          </div>
          <h3 className="stats-heading">
            By the <span className="gradient-text">numbers</span>
          </h3>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div className={`stat-card animate animate-delay-${i + 1}`} key={stat.label}>
                <div className="stat-icon-wrapper" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
