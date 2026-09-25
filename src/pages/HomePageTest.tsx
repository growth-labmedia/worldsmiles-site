import { Link } from 'react-router-dom';
import { Phone, ScanLine, FileText, Sparkles, ArrowRight } from 'lucide-react';
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

const STEPS = [
  { icon: ScanLine, title: 'Consultation & 3D scan', text: 'About an hour. We look and talk.' },
  { icon: FileText, title: 'Written plan & pricing', text: 'Yours to take home and think over.' },
  { icon: Sparkles, title: 'Treatment', text: 'Staged at your pace, one specialist.' },
];

export default function HomePageTest() {
  usePageMeta('HomePageTest');

  return (
    <>
      {/* HERO */}
      <section className="bg-[#F7F3EC] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-[820px] mx-auto">
            <span className="text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">BROOKLYN · SHEEPSHEAD BAY</span>
            <h1 className="text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">
              Prosthodontist in Brooklyn.
            </h1>
            <p className="mt-5 text-[1.0625rem] md:text-[1.25rem] leading-[1.55] text-[#1B1B1B] max-w-[52ch] mx-auto">
              A dental specialist in implants, crowns, dentures and full-mouth reconstruction.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-[#0A0A0A] mx-auto" style={{ aspectRatio: '16 / 9', maxWidth: '960px' }}>
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

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-8 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto">
              Contact Us
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-8 py-3.5 min-h-[48px] rounded-lg text-[1rem] font-semibold transition-colors w-full sm:w-auto">
              <Phone className="w-4 h-4 pointer-events-none" strokeWidth={2} /> <span className="pointer-events-none">Call 347-378-7827</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.875rem] text-[#5C5C5C]">
            <span>NYU Certificate in Prosthodontics</span>
            <span className="text-[#C9A961]">·</span>
            <span>Russian spoken</span>
            <span className="text-[#C9A961]">·</span>
            <span><span className="text-[#C9A961]">★★★★★</span> Google-reviewed</span>
          </div>
        </div>
      </section>

      {/* SERVICES — photo tiles */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">WHAT A PROSTHODONTIST DOES</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 text-[#0A0A0A]">Our services</h2>
          <div className="mt-10">
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
      <TestimonialVideos locale="en" heading="Hear from our patients" />

      {/* RESULTS — one slider */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[720px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">RESULTS</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 text-[#0A0A0A]">Full mouth reconstruction</h2>
          <div className="mt-8 rounded-xl overflow-hidden border border-[#E7E2D8] bg-white">
            <BeforeAfterSlider
              beforeSrc={fmrBefore}
              afterSrc={fmrAfter}
              beforeAlt="Before full mouth ceramic rehabilitation"
              afterAlt="After full mouth ceramic rehabilitation"
            />
            <p className="p-4 text-center text-[0.8125rem] text-[#5C5C5C]">Drag to compare · Used with patient consent</p>
          </div>
          <div className="mt-6 text-center">
            <Link to="/before-after" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold min-h-[48px]">
              See more results <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6">
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center text-[#0A0A0A]">How it works</h2>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
