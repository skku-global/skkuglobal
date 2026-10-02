import MultiStepContact from '../components/MultiStepContact'
import Seo from '../components/Seo'

export default function ContactPage() {
  return (
    <main id="main" className="bg-white min-h-screen pt-28 pb-24">
      <Seo route="/support" />

      {/* ── Page Header ── */}
      <section className="max-w-[1160px] mx-auto px-6 md:px-10 mb-12 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#6E2CF3] font-semibold block mb-4">
          START A COMMISSION
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1D1D1F] font-normal leading-[1.08] max-w-3xl mx-auto mb-6">
          What did you have in mind?
        </h1>
        <p className="text-[#6E6E73] text-base sm:text-lg max-w-xl mx-auto font-sans leading-relaxed">
          Tell us about the friction, the platform you need, or the security audit you want to run. We respond within 24 hours with an actionable architectural roadmap.
        </p>
      </section>

      {/* ── Interactive Multi-Step Form ── */}
      <section className="max-w-[1160px] mx-auto px-6 md:px-10">
        <MultiStepContact />
      </section>
    </main>
  )
}
