import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function ReviewsPage() {
  usePageMeta('ReviewsPage');

  return (
    <>
      
      {/* SECTION 1: HERO + AGGREGATE STATS */}
      <section className="bg-[#F7F3EC] py-14 md:py-24">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 text-center">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">PATIENT REVIEWS</span>
          <h1 className="mt-4 text-[2.25rem] md:text-[3.5rem] leading-[1.08] tracking-[-0.02em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">What our patients say.</h1>
          <p className="mt-6 text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[#5C5C5C] max-w-[58ch] mx-auto">
            Real reviews from real World Smiles patients — collected from Google, Zocdoc, and other public platforms. Each links back to its original source, where you can read the full unedited review.
          </p>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[760px] mx-auto">
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 text-center flex flex-col items-center">
              <div className="mb-3 flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                ))}
              </div>
              <span className="text-[2rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-none">5.0</span>
              <span className="mt-2 text-[0.8125rem] uppercase tracking-[0.12em] font-semibold text-[#5C5C5C]">GOOGLE</span>
              <span className="mt-1 text-[0.8125rem] text-[#5C5C5C]">15 reviews</span>
            </div>
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 text-center flex flex-col items-center">
              <div className="mb-3 flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                ))}
              </div>
              <span className="text-[2rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-none">4.6</span>
              <span className="mt-2 text-[0.8125rem] uppercase tracking-[0.12em] font-semibold text-[#5C5C5C]">ZOCDOC</span>
              <span className="mt-1 text-[0.8125rem] text-[#5C5C5C]">122 reviews</span>
            </div>
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 text-center flex flex-col items-center">
              <div className="mb-3 flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                ))}
              </div>
              <span className="text-[2rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A] leading-none">4.7</span>
              <span className="mt-2 text-[0.8125rem] uppercase tracking-[0.12em] font-semibold text-[#5C5C5C]">OVERALL</span>
              <span className="mt-1 text-[0.8125rem] text-[#5C5C5C]">137 verified reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED ANCHOR QUOTE */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 text-center">
          <Quote className="w-14 h-14 text-[#C9A961] mx-auto" strokeWidth={1.5} />
          <blockquote className="mt-8 font-[Fraunces,Georgia,serif] italic text-[1.625rem] md:text-[2.125rem] leading-[1.35] text-[#0A0A0A]">
            "After decades of paying for expensive dental procedures and being dissatisfied, I was blessed to have found this practice."
          </blockquote>
          <div className="mt-10 flex gap-1.5 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
            ))}
          </div>
          <p className="mt-5 text-[0.875rem] text-[#5C5C5C] uppercase tracking-[0.14em] font-semibold">VERIFIED ZOCDOC REVIEW</p>
        </div>
      </section>

      {/* SECTION 3: REVIEW GRID */}
      <section className="bg-[#F7F3EC] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-[820px] mx-auto text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">MORE FROM PATIENTS</span>
            <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">In their own words.</h2>
          </div>
          
          <div className="mb-6 max-w-[1080px] mx-auto bg-white rounded-xl border border-[#E7E2D8] p-8 md:p-10 shadow-sm relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                ))}
              </div>
              <span className="text-[0.6875rem] uppercase tracking-[0.16em] font-semibold text-[#C9A961]">Verified Patient Review</span>
            </div>
            <Quote className="w-9 h-9 text-[#C9A961]" strokeWidth={1.5} />
            <blockquote className="mt-5 font-[Fraunces,Georgia,serif] italic text-[1.1875rem] md:text-[1.375rem] leading-[1.55] text-[#1B1B1B]">
              "I can't say enough good things about this office. From the moment I walked in, the staff was warm, welcoming, and incredibly professional. The doctor is truly exceptional. He took the time to explain every step of the process in detail, answering all my questions with patience and care. His attention to detail and expertise in prosthodontics is evident in the quality of his work."
            </blockquote>
            <p className="mt-7 pt-6 border-t border-[#E7E2D8] text-[0.9375rem] text-[#5C5C5C]">— Miriam K., Brooklyn</p>
          </div>

          <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                  ))}
                </div>
                <span className="text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">VERIFIED REVIEW</span>
              </div>
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <blockquote className="mt-4 font-[Fraunces,Georgia,serif] italic text-[1.0625rem] leading-[1.6] text-[#1B1B1B] flex-grow">
                "The doctor here is unlike any other dentist I've visited. I went to two other doctors and they both told me my tooth must be removed. The doctor here did a root canal instead and saved my tooth."
              </blockquote>
              <p className="mt-5 pt-5 border-t border-[#E7E2D8] text-[0.875rem] text-[#5C5C5C]">— Verified patient review</p>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                  ))}
                </div>
                <span className="text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">GOOGLE</span>
              </div>
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <blockquote className="mt-4 font-[Fraunces,Georgia,serif] italic text-[1.0625rem] leading-[1.6] text-[#1B1B1B] flex-grow">
                "I had the best experience here. The doctor was so attentive and really paid attention to my concerns. He was so patient and walked me through the whole process, since I was feeling very anxious."
              </blockquote>
              <p className="mt-5 pt-5 border-t border-[#E7E2D8] text-[0.875rem] text-[#5C5C5C]">— Marina S., Brooklyn</p>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                  ))}
                </div>
                <span className="text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">GOOGLE</span>
              </div>
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <blockquote className="mt-4 font-[Fraunces,Georgia,serif] italic text-[1.0625rem] leading-[1.6] text-[#1B1B1B] flex-grow">
                "He perfectly matched the color and texture to my other teeth. He is a perfectionist with great bedside manners. Made me feel comfortable throughout the process."
              </blockquote>
              <p className="mt-5 pt-5 border-t border-[#E7E2D8] text-[0.875rem] text-[#5C5C5C]">— Kami A., Brooklyn</p>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                  ))}
                </div>
                <span className="text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">GOOGLE</span>
              </div>
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <blockquote className="mt-4 font-[Fraunces,Georgia,serif] italic text-[1.0625rem] leading-[1.6] text-[#1B1B1B] flex-grow">
                "As a phobic dental patient, I can say that I'm actually looking forward to my next appointment!"
              </blockquote>
              <p className="mt-5 pt-5 border-t border-[#E7E2D8] text-[0.875rem] text-[#5C5C5C]">— Marina D., Brooklyn</p>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                  ))}
                </div>
                <span className="text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">GOOGLE</span>
              </div>
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <blockquote className="mt-4 font-[Fraunces,Georgia,serif] italic text-[1.0625rem] leading-[1.6] text-[#1B1B1B] flex-grow">
                "The most beautiful and technologically advanced dental office I've ever stepped foot in."
              </blockquote>
              <p className="mt-5 pt-5 border-t border-[#E7E2D8] text-[0.875rem] text-[#5C5C5C]">— Edward N., Brooklyn</p>
            </div>

            <div className="bg-white rounded-xl border border-[#E7E2D8] p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                  ))}
                </div>
                <span className="text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#5C5C5C]">VERIFIED REVIEW</span>
              </div>
              <Quote className="w-7 h-7 text-[#C9A961]" strokeWidth={1.5} />
              <blockquote className="mt-4 font-[Fraunces,Georgia,serif] italic text-[1.0625rem] leading-[1.6] text-[#1B1B1B] flex-grow">
                "He made me feel at ease as I'm usually patrified of dentists."
              </blockquote>
              <p className="mt-5 pt-5 border-t border-[#E7E2D8] text-[0.875rem] text-[#5C5C5C]">— Verified patient review</p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: WHERE TO READ MORE */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-[820px] mx-auto text-center">
            <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">VERIFY FOR YOURSELF</span>
            <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-[#0A0A0A]">Read more — or leave your own.</h2>
            <p className="mt-5 text-[1.0625rem] text-[#5C5C5C] leading-[1.65]">
              Every review on this page is from a public platform. Click through to read the originals, see what we haven't included, or share your own experience after a visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-5 max-w-[420px] mx-auto">
            {/* Card 1 - Google */}
            <div className="bg-[#F7F3EC] rounded-xl border border-[#E7E2D8] p-7 flex flex-col">
              <h3 className="text-[1.25rem] md:text-[1.375rem] font-medium font-[Fraunces,Georgia,serif] text-[#0A0A0A]">Google</h3>
              <div className="mt-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" strokeWidth={1.75} />
                ))}
              </div>
              <p className="mt-3 text-[0.875rem] text-[#5C5C5C] leading-[1.6] flex-grow">
                The default place patients check first. Our complete Google Business Profile, with every review and the option to leave a new one.
              </p>
              <div className="mt-6 pt-5 border-t border-[#E7E2D8] flex flex-col gap-2">
                <a href="https://share.google/rfl7ksWNhnN79rZwO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded">
                  Read on Google <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="https://share.google/rfl7ksWNhnN79rZwO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#A8893F] text-[0.9375rem] font-semibold group focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded">
                  Leave a Google review <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-[660px] mx-auto text-center bg-white rounded-xl p-7 border border-[#E7E2D8]">
            <p className="text-[0.9375rem] text-[#5C5C5C] leading-[1.65]">
              If you've been a patient and want to share your experience but aren't sure which platform to use, Google is usually the easiest — it's where most prospective patients look first.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 text-center">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <span className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961]">YOUR TURN</span>
          <h2 className="mt-3 text-[1.875rem] md:text-[2.5rem] leading-[1.15] tracking-[-0.015em] font-[Fraunces,Georgia,serif] font-medium text-white">The next review on this page could be yours.</h2>
          <p className="mt-6 max-w-[55ch] mx-auto text-[#F7F3EC]/85 text-[1.125rem] leading-[1.65]">
            Book the Specialist Second Opinion Session. Sixty minutes with the specialist. A written treatment plan. Transparent pricing. If you've been disappointed before, this is where that ends.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/second-opinion" className="inline-flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
              Book My Session
            </Link>
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A0A0A] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
              Call 347-378-7827
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
