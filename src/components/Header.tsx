import { useEffect, useState } from 'react';
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
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#C9A961] text-[#0A0A0A] px-3 py-2 rounded font-semibold z-[100]">Skip to content</a>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center">
          <Link to="/" className="shrink-0 flex items-center" aria-label="World Smiles Prosthodontics — Home">
            <img
              src={logoUrl}
              alt="World Smiles Prosthodontics"
              className="h-10 md:h-12 w-auto"
              width="330"
              height="48"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 lg:ml-8 xl:ml-12" aria-label="Primary">
            <Link to="/" className={`text-[0.9375rem] font-medium transition-colors whitespace-nowrap ${currentPath === '/' ? 'text-[#C9A961]' : 'text-white hover:text-[#C9A961]'}`}>Home</Link>
            <Link to="/services" className={`text-[0.9375rem] font-medium transition-colors whitespace-nowrap ${currentPath === '/services' ? 'text-[#C9A961]' : 'text-white hover:text-[#C9A961]'}`}>Services</Link>
            <Link to="/about" className={`text-[0.9375rem] font-medium transition-colors whitespace-nowrap ${currentPath === '/about' ? 'text-[#C9A961]' : 'text-white hover:text-[#C9A961]'}`}>About</Link>

            <div
              className="relative"
              onMouseEnter={() => setPatientResourcesOpen(true)}
              onMouseLeave={() => setPatientResourcesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={patientResourcesOpen}
                aria-haspopup="true"
                onClick={() => setPatientResourcesOpen(!patientResourcesOpen)}
                className={`flex items-center gap-1 text-[0.9375rem] font-medium transition-colors whitespace-nowrap ${isPatientResourcesActive ? 'text-[#C9A961]' : 'text-white hover:text-[#C9A961]'}`}
              >
                Patient Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${patientResourcesOpen ? 'rotate-180' : ''}`} strokeWidth={2} />
              </button>
              {patientResourcesOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-60 z-50">
                  <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg shadow-xl overflow-hidden">
                    <Link to="/patient-forms" onClick={closeMenus} className={`block px-4 py-3 text-[0.9375rem] transition-colors border-b border-[#1B1B1B] ${currentPath === '/patient-forms' ? 'text-[#C9A961] bg-[#1B1B1B]' : 'text-white hover:text-[#C9A961] hover:bg-[#1B1B1B]'}`}>Patient Forms</Link>
                    <Link to="/patient-instructions" onClick={closeMenus} className={`block px-4 py-3 text-[0.9375rem] transition-colors border-b border-[#1B1B1B] ${currentPath === '/patient-instructions' ? 'text-[#C9A961] bg-[#1B1B1B]' : 'text-white hover:text-[#C9A961] hover:bg-[#1B1B1B]'}`}>Patient Instructions</Link>
                    <Link to="/insurance" onClick={closeMenus} className={`block px-4 py-3 text-[0.9375rem] transition-colors border-b border-[#1B1B1B] ${currentPath === '/insurance' ? 'text-[#C9A961] bg-[#1B1B1B]' : 'text-white hover:text-[#C9A961] hover:bg-[#1B1B1B]'}`}>Insurance</Link>
                    <Link to="/technology" onClick={closeMenus} className={`block px-4 py-3 text-[0.9375rem] transition-colors border-b border-[#1B1B1B] ${currentPath === '/technology' ? 'text-[#C9A961] bg-[#1B1B1B]' : 'text-white hover:text-[#C9A961] hover:bg-[#1B1B1B]'}`}>Technology</Link>
                    <Link to="/faq" onClick={closeMenus} className={`block px-4 py-3 text-[0.9375rem] transition-colors border-b border-[#1B1B1B] ${currentPath === '/faq' ? 'text-[#C9A961] bg-[#1B1B1B]' : 'text-white hover:text-[#C9A961] hover:bg-[#1B1B1B]'}`}>FAQ</Link>
                    <Link to="/blog" onClick={closeMenus} className={`block px-4 py-3 text-[0.9375rem] transition-colors ${currentPath === '/blog' ? 'text-[#C9A961] bg-[#1B1B1B]' : 'text-white hover:text-[#C9A961] hover:bg-[#1B1B1B]'}`}>Blog</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/before-after" className={`text-[0.9375rem] font-medium transition-colors whitespace-nowrap ${currentPath === '/before-after' ? 'text-[#C9A961]' : 'text-white hover:text-[#C9A961]'}`}>Before & After</Link>
            <Link to="/reviews" className={`text-[0.9375rem] font-medium transition-colors whitespace-nowrap ${currentPath === '/reviews' ? 'text-[#C9A961]' : 'text-white hover:text-[#C9A961]'}`}>Reviews</Link>
            <Link to="/second-opinion" className={`text-[0.9375rem] font-medium transition-colors whitespace-nowrap ${currentPath === '/second-opinion' ? 'text-[#C9A961]' : 'text-white hover:text-[#C9A961]'}`}>Second Opinion</Link>
            <Link to="/contact" className={`text-[0.9375rem] font-medium transition-colors whitespace-nowrap ${currentPath === '/contact' ? 'text-[#C9A961]' : 'text-white hover:text-[#C9A961]'}`}>Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-5 ml-auto">
            <div className="hidden lg:block w-px h-6 bg-[#2A2A2A]" aria-hidden="true" />
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center gap-2 text-[#C9A961] hover:text-[#DBC089] text-[0.9375rem] font-semibold transition-colors whitespace-nowrap min-h-[48px] min-w-[48px]">
              <Phone className="w-4 h-4 pointer-events-none" strokeWidth={2} />
              <span className="hidden xl:inline pointer-events-none">347-378-7827</span>
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-5 py-2.5 rounded-lg text-[0.9375rem] font-semibold transition-colors whitespace-nowrap">
              Book Consultation
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-1 ml-auto">
            <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="flex items-center justify-center text-[#C9A961] min-h-[48px] min-w-[48px]">
              <Phone className="w-5 h-5 pointer-events-none" strokeWidth={2} />
            </a>
            <button
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
              className="text-white p-2.5"
            >
              <Menu className="w-6 h-6" strokeWidth={2} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#0A0A0A] lg:hidden flex flex-col">
            <div className="flex items-center justify-between h-16 px-4 border-b border-[#2A2A2A]">
              <img
                src={logoUrl}
                alt="World Smiles Prosthodontics"
                className="h-9 w-auto"
                width="248"
                height="36"
              />
              <button aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} className="p-2.5 text-white">
                <X className="w-6 h-6" strokeWidth={2} />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-1 overflow-y-auto" aria-label="Mobile">
              <Link to="/" onClick={closeMenus} className={`py-3 text-[1.125rem] font-medium border-b border-[#2A2A2A] ${currentPath === '/' ? 'text-[#C9A961]' : 'text-white'}`}>Home</Link>
              <Link to="/services" onClick={closeMenus} className={`py-3 text-[1.125rem] font-medium border-b border-[#2A2A2A] ${currentPath === '/services' ? 'text-[#C9A961]' : 'text-white'}`}>Services</Link>
              <Link to="/about" onClick={closeMenus} className={`py-3 text-[1.125rem] font-medium border-b border-[#2A2A2A] ${currentPath === '/about' ? 'text-[#C9A961]' : 'text-white'}`}>About Dr. Furman</Link>

              <div className="py-3 border-b border-[#2A2A2A]">
                <p className={`text-[0.75rem] uppercase tracking-[0.14em] font-semibold mb-2 ${isPatientResourcesActive ? 'text-[#DBC089]' : 'text-[#C9A961]'}`}>Patient Resources</p>
                <Link to="/patient-forms" onClick={closeMenus} className={`block py-2 text-[1rem] ${currentPath === '/patient-forms' ? 'text-[#C9A961] font-semibold' : 'text-white'}`}>Patient Forms</Link>
                <Link to="/patient-instructions" onClick={closeMenus} className={`block py-2 text-[1rem] ${currentPath === '/patient-instructions' ? 'text-[#C9A961] font-semibold' : 'text-white'}`}>Patient Instructions</Link>
                <Link to="/insurance" onClick={closeMenus} className={`block py-2 text-[1rem] ${currentPath === '/insurance' ? 'text-[#C9A961] font-semibold' : 'text-white'}`}>Insurance</Link>
                <Link to="/technology" onClick={closeMenus} className={`block py-2 text-[1rem] ${currentPath === '/technology' ? 'text-[#C9A961] font-semibold' : 'text-white'}`}>Technology</Link>
                <Link to="/faq" onClick={closeMenus} className={`block py-2 text-[1rem] ${currentPath === '/faq' ? 'text-[#C9A961] font-semibold' : 'text-white'}`}>FAQ</Link>
                <Link to="/blog" onClick={closeMenus} className={`block py-2 text-[1rem] ${currentPath === '/blog' ? 'text-[#C9A961] font-semibold' : 'text-white'}`}>Blog</Link>
              </div>

              <Link to="/before-after" onClick={closeMenus} className={`py-3 text-[1.125rem] font-medium border-b border-[#2A2A2A] ${currentPath === '/before-after' ? 'text-[#C9A961]' : 'text-white'}`}>Before & After</Link>
              <Link to="/reviews" onClick={closeMenus} className={`py-3 text-[1.125rem] font-medium border-b border-[#2A2A2A] ${currentPath === '/reviews' ? 'text-[#C9A961]' : 'text-white'}`}>Reviews</Link>
              <Link to="/second-opinion" onClick={closeMenus} className={`py-3 text-[1.125rem] font-medium border-b border-[#2A2A2A] ${currentPath === '/second-opinion' ? 'text-[#C9A961]' : 'text-white'}`}>Second Opinion</Link>
              <Link to="/contact" onClick={closeMenus} className={`py-3 text-[1.125rem] font-medium border-b border-[#2A2A2A] ${currentPath === '/contact' ? 'text-[#C9A961]' : 'text-white'}`}>Contact</Link>
            </nav>
            <div className="mt-auto p-6 grid grid-cols-1 gap-3">
              <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3.5 rounded-lg text-[1rem] font-semibold min-h-[48px] min-w-[48px]">
                <Phone className="w-4 h-4 pointer-events-none" strokeWidth={2} /> <span className="pointer-events-none">Call 347-378-7827</span>
              </a>
              <Link to="/contact" onClick={closeMenus} className="inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#A8893F] text-[#0A0A0A] px-6 py-3.5 rounded-lg text-[1rem] font-semibold">
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
