import { Link } from 'react-router-dom';
import { Phone, MessageSquare, CalendarCheck, ScanLine, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { usePageMeta } from '../lib/seo';
import { ServiceTileGrid } from '../components/test/ServiceTile';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialVideos from '../components/landing/TestimonialVideos';
import implantsImg from '../assets/services/implants-hero.jpg';
import allOnXImg from '../assets/services/all-on-x-hero.jpg';
import veneersImg from '../assets/services/veneers-hero.jpg';
import veneersDetailImg from '../assets/services/veneers-detail.jpg';
import denturesImg from '../assets/services/dentures-complete-hero.jpg';
import scanImg from '../assets/office/3d-scan.jpg';
import fmrBefore from '../assets/cases/case-03-fmr-before.jpg';
import fmrAfter from '../assets/cases/case-03-fmr-after.jpg';
import implantsBefore from '../assets/cases/case-01-implants-before.jpg';
import implantsAfter from '../assets/cases/case-01-implants-after.jpg';
import veneersBefore from '../assets/cases/case-01-veneers-before.jpg';
import veneersAfter from '../assets/cases/case-01-veneers-after.jpg';

/**
 * TEST homepage (/test). Not linked from nav/footer, noindex, excluded from the sitemap.
 * Client direction (Sept 25): say "prosthodontist" immediately, pictures over words,
 * no comparisons to other dentists, "Contact Us" wording, under ~200 words of body copy.
 */
const TILES = [
  { name: 'Dental Implants', caption: 'Single tooth to full arch', img: implantsImg, to: '/test/services#dental-implants' },
  { name: 'Full Mouth Reconstruction', caption: 'One coordinated plan', img: allOnXImg, to: '/test/services#full-mouth-reconstruction' },
  { name: 'Crowns & Bridges', caption: 'All-ceramic, same-day options', img: veneersDetailImg, to: '/test/services#crowns-bridges' }, // needs photo
  { name: 'Dentures', caption: 'Complete, partial, implant-supported', img: denturesImg, to: '/test/services#dentures' },
  { name: 'Porcelain Veneers', caption: 'Natural-looking porcelain', img: veneersImg, to: '/test/services#veneers' },
  { name: 'Specialist Second Opinion', caption: 'Bring your treatment plan', img: scanImg, to: '/second-opinion' },
];

const RESULTS = [
  { label: 'Full mouth reconstruction', to: '/test/services#full-mouth-reconstruction', before: fmrBefore, after: fmrAfter, beforeAlt: 'Before full mouth ceramic rehabilitation', afterAlt: 'After full mouth ceramic rehabilitation' },
  { label: 'Dental implants', to: '/test/services#dental-implants', before: implantsBefore, after: implantsAfter, beforeAlt: 'Before: 7 implants with periodontal coordination', afterAlt: 'After: 7 implants with periodontal coordination' },
  { label: 'Porcelain veneers', to: '/test/services#veneers', before: veneersBefore, after: veneersAfter, beforeAlt: 'Before: ceramic veneer reconstruction', afterAlt: 'After: ceramic veneer reconstruction' },
];

const STEPS = [
  { icon: MessageSquare, title: 'Contact us', text: 'Call, or send the short form.' },
  { icon: CalendarCheck, title: 'Set up a consult', text: 'We find a time that works.' },
  { icon: ScanLine, title: 'Consultation & 3D scan', text: 'About an hour. We look and talk.' },
  { icon: FileText, title: 'Written plan & pricing', text: 'Yours to take home and think over.' },
  { icon: Sparkles, title: 'Treatment', text: 'Staged at your pace, one specialist.' },
];

export default function HomePageTest() {
  usePageMeta('HomePageTest');

  return (
    <>
      {/* HERO */}
      <section className="bg-[#F7F3EC] pt-8 pb-8 md:pt-10 md:pb-10">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-[820px] mx-auto">
            <span className="text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">BROOKLYN · SHEEPSHEAD BAY</span>
            <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium mt-3 text-[#0A0A0A]">
              Prosthodontist in Brooklyn.
            </h1>
            <p className="mt-3 text-[1rem] md:text-[1.0625rem] leading-[1.5] text-[#1B1B1B] max-w-[52ch] mx-auto">
              A dental specialist in implants, crowns, dentures and full-mouth reconstruction.
            </p>
          </div>

          <div className="mt-6">
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-[#0A0A0A] mx-auto" style={{ aspectRatio: '16 / 9', maxWidth: '600px' }}>
              <iframe
                src="https://iframe.mediadelivery.net/embed/731039/a0e63c69-e4e4-485d-a997-5427956cc4e9?autoplay=true&loop=true&muted=true&preload=true&responsive=true&controls=false"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                title="World Smiles Prosthodontics"
              ></iframe>
            </div>
          </div>


          {/* Desktop-only CTA under the video; on phones the sticky bar covers it */}
          <div className="hidden lg:flex justify-center mt-6">
            <Link to="/contact#form" className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-8 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors">Request an Appointment</Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.8125rem] text-[#5C5C5C]">
            <span>NYU Certificate in Prosthodontics</span>
            <span className="text-[#C9A961]">·</span>
            <span>Russian spoken</span>
            <span className="text-[#C9A961]">·</span>
            <span><span className="text-[#C9A961]">★★★★★</span> Google-reviewed</span>
          </div>
        </div>
      </section>

      {/* SERVICES — photo tiles */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">WHAT A PROSTHODONTIST DOES</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 text-[#0A0A0A]">Our services</h2>
          <div className="mt-8">
            <ServiceTileGrid tiles={TILES} />
          </div>
          <div className="mt-8 text-center">
            <Link to="/test/services" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold min-h-[48px]">
              All services <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* PATIENT VIDEOS */}
      <TestimonialVideos locale="en" heading="Hear from our patients" cta={{ label: 'Request an Appointment', onClick: () => {} }} ctaTo="/contact#form" />

      {/* RESULTS — three sliders, one per headline service */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">RESULTS</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 text-[#0A0A0A]">Before and after</h2>
          <p className="mt-3 text-center text-[0.9375rem] text-[#5C5C5C]">Drag to compare · Used with patient consent</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {RESULTS.map((r) => (
              <div key={r.label} className="rounded-xl overflow-hidden border border-[#E7E2D8] bg-white">
                <BeforeAfterSlider beforeSrc={r.before} afterSrc={r.after} beforeAlt={r.beforeAlt} afterAlt={r.afterAlt} />
                <div className="p-4 text-center">
                  <p className="font-[Fraunces,Georgia,serif] text-[1.0625rem] text-[#0A0A0A]">{r.label}</p>
                  <Link to={r.to} className="mt-3 inline-flex items-center gap-1.5 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-5 py-2.5 min-h-[44px] rounded-lg text-[0.9375rem] font-semibold transition-colors">
                    Learn more <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/before-after" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold min-h-[48px]">
              See more results <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center text-[#0A0A0A]">How it works</h2>
          <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#F7F3EC] border border-[#E7E2D8] flex items-center justify-center mx-auto">
                  <s.icon className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <p className="mt-4 text-[0.75rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">Step {i + 1}</p>
                <h3 className="mt-1 text-[1.125rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">{s.title}</h3>
                <p className="mt-1 text-[0.9375rem] text-[#5C5C5C]">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link to="/contact#form" className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-8 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto">Request an Appointment</Link>
          </div>
        </div>
      </section>

      {/* FINAL BAND */}
      <section className="bg-[#0A0A0A] py-14 md:py-20 text-center">
        <div className="max-w-[720px] mx-auto px-4 md:px-6">
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">Questions about your teeth? Ask a prosthodontist.</h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-8 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto">Contact Us</Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-8 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto">
              <Phone className="w-4 h-4 pointer-events-none" strokeWidth={2} /> <span className="pointer-events-none">347-378-7827</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
