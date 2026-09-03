import { Phone, ChevronDown, ShieldCheck, ClipboardList, Lock, Clock, Smartphone, Sparkles } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function PatientFormsPage() {
  usePageMeta('PatientFormsPage');

  return (
    <>
      
      {/* SECTION 1 — HERO */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">PATIENT FORMS · SECURE ONLINE INTAKE</span>
          <h1 className="text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-serif font-medium mt-4 text-[#0A0A0A]">
            Save twenty minutes of your first visit. Fill the forms out before you arrive.
          </h1>
          <p className="mt-6 text-[1.125rem] leading-[1.65] text-[#5C5C5C] max-w-[58ch] mx-auto">
            World Smiles uses a secure online portal for new-patient intake. Three short forms — medical history, dental concerns, and HIPAA acknowledgment — take about ten minutes to complete on any phone, tablet, or computer. Submit them ahead of time and walk into your appointment ready to talk about your teeth instead of paperwork.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <a 
              href="https://patientviewer.com/WebFormsGWT/GWT/WebForms/WebForms.html?DOID=118416&RKID=41212&WSDID=154805&NFID=154808&NFID=156272&NFID=156281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-7 py-3.5 rounded-lg text-[1rem] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2 min-h-[48px]"
            >
              Start Patient Forms →
            </a>
            <a 
              href="tel:+13473787827" 
              aria-label="Call World Smiles Prosthodontics at 347-378-7827"
              className="inline-flex items-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold group py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A961] min-h-[48px]"
            >
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              Or call 347-378-7827
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.875rem] text-[#5C5C5C]">
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} /> HIPAA-compliant</span>
            <span aria-hidden="true" className="font-bold">·</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} /> About 10 minutes</span>
            <span aria-hidden="true" className="font-bold">·</span>
            <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} /> Mobile-friendly</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT'S IN THE PACKET */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">WHAT'S IN THE PACKET</span>
            <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-serif font-medium mt-3 text-[#0A0A0A]">
              Three forms. About ten minutes.
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.65] text-[#5C5C5C] max-w-[60ch] mx-auto">
              Everything in the patient packet exists for a reason. World Smiles uses the information directly during your consultation — incomplete records lead to incomplete plans. Here's what you'll cover and why.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="p-6 bg-white border border-[#E7E2D8] rounded-xl flex flex-col justify-between hover:shadow-md transition duration-200">
              <div>
                <div className="w-12 h-12 bg-[#F7F3EC] rounded-lg flex items-center justify-center mb-5">
                  <ClipboardList className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <h4 className="text-[1.25rem] leading-[1.3] font-serif font-medium text-[#0A0A0A] mb-3">
                  Your medical history
                </h4>
                <p className="text-[0.9375rem] leading-[1.6] text-[#5C5C5C]">
                  Conditions you've been treated for, medications you take, allergies, and any recent surgeries or hospitalizations. Medical conditions affect dental treatment plans, and many medications change what we can prescribe safely. The more complete your history, the safer and more effective your care.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="p-6 bg-white border border-[#E7E2D8] rounded-xl flex flex-col justify-between hover:shadow-md transition duration-200">
              <div>
                <div className="w-12 h-12 bg-[#F7F3EC] rounded-lg flex items-center justify-center mb-5">
                  <Sparkles className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <h4 className="text-[1.25rem] leading-[1.3] font-serif font-medium text-[#0A0A0A] mb-3">
                  Your dental history and concerns
                </h4>
                <p className="text-[0.9375rem] leading-[1.6] text-[#5C5C5C]">
                  Past dental work, recurring issues, what's bothering you right now, and what you'd want addressed if everything were possible. This is the form the doctor reads most closely — your concerns drive what we examine first and how we structure your plan.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="p-6 bg-white border border-[#E7E2D8] rounded-xl flex flex-col justify-between hover:shadow-md transition duration-200">
              <div>
                <div className="w-12 h-12 bg-[#F7F3EC] rounded-lg flex items-center justify-center mb-5">
                  <ShieldCheck className="w-7 h-7 text-[#C9A961]" strokeWidth={1.75} />
                </div>
                <h4 className="text-[1.25rem] leading-[1.3] font-serif font-medium text-[#0A0A0A] mb-3">
                  Consent and HIPAA acknowledgment
                </h4>
                <p className="text-[0.9375rem] leading-[1.6] text-[#5C5C5C]">
                  Standard consent for examination and HIPAA Notice of Privacy Practices acknowledgment. Reviewed and signed digitally. Required by law for every new patient at any medical office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW THE FORM PORTAL WORKS */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">WALKTHROUGH</span>
            <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-serif font-medium mt-3 text-[#0A0A0A]">
              What happens when you click 'Start Patient Forms.'
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* STEP 01 */}
            <div className="flex gap-4">
              <span className="text-[3rem] font-serif font-medium text-[#C9A961] leading-none select-none">01</span>
              <div>
                <h4 className="text-[1.25rem] font-serif font-medium text-[#0A0A0A] mb-2">
                  You're routed to our secure portal
                </h4>
                <p className="text-[1rem] leading-[1.65] text-[#5C5C5C]">
                  The button opens our intake portal in a new tab, hosted by Henry Schein PatientViewer — the same HIPAA-compliant system used by thousands of dental practices nationwide. You'll see World Smiles practice info at the top to confirm you're in the right place.
                </p>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="flex gap-4">
              <span className="text-[3rem] font-serif font-medium text-[#C9A961] leading-none select-none">02</span>
              <div>
                <h4 className="text-[1.25rem] font-serif font-medium text-[#0A0A0A] mb-2">
                  You complete the three forms in order
                </h4>
                <p className="text-[1rem] leading-[1.65] text-[#5C5C5C]">
                  The portal walks you through each form one at a time. You can save progress and come back later if needed. Most patients finish all three in about ten minutes on a phone, tablet, or computer.
                </p>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="flex gap-4">
              <span className="text-[3rem] font-serif font-medium text-[#C9A961] leading-none select-none">03</span>
              <div>
                <h4 className="text-[1.25rem] font-serif font-medium text-[#0A0A0A] mb-2">
                  Forms submit directly to our office
                </h4>
                <p className="text-[1rem] leading-[1.65] text-[#5C5C5C]">
                  When you tap Submit, your responses are encrypted and sent to World Smiles' practice management system in real time. You'll see a confirmation screen. We receive them immediately.
                </p>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="flex gap-4">
              <span className="text-[3rem] font-serif font-medium text-[#C9A961] leading-none select-none">04</span>
              <div>
                <h4 className="text-[1.25rem] font-serif font-medium text-[#0A0A0A] mb-2">
                  We review them before your appointment
                </h4>
                <p className="text-[1rem] leading-[1.65] text-[#5C5C5C]">
                  Your medical and dental history is reviewed before you walk in. By the time you sit down, the doctor is already familiar with your case — which is why your consultation can spend its time on the actual conversation instead of intake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PRIMARY CTA BLOCK */}
      <section className="bg-white py-14 md:py-18">
        <div className="max-w-[760px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">READY TO GET STARTED</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-serif font-medium mt-3 text-[#0A0A0A]">
            Complete your forms now. Walk in ready.
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.65] text-[#5C5C5C] max-w-[60ch] mx-auto">
            About ten minutes. Mobile-friendly. Encrypted submission. If you'd rather complete them in the office or by phone, that's fine too — just call us.
          </p>
          
          <div className="mt-8">
            <a 
              href="https://patientviewer.com/WebFormsGWT/GWT/WebForms/WebForms.html?DOID=118416&RKID=41212&WSDID=154805&NFID=154808&NFID=156272&NFID=156281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-7 py-3.5 rounded-lg text-[1rem] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2"
            >
              Start Patient Forms →
            </a>
          </div>
          
          <p className="mt-4 text-[0.8125rem] text-[#5C5C5C]">
            Or call <a 
              href="tel:+13473787827" 
              aria-label="Call World Smiles Prosthodontics at 347-378-7827"
              className="text-[#0A0A0A] font-semibold hover:underline inline-block py-3 -my-3 min-h-[48px] content-center"
            >347-378-7827</a> — we can mail you a paper packet or take your information over the phone.
          </p>
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="bg-[#FAF7F1] py-16 md:py-20 border-t border-[#E7E2D8]/50">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">COMMON QUESTIONS</span>
            <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-serif font-medium mt-3 text-[#0A0A0A]">
              About our patient forms.
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ Q1 */}
            <details className="group border border-[#E7E2D8] bg-white rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none font-medium text-[1.125rem] font-serif text-[#0A0A0A] bg-white hover:bg-[#FAF7F1]/50 transition-colors focus:outline-none focus:bg-[#FAF7F1]">
                <span>Is my information secure?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-5 text-[1rem] leading-[1.65] text-[#5C5C5C] bg-white border-t border-dashed border-[#E7E2D8] pt-4">
                Yes. The forms are hosted by Henry Schein PatientViewer, a HIPAA-compliant patient intake system used by thousands of dental and medical practices. Your data is encrypted in transit and at rest. Only authorized World Smiles staff have access to your records.
              </div>
            </details>

            {/* FAQ Q2 */}
            <details className="group border border-[#E7E2D8] bg-white rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none font-medium text-[1.125rem] font-serif text-[#0A0A0A] bg-white hover:bg-[#FAF7F1]/50 transition-colors focus:outline-none focus:bg-[#FAF7F1]">
                <span>Can I fill these out on my phone?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-5 text-[1rem] leading-[1.65] text-[#5C5C5C] bg-white border-t border-dashed border-[#E7E2D8] pt-4">
                Yes. The forms work on any smartphone, tablet, or computer with internet access. Most patients complete them on their phone in about ten minutes.
              </div>
            </details>

            {/* FAQ Q3 */}
            <details className="group border border-[#E7E2D8] bg-white rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none font-medium text-[1.125rem] font-serif text-[#0A0A0A] bg-white hover:bg-[#FAF7F1]/50 transition-colors focus:outline-none focus:bg-[#FAF7F1]">
                <span>What if I don't have all the information handy — like a list of my medications?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-5 text-[1rem] leading-[1.65] text-[#5C5C5C] bg-white border-t border-dashed border-[#E7E2D8] pt-4">
                Save your progress and come back to finish later. If you don't remember the exact name of a medication, write what you know — "the blue blood pressure pill" is more useful than nothing. We'll clarify in the consultation.
              </div>
            </details>

            {/* FAQ Q4 */}
            <details className="group border border-[#E7E2D8] bg-white rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none font-medium text-[1.125rem] font-serif text-[#0A0A0A] bg-white hover:bg-[#FAF7F1]/50 transition-colors focus:outline-none focus:bg-[#FAF7F1]">
                <span>Do I have to complete the forms online, or can I do them in the office?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-5 text-[1rem] leading-[1.65] text-[#5C5C5C] bg-white border-t border-dashed border-[#E7E2D8] pt-4">
                Either works. If you prefer to fill them out in the office, plan to arrive about 20 minutes before your appointment time. If you'd like a paper packet mailed to you ahead of time, call <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="text-[#0A0A0A] font-semibold hover:underline inline-block py-2 -my-2 min-h-[48px] content-center">347-378-7827</a> and we'll send one.
              </div>
            </details>

            {/* FAQ Q5 */}
            <details className="group border border-[#E7E2D8] bg-white rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none font-medium text-[1.125rem] font-serif text-[#0A0A0A] bg-white hover:bg-[#FAF7F1]/50 transition-colors focus:outline-none focus:bg-[#FAF7F1]">
                <span>What if I have records from another dentist — can I just send those?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-5 text-[1rem] leading-[1.65] text-[#5C5C5C] bg-white border-t border-dashed border-[#E7E2D8] pt-4">
                We need our own forms on file for legal and clinical reasons, but please bring any records you have from previous dentists. Treatment plans, X-rays, lists of past procedures — all of it is useful context, even if it duplicates what's on our intake. Email them ahead to <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="text-[#0A0A0A] font-semibold hover:underline inline-block py-2 -my-2 min-h-[48px] content-center">info@worldsmilesnyc.com</a> or bring them to your appointment.
              </div>
            </details>

            {/* FAQ Q6 */}
            <details className="group border border-[#E7E2D8] bg-white rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none font-medium text-[1.125rem] font-serif text-[#0A0A0A] bg-white hover:bg-[#FAF7F1]/50 transition-colors focus:outline-none focus:bg-[#FAF7F1]">
                <span>I started the forms but didn't finish. Do I have to start over?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-5 text-[1rem] leading-[1.65] text-[#5C5C5C] bg-white border-t border-dashed border-[#E7E2D8] pt-4">
                The portal usually saves your progress automatically. If you get logged out, you may need to re-verify your identity to resume. If you have trouble, call us at <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="text-[#0A0A0A] font-semibold hover:underline inline-block py-2 -my-2 min-h-[48px] content-center">347-378-7827</a> — we can either help you over the phone or have a paper packet ready for you to complete in the office.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">WHEN YOU'RE READY</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-serif font-medium mt-3 text-white">
            Take ten minutes now. Skip twenty later.
          </h2>
          <p className="mt-4 text-[1.125rem] text-[#F7F3EC]/85 max-w-[50ch] mx-auto">
            Three forms, encrypted submission, mobile-friendly. Or call us if you'd rather do it by phone.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a 
              href="https://patientviewer.com/WebFormsGWT/GWT/WebForms/WebForms.html?DOID=118416&RKID=41212&WSDID=154805&NFID=154808&NFID=156272&NFID=156281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-7 py-3.5 rounded-lg text-[1rem] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2"
            >
              Start Patient Forms →
            </a>
            <a 
              href="tel:+13473787827" 
              aria-label="Call World Smiles Prosthodontics at 347-378-7827"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-7 py-3.5 rounded-lg text-[1rem] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] min-h-[48px]"
            >
              Call 347-378-7827
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
