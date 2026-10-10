/**
 * Single source of truth for everything search engines, AI crawlers and social
 * previews read about this site, plus the contact details that must stay
 * identical everywhere.
 *
 * `scripts/prerender.mjs` imports this module too, so the static HTML it emits
 * and the tags React renders at runtime can never drift apart. Change a title
 * or a phone number here and both follow.
 */
import { faqs } from '../data/faqs.js'
import { projects } from '../lib/projects.js'

export const ORIGIN = 'https://skkuglobal.com'

export const SITE_NAME = 'SKKU Global'
export const LEGAL_NAME = 'SKKU Global Technologies Limited'

export const CONTACT_EMAIL = 'admin@skkuglobal.com'

/**
 * Two numbers, two jobs - do not swap them.
 *
 *   PHONE_CALLABLE  is a voice line. It is the only number allowed in a `tel:`
 *                   href and the only one in the `telephone` structured-data
 *                   field, which is what Google publishes as the business
 *                   number.
 *   WHATSAPP_NUMBER is WhatsApp-only and is NOT callable. It belongs in
 *                   `wa.me/` links and nowhere else - a `tel:` pointing at it
 *                   rings out.
 *
 * A third number (+234 913 268 6150) used to sit in the JSON-LD. It was a
 * placeholder, never a real line, and was removed on 2026-09-29.
 */
export const PHONE_CALLABLE = '+2347016995795'
export const PHONE_CALLABLE_DISPLAY = '+234 701 699 5795'
export const WHATSAPP_NUMBER = '2348057215622'

/** Build a wa.me link with a prefilled message. */
export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text || 'Hello SKKU Global')}`

/** Build a mailto link with a prefilled subject. */
export const mailto = (subject) =>
  subject
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT_EMAIL}`

export const FOUNDER = {
  name: 'Abdulkabir Ajiboye',
  jobTitle: 'Founder & Lead Systems Architect',
  // Personal profile, so it hangs off the Person node rather than the
  // Organization - pointing a company's sameAs at a personal profile invites
  // Google to reconcile the company entity to an individual.
  linkedIn: 'https://www.linkedin.com/in/abdulkabir-ajiboye-346a9743a',
}

/** Official company channels. These are what Google uses to confirm identity. */
export const SAME_AS = [
  'https://x.com/skkuglobal',
  'https://www.tiktok.com/@skku_bond1',
]

export const AREA_SERVED = [
  'Nigeria',
  'United States',
  'United Kingdom',
  'Canada',
  'Germany',
  'United Arab Emirates',
  'Worldwide',
]

const OG_IMAGE = `${ORIGIN}/og-image.png?v=4`

/**
 * Every indexable route. `scripts/prerender.mjs` walks this list to decide what
 * static HTML and which sitemap entries to emit, so adding a page here is all
 * it takes to get it prerendered, linked and submitted.
 */
export const ROUTES = [
  {
    path: '/',
    title: 'SKKU Global — Websites, SEO, Ads Video & Flyers',
    description:
      'Fast websites, SEO that brings customers from anywhere, plus ads videos and flyers for WhatsApp and Meta ads. CAC-registered in Nigeria, working worldwide.',
    breadcrumb: 'Enterprise Web & Security',
    priority: '1.0',
  },
  {
    path: '/services',
    title: 'Services — Websites, SEO, Ads Video & Flyers | SKKU Global',
    description:
      'Websites, SEO, ads video and flyers, plus web apps and security audits. One team that untangles your business, from first call to launch.',
    breadcrumb: 'Capabilities & Services',
    priority: '0.9',
  },
  {
    path: '/work',
    title: 'Work — Case Studies, Ads Video & Flyers | SKKU Global',
    description:
      'Case studies from SecuScan, Luxe Hair Co, CarBreezy, JuniCash and ScamCheck, plus our ads videos and flyers.',
    breadcrumb: 'Production Case Studies',
    priority: '0.9',
  },
  {
    path: '/about',
    title: 'About SKKU Global Technologies Limited',
    description:
      'A CAC-registered Nigerian technology company engineering security-first software for clients across North America, the UK, Europe, Africa and the Middle East.',
    breadcrumb: 'About SKKU Global',
    priority: '0.7',
  },
  {
    path: '/contact',
    title: 'Contact — Tell Us Your Problem | SKKU Global',
    description:
      'Tell us what you need: a website, SEO, an ads video or a flyer. We reply within 24 hours.',
    breadcrumb: 'Contact Studio',
    priority: '0.8',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | SKKU Global',
    description:
      'What SKKU Global Technologies Limited collects when you use this site or submit the contact form, how it is used, and how to have it deleted.',
    breadcrumb: 'Privacy Policy',
    priority: '0.3',
  },
  {
    path: '/terms',
    title: 'Terms of Use | SKKU Global',
    description:
      'The terms governing use of skkuglobal.com, including intellectual property, client code ownership, and the limits of information published on this site.',
    breadcrumb: 'Terms of Use',
    priority: '0.3',
  },
]

/** Served for any unmatched URL. Deliberately excluded from ROUTES and noindexed. */
export const NOT_FOUND_META = {
  path: '/404',
  title: 'Page Not Found | SKKU Global',
  description: 'That page does not exist. Browse services, case studies or support instead.',
  breadcrumb: 'Page Not Found',
  noindex: true,
}

export const getRouteMeta = (path) => {
  const clean = path !== '/' ? path.replace(/\/+$/, '') : '/'
  return ROUTES.find((r) => r.path === clean) || NOT_FOUND_META
}

export const canonicalFor = (path) => `${ORIGIN}${path === '/' ? '/' : path}`

/* ==================================================================
   Structured data
   ================================================================== */

const organizationNode = () => ({
  '@type': 'Organization',
  '@id': `${ORIGIN}/#organization`,
  name: LEGAL_NAME,
  alternateName: [SITE_NAME, 'SKKU Global Tech'],
  url: `${ORIGIN}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${ORIGIN}/brand/skku-green.webp`,
  },
  image: OG_IMAGE,
  email: CONTACT_EMAIL,
  telephone: PHONE_CALLABLE,
  description:
    'Technology company delivering custom full-stack web applications, SecuScan automated vulnerability audits, e-commerce systems and enterprise digital defense.',
  // No PostalAddress: this is an online-worldwide operation with no premises
  // clients visit. areaServed carries the geography instead.
  areaServed: AREA_SERVED,
  knowsAbout: [
    'Web application development',
    'Cybersecurity auditing',
    'OWASP Top 10',
    'Penetration testing',
    'E-commerce development',
    'React',
    'Node.js',
    'FastAPI',
    'PostgreSQL',
  ],
  founder: {
    '@type': 'Person',
    '@id': `${ORIGIN}/#founder`,
    name: FOUNDER.name,
    jobTitle: FOUNDER.jobTitle,
    sameAs: [FOUNDER.linkedIn],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: CONTACT_EMAIL,
    telephone: PHONE_CALLABLE,
    availableLanguage: ['English'],
  },
  sameAs: SAME_AS,
})

const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': `${ORIGIN}/#website`,
  url: `${ORIGIN}/`,
  name: SITE_NAME,
  publisher: { '@id': `${ORIGIN}/#organization` },
  inLanguage: 'en',
  // No SearchAction: the navbar spotlight filters in the browser and has no
  // URL endpoint, so a sitelinks searchbox would be a claim we cannot honour.
})

const breadcrumbNode = (meta) => {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` }]
  if (meta.path !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: meta.breadcrumb,
      item: canonicalFor(meta.path),
    })
  }
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalFor(meta.path)}#breadcrumb`,
    itemListElement: items,
  }
}

const webPageNode = (meta) => ({
  '@type': 'WebPage',
  '@id': `${canonicalFor(meta.path)}#webpage`,
  url: canonicalFor(meta.path),
  name: meta.title,
  description: meta.description,
  isPartOf: { '@id': `${ORIGIN}/#website` },
  about: { '@id': `${ORIGIN}/#organization` },
  breadcrumb: { '@id': `${canonicalFor(meta.path)}#breadcrumb` },
  inLanguage: 'en',
})

const secuScanNode = () => ({
  '@type': 'SoftwareApplication',
  '@id': `${ORIGIN}/#secuscan`,
  name: 'SecuScan',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web Browser',
  author: { '@id': `${ORIGIN}/#organization` },
  description:
    'Automated web application security audit engine that scans a target domain for missing security headers, authentication flaws, OWASP Top 10 vulnerabilities and SSL misconfigurations.',
})

/** The four capabilities that are live today. Locked ones are not offered yet. */
export const LIVE_SERVICES = [
  {
    id: 'web-dev',
    name: 'Custom Web & SaaS Engineering',
    description:
      'Web apps and APIs built to stay fast as they grow.',
  },
  {
    id: 'security-audits',
    name: 'SecuScan Web Vulnerability Audits',
    description:
      'Automated penetration testing that finds security holes before an attacker does.',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail Systems',
    description:
      'Online stores with live carts, several currencies and secure payments.',
  },
  {
    id: 'digital-security',
    name: 'Digital Defense & Infrastructure',
    description:
      'Protection for your domain, your cloud and your admin accounts.',
  },
]

const serviceNodes = () =>
  LIVE_SERVICES.map((s) => ({
    '@type': 'Service',
    '@id': `${ORIGIN}/services#${s.id}`,
    name: s.name,
    description: s.description,
    serviceType: s.name,
    provider: { '@id': `${ORIGIN}/#organization` },
    areaServed: AREA_SERVED,
  }))

/**
 * Assemble the JSON-LD graph for a route. Organization, WebSite, WebPage and
 * BreadcrumbList are on every page; the rest are added where they belong.
 */
export const jsonLdFor = (path) => {
  const meta = getRouteMeta(path)
  const graph = [organizationNode(), websiteNode(), webPageNode(meta), breadcrumbNode(meta)]

  if (meta.path === '/' || meta.path === '/services' || meta.path === '/work') {
    graph.push(secuScanNode())
  }
  if (meta.path === '/services') {
    graph.push(...serviceNodes())
    if (faqs.length) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${ORIGIN}/services#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })
    }
  }
  if (meta.path === '/work' && projects.length) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${ORIGIN}/work#projects`,
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: p.title,
          description: p.result,
          creator: { '@id': `${ORIGIN}/#organization` },
        },
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

/** Head tags for a route, as data. Rendered by `Seo.jsx`, stringified by the prerenderer. */
export const headTagsFor = (path) => {
  const meta = getRouteMeta(path)
  const canonical = canonicalFor(meta.path)
  return {
    title: meta.title,
    description: meta.description,
    canonical,
    noindex: !!meta.noindex,
    og: {
      'og:type': meta.path === '/' ? 'website' : 'article',
      'og:site_name': SITE_NAME,
      'og:url': canonical,
      'og:title': meta.title,
      'og:description': meta.description,
      'og:image': OG_IMAGE,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:locale': 'en_US',
    },
    twitter: {
      'twitter:card': 'summary_large_image',
      'twitter:title': meta.title,
      'twitter:description': meta.description,
      'twitter:image': OG_IMAGE,
    },
  }
}

/* One prerendered, sitemap-listed page per case study. */
const clip = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '\u2026')
ROUTES.push(
  ...projects.map((p) => ({
    path: `/work/${p.slug}`,
    title: `${p.title} case study | SKKU Global`,
    description: clip(`${p.result}. ${p.problem}`, 155),
    breadcrumb: p.title,
    priority: '0.6',
  }))
)
