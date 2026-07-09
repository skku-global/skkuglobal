import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Vision from './components/Vision'
import Footer from './components/Footer'
import useScrollAnimation from './hooks/useScrollAnimation'

function App() {
  useScrollAnimation()

  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Vision />
      <Footer />
    </div>
  )
}

export default App
