import type React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ChevronDown, ChevronUp, Star, Calendar } from 'lucide-react';
import { translations } from '../lib/translations';
import { usePageMeta } from '../lib/seo';
import logoUrl from '../logo.png';
import ba1 from '../assets/landing/before-and-after-1.jpeg';
import ba2 from '../assets/landing/before-and-after-2.jpeg';
import ba3 from '../assets/landing/before-and-after-3.jpeg';
import consultRoom from '../assets/landing/consult-room.jpg';
import scan3d from '../assets/landing/3d-scan.jpg';
import sittingArea from '../assets/landing/sitting-area.jpg';

export default function LandingPage() {
  usePageMeta('LandingPage');
  const [lang, setLang] = useState<'en' | 'ru'>('en');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const savedLang = sessionStorage.getItem('lang');
    if (savedLang === 'en' || savedLang === 'ru') {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = (newLang: 'en' | 'ru') => {
    setLang(newLang);
    sessionStorage.setItem('lang', newLang);
  };

  const scrollToCalendar = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-pract-cream text-pract-charcoal font-sans selection:bg-pract-gold selection:text-white">
      {/* 0. STICKY BOOKING BAR / HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-pract-black h-16 md:h-20 flex items-center shadow-md">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
          <Link to="/" className="shrink-0 flex items-center" aria-label="World Smiles Prosthodontics — Home">
            <img
              src={logoUrl}
              alt="World Smiles Prosthodontics"
              className="h-10 md:h-12 w-auto"
              width="330"
              height="48"
            />
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="hidden md:flex items-center justify-center gap-2 text-pract-gold hover:text-white transition-colors font-medium text-sm md:text-base min-h-[48px] min-w-[48px] px-2">
              <Phone size={16} /> {/* Click-to-call requirement */}
              <span>{t.nav_phone}</span>
            </a>
            
            <div className="flex bg-white/5 rounded-full p-0.5 border border-white/10 text-xs font-semibold">
              <button 
                onClick={() => toggleLang('en')}
                className={`px-2 py-1 rounded-full transition-colors ${lang === 'en' ? 'bg-pract-gold text-pract-black' : 'text-white hover:text-pract-gold'}`}
              >
                EN
              </button>
              <button 
                onClick={() => toggleLang('ru')}
                className={`px-2 py-1 rounded-full transition-colors ${lang === 'ru' ? 'bg-pract-gold text-pract-black' : 'text-white hover:text-pract-gold'}`}
              >
                РУС
              </button>
            </div>

            <a href="#book" onClick={scrollToCalendar} className="bg-pract-gold text-pract-black px-4 py-1.5 md:px-6 md:py-2 rounded-md font-bold hover:bg-pract-gold-hover transition-colors text-xs md:text-sm shadow flex items-center gap-2">
              <Calendar size={14} className="hidden sm:block" />
              {t.nav_cta}
            </a>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* 1. HERO SECTION (Z-Pattern Layout) */}
      <section className="pt-4 md:pt-12 pb-16 px-4 md:px-8 max-w-7xl mx-auto relative cursor-default">
        <div className="flex flex-col lg:grid lg:grid-cols-[55%_45%] gap-y-3 md:gap-y-6 lg:gap-x-10 lg:items-start">
          
          <div className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col items-start text-left">
            <div className="flex flex-col gap-2 md:gap-2 mb-3 md:mb-8 items-start">
              <span className="text-pract-gold font-bold tracking-widest text-[10px] md:text-xs uppercase bg-pract-gold/5 px-3 py-1 rounded-sm border border-pract-gold/10 inline-block">
                {t.hero_eyebrow}
              </span>
              <div className="flex items-center gap-1.5 text-xs md:text-[13px] text-pract-charcoal/80 font-medium bg-pract-cream border border-pract-gold/50 px-3 py-1 rounded-sm shadow-sm inline-flex">
                <div className="flex text-pract-gold">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <span>{t.hero_trust_badge}</span>
              </div>
            </div>
            
            <h1 className="font-serif text-2xl md:text-5xl lg:text-6xl text-pract-charcoal font-semibold leading-tight">
              {t.hero_headline}
            </h1>
          </div>
          
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full mt-2 lg:mt-0">
             <CalendarEmbed />
          </div>
          
          <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col items-start text-left w-full lg:mt-2">
            <p className="mt-0 text-lg md:text-xl text-pract-charcoal/80 font-medium leading-relaxed max-w-xl">
              {t.hero_subhead}
            </p>
            
            <div className="w-full max-w-xl border-2 border-pract-gold rounded-xl bg-[#F5F1E8] p-6 md:p-8 my-6 md:my-8 text-center shadow-md">
              <h3 className="font-serif text-pract-charcoal font-semibold text-2xl md:text-[28px] leading-snug mb-3">
                {t.hero_value_card_1}
              </h3>
              <p className="text-pract-gold font-bold text-[22px] md:text-[26px] leading-snug">
                {t.hero_value_card_2_1}<br/>
                <span className="text-[17.5px] md:text-[21px] block mt-1 font-semibold">{t.hero_value_card_2_2}</span>
              </p>
            </div>
            
            <div className="w-full md:w-auto block md:pr-0 self-stretch md:self-start">
              <a href="#book" onClick={scrollToCalendar} className="bg-pract-gold text-pract-black px-6 py-4 md:px-8 md:py-5 w-full rounded-md text-[17px] md:text-[19px] font-bold hover:bg-pract-gold-hover transition-all shadow-lg flex items-center justify-center gap-3">
                <Calendar size={20} />
                {t.hero_cta}
              </a>
              <p className="text-pract-sage font-medium text-xs md:text-sm mt-3 text-center">
                {t.hero_micro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANXIETY MICROCOPY STRIP */}
      <div className="w-full bg-pract-sage py-4 md:py-5 border-y border-pract-sage/50">
        <p className="text-center font-serif italic text-pract-black text-sm md:text-base font-medium px-4">
          {t.anxiety_strip}
        </p>
      </div>

      {/* 3. THE OFFER STACK */}
      <section className="py-20 px-4 md:px-8 relative bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-semibold mb-12 text-pract-charcoal">
            {t.offer_title}
          </h2>
          
          <div className="bg-pract-cream p-6 md:p-10 rounded-2xl border border-pract-sage/30 shadow-sm">
            {[
              { title: t.offer_1_title, val: t.offer_1_value },
              { title: t.offer_2_title, val: t.offer_2_value },
              { title: t.offer_3_title, val: t.offer_3_value },
              { title: t.offer_4_title, val: t.offer_4_value },
              { title: t.offer_5_title, val: t.offer_5_value }
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-pract-sage/20 pb-5 mb-5 last:border-0 last:pb-0 last:mb-0 gap-2 sm:gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-pract-gold shrink-0 mt-0.5" size={20} />
                  <span className="text-lg md:text-xl text-pract-charcoal font-medium">{item.title}</span>
                </div>
                <span className="text-pract-gold font-semibold tracking-wide whitespace-nowrap text-right">
                  {item.val}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="text-lg md:text-xl text-pract-charcoal mb-2 font-medium">
              {t.offer_subtotal}
            </div>
            <div className="text-5xl md:text-6xl font-serif font-bold text-pract-black mb-4">
              {t.offer_investment}
            </div>
            <p className="italic text-pract-charcoal/70 text-base mb-8 max-w-xl mx-auto">
              {t.offer_note}
            </p>
            <a href="#book" onClick={scrollToCalendar} className="inline-block bg-pract-gold text-pract-black px-8 py-4 rounded-md text-lg font-bold hover:bg-pract-gold-hover transition-colors shadow-md w-full sm:w-auto">
              {t.hero_cta}
            </a>
          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF — BEFORE & AFTER GALLERY */}
      <section className="py-20 px-4 md:px-8 bg-pract-cream border-t border-pract-sage/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-semibold mb-12 text-pract-charcoal">
            {t.proof_title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             <div className="w-full aspect-[2/3] bg-pract-black rounded-2xl overflow-hidden relative shadow-lg border-4 border-white group">
                <img src={ba1} alt="Before and after case 1" className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300" />
             </div>
             <div className="w-full aspect-[2/3] bg-pract-black rounded-2xl overflow-hidden relative shadow-lg border-4 border-white group">
                <img src={ba2} alt="Before and after case 2" className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300" />
             </div>
             <div className="w-full aspect-[2/3] bg-pract-black rounded-2xl overflow-hidden relative shadow-lg border-4 border-white group">
                <img src={ba3} alt="Before and after case 3" className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. THE PROSTHODONTIST DIFFERENCE */}
      <section className="py-24 px-4 md:px-8 bg-pract-black text-white relative">
        <div className="max-w-4xl mx-auto">
          <span className="text-pract-gold font-bold tracking-widest text-xs uppercase mb-4 block">
            {t.diff_eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-10 leading-tight text-white shadow-sm">
            {t.diff_headline}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 text-gray-300 text-[17px] leading-relaxed font-light">
              <p>{t.diff_p1}</p>
              <p>{t.diff_p2}</p>
              <p>{t.diff_p3}</p>
            </div>
            
            <div className="bg-[#111] p-8 md:p-10 rounded-xl border border-pract-gold/20 relative shadow-2xl">
              <p className="font-serif italic text-2xl md:text-3xl text-pract-gold leading-snug">
                "{t.diff_quote}"
              </p>
            </div>
          </div>

          <div className="mt-12">
             <a href="#book" onClick={scrollToCalendar} className="inline-block text-center bg-pract-gold text-pract-black px-8 py-4 rounded-md text-base font-bold hover:bg-pract-gold-hover transition-colors shadow w-full sm:w-auto">
              {t.hero_cta}
            </a>
          </div>
        </div>
      </section>

      {/* 6. HOW THE VISIT WORKS */}
      <section className="py-24 px-4 md:px-8 bg-pract-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-pract-charcoal">
              {t.how_title}
            </h2>
            <p className="text-pract-sage font-medium italic text-lg">
              {t.how_micro}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            <div className="space-y-6">
              {[t.how_1, t.how_2, t.how_3, t.how_4, t.how_5].map((step, i) => (
                <div key={i} className="flex gap-5 items-start bg-white p-6 rounded-xl border border-pract-sage/20 shadow-sm">
                  <div className="flex-shrink-0 mt-0.5 text-pract-gold font-serif font-bold text-2xl">
                    {i + 1}.
                  </div>
                  <p className="text-lg text-pract-charcoal font-medium">{step}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={consultRoom} alt="Consultation Room" className="rounded-xl shadow-md w-full h-auto object-cover aspect-[4/5] opacity-90 hover:opacity-100 transition-opacity" />
                <img src={scan3d} alt="3D Scan Technology" className="rounded-xl shadow-md w-full h-auto object-cover aspect-square opacity-90 hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-4 pt-8 shrink-0">
                <img src={sittingArea} alt="Sitting Area" className="rounded-xl shadow-md w-full h-auto object-cover aspect-[3/4] opacity-90 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          <div className="text-center border-t border-pract-sage/30 pt-8">
            <p className="text-pract-charcoal/70 text-base md:text-lg italic bg-pract-sage/10 inline-block px-6 py-3 rounded-lg">
              {t.how_footer}
            </p>
          </div>
        </div>
      </section>

      {/* 7. RUSSIAN-LANGUAGE WELCOME */}
      <section className="py-20 px-4 md:px-8 bg-[#f5efe6] border-y border-[#e6dac3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-pract-charcoal">
            {t.ru_welcome_header}
          </h2>
          <p className="text-xl text-pract-charcoal/90 mb-8 font-medium">
            {t.ru_welcome_subtitle}
          </p>
          <div className="space-y-4 text-base md:text-lg text-pract-charcoal/70 leading-relaxed text-left sm:text-center">
            <p>{t.ru_welcome_en_body}</p>
            <p className="font-medium text-pract-charcoal/90">{t.ru_welcome_ru_body}</p>
          </div>
          <div className="mt-10">
            <a href="#book" onClick={scrollToCalendar} className="inline-block bg-pract-gold text-pract-black px-8 py-4 rounded-md text-base font-bold shadow w-full sm:w-auto hover:bg-pract-gold-hover">
              {lang === 'ru' ? t.hero_cta : t.hero_cta}
            </a>
          </div>
        </div>
      </section>


      {/* 9. FAQ SECTION */}
      <section className="py-24 px-4 md:px-8 bg-pract-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-semibold mb-12 text-pract-charcoal">
            {t.faq_title}
          </h2>
          
          <div className="space-y-3">
            {[
              { q: t.faq_q1, a: t.faq_a1 },
              { q: t.faq_q2, a: t.faq_a2 },
              { q: t.faq_q3, a: t.faq_a3 },
              { q: t.faq_q4, a: t.faq_a4 },
              { q: t.faq_q5, a: t.faq_a5 },
              { q: t.faq_q6, a: t.faq_a6 },
              { q: t.faq_q7, a: t.faq_a7 },
              { q: t.faq_q8, a: t.faq_a8 }
            ].map((faq, i) => (
              <div key={i} className="border border-pract-sage/50 rounded-xl bg-white shadow-sm overflow-hidden">
                <button 
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-serif font-medium text-[17px] md:text-lg text-pract-charcoal pr-4">
                    {faq.q}
                  </span>
                  {openFaq === i ? <ChevronUp className="text-pract-gold shrink-0 w-5 h-5" /> : <ChevronDown className="text-pract-charcoal/40 shrink-0 w-5 h-5" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-6 text-pract-charcoal/70 text-[16px] md:text-lg leading-relaxed bg-white">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-24 px-4 md:px-8 bg-pract-black text-center relative border-t-[8px] border-pract-gold">
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            {t.final_headline}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-12 leading-relaxed">
            {t.final_body}
          </p>
          
          <a href="#book" onClick={scrollToCalendar} className="bg-pract-gold text-pract-black px-8 py-5 w-full sm:w-auto rounded-md text-xl md:text-2xl font-bold hover:bg-pract-gold-hover transition-all shadow-xl flex items-center justify-center gap-3 mx-auto mb-4">
            <Calendar size={24} />
            {t.hero_cta}
          </a>
          
          <p className="text-pract-gold italic text-sm md:text-base opacity-80">
            {t.final_micro}
          </p>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#050505] text-[#555] py-12 px-4 md:px-8 text-center text-sm border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="mb-5 flex justify-center">
            <img
              src={logoUrl}
              alt="World Smiles Prosthodontics"
              className="h-12 w-auto mx-auto"
              width="330"
              height="48"
            />
          </div>
          <p>{t.footer_address}</p>
          <p className="text-white/60 flex items-center justify-center gap-2 min-h-[48px]">Phone: <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="hover:text-pract-gold min-h-[48px] min-w-[48px] inline-flex items-center justify-center px-2">{t.nav_phone}</a></p>
          <div className="flex justify-center gap-6 mt-8 py-6 border-t border-white/5">
             <Link to="/privacy" className="hover:text-pract-gold transition-colors">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-pract-gold transition-colors">Terms of Use</Link>
          </div>
          <p className="mt-4 pb-12 md:pb-0">{t.footer_rights}</p>
        </div>
      </footer>

      {/* Mobile Sticky Phone - Displayed at bottom right for easy touch access */}
      <div className="fixed bottom-4 right-4 md:hidden z-[60]">
        <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="bg-pract-gold text-pract-black w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-2 border-pract-black">
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}

function CalendarEmbed() {
  useEffect(() => {
    // Avoid double-loading if component remounts
    if (document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="book" className="w-full bg-[#fdfaf5] lg:bg-transparent rounded-xl shadow-lg lg:shadow-none p-4 lg:p-0">
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/33Quy7HPPEQrOVqjIdEh"
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "720px" }}
        scrolling="no"
        id="33Quy7HPPEQrOVqjIdEh_1780330783331"
        title="Book My $147 Specialist Session"
        aria-label="Booking calendar"
      />
    </div>
  );
}
