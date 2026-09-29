import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { CONTACT_EMAIL, LEGAL_NAME, PHONE_CALLABLE_DISPLAY } from '../seo/siteMeta.js'
import './Home.css'
import './Legal.css'

export default function Privacy() {
  return (
    <main id="main" className="page-enter">
      <Seo route="/privacy" />

      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">LEGAL</div>
          <h1 className="animate animate-delay-1">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="animate animate-delay-2">
            What this website collects, why, and how to have it removed. Written to describe what
            the site actually does &mdash; nothing more.
          </p>
        </div>
      </section>

      <section className="legal-prose">
        <div className="shell">
          <span className="legal-updated">Last updated: 29 September 2026</span>

          <h2>Who we are</h2>
          <p>
            {LEGAL_NAME} (&ldquo;SKKU Global&rdquo;, &ldquo;we&rdquo;) is a technology company
            registered in Nigeria, and is the data controller for this website. You can reach us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or {PHONE_CALLABLE_DISPLAY}.
          </p>

          <h2>What the contact form collects</h2>
          <p>
            The consultation form on the <Link to="/support">Support</Link> page asks for four
            things, and only these four:
          </p>
          <ul>
            <li><strong>Your name or company name</strong> &mdash; so we know who we are replying to.</li>
            <li><strong>Your email address</strong> &mdash; so we can reply.</li>
            <li><strong>The service you selected</strong> &mdash; so the enquiry reaches the right person.</li>
            <li><strong>Your project brief</strong> &mdash; the message you write.</li>
          </ul>
          <p>
            There are no hidden fields. We do not ask for, and have no use for, payment details,
            government identifiers or any special category of personal data. Please do not put
            credentials, API keys or production secrets in the message box &mdash; if you need to
            share those for a security audit, we will agree a secure channel first.
          </p>

          <h2>Where the form sends it</h2>
          <p>
            Submitting the form sends those four fields to our enquiry inbox. If that delivery route
            is unavailable, the site falls back to opening your own email application with the
            message prefilled &mdash; in that case nothing is transmitted anywhere until you press
            send in your own mail client.
          </p>
          <p>
            The <strong>WhatsApp</strong> button works differently: it opens WhatsApp with your
            message prefilled. That conversation travels through WhatsApp and is handled under
            WhatsApp&rsquo;s own privacy terms, not ours.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This site sets <strong>no cookies</strong>. It contains no analytics, no advertising
            tags, no tracking pixels and no cross-site profiling of any kind. Nothing is written to
            your browser&rsquo;s local storage.
          </p>

          <h2>Third parties that necessarily see a request</h2>
          <ul>
            <li>
              <strong>Our hosting provider</strong> serves these pages and, like any web server,
              records request metadata &mdash; IP address, user agent, URL and timestamp &mdash; for
              delivery, diagnostics and abuse prevention.
            </li>
            <li>
              <strong>Google Fonts</strong> serves the typefaces this site uses, so Google receives
              your IP address when a page loads.
            </li>
          </ul>
          <p>
            We do not sell, rent or share enquiry data with anyone else, and we do not add it to
            marketing lists.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiries stay in our inbox while the commercial conversation is live, and for up to 24
            months afterwards so we have a record of what was discussed. After that they are
            deleted. Ask us sooner and we will delete them sooner.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us for a copy of what we hold about you, ask us to correct it, or ask us to
            delete it. Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}?subject=Data%20request`}>{CONTACT_EMAIL}</a> with
            &ldquo;Data request&rdquo; in the subject and we will respond within 30 days. If you are
            in the EU or UK you also have the right to complain to your local data protection
            authority; in Nigeria, to the Nigeria Data Protection Commission.
          </p>

          <h2>Children</h2>
          <p>
            This is a business-to-business site. It is not directed at children and we do not
            knowingly collect information from anyone under 18.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes we will update the date at the top of this page, and summarise
            material changes here rather than quietly substituting them.
          </p>
          <p>
            See also our <Link to="/terms">Terms of Use</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
