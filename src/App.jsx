import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './Components/SplashScreen';
import PixPerlPage from './Components/PixPerlPage';
import GetQuotePage from './Components/GetQuotePage';
import OfficesPage from './Components/OfficesPage';
import AboutUsPage from './Pages/AboutUsPage';
import SLADocumentationPage from './Components/SLADocumentation'; // Updated path & filename
import PrivacyPolicyPage from './Components/PrivacyPolicy'; // Updated path & filename
import TermsOfServicePage from './Components/TermsOfService'; // Updated path & filename
function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show splash screen ONLY for Home ('/'), Get Quote ('/get-quote'), and About Us ('/about')
    if (
      location.pathname === '/' || 
      location.pathname === '/get-quote' || 
      location.pathname === '/about' ||
      location.pathname === '/sla-documentation' ||
      location.pathname === '/privacy-policy' ||
      location.pathname === '/terms-of-service'
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <SplashScreen key={`splash-${location.pathname}`} onFinish={() => setLoading(false)} />
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