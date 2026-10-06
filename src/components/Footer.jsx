import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <div className="rule" data-line />
      <div className="footer-row">
        <span className="logo">SKKU</span>
        <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
        <span className="muted">© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
