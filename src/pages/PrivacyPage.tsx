import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Calendar, Mail } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function PrivacyPage() {
  usePageMeta('PrivacyPage');

  return (
    <>
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">LEGAL</span>
          <h1 className="mt-4 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            Privacy Policy.
          </h1>
          <div className="mt-6 inline-flex items-center gap-2 text-[0.875rem] text-[#5C5C5C] justify-center">
            <Calendar className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
            <span>Last updated: <strong className="text-[#1B1B1B] font-semibold">September 2, 2026</strong></span>
          </div>
          <p className="mt-7 text-[1.0625rem] text-[#1B1B1B] leading-[1.7] max-w-[58ch] mx-auto text-left">
            This Privacy Policy describes how World Smiles Prosthodontics collects, uses, and protects information about you when you visit our website or interact with our practice. If you are a current or prospective patient, this policy applies alongside our HIPAA Notice of Privacy Practices, which is provided to you separately when you become a patient and describes how protected health information is handled in the context of your care.
          </p>
        </div>
      </section>

      {/* SECTION 2: TABLE OF CONTENTS */}
      <section className="bg-white py-10 md:py-12">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <div className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] p-6 md:p-7">
            <h2 className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-4">ON THIS PAGE</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              <li>
                <a href="#about" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">01</span>
                  <span>About this Policy</span>
                </a>
              </li>
              <li>
                <a href="#collect" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">02</span>
                  <span>Information We Collect</span>
                </a>
              </li>
              <li>
                <a href="#use" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">03</span>
                  <span>How We Use Your Information</span>
                </a>
              </li>
              <li>
                <a href="#sharing" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">04</span>
                  <span>Information Sharing</span>
                </a>
              </li>
              <li>
                <a href="#rights" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">05</span>
                  <span>Your Rights</span>
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">06</span>
                  <span>Cookies and Tracking</span>
                </a>
              </li>
              <li>
                <a href="#security" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">07</span>
                  <span>Data Security</span>
                </a>
              </li>
              <li>
                <a href="#children" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">08</span>
                  <span>Children's Privacy</span>
                </a>
              </li>
              <li>
                <a href="#changes" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">09</span>
                  <span>Changes to This Policy</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[0.9375rem] text-[#1B1B1B] hover:text-[#C9A961] transition-colors flex items-baseline gap-2">
                  <span className="text-[#5C5C5C] tabular-nums text-[0.8125rem]">10</span>
                  <span>Contact Us</span>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 3: POLICY CONTENT */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          
          {/* 01: About this Policy */}
          <section id="about" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">01</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">About this Policy</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>World Smiles Prosthodontics ('we,' 'our,' or 'the practice') is a dental specialty practice located in Brooklyn, New York. This policy applies to information collected through our website at worldsmilesnyc.com, through phone calls, emails, and any other interactions with the practice.</p>
              <p>If you are a current or prospective patient, your health information (also called 'protected health information' or 'PHI') is governed by the Health Insurance Portability and Accountability Act (HIPAA). Our HIPAA Notice of Privacy Practices, provided to you when you become a patient, describes how we handle PHI specifically. This online Privacy Policy covers information we collect through our website and general practice contact.</p>
              <p>By using our website or contacting the practice, you acknowledge that you have read and understood this policy.</p>
            </div>
          </section>

          {/* 02: Information We Collect */}
          <section id="collect" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">02</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Information We Collect</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>We collect information in three ways: information you provide to us directly, information collected automatically when you visit our website, and information from third parties in limited circumstances.</p>
              
              <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A] mt-7 mb-3">Information you provide to us</h3>
              <p>When you contact us through our website form, by phone, by email, or in person, you may share:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>Contact details — your name, phone number, email address, and mailing address</li>
                <li>Information about why you're reaching out — the service or treatment you're inquiring about, your prior dental history, and any specific questions or concerns</li>
                <li>Insurance information, if you choose to share it with us for benefits verification</li>
                <li>Health information, if you become a patient — this is protected health information under HIPAA and is governed by our HIPAA Notice of Privacy Practices</li>
              </ul>

              <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A] mt-7 mb-3">Information collected automatically</h3>
              <p>When you visit our website, we automatically collect:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>Technical information such as your IP address, browser type and version, operating system, and device type</li>
                <li>Usage information such as which pages you visit, how long you spend on each, the links you click, and the website that referred you</li>
                <li>Approximate geographic location, generally at the city or region level, derived from your IP address</li>
              </ul>

              <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A] mt-7 mb-3">Information from third parties</h3>
              <p>In limited circumstances, we receive information about you from third parties. For example:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>Reviews you post publicly on Google, Zocdoc, or similar platforms</li>
                <li>Insurance benefit information from your insurer, with your authorization</li>
                <li>Referral information from another healthcare provider, with your authorization</li>
              </ul>
            </div>
          </section>

          {/* 03: How We Use Your Information */}
          <section id="use" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">03</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">How We Use Your Information</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>We use the information we collect for legitimate practice purposes — primarily to respond to your inquiries, schedule and provide treatment, communicate with you about your care, and operate the practice. Specifically:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>To respond to messages and inquiries you send us</li>
                <li>To schedule appointments and send appointment reminders</li>
                <li>To provide dental treatment and the related services you've requested</li>
                <li>To process payments and handle insurance claims</li>
                <li>To comply with our legal and professional obligations</li>
                <li>To improve our website and our services over time</li>
                <li>With your separate authorization, to send you occasional updates about the practice (you can opt out at any time)</li>
              </ul>

              <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A] mt-7 mb-3">What we don't do</h3>
              <div className="bg-[#F7F3EC] rounded-xl p-5 mt-5">
                <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                  <li>We do not sell your personal information to anyone, ever.</li>
                  <li>We do not add you to marketing or advertising lists without your explicit consent.</li>
                  <li>We do not share your protected health information outside the practice except as permitted by HIPAA — for treatment, payment, healthcare operations, or as required by law.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 04: Information Sharing */}
          <section id="sharing" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">04</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Information Sharing</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>We share information only in the limited circumstances described below. In every case, our goal is to share the minimum information necessary for the purpose.</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li><strong>Service providers.</strong> We share information with companies and individuals who help us operate the practice — for example, dental laboratories that fabricate restorations, payment processors, billing services, IT and software vendors, and our website hosting provider. These service providers are bound by contractual obligations (including HIPAA Business Associate Agreements where applicable) to handle your information securely and only for the purpose we've authorized.</li>
                <li><strong>Insurance companies.</strong> With your authorization, we share information with your dental insurance provider for benefits verification, claims processing, and reimbursement.</li>
                <li><strong>Other healthcare providers.</strong> As part of your treatment, and with your authorization, we may share information with other providers involved in your care — for example, your general dentist, a specialist you've been referred to, or an oral surgeon.</li>
                <li><strong>Legal compliance.</strong> We may disclose information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect rights, safety, or property.</li>
                <li><strong>Business transfers.</strong> If the practice is ever sold, merged, or reorganized, your information may be transferred to the new entity, which would be bound by the terms of this policy or by a successor policy with substantially similar protections.</li>
              </ul>
            </div>
          </section>

          {/* 05: Your Rights */}
          <section id="rights" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">05</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Your Rights</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Depending on your relationship with the practice and where you live, you have various rights regarding your information.</p>
              
              <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A] mt-7 mb-3">Rights of patients under HIPAA</h3>
              <p>If you are a current or former patient, HIPAA provides you with specific rights regarding your protected health information, including:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>The right to access your medical records</li>
                <li>The right to request corrections to your records</li>
                <li>The right to an accounting of certain disclosures of your information</li>
                <li>The right to request restrictions on how your information is used or shared</li>
                <li>The right to request that we communicate with you in a specific way (for example, by mail only, not by phone)</li>
                <li>The right to file a complaint without retaliation</li>
              </ul>
              <p>Our HIPAA Notice of Privacy Practices, provided when you become a patient, contains complete information about these rights and how to exercise them.</p>

              <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A] mt-7 mb-3">Rights of website visitors</h3>
              <p>If you've contacted us through the website but are not (yet) a patient, you can:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>Browse our website without providing any personal information</li>
                <li>Request that we delete any information you've provided through our contact form by emailing us at <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="text-[#C9A961] hover:text-[#A8893F] underline">info@worldsmilesnyc.com</a></li>
                <li>Opt out of non-essential cookies through your browser settings (see Section 06)</li>
              </ul>

              <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A] mt-7 mb-3">Additional state-specific rights</h3>
              <p>Residents of certain states — including California, Colorado, Connecticut, Utah, and Virginia — have additional rights under state privacy laws, including the right to know what information we have, the right to delete it, and the right to opt out of certain uses. To exercise these rights, contact us at <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="text-[#C9A961] hover:text-[#A8893F] underline">info@worldsmilesnyc.com</a> with your specific request.</p>
            </div>
          </section>

          {/* 06: Cookies and Tracking */}
          <section id="cookies" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">06</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Cookies and Tracking</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Our website uses cookies and similar technologies — small files stored on your device — to provide basic functionality, understand how visitors use the site, and improve the experience over time.</p>
              
              <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A] mt-7 mb-3">Types of cookies we use</h3>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li><strong>Essential cookies</strong> — required for the website to function (for example, remembering your form input as you navigate the site). These cannot be disabled.</li>
                <li><strong>Analytics cookies</strong> — help us understand how visitors find and use our website so we can improve it. [OPERATOR: specify analytics tools you use — e.g., Google Analytics, Vercel Analytics, Plausible. If you don't use any, state that.]</li>
                <li><strong>Advertising cookies</strong> — [OPERATOR: only include this bullet if you run digital advertising. If yes, specify: 'used to measure the effectiveness of digital advertising campaigns. [List specific tools, e.g., Google Ads conversion tracking, Meta Pixel.]'. If no, remove this bullet entirely.]</li>
              </ul>

              <h3 className="font-[Fraunces,Georgia,serif] text-[1.125rem] font-medium text-[#0A0A0A] mt-7 mb-3">Your choices</h3>
              <p>You can disable cookies through your browser settings, though some site features may not work properly. Most browsers also offer a 'Do Not Track' option, which we honor for non-essential tracking.</p>
            </div>
          </section>

          {/* 07: Data Security */}
          <section id="security" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">07</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Data Security</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>We take reasonable technical and physical safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction. These include:</p>
              <ul className="space-y-2.5 pl-6 list-disc marker:text-[#C9A961]">
                <li>Encrypted data transmission via HTTPS for everything you send through our website</li>
                <li>Access controls that restrict who in the practice can view what information</li>
                <li>A HIPAA-compliant electronic health records system for patient health information</li>
                <li>Regular review of our security practices and the security practices of our service providers</li>
              </ul>
              <p>Despite these precautions, no system is ever perfectly secure. If we ever discover a breach affecting your information, we will notify you in accordance with applicable law.</p>
            </div>
          </section>

          {/* 08: Children's Privacy */}
          <section id="children" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">08</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Children's Privacy</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Our practice primarily serves adults. We do not knowingly collect personal information from children under 13 through our website. If you are a parent or guardian and believe we have collected information about your child, please contact us at <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="text-[#C9A961] hover:text-[#A8893F] underline">info@worldsmilesnyc.com</a> and we will delete the information promptly.</p>
            </div>
          </section>

          {/* 09: Changes to This Policy */}
          <section id="changes" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">09</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Changes to This Policy</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, our website, or applicable law. When we do, we'll update the 'Last Updated' date at the top of this page.</p>
              <p>If we make changes that materially affect how we collect, use, or share your information, we'll communicate those changes more prominently — for example, by posting a notice on our homepage or contacting you directly. Your continued use of our website after a policy update constitutes your acceptance of the updated terms.</p>
            </div>
          </section>

          {/* 10: Contact Us */}
          <section id="contact" className="scroll-mt-24 mb-12 md:mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[#E7E2D8]">
              <span className="text-[#C9A961] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium leading-none tabular-nums">10</span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.25]">Contact Us</h2>
            </div>
            <div className="space-y-5 text-[1rem] md:text-[1.0625rem] leading-[1.75] text-[#1B1B1B]">
              <p>Questions about this policy, requests to exercise your privacy rights, or concerns about how we've handled your information should be directed to:</p>
              
              <div className="bg-[#F7F3EC] rounded-xl p-6 md:p-7 mt-5">
                <h3 className="font-medium text-[1.0625rem] text-[#0A0A0A] mb-3">World Smiles Prosthodontics</h3>
                <address className="not-italic space-y-2">
                  <p>3121 Ocean Avenue, Suite 101, Brooklyn, NY 11235</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C9A961] shrink-0" strokeWidth={1.75} />
                    <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="hover:text-[#C9A961] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded min-h-[48px] inline-flex items-center">347-378-7827</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C9A961] shrink-0" strokeWidth={1.75} />
                    <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="hover:text-[#C9A961] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded min-h-[48px] inline-flex items-center">info@worldsmilesnyc.com</a>
                  </div>
                </address>
              </div>

              <p className="mt-5">For complaints specifically about how we handle protected health information under HIPAA, you may also contact the U.S. Department of Health & Human Services Office for Civil Rights at <a href='https://www.hhs.gov/ocr/privacy/' target='_blank' rel='noopener noreferrer' className='text-[#C9A961] hover:text-[#A8893F] underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded'>hhs.gov/ocr/privacy</a>. We will not retaliate against you for filing a complaint.</p>
            </div>
          </section>
        </div>
      </section>

      {/* SECTION 4: SOFT CTA */}
      <section className="bg-[#F7F3EC] py-12 md:py-16 text-center">
        <div className="max-w-[680px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">QUESTIONS?</span>
          <h2 className="mt-3 text-[1.5rem] md:text-[1.75rem] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
            If anything here is unclear, ask us.
          </h2>
          <p className="mt-4 text-[1rem] text-[#5C5C5C] leading-[1.65]">
            Privacy policies are dense by necessity. If you have a specific question about how we handle your information, we'd rather you ask than guess.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC] min-h-[48px] min-w-[48px]">
              Contact Us
            </Link>
            <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="inline-flex items-center justify-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] px-2 min-h-[48px] min-w-[48px]">
              Email info@worldsmilesnyc.com
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
