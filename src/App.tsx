import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import ScrollingProductMenu from './components/ScrollingProductMenu';
import Services from './components/Services';
import Contact from './components/Contact';
import VideoGallery from './components/VideoGallery';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import SerrureIntelligente from './components/SerrureIntelligente';
import DomotiqueCasablanca from './components/DomotiqueCasablanca';
import CamerasSurveillance from './components/CamerasSurveillance';
import ControleAcces from './components/ControleAcces';
import SoundSystem from './components/SoundSystem';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import AboutUs from './components/AboutUs';
import ProductPage from './components/ProductPage';

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamic canonical tag for SPA routing
    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const baseUrl = 'https://domo28.ma';
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
      '/': 'Domotique Maroc - Maison Intelligente Casablanca | DOMO28',
      '/serrure-intelligente': 'Serrure Intelligente Maroc - Installation & Prix | DOMO28',
      '/domotique-casablanca': 'Domotique Casablanca - Maison Connectée & Smart Home | DOMO28',
      '/cameras-surveillance': 'Caméras Surveillance Maroc - Installation & Sécurité | DOMO28',
      '/controle-acces': 'Contrôle d\'Accès Maroc - Systèmes Biométriques | DOMO28',
      '/systeme-son': 'Système Son Domotique Maroc - Audio Intelligent | DOMO28',
      '/blog': 'Blog Domotique Maroc - Actualités & Conseils | DOMO28',
      '/about': 'À Propos - DOMO28 | Technologies Domotiques Modernes',
      '/product/:productId': 'Produit - DOMO28 | Équipements Domotiques'
    };

    if (titles[currentPath]) {
      document.title = titles[currentPath];
    }
  }, [location]);

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
            <VideoGallery />
          </>
        } />
        <Route path="/serrure-intelligente" element={<SerrureIntelligente />} />
        <Route path="/domotique-casablanca" element={<DomotiqueCasablanca />} />
        <Route path="/cameras-surveillance" element={<CamerasSurveillance />} />
        <Route path="/controle-acces" element={<ControleAcces />} />
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
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;