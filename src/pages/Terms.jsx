import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { CONTACT_EMAIL, LEGAL_NAME, ORIGIN } from '../seo/siteMeta.js'
import './Legal.css'

const DOMAIN = ORIGIN.replace('https://', '')

export default function Terms() {
  return (
    <main id="main" className="legal-page-main">
      <Seo route="/terms" />

      <section className="legal-hero">
        <div className="legal-hero-shell">
          <span className="legal-kicker">LEGAL DOCUMENTATION</span>
          <h1 className="legal-headline">
            Terms of <span className="legal-highlight">Use</span>
          </h1>
          <p className="legal-subtext">
            The governing terms of service for SKKU Global Technologies Limited, engagement parameters, and software licensing.
          </p>
        </div>
      </section>

      <section className="legal-prose-section">
        <div className="legal-prose-shell">
          <div className="legal-meta-badge">
            <span className="legal-meta-dot" />
            <span>Last updated: 3 October 2026 · SKKU GLOBAL TECHNOLOGIES LIMITED • REGISTERED IN NIGERIA</span>
          </div>

          <h2>1. These terms</h2>
          <p>
            {DOMAIN} is operated by {LEGAL_NAME}, an engineering company registered in Nigeria (SKKU GLOBAL TECHNOLOGIES LIMITED • REGISTERED IN NIGERIA). By using this site you accept these terms. They govern the website only &mdash; commercial engineering engagements are governed by the separate written scope and milestone contract we sign with you.
          </p>

          <h2>2. What this site is</h2>
          <p>
            An informational corporate technology portal. The capability descriptions, case studies, and architectural claims represent our technical execution standards. A formal engagement begins once both parties sign an agreed statement of work.
          </p>

          <h2>3. Enquiries & Consultations</h2>
          <p>
            Sending an inquiry through our <Link to="/contact">Contact Studio</Link>, direct email, or official WhatsApp channel does not oblige us to take the work on, and does not oblige you to proceed. We review incoming briefs with guaranteed SLA response within 24 hours. What we do with the information you send is set out in our <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <h2>4. Security & Audit Scope</h2>
          <p>
            SecuScan and our audit services inspect systems you explicitly authorize us to test under documented scope. <strong>You must own the target system or hold documented permission to test it.</strong> Requesting a scan of infrastructure you do not control is strictly prohibited.
          </p>
          <p>
            No automated audit can certify absolute absence of vulnerabilities. Our reports describe vulnerabilities isolated within the agreed scope, using state-of-the-art heuristics, JWT verification, and automated inspection.
          </p>

          <h2>5. Intellectual Property & Code Ownership</h2>
          <p>
            The branding, design, text, and architecture of this portal, the SKKU Global marks, and SecuScan belong to SKKU Global Technologies Limited.
          </p>
          <p>
            For paid client engineering: <strong>you receive 100% intellectual property ownership</strong> of delivered code, repositories, custom UI components, and assets upon final milestone payment and handover.
          </p>

          <h2>6. Third-Party Links & Deployments</h2>
          <p>
            External deployment URLs, verified client web applications, and social channels are subject to their respective third-party terms and privacy policies.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, SKKU Global Technologies Limited is not liable for indirect or consequential damages arising from website browsing. Engineering performance and warranties for commissioned platforms are strictly delineated within individual client service level agreements.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, under the jurisdiction of Nigerian courts.
          </p>

          <h2>9. Direct Contact</h2>
          <p>
            Direct inquiries regarding these terms:{' '}
            <a href={`mailto:${CONTACT_EMAIL}?subject=Terms%20of%20Use%20Query`}>{CONTACT_EMAIL}</a> or WhatsApp{' '}
            <a href="https://wa.me/2348057215622" target="_blank" rel="noreferrer">+234 805 721 5622</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
