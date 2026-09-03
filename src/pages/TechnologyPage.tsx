import { Link } from 'react-router-dom';
import { Sparkles, Printer, ScanLine, Radio, Camera, Headphones, MonitorPlay, Wifi, Check } from 'lucide-react';
import { usePageMeta } from '../lib/seo';
import dentalRoom from '../assets/office/dental-room.jpg';
import dentalRoom2 from '../assets/office/dental-room-2.jpg';
import scan3d from '../assets/office/3d-scan.jpg';
import xray3d from '../assets/office/3d-xray.jpg';

export default function TechnologyPage() {
  usePageMeta('TechnologyPage');

  return (
    <>
      
      {/* SECTION 1: HERO SECTION — VERBATIM JSX */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">OFFICE TECHNOLOGY</span>
          <h1 className="text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">
            The equipment that makes specialist outcomes possible.
          </h1>
          <p className="mt-6 text-[1.125rem] leading-[1.65] text-[#5C5C5C] max-w-[62ch] mx-auto">
            Modern prosthodontic work isn't really possible without modern technology. Imaging that shows what older X-rays miss, design tools that preview your smile before we touch a tooth, fabrication equipment that produces restorations exactly as planned. Here's what's in the office and what each piece does for your treatment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors">
              Book a Consultation
            </Link>
            <Link to="/second-opinion" className="inline-flex items-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold">
              About the Second Opinion Session
            </Link>
          </div>

          {/* HERO IMAGE */}
          <div className="mt-14 w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img 
              src={dentalRoom} 
              alt="Advanced prosthodontic exam room" 
              className="w-full h-[300px] md:h-[500px] object-cover object-center" 
              loading="eager" 
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY TECH MATTERS AT A SPECIALTY PRACTICE */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            WHY THIS MATTERS
          </span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-center text-[#0A0A0A]">
            Equipment is only impressive if it changes what you can see and what you can build.
          </h2>
          <div className="mt-8 text-[1.0625rem] leading-[1.7] text-[#1B1B1B] space-y-6">
            <p>
              Equipment matters because of what it lets us see, plan, and deliver — the difference between guessing and knowing, and between a restoration that fits by luck and one that fits by design. What we have falls into three categories: imaging, digital design and fabrication, and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: DIGITAL WORKFLOW (FEATURED — SCANNER + 3D PRINTER) */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            DIGITAL WORKFLOW
          </span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-center text-white">
            Digital scanning and 3D printing, end to end.
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.65] text-[#F7F3EC]/85 max-w-[60ch] mx-auto text-center">
            Two pieces of equipment have changed prosthodontic practice more than any other in the last decade. World Smiles uses both.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* CARD 1 */}
            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-7 flex flex-col items-start">
              <div className="p-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg">
                <ScanLine className="w-8 h-8 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <h4 className="text-[1.375rem] font-[Fraunces,Georgia,serif] font-medium text-white mt-5">
                3Shape TRIOS Scanner
              </h4>
              <p className="text-[0.9375rem] leading-[1.6] text-[#F7F3EC]/85 mt-3">
                Captures every surface of every tooth in about three minutes, in full color, at submillimeter accuracy. Scans review on-screen, send directly to the lab or 3D printer, and store as a digital record for comparison years later. No impressions, no gag reflex, no discomfort.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-7 flex flex-col items-start">
              <div className="p-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg">
                <Printer className="w-8 h-8 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <h4 className="text-[1.375rem] font-[Fraunces,Georgia,serif] font-medium text-white mt-5">
                SprintRay 3D Printer
              </h4>
              <p className="text-[0.9375rem] leading-[1.6] text-[#F7F3EC]/85 mt-3">
                Produces models, surgical guides, temporary restorations, and treatment previews in-office — in hours instead of days. Complex cases get prototyped restorations to test fit, implant surgery gets custom guides for precision placement, and full-mouth cases get temporaries that preview your finished smile before you commit.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-2xl">
            <img 
              src={scan3d} 
              alt="3Shape Digital Scanner and 3D Printed Models" 
              className="w-full h-[280px] md:h-[480px] object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: IMAGING & DIAGNOSTIC TECHNOLOGY */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            IMAGING & DIAGNOSTICS
          </span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-center text-[#0A0A0A]">
            Seeing what older equipment can't show.
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.65] text-[#5C5C5C] max-w-[60ch] mx-auto text-center">
            Diagnostic precision is the difference between a guess and a plan. Three tools that make the difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {/* CARD 1 */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 flex flex-col items-start">
              <div className="p-2.5 bg-[#FAF7F1] border border-[#E7E2D8] rounded-lg">
                <Radio className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <h4 className="text-[1.125rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] mt-4">
                Planmeca CBCT Imaging
              </h4>
              <p className="text-[0.875rem] leading-[1.55] text-[#5C5C5C] mt-2">
                Three-dimensional X-ray imaging with lower radiation than older cone-beam units, showing bone density, root structure, sinus position, and nerve pathways at a level standard X-rays can't reach. Essential for implant planning, complex extractions, and any case where what's under the gumline determines the plan.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 flex flex-col items-start">
              <div className="p-2.5 bg-[#FAF7F1] border border-[#E7E2D8] rounded-lg">
                <Sparkles className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <h4 className="text-[1.125rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] mt-4">
                Digital X-Ray
              </h4>
              <p className="text-[0.875rem] leading-[1.55] text-[#5C5C5C] mt-2">
                Instant images at significantly lower radiation than film X-rays. Visible on-screen the moment they're taken, so you see what we see and follow the conversation in real time.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 flex flex-col items-start">
              <div className="p-2.5 bg-[#FAF7F1] border border-[#E7E2D8] rounded-lg">
                <Camera className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <h4 className="text-[1.125rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] mt-4">
                Digital Intraoral Cameras
              </h4>
              <p className="text-[0.875rem] leading-[1.55] text-[#5C5C5C] mt-2">
                Wand-style cameras that display high-resolution video of individual teeth on-screen. So you can see existing fillings, cracks, and wear patterns as we describe them — not just hear about them.
              </p>
            </div>


          </div>

          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img 
              src={xray3d} 
              alt="Cone Beam CT and Digital X-Ray technology in use" 
              className="w-full h-[280px] md:h-[480px] object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: PATIENT COMFORT TECHNOLOGY */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            COMFORT TECHNOLOGY
          </span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A] text-center">
            Long appointments shouldn't feel longer than they need to.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {/* CARD 1 */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 flex flex-col items-start">
              <div className="p-2.5 bg-[#FAF7F1] rounded-lg">
                <Headphones className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <h4 className="text-[1.125rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] mt-4">
                Noise-cancelling headphones
              </h4>
              <p className="text-[0.875rem] leading-[1.55] text-[#5C5C5C] mt-2">
                Available for any appointment. Stream your own music, podcast, or audiobook — most patients prefer it to the dental sounds.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 flex flex-col items-start">
              <div className="p-2.5 bg-[#FAF7F1] rounded-lg">
                <MonitorPlay className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <h4 className="text-[1.125rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] mt-4">
                Ceiling-mounted TVs
              </h4>
              <p className="text-[0.875rem] leading-[1.55] text-[#5C5C5C] mt-2">
                Flat-screen TVs mounted in the ceiling above each chair, positioned for comfortable viewing while you're lying back. Watch a movie or show during longer procedures. The screens also display X-rays and treatment plans during consultations, so you see what we see.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 flex flex-col items-start">
              <div className="p-2.5 bg-[#FAF7F1] rounded-lg">
                <Sparkles className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <h4 className="text-[1.125rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] mt-4">
                Prophy-Jet polishing
              </h4>
              <p className="text-[0.875rem] leading-[1.55] text-[#5C5C5C] mt-2">
                An air-and-water polishing system that's gentler than rubber-cup polishing and more effective at removing stubborn surface stains. Most noticeable for patients with sensitivity.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 flex flex-col items-start">
              <div className="p-2.5 bg-[#FAF7F1] rounded-lg">
                <Wifi className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <h4 className="text-[1.125rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] mt-4">
                Office Wi-Fi
              </h4>
              <p className="text-[0.875rem] leading-[1.55] text-[#5C5C5C] mt-2">
                Free patient Wi-Fi throughout the office. Useful for longer consultation visits, work check-ins, or letting kids stream something while you wait.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img 
              src={dentalRoom2} 
              alt="Patient comfort features in a World Smiles exam room" 
              className="w-full h-[280px] md:h-[480px] object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT THIS MEANS FOR YOUR TREATMENT */}
      <section className="bg-white py-14 md:py-18">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            THE BOTTOM LINE
          </span>
          <h2 className="text-[1.5rem] md:text-[1.875rem] leading-[1.25] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A] text-center">
            What the equipment changes about your experience.
          </h2>

          <div className="mt-10 space-y-8">
            {/* POINT 1 */}
            <div className="flex gap-4 items-start">
              <div className="mt-1 shrink-0 bg-[#FAF7F1] border border-[#E7E2D8] p-1.5 rounded-full">
                <Check className="w-5 h-5 text-[#C9A961]" strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-[1.125rem] font-[Inter,sans-serif] font-semibold text-[#0A0A0A]">
                  Less radiation, more diagnostic information.
                </h4>
                <p className="text-[1rem] leading-[1.65] text-[#5C5C5C] mt-1.5">
                  Cone-beam CT and digital X-rays expose you to a fraction of the radiation older film-based equipment did, while showing significantly more detail. The case for getting necessary imaging done is stronger when the equipment is modern.
                </p>
              </div>
            </div>

            {/* POINT 2 */}
            <div className="flex gap-4 items-start">
              <div className="mt-1 shrink-0 bg-[#FAF7F1] border border-[#E7E2D8] p-1.5 rounded-full">
                <Check className="w-5 h-5 text-[#C9A961]" strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-[1.125rem] font-[Inter,sans-serif] font-semibold text-[#0A0A0A]">
                  Fewer appointments for complex work.
                </h4>
                <p className="text-[1rem] leading-[1.65] text-[#5C5C5C] mt-1.5">
                  Digital scanning, in-house 3D printing, and CAD-designed restorations compress workflows that used to take weeks. For full-mouth cases, this means fewer trips to the office and shorter total treatment time.
                </p>
              </div>
            </div>

            {/* POINT 3 */}
            <div className="flex gap-4 items-start">
              <div className="mt-1 shrink-0 bg-[#FAF7F1] border border-[#E7E2D8] p-1.5 rounded-full">
                <Check className="w-5 h-5 text-[#C9A961]" strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-[1.125rem] font-[Inter,sans-serif] font-semibold text-[#0A0A0A]">
                  You see your case the way we see it.
                </h4>
                <p className="text-[1rem] leading-[1.65] text-[#5C5C5C] mt-1.5">
                  Chairside monitors, intraoral cameras, and 3D scans put your mouth on a screen you can see. We point at what we're describing. You leave the consultation with the same picture in your head that we have in ours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center text-white">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
            WHEN YOU'RE READY
          </span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-white">
            See what modern imaging shows about your case.
          </h2>
          <p className="mt-5 text-[1.125rem] leading-[1.65] text-[#F7F3EC]/85 max-w-[60ch] mx-auto">
            Most patients haven't seen their full mouth in 3D before — labeled, rotatable, and clearer than they expected. The Specialist Second Opinion Session includes a full 3D scan and a 40-point bite check. $147, credited toward treatment if you start within 90 days.
          </p>
          
          <div className="mt-9 flex flex-wrap gap-4 items-center justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2"
            >
              Book a Consultation
            </Link>
            <Link 
              to="/second-opinion" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              About the Second Opinion Session
            </Link>
          </div>
          
          <p className="mt-6 text-[0.9375rem] text-[#FAF7F1]/70 flex items-center justify-center gap-1">
            Or call <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="hover:text-white inline-flex items-center justify-center min-h-[48px] px-1 font-medium">347-378-7827</a>.
          </p>
        </div>
      </section>

    </>
  );
}
