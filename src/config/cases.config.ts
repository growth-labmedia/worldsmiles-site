/**
 * Case result cards shown on the landing page (brief §8).
 * Copy is lifted from the main site's /before-after page and trimmed to 2–3 sentences.
 * Images are the same files the main site uses.
 *
 * Meta ad review looks at destination pages and before/after imagery is restricted in
 * ad creative. If the page gets flagged, flip SHOW_CASE_RESULTS to false — one line.
 */
import type { Text } from './qualification.config';
import implantsBefore from '../assets/cases/case-01-implants-before.jpg';
import implantsAfter from '../assets/cases/case-01-implants-after.jpg';
import veneersBefore from '../assets/cases/case-01-veneers-before.jpg';
import veneersAfter from '../assets/cases/case-01-veneers-after.jpg';
import fmrBefore from '../assets/cases/case-03-fmr-before.jpg';
import fmrAfter from '../assets/cases/case-03-fmr-after.jpg';

export const SHOW_CASE_RESULTS = true;

export interface CaseResult {
  id: string;
  category: Text;
  headline: Text;
  body: Text;
  treatmentTime?: Text;
  before: string;
  after: string;
  beforeAlt: Text;
  afterAlt: Text;
}

export const caseSectionCopy = {
  // Section title reuses the LP's existing `proof_title` translation key.
  consentStatement: {
    en: "Each case is a real World Smiles patient, used with their permission. The only thing edited is what's in the frame — no digital retouching.",
    ru: 'Каждый случай — реальный пациент World Smiles, фото используются с его разрешения. Единственное, что изменено, — это кадрирование. Никакой цифровой ретуши.',
  },
  consentLine: { en: 'Used with patient consent', ru: 'С согласия пациента' },
  treatmentTimeLabel: { en: 'Treatment time', ru: 'Срок лечения' },
  sliderLabels: { before: { en: 'Before', ru: 'До' }, after: { en: 'After', ru: 'После' } },
} as const;

export const caseResults: readonly CaseResult[] = [
  {
    id: 'implants-01',
    category: { en: 'IMPLANTS', ru: 'ИМПЛАНТЫ' },
    headline: {
      en: 'Saving the teeth that could be saved, then placing 7 implants for the rest.',
      ru: 'Сохранили зубы, которые можно было спасти, и поставили 7 имплантов вместо остальных.',
    },
    body: {
      en: 'Patient arrived with periodontal disease affecting most teeth — a situation where less specialty-trained dentists often recommend extracting everything and starting over with implants. We took a different approach: working in coordination with periodontics, we placed seven implants where teeth couldn\'t be saved and restored everything with full-mouth zirconia restorations. The teeth that could be saved were saved.',
      ru: 'Пациент обратился с пародонтитом, затронувшим большинство зубов, — в такой ситуации врачи без специализации часто предлагают удалить всё и начать заново с имплантов. Мы пошли другим путём: совместно с пародонтологом поставили семь имплантов там, где зубы спасти было нельзя, и восстановили всё циркониевыми реставрациями. Зубы, которые можно было сохранить, сохранены.',
    },
    treatmentTime: { en: '14–16 months', ru: '14–16 месяцев' },
    before: implantsBefore,
    after: implantsAfter,
    beforeAlt: { en: 'Before: 7 implants with periodontal coordination', ru: 'До: 7 имплантов с участием пародонтолога' },
    afterAlt: { en: 'After: 7 implants with periodontal coordination', ru: 'После: 7 имплантов с участием пародонтолога' },
  },
  {
    id: 'veneers-01',
    category: { en: 'VENEERS', ru: 'ВИНИРЫ' },
    headline: {
      en: 'Veneers as full functional reconstruction.',
      ru: 'Виниры как полное функциональное восстановление.',
    },
    body: {
      en: 'A cosmetic redesign of the patient\'s smile — and a functional rebuild using all-ceramic veneers as the restorative material. The vertical dimension of the bite had collapsed and needed to be reestablished. Function, bite alignment, and aesthetics addressed together.',
      ru: 'Эстетическое преображение улыбки — и одновременно функциональное восстановление с помощью цельнокерамических виниров. Высота прикуса была снижена, и её нужно было восстановить. Функция, положение прикуса и эстетика решены вместе.',
    },
    treatmentTime: { en: '3 months', ru: '3 месяца' },
    before: veneersBefore,
    after: veneersAfter,
    beforeAlt: { en: 'Before: ceramic veneer reconstruction', ru: 'До: восстановление керамическими винирами' },
    afterAlt: { en: 'After: ceramic veneer reconstruction', ru: 'После: восстановление керамическими винирами' },
  },
  {
    id: 'fmr-03',
    category: { en: 'FULL MOUTH RECONSTRUCTION', ru: 'ПОЛНОЕ ВОССТАНОВЛЕНИЕ ЗУБОВ' },
    headline: {
      en: 'All-ceramic rehabilitation — smile designed first, then executed.',
      ru: 'Цельнокерамическая реабилитация — сначала спроектировали улыбку, затем выполнили.',
    },
    body: {
      en: 'Worn dentition with a collapsed vertical dimension and a drifted occlusal plane. The final smile was designed first, then the occlusion and jaw position were rebuilt to support it. All-ceramic crowns placed across the arch, executed in the validated aesthetic position.',
      ru: 'Стёртые зубы, сниженная высота прикуса и смещённая окклюзионная плоскость. Сначала была спроектирована итоговая улыбка, затем под неё восстановлены прикус и положение челюсти. Цельнокерамические коронки по всей дуге, выполненные в проверенном эстетическом положении.',
    },
    before: fmrBefore,
    after: fmrAfter,
    beforeAlt: {
      en: 'Before full mouth ceramic rehabilitation — worn dentition with collapsed vertical dimension',
      ru: 'До полной керамической реабилитации — стёртые зубы со сниженной высотой прикуса',
    },
    afterAlt: {
      en: 'After full mouth ceramic rehabilitation — all-ceramic crowns restoring aesthetics and function',
      ru: 'После полной керамической реабилитации — цельнокерамические коронки, восстановившие эстетику и функцию',
    },
  },
];
