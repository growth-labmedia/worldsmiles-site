import { useState, useEffect, useRef } from 'react';
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Star, Quote, Ruler, AlignCenter, Smile, Heart } from 'lucide-react';
import { usePageMeta } from '../lib/seo';
import case01FmrBefore from '../assets/cases/case-01-fmr-before.jpg';
import case01FmrAfter from '../assets/cases/case-01-fmr-after.jpg';
import case02FmrBefore from '../assets/cases/case-02-fmr-before.jpg';
import case02FmrAfter from '../assets/cases/case-02-fmr-after.jpg';
import case03FmrBefore from '../assets/cases/case-03-fmr-before.jpg';
import case03FmrAfter from '../assets/cases/case-03-fmr-after.jpg';
import case01ImplantsBefore from '../assets/cases/case-01-implants-before.jpg';
import case01ImplantsAfter from '../assets/cases/case-01-implants-after.jpg';
import case02ImplantsBefore from '../assets/cases/case-02-implants-before.jpg';
import case02ImplantsAfter from '../assets/cases/case-02-implants-after.jpg';
import case01VeneersBefore from '../assets/cases/case-01-veneers-before.jpg';
import case01VeneersAfter from '../assets/cases/case-01-veneers-after.jpg';
import case02VeneersBefore from '../assets/cases/case-02-veneers-before.jpg';
import case02VeneersAfter from '../assets/cases/case-02-veneers-after.jpg';
import caseFeaturedFmrProgression from '../assets/cases/case-featured-fmr-progression.jpg';

function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt = "Before", afterAlt = "After" }: { beforeSrc: string, afterSrc: string, beforeAlt?: string, afterAlt?: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  };

  const handleStart = (e: ReactMouseEvent | ReactTouchEvent) => {
    isDragging.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => handleMove(e);
    const end = () => handleEnd();
    window.addEventListener('mousemove', move as any);
    window.addEventListener('mouseup', end);
    window.addEventListener('touchmove', move as any, { passive: true });
    window.addEventListener('touchend', end);
    return () => {
      window.removeEventListener('mousemove', move as any);
      window.removeEventListener('mouseup', end);
      window.removeEventListener('touchmove', move as any);
      window.removeEventListener('touchend', end);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden cursor-ew-resize select-none bg-[#0A0A0A]"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      role="img"
      aria-label={`Before and after comparison. ${beforeAlt} on left, ${afterAlt} on right. Drag the slider to compare.`}
    >
      {/* AFTER image — bottom layer, fully visible */}
      <img
        src={afterSrc}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* BEFORE image — top layer, clipped to left of slider */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* BEFORE label — top-left corner */}
      <span className="absolute top-3 left-3 bg-black/75 text-white text-[0.6875rem] uppercase tracking-[0.12em] font-semibold px-2.5 py-1 rounded pointer-events-none">
        Before
      </span>

      {/* AFTER label — top-right corner */}
      <span className="absolute top-3 right-3 bg-black/75 text-white text-[0.6875rem] uppercase tracking-[0.12em] font-semibold px-2.5 py-1 rounded pointer-events-none">
        After
      </span>

      {/* Divider + drag handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 6 15 12 9 18" transform="translate(-6,0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterPage() {
  usePageMeta('BeforeAfterPage');

  return (
    <>
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[820px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">REAL PATIENTS, REAL WORK</span>
          <h1 className="mt-4 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-medium text-[#0A0A0A]">
            Smiles we've created.
          </h1>
          <p className="mt-6 text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[#5C5C5C] max-w-[58ch] mx-auto">
            Each case below is a real World Smiles patient, used with their permission. Some chose to show their full face. Others asked us to crop tightly to the work itself. Either way, the only thing edited is what's in the frame — never the teeth themselves. No filters. No retouching. No 'after' image taken on a different day under different lighting.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.875rem] text-[#5C5C5C]">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} /> Used with patient consent</span>
            <span>·</span>
            <span>No digital retouching</span>
            <span>·</span>
            <span>Same-day photography, paired lighting</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW TO READ A BEFORE/AFTER */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-[820px] mx-auto text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">THE PROSTHODONTIC PERSPECTIVE</span>
            <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-medium text-[#0A0A0A]">
              What to look for when you compare a before and after.
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.7] text-[#1B1B1B] text-left max-w-[68ch] mx-auto">
              Most cosmetic dental work is judged by whether the teeth got whiter. That's the easy part — anyone with a whitening tray can do that. The harder question, and the one that separates a polished smile from a smile that still looks right in twenty years, is whether the underlying design is sound. A prosthodontist is trained to evaluate four specific signals. When you look at any before/after — ours or anyone else's — these are what matter.
            </p>
          </div>
          
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <div className="bg-[#F7F3EC] rounded-xl p-7 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-5">
                <Ruler className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#5C5C5C] font-semibold">ONE</span>
              <h4 className="mt-2 text-[1.1875rem] leading-[1.3] font-medium text-[#0A0A0A]">Tooth proportions.</h4>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-[#1B1B1B]">
                The width-to-length ratio of your front teeth. Off by 10% and the smile reads as 'work done.' On by 10% and it reads as 'great teeth.' Most cosmetic complaints trace back to this one number.
              </p>
            </div>
            <div className="bg-[#F7F3EC] rounded-xl p-7 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-5">
                <AlignCenter className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#5C5C5C] font-semibold">TWO</span>
              <h4 className="mt-2 text-[1.1875rem] leading-[1.3] font-medium text-[#0A0A0A]">Midline alignment.</h4>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-[#1B1B1B]">
                The vertical line between your two front teeth should match the midline of your face — not your nose, your face. Work that ignores this produces 'something looks off, but I can't say what.'
              </p>
            </div>
            <div className="bg-[#F7F3EC] rounded-xl p-7 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-5">
                <Smile className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#5C5C5C] font-semibold">THREE</span>
              <h4 className="mt-2 text-[1.1875rem] leading-[1.3] font-medium text-[#0A0A0A]">Gingival architecture.</h4>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-[#1B1B1B]">
                The shape of the gum line that frames each tooth. A smooth, symmetric scallop reads as natural. A jagged or compensated line reads as work done. Often more important than the teeth themselves.
              </p>
            </div>
            <div className="bg-[#F7F3EC] rounded-xl p-7 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#5C5C5C] font-semibold">FOUR</span>
              <h4 className="mt-2 text-[1.1875rem] leading-[1.3] font-medium text-[#0A0A0A]">Lip support and facial harmony.</h4>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-[#1B1B1B]">
                Do the new teeth support the lip the way the old ones did? Cases that ignore lip dynamics produce flat, aged smiles — even when the teeth themselves are beautiful in isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED CASE */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-[820px] mx-auto text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">FEATURED CASE</span>
            <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-medium text-[#0A0A0A]">
              Full-mouth reconstruction — planned before it was built.
            </h2>
          </div>

          <div className="max-w-[560px] mx-auto mb-10">
            <div className="rounded-xl overflow-hidden bg-white shadow-lg">
              <img
                src={caseFeaturedFmrProgression}
                alt="Featured case treatment progression — initial presentation, temporary restorations with implant and crown lengthening, and final restorations"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>

          <div className="max-w-[820px] mx-auto">
            <span className="mb-4 inline-flex bg-[#0A0A0A] text-[#C9A961] text-[0.75rem] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full">Full Mouth Reconstruction</span>
            <h3 className="text-[1.5rem] md:text-[1.75rem] leading-[1.25] font-medium text-[#0A0A0A]">
              Planning is what makes a complicated implant reconstruction predictable.
            </h3>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
              Patient arrived with what appeared to be a Class III bite — the lower teeth sitting forward of the upper. The question was whether this was truly skeletal or a Pseudo Class III — a positional issue in how the teeth met, not in the underlying jaw. Cephalometric imaging confirmed the diagnosis: correctable without jaw surgery.
            </p>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
              Before any permanent work, an orthotic device was fabricated to test the new bite position and verify TMJ function under load. Once the bite was validated, treatment moved forward: temporary restorations, crown lengthening, and five implants placed. Final all-ceramic restorations were inserted onto the tested and confirmed bite.
            </p>
            <div className="mt-7 pt-6 border-t border-[#E7E2D8] text-[0.8125rem] text-[#5C5C5C] flex flex-wrap items-center gap-x-5 gap-y-1">
              <span>Treatment time: 12–15 months</span>
              <span>·</span>
              <span>Used with patient consent</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CASES BY SERVICE TYPE */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="mb-14 max-w-[820px] mx-auto text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">MORE CASES</span>
            <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-medium text-[#0A0A0A]">
              Organized by what was done.
            </h2>
            <p className="mt-5 text-[1rem] text-[#5C5C5C] leading-[1.65]">
              Click through any case to read the full story. Photography is straight off the camera — no edits.
            </p>
          </div>

          {/* CATEGORY 1: DENTAL IMPLANTS */}
          <div className="mb-14">
            <div className="mb-7 flex items-end justify-between gap-4 pb-4 border-b border-[#E7E2D8]">
              <h3 className="text-[1.375rem] md:text-[1.5rem] font-medium text-[#0A0A0A]">Dental Implants</h3>
              <Link to="/services#dental-implants" className="text-[0.875rem] text-[#5C5C5C] hover:text-[#C9A961] transition-colors whitespace-nowrap">Learn about implants →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Case 1 */}
              <div className="rounded-xl border border-[#E7E2D8] bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <BeforeAfterSlider
                  beforeSrc={case01ImplantsBefore}
                  afterSrc={case01ImplantsAfter}
                  beforeAlt="Before: 7 implants with periodontal coordination"
                  afterAlt="After: 7 implants with periodontal coordination"
                />
                <div className="p-5">
                  <span className="mb-2 inline-block text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">IMPLANTS</span>
                  <h4 className="text-[1rem] md:text-[1.0625rem] leading-[1.4] font-medium text-[#0A0A0A]">Saving the teeth that could be saved, then placing 7 implants for the rest.</h4>
                  <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">Patient arrived with periodontal disease affecting most teeth — a situation where less specialty-trained dentists often recommend extracting everything and starting over with implants. We took a different approach. Working in coordination with periodontics, we performed bilateral sinus lifts to support upper implants, pocket reduction surgery to treat the underlying gum disease, placed seven implants where teeth couldn't be saved, and restored everything with full-mouth zirconia restorations. The teeth that could be saved were saved. The ones that needed replacement were replaced. Ongoing periodontal maintenance keeps the result stable and our patient happy.</p>
                  <div className="mt-3 pt-3 border-t border-[#E7E2D8] text-[0.75rem] text-[#5C5C5C] flex items-center gap-3">
                    <span>Treatment time: 14–16 months · Used with patient consent</span>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="rounded-xl border border-[#E7E2D8] bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <BeforeAfterSlider
                  beforeSrc={case02ImplantsBefore}
                  afterSrc={case02ImplantsAfter}
                  beforeAlt="Before: 5 implants after TMJ and jaw analysis"
                  afterAlt="After: 5 implants after TMJ and jaw analysis"
                />
                <div className="p-5">
                  <span className="mb-2 inline-block text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">IMPLANTS</span>
                  <h4 className="text-[1rem] md:text-[1.0625rem] leading-[1.4] font-medium text-[#0A0A0A]">Testing the bite before committing: 5 implants after full TMJ and jaw analysis.</h4>
                  <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">Predictable outcomes in complex cases start with planning that often takes longer than the surgery itself. This patient had cephalometric imaging to evaluate whether their bite represented a true skeletal Class III relationship or a positional one — what's called a pseudo Class III. An orthotic device was fabricated to test TMJ function before committing to permanent restorations. Only after temporary restorations confirmed the planned bite worked was crown lengthening performed and five implants placed. The diagnostic work mattered more than the surgical work.</p>
                  <div className="mt-3 pt-3 border-t border-[#E7E2D8] text-[0.75rem] text-[#5C5C5C] flex items-center gap-3">
                    <span>Treatment time: 15–20 months · Used with patient consent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY 2: PORCELAIN VENEERS */}
          <div className="mb-14">
            <div className="mb-7 flex items-end justify-between gap-4 pb-4 border-b border-[#E7E2D8]">
              <h3 className="text-[1.375rem] md:text-[1.5rem] font-medium text-[#0A0A0A]">Porcelain Veneers</h3>
              <Link to="/services#veneers" className="text-[0.875rem] text-[#5C5C5C] hover:text-[#C9A961] transition-colors whitespace-nowrap">Learn about veneers →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Case 1 */}
              <div className="rounded-xl border border-[#E7E2D8] bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <BeforeAfterSlider
                  beforeSrc={case01VeneersBefore}
                  afterSrc={case01VeneersAfter}
                  beforeAlt="Before: ceramic veneer reconstruction"
                  afterAlt="After: ceramic veneer reconstruction"
                />
                <div className="p-5">
                  <span className="mb-2 inline-block text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">VENEERS</span>
                  <h4 className="text-[1rem] md:text-[1.0625rem] leading-[1.4] font-medium text-[#0A0A0A]">Veneers as full functional reconstruction.</h4>
                  <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">A cosmetic redesign of the patient's smile — and a functional rebuild using all-ceramic veneers as the restorative material. The vertical dimension of the bite had collapsed and needed to be reestablished. The occlusion had discrepancies that needed correction. The patient wanted a redesigned smile. All three goals achieved in a single coordinated treatment using ceramic veneers throughout. Function, bite alignment, and aesthetics addressed together.</p>
                  <div className="mt-3 pt-3 border-t border-[#E7E2D8] text-[0.75rem] text-[#5C5C5C] flex items-center gap-3">
                    <span>Treatment time: 3 months · Used with patient consent</span>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="rounded-xl border border-[#E7E2D8] bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <BeforeAfterSlider
                  beforeSrc={case02VeneersBefore}
                  afterSrc={case02VeneersAfter}
                  beforeAlt="Before: 10 ceramic veneers reversing severe wear"
                  afterAlt="After: 10 ceramic veneers reversing severe wear"
                />
                <div className="p-5">
                  <span className="mb-2 inline-block text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">VENEERS</span>
                  <h4 className="text-[1rem] md:text-[1.0625rem] leading-[1.4] font-medium text-[#0A0A0A]">Ten ceramic veneers reversing severe tooth wear.</h4>
                  <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">Years of severe wear had shortened the patient's teeth and lowered the vertical dimension of the bite — a combination that affects both function and how the face holds together at rest. Ten ceramic veneers were designed to restore the lost bite height, return the teeth to appropriate proportions, and rebuild the smile that had been gradually disappearing into worn enamel. Function and appearance restored simultaneously.</p>
                  <div className="mt-3 pt-3 border-t border-[#E7E2D8] text-[0.75rem] text-[#5C5C5C] flex items-center gap-3">
                    <span>Treatment time: 2 months · Used with patient consent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY 3: FULL MOUTH RECONSTRUCTION */}
          <div className="mb-14">
            <div className="mb-7 flex items-end justify-between gap-4 pb-4 border-b border-[#E7E2D8]">
              <h3 className="text-[1.375rem] md:text-[1.5rem] font-medium text-[#0A0A0A]">Full Mouth Reconstruction</h3>
              <Link to="/services#full-mouth-reconstruction" className="text-[0.875rem] text-[#5C5C5C] hover:text-[#C9A961] transition-colors whitespace-nowrap">Learn about full mouth reconstruction →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Case 1 */}
              <div className="rounded-xl border border-[#E7E2D8] bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <BeforeAfterSlider
                  beforeSrc={case01FmrBefore}
                  afterSrc={case01FmrAfter}
                  beforeAlt="Before: full mouth reconstruction with 10 implants"
                  afterAlt="After: full mouth reconstruction with 10 implants"
                />
                <div className="p-5">
                  <span className="mb-2 inline-block text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">FULL MOUTH RECONSTRUCTION</span>
                  <h4 className="text-[1rem] md:text-[1.0625rem] leading-[1.4] font-medium text-[#0A0A0A]">Full mouth reconstruction: 10 implants and a rebuilt bite.</h4>
                  <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">Comprehensive rehabilitation involving bone grafting to support implants, soft-tissue surgery to create proper foundation, and rebuilding the vertical bite dimension that had been lost over years of compromised function. Ten implants were placed across both arches, the upper jaw restored with porcelain-fused-to-metal crowns, and the entire lower arch reconstructed with a full arch zirconia bridge. Function, comfort, and appearance restored across both arches.</p>
                  <div className="mt-3 pt-3 border-t border-[#E7E2D8] text-[0.75rem] text-[#5C5C5C] flex items-center gap-3">
                    <span>Treatment time: 14–18 months · Used with patient consent</span>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="rounded-xl border border-[#E7E2D8] bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <BeforeAfterSlider
                  beforeSrc={case02FmrBefore}
                  afterSrc={case02FmrAfter}
                  beforeAlt="Before: full mouth restoration with diastema closure"
                  afterAlt="After: full mouth restoration with diastema closure"
                />
                <div className="p-5">
                  <span className="mb-2 inline-block text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">FULL MOUTH RECONSTRUCTION</span>
                  <h4 className="text-[1rem] md:text-[1.0625rem] leading-[1.4] font-medium text-[#0A0A0A]">Restoring her bite and closing the front-teeth gap she'd lived with for years.</h4>
                  <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">Patient required comprehensive restoration after years of compromise. Five implants were placed with socket preservation grafting at extraction sites. The bite was rebuilt with a 4-millimeter vertical increase, and the new occlusion was completed with all-zirconia crowns and six lower-front veneers. The technical work was extensive. The harder challenge was closing the gap between her front teeth and managing the proportions to attain the look she'd asked for. One of the most rewarding cases we've completed.</p>
                  <div className="mt-3 pt-3 border-t border-[#E7E2D8] text-[0.75rem] text-[#5C5C5C] flex items-center gap-3">
                    <span>Treatment time: 12–15 months · Used with patient consent</span>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="rounded-xl border border-[#E7E2D8] bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <BeforeAfterSlider
                  beforeSrc={case03FmrBefore}
                  afterSrc={case03FmrAfter}
                  beforeAlt="Before full mouth ceramic rehabilitation — worn dentition with collapsed vertical dimension"
                  afterAlt="After full mouth ceramic rehabilitation — all-ceramic crowns restoring aesthetics and function"
                />
                <div className="p-5">
                  <span className="mb-2 inline-block text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">FULL MOUTH RECONSTRUCTION</span>
                  <h4 className="text-[1rem] md:text-[1.0625rem] leading-[1.4] font-medium text-[#0A0A0A]">All-ceramic rehabilitation — smile designed first, then executed.</h4>
                  <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">Worn dentition with a collapsed vertical dimension and a drifted occlusal plane. The final smile was designed first, then the occlusion and jaw position were rebuilt to support it. All-ceramic crowns placed across the arch, executed in the validated aesthetic position.</p>
                  <div className="mt-3 pt-3 border-t border-[#E7E2D8] text-[0.75rem] text-[#5C5C5C] flex items-center gap-3">
                    <span>Used with patient consent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>

      {/* SECTION 5: THE SMILE PREVIEW */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">BEFORE YOU COMMIT TO ANYTHING</span>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-medium text-[#0A0A0A]">
            See your own before & after first.
          </h2>
          <p className="mt-7 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            Every case above is someone else's outcome. Useful for understanding what's possible, but not the same as seeing your own face.
          </p>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            The Specialist Second Opinion Session includes a preview of what your own smile could look like — built from a 3D scan of your mouth and modeled in the same software we use to design the final restoration. You see your own face, with the proposed work, before any commitment to start.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/second-opinion" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC]">
              Book My Session — $147
            </Link>
            <Link to="/second-opinion" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group px-6 py-3">
              Read more about the session
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: PATIENT OUTCOMES */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 text-[#F7F3EC]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">WHAT PATIENTS SAY ABOUT THE RESULT</span>
            <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-medium text-white">
              The work, in their words.
            </h2>
          </div>
          
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-7 flex flex-col">
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <blockquote className="mt-5 italic text-[1rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "He perfectly matched the color and texture to my other teeth. He is a perfectionist with great bedside manners. Made me feel comfortable throughout the process."
              </blockquote>
              <div className="mt-6 flex gap-1">
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <div className="mt-3 text-[0.875rem] text-[#DBC089]">— Kami A., Brooklyn</div>
            </div>
            
            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-7 flex flex-col">
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <blockquote className="mt-5 italic text-[1rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "Dr. Furman is unlike any other dentist I've visited. I went to two other doctors and they both told me my tooth must be removed. Dr. Furman did a root canal instead and saved my tooth."
              </blockquote>
              <div className="mt-6 flex gap-1">
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <div className="mt-3 text-[0.875rem] text-[#DBC089]">— Verified patient review</div>
            </div>

            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-7 flex flex-col">
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <blockquote className="mt-5 italic text-[1rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "After decades of paying for expensive dental procedures and being dissatisfied, I was blessed to have found Dr. Furman."
              </blockquote>
              <div className="mt-6 flex gap-1">
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <div className="mt-3 text-[0.875rem] text-[#DBC089]">— Verified Zocdoc review</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/reviews" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
              Read more patient reviews
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">YOUR CASE</span>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-medium text-white">
            The next before/after on this page could be yours.
          </h2>
          <p className="mt-5 max-w-[55ch] mx-auto text-[#F7F3EC]/85 text-[1.125rem] leading-[1.65]">
            Start with the Specialist Second Opinion Session. Bring whatever quotes or X-rays you have. Leave with a written plan and a preview of your own smile.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
              Book My Session
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] min-h-[48px] min-w-[48px]">
              <span>Call 347-378-7827</span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
