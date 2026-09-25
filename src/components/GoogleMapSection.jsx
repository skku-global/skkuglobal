import './GoogleMapSection.css'

export default function GoogleMapSection() {
  return (
    <section className="google-map-section" id="location" aria-labelledby="map-heading">
      <div className="shell">
        <div className="section-header text-center animate">
          <div className="section-badge-pill">
            <span className="badge-pulse-dot" aria-hidden="true" />
            Lagos HQ · Worldwide Remote Delivery
          </div>
          <h2 id="map-heading" className="section-title">
            Find Us on Google Maps.{' '}
            <span className="gradient-text">Working With Clients Worldwide.</span>
          </h2>
          <p className="section-desc">
            SKKU Global Technologies Limited is a legally registered tech solutions provider
            headquartered in Nigeria’s commercial tech hub, delivering custom full-stack web platforms,
            SecuScan security audits, and enterprise architecture to clients across North America, Europe, Africa, and the Middle East.
          </p>
        </div>

        {/* ── Business Identity & Maps Action Bar ── */}
        <div className="google-trust-bar animate animate-delay-1">
          <div className="google-badge-cluster">
            <div className="google-icon-wrapper" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="google-badge-info">
              <div className="business-identity-line">
                <span className="identity-name">SKKU Global Technologies Limited</span>
                <span className="identity-locale">Lagos Tech Corridor, Nigeria</span>
              </div>
              <span className="business-focus-tag">
                Full-Stack Web Engineering &amp; Cybersecurity · CAC-Registered Entity
              </span>
            </div>
          </div>

          <div className="google-actions">
            <a
              href="https://maps.google.com/?q=Lagos+Tech+Hub+Nigeria"
              target="_blank"
              rel="noreferrer"
              className="map-action-btn"
            >
              <span>Open in Google Maps</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Map + Detail Layout ── */}
        <div className="google-map-container animate animate-delay-2">
          {/* Map Frame */}
          <div className="map-frame-wrapper">
            <iframe
              title="SKKU Global Technologies — Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126838.28318854044!2d3.351486!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              className="google-map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-location-tag">
              <span className="location-pin-dot" />
              <strong>HQ: Lagos Tech Corridor</strong> · Global Remote Engineering
            </div>
          </div>

          {/* Business & Logistics Card */}
          <div className="map-business-card">
            <div className="business-card-header">
              <span className="business-status-pill">
                <span className="status-indicator-green" /> Open for New Projects
              </span>
              <h3>SKKU Global Technologies Limited</h3>
              <p className="business-registration">
                CAC Registered Corporate Entity · Web Engineering &amp; Cybersecurity
              </p>
            </div>

            <div className="business-details-list">
              <div className="detail-item">
                <div className="detail-icon" aria-hidden="true">📍</div>
                <div>
                  <span className="detail-label">Primary Office &amp; Operations</span>
                  <p className="detail-val">Lagos Tech Corridor, Lagos State, Nigeria</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon" aria-hidden="true">🌐</div>
                <div>
                  <span className="detail-label">Client Coverage</span>
                  <p className="detail-val">Worldwide Remote Delivery (US, UK, EU, UAE, Pan-Africa)</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon" aria-hidden="true">⏱️</div>
                <div>
                  <span className="detail-label">Working Hours &amp; Incident SLA</span>
                  <p className="detail-val">Mon – Fri: 08:00 – 18:00 WAT · 24/7 Security Alert Support</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon" aria-hidden="true">✉️</div>
                <div>
                  <span className="detail-label">Direct Engineering Channel</span>
                  <p className="detail-val">
                    <a href="mailto:admin@skkuglobal.com" className="contact-link">admin@skkuglobal.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="business-card-footer">
              <a
                href="https://wa.me/2349132686150?text=Hello%20SKKU%20Global,%20I%20need%20a%20tech%20solution%20consultation"
                target="_blank"
                rel="noreferrer"
                className="btn-business-primary"
              >
                <span>Chat on WhatsApp</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a
                href="https://maps.google.com/?q=Lagos+Tech+Hub+Nigeria"
                target="_blank"
                rel="noreferrer"
                className="btn-business-secondary"
              >
                Directions ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── 4 Delivery Pillars ── */}
        <div className="recommendation-pillars-grid animate animate-delay-3">
          <div className="pillar-card">
            <div className="pillar-num">01</div>
            <h4>Full-Stack Architecture</h4>
            <p>
              Scalable, resilient web systems engineered with React, Node.js, Python, PostgreSQL, and high-availability cloud infrastructure.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">02</div>
            <h4>SecuScan Security First</h4>
            <p>
              Pre-deployment penetration testing, SSL/TLS optimization, OWASP header audits, and session security on every product shipped.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">03</div>
            <h4>Direct Founder Oversight</h4>
            <p>
              Zero agency bloat. Every line of code and architectural decision is reviewed and verified by senior engineering leadership.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">04</div>
            <h4>Guaranteed Delivery &amp; SLA</h4>
            <p>
              Transparent milestones, verified deliverables, secure staging previews, and ongoing maintenance retainers.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
