/**
 * Build-time prerenderer.
 *
 * The site is a Vite SPA, so the HTML Vite emits contains an empty #root and
 * nothing else. GPTBot, ClaudeBot and PerplexityBot do not execute JavaScript,
 * which means without this step they read a blank page — that is the whole
 * reason AI tools could not describe what SKKU Global does.
 *
 * Runs after both Vite builds:
 *   1. `vite build`                     -> dist/         (client bundle + template)
 *   2. `vite build --ssr src/entry-...` -> dist-ssr/      (server render function)
 *   3. this script                      -> dist/<route>/index.html, 404.html, sitemap.xml
 *
 * Head tags and JSON-LD come from src/seo/siteMeta.js, the same module the
 * runtime Seo component uses, so the static and hydrated versions agree.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')

const HEAD_START = '<!--seo-head-start-->'
const HEAD_END = '<!--seo-head-end-->'
const APP_SLOT = '<!--app-html-->'

const { render } = await import(pathToFileURL(join(ROOT, 'dist-ssr', 'entry-server.js')).href)
const meta = await import(pathToFileURL(join(ROOT, 'src', 'seo', 'siteMeta.js')).href)

const template = readFileSync(join(DIST, 'index.html'), 'utf8')

for (const marker of [HEAD_START, HEAD_END, APP_SLOT]) {
  if (!template.includes(marker)) {
    throw new Error(`index.html is missing the ${marker} marker — prerender cannot place content.`)
  }
}

const INDEXABLE = 'index, follow, max-image-preview:large, max-snippet:-1'
const BLOCKED = 'noindex, follow'

/** Escape a value for use inside a double-quoted HTML attribute. */
const attr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** JSON-LD sits in a <script>, so the only real hazard is a closing tag. */
const jsonLdSafe = (graph) => JSON.stringify(graph).replace(/</g, '\\u003c')

function buildHead(path) {
  const head = meta.headTagsFor(path)
  const lines = [
    `<title>${attr(head.title)}</title>`,
    `<meta name="description" content="${attr(head.description)}" />`,
    `<meta name="robots" content="${head.noindex ? BLOCKED : INDEXABLE}" />`,
    `<link rel="canonical" href="${attr(head.canonical)}" />`,
  ]
  for (const [property, content] of Object.entries(head.og)) {
    lines.push(`<meta property="${property}" content="${attr(content)}" />`)
  }
  for (const [name, content] of Object.entries(head.twitter)) {
    lines.push(`<meta name="${name}" content="${attr(content)}" />`)
  }
  lines.push(
    `<script type="application/ld+json" data-seo="graph">${jsonLdSafe(meta.jsonLdFor(path))}</script>`,
  )
  return lines.map((line) => `    ${line}`).join('\n')
}

/**
 * Swap in the head and the rendered markup. The head is replaced as a block
 * between the two markers so the dev-only fallback tags cannot survive and
 * duplicate.
 */
function buildPage(path, routeForRender = path) {
  const appHtml = render(routeForRender)
  const headStart = template.indexOf(HEAD_START)
  const headEnd = template.indexOf(HEAD_END) + HEAD_END.length

  return (
    template.slice(0, headStart) +
    buildHead(path).trimStart() +
    template.slice(headEnd)
  ).replace(APP_SLOT, appHtml)
}

function writePage(relativePath, html) {
  const target = join(DIST, relativePath)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
  return relativePath
}

const written = []

for (const route of meta.ROUTES) {
  const html = buildPage(route.path)
  const out = route.path === '/' ? 'index.html' : join(route.path.slice(1), 'index.html')
  written.push({ file: writePage(out, html), route: route.path, bytes: html.length })
}

// 404.html is what a static host serves for an unmatched URL. Rendering an
// address that matches no route makes the router fall through to <NotFound />,
// so the page is the real 404 rather than a copy of the home page at HTTP 200.
const notFoundHtml = buildPage(meta.NOT_FOUND_META.path, '/__prerender_not_found__')
written.push({
  file: writePage('404.html', notFoundHtml),
  route: '(404)',
  bytes: notFoundHtml.length,
})

// Sitemap is generated from the same route list, so it cannot drift out of date
// the way the hand-written one did.
const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...meta.ROUTES.map((route) =>
    [
      '  <url>',
      `    <loc>${meta.canonicalFor(route.path)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${route.priority}</priority>`,
      '  </url>',
    ].join('\n'),
  ),
  '</urlset>',
  '',
].join('\n')
writeFileSync(join(DIST, 'sitemap.xml'), sitemap)

const pad = (value, width) => String(value).padEnd(width)
console.log(`\nprerendered ${written.length} pages:`)
for (const page of written) {
  console.log(`  ${pad(page.route, 12)} -> ${pad(page.file.replace(/\\/g, '/'), 22)} ${page.bytes} bytes`)
}
console.log(`  sitemap.xml  -> ${meta.ROUTES.length} urls, lastmod ${lastmod}\n`)
