import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PixPerlPage from './Components/PixPerlPage';
import GetQuotePage from './Components/GetQuotePage';
import OfficesPage from './Components/OfficesPage';
// import Header from './Components/Layout/Header';
// import Footer from './Components/Layout/Footer';
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<PixPerlPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
        <Route path="/offices" element={<OfficesPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App; // <-- ADD THIS LINE