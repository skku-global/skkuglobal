import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Home.css'

export default function Home() {
  useScrollAnimation()

  return (
    <main id="main" className="page-enter">
      <Hero />
      <Stats />
      <Services />
    </main>
  )
}
