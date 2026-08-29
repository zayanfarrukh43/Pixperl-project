import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & Reusable Components
import SplashScreen from './Components/SplashScreen';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
import Header from './Components/Header';

// Page Components
import PixPerlPage from './Components/PixPerlPage';
import GetQuotePage from './Components/GetQuotePage';
// import OfficesPage from './Components/OfficesPage';
import AboutUsPage from './Pages/AboutUsPage';
import ServicesPage from './Pages/ServicesPage';
import ClientsPage from './Pages/ClientsPage'; // 1. Imported Clients Page
import SLADocumentationPage from './Pages/SLADocumentation';
import PrivacyPolicyPage from './Pages/PrivacyPolicy';
import TermsOfServicePage from './Pages/TermsOfService';
import IndustriesPage from './Pages/IndustriesPage';
import ContactPage from './Pages/ContactPage';

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
      '/services',
      '/clients', // 2. Added /clients to trigger splash screen
      '/industries',
      '/sla-documentation',
      '/privacy-policy',
      '/terms-of-service',
      '/contact'
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

      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PixPerlPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
        {/* <Route path="/offices" element={<OfficesPage />} /> */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/clients" element={<ClientsPage />} /> {/* 3. Defined Route */}
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/sla-documentation" element={<SLADocumentationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}