import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './Components/SplashScreen';
import PixPerlPage from './Components/PixPerlPage';
import GetQuotePage from './Components/GetQuotePage';
import OfficesPage from './Components/OfficesPage';
// import Header from './Components/Layout/Header';
// import Footer from './Components/Layout/Footer';

function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show splash screen ONLY for Home ('/') and Get Quote ('/get-quote')
    if (location.pathname === '/' || location.pathname === '/get-quote') {
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