import { Link } from 'react-router-dom';
import { Phone, Check, ArrowRight, ChevronDown, ChevronRight, ShieldCheck } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { PERFORMED_BY, SERVICES } from '../data/services';
import type { ServiceData } from '../data/services';

const btnGold = 'inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-7 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto';
const btnOutline = 'inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-7 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto';
const btnOutlineDark = 'inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-7 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto';
const eyebrow = 'text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block';
const h2 = 'text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]';

/** One template for every /services/<slug> page. All content comes from data/services.ts. */
export default function ServicePageTemplate({ service: s }: { service: ServiceData }) {
  const contactHref = `/contact?service=${s.contactValue}#form`;
  const related = s.related.map((slug) => SERVICES.find((x) => x.slug === slug)).filter(Boolean) as ServiceData[];

  return (
    <>
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-[#F7F3EC] border-b border-[#E7E2D8]">
        <ol className="max-w-[1100px] mx-auto px-4 md:px-6 py-3 flex items-center gap-1.5 text-[0.8125rem] text-[#5C5C5C]">
          <li><Link to="/" className="hover:text-[#0A0A0A]">Home</Link></li>
          <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
          <li><Link to="/services" className="hover:text-[#0A0A0A]">Services</Link></li>
          <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-[#0A0A0A] font-medium" aria-current="page">{s.name}</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="bg-[#F7F3EC] py-10 md:py-16">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className={eyebrow}>PROSTHODONTIST · SHEEPSHEAD BAY · BROOKLYN</span>
            <h1 className="mt-3 text-[2rem] md:text-[2.75rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">{s.h1}</h1>
            <p className="mt-4 text-[1.0625rem] md:text-[1.125rem] leading-[1.6] text-[#1B1B1B]">{s.intro}</p>
            <p className="mt-3 text-[0.9375rem] text-[#5C5C5C] flex items-start gap-2"><ShieldCheck className="w-4 h-4 mt-1 text-[#C9A961] shrink-0" strokeWidth={1.75} aria-hidden="true" /><span>{PERFORMED_BY}</span></p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link to={contactHref} className={btnGold}>Request an appointment for {s.shortName}</Link>
              <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className={btnOutline}><Phone className="w-4 h-4 pointer-events-none" strokeWidth={2} /> <span className="pointer-events-none">Call 347-378-7827</span></a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#E7E2D8] bg-white">
            <img src={s.hero.src} alt={s.hero.alt} className="w-full h-auto aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      {/* IS THIS FOR YOU + KEY FACTS */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className={h2}>Is this for you?</h2>
            <ul className="mt-5 space-y-3">
              {s.isFor.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[1rem] leading-[1.55] text-[#1B1B1B]"><ArrowRight className="w-4 h-4 mt-1.5 text-[#C9A961] shrink-0" strokeWidth={2} aria-hidden="true" /><span>{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 md:p-7">
            <h2 className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">KEY FACTS</h2>
            <ul className="mt-4 space-y-2.5">
              {s.keyFacts.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[0.9375rem] leading-[1.55] text-[#1B1B1B]"><Check className="w-4 h-4 mt-1 text-[#C9A961] shrink-0" strokeWidth={2} aria-hidden="true" /><span>{b}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F7F3EC] py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className={`${h2} text-center`}>How it works</h2>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {s.steps.map((st, i) => (
              <li key={st.title} className="bg-white border border-[#E7E2D8] rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#F7F3EC] flex items-center justify-center mx-auto"><st.icon className="w-5 h-5 text-[#C9A961]" strokeWidth={1.75} aria-hidden="true" /></div>
                <p className="mt-3 text-[0.75rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">Step {i + 1}</p>
                <h3 className="mt-1 text-[1.0625rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">{st.title}</h3>
                <p className="mt-1 text-[0.9375rem] text-[#5C5C5C]">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RESULTS (only when a matching case exists) */}
      {s.result && (
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-[720px] mx-auto px-4 md:px-6">
            <h2 className={`${h2} text-center`}>Results</h2>
            <div className="mt-6 rounded-xl overflow-hidden border border-[#E7E2D8] bg-white">
              <BeforeAfterSlider beforeSrc={s.result.before} afterSrc={s.result.after} beforeAlt={s.result.beforeAlt} afterAlt={s.result.afterAlt} />
              <p className="p-4 text-center text-[0.8125rem] text-[#5C5C5C]">Drag to compare · {s.result.caption}</p>
            </div>
            <div className="mt-5 text-center">
              <Link to="/before-after" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold min-h-[48px]">See more results <ArrowRight className="w-4 h-4" strokeWidth={1.75} /></Link>
            </div>
          </div>
        </section>
      )}

      {/* SECONDARY IMAGE (optional) */}
      {s.secondaryImage && (
        <section className={`${s.result ? 'bg-[#F7F3EC]' : 'bg-white'} py-10 md:py-12`}>
          <figure className="max-w-[720px] mx-auto px-4 md:px-6">
            <img src={s.secondaryImage.src} alt={s.secondaryImage.alt} loading="lazy" className="w-full h-auto aspect-[4/3] object-cover rounded-xl border border-[#E7E2D8]" />
            <figcaption className="mt-3 text-center text-[0.75rem] uppercase tracking-[0.12em] text-[#5C5C5C]">{s.secondaryImage.caption}</figcaption>
          </figure>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-[#F7F3EC] py-12 md:py-16">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <h2 className={`${h2} text-center`}>Common questions</h2>
          <div className="mt-6 space-y-3">
            {s.faqs.filter((f) => !f.todo).map((f) => (
              <details key={f.q} className="bg-white rounded-xl border border-[#E7E2D8] group">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]">
                  <span className="text-[1.0625rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif] leading-[1.4]">{f.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" strokeWidth={1.75} aria-hidden="true" />
                </summary>
                <div className="px-5 pb-5 text-[#5C5C5C] leading-[1.65] text-[1rem]">{f.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold min-h-[48px]">Read the full FAQ <ArrowRight className="w-4 h-4" strokeWidth={1.75} /></Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className={`${h2} text-center`}>Related services</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="group relative block aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0A0A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2" aria-label={r.name}>
                <img src={r.hero.src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" aria-hidden="true" />
                <span className="absolute inset-x-0 bottom-0 p-4 font-[Fraunces,Georgia,serif] text-white text-[1.25rem] leading-[1.15] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">{r.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A0A0A] py-14 md:py-20 text-center">
        <div className="max-w-[720px] mx-auto px-4 md:px-6">
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">Ready to talk about {s.shortName.toLowerCase() === 'all-on-x' ? 'All-on-X' : s.shortName.toLowerCase()}?</h2>
          <p className="mt-4 text-[#F7F3EC]/85 text-[1.0625rem]">One consultation, a written plan, and pricing you can take home.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to={contactHref} className={btnGold}>Request an appointment</Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className={btnOutlineDark}><Phone className="w-4 h-4 pointer-events-none" strokeWidth={2} /> <span className="pointer-events-none">347-378-7827</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
