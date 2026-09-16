/**
 * GoHighLevel helpers: inbound-webhook lead POST and the booking-widget embed script.
 */
import { useEffect } from 'react';

export interface LeadPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  /** True only if the patient ticked the SMS consent box. */
  smsConsent: boolean;
}

/** Normalize a US number to E.164 (+1XXXXXXXXXX) so it matches what GHL's calendar stores. Leaves anything unrecognizable as typed. */
export function toE164US(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return raw.trim();
}

/**
 * POST the contact fields to a GHL inbound webhook. Payload is exactly the four fields —
 * nothing about qualification answers is accepted by this function's type.
 * Retries once. Resolves true on success, false on failure. Empty url = skipped (true).
 */
export async function postLeadToGhl(url: string, lead: LeadPayload): Promise<boolean> {
  if (!url) {
    if (import.meta.env.DEV) console.warn('[ghl] webhook url not set; skipping lead POST');
    return true;
  }
  const body = JSON.stringify({ firstName: lead.firstName, lastName: lead.lastName, phone: toE164US(lead.phone), email: lead.email, smsConsent: lead.smsConsent });
  for (let attempt = 0; attempt < 2; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, signal: controller.signal });
      clearTimeout(timer);
      if (res.ok) return true;
    } catch {
      clearTimeout(timer);
    }
  }
  return false;
}

const EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

/** Loads GHL's form_embed.js once, guarded against double-injection across route changes. */
export function useGhlEmbedScript(): void {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const script = document.createElement('script');
    script.src = EMBED_SCRIPT;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }, []);
}
