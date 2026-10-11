import { useState } from 'react';
// NavLink = <a> that changes pages WITHOUT reloading, and gets an
// "active" class automatically when its URL is the current one.
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);   // is the mobile menu open?
  const close = () => setOpen(false);        // close it after tapping a link

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={close}>
        <span className="logo-dot"></span>
        <span className="logo-text">GreenDot Clone</span>
      </Link>

      {/* Hamburger button: only visible on phones (see CSS) */}
      <button
        className="menu-btn"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? '✕' : '☰'}
      </button>

      {/* The "open" class is added/removed by state to show/hide the menu */}
      <nav className={open ? 'nav open' : 'nav'}>
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/dashboard" onClick={close}>Dashboard</NavLink>
        <NavLink to="/help" onClick={close}>Help</NavLink>
        <NavLink to="/login" onClick={close}>Log in</NavLink>
        <NavLink to="/signup" className="nav-cta" onClick={close}>Sign up</NavLink>
      </nav>
    </header>
  );
}
export default Header;
