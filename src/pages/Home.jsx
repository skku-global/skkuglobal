import HomeHero from '../components/HomeHero'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <main id="main" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Seo route="/" />
      {/* ── Only Hero Section (Everything else removed per user instruction) ── */}
      <HomeHero />
    </main>
  )
}
