import HomeHero from '../components/HomeHero'
import HomeManifestoQuote from '../components/HomeManifestoQuote'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <main id="main" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Seo route="/" />
      
      {/* ── 1. Rotating Kinetic Typography Hero ── */}
      <HomeHero />

      {/* ── 2. Manifesto Banner (Right After Hero, Pluralized for Company) ── */}
      <HomeManifestoQuote />
    </main>
  )
}
