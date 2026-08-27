import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & Reusable Components
import SplashScreen from './Components/SplashScreen';
import ScrollToTop from './Components/ScrollToTop';

// Page Components
import PixPerlPage from './Components/PixPerlPage';
import GetQuotePage from './Components/GetQuotePage';
import OfficesPage from './Components/OfficesPage';
import AboutUsPage from './Pages/AboutUsPage';
import SLADocumentationPage from './Components/SLADocumentation';
import PrivacyPolicyPage from './Components/PrivacyPolicy';
import TermsOfServicePage from './Components/TermsOfService';

// Automatically resets scroll position to top on route navigation
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show splash screen on designated routes
    const splashRoutes = [
      '/',
      '/get-quote',
      '/about',
      '/sla-documentation',
      '/privacy-policy',
      '/terms-of-service'
    ];

    if (splashRoutes.includes(location.pathname)) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollToTopOnNavigate />

      <AnimatePresence mode="wait">
        {loading && (
          <SplashScreen 
            key={`splash-${location.pathname}`} 
            onFinish={() => setLoading(false)} 
          />
        )}
      </AnimatePresence>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PixPerlPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
        <Route path="/offices" element={<OfficesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/sla-documentation" element={<SLADocumentationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <AnimatedRoutes />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}