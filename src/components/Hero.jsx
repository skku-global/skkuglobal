import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuSearch, LuArrowRight, LuSparkles, LuCheck, LuX, LuShieldCheck, LuZap, LuBuilding2, LuMessageSquare } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { waLink } from '../seo/siteMeta.js'
import './Hero.css'

const FAQ_PROMPTS = [
  {
    q: 'How fast can you deliver my website?',
    a: '5–7 business days for custom company websites, luxury e-commerce, and client platforms — fully responsive and SEO optimized.'
  },
  {
    q: 'What does SecuScan test on my site?',
    a: 'SecuScan runs automated OWASP Top 10 audits, security headers (CSP, HSTS), SSL TLS posture, and exposed endpoint vulnerability checks.'
  },
  {
    q: 'Can I work directly with the founder?',
    a: 'Yes. Abdulkabir (Lead Systems Architect) personally designs your database, writes your core logic, and conducts the pre-launch audit.'
  },
  {
    q: 'How does project payment work?',
    a: 'We use a transparent 50/50 milestone model: 50% deposit on contract kickoff, 50% upon completed deployment and approval.'
  }
]

export default function Hero() {
  const [askOpen, setAskOpen] = useState(false)
  const [customQuestion, setCustomQuestion] = useState('')
  const [selectedFaq, setSelectedFaq] = useState(null)

  const handleSelectFaq = (faq) => {
    setSelectedFaq(faq)
  }

  const handleClear = () => {
    setSelectedFaq(null)
    setCustomQuestion('')
  }

  return (
    <section className="think-hero" id="top" aria-label="Hero Introduction">
      {/* ── Atmospheric Canvas & Grid Overlay ── */}
      <div className="think-hero-canvas" aria-hidden="true">
        <div className="think-hero-glow glow-top" />
        <div className="think-hero-glow glow-bottom" />
        <div className="think-hero-noise" />
      </div>

      {/* ── Surrounding Floating Candid Photos (Think Company Framing) ── */}
      <div className="think-floating-card card-left animate" aria-hidden="true">
        <div className="think-photo-frame">
          <img
            src="/team/whiteboard.jpg"
            alt="Systems architecture & code review whiteboard session"
            className="think-card-img"
            loading="eager"
          />
          <div className="think-card-tag">Architecture &amp; Flow</div>
        </div>
      </div>

      <div className="think-floating-card card-top animate" aria-hidden="true">
        <div className="think-photo-frame">
          <img
            src="/team/pairing.jpg"
            alt="Engineers pair-programming and code auditing"
            className="think-card-img"
            loading="eager"
          />
          <div className="think-card-tag">Full-Stack Code Audit</div>
        </div>
      </div>

      <div className="think-floating-card card-right animate" aria-hidden="true">
        <div className="think-photo-frame">
          <img
            src="/team/lounge.jpg"
            alt="Software team discussing product strategy and wireframes"
            className="think-card-img"
            loading="eager"
          />
          <div className="think-card-tag">Roadmap &amp; Strategy</div>
        </div>
      </div>

      <div className="shell think-hero-shell">
        {/* ── Main Typographic Hero Core ── */}
        <div className="think-hero-center">
          <div className="think-hero-eyebrow animate">
            <span className="think-eyebrow-dot" aria-hidden="true" />
            <span>SKKU GLOBAL · SOFTWARE ENGINEERING &amp; SECURITY</span>
          </div>

          <h1 className="think-hero-headline animate animate-delay-1">
            We’re the engineers<br />
            <span className="think-hero-highlight">you want in the room.</span>
          </h1>

          <p className="think-hero-sub animate animate-delay-2">
            SKKU Global is a team of full-stack engineers and security architects who partner with ambitious businesses navigating real complexity — to work through the hard stuff, find what needs solving, and build what works.
          </p>

          {/* ── Interactive "Ask us anything..." Pill ── */}
          <div className="think-ask-wrapper animate animate-delay-2">
            <div
              className={`think-ask-pill ${askOpen ? 'open' : ''}`}
              onClick={() => !askOpen && setAskOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setAskOpen(true)}
              aria-label="Ask us anything about our engineering services"
            >
              <div className="ask-pill-input-row">
                <LuSearch className="ask-icon" aria-hidden="true" size={17} />
                <input
                  type="text"
                  placeholder="Ask us anything..."
                  value={customQuestion}
                  onChange={(e) => {
                    setCustomQuestion(e.target.value)
                    if (!askOpen) setAskOpen(true)
                  }}
                  onFocus={() => setAskOpen(true)}
                  className="ask-pill-field"
                  aria-label="Ask a question about timelines, audits, or pricing"
                />
                {askOpen ? (
                  <button
                    type="button"
                    className="ask-pill-close-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      setAskOpen(false)
                      handleClear()
                    }}
                    aria-label="Close question dialog"
                  >
                    <LuX size={15} />
                  </button>
                ) : (
                  <span className="ask-pill-hint">Press to explore</span>
                )}
              </div>

              {/* Expanded Prompt Panel */}
              {askOpen && (
                <div className="ask-expand-body" onClick={(e) => e.stopPropagation()}>
                  <div className="ask-prompt-chips">
                    <span className="chips-label">Popular client questions:</span>
                    <div className="chips-list">
                      {FAQ_PROMPTS.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`chip-btn ${selectedFaq?.q === item.q ? 'active' : ''}`}
                          onClick={() => handleSelectFaq(item)}
                        >
                          <LuSparkles size={12} aria-hidden="true" />
                          <span>{item.q}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedFaq && (
                    <div className="ask-answer-box">
                      <div className="answer-header">
                        <strong>{selectedFaq.q}</strong>
                      </div>
                      <p className="answer-text">{selectedFaq.a}</p>
                    </div>
                  )}

                  {customQuestion.trim().length > 0 && !selectedFaq && (
                    <div className="ask-custom-reply">
                      <p>Have specific requirements for &ldquo;{customQuestion}&rdquo;?</p>
                      <a
                        href={waLink(`Hello SKKU Global, I have a question about my project: "${customQuestion}". Can we discuss?`)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary ask-wa-action"
                      >
                        <FaWhatsapp size={15} aria-hidden="true" />
                        <span>Ask Abdulkabir on WhatsApp</span>
                      </a>
                    </div>
                  )}

                  <div className="ask-footer-meta">
                    <span>⚡ Founder response time: &lt; 15 mins on WhatsApp</span>
                    <a
                      href={waLink("Hello Abdulkabir, I'd like a direct consultation for my business website/software.")}
                      target="_blank"
                      rel="noreferrer"
                      className="ask-direct-link"
                    >
                      <span>Direct Chat</span>
                      <LuArrowRight size={13} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Action Buttons ── */}
          <div className="think-hero-actions animate animate-delay-3">
            <a
              href={waLink('Hello SKKU Global, I want to discuss building a website or custom software for my business. Can we talk about requirements and pricing?')}
              target="_blank"
              rel="noreferrer"
              className="think-btn-primary"
            >
              <FaWhatsapp size={18} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link to="/work" className="think-btn-secondary">
              <span>View Case Studies</span>
              <LuArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          {/* ── Bottom Mobile Candid Gallery (Shown on small viewports) ── */}
          <div className="think-mobile-gallery" aria-label="Team in action">
            <div className="mobile-thumb">
              <img src="/team/whiteboard.jpg" alt="Architecture whiteboard" />
              <span>Architecture</span>
            </div>
            <div className="mobile-thumb">
              <img src="/team/pairing.jpg" alt="Pair programming" />
              <span>Security Audit</span>
            </div>
            <div className="mobile-thumb">
              <img src="/team/lounge.jpg" alt="Strategy roadmap" />
              <span>Strategy</span>
            </div>
          </div>

          {/* ── Trust Credential Strip ── */}
          <div className="think-trust-strip animate animate-delay-4">
            <div className="think-trust-item">
              <LuBuilding2 size={14} className="trust-icon" aria-hidden="true" />
              <span>CAC Registered: <strong>RC 7306232</strong></span>
            </div>
            <div className="think-trust-item">
              <LuZap size={14} className="trust-icon" aria-hidden="true" />
              <span>Fast <strong>5–7 Day</strong> Turnaround</span>
            </div>
            <div className="think-trust-item">
              <LuShieldCheck size={14} className="trust-icon" aria-hidden="true" />
              <span>Built-in <strong>SecuScan</strong> Audit</span>
            </div>
            <div className="think-trust-item">
              <LuMessageSquare size={14} className="trust-icon" aria-hidden="true" />
              <span>Direct <strong>Lead Architect</strong> Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
