import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: 'web-dev',
    title: 'Custom Web & SaaS Engineering',
    badge: 'Core Competency',
    summary: 'High-performance web applications, API architectures, and conversion-optimized platforms built for scale.',
    includes: [
      'Full-stack custom web applications (React, Next.js, FastAPI, Node.js)',
      'Database architecture & resilient schema design (PostgreSQL, Prisma, MongoDB)',
      'Responsive, mobile-first interfaces with sub-second page load times',
      'Production cloud deployment, automated CI/CD pipelines, and SLA monitoring',
    ],
    forWhom: 'Founders, funded startups, and enterprise teams needing robust, scalable codebases rather than slow off-the-shelf templates.',
  },
  {
    id: 'security-audits',
    title: 'SecuScan Web Vulnerability Audits',
    badge: 'Proprietary Engine',
    summary: 'Automated penetration testing and vulnerability analysis to eliminate security loopholes before malicious actors exploit them.',
    includes: [
      'SecuScan multi-threaded vulnerability scan and security header verification',
      'Authentication, session hijacking, and OTP flow vulnerability testing',
      'OWASP Top 10 compliance inspection and API parameter tampering checks',
      'Executive-ready PDF vulnerability remediation report with engineering fix instructions',
    ],
    forWhom: 'Fintech platforms, SaaS providers, e-commerce stores, and businesses managing customer payments or sensitive account credentials.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail Systems',
    badge: 'High Conversion',
    summary: 'Full-featured luxury and commercial online storefronts engineered with real-time carts, multi-currency support, and payment routing.',
    includes: [
      'Custom storefronts with interactive catalog filters and dynamic inventory states',
      'Multi-currency processing (₦, $, £, €) and automated checkout drawers',
      'Direct-to-WhatsApp concierge checkout integration for high-trust closing',
      'Fast CDN image optimization and mobile-first shopping UX',
    ],
    forWhom: 'Luxury retail brands, merchant founders, and direct-to-consumer businesses seeking higher checkout conversion rates.',
  },
  {
    id: 'digital-security',
    title: 'Enterprise Digital Defense & Infrastructure',
    badge: '360° Protection',
    summary: 'Comprehensive protection across your domain identity, cloud assets, administrative accounts, and business communications.',
    includes: [
      'Business email authentication (SPF, DKIM, DMARC) and domain spoofing defense',
      'Administrative account hardening, multi-factor hardware keys, and password management',
      'Cloud storage and server credential isolation',
      'Bundled "Build-and-Secure" architecture for new enterprise product launches',
    ],
    forWhom: 'Corporate executives, fast-scaling startups, and businesses requiring full protection across their entire digital footprint.',
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">CAPABILITIES &amp; SERVICES</div>
          <h2 id="services-heading">
            What We Build.{' '}
            <span className="gradient-text">What We Secure.</span>
          </h2>
          <p>
            From bespoke full-stack applications and high-conversion e-commerce systems to
            rigorous SecuScan cybersecurity audits — engineered with enterprise precision.
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
                <div className="service-block-heading">WHAT WE DELIVER</div>
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
                <div className="service-block-heading">IDEAL FOR</div>
                <p className="service-for-text">{service.forWhom}</p>
              </div>

              <div className="service-action">
                <Link to="/contact" className="service-link">
                  <span>Consult On This Service</span>
                  <span className="service-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
