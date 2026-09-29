import { useEffect } from 'react'
import { headTagsFor, jsonLdFor } from '../seo/siteMeta.js'

/**
 * Keeps the document head in sync with the current route.
 *
 * The authoritative head for crawlers is written at build time by
 * scripts/prerender.mjs, which reads the same siteMeta module - so a bot that
 * never runs JavaScript still gets the right title, description and canonical.
 * This component exists for the other half: once React has hydrated, moving
 * between routes is a client-side transition with no new document, so the tags
 * have to be updated in place.
 *
 * It renders null on purpose. React 19 can hoist <title>/<meta>/<link> from the
 * tree into the head, but then the prerendered tags and the hydrated ones are
 * two separate sets and the page ends up with two of each. Writing to the head
 * imperatively replaces them instead, and keeps the server and client trees
 * byte-identical so hydration has nothing to disagree about.
 */

const INDEXABLE = 'index, follow, max-image-preview:large, max-snippet:-1'
const BLOCKED = 'noindex, follow'

/** Find the existing tag or create it, then set its content. Never duplicates. */
function upsertMeta(keyAttr, keyValue, content) {
  const selector = `meta[${keyAttr}="${keyValue}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(keyAttr, keyValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(graph) {
  let el = document.head.querySelector('script[type="application/ld+json"][data-seo="graph"]')
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.dataset.seo = 'graph'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(graph)
}

export default function Seo({ route }) {
  useEffect(() => {
    const head = headTagsFor(route)

    document.title = head.title
    upsertMeta('name', 'description', head.description)
    upsertMeta('name', 'robots', head.noindex ? BLOCKED : INDEXABLE)
    upsertCanonical(head.canonical)

    for (const [property, content] of Object.entries(head.og)) {
      upsertMeta('property', property, content)
    }
    for (const [name, content] of Object.entries(head.twitter)) {
      upsertMeta('name', name, content)
    }

    upsertJsonLd(jsonLdFor(route))
  }, [route])

  return null
}
