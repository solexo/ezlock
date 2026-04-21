import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import ScrollingProductMenu from './components/ScrollingProductMenu';
import Services from './components/Services';
import Contact from './components/Contact';

import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import SerrureIntelligente from './components/SerrureIntelligente';
import DomotiqueCasablanca from './components/DomotiqueCasablanca';
import CamerasSurveillance from './components/CamerasSurveillance';
import ControleAcces from './components/ControleAcces';
import LecteurUHF from './components/LecteurUHF';
import ContactUs from './components/ContactUs';
import SoundSystem from './components/SoundSystem';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import AboutUs from './components/AboutUs';
import ProductPage from './components/ProductPage';

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Force light mode for clean aesthetic
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
    localStorage.setItem('theme', 'light');
  }, []);

  useEffect(() => {
    // Dynamic canonical tag for SPA routing
    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const baseUrl = 'https://ezlock.ma';
    const currentPath = location.pathname;

    if (canonicalLink) {
      canonicalLink.href = currentPath === '/' ? baseUrl : `${baseUrl}${currentPath}`;
    } else {
      // Create canonical link if it doesn't exist
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = currentPath === '/' ? baseUrl : `${baseUrl}${currentPath}`;
      document.head.appendChild(link);
    }

    // Update document title based on route
    const titles: { [key: string]: string } = {
      '/': 'Ez Lock Solution intelligente',
      '/serrure-intelligente': 'Serrure Intelligente Maroc - Installation & Prix | Ez lock',
      '/domotique-casablanca': 'Domotique Casablanca - Maison Connectée & Smart Home | Ez lock',
      '/cameras-surveillance': 'Caméras Surveillance Maroc - Installation & Sécurité | Ez lock',
      '/controle-acces': 'Contrôle d\'Accès Maroc - Systèmes Biométriques | Ez lock',
      '/lecteur-uhf': 'Lecteur UHF Maroc - Solutions RFID & Identification | Ez lock',
      '/contact': 'Contact Ez lock - Solution intelligente | Devis & Informations',
      '/systeme-son': 'Système Son Solution intelligente - Audio Intelligent | Ez lock',
      '/blog': 'Blog Solution intelligente - Actualités & Conseils | Ez lock',
      '/about': 'À Propos - Ez lock | Technologies Domotiques Modernes',
      '/product/:productId': 'Produit - Ez lock | Équipements Domotiques'
    };

    if (titles[currentPath]) {
      document.title = titles[currentPath];
    }
  }, [location]);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductGallery />
            <Services />
            <Contact />
          </>
        } />
        <Route path="/serrure-intelligente" element={<SerrureIntelligente />} />
        <Route path="/domotique-casablanca" element={<DomotiqueCasablanca />} />
        <Route path="/cameras-surveillance" element={<CamerasSurveillance />} />
        <Route path="/controle-acces" element={<ControleAcces />} />
        <Route path="/lecteur-uhf" element={<LecteurUHF />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/systeme-son" element={<SoundSystem />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
      <ChatBot />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;