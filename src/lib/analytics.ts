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

type Step = 1 | 2 | 3;

interface EventParams {
  qual_step_viewed: { step: Step };
  qual_step_completed: { step: Step; ms?: number };
  qual_abandoned: { last_step: Step };
  testimonial_play: { index: number };
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track<E extends keyof EventParams>(event: E, params: EventParams[E]): void {
  const payload = { event, ...params };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
  if (import.meta.env.DEV) console.debug('[track]', payload);
}
