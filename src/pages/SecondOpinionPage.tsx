import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Star, Check, Quote, ChevronDown } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function SecondOpinionPage() {
  usePageMeta('SecondOpinionPage');

  return (
    <>
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[820px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
            FOR PATIENTS WHO'VE ALREADY BEEN ELSEWHERE
          </span>
          <h1 className="mt-4 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            The Specialist Second Opinion Session.
          </h1>
          <p className="mt-6 text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[#5C5C5C] max-w-[58ch] mx-auto">
            A dedicated sixty-minute appointment with Dr. Furman, NYU-trained prosthodontist, to make sense of treatment plans you've already received. Bring whatever paperwork you have — quotes, X-rays, notes. Leave with one coherent specialist read in writing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center items-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC]"
            >
              Book My Session
            </Link>
            <a 
              href="tel:+13473787827" 
              aria-label="Call World Smiles Prosthodontics at 347-378-7827"
              className="inline-flex items-center justify-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold px-4 py-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC] min-h-[48px] min-w-[48px]"
            >
              <Phone className="w-4 h-4" />
              <span>Or call 347-378-7827</span>
            </a>
          </div>
          
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.875rem] text-[#5C5C5C]">
            <span className="flex items-center gap-1.5 font-medium text-[#1B1B1B]">
              <span className="flex text-[#C9A961]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              Google-reviewed
            </span>
            <span>&middot;</span>
            <span>NYU Certificate in Prosthodontics</span>
            <span>&middot;</span>
            <span>60-minute consultation</span>
            <span>&middot;</span>
            <span>Russian spoken</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO ARRIVES AT THIS APPOINTMENT */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            WHO IT'S FOR
          </span>
          <h2 className="text-center mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            You don't have to be sure. That's the point.
          </h2>
          <p className="mt-7 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            Most of our second-opinion patients arrive having already done a lot of work. They've sat in two or three other consultations. They've collected quotes that don't agree. They've been told a tooth has to come out, or that a bridge can't be saved, or that the only path forward is more expensive than they expected. They're not looking for someone to sell them a different plan — they're looking for a specialist to make sense of what they've already heard.
          </p>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            This appointment is built for that conversation. It's an hour, sometimes a little more, with a prosthodontist whose specialty training is specifically in this kind of complex restorative thinking. Bring your records, bring your questions, bring a family member if you want one in the room. The goal is one clear read — not another sales pitch.
          </p>
          
          <div className="mt-10 max-w-[640px] mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">
                  You've been quoted by one or more offices and the numbers don't agree.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">
                  Another dentist recommended extraction, and something about it feels off.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">
                  You've had crowns, implants, or bridges fail before and want a specialist to look at why.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">
                  You're considering treatment elsewhere and want to verify the plan with a board-credentialed prosthodontist first.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                <span className="text-[#1B1B1B] text-[1rem] leading-[1.65]">
                  You're approaching a milestone — a wedding, a reunion, a milestone birthday — and want to start a plan you trust will be ready in time.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT'S INCLUDED + VALUE STACK */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
            <div>
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
                WHAT'S INCLUDED
              </span>
              <h2 className="mt-4 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Sixty minutes. A scan. A written plan. The math, transparent.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                Most dental consultations are fifteen minutes of looking around your mouth and ten minutes of someone at the front desk telling you what it might cost. This is different. It's the full diagnostic workup a prosthodontist runs before designing any treatment plan — and you get to take everything home, including the written plan and the locked-in pricing.
              </p>
              <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                We've broken out the retail value of each piece below — what each item would cost on its own, billed separately, at a typical specialist rate in NYC. Packaged as one appointment, it's $147.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 md:p-8 shadow-sm">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
                THE SESSION
              </span>
              <h3 className="mt-2 text-[1.5rem] md:text-[1.75rem] leading-[1.25] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Specialist Second Opinion Session
              </h3>
              
              <ul className="mt-6 divide-y divide-[#E7E2D8]">
                <li className="flex items-start justify-between gap-4 py-3">
                  <span className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                    <span className="text-[0.9375rem] text-[#1B1B1B] leading-[1.55]">45–60 minute consultation with our Prosthodontist</span>
                  </span>
                  <span className="text-[0.8125rem] text-[#5C5C5C] tabular-nums whitespace-nowrap font-medium mt-0.5">$350</span>
                </li>
                <li className="flex items-start justify-between gap-4 py-3">
                  <span className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                    <span className="text-[0.9375rem] text-[#1B1B1B] leading-[1.55]">Full 3D intraoral scan</span>
                  </span>
                  <span className="text-[0.8125rem] text-[#5C5C5C] tabular-nums whitespace-nowrap font-medium mt-0.5">$475</span>
                </li>
                <li className="flex items-start justify-between gap-4 py-3">
                  <span className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                    <span className="text-[0.9375rem] text-[#1B1B1B] leading-[1.55]">40-point bite check</span>
                  </span>
                  <span className="text-[0.8125rem] text-[#5C5C5C] tabular-nums whitespace-nowrap font-medium mt-0.5">$250</span>
                </li>
                <li className="flex items-start justify-between gap-4 py-3">
                  <span className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                    <span className="text-[0.9375rem] text-[#1B1B1B] leading-[1.55]">Review of any X-rays or prior treatment plans</span>
                  </span>
                  <span className="text-[0.8125rem] text-[#5C5C5C] tabular-nums whitespace-nowrap font-medium mt-0.5">$200</span>
                </li>
                <li className="flex items-start justify-between gap-4 py-3">
                  <span className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                    <span className="text-[0.9375rem] text-[#1B1B1B] leading-[1.55]">Written treatment plan with locked-in pricing — yours to keep</span>
                  </span>
                  <span className="text-[0.8125rem] text-[#5C5C5C] tabular-nums whitespace-nowrap font-medium mt-0.5">$250</span>
                </li>
                <li className="flex items-start justify-between gap-4 py-3">
                  <span className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-[#C9A961] shrink-0" strokeWidth={2.25} />
                    <span className="text-[0.9375rem] text-[#1B1B1B] leading-[1.55]">Preview of what your smile could look like</span>
                  </span>
                  <span className="text-[0.8125rem] text-[#5C5C5C] tabular-nums whitespace-nowrap font-medium mt-0.5">$150</span>
                </li>
              </ul>

              <div className="mt-5 pt-5 border-t-2 border-[#0A0A0A]">
                <div className="flex justify-between items-baseline">
                  <span className="text-[0.875rem] uppercase tracking-[0.12em] font-semibold text-[#5C5C5C]">TOTAL VALUE</span>
                  <span className="text-[1.125rem] font-semibold text-[#1B1B1B] tabular-nums">$1,675</span>
                </div>
                <div className="mt-3 flex justify-between items-baseline">
                  <span className="text-[0.875rem] uppercase tracking-[0.12em] font-semibold text-[#C9A961]">YOUR INVESTMENT</span>
                  <span className="font-[Fraunces,Georgia,serif] text-[2rem] font-medium text-[#0A0A0A] tabular-nums leading-none">$147</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E7E2D8]">
                <p className="text-[0.8125rem] text-[#5C5C5C] leading-[1.55]">
                  Credited toward treatment if you choose to start within 90 days. No deposit, no commitment beyond this single visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY THE PRICE IS WHAT IT IS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            ON THE PRICE
          </span>
          <h2 className="text-center mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            An honest answer about why this is $147.
          </h2>
          <p className="mt-7 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            You might wonder why an appointment with a 3D scan, an hour of specialist time, and a written treatment plan costs $147 when the retail value of each piece is much higher. There's no catch. The reasoning is straightforward.
          </p>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            Most patients who come for a specialist second opinion eventually decide to start treatment with us — sometimes immediately, sometimes months later. We've priced this consultation so the cost isn't a reason to delay. We'd rather you take the time you need to think, get a third opinion if you want one, and come back when you're ready. The $147 is credited toward treatment if you choose to proceed within ninety days, so for the patients who do continue with us, the consultation is effectively free.
          </p>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
            And for the patients who decide to go elsewhere — you still take home a full written treatment plan, locked pricing, and a specialist's read. You haven't paid for a sales pitch. You've paid for an hour of expertise, which is what an hour of specialist expertise costs.
          </p>
        </div>
      </section>

      {/* SECTION 5: THE PROSTHODONTIST DIFFERENCE */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
                WHY A SPECIALIST
              </span>
              <h2 className="mt-4 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                What a prosthodontist sees that a general dentist can't.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                A general dentist completes four years of dental school. A prosthodontist completes those four years and then an additional three years of accredited specialty training — focused entirely on the restoration, replacement, and esthetic design of teeth. This is the only dental specialty trained specifically for the kind of work most people come to a second opinion about: implants, full-mouth reconstruction, complex crown and bridge work, failed prior restorations, and cosmetic cases that have to look like the patient's actual face, not a template.
              </p>
              <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#1B1B1B]">
                The reason it matters at a consultation is sequencing. A general dentist often plans procedure-by-procedure. A prosthodontist plans the final outcome first, then works backward to figure out which procedures get you there, in what order, with what trade-offs. The same case can produce very different treatment plans depending on which kind of clinician is reading the X-ray.
              </p>
            </div>

            <div className="bg-[#0A0A0A] rounded-xl p-7 md:p-8 text-white">
              <Quote className="w-8 h-8 text-[#C9A961]" strokeWidth={1.5} />
              <p className="mt-5 font-[Fraunces,Georgia,serif] italic text-[1.125rem] md:text-[1.25rem] leading-[1.5]">
                "Dr. Furman is unlike any other dentist I've visited. I went to two other doctors and they both told me my tooth must be removed. Dr. Furman did a root canal instead and saved my tooth."
              </p>
              <div className="mt-6 pt-5 border-t border-[#2A2A2A]">
                <span className="text-[0.8125rem] text-[#DBC089] uppercase tracking-[0.14em] font-semibold block">
                  VERIFIED PATIENT REVIEW
                </span>
                <p className="mt-3 text-[0.875rem] text-[#F7F3EC]/75 leading-[1.55]">
                  This is the kind of differential diagnosis specialist training is for. The tooth was savable. Two other clinicians didn't see it. The conversation that surfaced it took ten minutes at a second-opinion consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW THE APPOINTMENT ACTUALLY GOES */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            WHAT TO EXPECT
          </span>
          <h2 className="text-center mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            The hour, step by step.
          </h2>
          <p className="text-center mt-4 max-w-[58ch] mx-auto text-[1.0625rem] text-[#5C5C5C] leading-[1.65]">
            You stay dressed. You sit upright for the conversation portion. Nothing surprises you.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <div>
              <span className="font-[Fraunces,Georgia,serif] text-[3rem] leading-none font-medium text-[#C9A961] block">01</span>
              <h4 className="mt-3 text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">You arrive with whatever you have.</h4>
              <p className="mt-2 text-[#5C5C5C] text-[0.875rem] leading-[1.55]">X-rays from the last dentist, the treatment plan with the numbers that didn't add up, photos you took of your own mouth, notes you wrote at the kitchen table. All of it is useful. Some of it Dr. Furman has seen before. Some of it he hasn't. He'll look at all of it.</p>
            </div>

            <div>
              <span className="font-[Fraunces,Georgia,serif] text-[3rem] leading-none font-medium text-[#C9A961] block">02</span>
              <h4 className="mt-3 text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">We do the diagnostic workup.</h4>
              <p className="mt-2 text-[#5C5C5C] text-[0.875rem] leading-[1.55]">Full 3D intraoral scan — no impressions, no goop. A 40-point bite check that maps how your teeth come together under load. Existing X-rays reviewed on a large monitor next to you, with what each shadow means explained as it's pointed at.</p>
            </div>

            <div>
              <span className="font-[Fraunces,Georgia,serif] text-[3rem] leading-none font-medium text-[#C9A961] block">03</span>
              <h4 className="mt-3 text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">We sit upright and talk.</h4>
              <p className="mt-2 text-[#5C5C5C] text-[0.875rem] leading-[1.55]">Dr. Furman walks through what he sees, including what the other dentists got right and where his read differs. You ask whatever questions you want. Family members in the room are welcome. If you'd prefer the conversation in Russian, that's fine too.</p>
            </div>

            <div>
              <span className="font-[Fraunces,Georgia,serif] text-[3rem] leading-none font-medium text-[#C9A961] block">04</span>
              <h4 className="mt-3 text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">You take the written plan home.</h4>
              <p className="mt-2 text-[#5C5C5C] text-[0.875rem] leading-[1.55]">One coherent treatment plan in writing, with locked-in pricing on every line, yours to keep regardless of whether you ever come back. Many patients leave to think. Many take it to a third opinion. Many come back weeks or months later. All of those outcomes are expected and welcomed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: PATIENT REVIEWS — SECOND-OPINION ARRIVALS */}
      <section className="bg-[#0A0A0A] text-[#F7F3EC] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            FROM PATIENTS WHO ARRIVED THIS WAY
          </span>
          <h2 className="text-center mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">
            After a few other consultations, they ended up here.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-7 flex flex-col">
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <p className="mt-5 font-[Fraunces,Georgia,serif] italic text-[1rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "After decades of paying for expensive dental procedures and being dissatisfied, I was blessed to have found Dr. Furman."
              </p>
              <div className="mt-6 flex gap-1">
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="mt-3 text-[0.875rem] text-[#DBC089]">— Verified Zocdoc review</span>
            </div>

            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-7 flex flex-col">
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <p className="mt-5 font-[Fraunces,Georgia,serif] italic text-[1rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "I had the best experience here. The doctor was so attentive and really paid attention to my concerns. He was so patient and walked me through the whole process, since I was feeling very anxious."
              </p>
              <div className="mt-6 flex gap-1">
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="mt-3 text-[0.875rem] text-[#DBC089]">— Marina S., Brooklyn</span>
            </div>

            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-7 flex flex-col">
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <p className="mt-5 font-[Fraunces,Georgia,serif] italic text-[1rem] leading-[1.6] text-[#F7F3EC] flex-grow">
                "He perfectly matched the color and texture to my other teeth. He is a perfectionist with great bedside manners. Made me feel comfortable throughout the process."
              </p>
              <div className="mt-6 flex gap-1">
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                <Star className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="mt-3 text-[0.875rem] text-[#DBC089]">— Kami A., Brooklyn</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/reviews" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
              Read more patient reviews
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="bg-[#FAF7F1] py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            BEFORE YOU BOOK
          </span>
          <h2 className="text-center mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            Practical questions, plainly answered.
          </h2>

          <div className="mt-10 space-y-3">
            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">What do I need to bring?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Whatever you have. X-rays from prior dentists, written treatment plans, quotes you've received, notes you took at other consultations — even photos you took of your own teeth. If you don't have any of that, come anyway. We have everything we need to do a full diagnostic workup on-site.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Will you talk to my previous dentist?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Only with your written permission, and only if you want us to. Most second-opinion consultations don't require any contact with your prior providers. We're working from the records and information you bring us.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">What happens if I decide not to proceed with treatment here?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                You leave with everything you came for — a written treatment plan, locked-in pricing, a 3D scan you can take to another office, and a specialist's read on your case. Many of our second-opinion patients use the plan we write as leverage when they continue with their original dentist or shop further. That's fine. The $147 is what you paid for that hour and that paperwork.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">How does the 90-day credit work?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                If you choose to begin treatment with us within 90 days of your second-opinion session, the $147 is credited against the cost of that treatment. There's no separate paperwork to fill out — it's applied automatically when treatment is scheduled. After 90 days, the credit expires.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Can I bring my spouse or adult child to the appointment?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Yes. Many patients bring a family member, especially for longer or more complex plans. We have room in the consultation space for one additional person. If you'd prefer the conversation in Russian, Dr. Furman speaks it fluently.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Is the $147 the full cost of the appointment?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Yes. There are no additional fees, no add-ons, no separate scan fee, no separate write-up fee. The $147 covers everything listed in the session.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FAF7F1]">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">How quickly can I get an appointment?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                We're currently booking 1–2 weeks out for the Specialist Second Opinion Session. If your situation is urgent — acute pain, recent extraction, a wedding or event date you're trying to hit — tell us when you call and we'll work to find a sooner slot.
              </div>
            </details>
          </div>

          <div className="mt-10 text-center">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group">
              Read the full FAQ <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block text-center">
            READY
          </span>
          <h2 className="text-center mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">
            One hour. Written plan in your hand. The $147 credited if you continue.
          </h2>
          <p className="mt-5 max-w-[55ch] mx-auto text-[#F7F3EC]/85 text-[1.125rem] leading-[1.65]">
            Bring what you have. Walk out with what you need to actually decide.
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
