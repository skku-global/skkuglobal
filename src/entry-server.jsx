import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppShell } from './App.jsx'

/**
 * Build-time entry point. scripts/prerender.mjs calls this once per route and
 * writes the result into the client index.html template, so crawlers that do
 * not run JavaScript still receive the full page.
 *
 * StrictMode is deliberately omitted: it changes nothing about the emitted
 * markup, and leaving it out keeps the server output a single pass.
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  )
}
