// Formspree endpoints. Replace the REPLACE_ME ids with the form ids from formspree.io (Form → Integration → endpoint URL).
// While an endpoint still says REPLACE_ME, submissions fail gracefully and the user sees the call-us fallback.
export const FORMSPREE_CONTACT_ENDPOINT = 'https://formspree.io/f/REPLACE_ME_CONTACT';
export const FORMSPREE_SUBSCRIBE_ENDPOINT = 'https://formspree.io/f/REPLACE_ME_SUBSCRIBE';

export const HONEYPOT_FIELD = '_gotcha'; // Formspree's native honeypot: any value here = silently discarded as spam

export type FormResult = { ok: boolean; error?: string };

export async function submitToFormspree(endpoint: string, data: Record<string, string>): Promise<FormResult> {
  if (endpoint.includes('REPLACE_ME')) {
    return { ok: false, error: 'Form endpoint not configured' };
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) return { ok: true };
    let message = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      if (body?.errors?.length) message = body.errors.map((e: { message: string }) => e.message).join(', ');
    } catch { /* non-JSON error body */ }
    return { ok: false, error: message };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Network error' };
  }
}
