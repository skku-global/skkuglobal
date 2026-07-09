import '../styles/globals.css'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">SKKU</div>
      <div className="nav-links">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#vision">SKKU Global</a>
        <a href="#contact" className="nav-btn">Hire Me</a>
      </div>
    </nav>
  )
}
