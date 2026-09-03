import { Link } from 'react-router-dom';
import { Sparkles, ChevronDown, Building2, GraduationCap, Stethoscope, Heart, DollarSign, FileText } from 'lucide-react';
import { usePageMeta } from '../lib/seo';
import type React from 'react';

function AccordionItem({ question, answer }: { question: React.ReactNode, answer: React.ReactNode }) {
  return (
    <details className="bg-white rounded-xl border border-[#E7E2D8] group">
      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1">
        <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif] leading-[1.4]">{question}</span>
        <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" strokeWidth={1.75} />
      </summary>
      <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.7] text-[1rem]">
        {answer}
      </div>
    </details>
  );
}

export default function FAQPage() {
  usePageMeta('FAQPage');

  return (
    <>
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">FAQ</span>
          <h1 className="mt-4 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#1B1B1B]">Questions and answers.</h1>
          <p className="mt-6 text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[#5C5C5C] max-w-[58ch] mx-auto">
            What patients ask before they call, in the order they tend to ask it. If your question isn't here, message us — we'll answer, and we'll add it to the page if other patients are likely to wonder the same thing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            <a href="#practice" className="inline-flex items-center gap-2 bg-white hover:bg-[#0A0A0A] hover:text-white border border-[#E7E2D8] hover:border-[#0A0A0A] text-[#1B1B1B] px-4 py-2 rounded-full text-[0.875rem] font-medium transition-colors group">
              <Building2 className="w-4 h-4 text-[#C9A961] group-hover:text-[#C9A961]" strokeWidth={1.75} />
              The Practice
            </a>
            <a href="#prosthodontics" className="inline-flex items-center gap-2 bg-white hover:bg-[#0A0A0A] hover:text-white border border-[#E7E2D8] hover:border-[#0A0A0A] text-[#1B1B1B] px-4 py-2 rounded-full text-[0.875rem] font-medium transition-colors group">
              <GraduationCap className="w-4 h-4 text-[#C9A961] group-hover:text-[#C9A961]" strokeWidth={1.75} />
              Prosthodontics
            </a>
            <a href="#treatment" className="inline-flex items-center gap-2 bg-white hover:bg-[#0A0A0A] hover:text-white border border-[#E7E2D8] hover:border-[#0A0A0A] text-[#1B1B1B] px-4 py-2 rounded-full text-[0.875rem] font-medium transition-colors group">
              <Stethoscope className="w-4 h-4 text-[#C9A961] group-hover:text-[#C9A961]" strokeWidth={1.75} />
              Treatment & Appointments
            </a>
            <a href="#comfort" className="inline-flex items-center gap-2 bg-white hover:bg-[#0A0A0A] hover:text-white border border-[#E7E2D8] hover:border-[#0A0A0A] text-[#1B1B1B] px-4 py-2 rounded-full text-[0.875rem] font-medium transition-colors group">
              <Heart className="w-4 h-4 text-[#C9A961] group-hover:text-[#C9A961]" strokeWidth={1.75} />
              Anxiety & Comfort
            </a>
            <a href="#treatments" className="inline-flex items-center gap-2 bg-white hover:bg-[#0A0A0A] hover:text-white border border-[#E7E2D8] hover:border-[#0A0A0A] text-[#1B1B1B] px-4 py-2 rounded-full text-[0.875rem] font-medium transition-colors group">
              <Sparkles className="w-4 h-4 text-[#C9A961] group-hover:text-[#C9A961]" strokeWidth={1.75} />
              Specific Treatments
            </a>
            <a href="#payment" className="inline-flex items-center gap-2 bg-white hover:bg-[#0A0A0A] hover:text-white border border-[#E7E2D8] hover:border-[#0A0A0A] text-[#1B1B1B] px-4 py-2 rounded-full text-[0.875rem] font-medium transition-colors group">
              <DollarSign className="w-4 h-4 text-[#C9A961] group-hover:text-[#C9A961]" strokeWidth={1.75} />
              Insurance & Payment
            </a>
            <a href="#second-opinion" className="inline-flex items-center gap-2 bg-white hover:bg-[#0A0A0A] hover:text-white border border-[#E7E2D8] hover:border-[#0A0A0A] text-[#1B1B1B] px-4 py-2 rounded-full text-[0.875rem] font-medium transition-colors group">
              <FileText className="w-4 h-4 text-[#C9A961] group-hover:text-[#C9A961]" strokeWidth={1.75} />
              Second Opinion Session
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">

          {/* CATEGORY 1: THE PRACTICE */}
          <section id="practice" className="scroll-mt-24">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">ABOUT THE PRACTICE</span>
              </div>
              <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#1B1B1B]">Location, hours, and the basics.</h2>
            </div>
            <div className="space-y-3">
              <AccordionItem 
                question="Where is World Smiles Prosthodontics located?" 
                answer="Our office is at 3121 Ocean Avenue, Suite 101, in the Sheepshead Bay neighborhood of Brooklyn. We're a four-minute walk from the Sheepshead Bay subway station (B and Q trains), with free street parking on Ocean Avenue and the surrounding side streets." 
              />
              <AccordionItem 
                question="What are your office hours?" 
                answer="We're open Monday, Wednesday, and Friday from 10am to 5pm. We're closed Tuesdays, Thursdays, and weekends. The limited schedule allows Dr. Furman to give each patient longer appointments and more focused attention than a typical five-day-a-week practice." 
              />
              <AccordionItem 
                question="Are you accepting new patients?" 
                answer="Yes. New patient appointments are typically scheduled 1–2 weeks out. If your situation is urgent, mention that when you call and we'll work to find a sooner slot." 
              />
              <AccordionItem 
                question="Do I need a referral from another dentist to make an appointment?" 
                answer="No — you can book directly with us. Some insurance plans do require a referral for them to cover specialist visits, so check with your plan if reimbursement matters to you. Either way, we're happy to see you." 
              />
              <AccordionItem 
                question="Does Dr. Furman speak Russian?" 
                answer="Yes, fluently. If you'd prefer the consultation in Russian, or if you're bringing a parent or grandparent who would, just let us know when you call. We'll switch." 
              />
              <AccordionItem 
                question="Is the office wheelchair accessible?" 
                answer="The Ocean Avenue entrance has steps, but the office is wheelchair accessible through the building lobby. If you'll be using the lobby entrance, let us know when you book and we'll make sure someone is ready to meet you." 
              />
              <AccordionItem 
                question="Do you treat children?" 
                answer="Our specialty is restorative and prosthodontic care for adults, which means we don't typically see pediatric patients for routine dentistry. For teenagers or young adults who need specialty restorative work — congenital missing teeth, trauma cases, advanced cosmetic care — we're happy to consult." 
              />
            </div>
          </section>

          {/* CATEGORY 2: PROSTHODONTICS */}
          <section id="prosthodontics" className="scroll-mt-24 mt-16 lg:mt-20">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">ABOUT THE SPECIALTY</span>
              </div>
              <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#1B1B1B]">What a prosthodontist is — and isn't.</h2>
            </div>
            <div className="space-y-3">
              <AccordionItem 
                question="What is a prosthodontist?" 
                answer="A dentist who has completed three additional years of accredited specialty training after dental school, focused on restoration, replacement, and esthetic design of teeth. One of nine ADA-recognized specialties, built for implants, crowns, bridges, veneers, and full-mouth reconstruction." 
              />
              <AccordionItem 
                question="What's the difference between a prosthodontist and a regular dentist?" 
                answer="A dentist completes four years of dental school (DDS or DMD). A prosthodontist adds three years of residency in advanced restorative dentistry — seven years total. In complex cases, a prosthodontist plans the final outcome first and engineers backward, rather than deciding procedure by procedure." 
              />
              <AccordionItem 
                question="When should I see a prosthodontist instead of my regular dentist?" 
                answer="For routine cleanings, simple fillings, and basic care, your regular dentist is the right call. For complex cases — implants, multiple crowns or bridges, veneers, full-mouth reconstruction, or anything where opinions disagree on the right approach — prosthodontic training is built for exactly that." 
              />
              <AccordionItem 
                question="Is 'prosthodontist' the same as 'cosmetic dentist'?" 
                answer="No. 'Cosmetic dentist' isn't a recognized specialty — any dentist can use the title. 'Prosthodontist' is board-recognized with three years of accredited residency. Prosthodontists do a lot of cosmetic work, but the specialty also covers functional rehabilitation, full-mouth reconstruction, and complex implant cases." 
              />
              <AccordionItem 
                question="Can a prosthodontist do my routine cleanings?" 
                answer="We focus on restorative and specialty work, so cleanings are typically coordinated with a general dentist or hygienist. Some patients keep their existing general dentist for routine care and see us for specialty cases. Others have us coordinate everything." 
              />
            </div>
          </section>

          {/* CATEGORY 3: TREATMENT & APPOINTMENTS */}
          <section id="treatment" className="scroll-mt-24 mt-16 lg:mt-20">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">ABOUT TREATMENT & APPOINTMENTS</span>
              </div>
              <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#1B1B1B]">What happens before, during, and after a visit.</h2>
            </div>
            <div className="space-y-3">
              <AccordionItem 
                question="How long does a typical consultation take?" 
                answer="Our specialist consultations are scheduled for 45–60 minutes. The diagnostic portion includes a 3D scan and a bite check. The conversation happens sitting upright, not while you're reclined. Longer than a typical dental consultation on purpose — good decisions get made with more time, not less." 
              />
              <AccordionItem 
                question="What should I bring to my first appointment?" 
                answer="Bring whatever paperwork you have — X-rays, treatment plans, quotes from other offices, notes, even photos of your own teeth. If you don't have any of that, come anyway. We have everything on-site for a full diagnostic workup." 
              />
              <AccordionItem 
                question="Can I bring a family member to my appointment?" 
                answer="Yes. Many patients bring a spouse, an adult child, or another family member, especially for longer consultations or complex treatment discussions. Multiple sets of ears in the room makes for better-informed decisions. If you'd prefer the conversation in Russian, just let us know when you book." 
              />
              <AccordionItem 
                question="Will I get a written treatment plan?" 
                answer="Yes. After your consultation you receive a written treatment plan with locked-in pricing on every line, yours to keep regardless of whether you schedule the work. Many patients use it to think it over, get additional opinions, or shop further. That's expected and welcomed." 
              />
              <AccordionItem 
                question="Do you offer second opinions on treatment plans from other dentists?" 
                answer="Yes — that's specifically what our Specialist Second Opinion Session is built for. Bring whatever you have — quotes, X-rays, written plans — and Dr. Furman reviews them in the context of his own diagnostic workup. You leave with one coherent specialist read and a written plan of your own." 
              />
              <AccordionItem 
                question="How long does it take to get an appointment?" 
                answer="New patient consultations are typically booked 1–2 weeks out. If your situation is urgent — acute pain, recent extraction, a milestone date you're trying to hit — let us know when you call and we'll work to find a sooner slot." 
              />
              <AccordionItem 
                question="Do you handle dental emergencies?" 
                answer="Yes, we accommodate urgent cases when we can. If you're calling outside office hours with an emergency, leave a detailed voicemail and we'll respond first thing the next open day. For severe pain, swelling, or trauma that can't wait, please go to the nearest hospital emergency room first." 
              />
            </div>
          </section>

          {/* CATEGORY 4: ANXIETY & COMFORT */}
          <section id="comfort" className="scroll-mt-24 mt-16 lg:mt-20">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">ABOUT ANXIETY & COMFORT</span>
              </div>
              <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#1B1B1B]">If you've been disappointed or hurt before.</h2>
            </div>
            <div className="space-y-3">
              <AccordionItem 
                question="What if I'm scared of the dentist?" 
                answer="A lot of our patients are. Anxiety is one of the most common reasons people cancel appointments or talk themselves out of going in. The conversation portion of every appointment happens sitting upright before any clinical work, and we tell you what we're going to do before we do it. If you've been hurt by dentistry before, that history is information we want." 
              />
              <AccordionItem 
                question="Do you offer sedation dentistry?" 
                answer="Yes. Options range from oral sedation (a pill taken before your appointment) to deeper sedation for more involved procedures or higher anxiety. The right approach depends on what's being done and how you'd prefer to experience it. Discussed during your consultation." 
              />
              <AccordionItem 
                question="What if I haven't been to the dentist in years?" 
                answer="You're not alone, and you're not in trouble. Many of our patients haven't seen a dentist in years — cost, fear, or prior disappointment. The first visit is about understanding what's happening in your mouth and writing a plan. Nothing major happens that day unless you choose for it to." 
              />
              <AccordionItem 
                question="Will the procedure hurt?" 
                answer="Local anesthesia for anything where discomfort would otherwise be expected, with sedation available on request. Most patients describe modern procedures as significantly less painful than they'd braced for. We walk through what to expect for your specific procedure before we begin." 
              />
              <AccordionItem 
                question="Can I take a break during a long appointment?" 
                answer="Absolutely. If you need to pause, signal us — we stop. Long appointments aren't a test of endurance." 
              />
            </div>
          </section>

          {/* CATEGORY 5: SPECIFIC TREATMENTS */}
          <section id="treatments" className="scroll-mt-24 mt-16 lg:mt-20">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">ABOUT SPECIFIC TREATMENTS</span>
              </div>
              <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#1B1B1B]">Implants, veneers, crowns, and full-mouth work.</h2>
            </div>
            <div className="space-y-3">
              <AccordionItem 
                question="How much do dental implants cost in Brooklyn?" 
                answer="A single implant typically starts at $4,000 for a straightforward case — healthy jaw, no bone grafting, standard materials. Cases involving grafting, multiple implants, or premium materials run higher; full-arch solutions are priced separately. Your consultation includes a written plan with locked-in pricing for your exact case." 
              />
              <AccordionItem 
                question="How long do dental implants last?" 
                answer="Properly placed and well-maintained, an implant can last 25 years or more — often a lifetime. The titanium post outlasts the crown on top; crowns are typically replaced every 10–15 years. Failures come more often from inadequate planning or poor hygiene than the technology itself." 
              />
              <AccordionItem 
                question="Are dental implants painful?" 
                answer="The procedure is performed under local anesthesia, with additional sedation available if anxiety is a factor. Recovery is similar to a tooth extraction — manageable with over-the-counter pain medication, most discomfort resolving within a few days." 
              />
              <AccordionItem 
                question="How long do porcelain veneers last?" 
                answer="A well-made porcelain veneer typically lasts 10–20 years. Actual lifespan depends on the original design, the bonding, and your bite — patients who grind at night often shorten the lifespan unless a nightguard is part of the plan." 
              />
              <AccordionItem 
                question="What's the difference between a veneer and a crown?" 
                answer="A veneer covers only the front surface of a tooth, used primarily for cosmetic improvement. A crown covers the entire tooth, used when the tooth needs structural restoration — significant decay, fracture, root canal. Veneers preserve more original tooth structure; crowns replace more of it." 
              />
              <AccordionItem 
                question="What is full mouth reconstruction?" 
                answer="Coordinated rebuilding of multiple teeth — sometimes the entire mouth — to restore both function and aesthetics. Usually a combination of crowns, bridges, implants, and veneers, designed as one cohesive plan. Common causes: severe wear, multiple failed restorations, or bite collapse compounding over years." 
              />
              <AccordionItem 
                question="How much does full-mouth reconstruction cost?" 
                answer="Full-mouth reconstruction typically ranges from $25,000 to $90,000, depending on how many restorations are needed, the materials, and whether implants are involved. Your consultation includes a written plan with locked-in pricing for your specific case — one exact number, not a range." 
              />
              <AccordionItem 
                question="Do you offer same-day crowns?" 
                answer="For some cases, yes. 3D scanning and in-office milling let certain crowns be designed, milled, and bonded in a single visit. For more complex cases, a two-visit lab-fabricated crown produces a better long-term outcome. Which approach is right depends on the specific tooth." 
              />
              <AccordionItem 
                question="Can I get teeth whitening done here?" 
                answer="Yes. We offer both in-office whitening and take-home whitening systems. Whitening is most effective when planned in coordination with any restorative work — we typically whiten first, then match veneers or crowns to the new shade." 
              />
            </div>
          </section>

          {/* CATEGORY 6: INSURANCE & PAYMENT */}
          <section id="payment" className="scroll-mt-24 mt-16 lg:mt-20">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">ABOUT INSURANCE & PAYMENT</span>
              </div>
              <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#1B1B1B]">Coverage, financing, and how the money works.</h2>
            </div>
            <div className="space-y-3">
              <AccordionItem 
                question="Do you accept dental insurance?" 
                answer="We're out-of-network with most dental insurance plans. You pay us directly and we provide everything you need to submit for reimbursement. Many PPO plans reimburse a meaningful portion of specialty care. We can estimate what your plan is likely to cover before you commit." 
              />
              <AccordionItem 
                question="What if I don't have dental insurance?" 
                answer="Most of our patients pay out of pocket. We offer transparent pricing with written treatment plans and work with third-party financing partners for patients who'd prefer to spread payments over time. No coverage required." 
              />
              <AccordionItem 
                question="Do you offer financing or payment plans?" 
                answer="Yes. We work with several third-party financing partners that offer 0%-interest plans for qualified applicants. We can discuss specific options during your consultation once we know what treatment is being considered." 
              />
              <AccordionItem 
                question="How will I know what my insurance covers before I commit to treatment?" 
                answer="As part of your consultation, we provide a written treatment plan with locked-in pricing. You can take that plan to your insurance provider — or call them with us — to get a clear answer on what they're likely to reimburse before any work begins." 
              />
              <AccordionItem 
                question="Do you accept HSA or FSA?" 
                answer="Yes. Health Savings Account and Flexible Spending Account funds can be used for most of our services. Bring your card and we'll process it directly." 
              />
              <AccordionItem 
                question="Are consultations free?" 
                answer="Our new-patient consultation is $147 — the Specialist Second Opinion Session. That covers a 3D scan, a 40-point bite check, a written treatment plan with locked-in pricing, and a smile preview. If you start treatment within 90 days, the $147 is credited toward it. Real specialist plans take real work — that's why they're not free." 
              />
            </div>
          </section>

          {/* CATEGORY 7: SECOND OPINION SESSION */}
          <section id="second-opinion" className="scroll-mt-24 mt-16 lg:mt-20">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">ABOUT THE SECOND OPINION SESSION</span>
              </div>
              <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#1B1B1B]">The $147 specialist consultation, explained.</h2>
            </div>
            <div className="space-y-3">
              <AccordionItem 
                question="What is the Specialist Second Opinion Session?" 
                answer="A 45–60 minute consultation with Dr. Furman for patients who've received treatment plans elsewhere and want a specialist's read. Includes a 3D scan, 40-point bite check, review of your prior X-rays or quotes, a written plan with locked-in pricing, and a smile preview. $147, credited toward treatment if you start within 90 days." 
              />
              <AccordionItem 
                question="What's included in the $147?" 
                answer="A 45–60 minute consultation with Dr. Furman, a full 3D scan, a 40-point bite check, review of your prior X-rays or treatment plans, a written plan with locked-in pricing yours to keep, and a smile preview. Retail value over $1,675 — packaged at $147 because most patients who come for a specialist opinion start treatment with us." 
              />
              <AccordionItem 
                question="Will you talk to my previous dentist?" 
                answer="Only with your written permission, and only if you want us to. Most second-opinion consultations don't require any contact with prior providers. We're working from the records and information you bring us." 
              />
              <AccordionItem 
                question="What if I decide not to start treatment here after the second opinion?" 
                answer="That happens and it's expected. You leave with everything you came for — a written plan, locked-in pricing, a 3D scan you can take elsewhere, and a specialist's read. Many second-opinion patients use the plan as reference when they continue with their original dentist or shop further." 
              />
              <AccordionItem 
                question="How does the 90-day credit work?" 
                answer="If you choose to start treatment with us within 90 days of your Specialist Second Opinion Session, the $147 is credited against the cost of that treatment. The credit is applied automatically when treatment is scheduled. After 90 days, the credit expires." 
              />
              <AccordionItem 
                question="Can I bring treatment plans I got from another dentist?" 
                answer="Yes. Bringing prior plans is one of the most useful things you can do. Dr. Furman reviews them as part of the consultation and points out where his specialist read agrees with the other plan, where it differs, and why." 
              />
            </div>
          </section>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">STILL HAVE QUESTIONS</span>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">If your question isn't here, ask it.</h2>
          <p className="mt-6 max-w-[55ch] mx-auto text-[#F7F3EC]/85 text-[1.125rem] leading-[1.65]">
            Message us or call. We answer real questions from real patients all day, and we'll add yours to this page if other patients are likely to wonder the same thing.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              Ask a Question
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] min-w-[48px] min-h-[48px]">
              Call 347-378-7827
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
