import { ShieldCheck } from 'lucide-react';
import BeforeAfterSlider from '../BeforeAfterSlider';
import { caseResults, caseSectionCopy, SHOW_CASE_RESULTS } from '../../config/cases.config';
import { t } from '../../config/qualification.config';
import type { Locale } from '../../config/qualification.config';
import { translations } from '../../lib/translations';

/**
 * Case result cards for the LP (brief §8). Card markup ported from the main site's
 * /before-after page; section chrome matches the LP section it replaces.
 * Renders nothing when SHOW_CASE_RESULTS is false.
 */
export default function CaseResultCards({ locale }: { locale: Locale }) {
  if (!SHOW_CASE_RESULTS) return null;
  const c = caseSectionCopy;
  return (
    <section className="py-20 px-4 md:px-8 bg-pract-cream border-t border-pract-sage/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-serif text-3xl md:text-4xl font-semibold mb-4 text-pract-charcoal">
          {translations[locale].proof_title}
        </h2>
        <p className="text-center text-sm md:text-base text-pract-charcoal/70 max-w-2xl mx-auto mb-10 md:mb-12 inline-flex items-start gap-2 w-full justify-center">
          <ShieldCheck className="w-4 h-4 mt-1 text-pract-gold shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span>{t(c.consentStatement, locale)}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {caseResults.map((cs) => (
            <div key={cs.id} className="rounded-xl border border-[#E7E2D8] bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <BeforeAfterSlider
                beforeSrc={cs.before}
                afterSrc={cs.after}
                beforeAlt={t(cs.beforeAlt, locale)}
                afterAlt={t(cs.afterAlt, locale)}
                labels={{ before: t(c.sliderLabels.before, locale), after: t(c.sliderLabels.after, locale) }}
              />
              <div className="p-5">
                <span className="mb-2 inline-block text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">{t(cs.category, locale)}</span>
                <h4 className="text-[1rem] md:text-[1.0625rem] leading-[1.4] font-medium text-[#0A0A0A]">{t(cs.headline, locale)}</h4>
                <p className="mt-2 text-[0.875rem] text-[#5C5C5C] leading-[1.55]">{t(cs.body, locale)}</p>
                <div className="mt-3 pt-3 border-t border-[#E7E2D8] text-[0.75rem] text-[#5C5C5C] flex items-center gap-3">
                  <span>
                    {cs.treatmentTime ? `${t(c.treatmentTimeLabel, locale)}: ${t(cs.treatmentTime, locale)} · ` : ''}
                    {t(c.consentLine, locale)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
