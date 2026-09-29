/**
 * Service FAQ content, shared by the /services accordion and the FAQPage
 * JSON-LD in src/seo/siteMeta.js.
 *
 * Kept as pure data (no CSS or component imports) so the build-time
 * prerenderer can import it in plain Node.
 */
export const faqs = [
  {
    q: 'Can SKKU Global build both the frontend application and backend API infrastructure?',
    a: 'Yes. We specialize in end-to-end full-stack architectures. We develop modern responsive frontends (React, Next.js) tightly integrated with robust backend APIs (FastAPI, Node.js) and production databases (PostgreSQL, Prisma, MongoDB), packaged with Docker CI/CD pipelines.',
  },
  {
    q: 'What vulnerabilities does the SecuScan engine inspect?',
    a: 'SecuScan conducts multi-threaded automated penetration tests including OWASP Top 10 vulnerabilities (SQLi, XSS, SSRF), session hijacking, authentication loopholes, missing security headers (CSP, HSTS), open CORS policies, and API parameter tampering. Each scan outputs an executive remediation report with exact code fixes.',
  },
  {
    q: 'Can you integrate multi-currency payments for local and international customers?',
    a: 'Yes. We integrate multi-currency payment routing supporting Nigerian Naira (₦), US Dollars ($), British Pounds (£), and Euros (€) via secure providers like Paystack and Stripe, alongside direct WhatsApp concierge checkout drawers for high-conversion retail closing.',
  },
  {
    q: 'How do upcoming capabilities work (Mobile, AI, Cloud DevOps)?',
    a: 'Our core live services are actively available for booking today. Our upcoming engineering capabilities (Native Mobile, Enterprise AI, Cloud DevOps, and Smart Contracts) are currently in active internal development. Clients can pre-register or inquire early to secure priority scheduling as these modules open for production onboarding.',
  },
  {
    q: 'How do we get started with a project consultation?',
    a: 'Click "Consult On This Service" on any capability card above, or click "Start a Project". Our intake questionnaire automatically pre-populates your selected service so we can analyze your requirements and respond with technical scoping within 24 hours.',
  },
]
