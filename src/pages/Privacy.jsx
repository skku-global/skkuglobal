import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { CONTACT_EMAIL, LEGAL_NAME, PHONE_CALLABLE_DISPLAY } from '../seo/siteMeta.js'
import './Legal.css'

export default function Privacy() {
  return (
    <main id="main" className="legal-page-main">
      <Seo route="/privacy" />

      <section className="legal-hero">
        <div className="legal-hero-shell">
          <span className="legal-kicker">LEGAL DOCUMENTATION</span>
          <h1 className="legal-headline">
            Privacy <span className="legal-highlight">Policy</span>
          </h1>
          <p className="legal-subtext">
            What this website collects, why, and how your data is strictly handled and protected under modern security standards.
          </p>
        </div>
      </section>

      <section className="legal-prose-section">
        <div className="legal-prose-shell">
          <div className="legal-meta-badge">
            <span className="legal-meta-dot" />
            <span>Last updated: 3 October 2026 · Data Controller: {LEGAL_NAME}</span>
          </div>

          <h2>Who we are</h2>
          <p>
            {LEGAL_NAME} (&ldquo;SKKU Global&rdquo;, &ldquo;we&rdquo;) is an engineering and technology company registered in Nigeria (CAC RC 7306232). Direct data inquiries may be routed to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or WhatsApp / phone at {PHONE_CALLABLE_DISPLAY}.
          </p>

          <h2>What the consultation studio collects</h2>
          <p>
            When you submit an engineering or design inquiry through the <Link to="/contact">Contact Studio</Link>, we request only the necessary information to evaluate and respond to your brief:
          </p>
          <ul>
            <li><strong>Your Name or Organization Name</strong> &mdash; to address you professionally in technical correspondence.</li>
            <li><strong>Your Email Address or Phone</strong> &mdash; to deliver project proposals and architecture milestones.</li>
            <li><strong>Project Objective & Budget Range</strong> &mdash; to route the project to founder engineering and schedule delivery.</li>
            <li><strong>Project Brief / Message</strong> &mdash; your specific feature requirements, friction points, or design goals.</li>
          </ul>
          <p>
            We do not collect sensitive personal financial data, payment card numbers, or passwords on this public portal. Never submit private infrastructure credentials or secret API keys in the initial consultation form.
          </p>

          <h2>Direct WhatsApp & Email Transmission</h2>
          <p>
            Consultation requests submitted via our website form are securely routed to our corporate inbox at <strong>{CONTACT_EMAIL}</strong> with TLS encryption. Inquiries sent via the WhatsApp button are transmitted directly through WhatsApp under its end-to-end encryption protocols.
          </p>

          <h2>Zero Cookies & Zero Tracking Pixels</h2>
          <p>
            This website sets <strong>no third-party advertising tracking cookies</strong>. We do not use Facebook Pixels, invasive cross-site ad networks, or data brokers.
          </p>

          <h2>Data Retention & Security</h2>
          <p>
            Consultation correspondence is retained exclusively for ongoing client relationships, commercial contracts, and accounting compliance. You may request permanent deletion of your project correspondence at any time by emailing{' '}
            <a href={`mailto:${CONTACT_EMAIL}?subject=Data%20Deletion%20Request`}>{CONTACT_EMAIL}</a> with &ldquo;Data Deletion Request&rdquo; in the subject line. We process verified requests within 3 business days.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under the Nigeria Data Protection Act (NDPA) and international data protection regulations, you hold the right to access, rectify, or erase any personal information provided to us.
          </p>

          <h2>Terms Reference</h2>
          <p>
            For conditions governing project handovers and code licenses, see our <Link to="/terms">Terms of Use</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
