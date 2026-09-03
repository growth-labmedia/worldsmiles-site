import { Link } from 'react-router-dom';
import { Phone, Calendar, Mail, AlertCircle } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function AccessibilityPage() {
  usePageMeta('AccessibilityPage');

  return (
    <>
      <section className="bg-[#F7F3EC] py-14 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">LEGAL</p>
          <h1 className="mt-4 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">Accessibility Statement.</h1>
          <div className="mt-6 inline-flex items-center gap-2 text-[0.875rem] text-[#5C5C5C] justify-center">
            <Calendar className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
            <span>Last updated: <strong className="text-[#1B1B1B] font-semibold">[OPERATOR: insert effective date]</strong></span>
          </div>
          <p className="mt-7 text-[1.0625rem] text-[#1B1B1B] leading-[1.7] max-w-[58ch] mx-auto text-left">
            World Smiles Prosthodontics is committed to making our practice accessible to all patients, including those with disabilities. This statement describes the steps we've taken to support accessibility on our website and at our physical office, where we know we still fall short, and how to ask for help if you encounter a barrier.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-12">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <div className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] p-6 md:p-7">
            <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-4">ON THIS PAGE</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              <a href="#commitment" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">01</span>
                <span>Our Commitment</span>
              </a>
              <a href="#standards" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">02</span>
                <span>Web Accessibility Standards</span>
              </a>
              <a href="#features" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">03</span>
                <span>Website Accessibility Features</span>
              </a>
              <a href="#office" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">04</span>
                <span>Physical Office Accessibility</span>
              </a>
              <a href="#limitations" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">05</span>
                <span>Known Limitations</span>
              </a>
              <a href="#accommodations" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">06</span>
                <span>Requesting Accommodations</span>
              </a>
              <a href="#feedback" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">07</span>
                <span>Reporting Accessibility Issues</span>
              </a>
              <a href="#updates" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">08</span>
                <span>Updates to This Statement</span>
              </a>
              <a href="#contact" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">09</span>
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-12">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">

          <section id="commitment" className="scroll-mt-24 mb-12 md:mb-14">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">01</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Our Commitment</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Good healthcare requires good access to it. We believe that accessibility is part of practicing dentistry well, not an add-on to it. This commitment applies to both our physical office in Sheepshead Bay and our website at worldsmilesnyc.com.</p>
              <p>Accessibility is an ongoing effort, not a finished task. We continually work to identify and remove barriers — and where we fall short, we want to know so we can do better.</p>
            </div>
          </section>

          <section id="standards" className="scroll-mt-24 mb-12 md:mb-14">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">02</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Web Accessibility Standards</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>This website is designed and built with the goal of meeting the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. WCAG is the internationally recognized standard for web accessibility, published by the World Wide Web Consortium (W3C).</p>
              <p>At the AA level, the standards address a broad range of accessibility considerations — including support for visual impairment, hearing impairment, motor and dexterity differences, cognitive differences, and the use of assistive technologies such as screen readers, voice control software, and keyboard-only navigation.</p>
            </div>
          </section>

          <section id="features" className="scroll-mt-24 mb-12 md:mb-14">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">03</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Website Accessibility Features</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Specific features built into the website to support accessibility include:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>Semantic HTML structure that works correctly with screen readers and other assistive technology</li>
                <li>Skip-to-content links at the top of every page for keyboard and screen reader users</li>
                <li>Sufficient color contrast for body text — meeting or exceeding the 4.5:1 ratio required at WCAG AA</li>
                <li>Visible focus indicators on every interactive element, supporting keyboard navigation</li>
                <li>Full keyboard navigation support throughout the site, including the contact form</li>
                <li>Descriptive alternative text on meaningful images</li>
                <li>Proper form labels associated with every input field</li>
                <li>A clear heading hierarchy that supports navigation by screen reader users</li>
                <li>Responsive design that works across screen sizes, including significant zoom (up to 200% without loss of content)</li>
                <li>Respect for the <code>prefers-reduced-motion</code> system setting, suppressing non-essential animation for users who request it</li>
              </ul>
            </div>
          </section>

          <section id="office" className="scroll-mt-24 mb-12 md:mb-14">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">04</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Physical Office Accessibility</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <div className="bg-[#F7F3EC] border-l-4 border-[#C9A961] rounded-r-lg p-5 md:p-6 flex items-start gap-4 mb-6">
                <AlertCircle className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-[Fraunces,Georgia,serif] text-[1rem] md:text-[1.0625rem] font-medium text-[#0A0A0A] mb-2">The building entrance has steps.</h3>
                  <p className="text-[0.9375rem] text-[#1B1B1B] leading-[1.65]">If accessibility is a concern, please call us before your appointment so we can discuss what we can accommodate and what we can't.</p>
                </div>
              </div>

              <p>Our practice is located on the ground floor of 3121 Ocean Avenue, Suite 101. The building entrance from Ocean Avenue has steps leading up to the door, which means there is not a step-free path from the sidewalk to our office. The practice is not fully wheelchair accessible from street level.</p>
              <p>The parking garage at the building is reserved for owners and is not available to patients. Free street parking is generally available on Ocean Avenue and the surrounding side streets.</p>
              
              <h3 className="text-[1.25rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] pt-2">If accessibility is a concern</h3>
              <p>Please contact us in advance of your appointment by calling <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="text-[#C9A961] hover:underline min-h-[48px] inline-flex items-center">347-378-7827</a> or emailing <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="text-[#C9A961] hover:underline min-h-[48px] inline-flex items-center">info@worldsmilesnyc.com</a>. We'll discuss your specific needs and identify the best way to accommodate your visit. Depending on the accommodation required, this may include arranging assistance at the entrance, scheduling at a time that works better for your needs, or — if your case is one we cannot fully accommodate — recommending an accessible practice nearby.</p>
              
              <h3 className="text-[1.25rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] pt-2">Inside the office</h3>
              <p>Once inside, we have worked to make the interior of the practice as accessible as possible. [OPERATOR: confirm specifics and edit. Suggested default: Doorways accommodate standard mobility devices, the operatories have space for accompanying support persons, and the restroom is on the same floor as the treatment areas. If any of this is inaccurate or you'd like to add specifics about the interior accessibility of the practice, edit this paragraph.]</p>
            </div>
          </section>

          <section id="limitations" className="scroll-mt-24 mb-12 md:mb-14">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">05</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Known Limitations</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>We continually work to improve accessibility, but there are areas where we know we currently fall short:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li><strong>The building entrance has steps.</strong> As described in section 04, this is the most significant physical accessibility barrier we face. We are working to identify the right long-term solution.</li>
                <li><strong>Embedded third-party content.</strong> Our website includes some content from third-party services — the embedded Google Map on our contact page, for example — whose accessibility we do not fully control. These services have their own accessibility commitments and limitations.</li>
                <li><strong>[OPERATOR: add any other known limitations you want to disclose — for example, if there are specific website pages that have not yet been audited, or specific equipment in the practice that is not adaptable.]</strong></li>
              </ul>
            </div>
          </section>

          <section id="accommodations" className="scroll-mt-24 mb-12 md:mb-14">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">06</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Requesting Accommodations</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>If you have specific accessibility needs — whether related to physically accessing the office, communicating during your appointment, accessing patient records, or using the website — we want to know. Reasonable accommodations we can typically arrange include:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>Communication assistance, such as sign language interpretation (with advance notice)</li>
                <li>Large-print or alternative-format treatment plans, consent documents, and patient information</li>
                <li>Alternative scheduling to accommodate mobility, sensory, or cognitive needs</li>
                <li>Permission for a support person to accompany you in the operatory</li>
                <li>Adjustments to clinical procedures where reasonable and clinically appropriate</li>
                <li>Translation assistance — Dr. Furman speaks Russian fluently and can conduct the consultation in Russian if preferred</li>
              </ul>
              <p>To request an accommodation, please contact us at least one week before your appointment when possible. Some accommodations — such as arranging an interpreter — require more advance notice than others, and we'll be honest with you about what we can and cannot arrange on short timelines.</p>
            </div>
          </section>

          <section id="feedback" className="scroll-mt-24 mb-12 md:mb-14">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">07</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Reporting Accessibility Issues</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>If you encounter an accessibility barrier on this website, in our office, or in any other aspect of interacting with our practice, please tell us. Specific feedback helps us identify and fix problems we may not have noticed.</p>
              <p>When reporting an issue, the following information helps us address it efficiently:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>A description of what you were trying to do</li>
                <li>The specific page, section, or location where the issue occurred</li>
                <li>The assistive technology you were using, if applicable (screen reader, voice control, keyboard navigation, switch device, etc.)</li>
                <li>Your contact information, so we can follow up with you</li>
              </ul>
              <p>We aim to acknowledge accessibility feedback within five business days and to communicate a plan for addressing it as soon as we are able. Some issues can be fixed quickly; others take longer. Either way, we'll keep you informed.</p>
            </div>
          </section>

          <section id="updates" className="scroll-mt-24 mb-12 md:mb-14">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">08</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Updates to This Statement</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>We update this accessibility statement as we make changes to the website, the practice, or the accommodations we are able to offer. The 'Last Updated' date at the top of this page reflects the most recent revision.</p>
              <p>We commit to revisiting our accessibility practices and this statement at least annually, and more often as circumstances warrant.</p>
            </div>
          </section>

          <section id="contact" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">09</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Contact</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Accessibility questions, accommodation requests, and reports of barriers should be directed to:</p>
              
              <div className="bg-[#F7F3EC] rounded-xl p-6 md:p-7 mt-5">
                <h3 className="font-medium text-[1.0625rem] text-[#0A0A0A] mb-3">World Smiles Prosthodontics</h3>
                <p className="text-[0.9375rem] text-[#1B1B1B]">3121 Ocean Avenue, Suite 101, Brooklyn, NY 11235</p>
                <div className="mt-2.5 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
                  <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center text-[#1B1B1B] hover:text-[#C9A961] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded min-h-[48px] min-w-[48px]">347-378-7827</a>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
                  <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="inline-flex items-center text-[#1B1B1B] hover:text-[#C9A961] break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded min-h-[48px] min-w-[48px]">info@worldsmilesnyc.com</a>
                </div>
              </div>

              <p className="mt-5 text-[0.9375rem] text-[#5C5C5C] leading-[1.65]">When emailing or leaving a voicemail about accessibility, please use 'Accessibility' in your subject line or message so we can route it appropriately. We treat accessibility communications with priority.</p>
            </div>
          </section>

        </div>
      </section>

      <section className="bg-[#F7F3EC] py-12 md:py-16 text-center">
        <div className="max-w-[680px] mx-auto px-4 md:px-6">
          <p className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">HELP US DO BETTER</p>
          <h2 className="mt-3 text-[1.5rem] md:text-[1.75rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A] leading-[1.15] tracking-[-0.015em]">If something on this website or at the practice isn't working for you, tell us.</h2>
          <p className="mt-4 text-[1rem] text-[#5C5C5C] leading-[1.65]">Specific feedback is the only way we find the barriers we haven't noticed yet. If you've encountered one, we want to hear about it — and fix it.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC]">
              Report an Issue
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded min-h-[48px] min-w-[48px]">
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              <span>Or call 347-378-7827</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
