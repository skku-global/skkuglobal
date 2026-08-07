import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Trading from './components/Trading'
import Vision from './components/Vision'
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
        <About />
        <Projects />
        <Skills />
        <Trading />
        <Vision />
      </main>
      <Footer />
    </>
  )
}

export default App
