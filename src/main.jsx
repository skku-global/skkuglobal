import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

// hydrateRoot, not createRoot: scripts/prerender.mjs has already written the
// markup for this route into #root at build time. Hydrating attaches React to
// that DOM instead of throwing it away and repainting, which is what keeps the
// prerendered content visible during load.
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>,
)
