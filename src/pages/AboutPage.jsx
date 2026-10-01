import About from '../components/About'
import Vision from '../components/Vision'
import AboutHero from '../components/AboutHero'
import Seo from '../components/Seo'

export default function AboutPage() {
  return (
    <main id="main" className="page-enter about-page-wrapper" style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <Seo route="/about" />
      <AboutHero />
      <About />
      <Vision />
    </main>
  )
}
