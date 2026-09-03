import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Star, Check, Quote, MapPin, GraduationCap, Languages } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function AboutPage() {
  usePageMeta('AboutPage');

  return (
    <>
       {/* Section 1: Hero */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">ABOUT WORLD SMILES</p>
          <h1 className="mt-4 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">World Smiles Prosthodontics.</h1>
          <p className="mt-6 text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[#5C5C5C]">
            NYU-trained prosthodontic specialty practice in Sheepshead Bay. The specialty office patients come to when their case needs more than a general approach.
          </p>
          
          <div className="mt-8 flex flex-col gap-3 items-start">
            <div className="flex items-center gap-3 text-[0.9375rem] text-[#1B1B1B]">
              <GraduationCap className="w-5 h-5 text-[#C9A961] shrink-0" strokeWidth={1.75} /> 
              <span>Prosthodontic specialty practice — NYU College of Dentistry-trained</span>
            </div>
            <div className="flex items-center gap-3 text-[0.9375rem] text-[#1B1B1B]">
              <GraduationCap className="w-5 h-5 text-[#C9A961] shrink-0" strokeWidth={1.75} /> 
              <span>DMD-credentialed — Rutgers University School of Dental Medicine</span>
            </div>
            <div className="flex items-center gap-3 text-[0.9375rem] text-[#1B1B1B]">
              <Languages className="w-5 h-5 text-[#C9A961] shrink-0" strokeWidth={1.75} /> 
              <span>English and Russian spoken in office</span>
            </div>
            <div className="flex items-center gap-3 text-[0.9375rem] text-[#1B1B1B]">
              <MapPin className="w-5 h-5 text-[#C9A961] shrink-0" strokeWidth={1.75} /> 
              <span>Serving Brooklyn since 2025</span>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC] min-h-[48px]">
              Book Consultation
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold ml-2 min-h-[48px] px-2">
              <Phone className="w-4 h-4" strokeWidth={2} />
              <span>Or call 347-378-7827</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: The Story */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center">WHY PROSTHODONTICS</p>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] text-center">The specialty that fits the work.</h2>
          
          <p className="mt-9 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            Prosthodontics exists for the patients who need the most help. A crown that's the right shape but wrong shade. A bite adjusted four times with no one explaining why it keeps slipping. A treatment plan addressing three teeth when the underlying issue is the whole arch. It's one of nine ADA-recognized specialties — the only one whose entire training is focused on restoration, replacement, and esthetic design of teeth.
          </p>
        </div>
      </section>

      {/* Section 3: The Prosthodontist Credential */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 items-start">
            
            <div>
              <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">THE SPECIALTY</p>
              <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">What 'prosthodontist' actually means.</h2>
              
              <p className="mt-7 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                A prosthodontist adds three years of accredited residency to the standard four-year DDS or DMD — training focused on restoration, replacement, and esthetic design of teeth. Built for the work most second opinions are about: implants, crowns, bridges, veneers, and full-mouth reconstruction.
              </p>
              <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                The difference shows up in sequencing. A prosthodontist plans the final outcome first, then works backward — which procedures, in what order, with what trade-offs. The same case can yield very different treatment plans depending on who's reading the X-ray.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 md:p-8 shadow-sm lg:sticky lg:top-24">
              <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">AT A GLANCE</p>
              <h3 className="mt-2 text-[1.25rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A]">The training, side by side.</h3>
              
              <div className="pt-6">
                <p className="text-[0.75rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">GENERAL DENTIST</p>
                <p className="mt-1.5 text-[1.0625rem] font-medium text-[#1B1B1B]">DDS or DMD</p>
                <p className="mt-1 text-[0.875rem] text-[#5C5C5C]">4 years dental school</p>
                <p className="mt-3 text-[0.8125rem] text-[#5C5C5C] leading-[1.55]">
                  Broad training across all areas of general dentistry.
                </p>
              </div>
              
              <hr className="border-t border-[#E7E2D8] my-6" />

              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">PROSTHODONTIST</p>
                <p className="mt-1.5 text-[1.0625rem] font-medium text-[#0A0A0A]">DDS or DMD + Certificate in Prosthodontics</p>
                <p className="mt-1 text-[0.875rem] text-[#5C5C5C]">4 years dental school + 3 additional years of accredited residency</p>
                <p className="mt-3 text-[0.8125rem] text-[#5C5C5C] leading-[1.55]">
                  Specialized training in restoration, replacement, and esthetic design of teeth. One of nine ADA-recognized dental specialties.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E7E2D8]">
                <p className="text-[0.75rem] text-[#5C5C5C] leading-[1.55]">
                  Specialty recognition by the American Dental Association.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: How He Practices */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center">BEDSIDE MANNER</p>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] text-center">How World Smiles actually practices.</h2>
          
          <p className="mt-9 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            The word patients use most in reviews isn't 'good dentist.' It's 'patient.' Appointments at World Smiles are deliberately longer than a typical dental visit. Making sure you understand your options is where most dental experiences fall apart, and where this practice spends real time.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#C9A961]" strokeWidth={2.25} />
              </div>
              <div className="flex-1 mt-0.5">
                <h3 className="text-[1rem] font-semibold text-[#0A0A0A] mb-1">Conversations happen sitting upright.</h3>
                <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6]">
                  Diagnosis and discussion happen before any clinical work begins, with you in a normal chair. You won't be talked at while you can't respond.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#C9A961]" strokeWidth={2.25} />
              </div>
              <div className="flex-1 mt-0.5">
                <h3 className="text-[1rem] font-semibold text-[#0A0A0A] mb-1">Family members are welcome in the room.</h3>
                <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6]">
                  Bring your spouse, your adult child, or whoever helps you make decisions. Multiple sets of ears makes for better-informed choices — better than trying to remember everything afterward.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#C9A961]" strokeWidth={2.25} />
              </div>
              <div className="flex-1 mt-0.5">
                <h3 className="text-[1rem] font-semibold text-[#0A0A0A] mb-1">Anxiety is information, not a problem.</h3>
                <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6]">
                  If you've cancelled appointments before, sat in the parking lot, or talked yourself out of going in — that's something we want to know. It changes how we pace the appointment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#C9A961]" strokeWidth={2.25} />
              </div>
              <div className="flex-1 mt-0.5">
                <h3 className="text-[1rem] font-semibold text-[#0A0A0A] mb-1">Russian is a working language here.</h3>
                <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6]">
                  World Smiles speaks Russian fluently. If you'd prefer the consultation in Russian, or if you're bringing a parent or grandparent who would, just say so when you call. We'll switch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#C9A961]" strokeWidth={2.25} />
              </div>
              <div className="flex-1 mt-0.5">
                <h3 className="text-[1rem] font-semibold text-[#0A0A0A] mb-1">Treatment plans are written, with locked-in pricing.</h3>
                <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6]">
                  What you discuss in the room is what you take home — on paper, itemized, yours to keep regardless of whether you schedule treatment. No verbal estimates that change at the front desk.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Credentials / Training */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center">TRAINING & CREDENTIALS</p>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] text-center">The credentials behind the work.</h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex items-start gap-5">
              <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <div className="flex-1 mt-0.5">
                <p className="text-[0.75rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">SPECIALTY CERTIFICATE</p>
                <h3 className="mt-1.5 text-[1.0625rem] md:text-[1.125rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.3]">Certificate in Prosthodontics</h3>
                <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">
                  Every treatment plan at World Smiles is designed by a clinician with a Certificate in Prosthodontics from NYU College of Dentistry — one of nine ADA-recognized specialties, requiring three years of accredited residency beyond dental school.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex items-start gap-5">
              <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <div className="flex-1 mt-0.5">
                <p className="text-[0.75rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">DENTAL DEGREE</p>
                <h3 className="mt-1.5 text-[1.0625rem] md:text-[1.125rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.3]">Doctoral & Advanced Training</h3>
                <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">
                  Rutgers School of Dental Medicine (DMD), general dental residency at Kingsbrook Jewish Medical Center in Brooklyn, and the NYU Implant Program — all completed before prosthodontic certification. Fifteen-plus years of clinical experience.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex items-start gap-5">
              <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <div className="flex-1 mt-0.5">
                <p className="text-[0.75rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">LICENSURE</p>
                <h3 className="mt-1.5 text-[1.0625rem] md:text-[1.125rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.3]">Licensed to Practice — State of New York</h3>
                <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">
                  Licensed prosthodontic practice at 3121 Ocean Avenue in Sheepshead Bay, Brooklyn.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 7: Patient Voice */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 text-[#F7F3EC]">
        <div className="max-w-[1080px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center">IN THE WORDS OF A PATIENT</p>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white text-center">What it's actually like.</h2>

          <div className="mt-12 max-w-[820px] mx-auto text-center">
            <Quote className="w-10 h-10 text-[#C9A961] mx-auto" strokeWidth={1.5} />
            <p className="mt-6 font-[Fraunces,Georgia,serif] italic text-[1.5rem] md:text-[1.875rem] leading-[1.4] text-white">
              "I can't say enough good things about this office. From the moment I walked in, the staff was warm, welcoming, and incredibly professional. The doctor is truly exceptional. He took the time to explain every step of the process in detail, answering all my questions with patience and care. His attention to detail and expertise in prosthodontics is evident in the quality of his work."
            </p>
            <div className="mt-8 flex gap-1.5 justify-center">
              <Star className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              <Star className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              <Star className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              <Star className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              <Star className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
            </div>
            <p className="mt-5 text-[0.9375rem] text-[#DBC089]">— Miriam K., Brooklyn</p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6 flex flex-col">
              <Quote className="w-6 h-6 text-[#C9A961]" strokeWidth={1.5} />
              <p className="mt-4 font-[Fraunces,Georgia,serif] italic text-[1rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "As a phobic dental patient, I can say that I'm actually looking forward to my next appointment!"
              </p>
              <div className="mt-5 flex gap-1">
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <p className="mt-2 text-[0.8125rem] text-[#DBC089]">— Marina D., Brooklyn</p>
            </div>

            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6 flex flex-col">
              <Quote className="w-6 h-6 text-[#C9A961]" strokeWidth={1.5} />
              <p className="mt-4 font-[Fraunces,Georgia,serif] italic text-[1rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "He made me feel at ease as I'm usually patrified of dentists."
              </p>
              <div className="mt-5 flex gap-1">
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <p className="mt-2 text-[0.8125rem] text-[#DBC089]">— Verified patient review</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/reviews" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
              Read all patient reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="bg-[#F7F3EC] py-16 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">READY TO TALK</p>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">An hour with a prosthodontist who'll actually listen.</h2>
          
          <p className="mt-6 max-w-[55ch] mx-auto text-[#1B1B1B] text-[1.125rem] leading-[1.65]">
            Book the Specialist Second Opinion Session — sixty minutes with the specialist, a written plan, transparent pricing. If you've been disappointed before, this is where that ends.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/second-opinion" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC] min-h-[48px]">
              Book My Session
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC] min-h-[48px]">
              <Phone className="w-4 h-4" strokeWidth={2} />
              <span>Or call 347-378-7827</span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
