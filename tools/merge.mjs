// One-off merge script: generates src/components/* and src/pages/* from the 17 AI Studio projects.
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.join(process.env.HOME, 'Downloads/world-smiles-source');
const OUT = path.join(process.env.HOME, 'Documents/worldsmiles-site/src');
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); console.log('wrote', path.relative(OUT, p), s.split('\n').length, 'lines'); };

// ---------- helpers ----------
function findTagEnd(s, i) {
  let depth = 0, inBt = false, inDq = false, inSq = false;
  for (let k = i; k < s.length; k++) {
    const c = s[k];
    if (inBt) { if (c === '`') inBt = false; continue; }
    if (inDq) { if (c === '"') inDq = false; continue; }
    if (inSq) { if (c === "'") inSq = false; continue; }
    if (c === '`') { inBt = true; continue; }
    if (c === '"') { inDq = true; continue; }
    if (c === "'" && depth > 0) { inSq = true; continue; }
    if (c === '{') depth++;
    else if (c === '}') depth--;
    else if (c === '>' && depth === 0) return k;
  }
  throw new Error('unterminated tag at ' + i);
}
// Convert <a href="/internal">…</a> to <Link to="/internal">…</Link>. External/tel/mailto/hash untouched.
function linkify(s) {
  let out = '', i = 0, used = false;
  for (;;) {
    const idx = s.indexOf('<a', i);
    if (idx === -1) { out += s.slice(i); break; }
    if (!/\s/.test(s[idx + 2])) { out += s.slice(i, idx + 2); i = idx + 2; continue; }
    const close = findTagEnd(s, idx);
    const tag = s.slice(idx, close + 1);
    if (!/href="\/[^"]*"/.test(tag) || /target="_blank"/.test(tag)) { out += s.slice(i, close + 1); i = close + 1; continue; }
    const endIdx = s.indexOf('</a>', close);
    if (endIdx === -1) throw new Error('no </a> after ' + idx);
    const newTag = tag.replace(/^<a/, '<Link').replace(/href="(\/[^"]*)"/, 'to="$1"');
    out += s.slice(i, idx) + newTag + s.slice(close + 1, endIdx) + '</Link>';
    i = endIdx + 4; used = true;
  }
  return { out, used };
}
const ARIA_TEL = 'aria-label="Call World Smiles Prosthodontics at 347-378-7827"';
const ARIA_MAIL = 'aria-label="Email World Smiles Prosthodontics"';
function fixContactLinks(s) {
  // add missing aria-labels on tel:/mailto: anchors
  let out = '', i = 0;
  for (;;) {
    const idx = s.indexOf('<a', i);
    if (idx === -1) { out += s.slice(i); break; }
    if (!/\s/.test(s[idx + 2])) { out += s.slice(i, idx + 2); i = idx + 2; continue; }
    const close = findTagEnd(s, idx);
    let tag = s.slice(idx, close + 1);
    if (/href="tel:/.test(tag) && !/aria-label=/.test(tag)) tag = tag.replace(/href="tel:[^"]*"/, (m) => `${m} ${ARIA_TEL}`);
    if (/href="mailto:/.test(tag) && !/aria-label=/.test(tag)) tag = tag.replace(/href="mailto:[^"]*"/, (m) => `${m} ${ARIA_MAIL}`);
    out += s.slice(i, idx) + tag; i = close + 1;
  }
  return out;
}
function lucideNames(src) {
  const m = src.match(/import\s*\{([\s\S]*?)\}\s*from\s*'lucide-react'/);
  return m ? m[1].split(',').map((x) => x.trim()).filter(Boolean) : [];
}
function pruneLucide(names, body) {
  return names.filter((n) => new RegExp(`<${n}\\b`).test(body));
}
function hooksUsed(body) {
  return ['useState', 'useEffect', 'useRef'].filter((h) => new RegExp(`\\b${h}\\(`).test(body));
}
function lineRange(lines, startRe, endRe, fromLine = 0) {
  const s = lines.findIndex((l, i) => i >= fromLine && startRe.test(l));
  const e = lines.findIndex((l, i) => i > s && endRe.test(l));
  if (s === -1 || e === -1) throw new Error(`range not found ${startRe} ${endRe}`);
  return [s, e];
}
function dedent(text, n) {
  return text.split('\n').map((l) => (l.startsWith(' '.repeat(n)) ? l.slice(n) : l.trimStart() === '' ? '' : l)).join('\n');
}
function meta(projectDir) {
  const html = read(path.join(SRC, projectDir, 'index.html'));
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const description = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const ld = (html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/) || [])[1] || '';
  return { title, description, ld: ld.trim() };
}

// ---------- Header / Footer / Layout from home-page ----------
const home = read(path.join(SRC, 'home-page/src/App.tsx'));
const HL = home.split('\n');
const idx = (re, from = 0) => { const i = HL.findIndex((l, k) => k >= from && re.test(l)); if (i < 0) throw new Error('nf ' + re); return i; };

const headerStart = idx(/<a href="#main"/);            // skip link
const headerEnd = idx(/^      <\/header>/);
let headerBody = HL.slice(headerStart, headerEnd + 1).join('\n');
headerBody = fixContactLinks(headerBody);
// close mobile menu when a nav link is clicked
headerBody = headerBody.replace(/<a href="(\/[^"]*)" className=\{`py-3 text-\[1\.125rem\]/g, '<a href="$1" onClick={closeMenus} className={`py-3 text-[1.125rem]');
headerBody = headerBody.replace(/<a href="(\/[^"]*)" className=\{`block py-2 text-\[1rem\]/g, '<a href="$1" onClick={closeMenus} className={`block py-2 text-[1rem]');
headerBody = headerBody.replace(/<a href="\/contact" className="inline-flex items-center justify-center bg-\[#C9A961\] hover:bg-\[#A8893F\] text-\[#0A0A0A\] px-6 py-3\.5/g, '<a href="/contact" onClick={closeMenus} className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3.5');
// dropdown items close the dropdown on click
headerBody = headerBody.replace(/<a href="(\/[^"]*)" className=\{`block px-4 py-3/g, '<a href="$1" onClick={closeMenus} className={`block px-4 py-3');
headerBody = linkify(headerBody).out;
if (!/mt-0 pt-2 w-60/.test(headerBody)) throw new Error('dropdown pt-2 fix missing!');
const header = `import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import logoUrl from '../logo.png';

export const PATIENT_RESOURCE_PATHS = ['/patient-forms', '/patient-instructions', '/insurance', '/technology', '/faq', '/blog'];

export function useCurrentPath() {
  const { pathname } = useLocation();
  return pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patientResourcesOpen, setPatientResourcesOpen] = useState(false);

  // Active-state detection — highlights the current page in nav and dropdown (reactive via React Router).
  const currentPath = useCurrentPath();
  const isPatientResourcesActive = PATIENT_RESOURCE_PATHS.includes(currentPath);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setPatientResourcesOpen(false);
  };

  // Safety net: close menus whenever the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
    setPatientResourcesOpen(false);
  }, [currentPath]);

  return (
    <>
${headerBody}
    </>
  );
}
`;
write(path.join(OUT, 'components/Header.tsx'), header);

const footerStart = idx(/^      <footer /);
const footerEnd = idx(/^      <\/footer>/);
let footerBody = fixContactLinks(HL.slice(footerStart, footerEnd + 1).join('\n'));
footerBody = linkify(footerBody).out;
const footerLucide = pruneLucide(lucideNames(home), footerBody);
const footer = `import { Link } from 'react-router-dom';
import { ${footerLucide.join(', ')} } from 'lucide-react';
import logoUrl from '../logo.png';
import { useCurrentPath } from './Header';

export default function Footer() {
  const currentPath = useCurrentPath();

  return (
${footerBody}
  );
}
`;
write(path.join(OUT, 'components/Footer.tsx'), footer);

const ctaStart = idx(/MOBILE STICKY CTA BAR/);
const ctaEnd = idx(/^      <\/div>/, ctaStart);
let ctaBody = linkify(fixContactLinks(HL.slice(ctaStart, ctaEnd + 1).join('\n'))).out;
const layout = `import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen font-sans text-[#1B1B1B] bg-white antialiased flex flex-col selection:bg-[#C9A961]/30 selection:text-[#0A0A0A]">
      <Header />
      <main id="main" className="pb-24 lg:pb-0 flex-1">
        <Outlet />
      </main>
      <Footer />

${ctaBody}
    </div>
  );
}
`;
write(path.join(OUT, 'components/Layout.tsx'), layout);

// ---------- Pages ----------
const PAGES = [
  ['home-page', 'HomePage'],
  ['service-page', 'ServicesPage'],
  ['about-page', 'AboutPage'],
  ['before-&-after', 'BeforeAfterPage'],
  ['reviews-page', 'ReviewsPage'],
  ['second-opinion-page', 'SecondOpinionPage'],
  ['contact-page', 'ContactPage'],
  ['world-smiles-patient-forms', 'PatientFormsPage'],
  ['world-smiles-patient-instructions', 'PatientInstructionsPage'],
  ['office-technology', 'TechnologyPage'],
  ['faq', 'FAQPage'],
  ['world-smiles-journal', 'JournalPage'],
  ['accessibility', 'AccessibilityPage'],
  ['privacy-policy', 'PrivacyPage'],
  ['terms-of-use', 'TermsPage'],
];
const HEADER_STATE_RE = /mobileMenuOpen|patientResourcesOpen|currentPath|PATIENT_RESOURCE_PATHS|isPatientResourcesActive|rawPath|SET THIS PER APP|^\s*\/\/\s+Options:|^\s*\/\/\s+'\/|^\s*\/\/\s+\/|Active-state detection|In AI Studio preview|To test highlighting/;

const metas = {};
for (const [dir, name] of PAGES) {
  const src = read(path.join(SRC, dir, 'src/App.tsx'));
  const L = src.split('\n');
  const appLine = L.findIndex((l) => /^export default function App/.test(l));
  const retLine = L.findIndex((l, i) => i > appLine && /^  return \(/.test(l));
  const mainOpen = L.findIndex((l, i) => i > retLine && /^\s*<main\b/.test(l));
  const mainClose = L.findIndex((l, i) => i > mainOpen && /^\s*<\/main>/.test(l));
  if (mainOpen < 0 || mainClose < 0) throw new Error('main not found in ' + dir);

  // top-level helpers between imports and App()
  const lastImport = L.reduce((acc, l, i) => (/^import |^} from '/.test(l) ? i : acc), -1);
  let helpers = L.slice(lastImport + 1, appLine).join('\n').replace(/\/\*\*\s*\n\s*\* @license[\s\S]*?\*\/\n?/g, '').trim();
  // hooks/consts inside App() before return (minus header state)
  let hooks = L.slice(appLine + 1, retLine).filter((l) => !HEADER_STATE_RE.test(l)).join('\n').replace(/\n{3,}/g, '\n\n').trim();

  let body = L.slice(mainOpen + 1, mainClose).join('\n');
  body = dedent(body, 2); // main content was at 8 spaces; page fragment content at 6
  body = fixContactLinks(body);

  // per-project specifics
  let extraImports = [];
  if (dir === 'before-&-after') {
    // image imports live in the import block; rewrite path
    const imgImports = L.filter((l) => /from '\.\/cases\//.test(l)).map((l) => l.replace("'./cases/", "'../assets/cases/"));
    extraImports.push(...imgImports);
  }
  if (dir === 'office-technology') {
    const map = { '/Dental room.jpg': ['dentalRoom', 'dental-room.jpg'], '/Dental room 2.jpg': ['dentalRoom2', 'dental-room-2.jpg'], '/3D Scan.jpg': ['scan3d', '3d-scan.jpg'], '/3d Xray.jpg': ['xray3d', '3d-xray.jpg'] };
    for (const [k, [v, f]] of Object.entries(map)) { body = body.split(`src="${k}"`).join(`src={${v}}`); extraImports.push(`import ${v} from '../assets/office/${f}';`); }
  }
  if (dir === 'service-page') {
    const files = [...body.matchAll(/src="\/([a-z0-9-]+\.jpg)"/g)].map((m) => m[1]);
    for (const f of new Set(files)) { const v = f.replace(/\.jpg$/, '').replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()) + 'Img'; body = body.split(`src="/${f}"`).join(`src={${v}}`); extraImports.push(`import ${v} from '../assets/services/${f}';`); }
  }
  if (dir === 'world-smiles-journal') {
    helpers = helpers.replace(/\/\/ Reusable elegant[^\n]*\nconst Logo = [\s\S]*?\n};\n?/, '').trim();
  }
  if (/\bReact\./.test(helpers + hooks + body)) extraImports.unshift(`import type React from 'react';`);

  const { out: linked, used: usesLink } = linkify(body);
  body = linked;
  const helpersLinked = linkify(helpers); helpers = helpersLinked.out;
  const all = helpers + '\n' + hooks + '\n' + body;
  const lucide = pruneLucide(lucideNames(src), all);
  const hooksImp = hooksUsed(all);
  const typeImport = L.find((l) => /^import type \{.*\} from 'react'/.test(l));

  const imports = [];
  if (hooksImp.length) imports.push(`import { ${hooksImp.join(', ')} } from 'react';`);
  if (typeImport) imports.push(typeImport);
  if (usesLink || helpersLinked.used) imports.push(`import { Link } from 'react-router-dom';`);
  if (lucide.length) imports.push(`import { ${lucide.join(', ')} } from 'lucide-react';`);
  imports.push(`import { usePageMeta } from '../lib/seo';`);
  imports.push(...extraImports);

  const m = meta(dir); metas[name] = m;
  const file = `${imports.join('\n')}

${helpers ? helpers + '\n\n' : ''}export default function ${name}() {
  usePageMeta('${name}');
${hooks ? '\n' + hooks + '\n' : ''}
  return (
    <>
${body}
    </>
  );
}
`;
  write(path.join(OUT, 'pages', name + '.tsx'), file);
}

// ---------- Insurance (from InsuranceView.tsx) ----------
{
  const src = read(path.join(SRC, 'insurance-page/src/views/InsuranceView.tsx'));
  const L = src.split('\n');
  const s = L.findIndex((l) => /^  return \(/.test(l));
  const e = L.findIndex((l, i) => i > s && /^  \);/.test(l));
  let body = L.slice(s + 1, e).join('\n');
  body = body.replace(/<button\s+onClick=\{\(e\) => onNavigate\('([^']+)', e\)\}([\s\S]*?)<\/button>/g, '<Link to="$1"$2</Link>');
  body = body.replace(/ cursor-pointer"/g, '"');
  body = fixContactLinks(body);
  body = linkify(body).out;
  const lucide = pruneLucide(lucideNames(src), body);
  metas.InsurancePage = meta('insurance-page');
  write(path.join(OUT, 'pages/InsurancePage.tsx'), `import { Link } from 'react-router-dom';
import { ${lucide.join(', ')} } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function InsurancePage() {
  usePageMeta('InsurancePage');

  return (
    <>
${body}
    </>
  );
}
`);
}

// ---------- Landing page (standalone, keeps its own header/footer) ----------
{
  const dir = 'world-smiles-nyc-landing-page';
  const src = read(path.join(SRC, dir, 'src/App.tsx'));
  const L = src.split('\n');
  const appLine = L.findIndex((l) => /^export default function App/.test(l));
  const retLine = L.findIndex((l, i) => i > appLine && /^  return \(/.test(l));
  const retEnd = L.findIndex((l, i) => i > retLine && /^  \);/.test(l));
  const hooks = L.slice(appLine + 1, retLine).join('\n').trim();
  let body = L.slice(retLine + 1, retEnd).join('\n');
  const helpers = L.slice(retEnd + 2).join('\n').trim(); // CalendarEmbed
  const imgs = { '/Before and after 1.jpeg': ['ba1', 'before-and-after-1.jpeg'], '/Before and after 2.jpeg': ['ba2', 'before-and-after-2.jpeg'], '/Before and after 3.jpeg': ['ba3', 'before-and-after-3.jpeg'], '/Consult Room.jpg': ['consultRoom', 'consult-room.jpg'], '/3D Scan.jpg': ['scan3d', '3d-scan.jpg'], '/Sitting Area.jpg': ['sittingArea', 'sitting-area.jpg'] };
  const imgImports = [];
  for (const [k, [v, f]] of Object.entries(imgs)) { if (!body.includes(`src="${k}"`)) throw new Error('landing img missing ' + k); body = body.split(`src="${k}"`).join(`src={${v}}`); imgImports.push(`import ${v} from '../assets/landing/${f}';`); }
  // footer placeholder links -> real legal pages
  body = body.replace('<a href="#" className="hover:text-pract-gold transition-colors">Privacy Policy</a>', '<a href="/privacy" className="hover:text-pract-gold transition-colors">Privacy Policy</a>');
  body = body.replace('<a href="#" className="hover:text-pract-gold transition-colors">Terms of Service</a>', '<a href="/terms" className="hover:text-pract-gold transition-colors">Terms of Use</a>');
  body = fixContactLinks(body);
  body = linkify(body).out;
  const lucide = pruneLucide(lucideNames(src), body);
  metas.LandingPage = meta(dir);
  fs.copyFileSync(path.join(SRC, dir, 'src/translations.ts'), path.join(OUT, 'lib/translations.ts'));
  write(path.join(OUT, 'pages/LandingPage.tsx'), `import type React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ${lucide.join(', ')} } from 'lucide-react';
import { translations } from '../lib/translations';
import { usePageMeta } from '../lib/seo';
import logoUrl from '../logo.png';
${imgImports.join('\n')}

export default function LandingPage() {
  usePageMeta('LandingPage');
  ${hooks.split('\n').join('\n')}

  return (
${body}
  );
}

${helpers}
`);
}

// ---------- SEO metadata (titles/descriptions/JSON-LD from each project's index.html) ----------
write(path.join(OUT, 'lib/pageMeta.ts'), `// Generated from each source project's index.html. Home's JSON-LD stays in /index.html.
export interface PageMeta { title: string; description: string; jsonLd?: string }

export const PAGE_META: Record<string, PageMeta> = ${JSON.stringify(Object.fromEntries(Object.entries(metas).map(([k, v]) => [k, { title: v.title, description: v.description, ...(k !== 'HomePage' && v.ld ? { jsonLd: v.ld } : {}) }])), null, 2)};
`);
console.log('done');
