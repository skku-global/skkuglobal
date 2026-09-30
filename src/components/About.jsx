import {
  LuShieldCheck,
  LuRocket,
  LuBuilding2,
  LuGraduationCap,
  LuBug,
  LuCpu,
} from 'react-icons/lu'
import { projects } from '../data/projects.js'
import './About.css'

const companyHighlights = [
  {
    icon: LuShieldCheck,
    title: 'Security comes first',
    body: 'Authentication, data privacy and exposure defence are in from day one, not bolted on later.',
  },
  {
    icon: LuRocket,
    title: 'Everything here is live',
    body: 'Every case study on this site is running in production. You can click it and use it.',
  },
  {
    icon: LuBuilding2,
    title: 'A registered company',
    body: 'SKKU Global Technologies Limited is registered in Nigeria with the CAC, with corporate banking and its own domain.',
  },
]

const founderHighlights = [
  {
    icon: LuGraduationCap,
    title: 'Training',
    body: 'ADSE diploma at Aptech Mokola, Ibadan, then a BSc in Computer Science at Middlesex University, UK.',
  },
  {
    icon: LuBug,
    title: 'Research',
    body: 'Found critical auth weaknesses in live fintech apps. That is why SecuScan exists.',
  },
  {
    icon: LuCpu,
    title: 'Building, not theorising',
    body: 'Self-taught, with software in daily use. Every decision gets tested against real traffic.',
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
            Good software.{' '}
            <span className="gradient-text">Secured properly.</span>
          </h2>
          <p>
            We build custom web platforms, run SecuScan vulnerability audits, and ship
            e-commerce systems.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio animate animate-delay-1">
            <p>
              Based in Nigeria, building for clients in North America, the UK, Europe, Africa and the Middle East.
            </p>
            <p>
              Security is not a checklist at the end. It is in the schema, the API routes and the login flow
              from the first commit. What you get back is a clean codebase with the architecture written down.
            </p>
            
            <div className="about-metrics-row">
              <div className="metric-box">
                <span className="metric-num">100%</span>
                <span className="metric-text">Deployed live</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">&lt;30s</span>
                <span className="metric-text">Audit time</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">{projects.length}</span>
                <span className="metric-text">Platforms shipped</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            {companyHighlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  className={`about-card animate animate-delay-${i + 2}`}
                  key={item.title}
                >
                  <div className="card-indicator" aria-hidden="true">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Block 2: Founder Leadership ───────────────────────────── */}
        <div className="section-header animate about-founders-header">
          <div className="section-label">FOUNDER &amp; LEAD ENGINEER</div>
          <h2>Abdulkabir Ajiboye</h2>
          <p>
            Every project here is built with my hands on it.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio animate animate-delay-1">
            <p>
              I am Abdulkabir, a full-stack engineer and the founder of SKKU Global. I build software that
              handles real traffic and protects real user data.
            </p>
            <p>
              After finding security holes in live fintech products, I built <strong>SecuScan</strong> so that
              kind of audit is fast and cheap enough for anyone to run.
            </p>
            <p>
              I also trade global markets under strict risk rules. The same discipline goes into what we ship.
            </p>
          </div>

          <div className="about-highlights">
            {founderHighlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  className={`about-card animate animate-delay-${i + 2}`}
                  key={item.title}
                >
                  <div className="card-indicator" aria-hidden="true">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
