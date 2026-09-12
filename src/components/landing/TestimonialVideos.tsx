import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import { testimonials, testimonialsCopy } from '../../config/testimonials.config';
import { t } from '../../config/qualification.config';
import type { Locale } from '../../config/qualification.config';
import { track } from '../../lib/analytics';

/**
 * Vertical (9:16) testimonial videos on Bunny Stream (brief §9).
 *  - No iframe in the DOM until tap. Poster + play button only.
 *  - Exactly one iframe mounted at a time; switching or closing UNMOUNTS it (a hidden
 *    Bunny iframe keeps playing).
 *  - Scrolling the active video out of view on mobile also unmounts it.
 *  - Tap-to-play with sound: autoplay=true, muted=false on the mounted iframe.
 *  - Renders nothing while the config list is empty.
 */
export default function TestimonialVideos({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<number | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Unmount the player when its card leaves the viewport (swipe/scroll on mobile).
  useEffect(() => {
    if (active === null) return;
    const el = itemRefs.current[active];
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => { if (entry.intersectionRatio < 0.4) setActive(null); }, { threshold: [0.4] });
    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  if (testimonials.length === 0) return null;

  const play = (i: number) => {
    setActive(i);
    track('testimonial_play', { index: i });
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white border-t border-pract-sage/20">
      <div className="max-w-6xl mx-auto">
        <span className="block text-center text-pract-gold font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3">{t(testimonialsCopy.eyebrow, locale)}</span>
        <h2 className="text-center font-serif text-3xl md:text-4xl font-semibold mb-3 text-pract-charcoal">{t(testimonialsCopy.title, locale)}</h2>
        <p className="text-center text-sm md:text-base text-pract-charcoal/70 max-w-xl mx-auto mb-10">{t(testimonialsCopy.subtitle, locale)}</p>

        {/* Mobile: horizontal snap rail, one full-width slide per video with the 9:16 card centered inside it.
            Desktop: cards side by side (max 3 across), centered as a group, capped at ~580px tall. */}
        <div className="flex gap-0 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-2 md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((v, i) => (
            <div
              key={v.id}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="snap-center shrink-0 w-full md:w-[326px] flex flex-col items-center"
            >
              <div className="relative w-full max-w-[320px] md:max-w-none rounded-2xl overflow-hidden bg-pract-black shadow-lg border border-pract-sage/30" style={{ aspectRatio: '9 / 16' }}>
                {active === i ? (
                  <>
                    <iframe
                      src={`${v.embedSrc}?autoplay=true&muted=false&loop=false&preload=true&responsive=true`}
                      className="absolute inset-0 w-full h-full"
                      style={{ aspectRatio: '9 / 16', border: 'none' }}
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      title={t(v.ariaLabel, locale)}
                    />
                    <button
                      type="button"
                      onClick={() => setActive(null)}
                      aria-label={t(testimonialsCopy.close, locale)}
                      className="absolute top-2 right-2 z-10 w-11 h-11 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black cursor-pointer"
                    >
                      <X size={20} />
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => play(i)}
                    aria-label={`${t(testimonialsCopy.play, locale)}: ${t(v.ariaLabel, locale)}`}
                    className="group absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-pract-gold"
                  >
                    <img src={v.poster} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <span className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full bg-pract-gold text-pract-black flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                        <Play size={26} fill="currentColor" className="ml-1" />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              {v.pullQuote && (
                <p className="mt-3 max-w-[320px] text-center font-serif italic text-base text-pract-charcoal/85 leading-snug">“{t(v.pullQuote, locale)}”</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
