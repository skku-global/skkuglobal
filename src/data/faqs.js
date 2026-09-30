/**
 * Service FAQ content, shared by the /services accordion and the FAQPage
 * JSON-LD in src/seo/siteMeta.js.
 *
 * Kept as pure data (no CSS or component imports) so the build-time
 * prerenderer can import it in plain Node.
 */
export const faqs = [
  {
    q: 'Do you build both the frontend and the backend?',
    a: 'Yes. React or Next.js on the front, FastAPI or Node.js behind it, PostgreSQL, Prisma or MongoDB for data, shipped with Docker and CI/CD.',
  },
  {
    q: 'What does SecuScan check for?',
    a: 'The OWASP Top 10 — SQL injection, XSS, SSRF — plus session handling, auth gaps, missing security headers (CSP, HSTS), open CORS and API parameter tampering. Every scan ends with a report that names the fix.',
  },
  {
    q: 'Can you take payments in more than one currency?',
    a: 'Yes — Naira, dollars, pounds and euros through Paystack or Stripe, plus WhatsApp checkout for retail.',
  },
  {
    q: 'What about the services marked in development?',
    a: 'Mobile, AI, cloud DevOps and smart contracts are still being built, so they are not for sale yet. Ask early and you get first scheduling when they open.',
  },
  {
    q: 'How do we start?',
    a: 'Hit Consult on any card above, or Start a Project. The form fills in what you picked. You get a reply within 24 hours.',
  },
]
