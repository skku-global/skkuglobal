import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import Seo from "../components/Seo";

const rows = [
  {
    title: "Websites",
    problem: "No website, or one that doesn't bring customers.",
    what: "We design, build and launch a fast site that people can find and use.",
    timeline: "2 to 4 weeks from first call to live.",
  },
  {
    title: "SEO",
    problem: "Customers can't find you, or only people nearby do.",
    what: "We fix your site's structure, content and search setup so people searching from anywhere can find you, and we report what changed every month.",
    timeline: "Setup in 1 to 2 weeks, then monthly reports. We never promise rankings.",
  },
  {
    title: "Ads video",
    problem: "People scroll past, or need too long to understand what you do.",
    what: "We make short promo videos for WhatsApp status, Meta ads and social, built to explain your business in seconds.",
    timeline: "3 to 7 days per video.",
  },
  {
    title: "Flyers",
    problem: "Your flyers look off-brand or say too many things at once.",
    what: "We design flyers that say one thing clearly, ready for print and for sharing online.",
    timeline: "2 to 3 days.",
  },
  {
    title: "Web Applications & SaaS",
    problem: "Outgrowing manual spreadsheets and needing custom business software.",
    what: "We engineer full-stack platforms with fast databases, secure authentication, and APIs.",
    timeline: "3 to 6 weeks for MVP launch.",
  },
  {
    title: "Cybersecurity & Audits",
    problem: "Hidden vulnerabilities and compliance risks across endpoints.",
    what: "We run automated and manual OWASP vulnerability scans with clear fix steps.",
    timeline: "24 to 48 hours for full audit report.",
  },
];

export default function Services() {
  return (
    <>
      <Seo route="/services" />
      <section className="wrap hero">
        <p className="eyebrow">Services</p>
        <h1 className="display-l">We untangle your business, starting with your website.</h1>
      </section>
      <section className="wrap section">
        <Accordion rows={rows} />
      </section>
      <section className="wrap section closing">
        <h2 className="display-l">Got a<br />problem?</h2>
        <Link to="/contact" className="btn">Tell us your problem <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}
