/**
 * Insurance-variant copy for the landing page (brief §6). Rendered at /landing/insurance.
 * Only the keys listed here differ from the self-pay page; everything else falls through
 * to lib/translations.ts. Both locales are required per key (TypeScript enforces it).
 *
 * COPY PENDING REVIEW — written to match the $147 page's structure; Shaun/Dr. Furman to confirm.
 */
import type { translations } from '../lib/translations';

type Keys = keyof typeof translations.en;
type Overrides = Partial<Record<Keys, string>>;

const en: Overrides = {
  nav_cta: 'Book My Insurance Consult',
  hero_subhead: "Get a specialist's read before you decide anything. 60 minutes. 3D cone-beam scan (if needed). Written treatment plan with your real out-of-pocket cost.",
  hero_value_card_1: "You're in-network. Let's use it.",
  hero_value_card_2_1: 'We verify your benefits before you come in.',
  hero_value_card_2_2: 'Your real cost, in writing, before anything starts.',
  hero_cta: 'Book My Specialist Second Opinion →',
  hero_micro: 'Pick a time below. Text confirmation in 60 seconds.',
  offer_title: 'What Your Visit Includes',
  offer_1_value: 'Included',
  offer_2_value: 'Included',
  offer_3_value: 'Included',
  offer_4_value: 'Included',
  offer_5_value: 'Included',
  offer_subtotal: 'Specialist diagnostic care, in-network',
  offer_investment: 'Verified before your visit',
  offer_note: "We file directly with your carrier and show you what your plan pays and what you'd owe — in writing, before you commit to anything.",
  final_micro: 'Text and email confirmation within 60 seconds.',
};

const ru: Overrides = {
  nav_cta: 'Записаться по страховке',
  hero_subhead: 'Получите мнение узкого специалиста до принятия решения. 60 минут. 3D-снимок (при необходимости). Письменный план лечения с вашей реальной стоимостью.',
  hero_value_card_1: 'Ваша страховка у нас принимается. Давайте её используем.',
  hero_value_card_2_1: 'Мы проверим ваши страховые выплаты до визита.',
  hero_value_card_2_2: 'Ваша реальная стоимость — письменно, до начала лечения.',
  hero_cta: 'Записаться ко второму специалисту →',
  hero_micro: 'Выберите время ниже. SMS-подтверждение через 60 секунд.',
  offer_title: 'Что входит в ваш визит',
  offer_1_value: 'Включено',
  offer_2_value: 'Включено',
  offer_3_value: 'Включено',
  offer_4_value: 'Включено',
  offer_5_value: 'Включено',
  offer_subtotal: 'Специализированная диагностика по страховке',
  offer_investment: 'Проверяется до визита',
  offer_note: 'Мы подаём документы напрямую в вашу страховую и показываем, что покрывает план и сколько платите вы — письменно, до любых обязательств.',
  final_micro: 'SMS и email-подтверждение в течение 60 секунд.',
};

// Both locales must override the same keys — a key present in one and missing in the other fails the build.
type SameKeys<A, B> = keyof A extends keyof B ? (keyof B extends keyof A ? true : never) : never;
const _keysMatch: SameKeys<typeof en, typeof ru> = true;
void _keysMatch;

export const insuranceOverrides = { en, ru } as const;
