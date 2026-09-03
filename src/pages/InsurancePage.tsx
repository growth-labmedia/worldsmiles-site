import { Link } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function InsurancePage() {
  usePageMeta('InsurancePage');

  return (
    <>
    <div className="bg-white">
      {/* SECTION 1 — HERO */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6 text-center">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-3">
            INSURANCE & FINANCIAL POLICY
          </p>
          <h1 className="text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            We're in-network with most ma<span className="font-sans">j</span>or PPO plans. Here's what to expect.
          </h1>
          <p className="text-[1.125rem] leading-[1.65] text-[#5C5C5C] max-w-[62ch] mx-auto mt-6">
            World Smiles is in-network with most major PPO dental insurance plans. We verify your specific benefits before your consultation, file claims directly with your carrier, and give you your real out-of-pocket cost in writing before any work begins. No back-and-forth. No surprises.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2"
            >
              Get a Treatment Plan with Locked Pricing
            </Link>
            <a 
              href="tel:+13473787827" 
              aria-label="Call World Smiles Prosthodontics at 347-378-7827"
              className="inline-flex items-center justify-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold transition-colors min-h-[48px] min-w-[48px]"
            >
              <Phone className="w-4 h-4" />
              <span>Or call 347-378-7827</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — HOW BILLING WORKS */}
      <section className="bg-white py-16 md:py-20 border-b border-[#E7E2D8]/30">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-[700px] mx-auto">
            <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-3">
              HOW BILLING WORKS
            </p>
            <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
              Straight<span className="font-sans">f</span>orward, veri<span className="font-sans">f</span>ied be<span className="font-sans">f</span>ore you start.
            </h2>
            <p className="text-[1rem] leading-[1.65] text-[#5C5C5C] max-w-[60ch] mx-auto mt-4">
              We verify your specific plan before your consultation, walk through what's covered, and give you the numbers in writing. Here's how it works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* CARD 01 */}
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#C9A961]/50 transition-colors">
              <div>
                <span className="font-[Fraunces,Georgia,serif] text-[2.5rem] text-[#C9A961] leading-none block mb-4">
                  01
                </span>
                <h4 className="font-[Fraunces,Georgia,serif] text-[1.25rem] leading-[1.3] text-[#0A0A0A] font-semibold">
                  We verify your coverage before treatment.
                </h4>
                <p className="text-[0.9375rem] leading-[1.6] text-[#5C5C5C] mt-3">
                  Before your consultation, we contact your carrier to confirm what's covered, what your remaining benefits are, and where your deductible or annual maximum stands. You know the numbers before we discuss treatment.
                </p>
              </div>
            </div>

            {/* CARD 02 */}
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#C9A961]/50 transition-colors">
              <div>
                <span className="font-[Fraunces,Georgia,serif] text-[2.5rem] text-[#C9A961] leading-none block mb-4">
                  02
                </span>
                <h4 className="font-[Fraunces,Georgia,serif] text-[1.25rem] leading-[1.3] text-[#0A0A0A] font-semibold">
                  We file your claims directly.
                </h4>
                <p className="text-[0.9375rem] leading-[1.6] text-[#5C5C5C] mt-3">
                  World Smiles submits insurance claims directly to your carrier. We handle the paperwork, procedure codes, and follow-up. You don't need to call your insurance or chase paperwork.
                </p>
              </div>
            </div>

            {/* CARD 03 */}
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#C9A961]/50 transition-colors">
              <div>
                <span className="font-[Fraunces,Georgia,serif] text-[2.5rem] text-[#C9A961] leading-none block mb-4">
                  03
                </span>
                <h4 className="font-[Fraunces,Georgia,serif] text-[1.25rem] leading-[1.3] text-[#0A0A0A] font-semibold">
                  Your out-of-pocket, in writing.
                </h4>
                <p className="text-[0.9375rem] leading-[1.6] text-[#5C5C5C] mt-3">
                  Your treatment plan shows the total fee, what insurance will cover, and your actual out-of-pocket cost. Locked-in pricing at your consultation. No surprise charges added later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FINANCING OPTIONS */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center mb-3">
            FINANCING OPTIONS
          </p>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white text-center">
            Multiple ways to make treatment work with your budget.
          </h2>
          <div className="text-[1.0625rem] leading-[1.7] text-[#F7F3EC]/90 mt-7 max-w-[820px] mx-auto text-center">
            <p>
              Whether it's a single crown or full-mouth reconstruction, we have flexible financing so cost doesn't stall treatment. Most patients combine insurance benefits with one of the paths below. Every option is explained without pressure at your consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
            {/* CARD 1 */}
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#C9A961]/50 transition-colors">
              <div>
                <h4 className="font-[Fraunces,Georgia,serif] text-[1.25rem] leading-[1.3] text-[#0A0A0A] font-semibold">
                  Cherry Financing
                </h4>
                <p className="text-[0.9375rem] leading-[1.6] text-[#5C5C5C] mt-3">
                  Instant, transparent financing designed for healthcare. Low- and no-interest plans available. Soft credit check that doesn't affect your score. Apply during your consultation for an immediate decision.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#C9A961]/50 transition-colors">
              <div>
                <h4 className="font-[Fraunces,Georgia,serif] text-[1.25rem] leading-[1.3] text-[#0A0A0A] font-semibold">
                  In-office payment plans
                </h4>
                <p className="text-[0.9375rem] leading-[1.6] text-[#5C5C5C] mt-3">
                  For patients who prefer to work directly with us, we structure custom payment plans that match your treatment timeline. No third-party involvement. Terms discussed and agreed to at your consultation.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#FAF7F1] border border-[#E7E2D8] rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#C9A961]/50 transition-colors">
              <div>
                <h4 className="font-[Fraunces,Georgia,serif] text-[1.25rem] leading-[1.3] text-[#0A0A0A] font-semibold">
                  CareCredit®
                </h4>
                <p className="text-[0.9375rem] leading-[1.6] text-[#5C5C5C] mt-3">
                  The established healthcare credit card with 6- to 24-month low- and no-interest plans. Approval is typically instant. Apply ahead at carecredit.com or during your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT'S TYPICALLY COVERED */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center mb-3">
            COVERAGE EXPECTATIONS
          </p>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] text-center">
            How dental insurance usually treats prosthodontic work.
          </h2>
          <p className="max-w-[60ch] mx-auto text-center text-[#5C5C5C] text-[1rem] leading-[1.65] mt-4">
            Coverage varies by carrier, tier, annual maximum, deductible, and what benefits you've already used this year. Here's how most PPO plans generally treat the kinds of work we do.
          </p>

          <div className="mt-10 space-y-6">
            {/* ROW 1 */}
            <div className="border-b border-[#E7E2D8] pb-5">
              <h4 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A]">
                Diagnostic exams, X-rays, cleanings
              </h4>
              <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6] mt-1.5">
                Typically covered at preventive rates — often 80–100% under PPO plans.
              </p>
            </div>

            {/* ROW 2 */}
            <div className="border-b border-[#E7E2D8] pb-5">
              <h4 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A]">
                Restorative work — crowns, bridges, dentures
              </h4>
              <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6] mt-1.5">
                Typically covered at 50-80% depending on your plan tier. Your annual maximum often limits how much applies in a single calendar year.
              </p>
            </div>

            {/* ROW 3 */}
            <div className="border-b border-[#E7E2D8] pb-5">
              <h4 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A]">
                Dental implants
              </h4>
              <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6] mt-1.5">
                Coverage varies significantly by plan. Many PPOs cover implants at 50%, some cover only the crown portion, and some exclude implants entirely. We verify your specific benefits before quoting.
              </p>
            </div>

            {/* ROW 4 */}
            <div className="border-b border-[#E7E2D8] pb-5">
              <h4 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A]">
                Cosmetic work — veneers, smile makeovers, whitening
              </h4>
              <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6] mt-1.5">
                Rarely covered. Most plans classify cosmetic dentistry as elective. If a procedure has both functional and cosmetic value, the functional portion is often partially covered.
              </p>
            </div>

            {/* ROW 5 */}
            <div className="pb-2">
              <h4 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A]">
                Full-mouth reconstruction
              </h4>
              <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6] mt-1.5">
                Treated as a sequence of individual procedures, each evaluated separately. Components with clear medical necessity (failed restoration replacement, advanced wear, chewing function) are often partially covered. Purely cosmetic components are not.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center max-w-[60ch] mx-auto text-[0.9375rem] text-[#5C5C5C] font-medium bg-[#FAF7F1] py-4 px-6 rounded-xl border border-[#E7E2D8]">
            At your consultation, we review your plan and project what we expect each treatment line to reimburse. You see the full picture before deciding anything.
          </p>
        </div>
      </section>

      {/* SECTION 6 — CANCELLATION POLICY */}
      <section className="bg-white py-14 md:py-18 border-b border-[#E7E2D8]/30">
        <div className="max-w-[760px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-2">
            SCHEDULING & CANCELLATIONS
          </p>
          <h2 className="font-[Fraunces,Georgia,serif] text-[1.5rem] md:text-[1.875rem] text-[#0A0A0A] font-medium leading-[1.2]">
            Forty-eight hours notice, please.
          </h2>
          <div className="mt-5 text-[1rem] leading-[1.7] text-[#1B1B1B] space-y-4">
            <p>
              Specialty appointments are long — typically 45 to 90 minutes — and we hold that time exclusively for you. If you need to cancel or reschedule, please give us at least 48 hours notice so we can offer the slot to another patient.
            </p>
            <p>
              Cancellations with less than 24 hours notice may be charged a fee. This isn't about penalizing emergencies — it's about discouraging last-minute cancellations that leave time blocked and unused.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="bg-[#FAF7F1] py-16 md:py-20 border-t border-[#E7E2D8]/50">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] text-center mb-3">
            COMMON INSURANCE QUESTIONS
          </p>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] text-center">
            What patients ask most.
          </h2>

          <div className="mt-10 space-y-4">
            {/* Q1 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-3 text-[1.0625rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] cursor-pointer focus:outline-none">
                <span>Should I call my insurance to verify my benefits before my appointment?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform duration-200 group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="mt-4 text-[0.9375rem] text-[#5C5C5C] leading-[1.65] border-t border-[#E7E2D8]/50 pt-4">
                You can, but you don't have to. World Smiles verifies your benefits as part of your consultation — we contact your carrier, confirm your plan details, and use that information to project your reimbursement on your written treatment plan. If you'd rather call ahead, your member ID and the procedure codes you ask about depend on what we'd be doing for you, which we don't know until the consultation. Easier to let us handle it.
              </div>
            </details>

            {/* Q2 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-3 text-[1.0625rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] cursor-pointer focus:outline-none">
                <span>What if I have an HSA or FSA?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform duration-200 group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="mt-4 text-[0.9375rem] text-[#5C5C5C] leading-[1.65] border-t border-[#E7E2D8]/50 pt-4">
                Both work fine. Most dental work — including consultations, restorations, implants, and many cosmetic procedures — is HSA and FSA-eligible. We'll provide documentation with procedure codes for your records.
              </div>
            </details>

            {/* Q3 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-3 text-[1.0625rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] cursor-pointer focus:outline-none">
                <span>Which PPO plans are you in-network with?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform duration-200 group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="mt-4 text-[0.9375rem] text-[#5C5C5C] leading-[1.65] border-t border-[#E7E2D8]/50 pt-4">
                We accept most major PPO dental insurance plans as in-network providers. Contact us with your specific plan name and we'll confirm your coverage and benefits before your consultation.
              </div>
            </details>

            {/* Q4 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-3 text-[1.0625rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] cursor-pointer focus:outline-none">
                <span>Is the $147 Specialist Second Opinion Session covered by insurance?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform duration-200 group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="mt-4 text-[0.9375rem] text-[#5C5C5C] leading-[1.65] border-t border-[#E7E2D8]/50 pt-4">
                We submit it as a comprehensive exam (procedure code D0150) for plans with diagnostic coverage. Many plans cover this at preventive rates. If yours does, your out-of-pocket on the $147 is reduced by whatever your plan reimburses. If yours doesn't, the $147 stands — and it's credited toward treatment if you start within 90 days regardless.
              </div>
            </details>

            {/* Q5 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-3 text-[1.0625rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] cursor-pointer focus:outline-none">
                <span>What's a 'treatment plan with locked pricing'?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform duration-200 group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="mt-4 text-[0.9375rem] text-[#5C5C5C] leading-[1.65] border-t border-[#E7E2D8]/50 pt-4">
                At your consultation, we give you a written document listing every procedure recommended, the fee for each line, our estimate of what your insurance will reimburse, and your projected out-of-pocket. The prices on that document are locked for 90 days — meaning if you decide to move forward within 90 days of the consultation, the prices we quoted are the prices you pay. No mid-treatment increases, no surprise codes added later.
              </div>
            </details>

            {/* Q6 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-3 text-[1.0625rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] cursor-pointer focus:outline-none">
                <span>What financing options do you offer?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform duration-200 group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="mt-4 text-[0.9375rem] text-[#5C5C5C] leading-[1.65] border-t border-[#E7E2D8]/50 pt-4">
                Multiple options: Cherry (instant healthcare financing with soft credit check), in-office payment plans structured around your treatment timeline, and CareCredit (established 6- to 24-month plans). Every option is explained at your consultation without pressure.
              </div>
            </details>

            {/* Q7 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-3 text-[1.0625rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] cursor-pointer focus:outline-none">
                <span>Why don't you list specific prices on the website?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform duration-200 group-open:rotate-180" strokeWidth={2} />
              </summary>
              <div className="mt-4 text-[0.9375rem] text-[#5C5C5C] leading-[1.65] border-t border-[#E7E2D8]/50 pt-4">
                Because prosthodontic pricing depends entirely on what's actually in your mouth. A crown can be straightforward or part of a complex reconstruction. An implant can be a single tooth or part of a full-arch case. We've found that 'starting at' prices tend to mislead patients more than help them — your real price is what you'll see in writing at the consultation.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center text-white">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-3">
            WHEN YOU'RE READY
          </p>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">
            Get specific pricing for your specific case.
          </h2>
          <p className="text-[1.125rem] leading-[1.65] text-[#F7F3EC]/85 max-w-[60ch] mx-auto mt-5">
            The only way to know what your treatment will actually cost is to come in. Forty-five to sixty minutes, a 3D scan, a benefits verification, and a written plan with locked-in pricing — yours to take home. $147, credited toward treatment if you start within 90 days.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 items-center justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2"
            >
              Book a Consultation
            </Link>
            <Link to="/second-opinion"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              About the Second Opinion Session
            </Link>
          </div>
          <p className="text-[#F7F3EC]/70 text-[0.875rem] mt-6">
            Or call <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="text-[#C9A961] hover:underline inline-flex items-center justify-center min-h-[48px] px-2 -mx-2">347-378-7827</a>.
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
