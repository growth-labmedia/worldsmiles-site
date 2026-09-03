import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

// The 8 articles list for Section 4
const articles = [
  {
    image: "https://placehold.co/600x400/F7F3EC/0A0A0A?text=Prosthodontist",
    category: "TREATMENT EDUCATION",
    title: "What Is a Prosthodontist? (And When You Should See One Instead of a General Dentist)",
    excerpt: "Prosthodontics is one of nine recognized dental specialties, requiring three additional years of training beyond dental school. This article explains what prosthodontists actually do, what kinds of cases benefit most from specialist care, and how to know if your situation calls for one.",
    readTime: "7 min read",
    link: "/blog/what-is-a-prosthodontist",
  },
  {
    image: "https://placehold.co/600x400/F7F3EC/0A0A0A?text=Implant+Costs",
    category: "IMPLANTS & RECONSTRUCTION",
    title: "Dental Implant Costs in Brooklyn: What's Actually Included (And What Hidden Fees to Watch For)",
    excerpt: "Implant pricing varies wildly between practices — sometimes for legitimate reasons, sometimes because of unbundled hidden fees. This article breaks down what should be included in a single-implant quote, what's commonly missing, and the questions to ask before signing anything.",
    readTime: "9 min read",
    link: "/blog/dental-implant-costs-brooklyn",
  },
  {
    image: "https://placehold.co/600x400/F7F3EC/0A0A0A?text=Failed+Crowns",
    category: "TREATMENT EDUCATION",
    title: "Why Crowns Fail Within 5 Years (And How to Make Them Last 20+)",
    excerpt: "If you've had crowns crack, fall off, or fail prematurely, you're not unlucky — most crown failures trace back to specific avoidable causes. Here's what causes premature crown failure, what to look for in a properly placed crown, and how specialist work differs from generalist work for this procedure.",
    readTime: "6 min read",
    link: "/blog/why-crowns-fail-early",
  },
  {
    image: "https://placehold.co/600x400/F7F3EC/0A0A0A?text=Full+Mouth",
    category: "IMPLANTS & RECONSTRUCTION",
    title: "Full Mouth Reconstruction: How It's Sequenced and What to Expect at Each Phase",
    excerpt: "Full-mouth reconstruction isn't a single procedure — it's a coordinated plan that unfolds over several months and dozens of clinical decisions. This article walks through the typical phases, what determines the sequence, and how patients live normally during treatment.",
    readTime: "11 min read",
    link: "/blog/full-mouth-reconstruction-sequence",
  },
  {
    image: "https://placehold.co/600x400/F7F3EC/0A0A0A?text=All-on-4",
    category: "IMPLANTS & RECONSTRUCTION",
    title: "All-on-4 vs Traditional Implants: An Honest Comparison from a Specialist",
    excerpt: "All-on-4 has been marketed heavily over the last decade, sometimes accurately and sometimes not. This article compares All-on-4 against traditional implant approaches for full-arch cases — what each one is actually best for, the failure modes to know about, and how to evaluate which approach fits your situation.",
    readTime: "10 min read",
    link: "/blog/all-on-4-vs-traditional-implants",
  },
  {
    image: "https://placehold.co/600x400/F7F3EC/0A0A0A?text=Dental+Phobia",
    category: "PATIENT RESOURCES",
    title: "Dental Phobia: How Specialty Practices Approach It Differently",
    excerpt: "Patients who avoid dental work for years often arrive at our office having tried 'just dealing with it' for too long. This article covers what specialty practices do differently for phobic patients, what sedation options exist and when they make sense, and how to start the conversation if you've cancelled dental appointments more than once.",
    readTime: "7 min read",
    link: "/blog/dental-phobia-specialty-approach",
  },
  {
    image: "https://placehold.co/600x400/F7F3EC/0A0A0A?text=Veneers+vs+Crowns",
    category: "TREATMENT EDUCATION",
    title: "Veneers vs Lumineers vs Crowns: When Each One Actually Makes Sense",
    excerpt: "These three procedures get marketed as interchangeable. They aren't. This article explains the actual differences between veneers, Lumineers, and crowns — when each is the right choice for your specific situation, and how to know if a treatment plan is recommending the wrong one.",
    readTime: "8 min read",
    link: "/blog/veneers-vs-lumineers-vs-crowns",
  },
  {
    image: "https://placehold.co/600x400/F7F3EC/0A0A0A?text=Treatment+Plan",
    category: "PATIENT RESOURCES",
    title: "How to Read a Dental Treatment Plan: A Specialist's Guide to Understanding Your Quote",
    excerpt: "Treatment plans are full of codes (D0150, D2740, D6010) and prices that don't always make intuitive sense. This article translates the most common procedure codes, explains how to spot a plan that's missing necessary steps, and shows what a well-organized treatment plan should include.",
    readTime: "9 min read",
    link: "/blog/how-to-read-a-dental-treatment-plan",
  },
];

export default function JournalPage() {
  usePageMeta('JournalPage');

  return (
    <>
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">WORLD SMILES JOURNAL</span>
          <h1 className="text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">
            Patient education from a specialty practice.
          </h1>
          <p className="mt-6 text-[1.125rem] leading-[1.65] text-[#5C5C5C] max-w-[62ch] mx-auto">
            Most dental content online is written by marketing teams who've never sat across from a patient with three conflicting treatment plans. The articles here aren't generic — they're the conversations we have with patients in our office, written down. Read whichever ones apply to your situation. Skip the ones that don't.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
            <a href="#latest-articles" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors">
              Browse Articles
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold">
              Or book a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CATEGORY FILTERS */}
      <section className="bg-white py-10 md:py-12 border-b border-[#E7E2D8]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">BROWSE BY TOPIC</span>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button 
              type="button"
              className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] hover:border-[#C9A961] hover:bg-white px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B] transition-colors cursor-pointer"
            >
              Treatment Education
            </button>
            <button 
              type="button"
              className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] hover:border-[#C9A961] hover:bg-white px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B] transition-colors cursor-pointer"
            >
              Patient Resources
            </button>
            <button 
              type="button"
              className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] hover:border-[#C9A961] hover:bg-white px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B] transition-colors cursor-pointer"
            >
              Implants & Reconstruction
            </button>
            <button 
              type="button"
              className="inline-flex items-center bg-[#F7F3EC] border border-[#E7E2D8] hover:border-[#C9A961] hover:bg-white px-4 py-2 rounded-full text-[0.9375rem] text-[#1B1B1B] transition-colors cursor-pointer"
            >
              About Specialty Care
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED ARTICLE */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">FEATURED</span>
            <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-white">
              The article we'd want every patient to read first.
            </h2>
          </div>

          <div className="mt-10 bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#C9A961]/35 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
              {/* LEFT side: Featured image placeholder */}
              <div className="relative">
                <img 
                  src="https://placehold.co/700x500/1B1B1B/C9A961?text=Article+Image" 
                  alt="Featured article" 
                  className="w-full h-full object-cover aspect-[4/3] md:aspect-auto" 
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
              
              {/* RIGHT side: Content padding */}
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#C9A961] font-semibold">
                  PATIENT RESOURCES
                </span>
                <h3 className="text-[1.5rem] md:text-[2.0rem] leading-[1.2] font-[Fraunces,Georgia,serif] font-medium text-white mt-3">
                  How to Get a Second Opinion on a Dental Treatment Plan (Without Offending Your Current Dentist)
                </h3>
                <p className="text-[#F7F3EC]/85 text-[1rem] leading-[1.65] mt-4 font-[Inter,sans-serif]">
                  Getting a second opinion in dentistry isn't a betrayal of your current dentist — it's a normal part of how patients make informed decisions about expensive, irreversible work. This article covers how to ask for your records, what to bring to the consultation, what questions to ask, and how to compare conflicting plans without losing your mind.
                </p>
                <div className="mt-5 flex items-center gap-4 text-[0.8125rem] text-[#F7F3EC]/60">
                  <span>8 min read</span>
                  <span>·</span>
                  <span>Updated June 2026</span>
                </div>
                <div className="mt-6">
                  <Link 
                    to="/blog/how-to-get-a-second-opinion" 
                    className="inline-flex items-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold group/link"
                  >
                    Read the article <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — ALL ARTICLES GRID */}
      <section id="latest-articles" className="bg-white py-16 md:py-20 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">ALL ARTICLES</span>
            <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">
              Read about your situation.
            </h2>
            <p className="max-w-[60ch] mx-auto mt-4 text-[1rem] leading-[1.65] text-[#5C5C5C]">
              Organized by topic. Each article was written for a specific kind of patient question we hear regularly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {articles.map((article, idx) => (
              <article 
                key={idx} 
                className="bg-white border border-[#E7E2D8] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 group flex flex-col"
              >
                <div className="overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#C9A961] font-semibold">
                    {article.category}
                  </span>
                  <h4 className="text-[1.125rem] leading-[1.3] font-[Fraunces,Georgia,serif] font-medium mt-2 text-[#0A0A0A] group-hover:text-[#A8893F] transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-[0.875rem] text-[#5C5C5C] leading-[1.55] mt-2 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-4 flex justify-between items-center text-[0.8125rem] text-[#5C5C5C] border-t border-[#E7E2D8]/60">
                    <span className="font-medium">{article.readTime}</span>
                    <a 
                      href={article.link} 
                      className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] font-semibold group/link"
                    >
                      <span>Read article</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — "MORE ARTICLES COMING" CALLOUT */}
      <section className="bg-[#F7F3EC] py-12 md:py-16">
        <div className="max-w-[760px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">MORE ON THE WAY</span>
          <h3 className="text-[1.5rem] md:text-[1.875rem] leading-[1.25] font-[Fraunces,Georgia,serif] font-medium mt-4 text-[#0A0A0A]">
            Have a question you'd want answered here?
          </h3>
          <p className="mt-4 text-[1rem] leading-[1.65] text-[#5C5C5C] max-w-[55ch] mx-auto">
            Most articles on this blog started as questions a patient asked in the office. If there's a topic you'd want covered — about prosthodontics, treatment decisions, or anything else — email <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="text-[#C9A961] hover:underline font-semibold inline-block py-2 -my-2">info@worldsmilesnyc.com</a> and we'll consider it for an upcoming article.
          </p>
          <div className="mt-6">
            <a 
              href="mailto:info@worldsmilesnyc.com" 
              aria-label="Email World Smiles Prosthodontics"
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold group/link"
            >
              Email a topic suggestion <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center text-white">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] block">READY TO TALK ABOUT YOUR SITUATION</span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium mt-4 text-white">
            Articles only get you so far. A real consultation gets you a plan.
          </h2>
          <p className="text-[1.125rem] text-[#F7F3EC]/85 leading-[1.65] mt-5 max-w-[60ch] mx-auto font-[Inter,sans-serif]">
            Reading about dental work is useful — actually getting your specific case examined is what produces a treatment plan. The Specialist Second Opinion Session is $147 and includes a 3D scan, a 40-point bite check, and a written plan with locked-in pricing. Credited toward treatment if you start within 90 days.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              Book a Consultation
            </Link>
            <Link 
              to="/second-opinion" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] w-full sm:w-auto"
            >
              About the Second Opinion Session
            </Link>
          </div>
          <p className="text-[#F7F3EC]/70 text-[0.9375rem] mt-6">
            Or call <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="text-[#C9A961] hover:underline font-semibold inline-block py-2 -my-2">347-378-7827</a>.
          </p>
        </div>
      </section>

    </>
  );
}
