import { useState } from 'react';
import type React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { usePageMeta } from '../lib/seo';
import { FORMSPREE_SUBSCRIBE_ENDPOINT, HONEYPOT_FIELD, submitToFormspree } from '../lib/forms';

export default function JournalPage() {
  usePageMeta('JournalPage');

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setError('');
    const honeypot = (new FormData(e.currentTarget).get(HONEYPOT_FIELD) as string) || '';
    const result = await submitToFormspree(FORMSPREE_SUBSCRIBE_ENDPOINT, {
      email: trimmed,
      [HONEYPOT_FIELD]: honeypot,
      _subject: 'New Journal subscriber — worldsmilesnyc.com',
    });
    if (result.ok) {
      setStatus('success');
    } else {
      console.error('Subscribe submission failed:', result.error);
      setStatus('error');
    }
  };

  return (
    <>
      <section className="bg-[#F7F3EC] py-20 md:py-28 lg:py-32">
        <div className="max-w-[640px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">
            WORLD SMILES JOURNAL
          </span>
          <h1 className="text-[2.25rem] md:text-[3.25rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">
            Coming soon.
          </h1>
          <p className="mt-6 text-[1.0625rem] md:text-[1.125rem] leading-[1.65] text-[#1B1B1B] max-w-[56ch] mx-auto">
            We're preparing patient education articles on implants, full-mouth reconstruction, dental anxiety, and what to expect at every stage of specialist care. Check back soon, or subscribe below to be notified when the first articles publish.
          </p>

          {/* SUBSCRIBE */}
          <div className="mt-10 md:mt-12">
            {status === 'success' ? (
              <div className="bg-white border border-[#C9A961]/30 rounded-xl p-6 md:p-8 text-left sm:text-center" role="status">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A961] shrink-0" strokeWidth={2} />
                  <p className="text-[1rem] text-[#0A0A0A] font-medium">Thank you. You're on the list.</p>
                </div>
                <p className="mt-2 text-[0.9375rem] text-[#5C5C5C] leading-[1.6]">We'll email you when the first articles publish. Nothing else, no marketing list.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="max-w-[480px] mx-auto">
                {/* Honeypot: Formspree silently rejects any submission where this field has a value */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="journal-gotcha">Leave this field empty</label>
                  <input id="journal-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>
                <label htmlFor="journal-email" className="sr-only">Email address</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="journal-email"
                    type="email"
                    name="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={status === 'error' && !!error}
                    className="flex-1 min-h-[48px] px-4 py-3 rounded-lg bg-white border border-[#E7E2D8] text-[1rem] text-[#1B1B1B] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C9A961] focus-visible:ring-2 focus-visible:ring-[#C9A961]/40"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] disabled:bg-[#C9A961]/50 disabled:cursor-not-allowed text-[#0A0A0A] px-6 py-3 min-h-[48px] rounded-lg text-[0.9375rem] font-semibold transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC]"
                  >
                    {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                <p className="mt-3 text-[0.8125rem] text-[#5C5C5C]">No spam. Unsubscribe any time.</p>
                {status === 'error' && (
                  <div className="mt-4 bg-[#A23B3B]/10 border border-[#A23B3B]/30 rounded-lg p-4 text-[0.9375rem] text-[#A23B3B] text-left" role="alert">
                    {error || "Something went wrong and we couldn't add your email."} If you're having trouble, please call us at <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center min-h-[48px] min-w-[48px] justify-center px-1 font-semibold underline">347-378-7827</a>.
                  </div>
                )}
              </form>
            )}
          </div>

          {/* DIVIDER + SECONDARY CTA */}
          <div className="w-12 h-px bg-[#C9A961] mx-auto mt-12 md:mt-14" />
          <p className="mt-7 text-[0.9375rem] text-[#5C5C5C]">In the meantime, have a specific question?</p>
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC] rounded min-h-[48px]"
          >
            Schedule a consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
          </Link>
        </div>
      </section>
    </>
  );
}
