import { Link } from 'react-router-dom';
import { Phone, Sparkles, ShieldCheck, MapPin, Mail, Instagram } from 'lucide-react';
import logoUrl from '../logo.png';
import { useCurrentPath } from './Header';

export default function Footer() {
  const currentPath = useCurrentPath();

  return (
      <footer className="bg-[#0A0A0A] text-[#F7F3EC]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* COL 1: Brand + NAP */}
            <div>
              <div className="mb-5">
                <img
                  src={logoUrl}
                  alt="World Smiles Prosthodontics"
                  className="h-12 w-auto"
                  width="330"
                  height="48"
                />
              </div>
              <p className="text-[0.9375rem] text-[#F7F3EC]/85 leading-relaxed mb-5 max-w-[28ch]">
                Specialist prosthodontic care in Sheepshead Bay for patients who've been disappointed before.
              </p>
              <address className="not-italic text-[0.9375rem] text-[#F7F3EC]/85 leading-relaxed space-y-1.5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-[#C9A961] shrink-0" strokeWidth={2} />
                  <a href="https://maps.app.goo.gl/qRAkzom4Bis4Z44ZA" target="_blank" rel="noopener noreferrer" className="hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]">
                    3121 Ocean Avenue, Suite 101<br/>Brooklyn, NY 11235
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C9A961] shrink-0" strokeWidth={2} />
                  <a href="tel:+13473787827" aria-label="Call World Smiles Prosthodontics at 347-378-7827" className="hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] min-h-[48px] min-w-[48px] inline-flex items-center">
                    <span className="pointer-events-none">347-378-7827</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C9A961] shrink-0" strokeWidth={2} />
                  <a href="mailto:info@worldsmilesnyc.com" aria-label="Email World Smiles Prosthodontics" className="hover:text-white break-all rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]">info@worldsmilesnyc.com</a>
                </div>
              </address>
            </div>

            {/* COL 2: Hours */}
            <div>
              <h3 className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-5">Hours</h3>
              <dl className="text-[0.9375rem] text-[#F7F3EC]/85 space-y-1.5">
                <div className="flex justify-between gap-3"><dt>Monday</dt><dd>10am – 5pm</dd></div>
                <div className="flex justify-between gap-3"><dt>Tuesday</dt><dd>Closed</dd></div>
                <div className="flex justify-between gap-3"><dt>Wednesday</dt><dd>10am – 5pm</dd></div>
                <div className="flex justify-between gap-3"><dt>Thursday</dt><dd>Closed</dd></div>
                <div className="flex justify-between gap-3"><dt>Friday</dt><dd>10am – 5pm</dd></div>
                <div className="flex justify-between gap-3"><dt>Saturday</dt><dd>Closed</dd></div>
                <div className="flex justify-between gap-3"><dt>Sunday</dt><dd>Closed</dd></div>
              </dl>
            </div>

            {/* COL 3: Quick Links */}
            <div>
              <h3 className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-5">Explore</h3>
              <ul className="text-[0.9375rem] text-[#F7F3EC]/85 space-y-2.5">
                <li><Link to="/" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/' ? 'text-white font-medium' : 'hover:text-white'}`}>Home</Link></li>
                <li><Link to="/services" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/services' ? 'text-white font-medium' : 'hover:text-white'}`}>Services</Link></li>
                <li><Link to="/about" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/about' ? 'text-white font-medium' : 'hover:text-white'}`}>About</Link></li>
                <li><Link to="/patient-forms" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/patient-forms' ? 'text-white font-medium' : 'hover:text-white'}`}>Patient Forms</Link></li>
                <li><Link to="/patient-instructions" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/patient-instructions' ? 'text-white font-medium' : 'hover:text-white'}`}>Patient Instructions</Link></li>
                <li><Link to="/insurance" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/insurance' ? 'text-white font-medium' : 'hover:text-white'}`}>Insurance</Link></li>
                <li><Link to="/technology" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/technology' ? 'text-white font-medium' : 'hover:text-white'}`}>Technology</Link></li>
                <li><Link to="/before-after" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/before-after' ? 'text-white font-medium' : 'hover:text-white'}`}>Before & After</Link></li>
                <li><Link to="/reviews" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/reviews' ? 'text-white font-medium' : 'hover:text-white'}`}>Patient Reviews</Link></li>
                <li><Link to="/blog" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/blog' ? 'text-white font-medium' : 'hover:text-white'}`}>Blog</Link></li>
                <li><Link to="/second-opinion" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/second-opinion' ? 'text-white font-medium' : 'hover:text-white'}`}>Specialist Second Opinion</Link></li>
                <li><Link to="/faq" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/faq' ? 'text-white font-medium' : 'hover:text-white'}`}>FAQ</Link></li>
                <li><Link to="/contact" className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] ${currentPath === '/contact' ? 'text-white font-medium' : 'hover:text-white'}`}>Contact</Link></li>
              </ul>
            </div>

            {/* COL 4: Credentials + Russian + Social */}
            <div>
              <h3 className="text-[0.8125rem] uppercase tracking-[0.14em] font-semibold text-[#C9A961] mb-5">Credentials</h3>
              <ul className="text-[0.9375rem] text-[#F7F3EC]/85 space-y-2.5 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-1 text-[#C9A961] shrink-0" strokeWidth={2} />
                  <span>NYU Certificate in Prosthodontics</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-1 text-[#C9A961] shrink-0" strokeWidth={2} />
                  <span>DMD, Rutgers University School of Dental Medicine</span>
                </li>
                <li className="flex items-start gap-2 pt-3 border-t border-[#2A2A2A] mt-3">
                  <Sparkles className="w-4 h-4 mt-1 text-[#C9A961] shrink-0" strokeWidth={2} />
                  <span><strong className="text-white font-semibold">World Smiles speaks Russian.</strong><br/>Bring your parents — we'll explain everything in their language.</span>
                </li>
              </ul>
              <a href="https://www.instagram.com/worldsmilesnyc/" target="_blank" rel="noopener noreferrer" aria-label="World Smiles on Instagram" className="inline-flex items-center gap-2 text-[#F7F3EC]/85 hover:text-white text-[0.9375rem] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
                <Instagram className="w-5 h-5" strokeWidth={1.75} />
                @worldsmilesnyc
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#2A2A2A]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.8125rem] text-[#F7F3EC]/70">
            <p>© 2026 World Smiles Prosthodontics. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li><Link to="/privacy" className="hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]">Terms</Link></li>
              <li><Link to="/accessibility" className="hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]">Accessibility</Link></li>
            </ul>
          </div>
        </div>
      </footer>
  );
}
