import ContactForm from "../components/ContactForm";
import { site } from "../lib/site";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <>
      <Seo route="/contact" />
      <section className="wrap hero">
        <p className="eyebrow">Contact</p>
        <h1 className="display-l">Tell us your problem.</h1>
      </section>
      <section className="wrap section contact">
        <ContactForm />
        <div className="direct">
          <p className="eyebrow">We reply {site.reply}.</p>
          <p><a className="link" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><a className="link" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
        </div>
      </section>
    </>
  );
}
