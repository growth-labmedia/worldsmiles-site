import { useEffect } from 'react';
import { PAGE_META } from './pageMeta';

// Sets document.title, meta description, and per-page JSON-LD on route change.
// No third-party libraries; safe to call once at the top of each page component.
export function usePageMeta(page: keyof typeof PAGE_META) {
  useEffect(() => {
    const m = PAGE_META[page];
    if (!m) return;
    document.title = m.title;

    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!desc) { desc = document.createElement('meta'); desc.name = 'description'; document.head.appendChild(desc); }
    desc.content = m.description;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = `https://www.worldsmilesnyc.com${window.location.pathname === '/' ? '/' : window.location.pathname}`;

    const ID = 'page-jsonld';
    document.getElementById(ID)?.remove();
    if (m.jsonLd) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = ID;
      s.text = m.jsonLd;
      document.head.appendChild(s);
    }
    return () => { document.getElementById(ID)?.remove(); };
  }, [page]);
}
