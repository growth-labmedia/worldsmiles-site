import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

/**
 * Real 404 for users. The SPA rewrite still answers HTTP 200, so the vercel.json redirects
 * are what protect old URLs for SEO; this page adds noindex so stray unknown paths don't get indexed.
 */
export default function NotFoundPage() {
  usePageMeta('NotFoundPage');
  useEffect(() => {
    const m = document.createElement('meta');
    m.name = 'robots';
    m.content = 'noindex';
    document.head.appendChild(m);
    return () => { m.remove(); };
  }, []);

  return (
    <section className="bg-[#F7F3EC] py-20 md:py-28">
      <div className="max-w-[640px] mx-auto px-4 md:px-6 text-center">
        <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">PAGE NOT FOUND</span>
        <h1 className="text-[2.25rem] md:text-[3.25rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">
          That page isn't here.
        </h1>
        <p className="mt-6 text-[1.0625rem] md:text-[1.125rem] leading-[1.65] text-[#1B1B1B]">
          The address may be from our old website, or it may have been typed incorrectly. Here's where to go instead.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
          <Link to="/" className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 min-h-[48px] rounded-lg text-[0.9375rem] font-semibold transition-colors">Home</Link>
          <Link to="/services" className="inline-flex items-center justify-center gap-1.5 bg-white border border-[#E7E2D8] hover:border-[#C9A961] text-[#0A0A0A] px-6 py-3 min-h-[48px] rounded-lg text-[0.9375rem] font-semibold transition-colors">Services <ArrowRight className="w-4 h-4" strokeWidth={1.75} /></Link>
          <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 bg-white border border-[#E7E2D8] hover:border-[#C9A961] text-[#0A0A0A] px-6 py-3 min-h-[48px] rounded-lg text-[0.9375rem] font-semibold transition-colors">Contact <ArrowRight className="w-4 h-4" strokeWidth={1.75} /></Link>
        </div>
        <p className="mt-8 text-[0.9375rem] text-[#5C5C5C]">
          Or call us at <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center gap-1.5 min-h-[48px] px-1 font-semibold text-[#0A0A0A] hover:text-[#A8893F]"><Phone className="w-4 h-4" strokeWidth={2} /> 347-378-7827</a>
        </p>
      </div>
    </section>
  );
}
