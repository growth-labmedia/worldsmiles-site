import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import ReviewsPage from './pages/ReviewsPage';
import SecondOpinionPage from './pages/SecondOpinionPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import PatientFormsPage from './pages/PatientFormsPage';
import PatientInstructionsPage from './pages/PatientInstructionsPage';
import InsurancePage from './pages/InsurancePage';
import TechnologyPage from './pages/TechnologyPage';
import FAQPage from './pages/FAQPage';
import JournalPage from './pages/JournalPage';
import AccessibilityPage from './pages/AccessibilityPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// Scroll to top on route change; scroll to the anchor when a hash is present (e.g. /services#veneers).
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        {/* Standalone paid-traffic landing page: keeps its own header/footer, no site chrome */}
        <Route path="/landing" element={<LandingPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="before-after" element={<BeforeAfterPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="second-opinion" element={<SecondOpinionPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="patient-forms" element={<PatientFormsPage />} />
          <Route path="patient-instructions" element={<PatientInstructionsPage />} />
          <Route path="insurance" element={<InsurancePage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="blog" element={<JournalPage />} />
          {/* Individual articles aren't built yet; send /blog/* to the journal index rather than Home */}
          <Route path="blog/*" element={<JournalPage />} />
          <Route path="accessibility" element={<AccessibilityPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} /> {/* 404 fallback */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
