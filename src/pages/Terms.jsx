import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { CONTACT_EMAIL, LEGAL_NAME, ORIGIN } from '../seo/siteMeta.js'
import './Home.css'
import './Legal.css'

const DOMAIN = ORIGIN.replace('https://', '')

export default function Terms() {
  return (
    <main id="main" className="page-enter">
      <Seo route="/terms" />

      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">LEGAL</div>
          <h1 className="animate animate-delay-1">
            Terms of <span className="gradient-text">Use</span>
          </h1>
          <p className="animate animate-delay-2">
            The terms that govern your use of this website, and the limits of what the information
            on it commits us to.
          </p>
        </div>
      </section>

      <section className="legal-prose">
        <div className="shell">
          <span className="legal-updated">Last updated: 29 September 2026</span>

          <h2>1. These terms</h2>
          <p>
            {DOMAIN} is operated by {LEGAL_NAME}, a company registered in Nigeria. By using this
            site you accept these terms. They govern the website only &mdash; paid work is governed
            by the separate written agreement we sign for that engagement, and where the two
            conflict, that agreement wins.
          </p>

          <h2>2. What this site is</h2>
          <p>
            An informational company website. The capability descriptions, case studies and
            technical claims on it are marketing material, not a quotation and not an offer capable
            of acceptance. Nothing here creates a contract, a retainer or a service-level
            commitment. A project exists once we have both signed a scope of work.
          </p>

          <h2>3. Enquiries</h2>
          <p>
            Sending an enquiry through the <Link to="/support">Support</Link> form, WhatsApp or email
            does not oblige us to take the work on, and does not oblige you to proceed. Response
            times mentioned anywhere on this site are targets we aim for in good faith, not
            contractual deadlines. What we do with the information you send is set out in our{' '}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <h2>4. Security services in particular</h2>
          <p>
            SecuScan and our audit services test the systems you explicitly authorise us to test,
            under written scope. <strong>You must own the target system or hold documented
            permission to have it tested.</strong> Requesting a scan of infrastructure you do not
            control is a misuse of the service and we will decline it.
          </p>
          <p>
            No security audit can prove the absence of vulnerabilities. Our reports describe what was
            found within the agreed scope, at the time of testing, using the methods stated. They are
            not a guarantee that a system is secure, and not a certification.
          </p>

          <h2>5. Intellectual property</h2>
          <p>
            The design, text, code and graphics of this site, the SKKU Global name and the SecuScan
            name belong to us. You may link to these pages and quote short extracts with
            attribution. You may not copy the site wholesale, present it as your own, or use our
            name or marks to imply a partnership or endorsement that does not exist.
          </p>
          <p>
            Client work shown under <Link to="/work">Case Studies</Link> is published with the
            relevant client&rsquo;s agreement and remains their property. On a paid engagement,
            ownership of the deliverables transfers to you as set out in that engagement&rsquo;s
            agreement &mdash; typically on final payment. Our pre-existing tooling and internal
            libraries stay ours, licensed to you for use in the delivered system.
          </p>

          <h2>6. Third-party links</h2>
          <p>
            Live deployment links, client sites and social profiles are outside our control. We are
            not responsible for their content, availability or privacy practices.
          </p>

          <h2>7. Availability and accuracy</h2>
          <p>
            We keep this site accurate and online but do not warrant that it is uninterrupted or
            error-free. Capabilities marked as in development are exactly that &mdash; they are not
            currently for sale, and listing them is not a promise of a delivery date.
          </p>

          <h2>8. Limitation of liability</h2>
          <p>
            To the extent the law allows, we are not liable for indirect or consequential loss, lost
            profit or lost data arising from your use of this website. Nothing in these terms limits
            liability that cannot lawfully be limited, including for fraud or fraudulent
            misrepresentation. Liability for paid work is governed by the engagement agreement.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of Nigeria, and the courts
            of Nigeria have jurisdiction over any dispute about this website.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href={`mailto:${CONTACT_EMAIL}?subject=Terms%20of%20Use%20query`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
