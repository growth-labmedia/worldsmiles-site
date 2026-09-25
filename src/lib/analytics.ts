/**
 * Funnel analytics — step-level progression only (brief §7).
 *
 * The event map below is the ONLY thing that can be sent. Every payload is typed to
 * step numbers / indexes; there is no way to pass an answer value, a service name,
 * a carrier, or any free-form string through this function. Do not widen these types.
 *
 * Transport: pushes to `window.dataLayer` (GTM-compatible). Nothing consumes it until
 * a tag manager or analytics tag is added to index.html. No Meta pixel calls here —
 * Meta tracking is page-based and handled outside the code.
 */

/** GA4 measurement ID. Replace the placeholder with the real one (Admin → Data Streams → Web). Only place it lives. */
export const GA_MEASUREMENT_ID = 'G-XXXXXXX';
const GA_CONFIGURED = /^G-[A-Z0-9]{6,}$/.test(GA_MEASUREMENT_ID) && !GA_MEASUREMENT_ID.includes('XXXX');

type Step = 1 | 2 | 3;

interface EventParams {
  qual_step_viewed: { step: Step };
  qual_step_completed: { step: Step; ms?: number };
  qual_abandoned: { last_step: Step };
  testimonial_play: { index: number };
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Loads gtag.js once. page_view is sent manually on route change (SPA), not on config. */
export function initAnalytics(): void {
  if (typeof window === 'undefined' || window.gtag) return;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag() { window.dataLayer!.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  if (!GA_CONFIGURED) {
    if (import.meta.env.DEV) console.warn('[analytics] GA_MEASUREMENT_ID is a placeholder; gtag.js not loaded');
    return;
  }
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
}

export function trackPageView(path: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path, page_location: window.location.href, page_title: document.title });
}

/** GA4 recommended event for a completed lead form (Formspree contact + journal subscribe). No PII in params. */
export function trackGenerateLead(form: 'contact' | 'subscribe'): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'generate_lead', { form });
}

export function track<E extends keyof EventParams>(event: E, params: EventParams[E]): void {
  const payload = { event, ...params };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
  if (window.gtag) window.gtag('event', event, params);
  if (import.meta.env.DEV) console.debug('[track]', payload);
}
