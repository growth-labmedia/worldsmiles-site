import { useState, useEffect } from 'react';
import { Phone, ArrowRight, MapPin, Mail, ChevronDown, Send, Clock, Car, Train, CheckCircle2 } from 'lucide-react';
import { usePageMeta } from '../lib/seo';
import { FORMSPREE_CONTACT_ENDPOINT, HONEYPOT_FIELD, submitToFormspree } from '../lib/forms';
import type React from 'react';

export default function ContactPage() {
  usePageMeta('ContactPage');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [formError, setFormError] = useState(''); // optional validation message shown in the error box

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service) {
      setFormData(prev => ({ ...prev, service }));
    }
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please enter your name and phone number so we can reach you.');
      setFormStatus('error');
      return;
    }
    setFormStatus('submitting');
    setFormError('');
    const honeypot = (new FormData(e.currentTarget).get(HONEYPOT_FIELD) as string) || '';
    const result = await submitToFormspree(FORMSPREE_CONTACT_ENDPOINT, {
      ...formData,
      [HONEYPOT_FIELD]: honeypot,
      _subject: 'New website inquiry — worldsmilesnyc.com',
    });
    if (result.ok) {
      setFormStatus('success');
    } else {
      console.error('Contact form submission failed:', result.error);
      setFormError('');
      setFormStatus('error');
    }
  };

  return (
    <>
      
      {/* SECTION 1: HERO + CONTACT METHOD CARDS */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-[680px] mx-auto text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">GET IN TOUCH</span>
            <h1 className="mt-4 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
              Let's talk.
            </h1>
            <p className="mt-5 text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[#5C5C5C]">
              Three ways to reach the practice. Pick whichever feels easiest. We answer during office hours and reply to messages first thing the next open day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* CARD 1 — PHONE */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-5 w-12 h-12 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="text-[0.6875rem] uppercase tracking-[0.16em] font-semibold text-[#C9A961] mb-2">FASTEST</span>
              <h2 className="text-[1.25rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] mb-3">Call us</h2>
              <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="flex items-center min-h-[48px] font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium text-[#C9A961] hover:text-[#A8893F] transition-colors mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded">
                347-378-7827
              </a>
              <p className="text-[0.875rem] text-[#5C5C5C] leading-[1.55] mt-auto pt-3 border-t border-[#E7E2D8]">
                Office hours: Mon, Wed, Fri · 10am–5pm
              </p>
            </div>

            {/* CARD 2 — FORM */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-5 w-12 h-12 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="text-[0.6875rem] uppercase tracking-[0.16em] font-semibold text-[#C9A961] mb-2">MOST DETAILED</span>
              <h2 className="text-[1.25rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] mb-3">Send a message</h2>
              <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.6] mb-4">
                Tell us a little about what you need. We reply within 1 business hour during office hours.
              </p>
              <a href="#contact-form" className="mt-auto pt-3 border-t border-[#E7E2D8] inline-flex items-center gap-1 text-[0.9375rem] font-semibold text-[#C9A961] hover:text-[#A8893F] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded">
                Jump to form <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </a>
            </div>

            {/* CARD 3 — VISIT */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-5 w-12 h-12 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#C9A961]" strokeWidth={1.75} />
              </div>
              <span className="text-[0.6875rem] uppercase tracking-[0.16em] font-semibold text-[#C9A961] mb-2">IN PERSON</span>
              <h2 className="text-[1.25rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] mb-3">Visit the office</h2>
              <p className="text-[0.9375rem] text-[#1B1B1B] leading-[1.5] mb-4">
                3121 Ocean Avenue, Suite 101<br/>
                Brooklyn, NY 11235<br/>
                <span className="text-[#5C5C5C] text-[0.875rem]">Sheepshead Bay · By appointment only</span>
              </p>
              <a href="https://maps.app.goo.gl/qRAkzom4Bis4Z44ZA" target="_blank" rel="noopener noreferrer" className="mt-auto pt-3 border-t border-[#E7E2D8] inline-flex items-center gap-1 text-[0.9375rem] font-semibold text-[#C9A961] hover:text-[#A8893F] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] rounded">
                Get directions <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FORM + WHAT HAPPENS NEXT */}
      <section id="contact-form" className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN — Form */}
            <div>
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">BY MESSAGE</span>
              <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
                Tell us what you need.
              </h2>
              <p className="mt-5 text-[1rem] text-[#5C5C5C] leading-[1.65] max-w-[58ch]">
                Short and easy. Only name and phone are required. Tell us as much or as little as you want — we'll follow up with you to figure out the rest.
              </p>

              <div className="mt-9">
                {formStatus === 'success' ? (
                  <div className="bg-[#F7F3EC] border border-[#C9A961]/30 rounded-xl p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#C9A961] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-7 h-7 text-[#0A0A0A]" strokeWidth={2} />
                    </div>
                    <h3 className="font-[Fraunces,Georgia,serif] text-[1.5rem] font-medium text-[#0A0A0A] mb-3">Thank you.</h3>
                    <p className="text-[1rem] text-[#1B1B1B] leading-[1.6] max-w-[42ch] mx-auto" role="status">We've received your message and will get back to you within one business day.</p>
                    <p className="text-[0.875rem] text-[#5C5C5C] mt-5">Need to reach us sooner? Call <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center min-h-[48px] min-w-[48px] justify-center px-1 font-semibold text-[#C9A961] hover:text-[#A8893F]">347-378-7827</a>.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                    {/* Honeypot: Formspree silently rejects any submission where this field has a value */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="contact-gotcha">Leave this field empty</label>
                      <input id="contact-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                    </div>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-[0.875rem] font-medium text-[#1B1B1B] mb-1.5">
                          Your name <span className="text-[#A23B3B] ml-0.5" aria-hidden="true">*</span>
                        </label>
                        <input 
                          id="name" 
                          name="name" 
                          type="text" 
                          required 
                          value={formData.name} 
                          onChange={handleFormChange} 
                          autoComplete="name" 
                          className="w-full px-4 py-3 bg-white border border-[#E7E2D8] rounded-lg text-[1rem] text-[#1B1B1B] placeholder:text-[#5C5C5C] focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#C9A961]/40 transition" 
                          placeholder="First and last name" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-[0.875rem] font-medium text-[#1B1B1B] mb-1.5">
                          Phone <span className="text-[#A23B3B] ml-0.5" aria-hidden="true">*</span>
                        </label>
                        <input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          required 
                          autoComplete="tel" 
                          placeholder="347-555-0123" 
                          value={formData.phone} 
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 bg-white border border-[#E7E2D8] rounded-lg text-[1rem] text-[#1B1B1B] placeholder:text-[#5C5C5C] focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#C9A961]/40 transition"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-[0.875rem] font-medium text-[#1B1B1B] mb-1.5">
                          Email <span className="text-[#5C5C5C] font-normal">(optional)</span>
                        </label>
                        <input 
                          id="email" 
                          name="email" 
                          type="email" 
                          autoComplete="email" 
                          placeholder="you@example.com" 
                          value={formData.email} 
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 bg-white border border-[#E7E2D8] rounded-lg text-[1rem] text-[#1B1B1B] placeholder:text-[#5C5C5C] focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#C9A961]/40 transition"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-[0.875rem] font-medium text-[#1B1B1B] mb-1.5">
                          What can we help with? <span className="text-[#5C5C5C] font-normal">(optional)</span>
                        </label>
                        <select 
                          id="service" 
                          name="service" 
                          value={formData.service} 
                          onChange={handleFormChange} 
                          className="w-full px-4 py-3 bg-white border border-[#E7E2D8] rounded-lg text-[1rem] text-[#1B1B1B] focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#C9A961]/40 transition appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\'><path d=\'M1 1.5L6 6.5L11 1.5\' stroke=\'%23C9A961\' stroke-width=\'2\' stroke-linecap=\'round\'/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-12"
                        >
                          <option value="">Not sure yet — just exploring</option>
                          <option value="second-opinion">Specialist Second Opinion Session</option>
                          <option value="dental-implants">Dental Implants</option>
                          <option value="veneers">Porcelain Veneers</option>
                          <option value="crowns-bridges">Crowns or Bridges</option>
                          <option value="full-mouth-reconstruction">Full Mouth Reconstruction</option>
                          <option value="cosmetic-dentistry">Cosmetic Dentistry</option>
                          <option value="restorative-dentistry">Restorative Dentistry</option>
                          <option value="tmj">TMJ or Bite Issues</option>
                          <option value="sedation">Sedation Dentistry</option>
                          <option value="emergency">Urgent / Emergency</option>
                          <option value="other">Something else</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-[0.875rem] font-medium text-[#1B1B1B] mb-1.5">
                          Anything else we should know? <span className="text-[#5C5C5C] font-normal">(optional)</span>
                        </label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={5} 
                          value={formData.message} 
                          onChange={handleFormChange} 
                          className="w-full px-4 py-3 bg-white border border-[#E7E2D8] rounded-lg text-[1rem] text-[#1B1B1B] placeholder:text-[#5C5C5C] focus:outline-none focus:border-[#0A0A0A] focus:ring-2 focus:ring-[#C9A961]/40 transition resize-y" 
                          placeholder="Symptoms you're experiencing, treatment plans you already have, questions about specific procedures — whatever's helpful."
                        ></textarea>
                      </div>
                    </div>

                    <div className="mt-7">
                      <button type="submit" disabled={formStatus === 'submitting'} className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] disabled:bg-[#C9A961]/50 disabled:cursor-not-allowed text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                        {formStatus === 'submitting' ? 'Sending...' : (<>Send My Message <Send className="w-4 h-4" strokeWidth={2} /></>)}
                      </button>
                      <p className="mt-5 text-[0.8125rem] text-[#5C5C5C] leading-[1.65] max-w-[52ch]">
                        We reply within 1 business hour during office hours. No spam. No marketing list. No surprise sales calls. Your information stays in this office.
                      </p>
                    </div>

                    {formStatus === 'error' && (
                      <div className="mt-5 bg-[#A23B3B]/10 border border-[#A23B3B]/30 rounded-lg p-4 text-[0.9375rem] text-[#A23B3B]" role="alert">
                        {formError || "Something went wrong and your message wasn't sent."} If you're having trouble, please call us at <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center min-h-[48px] min-w-[48px] justify-center px-1 font-semibold underline">347-378-7827</a>.
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN — What Happens Next */}
            <div className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] p-7 md:p-8 lg:sticky lg:top-24">
              <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">WHAT HAPPENS NEXT</span>
              <h3 className="mt-3 text-[1.25rem] md:text-[1.375rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A]">
                From hitting send to your appointment.
              </h3>

              <div className="mt-7 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0A0A0A] text-[#C9A961] flex items-center justify-center font-[Fraunces,Georgia,serif] font-medium text-[1.0625rem]">1</div>
                  <div className="flex-1">
                    <h4 className="text-[0.9375rem] font-semibold text-[#0A0A0A] mb-1">We see your message within 1 business hour.</h4>
                    <p className="text-[0.875rem] text-[#5C5C5C] leading-[1.55]">Office hours: Mon, Wed, Fri 10am–5pm. Messages sent outside those hours get a reply first thing the next open day.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0A0A0A] text-[#C9A961] flex items-center justify-center font-[Fraunces,Georgia,serif] font-medium text-[1.0625rem]">2</div>
                  <div className="flex-1">
                    <h4 className="text-[0.9375rem] font-semibold text-[#0A0A0A] mb-1">We respond your preferred way.</h4>
                    <p className="text-[0.875rem] text-[#5C5C5C] leading-[1.55]">If you gave us a phone number, we call. If you'd rather email, we email. No marketing list, no sales calls — just the response.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0A0A0A] text-[#C9A961] flex items-center justify-center font-[Fraunces,Georgia,serif] font-medium text-[1.0625rem]">3</div>
                  <div className="flex-1">
                    <h4 className="text-[0.9375rem] font-semibold text-[#0A0A0A] mb-1">We schedule a time that works.</h4>
                    <p className="text-[0.875rem] text-[#5C5C5C] leading-[1.55]">Most consultations are booked within a week. If your situation is urgent, tell us in your message and we'll work to find a sooner slot.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0A0A0A] text-[#C9A961] flex items-center justify-center font-[Fraunces,Georgia,serif] font-medium text-[1.0625rem]">4</div>
                  <div className="flex-1">
                    <h4 className="text-[0.9375rem] font-semibold text-[#0A0A0A] mb-1">You arrive ready.</h4>
                    <p className="text-[0.875rem] text-[#5C5C5C] leading-[1.55]">Bring whatever paperwork you have — prior quotes, X-rays, photos. Or bring nothing. Either is fine. We'll handle the rest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LOCATION & MAP */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-[820px] mx-auto text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">FIND US</span>
            <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
              Where the practice is.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-10">
            
            {/* LEFT COLUMN — Map */}
            <div className="rounded-xl overflow-hidden border border-[#E7E2D8] bg-white aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
              <iframe
                src="https://maps.google.com/maps?q=3121+Ocean+Avenue+Brooklyn+NY+11235&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="World Smiles Prosthodontics office location on Google Maps"
                className="w-full h-full">
              </iframe>
            </div>

            {/* RIGHT COLUMN — Location details */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 md:p-8 flex flex-col">
              
              {/* Address block */}
              <div className="mb-7 pb-7 border-b border-[#E7E2D8]">
                <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">OFFICE</span>
                <h3 className="mt-3 text-[1.125rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-[1.4]">
                  World Smiles Prosthodontics
                </h3>
                <p className="mt-2 text-[0.9375rem] text-[#1B1B1B] leading-[1.5]">
                  3121 Ocean Avenue, Suite 101<br/>
                  Brooklyn, NY 11235
                </p>
                <p className="mt-2 text-[0.875rem] text-[#5C5C5C]">
                  Sheepshead Bay neighborhood
                </p>
              </div>

              {/* Transit */}
              <div className="mb-6 pb-6 border-b border-[#E7E2D8]">
                <div className="flex items-center gap-2.5 mb-3">
                  <Train className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
                  <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">SUBWAY</span>
                </div>
                <p className="text-[0.9375rem] text-[#1B1B1B] leading-[1.55]">
                  Sheepshead Bay station — B and Q trains. About a four-minute walk to the office.
                </p>
              </div>

              {/* Parking */}
              <div className="mb-6 pb-6 border-b border-[#E7E2D8]">
                <div className="flex items-center gap-2.5 mb-3">
                  <Car className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
                  <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">PARKING</span>
                </div>
                <p className="text-[0.9375rem] text-[#1B1B1B] leading-[1.55]">
                  Free street parking on Ocean Avenue and the side streets. Most patients find a spot within a block.
                </p>
              </div>

              {/* Hours */}
              <div className="mb-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <Clock className="w-4 h-4 text-[#C9A961]" strokeWidth={1.75} />
                  <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">HOURS</span>
                </div>
                <div className="mt-3 space-y-1 text-[0.875rem] text-[#1B1B1B]">
                  <div className="flex justify-between"><span>Monday</span><span>10am – 5pm</span></div>
                  <div className="flex justify-between"><span>Wednesday</span><span>10am – 5pm</span></div>
                  <div className="flex justify-between"><span>Friday</span><span>10am – 5pm</span></div>
                  <div className="flex justify-between text-[#5C5C5C] mt-2 pt-2 border-t border-[#F7F3EC]"><span>Tue/Thu/Sat/Sun</span><span>Closed</span></div>
                </div>
              </div>

              {/* CTA at bottom */}
              <div className="mt-auto pt-2">
                <a href="https://maps.app.goo.gl/qRAkzom4Bis4Z44ZA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 bg-[#0A0A0A] hover:bg-[#1B1B1B] text-white px-5 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2">
                  Open in Google Maps <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRE-CONTACT QUESTIONS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">BEFORE YOU REACH OUT</span>
            <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">
              Quick answers to common questions.
            </h2>
          </div>

          <div className="space-y-3">
            <details className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Do you accept insurance?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                We're out-of-network with most dental insurance plans. What that means in practice: you pay us directly, and we provide you with everything you need to submit to your insurance for reimbursement. Many patients with PPO plans get a meaningful portion reimbursed. We can help you understand what your specific plan is likely to cover before you commit to anything.
              </div>
            </details>

            <details className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">What if I don't have dental insurance?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Most of our patients pay out of pocket. We offer transparent pricing with written treatment plans you can take home, and we work with third-party financing partners for patients who'd prefer to spread payments over time. No coverage required.
              </div>
            </details>

            <details className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Are you accepting new patients?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Yes. New patient appointments are typically scheduled 1–2 weeks out. If your situation is urgent, mention that in your message and we'll work to find a sooner slot.
              </div>
            </details>

            <details className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Do you handle dental emergencies?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                Yes, we accommodate urgent cases when we can. If you're calling outside office hours with an emergency, leave a detailed voicemail and we'll respond as soon as we're back in the office. For severe pain, swelling, or trauma that can't wait, please go to the nearest hospital emergency room first and then reach out to us for follow-up care.
              </div>
            </details>

            <details className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] group">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1">
                <span className="text-[1.0625rem] md:text-[1.125rem] font-medium text-[#1B1B1B] font-[Fraunces,Georgia,serif]">Do I need a referral to make an appointment?</span>
                <ChevronDown className="w-5 h-5 text-[#C9A961] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#5C5C5C] leading-[1.65] text-[1rem]">
                No. You can book directly with us — no referral required. Some insurance plans do require a referral for them to cover specialist visits, so check with your plan if reimbursement matters to you. Either way, we're happy to see you.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">OR JUST CALL</span>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">
            Sometimes a phone call is faster.
          </h2>
          <p className="mt-6 max-w-[55ch] mx-auto text-[#F7F3EC]/85 text-[1.125rem] leading-[1.65]">
            If forms aren't your thing — or if you'd rather have a quick conversation than write out everything you need — just call. We answer during office hours.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              <Phone className="w-4 h-4" strokeWidth={2} />
              Call 347-378-7827
            </a>
            <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
              Email Us
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
