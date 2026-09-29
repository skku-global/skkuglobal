/**
 * The navbar spotlight index.
 *
 * Every entry is derived from the arrays the pages actually render, so the
 * index cannot drift: add a capability to services.js or a case study to
 * projects.js and it becomes searchable immediately. The previous version
 * hardcoded six suggestions, two of which pointed at things that had been
 * renamed, and it reached neither the four upcoming capabilities nor four of
 * the six case studies.
 *
 * `keywords` is what a query is matched against but never displayed. It folds
 * in each entry's tech stack, so typing "FastAPI", "PostgreSQL" or "Shopify"
 * surfaces the work that used it — which is how a visitor evaluating us for a
 * specific stack actually searches.
 */
import { services } from './services.js'
import { projects } from './projects.js'

const serviceEntries = services.map((service) => ({
  title: service.title,
  category: service.status === 'live' ? service.categoryLabel : `${service.categoryLabel} · In development`,
  url: `/services#${service.id}`,
  keywords: [service.summary, service.categoryLabel, ...(service.techStack || [])].join(' '),
}))

const projectEntries = projects.map((project) => ({
  title: project.title,
  category: project.category,
  url: `/work#${project.id}`,
  keywords: [project.tagline, project.category, ...(project.stack || [])].join(' '),
}))

// Pages have no data array to derive from, so they are listed here. The
// keywords carry the words people search for that do not appear in the page
// title — "pricing" and "quote" landing on Support is the common one.
const pageEntries = [
  {
    title: 'All Capabilities',
    category: 'Services',
    url: '/services',
    keywords: 'services capabilities what we do offerings solutions pricing packages',
  },
  {
    title: 'Case Studies & Live Deployments',
    category: 'Work',
    url: '/work',
    keywords: 'work portfolio projects case studies clients live deployments examples',
  },
  {
    title: 'About SKKU Global',
    category: 'Company',
    url: '/about',
    keywords: 'about company team founder who we are mission story global operations',
  },
  {
    title: 'Contact & Consultation',
    category: 'Support',
    url: '/support',
    keywords: 'contact support help enquiry inquiry quote pricing estimate consultation email whatsapp phone talk hire',
  },
  {
    title: 'Privacy Policy',
    category: 'Legal',
    url: '/privacy',
    keywords: 'privacy policy data gdpr cookies tracking personal information',
  },
  {
    title: 'Terms of Use',
    category: 'Legal',
    url: '/terms',
    keywords: 'terms of use legal conditions liability intellectual property',
  },
]

export const searchIndex = [...serviceEntries, ...projectEntries, ...pageEntries]

/**
 * Abbreviations people type for words that are already in the content. Each
 * key expands to a term that genuinely appears somewhere above — this maps
 * vocabulary onto existing work, it does not claim capabilities we do not have.
 */
const SYNONYMS = {
  pentest: 'penetration',
  pentesting: 'penetration',
  pentester: 'penetration',
  k8s: 'kubernetes',
  infosec: 'security',
  cybersecurity: 'security',
  vuln: 'vulnerability',
  vulns: 'vulnerability',
  ecommerce: 'commerce',
  'e-commerce': 'commerce',
  webapp: 'web',
  fullstack: 'full-stack',
  postgres: 'postgresql',
  js: 'javascript',
}

const expand = (term) => SYNONYMS[term] || term

/**
 * Match every whitespace-separated token, so "secuscan audit" finds the scanner
 * and word order does not matter. Entries whose visible title matches sort
 * first — a title hit is almost always what the person meant, and without this
 * a keyword-only match could outrank an exact title.
 */
export function searchSite(query) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean).map(expand)
  if (!terms.length) return searchIndex

  return searchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase()
      const haystack = `${title} ${entry.category} ${entry.keywords}`.toLowerCase()
      if (!terms.every((term) => haystack.includes(term))) return null
      return { entry, titleHit: terms.some((term) => title.includes(term)) }
    })
    .filter(Boolean)
    .sort((a, b) => Number(b.titleHit) - Number(a.titleHit))
    .map((match) => match.entry)
}
