/**
 * Post-build prerender. Runs after `vite build` (client) and `vite build --ssr` (server bundle):
 * renders every route with react-dom/server, injects the HTML into the built index.html shell,
 * swaps the head tags (title, description, canonical, og/twitter, JSON-LD) from src/lib/pageMeta.ts,
 * and writes dist/<route>/index.html. The bare dist/index.html stays as the SPA fallback for
 * unknown paths (vercel.json rewrite). Client hydrates via hydrateRoot in src/main.tsx.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = path.resolve('dist');
const SSR_DIR = path.resolve('dist-ssr');
const ORIGIN = 'https://www.worldsmilesnyc.com';

// route -> pageMeta key. Landing routes are prerendered too (they're real pages) but noindexed via robots.txt.
const ROUTES = {
  '/': 'HomePage',
  '/services': 'ServicesPage',
  '/about': 'AboutPage',
  '/before-after': 'BeforeAfterPage',
  '/reviews': 'ReviewsPage',
  '/second-opinion': 'SecondOpinionPage',
  '/contact': 'ContactPage',
  '/patient-forms': 'PatientFormsPage',
  '/patient-instructions': 'PatientInstructionsPage',
  '/insurance': 'InsurancePage',
  '/technology': 'TechnologyPage',
  '/faq': 'FAQPage',
  '/blog': 'JournalPage',
  '/accessibility': 'AccessibilityPage',
  '/privacy': 'PrivacyPage',
  '/terms': 'TermsPage',
  '/landing': 'LandingPage',
  '/landing/book': 'LandingBookPage',
  '/landing/insurance': 'LandingInsurancePage',
  '/test': 'HomePageTest',
  '/test/services': 'ServicesPageTest',
};
// Routes that must not be indexed (paid-traffic landing pages, client-review test pages).
const NOINDEX = (route) => route.startsWith('/landing') || route.startsWith('/test');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const { render, PAGE_META } = await import(pathToFileURL(path.join(SSR_DIR, 'entry-server.js')).href);
if (!PAGE_META) throw new Error('PAGE_META not exported from SSR bundle');

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('index.html shell has no empty #root');

// The shell's head carries the HOME page's tags. Replace each with the route's own.
function buildHead(head, route, meta) {
  const url = `${ORIGIN}${route === '/' ? '/' : route}`;
  const rep = (re, val, label) => { if (!re.test(head)) throw new Error(`head tag missing: ${label}`); head = head.replace(re, val); };
  rep(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`, 'title');
  rep(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(meta.description)}" />`, 'description');
  rep(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, 'canonical');
  rep(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  rep(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(meta.title)}" />`, 'og:title');
  rep(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(meta.description)}" />`, 'og:description');
  rep(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(meta.title)}" />`, 'twitter:title');
  rep(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(meta.description)}" />`, 'twitter:description');
  if (route !== '/') {
    // Swap the home JSON-LD for the page's own (or drop it when the page has none).
    const ld = meta.jsonLd ? `<script type="application/ld+json" id="page-jsonld">${meta.jsonLd.replace(/<\/script/gi, '<\\/script')}</script>` : '';
    rep(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, ld, 'json-ld');
  }
  if (NOINDEX(route)) rep(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, nofollow" />', 'robots');
  return head;
}

let count = 0;
for (const [route, key] of Object.entries(ROUTES)) {
  const meta = PAGE_META[key];
  if (!meta) throw new Error(`no pageMeta for ${key}`);
  const appHtml = render(route);
  if (!appHtml || appHtml.length < 500) throw new Error(`empty render for ${route}`);
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const headStart = html.indexOf('<head>'), headEnd = html.indexOf('</head>') + 7;
  html = html.slice(0, headStart) + buildHead(html.slice(headStart, headEnd), route, meta) + html.slice(headEnd);
  const outDir = route === '/' ? DIST : path.join(DIST, route.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  count++;
}
// Home replaced dist/index.html in the loop; keep a bare shell for the SPA fallback (unknown paths → NotFoundPage renders client-side).
fs.writeFileSync(path.join(DIST, '404.html'), template);
fs.rmSync(SSR_DIR, { recursive: true, force: true });
console.log(`prerendered ${count} routes`);
