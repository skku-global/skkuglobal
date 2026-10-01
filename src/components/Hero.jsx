import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuCheck, LuArrowRight, LuExternalLink, LuShieldCheck, LuShoppingBag } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { waLink } from '../seo/siteMeta.js'
import './Hero.css'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('scanner')

  return (
    <section className="hero" id="top" aria-label="Hero Introduction">
      <div className="shell hero-inner">
        {/* ── Genuine Studio Eyebrow ───────────────── */}
        <div className="hero-eyebrow animate">
          <span className="eyebrow-badge">SKKU GLOBAL</span>
          <span className="eyebrow-text">Software Engineering &amp; Cybersecurity Studio · RC: 7306232</span>
        </div>

        {/* ── Grounded Human Headline ─────────────── */}
        <h1 className="hero-title animate animate-delay-1">
          High-performance websites &amp; custom software.{' '}
          <span className="gradient-text">Built to convert.</span>
        </h1>

        <p className="hero-subtitle animate animate-delay-2">
          We build websites, e-commerce stores and full-stack software, then audit them with our own <strong>SecuScan</strong> engine before launch. Founder-led, milestone pricing, 5–7 day turnaround.
        </p>

        {/* ── Primary Action Triggers ─────────────── */}
        <div className="hero-actions animate animate-delay-2">
          <a
            href={waLink('Hello SKKU Global, I want to discuss building a website or custom software for my business. Can we talk about requirements and pricing?')}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hero-btn-whatsapp"
          >
            <FaWhatsapp size={19} aria-hidden="true" />
            <span>Chat on WhatsApp — Free Consultation</span>
          </a>
          <Link to="/work" className="btn-secondary hero-btn-portfolio">
            <span>Explore Live Case Studies</span>
            <LuArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* ── Interactive Live Technology Preview (Proof of Craftsmanship) ── */}
        <div className="hero-showcase-container animate animate-delay-3">
          <div className="showcase-window">
            {/* Topbar */}
            <div className="showcase-topbar">
              <div className="showcase-controls" aria-hidden="true">
                <span className="ctrl-circle red" />
                <span className="ctrl-circle yellow" />
                <span className="ctrl-circle green" />
              </div>

              <div className="showcase-tabs" role="tablist" aria-label="Interactive Demo Switcher">
                <button
                  type="button"
                  role="tab"
                  id="showcase-tab-scanner"
                  aria-controls="showcase-panel"
                  aria-selected={activeTab === 'scanner'}
                  className={`showcase-tab ${activeTab === 'scanner' ? 'active' : ''}`}
                  onClick={() => setActiveTab('scanner')}
                >
                  <LuShieldCheck size={14} aria-hidden="true" />
                  <span>SecuScan Security Audit</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  id="showcase-tab-ecommerce"
                  aria-controls="showcase-panel"
                  aria-selected={activeTab === 'ecommerce'}
                  className={`showcase-tab ${activeTab === 'ecommerce' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ecommerce')}
                >
                  <LuShoppingBag size={14} aria-hidden="true" />
                  <span>Luxe Hair E-Commerce</span>
                </button>
              </div>

              <div className="showcase-badge">
                <span className="pulse-green-dot" aria-hidden="true" />
                <span>SAMPLE OUTPUT</span>
              </div>
            </div>

            {/* Showcase Viewport Content */}
            <div
              className="showcase-body"
              role="tabpanel"
              id="showcase-panel"
              aria-labelledby={activeTab === 'scanner' ? 'showcase-tab-scanner' : 'showcase-tab-ecommerce'}
            >
              {activeTab === 'scanner' ? (
                <div className="showcase-pane scanner-pane">
                  <div className="pane-header">
                    <div className="pane-title-group">
                      <span className="pane-tag">PROPRIETARY CYBERSECURITY PLATFORM</span>
                      <h4>SecuScan Automated Audit Engine</h4>
                    </div>
                    <a
                      href="https://secuscan-orpin.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="pane-link"
                    >
                      <span>Launch App</span>
                      <LuExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>

                  <div className="audit-terminal-card">
                    <div className="terminal-header">
                      <span className="terminal-prompt">$ secuscan audit --target example.com --deep</span>
                      <span className="terminal-time">under 30s runtime</span>
                    </div>
                    <div className="terminal-results-grid">
                      <div className="audit-metric passed">
                        <LuCheck size={14} className="metric-icon" aria-hidden="true" />
                        <div>
                          <div className="metric-label">SSL / TLS 1.3 Posture</div>
                          <div className="metric-val">Grade A+ · 2048-bit RSA Valid</div>
                        </div>
                      </div>
                      <div className="audit-metric passed">
                        <LuCheck size={14} className="metric-icon" aria-hidden="true" />
                        <div>
                          <div className="metric-label">Security Headers</div>
                          <div className="metric-val">HSTS, CSP, X-Frame-Options Enforced</div>
                        </div>
                      </div>
                      <div className="audit-metric passed">
                        <LuCheck size={14} className="metric-icon" aria-hidden="true" />
                        <div>
                          <div className="metric-label">OWASP Top 10 Checks</div>
                          <div className="metric-val">0 Critical Vulnerabilities Detected</div>
                        </div>
                      </div>
                      <div className="audit-metric passed">
                        <LuCheck size={14} className="metric-icon" aria-hidden="true" />
                        <div>
                          <div className="metric-label">Port Telemetry</div>
                          <div className="metric-val">Ports 80/443 Open · All others Filtered</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="showcase-pane ecommerce-pane">
                  <div className="pane-header">
                    <div className="pane-title-group">
                      <span className="pane-tag">COMMERCIAL STOREFRONT SOLUTION</span>
                      <h4>Luxe Hair Co — Luxury Boutique &amp; WhatsApp Cart</h4>
                    </div>
                    <a
                      href="https://luxehair-tau.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="pane-link"
                    >
                      <span>Launch Store</span>
                      <LuExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>

                  <div className="store-preview-card">
                    <div className="store-product-meta">
                      <span className="store-pill">HIGH-CONVERSION RETAIL</span>
                      <h5>Raw Vietnamese Bone Straight Wig (HD Lace)</h5>
                      <p className="store-desc">
                        Dynamic Naira pricing, instant multi-length picker, and frictionless one-click WhatsApp order dispatch.
                      </p>
                      <div className="store-tags">
                        <span className="store-spec">₦125,000</span>
                        <span className="store-spec">Length: 26"</span>
                        <span className="store-spec">Density: 250%</span>
                        <span className="store-spec in-stock">
                          <LuCheck size={12} aria-hidden="true" />
                          <span>Ready to Ship</span>
                        </span>
                      </div>
                    </div>
                    <div className="store-action-demo">
                      <a
                        href={waLink("Hello SKKU Global, I want to build an e-commerce website with WhatsApp checkout like Luxe Hair Co.")}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary store-wa-btn"
                      >
                        <FaWhatsapp size={16} aria-hidden="true" />
                        <span>Order via WhatsApp Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Verified Human Trust Strip ─────────── */}
        <div className="hero-trust-bar animate animate-delay-4">
          <div className="trust-pill-item">
            <LuCheck size={14} className="trust-icon" aria-hidden="true" />
            <span>CAC Registered: <strong>RC 7306232</strong></span>
          </div>
          <div className="trust-pill-item">
            <LuCheck size={14} className="trust-icon" aria-hidden="true" />
            <span>Fast <strong>5–7 Day</strong> Turnaround</span>
          </div>
          <div className="trust-pill-item">
            <LuCheck size={14} className="trust-icon" aria-hidden="true" />
            <span>Free <strong>SecuScan</strong> Security Audit</span>
          </div>
          <div className="trust-pill-item">
            <LuCheck size={14} className="trust-icon" aria-hidden="true" />
            <span>Direct <strong>Founder</strong> Access</span>
          </div>
        </div>
      </div>
    </section>
  )
}
