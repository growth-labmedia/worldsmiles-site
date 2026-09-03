import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Star, Check, Quote, Calendar, ChevronDown } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function HomePage() {
  usePageMeta('HomePage');

  return (
    <>
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#F7F3EC] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">

          {/* HEADLINE BLOCK — centered on desktop and mobile */}
          <div className="text-center max-w-[820px] mx-auto">
            <span className="text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
              PROSTHODONTIST · SHEEPSHEAD BAY · BROOKLYN
            </span>
            <h1 className="text-[2rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">
              Specialist dentistry <span className="font-[Georgia,serif]">f</span>or smiles worth doing once.
            </h1>
          </div>

          {/* VIDEO — large centerpiece, autoplays on all devices */}
          <div className="mt-8 md:mt-12">
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

          {/* BODY COPY — centered under the video, constrained width */}
          <div className="mt-8 md:mt-10 max-w-[68ch] mx-auto text-center">
            <p className="text-[1rem] md:text-[1.125rem] leading-[1.65] text-[#1B1B1B]">
              "After decades of paying for expensive dental procedures and being dissatisfied, I was blessed to have found World Smiles" — a real patient review. World Smiles is the specialty practice patients find after the disappointments. NYU-trained prosthodontic care that treats your whole mouth as one coordinated plan, so you stop redoing work that should have been right the first time.
            </p>
          </div>

          {/* CTA ROW — centered, side by side on desktop, stacked on mobile */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-7 py-3.5 rounded-lg text-[1rem] font-semibold transition-colors">
              Book a Consultation
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[1rem] font-semibold min-h-[48px] min-w-[48px]">
              <svg className="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.05 4.55c.19-.83.94-1.5 1.8-1.5h3a2 2 0 012 1.72c.13.96.36 1.9.67 2.8a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 012.11-.45c.9.31 1.84.54 2.8.67a2 2 0 011.72 2v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.63"/></svg>
              <span className="pointer-events-none">Or call 347-378-7827</span>
            </a>
          </div>

          {/* TRUST STRIP — centered, wrapped bullets */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.875rem] text-[#5C5C5C]">
            <span className="inline-flex items-center gap-2">
              <span className="text-[#C9A961]">★★★★★</span>
              Google-reviewed
            </span>
            <span className="text-[#C9A961]">·</span>
            <span>NYU Certificate in Prosthodontics</span>
            <span className="text-[#C9A961]">·</span>
            <span>45–60 minute consultations</span>
            <span className="text-[#C9A961]">·</span>
            <span>Russian spoken</span>
          </div>

        </div>
      </section>

      {/* SECTION 2: PROBLEM / PROMISE */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-4 md:px-6">
          <h2 className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">IF YOU'VE BEEN HERE BEFORE</h2>
          <h3 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 text-[#0A0A0A]">Three dentists. Three di<span className="font-[Georgia,serif]">ff</span>erent plans. You're not crazy — you're just looking in the wrong place.</h3>
          
          <p className="mt-7 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            Most patients at World Smiles aren't first-time shoppers. They've been to two or three offices, with quotes that don't agree, crowns that failed, bridges that chipped. They show up tired, suspicious, quietly hoping this time will be different.
          </p>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            A prosthodontist is the specialist trained in restoration and replacement of teeth — three years beyond dental school. That's the difference between fixing one tooth at a time and treating your mouth as one connected system. Patients keep telling us: I should have come here first.
          </p>
          
          <div className="w-12 h-px bg-[#C9A961] mx-auto mt-10" />
          
          <div className="mt-7 text-center">
            <Link to="/about" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">
              Read more about the practice
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">WHAT WE DO</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 text-[#0A0A0A]">Specialist-led care, end-to-end.</h2>
          <p className="text-center max-w-[60ch] mx-auto mt-4 text-[1.0625rem] text-[#5C5C5C] leading-[1.65]">
            We focus on the dental work that requires the most planning and skill — and coordinate every step, so you're never bouncing between offices.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-white p-7 rounded-xl border border-[#E7E2D8] hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col group">
              <Sparkles className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-5 text-[#0A0A0A]">Full Mouth Reconstruction</h4>
              <p className="mt-2 text-[0.875rem] leading-[1.55] text-[#5C5C5C] flex-grow">When years of compromise have caught up with you — a coordinated plan that rebuilds function and appearance together, sequenced by a specialist.</p>
              <Link to="/services#full-mouth-reconstruction" className="mt-5 inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded w-fit self-start group-hover:text-[#A8893F]">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-7 rounded-xl border border-[#E7E2D8] hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col group">
              <ShieldCheck className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-5 text-[#0A0A0A]">Dental Implants</h4>
              <p className="mt-2 text-[0.875rem] leading-[1.55] text-[#5C5C5C] flex-grow">Single tooth, multiple teeth, or full-arch All-on-x — the restoration designed before the implant is placed.</p>
              <Link to="/services#dental-implants" className="mt-5 inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded w-fit self-start group-hover:text-[#A8893F]">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-7 rounded-xl border border-[#E7E2D8] hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col group">
              <Star className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-5 text-[#0A0A0A]">Porcelain Veneers</h4>
              <p className="mt-2 text-[0.875rem] leading-[1.55] text-[#5C5C5C] flex-grow">Veneers that look like your own teeth, just younger. Color, contour, and light — handled with the perfectionist craft our reviewers describe.</p>
              <Link to="/services#veneers" className="mt-5 inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded w-fit self-start group-hover:text-[#A8893F]">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-7 rounded-xl border border-[#E7E2D8] hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col group">
              <Check className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-5 text-[#0A0A0A]">Crowns & Bridges</h4>
              <p className="mt-2 text-[0.875rem] leading-[1.55] text-[#5C5C5C] flex-grow">Restorations that disappear in a smile photo. Built to match the teeth on either side, not a generic shade chart.</p>
              <Link to="/services#crowns-bridges" className="mt-5 inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded w-fit self-start group-hover:text-[#A8893F]">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-7 rounded-xl border border-[#E7E2D8] hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col group">
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-5 text-[#0A0A0A]">Second Opinion Consultations</h4>
              <p className="mt-2 text-[0.875rem] leading-[1.55] text-[#5C5C5C] flex-grow">Bring your treatment plans and X-rays. We'll walk through them with you and tell you what we'd do differently — and why.</p>
              <Link to="/second-opinion" className="mt-5 inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded w-fit self-start group-hover:text-[#A8893F]">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-7 rounded-xl border border-[#E7E2D8] hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col group">
              <Calendar className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-5 text-[#0A0A0A]">Sedation Dentistry</h4>
              <p className="mt-2 text-[0.875rem] leading-[1.55] text-[#5C5C5C] flex-grow">For patients who've avoided the dentist for years, or who'd rather sleep through longer procedures. Multiple options, explained without pressure.</p>
              <Link to="/services#sedation" className="mt-5 inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded w-fit self-start group-hover:text-[#A8893F]">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2">
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY US / DIFFERENTIATORS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">WHAT MAKES THIS DIFFERENT</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 max-w-[24ch] mx-auto text-[#0A0A0A]">Four reasons patients tell us this time <span className="font-[Georgia,serif]">f</span>elt different.</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            <div className="flex flex-col gap-3">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">01</span>
              <h3 className="text-[1.5rem] md:text-[1.75rem] leading-[1.25] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">Specialist credential, not a side service.</h3>
              <p className="text-[1rem] leading-[1.65] text-[#5C5C5C]">
                The only dental specialty trained specifically in restoration and replacement of teeth — three years of accredited training beyond dental school. Most local practices place implants and crowns as one service among twenty. Here, it's the focus.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">02</span>
              <h3 className="text-[1.5rem] md:text-[1.75rem] leading-[1.25] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">We see what other dentists miss.</h3>
              <p className="text-[1rem] leading-[1.65] text-[#5C5C5C]">
                A real patient review reads: "I went to two other doctors and they both told me my tooth must be removed. The doctor here did a root canal instead and saved my tooth." That's what specialist training is for.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">03</span>
              <h3 className="text-[1.5rem] md:text-[1.75rem] leading-[1.25] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">The consultation is for thinking, not selling.</h3>
              <p className="text-[1rem] leading-[1.65] text-[#5C5C5C]">
                Forty-five to sixty minutes. We sit upright, look at your X-rays together, and give you a written treatment plan you keep. Many patients leave to think about it. Many come back weeks later. That's by design.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">04</span>
              <h3 className="text-[1.5rem] md:text-[1.75rem] leading-[1.25] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">Anxiety taken seriously, not minimized.</h3>
              <p className="text-[1rem] leading-[1.65] text-[#5C5C5C]">
                Patients consistently write that we made them feel comfortable when they expected the opposite. Sedation options available. Permission to cancel and reschedule without explanation. Your fear is information, not a problem to talk you out of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SOCIAL PROOF — EDITORIAL FEATURED QUOTE */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 text-[#F7F3EC]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">PATIENT REVIEWS</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 text-white">In their own words.</h2>

          {/* FEATURED ANCHOR QUOTE */}
          <figure className="mt-14 md:mt-16 max-w-[880px] mx-auto text-center">
            <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#C9A961] mx-auto" strokeWidth={1.5} />
            <blockquote className="mt-6 font-[Fraunces,Georgia,serif] italic font-medium text-[1.5rem] md:text-[2.125rem] leading-[1.35] text-white">
              "The most beautiful and technologically advanced dental office I've ever stepped foot in."
            </blockquote>
            <div className="mt-8 flex justify-center gap-1" aria-label="Five out of five stars">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />)}
            </div>
            <figcaption className="mt-4 text-[0.8125rem] text-[#DBC089] uppercase tracking-[0.14em] font-semibold">— Edward N., Brooklyn</figcaption>
          </figure>

          {/* DIVIDER */}
          <div className="mt-16 mb-12 w-12 h-px bg-[#2A2A2A] mx-auto" />

          {/* THREE SUPPORTING REVIEWS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6 flex flex-col">
              <div className="flex gap-1" aria-label="Five out of five stars">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />)}
              </div>
              <p className="mt-4 text-[0.9375rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "He was so patient and walked me through the whole process, since I was feeling very anxious. I'd highly recommend the facility and the staff."
              </p>
              <p className="mt-5 text-[0.8125rem] text-[#DBC089]">— Marina S., Brooklyn</p>
            </div>

            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6 flex flex-col">
              <div className="flex gap-1" aria-label="Five out of five stars">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />)}
              </div>
              <p className="mt-4 text-[0.9375rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "He perfectly matched the color and texture to my other teeth. He is a perfectionist with great bedside manners."
              </p>
              <p className="mt-5 text-[0.8125rem] text-[#DBC089]">— Kami A., Brooklyn</p>
            </div>

            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6 flex flex-col">
              <div className="flex gap-1" aria-label="Five out of five stars">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />)}
              </div>
              <p className="mt-4 text-[0.9375rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "As a phobic dental patient, I can say that I'm actually looking forward to my next appointment."
              </p>
              <p className="mt-5 text-[0.8125rem] text-[#DBC089]">— Marina D., Brooklyn</p>
            </div>
          </div>

          {/* AGGREGATE + CTA */}
          <div className="mt-12 flex flex-col items-center gap-5">
            <p className="text-[0.9375rem] text-[#F7F3EC]/75">★★★★★ on Google · Zocdoc · Healthgrades</p>
            <Link to="/reviews" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
              Read more patient reviews
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT TO EXPECT */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">YOUR FIRST VISIT</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 text-[#0A0A0A]">What actually happens when you walk in.</h2>
          <p className="text-center mt-4 max-w-[58ch] mx-auto text-[1.0625rem] text-[#5C5C5C] leading-[1.65]">
            If you've cancelled appointments before, sat in the parking lot, or felt rushed at other offices — read this. The first visit here is meant for thinking, not for treatment.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <div>
              <span className="font-[Fraunces,Georgia,serif] text-[3rem] leading-none font-medium text-[#C9A961] block">01</span>
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-3 text-[#0A0A0A]">You walk in.</h4>
              <p className="text-[0.875rem] leading-[1.55] mt-2 text-[#5C5C5C]">
                No one rushes you. You sit upright. You bring whatever paperwork you have from prior dentists — even if it doesn't make sense to you.
              </p>
            </div>

            <div>
              <span className="font-[Fraunces,Georgia,serif] text-[3rem] leading-none font-medium text-[#C9A961] block">02</span>
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-3 text-[#0A0A0A]">We look together.</h4>
              <p className="text-[0.875rem] leading-[1.55] mt-2 text-[#5C5C5C]">
                Full 3D scan, X-rays as needed. The specialist walks through them with you on the screen — pointing at what other dentists saw, and at what they may have missed.
              </p>
            </div>

            <div>
              <span className="font-[Fraunces,Georgia,serif] text-[3rem] leading-none font-medium text-[#C9A961] block">03</span>
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-3 text-[#0A0A0A]">You hear the plan.</h4>
              <p className="text-[0.875rem] leading-[1.55] mt-2 text-[#5C5C5C]">
                One coherent treatment plan, written down, with full pricing. You take it home. We answer questions. Nothing else happens unless you want it to.
              </p>
            </div>

            <div>
              <span className="font-[Fraunces,Georgia,serif] text-[3rem] leading-none font-medium text-[#C9A961] block">04</span>
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-3 text-[#0A0A0A]">You decide on your time.</h4>
              <p className="text-[0.875rem] leading-[1.55] mt-2 text-[#5C5C5C]">
                Days, weeks, or months later — it's your decision. Many patients come back after a second consultation elsewhere. That's welcome and expected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE SECOND OPINION SESSION */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
            <div>
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">FOR PATIENTS WITH PRIOR PLANS IN HAND</span>
              <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">The Specialist Second Opinion Session.</h2>
              <p className="text-[1.125rem] leading-[1.65] mt-6 text-[#1B1B1B]">
                If you've been quoted by one or more offices and the plans don't agree — or if you want a specialist's read before committing — this is the appointment. Sixty minutes with the specialist, a 3D scan, a 40-point bite check, and a written plan you keep. Bring whatever paperwork you have.
              </p>
              <p className="mt-5 text-[0.9375rem] leading-[1.65] text-[#5C5C5C]">
                Priced at $147 so cost isn't a reason to delay. If you start treatment within 90 days, the $147 comes off the cost of care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <Link to="/second-opinion" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC]">
                  Learn more about the session
                </Link>
                <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC] rounded min-h-[48px] min-w-[48px]">
                  <span className="pointer-events-none">Or call 347-378-7827</span> <ArrowRight className="w-4 h-4 ml-1 pointer-events-none" strokeWidth={1.75} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 md:p-8 shadow-sm">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">WHAT'S INCLUDED</span>
              <h4 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-2 text-[#0A0A0A]">Sixty minutes, written plan.</h4>
              
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                  <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">45–60 minute consultation with the specialist</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                  <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">Full 3D scan of your mouth</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                  <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">40-point bite check</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                  <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">Review of any quotes or X-rays you bring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                  <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">Written treatment plan with locked-in pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                  <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">Preview of what your smile could actually look like</span>
                </li>
              </ul>

              <p className="mt-6 pt-5 border-t border-[#E7E2D8] text-[0.8125rem] text-[#5C5C5C]">
                Credited toward treatment if you start within 90 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: NEIGHBORHOODS WE SERVE */}
      <section className="bg-white py-14 md:py-18 text-center border-t border-[#E7E2D8]/50">
        <div className="max-w-[1080px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">SHEEPSHEAD BAY AT 3121 OCEAN AVENUE</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-3 max-w-[28ch] mx-auto text-[#0A0A0A]">Patients drive in <span className="font-[Georgia,serif]">f</span>rom across South Brooklyn.</h2>
          <p className="mt-4 max-w-[58ch] mx-auto text-[1.0625rem] text-[#5C5C5C] leading-[1.65]">
            Our practice is on the Ocean Avenue corridor in Sheepshead Bay — on-street parking, the Q train two blocks away, and patients regularly traveling from:
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Sheepshead Bay</span>
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Brighton Beach</span>
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Manhattan Beach</span>
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Mill Basin</span>
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Marine Park</span>
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Midwood</span>
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Gravesend</span>
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Bensonhurst</span>
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Bay Ridge</span>
            <span className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B]">Lower Manhattan</span>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ TEASER */}
      <section className="bg-[#FAF7F1] py-16 md:py-20 border-t border-[#E7E2D8]/50">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center block">FREQUENTLY ASKED</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-center mt-3 text-[#0A0A0A]">Common questions, plainly answered.</h2>
          
          <div className="mt-10 space-y-3">
            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">What's the difference between a prosthodontist and a regular dentist?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                A general dentist is a generalist who handles broad-scope dentistry. A prosthodontist is a specialist who completed three additional years of accredited training specifically in the restoration and replacement of teeth — implants, crowns, bridges, full-mouth reconstruction, and complex cosmetic cases. It's the difference between a primary care doctor and a cardiologist for heart-specific work.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">I've already been to two or three dentists with different plans. What now?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Bring everything you have. The point of a specialist consultation is to make sense of what you've already heard — not replace it. We'll walk through the plans together, point out what each one is seeing and what each one is missing, and give you one coherent read in writing.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">I'm anxious about dental visits. How does the first appointment work?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                You stay dressed. You sit upright. We look at images and talk. Nothing else happens unless you decide it should. If you've cancelled appointments before, that's not unusual here — many of our patients have. Sedation options are available for treatment visits if and when you want them.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Do you take my insurance?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                We work with most major dental insurance plans and submit on your behalf. Most prosthodontic work is partially covered; we'll show you exactly what your plan pays and what you'd owe, in writing, before you commit to anything. We also offer in-house and third-party financing for treatment spread over time.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">How long does treatment usually take?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                It depends entirely on what's in your mouth. Single-tooth work can be a few weeks. Full-mouth reconstruction is staged across several months so you have function and appearance you can live with at every step. We give you the timeline specific to your case at the first consultation.
              </div>
            </details>
          </div>

          <div className="mt-10 text-center">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F1] rounded">
              Read the full FAQ <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">WHEN YOU'RE READY</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-3 text-white">One consultation is all it takes to know if this practice is different.</h2>
          <p className="mt-5 max-w-[55ch] mx-auto text-[#F7F3EC]/85 text-[1.125rem] leading-[1.65]">
            Walk in with whatever you have. Walk out with a written plan and the time to think about it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
              Book a Consultation
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] min-h-[48px] min-w-[48px]">
              <span className="pointer-events-none">Call 347-378-7827</span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
