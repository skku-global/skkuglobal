import './Services.css'

const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    badge: 'Core Service',
    summary: 'Custom websites and web applications built for performance, conversion, and scale.',
    includes: [
      'Full-stack custom web apps (React, Next.js, Node.js, Express)',
      'Database architecture & schema design (MongoDB, Prisma, PostgreSQL)',
      'Responsive, mobile-optimized UI with modern styling and animations',
      'Production deployment, domain setup, and ongoing performance tuning',
    ],
    forWhom: 'Businesses, growing startups, and founders needing production-grade digital products rather than generic, slow site templates.',
  },
  {
    id: 'video-content',
    title: 'Ad & Video Content',
    badge: 'Creative',
    summary: 'Promotional and high-impact ad videos that showcase products, capture attention, and drive action.',
    includes: [
      'High-converting product demos and commercial video ads',
      'Scripting, motion graphics, video editing, and color grading',
      'Social-first vertical formats (Reels, TikTok, Shorts) and widescreen web cuts',
      'Founder story and brand documentary content',
    ],
    forWhom: 'Brands, digital agencies, and e-commerce companies looking to turn passive viewers into active customers through compelling video creative.',
  },
  {
    id: 'security-audits',
    title: 'Website Security Audits',
    badge: 'SecuScan Powered',
    summary: 'Comprehensive penetration tests and vulnerability scans to uncover flaws before attackers do.',
    includes: [
      'SecuScan automated & manual vulnerability analysis',
      'Authentication, session management, and OTP flow penetration testing',
      'API endpoint inspection, parameter tampering, and data exposure checks',
      'Detailed vulnerability remediation report with step-by-step fix guides',
    ],
    forWhom: 'Fintech platforms, SaaS applications, e-commerce stores, and businesses processing sensitive user credentials or payments.',
  },
  {
    id: 'digital-security',
    title: 'Full Digital Security',
    badge: 'Total Protection',
    summary: 'Holistic security beyond the codebase — protecting your identity, communications, and digital infrastructure.',
    includes: [
      'Business email authentication (SPF, DKIM, DMARC) & domain takeover defense',
      'Executive account hardening, password manager rollout, and hardware 2FA setup',
      'Cloud storage and admin panel credential isolation',
      'Bundled "Build-and-Secure" packages for brand-new sites and product launches',
    ],
    forWhom: 'Companies, executive founders, and teams who want comprehensive, 360-degree protection across their entire digital footprint.',
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">SERVICES</div>
          <h2>What we build and protect</h2>
          <p>
            From custom web engineering to SecuScan vulnerability audits and brand media —
            tailored digital services built to scale and secure your business.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <article
              className={`card service-card animate animate-delay-${i + 1}`}
              key={service.id}
            >
              <div className="service-card-top">
                <span className="service-badge">{service.badge}</span>
                <h3 className="service-title">{service.title}</h3>
              </div>

              <p className="service-summary">{service.summary}</p>

              <div className="service-block">
                <div className="service-block-heading">WHAT IT INCLUDES</div>
                <ul className="service-list">
                  {service.includes.map((item, idx) => (
                    <li key={idx}>
                      <span className="service-check" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-block service-for-block">
                <div className="service-block-heading">WHO IT&apos;S FOR</div>
                <p className="service-for-text">{service.forWhom}</p>
              </div>

              <div className="service-action">
                <a href="#contact" className="service-link">
                  Start a project
                  <span className="service-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
