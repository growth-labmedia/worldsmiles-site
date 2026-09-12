/**
 * World Smiles LP — qualification flow config
 *
 * Everything the flow shows or decides lives here as plain data: prompts, options,
 * which options qualify / disqualify / route where, carriers, copy for every screen,
 * in both languages. The components read this file and never need to change when
 * the data does.
 *
 * Editing rules:
 *  - Every visible string is a `Text` = { en, ru }. Leave `ru` out and the build fails.
 *  - Option `id`s are stable React keys only. They are never sent anywhere (see §7 of the brief).
 *  - Q2 (carrier) answers are view state only. Nothing here or in the components
 *    writes them to a URL, form field, webhook, pixel, or analytics payload.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Locale = 'en' | 'ru';

/** Bilingual string. Both keys are required — a missing `ru` is a TypeScript error. */
export type Text = Readonly<Record<Locale, string>>;

/** Where a completed flow lands. */
export type Route = 'insurance' | 'selfpay' | 'disqualify';

export interface AnswerOption<R extends Route | 'continue' = Route | 'continue'> {
  /** Stable id. React key only. Never transmitted. */
  id: string;
  /** What the patient sees. */
  label: Text;
  /** What tapping it does. `continue` = advance to the next question. */
  route: R;
}

export interface Question<R extends Route | 'continue'> {
  /** Stable id for the step. Not sent to analytics — step NUMBERS are (1, 2, 3). */
  id: string;
  /** Analytics step number. 1 = Q1, 2 = Q2, 3 = contact fields. */
  step: 1 | 2;
  /** Optional line above the prompt (used on Q1 to frame this as routing, not screening). */
  intro?: Text;
  prompt: Text;
  subline?: Text;
  options: readonly AnswerOption<R>[];
}

export interface ContactStep {
  step: 3;
  heading: Text;
  subline: Text;
  labels: { firstName: Text; lastName: Text; phone: Text; email: Text };
  /** Shown under the email field. */
  privacyNote: Text;
  submit: Text;
  submitting: Text;
  /** Shown when name or phone is empty. */
  validation: Text;
  /** Shown when the submit fails; includes the phone-number fallback. */
  error: Text;
}

export interface QualificationConfig {
  q1: Question<'continue' | 'disqualify'>;
  q2: Question<'insurance' | 'selfpay'>;
  contact: ContactStep;
  /**
   * Copy for the route-out screen. Rendered inline; no URL change, no contact record.
   * Deliberately has NO restart and NO call to action: a disqualified visitor does not get
   * a second pass at the form (and we hold no contact info, so nobody can follow up).
   */
  disqualify: { heading: Text; body: Text };
  /** Copy shown on the thank-you screen. Same path for both branches; content picked off state. */
  thankYou: { insurance: { heading: Text; body: Text }; selfpay: { heading: Text; body: Text } };
  routes: {
    /** In-network route: the insurance variant of the LP (its own page, own GHL calendar). */
    insurance: string;
    /** Self-pay route: the existing $147 booking section on the LP (an anchor, same page). */
    selfpay: string;
    /** `inline` = render the refer-out screen in place of the flow. Or a path like '/not-a-fit'. */
    disqualify: 'inline' | string;
  };
  ui: {
    back: Text;
    stepOf: Text; // "Step {n} of {total}"
  };
  /**
   * GHL inbound webhook (workflow with an Inbound Webhook trigger). Receives ONLY
   * { firstName, lastName, phone, email }. Never service interest, never carrier.
   * Empty string = skip the POST (dev / not yet configured) and go straight to the calendar.
   */
  webhook: { url: string };
  /** GHL booking calendars. Rendered as-is, no prefill. */
  calendars: {
    selfpay: { calendarId: string; embedId: string; title: Text };
    insurance: { calendarId: string; embedId: string; title: Text };
  };
}

// ---------------------------------------------------------------------------
// Q1 — service interest
// ---------------------------------------------------------------------------
// Keep every label SERVICE-framed (what the practice offers), never condition-framed
// ("missing teeth", "failing teeth"). Meta ad policy on a page carrying the pixel.
// "Not sure yet" QUALIFIES on purpose. Do not route it to disqualify.

const q1 = {
  id: 'service_interest',
  step: 1,
  intro: {
    en: 'Two quick questions so we point you to the right place. No wrong answers.',
    ru: 'Два коротких вопроса, чтобы направить вас куда нужно. Неправильных ответов нет.',
  },
  prompt: {
    en: 'Which of our services brought you here?',
    ru: 'Какая из наших услуг привела вас сюда?',
  },
  subline: {
    en: "Not sure yet is a real answer — most people aren't.",
    ru: '«Пока не знаю» — это нормальный ответ. Большинство людей не знают.',
  },
  options: [
    {
      id: 'implants',
      label: { en: 'Dental implants', ru: 'Зубные импланты' },
      route: 'continue',
    },
    {
      id: 'crowns_bridges',
      label: {
        en: 'Crowns, bridges, or repairing existing dental work',
        ru: 'Коронки, мосты или починка уже сделанной работы',
      },
      route: 'continue',
    },
    {
      id: 'full_mouth',
      label: { en: 'Full-mouth restoration', ru: 'Полное восстановление зубов' },
      route: 'continue',
    },
    {
      id: 'veneers',
      label: { en: 'Veneers / cosmetic', ru: 'Виниры / эстетика' },
      route: 'continue',
    },
    {
      // Highest-value option: mirrors the hero headline and identifies the exact ICP. Wording is locked.
      // The office is notified by GHL workflows; no answer value leaves the browser.
      id: 'second_opinion',
      label: {
        en: 'A second opinion on a plan I already have',
        ru: 'Второе мнение по плану, который у меня уже есть',
      },
      route: 'continue',
    },
    {
      id: 'not_sure',
      label: {
        en: "Not sure yet — I'd like the specialist's read",
        ru: 'Пока не знаю — хочу услышать мнение специалиста',
      },
      route: 'continue',
    },
    {
      id: 'cleaning',
      label: { en: 'Routine cleaning or checkup', ru: 'Плановая чистка или осмотр' },
      route: 'disqualify',
    },
    {
      id: 'orthodontics',
      label: { en: 'Braces or Invisalign', ru: 'Брекеты или Invisalign' },
      route: 'disqualify',
    },
  ],
} as const satisfies Question<'continue' | 'disqualify'>;

// ---------------------------------------------------------------------------
// Q2 — plan check (qualified leads only)
// ---------------------------------------------------------------------------
// In-network carriers as of 2026-09-12 (from Shaun). One line each; layout handles 3–15 options.
// Carrier names are brand names and stay the same in Russian. Keep "None of the above" last.
// The answer here is NEVER stored or transmitted anywhere. View state only.

const q2 = {
  id: 'plan_check',
  step: 2,
  prompt: {
    en: 'Do you have any of these plans?',
    ru: 'Есть ли у вас одна из этих страховок?',
  },
  subline: {
    en: 'Either answer works — it just changes what we show you next.',
    ru: 'Любой ответ подходит — от него зависит только то, что мы покажем дальше.',
  },
  options: [
    { id: 'aetna_ppo', label: { en: 'Aetna PPO', ru: 'Aetna PPO' }, route: 'insurance' },
    { id: 'always_care', label: { en: 'Always Care', ru: 'Always Care' }, route: 'insurance' },
    { id: 'ameritas', label: { en: 'Ameritas', ru: 'Ameritas' }, route: 'insurance' },
    { id: 'anthem', label: { en: 'Anthem', ru: 'Anthem' }, route: 'insurance' },
    { id: 'geha', label: { en: 'GEHA', ru: 'GEHA' }, route: 'insurance' },
    { id: 'dnoa', label: { en: 'DNOA', ru: 'DNOA' }, route: 'insurance' },
    { id: 'humana', label: { en: 'Humana', ru: 'Humana' }, route: 'insurance' },
    { id: 'metlife', label: { en: 'MetLife', ru: 'MetLife' }, route: 'insurance' },
    { id: 'principal', label: { en: 'Principal', ru: 'Principal' }, route: 'insurance' },
    { id: 'united_concordia', label: { en: 'United Concordia', ru: 'United Concordia' }, route: 'insurance' },
    {
      id: 'none',
      label: { en: 'None of the above', ru: 'Ничего из перечисленного' },
      route: 'selfpay',
    },
  ],
} as const satisfies Question<'insurance' | 'selfpay'>;

// ---------------------------------------------------------------------------
// Step 3 — contact fields (qualified only; disqualified never see these)
// ---------------------------------------------------------------------------

const contact = {
  step: 3,
  heading: { en: 'Where should we send your confirmation?', ru: 'Куда отправить подтверждение?' },
  subline: {
    en: 'Name and phone are all we need. Email is optional.',
    ru: 'Достаточно имени и телефона. Email — по желанию.',
  },
  labels: {
    firstName: { en: 'First name', ru: 'Имя' },
    lastName: { en: 'Last name', ru: 'Фамилия' },
    phone: { en: 'Phone number', ru: 'Номер телефона' },
    email: { en: 'Email (optional)', ru: 'Email (необязательно)' },
  },
  privacyNote: {
    en: 'No spam. No marketing list. Your information stays in this office.',
    ru: 'Без спама. Без рассылок. Ваши данные остаются в нашем офисе.',
  },
  submit: { en: 'Continue to the calendar', ru: 'Перейти к календарю' },
  submitting: { en: 'One moment…', ru: 'Секунду…' },
  validation: {
    en: 'Please enter your first name, last name, and phone number so we can reach you.',
    ru: 'Пожалуйста, укажите имя, фамилию и номер телефона, чтобы мы могли с вами связаться.',
  },
  error: {
    en: "Something went wrong and we couldn't save that. If you're having trouble, please call us at 347-378-7827.",
    ru: 'Что-то пошло не так, и мы не смогли это сохранить. Если возникли трудности, позвоните нам: 347-378-7827.',
  },
} as const satisfies ContactStep;

// ---------------------------------------------------------------------------
// Disqualified — warm refer-out. No contact record, no submission, no events.
// ---------------------------------------------------------------------------

const disqualify = {
  heading: { en: 'Take care of those teeth!', ru: 'Берегите зубы!' },
  body: {
    en: "We're a specialist focused on restorative and implant work — for a cleaning, a good general dentist is your best bet. Take care of those teeth!",
    ru: 'Мы специализируемся на восстановлении зубов и имплантации — для чистки лучше всего подойдёт хороший стоматолог общей практики. Берегите зубы!',
  },
} as const;

// ---------------------------------------------------------------------------
// Thank-you — one path for both branches, content chosen off state
// ---------------------------------------------------------------------------

const thankYou = {
  insurance: {
    heading: { en: "You're in good hands.", ru: 'Вы в надёжных руках.' },
    body: {
      en: 'Pick a time below. We verify your benefits before your visit and put your real cost in writing — nothing starts until you say so.',
      ru: 'Выберите время ниже. Мы проверим вашу страховку до визита и укажем вашу реальную стоимость письменно — ничего не начнётся без вашего согласия.',
    },
  },
  selfpay: {
    heading: { en: 'Your $147 Specialist Session', ru: 'Ваша консультация специалиста за $147' },
    body: {
      en: 'Pick a time below. 60 minutes, a 3D scan if needed, and a written plan with locked-in pricing — $147, credited toward treatment if you proceed.',
      ru: 'Выберите время ниже. 60 минут, 3D-снимок при необходимости и письменный план с фиксированной ценой — $147, засчитываются в стоимость лечения.',
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Assembled config
// ---------------------------------------------------------------------------

export const qualificationConfig = {
  q1,
  q2,
  contact,
  disqualify,
  thankYou,
  routes: {
    // NOTE: '/insurance' on the main site is the informational Insurance & Financial Policy page.
    // The in-network LP variant gets its own path so the two don't collide.
    insurance: '/landing/insurance',
    // Existing $147 booking calendar section on the LP (anchor on the same page).
    selfpay: '#book',
    disqualify: 'inline',
  },
  ui: {
    back: { en: 'Back', ru: 'Назад' },
    stepOf: { en: 'Step {n} of {total}', ru: 'Шаг {n} из {total}' },
  },
  webhook: {
    url: '', // PENDING: GHL inbound webhook URL from Shaun. Empty = skip POST, continue to calendar.
  },
  calendars: {
    // Existing $147 self-pay calendar (was hard-coded in the LP's CalendarEmbed).
    selfpay: {
      calendarId: '33Quy7HPPEQrOVqjIdEh',
      embedId: '33Quy7HPPEQrOVqjIdEh_1780330783331',
      title: { en: 'Book My $147 Specialist Session', ru: 'Записаться на консультацию за $147' },
    },
    // In-network calendar from §6 of the brief.
    insurance: {
      calendarId: 'EXFuHJ07TwT6ZPumrnEQ',
      embedId: 'EXFuHJ07TwT6ZPumrnEQ_1789225483527',
      title: { en: 'Book your insurance consultation', ru: 'Записаться на консультацию по страховке' },
    },
  },
} as const satisfies QualificationConfig;

export type QualificationConfigType = typeof qualificationConfig;

/** Pick a locale's string. Throws at build time (via types) if `ru` is missing, never falls back silently. */
export const t = (text: Text, locale: Locale): string => text[locale];
