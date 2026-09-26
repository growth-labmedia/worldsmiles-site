/**
 * Dedicated service pages (/services/<slug>). Each page is DATA rendered by
 * components/ServicePageTemplate.tsx. Facts come only from copy already on the site
 * (ServicesPage, FAQPage, pageMeta). Anything not on the site is marked TODO(client).
 */
import { ScanLine, FileText, Sparkles, Ruler, Wrench, Smile, CalendarCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import implantsHero from '../assets/services/implants-hero.jpg';
import implantsIntraoral from '../assets/services/implants-intraoral.jpg';
import allOnXHero from '../assets/services/all-on-x-hero.jpg';
import denturesHero from '../assets/services/dentures-complete-hero.jpg';
import denturesPartial from '../assets/services/dentures-partial-hero.jpg';
import overdenturesHero from '../assets/services/overdentures-hero.jpg';
import veneersHero from '../assets/services/veneers-hero.jpg';
import veneersDetail from '../assets/services/veneers-detail.jpg';
import implantsBefore from '../assets/cases/case-01-implants-before.jpg';
import implantsAfter from '../assets/cases/case-01-implants-after.jpg';
import veneersBefore from '../assets/cases/case-01-veneers-before.jpg';
import veneersAfter from '../assets/cases/case-01-veneers-after.jpg';
import fmrBefore from '../assets/cases/case-03-fmr-before.jpg';
import fmrAfter from '../assets/cases/case-03-fmr-after.jpg';

const ORIGIN = 'https://www.worldsmilesnyc.com';
const DENTIST_ID = `${ORIGIN}/#dentist`;

export interface ServiceFaq { q: string; a: string; todo?: boolean }
export interface ServiceStep { icon: LucideIcon; title: string; text: string }
export interface ServiceData {
  slug: string;
  metaKey: string;
  name: string;            // "Dental Implants"
  shortName: string;       // used in buttons: "Request an appointment for <shortName>"
  contactValue: string;    // /contact?service=<value>
  h1: string;
  intro: string;           // one plain sentence
  hero: { src: string; alt: string };
  secondaryImage?: { src: string; alt: string; caption: string };
  isFor: string[];
  keyFacts: string[];
  steps: ServiceStep[];
  result?: { before: string; after: string; beforeAlt: string; afterAlt: string; caption: string };
  faqs: ServiceFaq[];
  related: string[];       // slugs
  meta: { title: string; description: string };
  procedureDescription: string; // for MedicalProcedure JSON-LD
}

const BY_DR = 'Performed by an NYU-trained prosthodontist. Russian spoken.';
export const PERFORMED_BY = BY_DR;

export const SERVICES: ServiceData[] = [
  {
    slug: 'dental-implants',
    metaKey: 'ServiceDentalImplantsPage',
    name: 'Dental Implants',
    shortName: 'Dental Implants',
    contactValue: 'dental-implants',
    h1: 'Dental Implants in Sheepshead Bay, Brooklyn',
    intro: 'A titanium post that fuses to your jawbone and supports a crown, bridge, or full-arch restoration. Chew, talk, forget it\'s there.',
    hero: { src: implantsHero, alt: 'Illustration of a single dental implant with a crown placed in the lower jaw' },
    secondaryImage: { src: implantsIntraoral, alt: 'Single tooth implant abutment in the mouth before the crown is placed', caption: 'Single tooth implant placement.' },
    isFor: [
      'One missing tooth, without disturbing the neighboring teeth',
      'Several missing teeth, often supporting a bridge',
      'An entire upper or lower arch (see All-on-X)',
      'A removable denture you would like anchored to implants',
    ],
    keyFacts: [
      'Single, multiple, or All-on-4 / full-arch options',
      'Restoration designed BEFORE implant placement',
      '3–6 months from placement to final restoration typical',
      'Decades of expected lifespan with proper care',
      'Surgical placement coordinated with partner specialists',
    ],
    steps: [
      { icon: ScanLine, title: 'Consultation & 3D scan', text: 'About an hour. We look at the images and talk.' },
      { icon: FileText, title: 'Written plan & locked pricing', text: 'The final crown is designed before the implant goes in.' },
      { icon: Sparkles, title: 'Placement, healing, final crown', text: 'Typically 3–6 months from placement to finish.' },
    ],
    result: { before: implantsBefore, after: implantsAfter, beforeAlt: 'Before: 7 implants with periodontal coordination', afterAlt: 'After: 7 implants with periodontal coordination', caption: 'Seven implants and full-mouth zirconia restorations. Treatment time 14–16 months. Used with patient consent.' },
    faqs: [
      { q: 'How much do dental implants cost in Brooklyn?', a: 'A single implant typically starts at $4,000 for a straightforward case — healthy jaw, no bone grafting, standard materials. Cases involving grafting, multiple implants, or premium materials run higher; full-arch solutions are priced separately. Your consultation includes a written plan with locked-in pricing for your exact case.' },
      { q: 'How long do dental implants last?', a: 'Properly placed and well-maintained, an implant can last 25 years or more — often a lifetime. The titanium post outlasts the crown on top; crowns are typically replaced every 10–15 years.' },
      { q: 'Are dental implants painful?', a: 'The procedure is performed under local anesthesia, with additional sedation available if anxiety is a factor. Recovery is similar to a tooth extraction — manageable with over-the-counter pain medication, most discomfort resolving within a few days.' },
      { q: 'How long does the whole process take?', a: 'From placement to the final restoration is typically 3–6 months, depending on healing. Your written plan gives the timeline for your specific case.' },
    ],
    related: ['all-on-x', 'dentures', 'full-mouth-reconstruction'],
    meta: {
      title: 'Dental Implants in Sheepshead Bay, Brooklyn | World Smiles',
      description: 'Dental implants from an NYU-trained prosthodontist in Sheepshead Bay, Brooklyn. Single, multiple, or full-arch, designed before placement. Call 347-378-7827.',
    },
    procedureDescription: 'Dental implant placement and restoration: single, multiple, and full-arch implants with the final restoration designed before placement.',
  },
  {
    slug: 'all-on-x',
    metaKey: 'ServiceAllOnXPage',
    name: 'All-on-X Full-Arch Implants',
    shortName: 'All-on-X',
    contactValue: 'all-on-x',
    h1: 'All-on-X Full-Arch Implants in Sheepshead Bay, Brooklyn',
    intro: 'A full upper or lower arch of teeth supported by four to six implants (All-on-4 / All-on-6), designed before the implants are placed.',
    hero: { src: allOnXHero, alt: 'Illustration of a full-arch All-on-X restoration supported by implants in the upper jaw' },
    secondaryImage: { src: overdenturesHero, alt: 'Illustration of an implant-supported overdenture on the lower jaw', caption: 'Implant-supported overdenture: the removable alternative.' },
    isFor: [
      'Most or all teeth missing in an upper or lower arch',
      'A full denture that slips, clicks, or needs adhesive',
      'Teeth across an arch that cannot be saved',
    ],
    keyFacts: [
      'Four to six strategically placed implants per arch',
      'Restoration designed BEFORE implant placement',
      'Upper arch, lower arch, or both',
      'Removable alternative: an overdenture anchored to two to four implants, no adhesive',
      'Chewing force significantly higher than conventional dentures',
      'Surgical placement coordinated with partner specialists',
    ],
    steps: [
      { icon: ScanLine, title: 'Consultation & 3D scan', text: 'We assess the arch and plan the implant positions.' },
      { icon: FileText, title: 'Written plan & locked pricing', text: 'Full-arch cases are priced separately, in writing.' },
      { icon: Sparkles, title: 'Implants placed, then the final arch', text: 'Restoration follows healing.' },
    ],
    faqs: [
      { q: 'How much does a full-arch (All-on-X) restoration cost?', a: 'Full-arch solutions are priced separately from single implants. Your consultation includes a written plan with locked-in pricing for your exact case.' },
      { q: 'What is the difference between All-on-X and an overdenture?', a: 'All-on-X replaces an entire arch on four to six implants. An overdenture clips onto two to four implants instead of resting on the gums, is removable for cleaning, and needs no adhesive. Which fits depends on your case and is discussed at the consultation.' },
      { q: 'How long does it take?', a: 'For implants, 3–6 months from placement to the final restoration is typical. Your written plan gives the timeline for a full-arch case.' },
      // TODO(client): add "Will I have teeth while the implants heal?" once the staging is confirmed.
    ],
    related: ['dental-implants', 'dentures', 'full-mouth-reconstruction'],
    meta: {
      title: 'All-on-X Full-Arch Implants in Brooklyn | World Smiles',
      description: 'All-on-4 and All-on-6 full-arch implants in Sheepshead Bay, Brooklyn, planned by an NYU-trained prosthodontist. Fixed or overdenture options. Call 347-378-7827.',
    },
    procedureDescription: 'Full-arch implant restoration (All-on-4 / All-on-6) replacing an entire upper or lower arch on four to six implants, with implant-supported overdenture alternatives.',
  },
  {
    slug: 'dentures',
    metaKey: 'ServiceDenturesPage',
    name: 'Dentures',
    shortName: 'Dentures',
    contactValue: 'dentures',
    h1: 'Dentures in Sheepshead Bay, Brooklyn',
    intro: 'Complete dentures, partial dentures, and implant-supported overdentures, designed to your face and verified for fit before final fabrication.',
    hero: { src: denturesHero, alt: 'Custom complete upper and lower dentures on a dark background' },
    secondaryImage: { src: denturesPartial, alt: 'Metal-framework partial denture held in a gloved hand', caption: 'Removable partial denture.' },
    isFor: [
      'All teeth missing in an arch (complete denture)',
      'Some natural teeth remaining (partial denture)',
      'A denture that slips, clicks, or needs adhesive (implant-supported overdenture)',
    ],
    keyFacts: [
      'Custom-fit to your face, not off a shelf',
      'Metal-framework and flexible partial options',
      'Bite verified on a working model before final fabrication',
      'Materials designed to look and feel natural',
      'Adjustments and relines included in the first year',
      'Overdentures anchor to two to four implants — no adhesive, removable for cleaning',
    ],
    steps: [
      { icon: ScanLine, title: 'Consultation & impressions', text: 'We plan the set around your face and bite.' },
      { icon: Ruler, title: 'Design & bite check', text: 'Verified on a working model before fabrication.' },
      { icon: Smile, title: 'Fitting & adjustments', text: 'Relines and adjustments included in year one.' },
    ],
    faqs: [
      { q: 'What is the difference between a complete and a partial denture?', a: 'A complete denture replaces a full upper or lower arch. A partial replaces missing teeth while keeping the healthy ones you still have, with metal-framework or flexible options.' },
      { q: 'Can my denture be anchored to implants?', a: 'Yes. An overdenture clips onto two to four implants instead of resting on the gums: no slipping, no adhesive, and chewing force significantly higher than a conventional denture. It stays removable for cleaning.' },
      { q: 'Are adjustments included?', a: 'Adjustments and relines are included in the first year.' },
      // TODO(client): add "How long do dentures last?" once typical lifespan / reline timing is confirmed.
    ],
    related: ['all-on-x', 'dental-implants', 'full-mouth-reconstruction'],
    meta: {
      title: 'Dentures in Sheepshead Bay, Brooklyn | World Smiles',
      description: 'Complete, partial, and implant-supported dentures by an NYU-trained prosthodontist in Sheepshead Bay, Brooklyn. Custom-fit, bite verified. Call 347-378-7827.',
    },
    procedureDescription: 'Complete dentures, removable partial dentures, and implant-supported overdentures, custom designed and bite-verified before fabrication.',
  },
  {
    slug: 'full-mouth-reconstruction',
    metaKey: 'ServiceFullMouthPage',
    name: 'Full Mouth Reconstruction',
    shortName: 'Full Mouth Reconstruction',
    contactValue: 'full-mouth-reconstruction',
    h1: 'Full Mouth Reconstruction in Sheepshead Bay, Brooklyn',
    intro: 'A coordinated plan that rebuilds multiple teeth, sometimes the whole mouth, with implants, crowns, bridges, and veneers, sequenced by one prosthodontist.',
    hero: { src: allOnXHero, alt: 'Illustration of a full-arch restoration, one component of a full mouth reconstruction' },
    isFor: [
      'Many teeth with problems at once: failed crowns, missing teeth, worn enamel, bite issues, gum recession',
      'Severe wear or a bite that has collapsed over the years',
      'Multiple failed restorations that need one coordinated plan',
    ],
    keyFacts: [
      'Usually 6–12 months, staged across visits',
      'Combines implants, crowns, bridges, sometimes veneers',
      'Written plan with locked pricing at the start',
      'Function and appearance preserved at every stage',
      'Overseen by one prosthodontist',
      'Coordination with other specialists when needed',
    ],
    steps: [
      { icon: ScanLine, title: 'Consultation & 3D scan', text: 'We look at the whole mouth, not one tooth.' },
      { icon: FileText, title: 'One written plan, sequenced & priced', text: 'Locked pricing before anything starts.' },
      { icon: Wrench, title: 'Staged treatment', text: 'Usually 6–12 months, with function at every step.' },
    ],
    result: { before: fmrBefore, after: fmrAfter, beforeAlt: 'Before full mouth ceramic rehabilitation', afterAlt: 'After full mouth ceramic rehabilitation', caption: 'All-ceramic rehabilitation, smile designed first. Used with patient consent.' },
    faqs: [
      { q: 'What is full mouth reconstruction?', a: 'Coordinated rebuilding of multiple teeth — sometimes the entire mouth — to restore both function and aesthetics. Usually a combination of crowns, bridges, implants, and veneers, designed as one cohesive plan. Common causes: severe wear, multiple failed restorations, or bite collapse compounding over years.' },
      { q: 'How much does full mouth reconstruction cost?', a: 'Full-mouth reconstruction typically ranges from $25,000 to $90,000, depending on how many restorations are needed, the materials, and whether implants are involved. Your consultation includes a written plan with locked-in pricing for your specific case — one exact number, not a range.' },
      { q: 'How long does it take?', a: 'Usually 6–12 months, staged across visits. Function and appearance are preserved at every stage, so you are never left without teeth you can use.' },
      { q: 'Do you offer sedation for longer appointments?', a: 'Yes. Options range from oral sedation (a pill taken before your appointment) to deeper sedation for more involved procedures or higher anxiety. Discussed during your consultation.' },
    ],
    related: ['dental-implants', 'all-on-x', 'crowns-bridges'],
    meta: {
      title: 'Full Mouth Reconstruction in Brooklyn | World Smiles',
      description: 'Full mouth reconstruction in Sheepshead Bay, Brooklyn: implants, crowns, bridges, and veneers in one plan by an NYU-trained prosthodontist. Call 347-378-7827.',
    },
    procedureDescription: 'Full mouth reconstruction: coordinated, staged rebuilding of multiple teeth using implants, crowns, bridges, and veneers under one written plan.',
  },
  {
    slug: 'crowns-bridges',
    metaKey: 'ServiceCrownsBridgesPage',
    name: 'Crowns & Bridges',
    shortName: 'Crowns & Bridges',
    contactValue: 'crowns-bridges',
    h1: 'Crowns & Bridges in Sheepshead Bay, Brooklyn',
    intro: 'A crown covers a tooth too damaged for a filling. A bridge replaces missing teeth using neighboring teeth or implants as anchors.',
    hero: { src: veneersDetail, alt: 'Close-up of ceramic dental restorations matched to natural teeth' }, // TODO(client): a crown/bridge photo
    isFor: [
      'A tooth with significant decay, a fracture, or a root canal',
      'One or more missing teeth between healthy teeth',
      'A restoration you want to look like the teeth around it',
    ],
    keyFacts: [
      'All-ceramic restorations, designed for surrounding teeth',
      'Same-day crowns available via CEREC for appropriate cases',
      'Bridge alternatives include implant-supported options',
      'Typical lifespan 15+ years with proper care',
    ],
    steps: [
      { icon: ScanLine, title: 'Consultation & 3D scan', text: 'Digital scan instead of impression goop.' },
      { icon: Ruler, title: 'Designed to match', text: 'Color and contour matched to the surrounding teeth.' },
      { icon: CalendarCheck, title: 'Same-day or two-visit', text: 'CEREC in-office milling, or a lab crown when that is better.' },
    ],
    faqs: [
      { q: 'Do you offer same-day crowns?', a: 'For some cases, yes. 3D scanning and in-office milling let certain crowns be designed, milled, and bonded in a single visit. For more complex cases, a two-visit lab-fabricated crown produces a better long-term outcome. Which approach is right depends on the specific tooth.' },
      { q: 'What is the difference between a veneer and a crown?', a: 'A veneer covers only the front surface of a tooth, used primarily for cosmetic improvement. A crown covers the entire tooth, used when the tooth needs structural restoration — significant decay, fracture, root canal. Veneers preserve more original tooth structure; crowns replace more of it.' },
      { q: 'How long do crowns last?', a: 'A typical lifespan is 15+ years with proper care.' },
      { q: 'Bridge or implant for a missing tooth?', a: 'A bridge anchors to the neighboring teeth or to implants; an implant replaces the tooth on its own without touching the neighbors. Both options are reviewed at your consultation with the written plan.' },
    ],
    related: ['dental-implants', 'veneers', 'full-mouth-reconstruction'],
    meta: {
      title: 'Crowns & Bridges in Sheepshead Bay, Brooklyn | World Smiles',
      description: 'All-ceramic crowns and bridges, including same-day CEREC crowns, from an NYU-trained prosthodontist in Sheepshead Bay, Brooklyn. Call 347-378-7827 to book.',
    },
    procedureDescription: 'All-ceramic dental crowns and bridges, including same-day CEREC crowns for appropriate cases and implant-supported bridge alternatives.',
  },
  {
    slug: 'veneers',
    metaKey: 'ServiceVeneersPage',
    name: 'Porcelain Veneers',
    shortName: 'Porcelain Veneers',
    contactValue: 'veneers',
    h1: 'Porcelain Veneers in Sheepshead Bay, Brooklyn',
    intro: 'Thin custom porcelain shells bonded to the front of your teeth to change color, shape, contour, and proportion.',
    hero: { src: veneersHero, alt: 'Patient smiling with natural-looking porcelain veneers' },
    secondaryImage: { src: veneersDetail, alt: 'Close-up detail of a ceramic veneer', caption: 'Ceramic veneer detail.' },
    isFor: [
      'Front teeth you would like to change in color, shape, or proportion',
      'A smile redesign planned before a specific moment, like a wedding',
      'Cosmetic work that should look like your own teeth, not uniform',
    ],
    keyFacts: [
      'Custom porcelain shells, individually designed',
      'Typically 2–3 visits to complete',
      'Designed to look like natural teeth, not uniform',
      'Color and contour matched per-tooth',
      'Smile design completed before any prep work',
      'Whitening first, then veneers matched to the new shade',
    ],
    steps: [
      { icon: ScanLine, title: 'Consultation & smile design', text: 'The look is planned before any prep work.' },
      { icon: Ruler, title: 'Per-tooth color & contour', text: 'Each veneer is matched individually.' },
      { icon: Smile, title: 'Bonded in 2–3 visits', text: 'Typical time to complete.' },
    ],
    result: { before: veneersBefore, after: veneersAfter, beforeAlt: 'Before: ceramic veneer reconstruction', afterAlt: 'After: ceramic veneer reconstruction', caption: 'Veneers as full functional reconstruction. Treatment time 3 months. Used with patient consent.' },
    faqs: [
      { q: 'How long do porcelain veneers last?', a: 'A well-made porcelain veneer typically lasts 10–20 years. Actual lifespan depends on the original design, the bonding, and your bite — patients who grind at night often shorten the lifespan unless a nightguard is part of the plan.' },
      { q: 'What is the difference between a veneer and a crown?', a: 'A veneer covers only the front surface of a tooth, used primarily for cosmetic improvement. A crown covers the entire tooth, used when the tooth needs structural restoration. Veneers preserve more original tooth structure; crowns replace more of it.' },
      { q: 'Should I whiten before getting veneers?', a: 'Whitening is most effective when planned in coordination with any restorative work — we typically whiten first, then match veneers or crowns to the new shade. In-office and take-home whitening are both available.' },
      { q: 'How many visits does it take?', a: 'Typically 2–3 visits to complete, with the smile design finished before any preparation.' },
    ],
    related: ['crowns-bridges', 'full-mouth-reconstruction', 'dental-implants'],
    meta: {
      title: 'Porcelain Veneers in Sheepshead Bay, Brooklyn | World Smiles',
      description: 'Porcelain veneers designed per tooth by an NYU-trained prosthodontist in Sheepshead Bay, Brooklyn. Natural-looking, typically 2–3 visits. Call 347-378-7827.',
    },
    procedureDescription: 'Custom porcelain veneers, individually designed and color-matched per tooth, with smile design completed before preparation.',
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

// ---- JSON-LD + pageMeta entries, generated from the data above ----
function jsonLdFor(s: ServiceData): string {
  const url = `${ORIGIN}/services/${s.slug}`;
  const graph: unknown[] = [
    { '@type': 'Dentist', '@id': DENTIST_ID, name: 'World Smiles Prosthodontics', url: `${ORIGIN}/`, telephone: '+1-347-378-7827', image: `${ORIGIN}/og-image.jpg`, address: { '@type': 'PostalAddress', streetAddress: '3121 Ocean Avenue, Suite 101', addressLocality: 'Brooklyn', addressRegion: 'NY', postalCode: '11235', addressCountry: 'US' }, medicalSpecialty: 'Prosthodontics', availableLanguage: ['English', 'Russian'] },
    { '@type': 'MedicalProcedure', '@id': `${url}#procedure`, name: s.name, description: s.procedureDescription, url, image: `${ORIGIN}/og-image.jpg`, provider: { '@id': DENTIST_ID }, areaServed: [{ '@type': 'Place', name: 'Sheepshead Bay, Brooklyn, NY' }, { '@type': 'Place', name: 'Brooklyn, NY' }] },
    { '@type': 'Service', '@id': `${url}#service`, name: s.name, serviceType: s.name, url, provider: { '@id': DENTIST_ID }, areaServed: { '@type': 'Place', name: 'Brooklyn, NY' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${ORIGIN}/services` },
      { '@type': 'ListItem', position: 3, name: s.name, item: url },
    ] },
  ];
  const answered = s.faqs.filter((f) => !f.todo);
  if (answered.length) graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: answered.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

export const SERVICE_PAGE_META = Object.fromEntries(
  SERVICES.map((s) => [s.metaKey, { title: s.meta.title, description: s.meta.description, jsonLd: jsonLdFor(s) }]),
) as Record<'ServiceDentalImplantsPage' | 'ServiceAllOnXPage' | 'ServiceDenturesPage' | 'ServiceFullMouthPage' | 'ServiceCrownsBridgesPage' | 'ServiceVeneersPage', { title: string; description: string; jsonLd: string }>;
