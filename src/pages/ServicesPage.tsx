import { Link } from 'react-router-dom';
import { Phone, Check, ArrowRight, ChevronDown } from 'lucide-react';
import { usePageMeta } from '../lib/seo';
import { ServiceTileGrid } from '../components/ServiceTile';
import implantsImg from '../assets/services/implants-hero.jpg';
import allOnXImg from '../assets/services/all-on-x-hero.jpg';
import veneersImg from '../assets/services/veneers-hero.jpg';
import veneersDetailImg from '../assets/services/veneers-detail.jpg';
import denturesImg from '../assets/services/dentures-complete-hero.jpg';
import denturesDetailImg from '../assets/services/dentures-complete-detail.jpg';
import partialImg from '../assets/services/dentures-partial-hero.jpg';
import overdenturesImg from '../assets/services/overdentures-hero.jpg';
import room2Img from '../assets/office/dental-room-2.jpg';

/**
 * Services hub. The nine services the office offers (client list, Sept 25, 2026): photo tiles up top that
 * jump to a short section each, one sentence + up to three bullets, a Request button, and a "Learn more"
 * link where a dedicated /services/<slug> page exists. Anchor ids are stable (linked from the FAQ and redirects).
 * TODO(client): dedicated photos for full mouth reconstruction, crowns, cosmetic and restorative (reusing others for now).
 */
interface Service {
  id: string;
  name: string;
  caption: string;
  img: string;
  sentence: string;
  bullets: string[];
  contactValue: string;
  /** Dedicated service page, when one exists. */
  page?: string;
}

const SERVICES: Service[] = [
  { id: 'full-mouth-reconstruction', name: 'Full Mouth Reconstruction', caption: 'One coordinated plan', img: allOnXImg, contactValue: 'full-mouth-reconstruction', page: '/services/full-mouth-reconstruction',
    sentence: 'A single written plan that combines implants, crowns, bridges, and sometimes veneers when many teeth need work at once.',
    bullets: ['Usually 6–12 months, staged across visits', 'Written plan with locked pricing at the start', 'Function and appearance preserved at every stage'] },
  { id: 'dental-implants', name: 'Dental Implants', caption: 'Single tooth to full arch', img: implantsImg, contactValue: 'dental-implants', page: '/services/dental-implants',
    sentence: 'A titanium post that fuses to your jawbone and supports a crown, bridge, or full-arch restoration.',
    bullets: ['Single, multiple, or All-on-X full-arch options', 'Restoration designed before the implant is placed', '3–6 months from placement to final restoration'] },
  { id: 'veneers', name: 'Porcelain Veneers', caption: 'Natural-looking porcelain', img: veneersImg, contactValue: 'veneers', page: '/services/veneers',
    sentence: 'Thin custom porcelain shells bonded to the front of your teeth to change color, shape, and proportion.',
    bullets: ['Individually designed, color and contour matched per tooth', 'Typically 2–3 visits to complete', 'Smile design completed before any prep work'] },
  { id: 'crowns-bridges', name: 'Crowns & Bridges', caption: 'All-ceramic, same-day options', img: veneersDetailImg, contactValue: 'crowns-bridges', page: '/services/crowns-bridges',
    sentence: 'A crown covers a tooth too damaged for a filling; a bridge replaces missing teeth using neighboring teeth or implants as anchors.',
    bullets: ['All-ceramic, designed to match surrounding teeth', 'Same-day crowns available via CEREC for appropriate cases', 'Typical lifespan 15+ years with proper care'] },
  { id: 'dentures', name: 'Removable Complete Dentures', caption: 'Custom-fit full dentures', img: denturesImg, contactValue: 'dentures', page: '/services/dentures',
    sentence: 'Complete dentures designed to your face, fitted for stability, and finished with materials that look like natural teeth.',
    bullets: ['Custom-fit to your face, not off a shelf', 'Bite verified before final fabrication', 'Adjustments and relines included in the first year'] },
  { id: 'partial-dentures', name: 'Removable Partial Dentures', caption: 'Around your natural teeth', img: partialImg, contactValue: 'partial-dentures', page: '/services/dentures',
    sentence: 'A removable partial that replaces missing teeth while keeping the healthy ones you still have.',
    bullets: ['Metal-framework and flexible options', 'Custom-fit to your remaining teeth', 'Removable for cleaning, secure while wearing'] },
  { id: 'overdentures', name: 'Overdentures', caption: 'Implant-anchored, no adhesive', img: overdenturesImg, contactValue: 'overdentures', page: '/services/all-on-x',
    sentence: 'A denture that clips onto two to four implants instead of resting on the gums.',
    bullets: ['No slipping, no adhesive', 'Chewing force much higher than conventional dentures', 'Upper arch, lower arch, or both'] },
  { id: 'cosmetic-dentistry', name: 'Cosmetic Dentistry', caption: 'Smile design first', img: room2Img, contactValue: 'cosmetic-dentistry',
    sentence: 'We plan the look first, then choose the procedures: whitening, bonding, contouring, veneers, or crown work.',
    bullets: ['Every case starts with smile design', 'Whitening, bonding, contouring, veneers, crown work', 'Designed to age gracefully, not to look uniform'] },
  { id: 'restorative', name: 'Complex Restorative Dentistry', caption: 'Multi-tooth coordinated care', img: denturesDetailImg, contactValue: 'restorative-dentistry',
    sentence: 'Coordinated care for cases that need more than one procedure to solve.',
    bullets: ['Multi-tooth, multi-procedure care under one specialist', 'Written plan with the sequencing explained', 'Coordination with other specialists when needed'] },
];

/** Mirrors the FAQPage node in the /services JSON-LD (pageMeta.ts). Keep the two in sync. */
const FAQS = [
  { q: 'Do you do all of these services yourself, or do you refer out?', a: "We perform the restorative, prosthetic, and cosmetic work in-house. For some surgical implant placement, we coordinate with oral surgeons or periodontists who specialize in that step — but the design, restoration, and long-term follow-through stay with us. You're not bouncing between offices for the parts that matter most." },
  { q: 'How do I know which of these services I actually need?', a: "That's what the consultation is for. We don't recommend services by category — we look at what's in your mouth and write a plan specific to it. Some patients arrive thinking they need implants and learn we can save the tooth. Others arrive for a single crown and discover the underlying bite issue we should address first. The point of the first visit is figuring out what your case actually requires." },
  { q: 'Can I do these services in stages instead of all at once?', a: 'Yes — and most patients do. Full mouth reconstruction is staged by design. Cosmetic work can be sequenced. Implants take months for healing between phases. We write the plan with staging built in, so you know when each step happens, what it costs, and what you\'ll experience between visits.' },
  { q: "What if I've already started treatment somewhere else?", a: "Bring whatever you have — X-rays, treatment plans, paperwork, even verbal notes. We'll look at it together and tell you honestly what we'd do differently and why, including cases where we'd recommend you continue with your current provider. The Specialist Second Opinion Session is built specifically for this." },
  { q: 'Do you do everything for one patient, or do families have to see different providers?', a: "We see adult patients across the full range described on this page. If you're considering bringing a parent, spouse, or adult child — or if you're seeing us yourself and want to bring a parent for a separate appointment — we treat each person as their own case. The doctor speaks Russian, which several of our multigenerational families have told us was the gating reason their parents agreed to be seen at all." },
];

export default function ServicesPage() {
  usePageMeta('ServicesPage');
  const tiles = SERVICES.map((s) => ({ name: s.name, caption: s.caption, img: s.img, to: `#${s.id}` }));

  return (
    <>
      {/* HERO + TILE GRID */}
      <section className="bg-[#F7F3EC] py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-[760px] mx-auto">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">PROSTHODONTIC SERVICES</span>
            <h1 className="text-[2.25rem] md:text-[3.25rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">What we do.</h1>
            <p className="mt-4 text-[1.0625rem] md:text-[1.125rem] leading-[1.55] text-[#1B1B1B]">Tap a service to learn more.</p>
          </div>
          <div className="mt-10">
            <ServiceTileGrid tiles={tiles} />
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#F7F3EC]'} py-12 md:py-16 scroll-mt-24`}>
          <div className="max-w-[1100px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className={`rounded-xl overflow-hidden border border-[#E7E2D8] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img src={s.img} alt={s.name} loading="lazy" className="w-full h-auto aspect-[4/3] object-cover" />
              </div>
              <div>
                <h2 className="text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">{s.name}</h2>
                <p className="mt-3 text-[1.0625rem] leading-[1.6] text-[#1B1B1B]">{s.sentence}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[0.9375rem] text-[#1B1B1B]">
                      <Check className="w-4 h-4 mt-1 text-[#C9A961] shrink-0" strokeWidth={2} aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-5">
                  <Link to={`/contact?service=${s.contactValue}#form`} className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 min-h-[48px] rounded-lg text-[0.9375rem] font-semibold transition-colors">
                    Request an appointment for {s.name}
                  </Link>
                  {s.page && (
                    <Link to={s.page} className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold min-h-[48px]">
                      Learn more <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section id="faq" className="bg-white py-14 md:py-20 scroll-mt-24">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center text-[#0A0A0A]">Common questions</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-xl border border-[#E7E2D8] bg-[#F7F3EC]">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]">
                  <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">{f.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" strokeWidth={1.75} aria-hidden="true" />
                </summary>
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-[0.9375rem] leading-[1.6] text-[#1B1B1B]">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold min-h-[48px]">
              More questions answered <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A0A0A] py-14 md:py-20 text-center">
        <div className="max-w-[720px] mx-auto px-4 md:px-6">
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">Not sure which service you need?</h2>
          <p className="mt-4 text-[#F7F3EC]/85 text-[1.0625rem]">Request an appointment and a prosthodontist will point you the right way.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact#form" className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-8 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto">Request an Appointment</Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-8 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto">
              <Phone className="w-4 h-4 pointer-events-none" strokeWidth={2} /> <span className="pointer-events-none">347-378-7827</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
