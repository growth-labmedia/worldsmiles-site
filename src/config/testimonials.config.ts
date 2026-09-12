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
}

export const testimonials: readonly Testimonial[] = [
  {
    id: 't1',
    embedSrc: 'https://iframe.mediadelivery.net/embed/731039/d5b403c3-17a0-49a6-a43c-8bdec0507655',
    // Bunny's auto thumbnail. Replace with a custom frame (mid-expression) from the video's dashboard page when ready.
    poster: 'https://vz-c10705d0-04c.b-cdn.net/d5b403c3-17a0-49a6-a43c-8bdec0507655/thumbnail.jpg',
    primaryLanguage: 'en', // TODO confirm: which language is burned in?
    ariaLabel: { en: 'Patient testimonial 1', ru: 'Отзыв пациента 1' },
  },
];

export const testimonialsCopy = {
  title: { en: 'In their own words', ru: 'Их собственными словами' },
  subtitle: { en: 'Tap to play with sound. Captions in English and Russian.', ru: 'Нажмите, чтобы включить со звуком. Субтитры на русском и английском.' },
  play: { en: 'Play', ru: 'Смотреть' },
  close: { en: 'Close video', ru: 'Закрыть видео' },
} as const;
