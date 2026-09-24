import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollAnimation from './hooks/useScrollAnimation'

function App() {
  useScrollAnimation()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <About />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
