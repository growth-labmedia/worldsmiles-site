import { Phone, ChevronDown, Check, AlertTriangle, Printer } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function PatientInstructionsPage() {
  usePageMeta('PatientInstructionsPage');

  return (
    <>
      
      {/* HERO SECTION */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
            POST-PROCEDURE CARE
          </span>
          <h1 className="text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-serif font-medium mt-4 text-[#0A0A0A]">
            How to care for yourself after each treatment.
          </h1>
          <p className="mt-6 text-[1.125rem] leading-[1.65] text-[#5C5C5C] max-w-[62ch] mx-auto font-sans">
            Most of what makes a procedure heal well happens at home — what you eat, how you brush, what you avoid, and when you call us. The instructions below cover the most common treatments we perform. Find your procedure below, save this page on your phone, and call us at <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center -my-3 px-1 text-[#C9A961] hover:underline font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded">347-378-7827</a> if anything {"doesn't"} seem right.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
            <a 
              href="tel:+13473787827" 
              aria-label="Call World Smiles Prosthodontics at 347-378-7827"
              className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              <span>Call us: 347-378-7827</span>
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 print:hidden"
            >
              <Printer className="w-4 h-4" strokeWidth={2} />
              Print instructions
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — EMERGENCY CALLOUT */}
      <section className="bg-white py-8 md:py-10">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <div className="border-l-4 border-[#A23B3B] bg-[#FAF7F1] rounded-lg p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-[#A23B3B] w-6 h-6 shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <h2 className="font-serif text-[1.125rem] font-medium text-[#0A0A0A]">
                  If this is a true emergency
                </h2>
                <p className="text-[0.9375rem] leading-[1.6] text-[#1B1B1B] mt-2 font-sans">
                  Call 911 or go to the nearest emergency room if you experience severe swelling {"that's"} affecting breathing or swallowing, uncontrolled bleeding, or any other life-threatening symptom. For urgent dental concerns that {"aren't"} life-threatening, call our office at <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center -my-3 px-1 text-[#C9A961] hover:underline font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded">347-378-7827</a> — we return urgent calls promptly during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — GENERAL GUIDELINES */}
      <section className="bg-white py-14 md:py-18 border-t border-[#E7E2D8]/50">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
              AFTER ANY PROCEDURE
            </span>
            <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-serif font-semibold mt-4 text-[#0A0A0A]">
              General guidelines that apply to everyone.
            </h2>
            <p className="text-center max-w-[60ch] mx-auto mt-4 text-[1rem] leading-[1.65] text-[#5C5C5C] font-sans">
              Find your specific procedure below for detailed instructions. The points here apply across all treatments.
            </p>
          </div>
          
          <div className="mt-8 space-y-4 max-w-[680px] mx-auto">
            {[
              "Avoid hard or sticky foods for at least 24 hours — they can damage restorations and dislodge dressings. Hard candies, ice, chewing gum, taffy, popcorn kernels, nuts.",
              "Don't chew ice. Ever. This applies for life, not just post-procedure — chewing ice cracks teeth and breaks restorations.",
              "Follow any prescription medication instructions exactly. If you were prescribed antibiotics, finish the entire course even if you feel better.",
              "Maintain normal oral hygiene unless your specific instructions say otherwise. Brushing and flossing don't pause because you had treatment — they help everything heal.",
              "Drink plenty of water. Hydration affects healing.",
              "Call us if something doesn't feel right. We'd rather you call about something that turns out to be nothing than not call about something that needed attention."
            ].map((guideline, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#FAF7F1] p-4 rounded-xl border border-[#E7E2D8]/30">
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#C9A961]/15 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#C9A961]" strokeWidth={3} />
                </div>
                <p className="text-[0.9375rem] leading-[1.6] text-[#1B1B1B] font-sans">
                  {guideline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FIND YOUR PROCEDURE */}
      <section className="bg-[#FAF7F1] py-16 md:py-20 border-t border-[#E7E2D8]/50">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
              PROCEDURE-SPECIFIC INSTRUCTIONS
            </span>
            <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-serif font-semibold mt-4 text-[#0A0A0A]">
              Find your treatment below.
            </h2>
            <p className="text-center max-w-[60ch] mx-auto mt-4 text-[1rem] leading-[1.65] text-[#5C5C5C] font-sans">
              Click your procedure to expand the instructions. Save or screenshot the relevant section for easy reference.
            </p>
          </div>

          <div className="mt-10 space-y-3 max-w-[800px] mx-auto">
            
            {/* ACCORDION 1 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none hover:bg-[#FAF7F1]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-inset rounded-xl">
                <h3 className="font-serif text-[1.0625rem] md:text-[1.125rem] font-medium text-[#0A0A0A]">
                  After Implant Surgery
                </h3>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-6 pt-2 border-t border-[#E7E2D8]/20 bg-[#FAF7F1]/10">
                <p className="text-[0.9375rem] text-[#5C5C5C] font-sans italic mb-4">
                  {"Implant placement is oral surgery. Healing well over the first week is essential to long-term success."}
                </p>
                <ul className="text-[#1B1B1B] text-[0.9375rem] leading-[1.65] space-y-2 list-disc pl-5 font-sans">
                  <li>Bite firmly on the gauze placed by the doctor for 30–60 minutes after surgery to control bleeding. Some oozing for the first 24–48 hours is normal.</li>
                  <li>Apply ice to the outside of your face for the first 24 hours — 20 minutes on, 20 minutes off — to reduce swelling. After 24 hours, switch to warm compresses if helpful.</li>
                  <li>Take all prescribed medications (pain medication, antibiotics) exactly as directed. Do not skip antibiotic doses.</li>
                  <li>Eat only soft, cool foods for the first 24 hours. Avoid hot foods and liquids that day — heat increases bleeding.</li>
                  <li>Do not disturb the surgical site with your tongue, fingers, or a toothbrush.</li>
                  <li>Do not rinse vigorously, spit forcefully, or use a straw for the first 24 hours. After 24 hours, gentle salt-water rinses (½ tsp salt in 8 oz warm water) 4–5 times daily.</li>
                  <li>No smoking. Smoking dramatically delays healing and significantly increases implant failure risk.</li>
                  <li>Sleep with your head elevated on extra pillows for the first 2–3 nights.</li>
                  <li>Avoid strenuous exercise or heavy lifting for at least 48 hours.</li>
                  <li>{"Stitches typically dissolve within 7–10 days. Don't pull at them."}</li>
                  <li>{"Call us if: bleeding doesn't stop after 24 hours, swelling worsens after day 3, fever develops, pain isn't controlled by your prescription, or anything feels significantly off."}</li>
                </ul>
              </div>
            </details>

            {/* ACCORDION 2 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none hover:bg-[#FAF7F1]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-inset rounded-xl">
                <h3 className="font-serif text-[1.0625rem] md:text-[1.125rem] font-medium text-[#0A0A0A]">
                  After a Root Canal
                </h3>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-6 pt-2 border-t border-[#E7E2D8]/20 bg-[#FAF7F1]/10">
                <p className="text-[0.9375rem] text-[#5C5C5C] font-sans italic mb-4">
                  {"The treated tooth needs protection until the final restoration (usually a crown) is placed."}
                </p>
                <ul className="text-[#1B1B1B] text-[0.9375rem] leading-[1.65] space-y-2 list-disc pl-5 font-sans">
                  <li>Numbness from the anesthesia lasts a few hours. Avoid eating until it wears off — you can bite your cheek or tongue without realizing it.</li>
                  <li>Mild discomfort, sensitivity, or a "bruised" feeling around the tooth is normal for a few days. Take over-the-counter ibuprofen (if your medical history allows) as directed on the package.</li>
                  <li>Do not chew on the treated tooth until the permanent restoration is placed — chewing on a tooth with only a temporary filling can fracture it.</li>
                  <li>Continue brushing and flossing normally, including around the treated tooth. Be gentle.</li>
                  <li>Call us if: severe pain develops, swelling occurs, the temporary filling falls out, or symptoms get worse rather than better over a few days.</li>
                </ul>
              </div>
            </details>

            {/* ACCORDION 3 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none hover:bg-[#FAF7F1]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-inset rounded-xl">
                <h3 className="font-serif text-[1.0625rem] md:text-[1.125rem] font-medium text-[#0A0A0A]">
                  After Crown Lengthening
                </h3>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-6 pt-2 border-t border-[#E7E2D8]/20 bg-[#FAF7F1]/10">
                <p className="text-[0.9375rem] text-[#5C5C5C] font-sans italic mb-4">
                  {"A small surgical procedure on the gum tissue around a tooth. Recovery is similar to a minor oral surgery."}
                </p>
                <ul className="text-[#1B1B1B] text-[0.9375rem] leading-[1.65] space-y-2 list-disc pl-5 font-sans">
                  <li>Some bleeding and swelling in the first 24–48 hours is normal.</li>
                  <li>Apply ice to the outside of your face — 20 minutes on, 20 off — for the first 24 hours to manage swelling.</li>
                  <li>Take prescribed pain medication as directed.</li>
                  <li>Eat soft foods, avoiding the surgical area when chewing, for the first several days.</li>
                  <li>Do not rinse vigorously for the first 24 hours. After that, gentle salt-water rinses 3–4 times daily.</li>
                  <li>Maintain oral hygiene on teeth away from the surgical site as usual. Avoid brushing directly over the surgical area until cleared at your follow-up.</li>
                  <li>Stitches may dissolve on their own or may need to be removed at your follow-up appointment.</li>
                  <li>Call us if: bleeding persists beyond 24 hours, swelling worsens after day 3, or anything feels significantly off.</li>
                </ul>
              </div>
            </details>

            {/* ACCORDION 4 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none hover:bg-[#FAF7F1]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-inset rounded-xl">
                <h3 className="font-serif text-[1.0625rem] md:text-[1.125rem] font-medium text-[#0A0A0A]">
                  After a Crown, Bridge, Inlay, or Onlay
                </h3>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-6 pt-2 border-t border-[#E7E2D8]/20 bg-[#FAF7F1]/10">
                <p className="text-[0.9375rem] text-[#5C5C5C] font-sans italic mb-4">
                  {"Whether you just received a temporary or the final restoration, the first few days require care."}
                </p>
                <ul className="text-[#1B1B1B] text-[0.9375rem] leading-[1.65] space-y-2 list-disc pl-5 font-sans">
                  <li>Mild sensitivity to hot, cold, or pressure for several days is normal and usually fades over 1–2 weeks.</li>
                  <li>Avoid sticky and hard foods for the first 24 hours — chewing gum, caramel, hard candy, ice.</li>
                  <li>For temporary restorations specifically: avoid sticky foods entirely until your final restoration is placed (temporaries can come off when something pulls hard on them).</li>
                  <li>Continue brushing normally. Floss carefully — for bridges and crowns, slide the floss out the side rather than snapping it up, which can dislodge a temporary.</li>
                  <li>Your bite may feel slightly different at first as you adapt. If it still feels off after a few days, call us — small adjustments are easy to make.</li>
                  <li>Call us if: a temporary comes off, severe sensitivity develops, your bite feels noticeably wrong after 3–4 days, or anything seems off.</li>
                </ul>
              </div>
            </details>

            {/* ACCORDION 5 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none hover:bg-[#FAF7F1]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-inset rounded-xl">
                <h3 className="font-serif text-[1.0625rem] md:text-[1.125rem] font-medium text-[#0A0A0A]">
                  After Denture or Partial Delivery
                </h3>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-6 pt-2 border-t border-[#E7E2D8]/20 bg-[#FAF7F1]/10">
                <p className="text-[0.9375rem] text-[#5C5C5C] font-sans italic mb-4">
                  {"New dentures take adjustment. The first few weeks involve changes to how you talk, eat, and produce saliva."}
                </p>
                <ul className="text-[#1B1B1B] text-[0.9375rem] leading-[1.65] space-y-2 list-disc pl-5 font-sans">
                  <li>Expect new sensations: extra saliva production, mild soreness in spots, slightly altered speech. All normal and improving over 1–4 weeks.</li>
                  <li>Wear your dentures as instructed by the doctor — typically all day initially, including during meals, so your tissues adapt and we can identify any sore spots at follow-up.</li>
                  <li>Practice speaking out loud — read aloud or have a conversation. Speech adjusts as your tongue learns the new shape.</li>
                  <li>Start with soft foods cut into small pieces. Chew on both sides simultaneously to distribute pressure.</li>
                  <li>Sore spots are common in the first few days. Call us so we can adjust the denture — do NOT try to file or adjust it yourself.</li>
                  <li>Remove and rinse your denture after each meal.</li>
                  <li>Unless told otherwise, do not wear your denture at night. Tissues need a break.</li>
                  <li>Clean your denture daily with a denture brush and denture cleaner. Soak overnight in denture solution (or water if instructed).</li>
                  <li>Clean your gums, tongue, and any remaining teeth with a soft toothbrush daily.</li>
                  <li>Never soak dentures in hot water — it can warp them.</li>
                </ul>
              </div>
            </details>

            {/* ACCORDION 6 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none hover:bg-[#FAF7F1]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-inset rounded-xl">
                <h3 className="font-serif text-[1.0625rem] md:text-[1.125rem] font-medium text-[#0A0A0A]">
                  After a Tooth Extraction
                </h3>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-6 pt-2 border-t border-[#E7E2D8]/20 bg-[#FAF7F1]/10">
                <p className="text-[0.9375rem] text-[#5C5C5C] font-sans italic mb-4">
                  {"Protecting the blood clot that forms in the socket is the single most important thing for the first 24–48 hours."}
                </p>
                <ul className="text-[#1B1B1B] text-[0.9375rem] leading-[1.65] space-y-2 list-disc pl-5 font-sans">
                  <li>Bite firmly on the gauze placed by the doctor for 30–45 minutes to control bleeding. Replace with fresh gauze if needed.</li>
                  <li>{"Apply ice to your face on the outside of the extraction site — 20 minutes on, 20 off — for the first 24 hours."}</li>
                  <li>DO NOT rinse, spit forcefully, or use a straw for the first 24 hours. These actions can dislodge the clot and cause a painful complication called dry socket.</li>
                  <li>DO NOT smoke. Beyond clot disruption, smoking significantly slows healing.</li>
                  <li>Eat only soft, cool foods for the first 24 hours: yogurt, applesauce, pudding, soup (not hot).</li>
                  <li>Sleep with your head elevated on extra pillows for the first 2 nights.</li>
                  <li>{"After 24 hours: gentle salt-water rinses (½ tsp salt in 8 oz warm water) 3–4 times daily, especially after eating, to keep the socket clean."}</li>
                  <li>Continue brushing teeth normally, but avoid the extraction area itself for the first 2–3 days.</li>
                  <li>Take prescribed pain medication and antibiotics (if given) as directed.</li>
                  <li>{"Some swelling that peaks around day 2–3 is normal. It should improve from there."}</li>
                  <li>{"Call us if: severe pain develops 3+ days after extraction (possible dry socket), excessive bleeding persists, swelling worsens after day 3, fever develops, or anything feels significantly wrong."}</li>
                </ul>
              </div>
            </details>

            {/* ACCORDION 7 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none hover:bg-[#FAF7F1]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-inset rounded-xl">
                <h3 className="font-serif text-[1.0625rem] md:text-[1.125rem] font-medium text-[#0A0A0A]">
                  After a Filling
                </h3>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-6 pt-2 border-t border-[#E7E2D8]/20 bg-[#FAF7F1]/10">
                <p className="text-[0.9375rem] text-[#5C5C5C] font-sans italic mb-4">
                  {"Most fillings require minimal aftercare. A few specifics depending on what type you received."}
                </p>
                <ul className="text-[#1B1B1B] text-[0.9375rem] leading-[1.65] space-y-2 list-disc pl-5 font-sans">
                  <li>{"Numbness from the anesthesia lasts a few hours. Avoid eating until it wears off to prevent biting your cheek or tongue accidentally."}</li>
                  <li>{"Composite (white) fillings: you can eat normally as soon as the numbness wears off — they're fully hardened before you leave."}</li>
                  <li>Amalgam (silver) fillings: avoid chewing on the filling for the first 24 hours while the material fully sets.</li>
                  <li>Mild sensitivity to hot, cold, or pressure for a few days is normal, especially for deeper fillings. This usually fades over 1–2 weeks.</li>
                  <li>{"If your bite feels off — like the filling is \"tall\" or the upper and lower teeth aren't meeting evenly — call us. A small adjustment fixes this in 5 minutes."}</li>
                  <li>Call us if: sensitivity intensifies rather than improves over 2 weeks, sharp pain develops, or the filling feels loose.</li>
                </ul>
              </div>
            </details>

            {/* ACCORDION 8 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none hover:bg-[#FAF7F1]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-inset rounded-xl">
                <h3 className="font-serif text-[1.0625rem] md:text-[1.125rem] font-medium text-[#0A0A0A]">
                  After Teeth Whitening
                </h3>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-6 pt-2 border-t border-[#E7E2D8]/20 bg-[#FAF7F1]/10">
                <p className="text-[0.9375rem] text-[#5C5C5C] font-sans italic mb-4">
                  {"Whitening exposes teeth to peroxide, which can cause temporary sensitivity. The first 48 hours matter for color stability."}
                </p>
                <ul className="text-[#1B1B1B] text-[0.9375rem] leading-[1.65] space-y-2 list-disc pl-5 font-sans">
                  <li>Some sensitivity to hot and cold for 1–3 days after whitening is normal. Sensitivity toothpaste (containing potassium nitrate or stannous fluoride) helps.</li>
                  <li>{"AVOID staining foods and drinks for the first 48 hours: coffee, tea, red wine, cola, berries, beets, tomato sauce, soy sauce, mustard, curry. Anything that would stain a white shirt would stain your freshly whitened teeth."}</li>
                  <li>Avoid tobacco entirely during this window (and ideally beyond — tobacco rapidly re-stains).</li>
                  <li>Drink water and eat lighter-colored foods. White meats, rice, plain pasta, dairy, white fish, bananas.</li>
                  <li>Continue brushing and flossing normally.</li>
                  <li>Touch-up treatments at home (if prescribed) maintain results — follow the schedule we gave you.</li>
                  <li>Call us if: sensitivity is severe and not relieved by sensitivity toothpaste, or gums become irritated where the whitening tray sat.</li>
                </ul>
              </div>
            </details>

            {/* ACCORDION 9 */}
            <details className="group bg-white rounded-xl border border-[#E7E2D8] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none hover:bg-[#FAF7F1]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-inset rounded-xl">
                <h3 className="font-serif text-[1.0625rem] md:text-[1.125rem] font-medium text-[#0A0A0A]">
                  Wearing a Removable Appliance
                </h3>
                <ChevronDown className="w-5 h-5 text-[#C9A961] transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" strokeWidth={2} />
              </summary>
              <div className="px-5 pb-6 pt-2 border-t border-[#E7E2D8]/20 bg-[#FAF7F1]/10">
                <p className="text-[0.9375rem] text-[#5C5C5C] font-sans italic mb-4">
                  {"Removable appliances take adjustment and require consistent care to last — including retainers, partials, mouthguards, and night guards."}
                </p>
                <ul className="text-[#1B1B1B] text-[0.9375rem] leading-[1.65] space-y-2 list-disc pl-5 font-sans">
                  <li>Wear the appliance for the schedule given to you — different appliances have different wear requirements.</li>
                  <li>Insert and remove with both hands, gently. Do not bite the appliance into place — this can crack it.</li>
                  <li>Speech may feel different for the first few days. Practice talking out loud at home to accelerate the adjustment.</li>
                  <li>Clean the appliance daily: rinse with cool water, brush gently with a soft toothbrush and mild liquid soap (not toothpaste — it can scratch the plastic), then rinse thoroughly.</li>
                  <li>{"NEVER use hot water. It warps appliances."}</li>
                  <li>{"Store the appliance in its case when not wearing it, away from pets (dogs love to chew them) and out of direct sunlight."}</li>
                  <li>Soak weekly in a denture-cleaner solution to remove buildup, unless we told you otherwise for your specific appliance.</li>
                  <li>Bring your appliance to every dental visit so we can check the fit and condition.</li>
                  <li>Call us if: the appliance cracks, develops a sharp edge, no longer fits properly, or causes persistent soreness.</li>
                </ul>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* SECTION 5 — WHEN TO CALL US */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-white">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
              WHEN TO CALL US
            </span>
            <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-serif font-semibold mt-4 text-white">
              Signs that need a phone call, regardless of the procedure.
            </h2>
          </div>
          
          <div className="mt-10 space-y-4 max-w-[680px] mx-auto">
            {[
              "Severe pain that isn't controlled by your prescribed or recommended pain medication",
              "Bleeding that doesn't stop or restart hours later (small amounts of oozing in the first day is normal; persistent bleeding is not)",
              "Swelling that worsens after day 3 instead of improving",
              "Fever above 100.4°F (38°C)",
              "A foul taste or smell from the treatment area that doesn't go away",
              "Sudden onset of severe pain 3+ days after an extraction (this can indicate dry socket and is treatable)",
              "A temporary crown or restoration that comes off or feels loose",
              "Numbness in the lip, chin, or tongue that doesn't resolve within 24 hours",
              "Any symptom that just doesn't feel right — trust your sense of your own body"
            ].map((sign, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#1B1B1B] p-4 rounded-xl border border-[#2A2A2A]">
                <AlertTriangle className="text-[#C9A961] w-5 h-5 shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-[0.9375rem] leading-[1.6] text-[#F7F3EC]/90 font-sans">
                  {sign}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-10 text-[#F7F3EC]/85 max-w-[60ch] mx-auto text-[0.9375rem] leading-[1.65] font-sans">
            Our number is <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center -my-3 px-1 text-[#C9A961] hover:text-[#DBC089] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded">347-378-7827</a>. Call during office hours for non-urgent issues, and follow the prompts for urgent after-hours concerns.
          </p>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="bg-white py-14 md:py-18 text-center border-t border-[#E7E2D8]/50 mb-20 md:mb-0">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
            REACH US
          </span>
          <h2 className="text-[1.5rem] md:text-[1.875rem] leading-[1.25] font-serif font-semibold mt-5 text-[#0A0A0A]">
            If something doesn't feel right, please call.
          </h2>
          <p className="mt-5 max-w-[60ch] mx-auto text-[1.025rem] leading-[1.65] text-[#5C5C5C] font-sans">
            We'd much rather hear from you about something that turns out to be normal healing than not hear from you about something that needed attention. There are no stupid questions after dental work.
          </p>
          <div className="mt-8">
            <a 
              href="tel:+13473787827" 
              aria-label="Call World Smiles Prosthodontics at 347-378-7827"
              className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              <span>Call 347-378-7827</span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
