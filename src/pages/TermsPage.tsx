import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Calendar, Mail, AlertCircle } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function TermsPage() {
  usePageMeta('TermsPage');

  return (
    <>
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#F7F3EC] py-14 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">LEGAL</span>
          <h1 className="mt-4 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            Terms of Use.
          </h1>
          <div className="mt-6 inline-flex items-center gap-2 text-[0.875rem] text-[#5C5C5C] justify-center">
            <Calendar className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
            <span>Last updated: <strong className="text-[#1B1B1B] font-semibold">[OPERATOR: insert effective date]</strong></span>
          </div>
          <p className="mt-7 text-[1.0625rem] text-[#1B1B1B] leading-[1.7] max-w-[58ch] mx-auto text-left">
            These Terms of Use govern your use of the World Smiles Prosthodontics website. They describe what you can and can't do on the site, what the site is for, what it isn't a substitute for, and how disputes are handled. If you become a patient, the terms of your treatment relationship are governed separately by your treatment agreements — not by this document.
          </p>
        </div>
      </section>

      {/* SECTION 2: TABLE OF CONTENTS */}
      <section className="bg-white py-10 md:py-12">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <div className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] p-6 md:p-7">
            <span className="block text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-4">ON THIS PAGE</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              <a href="#acceptance" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">01</span>
                <span>Acceptance of Terms</span>
              </a>
              <a href="#about" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">02</span>
                <span>About the Website</span>
              </a>
              <a href="#disclaimer" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">03</span>
                <span>Not Medical Advice</span>
              </a>
              <a href="#use" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">04</span>
                <span>Permitted Use</span>
              </a>
              <a href="#ip" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">05</span>
                <span>Intellectual Property</span>
              </a>
              <a href="#submissions" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">06</span>
                <span>Submissions and Communications</span>
              </a>
              <a href="#third-party" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">07</span>
                <span>Third-Party Links</span>
              </a>
              <a href="#liability" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">08</span>
                <span>Limitation of Liability</span>
              </a>
              <a href="#indemnification" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">09</span>
                <span>Indemnification</span>
              </a>
              <a href="#law" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">10</span>
                <span>Governing Law</span>
              </a>
              <a href="#changes" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">11</span>
                <span>Changes to These Terms</span>
              </a>
              <a href="#contact" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">12</span>
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TERMS CONTENT */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          
          {/* 01: Acceptance of Terms */}
          <section id="acceptance" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">01</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Acceptance of Terms</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>By accessing or using the World Smiles Prosthodontics website at worldsmilesnyc.com (the 'website,' 'our site,' or 'we'), you agree to be bound by these Terms of Use. If you do not agree, please discontinue use of the website.</p>
              <p>These terms apply to your use of the website itself. If you become a patient of our practice, the terms of your treatment relationship are governed separately by your treatment agreements, informed consent documents, and applicable healthcare regulations — not by this document.</p>
            </div>
          </section>

          {/* 02: About the Website */}
          <section id="about" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">02</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">About the Website</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>This website is operated by World Smiles Prosthodontics, a dental specialty practice located at 3121 Ocean Avenue, Suite 101, Brooklyn, NY 11235. The website provides information about our practice, the services we offer, the credentials of our practitioners, and how to contact us.</p>
              <p>The website exists to help you decide whether our practice is right for you, to answer common questions, and to facilitate scheduling a consultation. It is not a portal for ongoing patient care, treatment, or medical records access.</p>
            </div>
          </section>

          {/* 03: Not Medical Advice */}
          <section id="disclaimer" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">03</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Not Medical Advice</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <div className="bg-[#0A0A0A] text-white rounded-xl p-6 md:p-7 flex items-start gap-4 mb-7">
                <AlertCircle className="w-6 h-6 text-[#C9A961] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] md:text-[1.25rem] font-medium text-white mb-3">The website is not a substitute for professional medical care.</h3>
                  <p className="text-[0.9375rem] md:text-[1rem] text-[#F7F3EC]/90 leading-[1.65]">Information on this site is for general educational purposes only. It is not medical or dental advice, and using the website does not establish a doctor-patient relationship between you and our practice or any of its practitioners.</p>
                </div>
              </div>
              <p>Information about dental conditions, procedures, costs, timelines, and outcomes presented on this website is general — it does not account for your specific medical history, current condition, or individual circumstances. Do not rely on website content alone to make medical or dental decisions.</p>
              <p>Descriptions of treatments, procedures, and typical outcomes reflect general cases. Individual results vary. The fact that a treatment is described here does not mean it is appropriate for your specific case, and the fact that a treatment is not described does not mean we do not offer it.</p>
              <p>References to typical pricing or pricing ranges are general estimates that may not reflect what your specific case will cost. Final pricing for any treatment is provided in writing only after a consultation.</p>
              <p>Always consult a qualified dental or medical professional for advice specific to your situation. If you are a current patient of our practice, contact us directly for guidance on your treatment.</p>
              <h3 className="text-[1.25rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] mt-8 mb-2">Emergencies</h3>
              <p>For dental or medical emergencies, do not use the website to seek care. Severe pain, swelling, bleeding that won't stop, trauma, or any situation that may be life-threatening requires immediate medical attention. Call 911 or go to your nearest emergency room. Contact us for follow-up care only after the emergency has been addressed.</p>
            </div>
          </section>

          {/* 04: Permitted Use */}
          <section id="use" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">04</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Permitted Use</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>You may use this website for personal, non-commercial purposes consistent with these terms. You agree not to:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>Use the website in any way that violates applicable law or regulation</li>
                <li>Attempt to gain unauthorized access to any part of the website, its servers, or related infrastructure</li>
                <li>Use automated tools — bots, scrapers, crawlers, or similar — to access or harvest information from the website without our written permission</li>
                <li>Interfere with or disrupt the website's functionality, performance, or security</li>
                <li>Use the website to transmit harmful code, malware, viruses, or unsolicited communications</li>
                <li>Impersonate another person or misrepresent your identity in any submission</li>
                <li>Use the website's content, branding, or photography in any way that suggests endorsement, affiliation, or association without our written permission</li>
              </ul>
            </div>
          </section>

          {/* 05: Intellectual Property */}
          <section id="ip" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">05</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Intellectual Property</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>All content on this website — including text, photographs, before-and-after images, illustrations, logos, designs, layout, code, and other materials — is the property of World Smiles Prosthodontics or its licensors. This content is protected by U.S. and international copyright, trademark, and other intellectual property laws.</p>
              <p>You may view and print pages from the website for personal, non-commercial reference. Any other use — including reproduction, distribution, modification, public display, commercial use, or use in derivative works — requires our prior written permission.</p>
              <p>Patient before-and-after photographs shown on the website are used with explicit patient consent and remain the property of the practice. They may not be reproduced or used in any context outside this website.</p>
            </div>
          </section>

          {/* 06: Submissions and Communications */}
          <section id="submissions" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">06</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Submissions and Communications</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Information you submit through the website — through the contact form, by email, or by other means — is handled according to our <a href='/privacy' className='text-[#C9A961] hover:text-[#A8893F] underline'>Privacy Policy</a>.</p>
              <p>Note that communications submitted through the contact form and standard email are not encrypted end-to-end. While we take reasonable security precautions, you should not send detailed protected health information through these channels. For sensitive information, please call us directly or schedule an in-person appointment.</p>
              <p>By submitting information through the website, you confirm that the information is accurate to the best of your knowledge and that you have the right to submit it. You grant us a non-exclusive license to use the submitted information for the purpose of responding to your inquiry, providing the services you've requested, and operating the practice in accordance with our Privacy Policy.</p>
            </div>
          </section>

          {/* 07: Third-Party Links */}
          <section id="third-party" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">07</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Third-Party Links and Content</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Our website may contain links to third-party websites or services — including review platforms such as Google and Zocdoc, mapping services, financing partners, and others. These third parties have their own terms of use, privacy policies, and content practices that we do not control.</p>
              <p>We are not responsible for the content, practices, accuracy, or any consequences of your interaction with third-party services. A link from our website to a third party does not constitute our endorsement of that third party or its content.</p>
            </div>
          </section>

          {/* 08: Limitation of Liability */}
          <section id="liability" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">08</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Limitation of Liability</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>To the fullest extent permitted by applicable law, World Smiles Prosthodontics and its owners, employees, contractors, and licensors are not liable for any of the following arising from your use of the website:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>Decisions you make based on information from the website</li>
                <li>Damages or losses resulting from your use of, or inability to use, the website</li>
                <li>Damages or losses resulting from third-party content linked from the website</li>
                <li>Errors, omissions, or inaccuracies in website content</li>
                <li>Interruptions in website availability, including from maintenance or technical issues</li>
                <li>Loss of data, profits, or business opportunities</li>
              </ul>
              <p>This limitation applies whether the claim is based on contract, tort, statute, or any other legal theory, and even if we have been advised of the possibility of such damages.</p>
              <p>Nothing in these terms limits any liability that cannot be limited under applicable law — including, in the patient context, any liability arising under our professional licensing obligations, state law, or federal regulations governing healthcare providers.</p>
            </div>
          </section>

          {/* 09: Indemnification */}
          <section id="indemnification" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">09</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Indemnification</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>You agree to indemnify and hold harmless World Smiles Prosthodontics and its owners, employees, and contractors from any claims, damages, losses, liabilities, or expenses (including reasonable attorneys' fees) arising from your violation of these Terms of Use or your misuse of the website.</p>
            </div>
          </section>

          {/* 10: Governing Law */}
          <section id="law" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">10</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Governing Law and Disputes</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>These Terms of Use are governed by the laws of the State of New York, without regard to its conflict-of-laws principles.</p>
              <p>Any disputes arising from your use of the website will be resolved in the state or federal courts located in Kings County, New York, and you consent to the jurisdiction of those courts. If you are not able to bring a claim in that venue, the venue will be determined by applicable law.</p>
              <p>If any provision of these terms is found unenforceable by a court of competent jurisdiction, the remaining provisions remain in full effect.</p>
            </div>
          </section>

          {/* 11: Changes to These Terms */}
          <section id="changes" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">11</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Changes to These Terms</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>We may update these Terms of Use from time to time to reflect changes in our practices, our website, or applicable law. When we do, we'll update the 'Last Updated' date at the top of this page.</p>
              <p>Your continued use of the website after a change constitutes your acceptance of the updated terms. We recommend reviewing this page periodically.</p>
            </div>
          </section>

          {/* 12: Contact */}
          <section id="contact" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">12</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Contact</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Questions about these Terms of Use should be directed to:</p>
              <div className="bg-[#F7F3EC] rounded-xl p-6 md:p-7 mt-5">
                <h3 className="font-medium text-[1.0625rem] text-[#0A0A0A] mb-3">World Smiles Prosthodontics</h3>
                <address className="not-italic">
                  <p className="text-[0.9375rem] text-[#1B1B1B]">3121 Ocean Avenue, Suite 101, Brooklyn, NY 11235</p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
                    <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="text-[#1B1B1B] hover:text-[#C9A961] transition-colors">347-378-7827</a>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
                    <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="text-[#1B1B1B] hover:text-[#C9A961] break-all transition-colors">info@worldsmilesnyc.com</a>
                  </div>
                </address>
              </div>
            </div>
          </section>
          
        </div>
      </section>

      {/* SECTION 4: SOFT CTA */}
      <section className="bg-[#F7F3EC] py-12 md:py-16 text-center">
        <div className="max-w-[680px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">QUESTIONS?</span>
          <h2 className="mt-3 text-[1.5rem] md:text-[1.75rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            If anything here needs clarifying, ask us.
          </h2>
          <p className="mt-4 text-[1rem] text-[#5C5C5C] leading-[1.65]">
            Terms documents are by nature formal. If you have a specific question about how anything here applies to you, we'd rather you ask than guess.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC]">
              Contact Us
            </Link>
            <Link to="/privacy" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group px-6 py-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC]">
              View our Privacy Policy
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
