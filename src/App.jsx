import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import VisionPage from "./pages/VisionPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  const location = useLocation();

  return (
      <div className="min-h-screen flex flex-col bg-light-gray">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/hakkimizda" element={<AboutPage />} />
              <Route path="/vizyonumuz" element={<VisionPage />} />
              <Route path="/hizmetlerimiz" element={<ServicesPage />} />
              <Route path="/iletisim" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
  );
};

export default App;