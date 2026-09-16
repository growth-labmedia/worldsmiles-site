/**
 * Patient testimonial videos (brief §9). Hosted on Bunny Stream — no MP4s in the repo.
 *
 * The section renders nothing while this list is empty.
 * To add one: paste the `src` from the embed code on the video's details page in the
 * Bunny dashboard (do not hand-type the host), set the custom poster URL, and mark the
 * primary (burned-in) caption language.
 *
 * Do not put patient names or treatment types in `id` — it is used for React keys only,
 * and nothing here ever reaches an analytics call (see lib/analytics.ts: index only).
 */
import type { Locale, Text } from './qualification.config';

export interface Testimonial {
  /** Opaque key, e.g. 't1'. */
  id: string;
  /** Embed URL copied from Bunny's dashboard, WITHOUT query params. */
  embedSrc: string;
  /** Custom thumbnail URL (Bunny thumbnail or CDN image), sized for display, 9:16. */
  poster: string;
  /** Language burned into the video. The other language is a VTT track in Bunny. */
  primaryLanguage: Locale;
  /** Accessible name for the play button, e.g. "Patient testimonial 1". No names. */
  ariaLabel: Text;
  /**
   * Optional pull quote shown under the video: one VERBATIM line the patient says on camera
   * (their words, their grammar — never paraphrased). Research: a headline or pull quote per
   * testimonial is what visitors read first. Leave out until the exact line is confirmed.
   */
  pullQuote?: Text;
}

export const testimonials: readonly Testimonial[] = [
  {
    id: 't1',
    embedSrc: 'https://iframe.mediadelivery.net/embed/731039/d5b403c3-17a0-49a6-a43c-8bdec0507655',
    // Bunny's auto thumbnail. Replace with a custom frame (mid-expression) from the video's dashboard page when ready.
    poster: 'https://vz-c10705d0-04c.b-cdn.net/d5b403c3-17a0-49a6-a43c-8bdec0507655/thumbnail.jpg',
    primaryLanguage: 'en', // TODO confirm: which language is burned in?
    ariaLabel: { en: 'Patient testimonial 1', ru: 'Отзыв пациента 1' },
    // pullQuote: PENDING — needs the exact line from the video, verbatim.
  },
  {
    id: 't2',
    embedSrc: 'https://iframe.mediadelivery.net/embed/731039/0e19d42d-ee3c-44e4-a626-bcb79db9b1a1',
    // Bunny's auto thumbnail. Replace with a custom frame from the video's dashboard page when ready.
    poster: 'https://vz-c10705d0-04c.b-cdn.net/0e19d42d-ee3c-44e4-a626-bcb79db9b1a1/thumbnail.jpg',
    primaryLanguage: 'en', // TODO confirm: which language is spoken / burned in?
    ariaLabel: { en: 'Patient testimonial 2', ru: 'Отзыв пациента 2' },
    // pullQuote: PENDING — needs the exact line from the video, verbatim.
  },
];

/**
 * Section copy. Source: ICP brief, messaging hierarchy level 4 ("Real patients, in their own
 * words — including the ones who arrived after two or three other dentists"). The subtitle is
 * [PARAPHRASE] per brief directive d02 — not verbatim patient language.
 */
export const testimonialsCopy = {
  eyebrow: { en: 'REAL PATIENTS, REAL WORK', ru: 'НАСТОЯЩИЕ ПАЦИЕНТЫ, НАСТОЯЩАЯ РАБОТА' },
  title: { en: 'Real patients, in their own words.', ru: 'Настоящие пациенты — своими словами.' },
  subtitle: {
    en: 'Including the ones who arrived after two or three other dentists. Tap to hear what they\'d tell you. Captions in English and Russian.',
    ru: 'В том числе те, кто пришёл после двух-трёх других стоматологов. Нажмите, чтобы услышать, что они бы вам сказали. Субтитры на русском и английском.',
  },
  play: { en: 'Play', ru: 'Смотреть' },
  close: { en: 'Close video', ru: 'Закрыть видео' },
} as const;
