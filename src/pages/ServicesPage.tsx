import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Sparkles, ShieldCheck, Star, Check, ChevronDown, Smile, Layers, Moon, Activity, AlertCircle } from 'lucide-react';
import { usePageMeta } from '../lib/seo';
import implantsHeroImg from '../assets/services/implants-hero.jpg';
import implantsIntraoralImg from '../assets/services/implants-intraoral.jpg';
import allOnXHeroImg from '../assets/services/all-on-x-hero.jpg';
import veneersHeroImg from '../assets/services/veneers-hero.jpg';
import veneersDetailImg from '../assets/services/veneers-detail.jpg';
import denturesCompleteHeroImg from '../assets/services/dentures-complete-hero.jpg';
import denturesCompleteDetailImg from '../assets/services/dentures-complete-detail.jpg';
import denturesPartialHeroImg from '../assets/services/dentures-partial-hero.jpg';
import denturesPartialDetailImg from '../assets/services/dentures-partial-detail.jpg';
import overdenturesHeroImg from '../assets/services/overdentures-hero.jpg';

export default function ServicesPage() {
  usePageMeta('ServicesPage');

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-[820px] mx-auto text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">WHAT WE TREAT</span>
            <h1 className="mt-2 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
              Prosthodontic services in Brooklyn.
            </h1>
            <p className="mt-6 text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[#5C5C5C] max-w-[58ch] mx-auto">
              Specialist-led care across restoration, replacement, and complex dentistry — coordinated under one prosthodontist. Bring your case, your questions, and any treatment plans you've received.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center items-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                Book a Consultation
              </Link>
              <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold min-h-[48px] min-w-[48px] px-2">
                <Phone className="w-4 h-4" />
                Or call 347-378-7827
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.875rem] text-[#5C5C5C]">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-[#C9A961] fill-current" />
                <Star className="w-4 h-4 text-[#C9A961] fill-current" />
                <Star className="w-4 h-4 text-[#C9A961] fill-current" />
                <Star className="w-4 h-4 text-[#C9A961] fill-current" />
                <Star className="w-4 h-4 text-[#C9A961] fill-current" />
                Google-reviewed
              </span>
              <span aria-hidden="true">&middot;</span>
              <span>NYU Certificate in Prosthodontics</span>
              <span aria-hidden="true">&middot;</span>
              <span>Russian spoken</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ORIENTATION / WHY A SPECIALIST COORDINATES */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <h2 className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">ONE SPECIALIST. ONE COORDINATED PLAN.</h2>
          <h3 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] text-center">
            Every service here belongs to one specialist's plan, not nine separate offices.
          </h3>
          <p className="mt-7 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            Dentists can place an implant, deliver a crown, and recommend veneers as three separate transactions. A prosthodontist looks at those decisions together — bite, jaw mechanics, gum line, long-term forces — and designs how it fits before any of it is placed. Below is the full range of dentistry we handle; the consultation figures out which services apply, in what order, and at what pace.
          </p>
        </div>
      </section>

      {/* SECTION 3: SERVICE — FULL MOUTH RECONSTRUCTION */}
      <section id="full-mouth-reconstruction" className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Sparkles className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">FULL MOUTH RECONSTRUCTION</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                When years of compromise have caught up with you.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                A coordinated plan for teeth that have accumulated too many problems for a single procedure — failed crowns, missing teeth, worn enamel, bite issues, gum recession. A written treatment plan spanning six to twelve months, sequencing implants, crowns, bridges, and veneers in the right order. This is what prosthodontic training exists for — looking at all 28 to 32 teeth at once and designing an outcome that holds for the long term.
              </p>
            </div>
            <div className="bg-white border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Full mouth reconstruction usually 6–12 months, staged across visits</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Combines implants, crowns, bridges, sometimes veneers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Written plan with locked pricing at the start</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Function and appearance preserved at every stage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Specialist coordination — overseen by 1 prosthodontist</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICE — DENTAL IMPLANTS */}
      <section id="dental-implants" className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <ShieldCheck className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">DENTAL IMPLANTS</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Single, multiple, or full-arch — designed before they're placed.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                A titanium post that fuses to your jawbone, supporting a crown, bridge, or full-arch restoration. Chew, talk, forget it's there. The cases we handle:
              </p>
              <ul className="mt-4 space-y-2.5 text-[1rem] leading-[1.65] text-[#1B1B1B]">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span>Single implants for one missing tooth — without disturbing the adjacent teeth</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span>Multiple implants for several missing teeth, often supporting a bridge</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span>Full-arch (All-on-x) restorations replacing an entire upper or lower arch with four to six strategically placed implants</span>
                </li>
              </ul>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Specialist-led implant work is different in one way: we design the final restoration before the implant is placed, so the crown sits exactly where it needs to. Surgical placement is coordinated with partners when needed; design and restoration stay with us.
              </p>
              <div className="mt-8 mb-6 rounded-xl overflow-hidden bg-white shadow-md">
                <img
                  src={implantsHeroImg}
                  alt="3D dental implant illustration showing titanium post, abutment, and ceramic crown"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="rounded-xl overflow-hidden bg-white shadow-md aspect-[4/3]">
                    <img
                      src={implantsIntraoralImg}
                      alt="Single tooth dental implant placement — titanium post in gum tissue"
                      className="w-full h-full object-cover block"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C] mt-3 text-center">
                    Single tooth implant placement.
                  </p>
                </div>
                <div>
                  <div className="rounded-xl overflow-hidden bg-white shadow-md aspect-[4/3]">
                    <img
                      src={allOnXHeroImg}
                      alt="All-on-x full-arch dental implant reconstruction — four to six implants supporting a complete arch"
                      className="w-full h-full object-cover block"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C] mt-3 text-center">
                    All-on-x full-arch reconstruction.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Single, multiple, or All-on-4 / full-arch options</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Restoration designed BEFORE implant placement</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">3–6 months from placement to final restoration typical</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Decades of expected lifespan with proper care</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Surgical placement coordinated with partner specialists</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICE — PORCELAIN VENEERS */}
      <section id="veneers" className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Star className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">PORCELAIN VENEERS</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Veneers that look like your teeth, just younger.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Thin custom porcelain shells bonded to the front of your teeth — changing color, shape, contour, and proportion. Most veneer complaints we hear about work done elsewhere involve results that look uniform, too bright, or noticeably restored. Our approach is the opposite: a smile that looks like yours, just younger, matched one tooth at a time.
              </p>
              <div className="mt-8 mb-6 rounded-xl overflow-hidden bg-white shadow-md">
                <img
                  src={veneersHeroImg}
                  alt="Smile with custom porcelain veneers — natural color and translucency"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="rounded-xl overflow-hidden bg-white shadow-md">
                  <img
                    src={veneersDetailImg}
                    alt="Close-up detail of ceramic veneers showing translucency and surface texture"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
                <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C] mt-3 text-center">
                  Ceramic veneer detail.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Custom porcelain shells, individually designed</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Typically 2–3 visits to complete</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Designed to look like natural teeth, not uniform</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Color and contour matched per-tooth</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Smile design completed before any prep work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICE — CROWNS & BRIDGES */}
      <section id="crowns-bridges" className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Check className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">CROWNS & BRIDGES</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Restorations that disappear in a smile photo.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                A crown covers a tooth too damaged for a filling. A bridge replaces missing teeth using adjacent teeth or implants as anchors. Both are about disappearance — a well-designed crown doesn't read as a crown, a well-designed bridge doesn't look bridged. Same-day digital crown technology available for appropriate cases.
              </p>
            </div>
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">All-ceramic restorations, designed for surrounding teeth</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Same-day crowns available via CEREC for appropriate cases</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Bridge alternatives include implant-supported options</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Typical lifespan 15+ years with proper care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6.1: SERVICE — DENTURES */}
      <section id="dentures" className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Smile className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">REMOVABLE COMPLETE DENTURES</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Custom complete dentures that don't slip, click, or look like dentures.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Traditional dentures done at a specialty level — designed to your face proportions, fitted for stability, and finished with materials that read as natural teeth. Complete dentures for full arches, partials for cases where some teeth remain. Every set is designed on a working model with your bite verified before final fabrication.
              </p>
              <div className="mt-8 mb-6 rounded-xl overflow-hidden bg-white shadow-md">
                <img
                  src={denturesCompleteHeroImg}
                  alt="Complete removable dentures — full upper and lower arch restorations"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="rounded-xl overflow-hidden bg-white shadow-md">
                  <img
                    src={denturesCompleteDetailImg}
                    alt="Complete lower denture with maintenance tool"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
                <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C] mt-3 text-center">
                  Complete denture with maintenance detail.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Complete and partial denture options</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Custom-fit to your face, not off a shelf</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Materials designed to look and feel natural</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Bite verified before final fabrication</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Adjustments and relines included in first year</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6.1.5: SERVICE — REMOVABLE PARTIAL DENTURES */}
      <section id="partial-dentures" className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Smile className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">REMOVABLE PARTIAL DENTURES</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Partial dentures for patients with some natural teeth remaining.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Custom partial dentures designed to work around your remaining teeth — restoring function and appearance without replacing what's still healthy. Metal-framework and flexible options are both available, each with distinct advantages depending on your case. Every partial is designed to your specific arch, verified for stability, and finished for a natural look.
              </p>
              <div className="mt-8 mb-6 rounded-xl overflow-hidden bg-white shadow-md">
                <img
                  src={denturesPartialHeroImg}
                  alt="Removable partial denture with metal framework — restoration around remaining natural teeth"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="rounded-xl overflow-hidden bg-white shadow-md">
                  <img
                    src={denturesPartialDetailImg}
                    alt="Flexible partial dentures — upper and lower arch options"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
                <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C] mt-3 text-center">
                  Flexible partial denture options.
                </p>
              </div>
            </div>
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Metal-framework and flexible options</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Custom-fit to your remaining teeth</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Removable for cleaning, secure while wearing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Bite verified before final fabrication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6.2: SERVICE — OVERDENTURES */}
      <section id="overdentures" className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Layers className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">OVERDENTURES</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Dentures anchored to implants — no slipping, no adhesive.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                An overdenture clips onto two to four dental implants rather than resting on the gums. The result: no slipping, no pastes, no clicking when you eat. Chewing force approaches that of natural teeth. For patients tired of the limitations of traditional dentures, this is often the fix they didn't know existed.
              </p>
              <div className="mt-8 rounded-xl overflow-hidden bg-white shadow-md">
                <img
                  src={overdenturesHeroImg}
                  alt="Overdenture supported by two dental implants — secure attachment without adhesive"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Two to four implants anchor the denture</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Removable for cleaning, secure while wearing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">No adhesive required</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Chewing force significantly higher than conventional dentures</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Upper arch, lower arch, or both</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICE — COSMETIC DENTISTRY */}
      <section id="cosmetic-dentistry" className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Smile className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">COSMETIC DENTISTRY</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Smile design first. Procedures second.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Every cosmetic case starts with smile design — we plan the look first, then work backward to the procedures. The mix depends on the case: whitening, bonding, contouring, veneers, or coordinated crown work. Most patients arrive for a specific moment — a wedding, a re-emergence, being tired of pressing their lips together in photos. We design for that moment and the thirty years after it.
              </p>
            </div>
            <div className="bg-white border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Every case starts with smile design</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Whitening, bonding, contouring, veneers, crown work</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Designed to age gracefully, not to look uniform</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Tied to a real moment in your life — not a template</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SERVICE — COMPLEX RESTORATIVE DENTISTRY */}
      <section id="restorative" className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Layers className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">COMPLEX RESTORATIVE DENTISTRY</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                When your case needs more than one procedure to solve.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Some cases don't fit a single procedure — multiple failed restorations, severe wear, missing teeth alongside damaged neighbors, undiagnosed bite issues. Complex cases aren't bad cases; they're cases that require careful sequencing across structural integrity, bite mechanics, esthetics, and durability. The result is a written plan you can read, understand, and decide on without pressure.
              </p>
            </div>
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Multi-tooth, multi-procedure coordinated care</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Designed for cases other practices flagged as complicated</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Written plan with sequencing logic explained</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Coordination with other specialists when needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SECOND OPINION CALLOUT (DARK INTERLUDE) */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center">
        <div className="max-w-[860px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">BEFORE YOU DECIDE</span>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">
            Already been to other dentists?
          </h2>
          <p className="mt-5 text-[1.125rem] leading-[1.65] max-w-[55ch] mx-auto text-[#F7F3EC]/85">
            Most of our patients arrive after two or three consultations elsewhere. The Specialist Second Opinion Session makes sense of the plans you've already received — 3D scan, 40-point bite check, and a written plan you keep. $147, credited toward treatment if you start within 90 days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/second-opinion" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              See the Second Opinion Session →
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] min-h-[48px] min-w-[48px]">
              Call 347-378-7827
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 10: SERVICE — SEDATION DENTISTRY */}
      <section id="sedation" className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Moon className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">SEDATION DENTISTRY</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                For patients who have not been to a dentist in a long time.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                For patients with dental anxiety, a low pain tolerance, a strong gag reflex, or for longer procedures. Two options:
              </p>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[1rem] text-[#1B1B1B]">Nitrous oxide ("laughing gas") — mild, fast-acting, wears off in minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[1rem] text-[#1B1B1B]">Oral conscious sedation — a prescribed pill taken before the appointment; you're relaxed but able to respond</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Nitrous and oral sedation options</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Always optional, never required</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Discussed openly at first consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: SERVICE — TMJ TREATMENT */}
      <section id="tmj" className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Activity className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">TMJ DISORDERS</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Jaw pain, morning headaches, clicking — the underlying causes.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                TMJ disorders show up as jaw pain, joint clicking, morning headaches, neck tension, worn-down teeth, or difficulty opening fully. Diagnosis starts with bite, jaw mechanics, and symptoms. Treatment ranges from custom night guards to coordinated restorative work when the underlying issue is how your teeth come together.
              </p>
            </div>
            <div className="bg-white border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Custom oral appliances and night guards</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Bite analysis and adjustment when relevant</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Often coordinated with restoration work</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Targets cause, not just symptoms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11.1: SERVICE — CLEANINGS & PREVENTIVE CARE */}
      <section id="cleanings" className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <Sparkles className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">CLEANINGS & PREVENTIVE CARE</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Preventive care that keeps specialty work lasting.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Routine cleanings, deep cleaning for periodontal maintenance, and preventive care for patients with implants, crowns, or extensive restorative work. Specialty-level cleaning matters most for patients who've invested in complex dentistry — the wrong technique damages restorations. Our hygienists are trained on caring for implants, veneers, and prosthodontic work.
              </p>
              {/* [OPERATOR: add photo of clinical cleaning setup or hygiene equipment when available. Match the image treatment used in adjacent service sections — same aspect ratio, rounded corners, position relative to text.] */}
            </div>
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Routine six-month cleanings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Deep cleaning (scaling and root planing) when needed</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Specialty protocols for implants and restorations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Early-stage caries detection</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Coordinated with your treatment history</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: SERVICE — EMERGENCY DENTAL CARE */}
      <section id="emergency" className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <AlertCircle className="w-9 h-9 text-[#C9A961]" />
              <span className="mt-4 text-[0.9375rem] md:text-[1.0625rem] uppercase tracking-[0.18em] font-bold text-[#C9A961] block mb-3">EMERGENCY DENTAL CARE</span>
              <h2 className="mt-2 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                When something cracks, breaks, or won't stop hurting.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Dental emergencies don't wait. Acute pain, a cracked tooth, a dislodged crown or filling, a knocked-out tooth, or an abscess — call as soon as possible, including days the office is closed. We monitor the line and fit patients in same-day or next-business-day.
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                For knocked-out teeth, time matters: keep the tooth moist in milk or saliva, don't scrub it, call immediately. Treatment ranges from stabilizing restoration to root canal or extraction with a replacement plan.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[48px] min-w-[48px]">
                  <Phone className="w-4 h-4" /> Call 347-378-7827
                </a>
              </div>
            </div>
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">KEY FACTS</span>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Call <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="hover:text-[#C9A961] min-h-[48px] inline-flex items-center underline decoration-1 underline-offset-2 font-medium px-1 -mx-1">347-378-7827</a> for immediate guidance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Same-day or next-business-day appointments</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Pain management, temporary, or definitive treatment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-[#C9A961]" />
                  <span className="text-[0.9375rem] text-[#1B1B1B]">Replacement plan if extraction is needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: INSURANCE & FINANCING */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">INSURANCE & FINANCING</span>
              <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Cost is a conversation, not a surprise.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Most prosthodontic work isn't fully covered by insurance, but most patients have coverage that pays toward part of it. We maximize what your plan pays and structure the rest in a way you can live with.
              </p>
              <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                We submit pre-determinations so you know what's covered before work begins. For plans with annual maximums, we can stage treatment across calendar years. For out-of-pocket costs, we offer in-house payment arrangements and CareCredit financing at low or zero interest, spread over 24 to 60 months.
              </p>
            </div>
            <div className="bg-white border border-[#E7E2D8] rounded-xl p-7">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">WHAT TO EXPECT</span>
              <h4 className="mt-2 text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Three things we put in writing.
              </h4>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A961] text-[#0A0A0A] font-semibold text-[0.9375rem] flex items-center justify-center">1</span>
                  <span className="text-[0.9375rem] text-[#1B1B1B] leading-[1.6]">What your insurance is expected to cover, per procedure, before we start.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A961] text-[#0A0A0A] font-semibold text-[0.9375rem] flex items-center justify-center">2</span>
                  <span className="text-[0.9375rem] text-[#1B1B1B] leading-[1.6]">What you'd owe out of pocket, with the math shown — not estimated verbally.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A961] text-[#0A0A0A] font-semibold text-[0.9375rem] flex items-center justify-center">3</span>
                  <span className="text-[0.9375rem] text-[#1B1B1B] leading-[1.6]">If staged across plan years: which procedures fall in which year, and the cash-flow implications of each.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQ TEASER */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">SERVICES — COMMON QUESTIONS</span>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] text-center">
            What patients ask before booking.
          </h2>
          <div className="mt-10 space-y-3">
            <details className="bg-[#FAF7F1] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-white">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Do you do all of these services yourself, or do you refer out?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                We perform the restorative, prosthetic, cosmetic, and TMJ work in-house. For some surgical implant placement, we coordinate with oral surgeons or periodontists who specialize in that step — but the design, restoration, and long-term follow-through stay with us. You're not bouncing between offices for the parts that matter most.
              </div>
            </details>

            <details className="bg-[#FAF7F1] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-white">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">How do I know which of these services I actually need?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                That's what the consultation is for. We don't recommend services by category — we look at what's in your mouth and write a plan specific to it. Some patients arrive thinking they need implants and learn we can save the tooth. Others arrive for a single crown and discover the underlying bite issue we should address first. The point of the first visit is figuring out what your case actually requires.
              </div>
            </details>

            <details className="bg-[#FAF7F1] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-white">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Can I do these services in stages instead of all at once?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Yes — and most patients do. Full mouth reconstruction is staged by design. Cosmetic work can be sequenced. Implants take months for healing between phases. We write the plan with staging built in, so you know when each step happens, what it costs, and what you'll experience between visits.
              </div>
            </details>

            <details className="bg-[#FAF7F1] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-white">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">What if I've already started treatment somewhere else?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Bring whatever you have — X-rays, treatment plans, paperwork, even verbal notes. We'll look at it together and tell you honestly what we'd do differently and why, including cases where we'd recommend you continue with your current provider. The Specialist Second Opinion Session is built specifically for this.
              </div>
            </details>

            <details className="bg-[#FAF7F1] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-white">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Do you do everything for one patient, or do families have to see different providers?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                We see adult patients across the full range described on this page. If you're considering bringing a parent, spouse, or adult child — or if you're seeing us yourself and want to bring a parent for a separate appointment — we treat each person as their own case. Dr. Furman speaks Russian, which several of our multigenerational families have told us was the gating reason their parents agreed to be seen at all.
              </div>
            </details>
          </div>
          <div className="mt-10 text-center">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group">
              Read the full FAQ
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">READY</span>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">
            One consultation tells you which of these services apply to your case.
          </h2>
          <p className="mt-5 text-[1.125rem] leading-[1.65] max-w-[55ch] mx-auto text-[#F7F3EC]/85">
            Walk in with whatever you have. Walk out with a written plan and the time to think about it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              Book a Consultation
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] min-h-[48px] min-w-[48px]">
              Call 347-378-7827
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
