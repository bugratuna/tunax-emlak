import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import VisionPage from './pages/VisionPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const App = () => {
  const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="hakkimizda" element={<AboutPage />} />
                    <Route path="vizyonumuz" element={<VisionPage />} />
                    <Route path="hizmetlerimiz" element={<ServicesPage />} />
                    <Route path="iletisim" element={<ContactPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default App;