import { Link } from 'react-router-dom'
import { LuArrowRight, LuHouse } from 'react-icons/lu'
import Seo from '../components/Seo'
import './Home.css'
import './Legal.css'

const suggestions = [
  { to: '/services', title: 'Services', hint: 'What you can book today' },
  { to: '/work', title: 'Case Studies', hint: 'Live systems we built' },
  { to: '/about', title: 'About SKKU Global', hint: 'Who we are and how we work' },
  { to: '/support', title: 'Support & Consultation', hint: 'Start a project or ask for an audit' },
]

export default function NotFound() {
  return (
    <main id="main" className="page-enter">
      <Seo route="/404" />

      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">ERROR 404</div>
          <h1 className="animate animate-delay-1">
            <span className="notfound-code">404</span>
            This page doesn&apos;t exist
          </h1>
          <p className="animate animate-delay-2">
            The link may be out of date. Everything on skkuglobal.com is reachable
            from the four sections below.
          </p>
          <div className="notfound-actions animate animate-delay-2">
            <Link to="/" className="btn-primary">
              <LuHouse size={16} aria-hidden="true" />
              Back to home
            </Link>
            <Link to="/support" className="btn-secondary">
              Contact support
              <LuArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="notfound-suggestions">
        <div className="shell">
          <h2>Where you probably meant to go</h2>
          <ul className="notfound-links">
            {suggestions.map((s) => (
              <li key={s.to}>
                <Link to={s.to}>
                  {s.title}
                  <span>{s.hint}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
