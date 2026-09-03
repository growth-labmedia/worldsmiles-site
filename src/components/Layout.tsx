import { Outlet } from 'react-router-dom';
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

      {/* MOBILE STICKY CTA BAR — LOCKED, REPRODUCE EXACTLY */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-[#E7E2D8] grid grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0A0A0A] text-[#0A0A0A] py-3 rounded-lg text-[0.9375rem] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 min-h-[48px] min-w-[48px]">
          <Phone className="w-4 h-4 pointer-events-none" strokeWidth={2} /> <span className="pointer-events-none">Call</span>
        </a>
        <Link to="/contact" className="inline-flex items-center justify-center bg-[#C9A961] text-[#0A0A0A] py-3 rounded-lg text-[0.9375rem] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
          Book Consultation
        </Link>
      </div>
    </div>
  );
}
