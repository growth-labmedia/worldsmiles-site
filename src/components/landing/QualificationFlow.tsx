import { useEffect, useRef, useState } from 'react';
import type React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { qualificationConfig as cfg, t } from '../../config/qualification.config';
import type { Locale, Route } from '../../config/qualification.config';
import { track } from '../../lib/analytics';
import { postLeadToGhl } from '../../lib/ghl';
import GhlCalendar from './GhlCalendar';

type Screen = 'q1' | 'q2' | 'contact' | 'calendar' | 'disqualified';
const STEP_OF: Record<'q1' | 'q2' | 'contact', 1 | 2 | 3> = { q1: 1, q2: 2, contact: 3 };
const TOTAL_STEPS = 3;

interface QualificationFlowProps {
  locale: Locale;
}

/**
 * Button-driven qualification flow (brief §2–§5, §7).
 *
 * Privacy invariants — do not loosen:
 *  - The Q2 (carrier) answer is React state only. It picks the next screen and is never
 *    written to a URL, form field, webhook, or analytics payload.
 *  - The Q1 answer is likewise never transmitted. (See config `frontDeskTag` note.)
 *  - Disqualified = inline screen. No URL change, no contact record, no submission, no restart.
 *  - The webhook receives { firstName, lastName, phone, email } and nothing else.
 *  - Analytics receives step numbers only (typed in lib/analytics.ts).
 */
export default function QualificationFlow({ locale }: QualificationFlowProps) {
  const navigate = useNavigate();
  const [screen, setScreen] = useState<Screen>('q1');
  // View state only. Never persisted anywhere. See invariants above.
  const [pendingRoute, setPendingRoute] = useState<Exclude<Route, 'disqualify'> | null>(null);
  const [lead, setLead] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error' | 'invalid'>('idle');
  const rootRef = useRef<HTMLDivElement>(null);

  // ---- analytics: step viewed / completed / abandoned, time-on-step ----
  const stepStartedAt = useRef<number>(Date.now());
  const lastStep = useRef<1 | 2 | 3>(1);
  const finished = useRef(false);

  useEffect(() => {
    if (screen === 'q1' || screen === 'q2' || screen === 'contact') {
      const step = STEP_OF[screen];
      lastStep.current = step;
      stepStartedAt.current = Date.now();
      track('qual_step_viewed', { step });
    }
  }, [screen]);

  useEffect(() => {
    const onLeave = () => {
      if (!finished.current) track('qual_abandoned', { last_step: lastStep.current });
    };
    window.addEventListener('pagehide', onLeave);
    return () => window.removeEventListener('pagehide', onLeave);
  }, []);

  const completeStep = (step: 1 | 2 | 3) => {
    track('qual_step_completed', { step, ms: Date.now() - stepStartedAt.current });
  };

  const scrollToTop = () => {
    rootRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ---- handlers ----
  const answerQ1 = (route: 'continue' | 'disqualify') => {
    completeStep(1);
    if (route === 'disqualify') {
      finished.current = true; // routed out on purpose; not an abandonment
      setScreen('disqualified');
    } else {
      setScreen('q2');
    }
    scrollToTop();
  };

  const answerQ2 = (route: 'insurance' | 'selfpay') => {
    completeStep(2);
    setPendingRoute(route);
    setScreen('contact');
    scrollToTop();
  };

  const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!lead.firstName.trim() || !lead.lastName.trim() || !lead.phone.trim()) {
      setStatus('invalid');
      return;
    }
    setStatus('submitting');
    const ok = await postLeadToGhl(cfg.webhook.url, {
      firstName: lead.firstName.trim(),
      lastName: lead.lastName.trim(),
      phone: lead.phone.trim(),
      email: lead.email.trim(),
    });
    if (!ok) {
      setStatus('error');
      return;
    }
    completeStep(3);
    finished.current = true;
    setStatus('idle');
    if (pendingRoute === 'insurance') {
      navigate(cfg.routes.insurance); // path only — no query string, no state that names the answer
    } else {
      setScreen('calendar');
      scrollToTop();
    }
  };

  const back = () => {
    if (screen === 'q2') setScreen('q1');
    if (screen === 'contact') { setPendingRoute(null); setScreen('q2'); }
    setStatus('idle');
    scrollToTop();
  };

  // ---- shared bits ----
  const stepLabel = (n: 1 | 2 | 3) => t(cfg.ui.stepOf, locale).replace('{n}', String(n)).replace('{total}', String(TOTAL_STEPS));
  const optionClass =
    'w-full text-left px-4 py-3.5 min-h-[52px] rounded-lg border border-pract-sage/60 bg-pract-cream text-pract-charcoal text-[15px] md:text-base font-medium leading-snug hover:border-pract-gold hover:bg-[#F5F1E8] active:bg-[#F0EADC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pract-gold cursor-pointer';
  const inputClass =
    'w-full min-h-[48px] px-4 py-3 rounded-lg bg-white border border-pract-sage/60 text-base text-pract-charcoal placeholder:text-pract-charcoal/40 focus:outline-none focus:border-pract-gold focus-visible:ring-2 focus-visible:ring-pract-gold/40';

  const Header = ({ step, showBack }: { step: 1 | 2 | 3; showBack: boolean }) => (
    <div className="flex items-center justify-between mb-4">
      <span className="text-pract-gold font-bold tracking-widest text-[11px] uppercase">{stepLabel(step)}</span>
      {showBack && (
        <button type="button" onClick={back} className="inline-flex items-center gap-1 text-sm text-pract-charcoal/70 hover:text-pract-charcoal min-h-[44px] px-2 -mr-2 cursor-pointer">
          <ArrowLeft size={16} /> {t(cfg.ui.back, locale)}
        </button>
      )}
    </div>
  );

  return (
    <div
      ref={rootRef}
      id="book"
      className="w-full bg-white rounded-xl shadow-lg border border-pract-sage/30 p-5 md:p-7 scroll-mt-24"
      aria-live="polite"
    >
      {screen === 'q1' && (
        <div>
          <Header step={1} showBack={false} />
          <p className="text-sm text-pract-charcoal/70 mb-3">{t(cfg.q1.intro!, locale)}</p>
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-pract-charcoal leading-snug">{t(cfg.q1.prompt, locale)}</h3>
          <p className="mt-1.5 mb-5 text-sm text-pract-charcoal/70">{t(cfg.q1.subline!, locale)}</p>
          <div className="grid grid-cols-1 gap-2.5">
            {cfg.q1.options.map((o) => (
              <button key={o.id} type="button" className={optionClass} onClick={() => answerQ1(o.route)}>
                {t(o.label, locale)}
              </button>
            ))}
          </div>
        </div>
      )}

      {screen === 'q2' && (
        <div>
          <Header step={2} showBack />
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-pract-charcoal leading-snug">{t(cfg.q2.prompt, locale)}</h3>
          <p className="mt-1.5 mb-5 text-sm text-pract-charcoal/70">{t(cfg.q2.subline!, locale)}</p>
          {/* Carriers 2-up from sm; "none of the above" always last and full width. Handles 3–15 options. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {cfg.q2.options.map((o, i) => {
              const isLast = i === cfg.q2.options.length - 1;
              return (
                <button
                  key={o.id}
                  type="button"
                  className={`${optionClass} ${isLast ? 'sm:col-span-2 border-dashed' : ''}`}
                  onClick={() => answerQ2(o.route)}
                >
                  {t(o.label, locale)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {screen === 'contact' && (
        <div>
          <Header step={3} showBack />
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-pract-charcoal leading-snug">{t(cfg.contact.heading, locale)}</h3>
          <p className="mt-1.5 mb-5 text-sm text-pract-charcoal/70">{t(cfg.contact.subline, locale)}</p>
          {/* Real <form>, one field per row, standard order, native autocomplete (brief §5). */}
          <form onSubmit={submitContact} noValidate className="space-y-4">
            <div>
              <label htmlFor="qf-first-name" className="block text-sm font-medium text-pract-charcoal mb-1.5">{t(cfg.contact.labels.firstName, locale)}</label>
              <input id="qf-first-name" name="firstName" type="text" autoComplete="given-name" required value={lead.firstName} onChange={(e) => setLead({ ...lead, firstName: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label htmlFor="qf-last-name" className="block text-sm font-medium text-pract-charcoal mb-1.5">{t(cfg.contact.labels.lastName, locale)}</label>
              <input id="qf-last-name" name="lastName" type="text" autoComplete="family-name" required value={lead.lastName} onChange={(e) => setLead({ ...lead, lastName: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label htmlFor="qf-phone" className="block text-sm font-medium text-pract-charcoal mb-1.5">{t(cfg.contact.labels.phone, locale)}</label>
              <input id="qf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label htmlFor="qf-email" className="block text-sm font-medium text-pract-charcoal mb-1.5">{t(cfg.contact.labels.email, locale)}</label>
              <input id="qf-email" name="email" type="email" inputMode="email" autoComplete="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} className={inputClass} />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-pract-gold text-pract-black px-6 py-4 min-h-[52px] rounded-md text-[17px] font-bold hover:bg-pract-gold-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-md cursor-pointer"
            >
              {status === 'submitting' ? t(cfg.contact.submitting, locale) : t(cfg.contact.submit, locale)}
            </button>
            <p className="text-xs text-pract-charcoal/60 text-center">{t(cfg.contact.privacyNote, locale)}</p>
            {status === 'invalid' && (
              <div role="alert" className="bg-[#A23B3B]/10 border border-[#A23B3B]/30 rounded-lg p-4 text-sm text-[#A23B3B]">
                {t(cfg.contact.validation, locale)}
              </div>
            )}
            {status === 'error' && (
              <div role="alert" className="bg-[#A23B3B]/10 border border-[#A23B3B]/30 rounded-lg p-4 text-sm text-[#A23B3B]">
                {t(cfg.contact.error, locale).replace('347-378-7827', '')}
                <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center gap-1 min-h-[48px] px-1 font-semibold underline"><Phone size={14} /> 347-378-7827</a>
              </div>
            )}
          </form>
        </div>
      )}

      {screen === 'calendar' && (
        <div>
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle className="text-pract-gold shrink-0 mt-0.5" size={22} />
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-pract-charcoal leading-snug">{t(cfg.thankYou.selfpay.heading, locale)}</h3>
              <p className="mt-1.5 text-sm text-pract-charcoal/80">{t(cfg.thankYou.selfpay.body, locale)}</p>
            </div>
          </div>
          <GhlCalendar
            calendarId={cfg.calendars.selfpay.calendarId}
            embedId={cfg.calendars.selfpay.embedId}
            title={t(cfg.calendars.selfpay.title, locale)}
            className="!p-0 !shadow-none !bg-transparent"
          />
        </div>
      )}

      {screen === 'disqualified' && (
        <div className="text-center py-4">
          <h3 className="font-serif text-2xl font-semibold text-pract-charcoal">{t(cfg.disqualify.heading, locale)}</h3>
          <p className="mt-3 text-base text-pract-charcoal/80 leading-relaxed max-w-md mx-auto">{t(cfg.disqualify.body, locale)}</p>
          {/* No restart by design. The only exit is the external link. */}
          <a
            href={cfg.disqualify.ctaHref}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-pract-gold text-pract-black px-6 py-3.5 min-h-[48px] rounded-md text-base font-bold hover:bg-pract-gold-hover transition-colors shadow-md"
          >
            <ArrowLeft size={16} aria-hidden="true" /> {t(cfg.disqualify.cta, locale)}
          </a>
        </div>
      )}
    </div>
  );
}
