import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import './HomePrime.css'

// ── Signature Prime Exits Sliding Double-Arrow SVG ──
function ArrowIcon() {
  return (
    <span className="pe-arrow" aria-hidden="true">
      <svg viewBox="0 0 16 16">
        <path d="M8.66657 11.0568L12.6666 7.05681L13.6094 7.99962L8.4713 13.1377L7.52849 13.1377L2.39042 7.99962L3.33323 7.05681L7.33323 11.0568L7.33323 2.66629L8.66657 2.66629L8.66657 11.0568Z" />
        <path d="M8.66657 11.0568L12.6666 7.05681L13.6094 7.99962L8.4713 13.1377L7.52849 13.1377L2.39042 7.99962L3.33323 7.05681L7.33323 11.0568L7.33323 2.66629L8.66657 2.66629L8.66657 11.0568Z" />
      </svg>
    </span>
  )
}

// ── Trust Advantages Data ──
const TRUST_ADVANTAGES = [
  {
    id: 1,
    title: 'Expertise in Custom React',
    desc: 'We are 100% focused on modern high-performance web architecture, identifying and eliminating bottlenecks before a single line deploys.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'SecuScan™ Auditing',
    desc: 'Our proprietary vulnerability audits inspect OWASP Top 10, JWT hardening, rate-limiting, and zero-trust policies before any build goes live.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Clean Code & Zero Tech Debt',
    desc: 'Every platform is built from scratch in React + Vite with clean component hierarchy, minimal bundle sizes, and optimal lighthouse scores.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Rapid 5–7 Day Sprint Windows',
    desc: 'Founder-led engagement means zero hand-off lag. We launch projects 60% faster than traditional bloated agencies without cutting corners.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Dedicated 60-Day Support SLA',
    desc: 'You receive 60 days of guaranteed post-launch SLA support, ensuring seamless asset handover and proactive bug resolution as you scale.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 6,
    title: '100% Repository & IP Ownership',
    desc: 'Your code, your IP. Complete GitHub repository ownership with zero vendor lock-in or proprietary licensing traps.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

// ── Strategy Selector Options ──
const STRATEGIES = [
  {
    id: 0,
    title: 'Quick Sprint',
    desc: 'For founders with defined scope and immediate go-to-market goals. We deliver production MVP in rapid cycles.',
    time: 'Delivery time: 2 to 4 weeks',
    image: '/services/service-web-keycaps.jpg',
  },
  {
    id: 1,
    title: 'Ramp Up & Modernize',
    desc: 'For growing businesses that need code refactoring, SecuScan™ security hardening, and performance scaling before expansion.',
    time: 'Delivery time: 4 to 8 weeks',
    image: '/services/service-brand-velocity.jpg',
  },
  {
    id: 2,
    title: 'Long Run Partnership',
    desc: 'For companies aiming for sustained digital excellence with a dedicated engineering team handling continuous feature rollouts.',
    time: 'Delivery time: Ongoing sprints',
    image: '/services/service-ads-motion.jpg',
  },
]

// ── Eight Flow Steps ──
const FLOW_STEPS = [
  {
    num: '01',
    title: 'Business & Tech Audit',
    desc: 'Conducting a thorough technical audit of your existing platform, auditing user flows, API architecture, competitors, and core metrics.',
  },
  {
    num: '02',
    title: 'Architecture & Ramp Up',
    desc: 'Engineering data schemas, choosing optimal component hierarchies, and outlining sprint milestones for maximum execution velocity.',
  },
  {
    num: '03',
    title: 'Paperwork & IP Protection',
    desc: 'Meticulously arranging all project documentation, service agreements, and guaranteeing 100% IP ownership transfer to you.',
  },
  {
    num: '04',
    title: 'Compelling UI/UX Prototyping',
    desc: 'Crafting high-fidelity interactive prototypes in Figma with micro-animations and responsive mobile-first design systems.',
  },
  {
    num: '05',
    title: 'Custom React Codebase',
    desc: 'Building zero-template, clean React + Vite application architecture adhering strictly to modern standards and maintainable patterns.',
  },
  {
    num: '06',
    title: 'SecuScan™ Hardening',
    desc: 'Executing comprehensive vulnerability scans, OWASP Top 10 mitigation, rate-limiting, and deep load testing before staging.',
  },
  {
    num: '07',
    title: 'Staging & QA Verification',
    desc: 'Conducting multi-browser verification, real-device QA testing, and stakeholder approval walk-throughs to ensure perfection.',
  },
  {
    num: '08',
    title: 'Deployment & 60-Day SLA',
    desc: 'Seamless production deployment to Vercel/AWS, DNS configuration, and 60 days of dedicated post-launch support and monitoring.',
  },
]

export default function Home() {
  const [activeStrategy, setActiveStrategy] = useState(0)
  const [currentTime, setCurrentTime] = useState('')
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isCalcOpen, setIsCalcOpen] = useState(false)

  // Quiz Modal State
  const [quizStep, setQuizStep] = useState(1)
  const [quizData, setQuizData] = useState({
    country: 'USA',
    revenue: '',
    profit: '',
    age: '',
    serviceType: 'Custom Web Platform',
    name: '',
    email: '',
    phone: '',
  })
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  // Calculator Modal State
  const [calcData, setCalcData] = useState({
    type: 'Custom Web Platform',
    revenue: '',
    users: '',
    name: '',
    email: '',
  })
  const [calcStep, setCalcStep] = useState(1)
  const [calcResult, setCalcResult] = useState(null)

  // Real-time live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'EST'
      setCurrentTime(`${timeStr} (${tz.split('/')[1] || tz})`)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Listen to open-evaluation-modal event from Navbar
  useEffect(() => {
    const handleOpenEval = () => setIsQuizOpen(true)
    window.addEventListener('open-evaluation-modal', handleOpenEval)
    return () => window.removeEventListener('open-evaluation-modal', handleOpenEval)
  }, [])

  // Auto-scroll anchor helper
  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Calculator computation
  const handleCalculateScope = (e) => {
    e.preventDefault()
    setCalcStep(2)
    const base = calcData.type === 'SecuScan™ Security Audit' ? 8500 : 18000
    setCalcResult(`$${base.toLocaleString()} – $${(base * 2.2).toLocaleString()}`)
  }

  return (
    <main id="main" className="prime-home-root">
      <Seo route="/" />

      {/* ══════════════════════════════════════════════════════════════
          1. HERO SECTION (.pe-first)
          ══════════════════════════════════════════════════════════════ */}
      <section className="pe-first" id="first">
        <div className="pe-first-video-wrapper">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/work/carbreezy-ferrari-hero.png"
          >
            <source src="/work/brand-ads-video.mp4" type="video/mp4" />
          </video>
          <div className="pe-first-video-overlay" />
        </div>

        <div className="pe-first-center">
          <div className="pe-container pe-first-center-container">
            <div className="pe-first-title-col">
              <h1 className="pe-title-main">
                Build your web platform with no hassle and at maximum performance
              </h1>
            </div>

            <div className="pe-first-info">
              <p className="pe-desc">
                Leverage our profound engineering expertise, dedicated React architecture, and SecuScan™ security audits to scale your digital presence.
              </p>
              <div>
                <button
                  type="button"
                  className="pe-btn"
                  data-button="white"
                  onClick={() => setIsQuizOpen(true)}
                  aria-label="Open form - get free evaluation"
                >
                  <span>Get free evaluation</span>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pe-container">
          <div className="pe-first-bottom" style={{ gridColumn: '1 / span 12' }}>
            <div className="pe-first-time">
              <span>{currentTime || '12:00 PM EST'}</span>
            </div>
            <button
              type="button"
              className="pe-first-scroll"
              onClick={() => handleScrollTo('about')}
              aria-label="Scroll down to about section"
            >
              <span>Scroll down</span>
              <svg className="pe-scroll-arrow" viewBox="0 0 16 16">
                <path d="M8 12L12 8L13 9L8 14L3 9L4 8L8 12L8 2L9 2L9 12Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. ABOUT IMPACT STATEMENT SECTION (.pe-about)
          ══════════════════════════════════════════════════════════════ */}
      <section className="pe-about" id="about">
        <div className="pe-container">
          <div className="pe-about-content">
            <div className="pe-section-desc">About</div>
            <h2 className="pe-title-large">
              You know <span className="pe-text-gradient">everything</span> about your business. We know how to engineer it at the <span className="pe-text-gradient">highest standard</span>.
            </h2>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. ADVANTAGES / WHY TRUST US (.pe-trust)
          ══════════════════════════════════════════════════════════════ */}
      <section className="pe-trust" id="advantages">
        <div className="pe-container">
          <div style={{ gridColumn: '1 / span 12' }}>
            <div className="pe-section-desc">Why trust us</div>
          </div>
          <div className="pe-trust-grid">
            {TRUST_ADVANTAGES.map((item) => (
              <div key={item.id} className="pe-trust-card">
                <div className="pe-trust-icon-box">{item.icon}</div>
                <h3 className="pe-title-medium">{item.title}</h3>
                <p className="pe-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. NETWORK / TALENT SPOTLIGHT (.pe-network)
          ══════════════════════════════════════════════════════════════ */}
      <section className="pe-network">
        <div className="pe-container">
          <div className="pe-network-header">
            <div className="pe-network-title">
              <div className="pe-section-desc">Save your time</div>
              <h2 className="pe-title-large">
                We have a closed <span className="pe-text-gradient">network</span> of elite software engineers
              </h2>
            </div>
            <div className="pe-network-desc">
              <p className="pe-desc">
                Our exclusive ecosystem of senior React architects, full-stack engineers, and security specialists bypasses months of interviewing, saving you months or even years of trial and error.
              </p>
            </div>
          </div>

          <div className="pe-network-media-wrapper">
            <video
              className="pe-network-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/work/brand-ads-video.mp4" type="video/mp4" />
            </video>
            <div className="pe-network-media-badge">
              <span className="pe-network-badge-pulse" />
              <span>100% Bespoke Craftsmanship • Zero Templates</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. CALCULATOR / SCOPE ESTIMATOR (.pe-calculator)
          ══════════════════════════════════════════════════════════════ */}
      <section className="pe-calculator" id="calculator">
        <div className="pe-container">
          <div className="pe-calculator-wrapper">
            <div className="pe-calc-left">
              <h2 className="pe-title-large">
                Thinking of building a platform <span className="pe-text-gradient">now</span> or later?
              </h2>
              <p className="pe-desc">
                You never know how much technical debt and slow templates are costing your business. Use our project scope calculator to get instant clarity.
              </p>
              <div>
                <button
                  type="button"
                  className="pe-btn"
                  onClick={() => setIsCalcOpen(true)}
                  aria-label="Open form - calculate project scope"
                >
                  <span>Calculate the scope</span>
                  <ArrowIcon />
                </button>
              </div>
              <div className="pe-calc-disclaimer">
                No personal data is needed. Check your real project scope.
              </div>
            </div>

            <div className="pe-calc-right">
              <div className="pe-calc-circle-big">
                <div className="pe-calc-circle-content">
                  <div className="pe-title-extraLarge">82%</div>
                  <div className="pe-calc-stat-desc">
                    of businesses struggle with template bloat and slow load times
                  </div>
                </div>
              </div>

              <div className="pe-calc-circle-small">
                <div className="pe-title-medium" style={{ color: '#FFFFFF', fontWeight: 800 }}>18%</div>
                <div className="pe-calc-stat-desc">
                  build custom from day one with enterprise reliability
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. STRATEGY SELECTOR (.pe-strategy)
          ══════════════════════════════════════════════════════════════ */}
      <section className="pe-strategy">
        <div className="pe-container">
          <div style={{ gridColumn: '1 / span 12' }}>
            <div className="pe-section-desc">Choose engagement strategy</div>
          </div>

          <div className="pe-strategy-grid">
            <div className="pe-strategy-media">
              <img
                src={STRATEGIES[activeStrategy].image}
                alt={STRATEGIES[activeStrategy].title}
                key={activeStrategy}
              />
            </div>

            <div className="pe-strategy-content">
              <div className="pe-strategy-tabs">
                {STRATEGIES.map((strat, idx) => (
                  <div
                    key={strat.id}
                    className={`pe-strategy-tab ${activeStrategy === idx ? 'is-active' : ''}`}
                    onClick={() => setActiveStrategy(idx)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="pe-strategy-tab-header">
                      <span className="pe-strategy-tab-title">{strat.title}</span>
                      <span className="pe-strategy-tab-time">{strat.time}</span>
                    </div>
                    <p className="pe-desc">{strat.desc}</p>
                    <div className="pe-strategy-tab-progress" />
                  </div>
                ))}
              </div>

              <div>
                <button
                  type="button"
                  className="pe-btn"
                  onClick={() => setIsQuizOpen(true)}
                >
                  <span>Select this strategy</span>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. CASE STUDY (.pe-case)
          ══════════════════════════════════════════════════════════════ */}
      <section className="pe-case" id="case">
        <div className="pe-container">
          <div style={{ gridColumn: '1 / span 12' }}>
            <div className="pe-section-desc">Successful story</div>
          </div>

          <div className="pe-case-grid">
            <div className="pe-case-left">
              <h2 className="pe-title-large">
                Meet <span className="pe-text-gradient">Carbreezy</span>
              </h2>
              <p className="pe-desc-large">
                Fast-growing automotive platform scaling to tens of thousands of concurrent enthusiasts.
              </p>
            </div>

            <div className="pe-case-media">
              <img
                src="/work/carbreezy-ferrari-hero.png"
                alt="Carbreezy Case Study"
              />
            </div>

            <div className="pe-case-right">
              <p className="pe-desc">
                Carbreezy was previously bogged down by heavy template code. We rebuilt their core web architecture from scratch in React + Vite with sub-second page transitions and SecuScan™ protection.
              </p>
              <div>
                <Link to="/work" className="pe-btn">
                  <span>Read client's case</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. EXIT FLOW / DELIVERY PROCESS (.pe-flow)
          ══════════════════════════════════════════════════════════════ */}
      <section className="pe-flow" id="flow">
        <div className="pe-container">
          <div className="pe-flow-header">
            <div className="pe-section-desc">Delivery Flow</div>
            <h2 className="pe-title-large">
              Eight steps to an <span className="pe-text-gradient">exceptional</span> launch
            </h2>
          </div>

          <div className="pe-flow-grid">
            {FLOW_STEPS.map((step) => (
              <div key={step.num} className="pe-flow-card">
                <div className="pe-flow-num">{step.num}</div>
                <h3 className="pe-title-medium">{step.title}</h3>
                <p className="pe-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          9. CONTACT / FOUNDER CARD (.pe-contact)
          ══════════════════════════════════════════════════════════════ */}
      <section className="pe-contact" id="contacts">
        {/* Infinite Marquee Ticker */}
        <div className="pe-ticker-container">
          <div className="pe-ticker-track">
            <div className="pe-ticker-item">Feel <span>free</span> to contact •</div>
            <div className="pe-ticker-item">Feel <span>free</span> to contact •</div>
            <div className="pe-ticker-item">Feel <span>free</span> to contact •</div>
            <div className="pe-ticker-item">Feel <span>free</span> to contact •</div>
            <div className="pe-ticker-item">Feel <span>free</span> to contact •</div>
            <div className="pe-ticker-item">Feel <span>free</span> to contact •</div>
          </div>
        </div>

        <div className="pe-container">
          <div className="pe-founder-card">
            <div className="pe-founder-media">
              <img src="/founder.jpg" alt="SKKU Global Leadership" />
              <div className="pe-founder-media-gradient" />
            </div>

            <div className="pe-founder-info">
              <div className="pe-founder-name">SKKU Global Team</div>
              <div className="pe-founder-role">Engineering & Architecture</div>
              <p className="pe-founder-quote">
                “Build your web platform with ease and get the highest engineering standard — we've got you covered from day one.”
              </p>
              <button
                type="button"
                className="pe-btn"
                onClick={() => setIsQuizOpen(true)}
              >
                <span>Get free evaluation</span>
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          10. INTERACTIVE QUIZ MODAL (EVALUATION)
          ══════════════════════════════════════════════════════════════ */}
      {isQuizOpen && (
        <div className="pe-modal-overlay" onClick={() => setIsQuizOpen(false)}>
          <div className="pe-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="pe-modal-header">
              <div>
                <div className="pe-section-desc" style={{ marginBottom: '0.5rem' }}>Get free evaluation</div>
                <h3 className="pe-title-medium">
                  {quizStep === 1 && <>Where is your <span className="pe-text-gradient">business</span> based?</>}
                  {quizStep === 2 && <>Tell us <span className="pe-text-gradient">more</span> about your scope</>}
                  {quizStep === 3 && <>Choose your <span className="pe-text-gradient">architecture</span> need</>}
                  {quizStep === 4 && <>Fill the form and get your <span className="pe-text-gradient">free evaluation</span></>}
                </h3>
              </div>
              <button
                type="button"
                className="pe-modal-close"
                onClick={() => setIsQuizOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Progress Bar */}
            <div className="pe-modal-progress-bar">
              <div
                className="pe-modal-progress-fill"
                style={{ width: `${quizStep * 25}%` }}
              />
            </div>

            {/* Step 1: Location */}
            {quizStep === 1 && (
              <div className="pe-modal-quiz-options">
                {['USA', 'Canada', 'Europe', 'Global / Other'].map((loc, i) => (
                  <div
                    key={loc}
                    className={`pe-quiz-option-card ${quizData.country === loc ? 'is-selected' : ''}`}
                    onClick={() => {
                      setQuizData({ ...quizData, country: loc })
                      setQuizStep(2)
                    }}
                  >
                    <span>{loc}</span>
                    <span className="pe-quiz-option-num">0{i + 1}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: Financial / Scope */}
            {quizStep === 2 && (
              <div className="pe-modal-form-fields">
                <label className="pe-form-label">
                  Target Annual Revenue / Budget Scale
                  <input
                    type="text"
                    className="pe-form-input"
                    placeholder="e.g. $500,000"
                    value={quizData.revenue}
                    onChange={(e) => setQuizData({ ...quizData, revenue: e.target.value })}
                  />
                </label>
                <label className="pe-form-label">
                  Estimated Launch Timeline
                  <input
                    type="text"
                    className="pe-form-input"
                    placeholder="e.g. 4–6 weeks"
                    value={quizData.profit}
                    onChange={(e) => setQuizData({ ...quizData, profit: e.target.value })}
                  />
                </label>
              </div>
            )}

            {/* Step 3: Service Type */}
            {quizStep === 3 && (
              <div className="pe-modal-quiz-options">
                {[
                  'Custom Web Platform',
                  'SecuScan™ Security Audit',
                  'E-Commerce Engine',
                  'Full Stack Scale & Modernize',
                ].map((type, i) => (
                  <div
                    key={type}
                    className={`pe-quiz-option-card ${quizData.serviceType === type ? 'is-selected' : ''}`}
                    onClick={() => {
                      setQuizData({ ...quizData, serviceType: type })
                      setQuizStep(4)
                    }}
                  >
                    <span>{type}</span>
                    <span className="pe-quiz-option-num">0{i + 1}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Contact & Submit */}
            {quizStep === 4 && !quizSubmitted && (
              <div className="pe-modal-form-fields">
                <label className="pe-form-label">
                  Your Full Name
                  <input
                    type="text"
                    className="pe-form-input"
                    placeholder="e.g. Sarah Jenkins"
                    required
                    value={quizData.name}
                    onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                  />
                </label>
                <label className="pe-form-label">
                  Work Email
                  <input
                    type="email"
                    className="pe-form-input"
                    placeholder="sarah@company.com"
                    required
                    value={quizData.email}
                    onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                  />
                </label>
                <label className="pe-form-label">
                  Phone / WhatsApp
                  <input
                    type="tel"
                    className="pe-form-input"
                    placeholder="+1 (555) 000-0000"
                    value={quizData.phone}
                    onChange={(e) => setQuizData({ ...quizData, phone: e.target.value })}
                  />
                </label>
              </div>
            )}

            {quizSubmitted && (
              <div className="pe-calc-result-box">
                <h4 className="pe-title-medium" style={{ color: '#00C853' }}>Evaluation Request Received!</h4>
                <p className="pe-desc" style={{ marginTop: '0.8rem' }}>
                  Thank you, {quizData.name}. Our principal engineers are reviewing your architecture requirements for {quizData.serviceType}. We will get back to you within 24 hours.
                </p>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pe-modal-footer">
              {quizStep > 1 && !quizSubmitted ? (
                <button
                  type="button"
                  className="pe-modal-back-btn"
                  onClick={() => setQuizStep(quizStep - 1)}
                >
                  ← Back
                </button>
              ) : <div />}

              {quizStep < 4 && quizStep !== 1 && quizStep !== 3 && (
                <button
                  type="button"
                  className="pe-btn"
                  onClick={() => setQuizStep(quizStep + 1)}
                >
                  <span>Next step</span>
                  <ArrowIcon />
                </button>
              )}

              {quizStep === 4 && !quizSubmitted && (
                <button
                  type="button"
                  className="pe-btn"
                  onClick={() => setQuizSubmitted(true)}
                >
                  <span>Submit Evaluation</span>
                  <ArrowIcon />
                </button>
              )}

              {quizSubmitted && (
                <button
                  type="button"
                  className="pe-btn"
                  onClick={() => {
                    setIsQuizOpen(false)
                    setQuizSubmitted(false)
                    setQuizStep(1)
                  }}
                >
                  <span>Done</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          11. INTERACTIVE CALCULATOR MODAL
          ══════════════════════════════════════════════════════════════ */}
      {isCalcOpen && (
        <div className="pe-modal-overlay" onClick={() => setIsCalcOpen(false)}>
          <div className="pe-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="pe-modal-header">
              <div>
                <div className="pe-section-desc" style={{ marginBottom: '0.5rem' }}>Project scope calculator</div>
                <h3 className="pe-title-medium">
                  {calcStep === 1 ? 'Configure Project Parameters' : 'Approximate Evaluation Result'}
                </h3>
              </div>
              <button
                type="button"
                className="pe-modal-close"
                onClick={() => setIsCalcOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {calcStep === 1 && (
              <form onSubmit={handleCalculateScope} className="pe-modal-form-fields">
                <label className="pe-form-label">
                  Service Type
                  <select
                    className="pe-form-select"
                    value={calcData.type}
                    onChange={(e) => setCalcData({ ...calcData, type: e.target.value })}
                  >
                    <option value="Custom Web Platform">Custom Web Platform (React + Vite)</option>
                    <option value="SecuScan™ Security Audit">SecuScan™ Security Audit</option>
                    <option value="Enterprise Architecture Rebuild">Enterprise Architecture Rebuild</option>
                    <option value="High-Concurrency E-Commerce">High-Concurrency E-Commerce</option>
                  </select>
                </label>

                <label className="pe-form-label">
                  Target User Concurrency / Monthly Scale
                  <input
                    type="text"
                    className="pe-form-input"
                    placeholder="e.g. 50,000 active users"
                    required
                    value={calcData.users}
                    onChange={(e) => setCalcData({ ...calcData, users: e.target.value })}
                  />
                </label>

                <label className="pe-form-label">
                  Expected Timeline Goal
                  <input
                    type="text"
                    className="pe-form-input"
                    placeholder="e.g. 3–6 weeks"
                    required
                    value={calcData.revenue}
                    onChange={(e) => setCalcData({ ...calcData, revenue: e.target.value })}
                  />
                </label>

                <div style={{ marginTop: '1.2rem' }}>
                  <button type="submit" className="pe-btn" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Calculate Now</span>
                    <ArrowIcon />
                  </button>
                </div>
              </form>
            )}

            {calcStep === 2 && (
              <div>
                <div className="pe-calc-result-box">
                  <div className="pe-section-desc" style={{ justifyContent: 'center' }}>Estimated Investment Range</div>
                  <div className="pe-calc-result-val">{calcResult}</div>
                  <p className="pe-desc">
                    Includes full React source code repository ownership, SecuScan™ security certification, and 60 days of post-launch SLA support.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                  <button
                    type="button"
                    className="pe-btn"
                    onClick={() => {
                      setIsCalcOpen(false)
                      setIsQuizOpen(true)
                    }}
                  >
                    <span>Book Strategy Call</span>
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
