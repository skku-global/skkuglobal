import { Link } from "react-router-dom";
import { site } from "../lib/site";

const LINKS = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Footer() {
  const socials = site.socials || [];
  return (
    <footer className="footer wrap">
      <div className="rule" data-line />
      <div className="foot-cols">
        <div>
          <p className="eyebrow">Quick links</p>
          <ul>
            {LINKS.map(([label, href]) => (
              <li key={href}><Link to={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li className="muted">We reply {site.reply}.</li>
          </ul>
        </div>
        {socials.length > 0 && (
          <div>
            <p className="eyebrow">Connect</p>
            <ul>
              {socials.map(([label, href]) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <p className="foot-mark" aria-hidden="true">SKKU<span>.</span></p>
      <div className="foot-base">
        <span className="muted">© {new Date().getFullYear()} {site.name}</span>
        <nav aria-label="Legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
