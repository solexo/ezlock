import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Smartphone, Key } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ProductCard from './ProductCard';

const SerrureIntelligente = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { selectedLang } = useLanguage();

  // Smart lock products for carousel
  const carouselLocks = [
    { name: 'X1 AI', image: '/images/x1ai.webp' },
    { name: 'K5', image: '/images/k5.webp' },
    { name: 'K10', image: '/images/k10.webp' },
    { name: 'I30', image: '/images/i30.webp' },
    { name: 'I40', image: '/images/i40 (2).webp' },
  ];

  // All smart lock products
  const smartLockProducts = [
    {
      id: 'x1ai',
      name: 'X1 Ai 🔐 7 Méthodes d\'Ouverture Intelligentes',
      image: '/images/x1ai.webp',
      url: '/product/x1ai',
      features: [
        'Reconnaissance Faciale (AI) ultra-précise',
        'Empreinte Digitale 360°',
        'Code PIN personnalisable',
        'Clé mécanique',
        'Carte NFC',
        'Application mobile (Wi-Fi & Bluetooth)',
        'Ouverture par paume intelligente (AI Palm ID)'
      ],
      description: 'Grâce à son système AI avancé, la X1 reconnaît les visages avec une précision exceptionnelle, s\'adapte à la luminosité et apprend vos habitudes pour un confort d\'utilisation optimal.'
    },
    {
      id: 'i40',
      name: 'Serrure Intelligente I40',
      image: '/images/i40%20(2).webp',
      url: '/product/i40',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Face ID',
        'Carte NFC',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Serrure premium avec écran tactile et reconnaissance faciale avancée'
    },
    {
      id: 'i30',
      name: 'Serrure Intelligente I30',
      image: '/images/i30.webp',
      url: '/product/i30',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Face ID',
        'Carte NFC',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Serrure intelligente I30 avec toutes les fonctionnalités avancées comme l\'I40'
    },
    {
      id: 'i29',
      name: 'Serrure Intelligente I29',
      image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.22.webp',
      url: '/product/i29',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Face ID',
        'Carte NFC',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Design élégant avec interface utilisateur intuitive et sécurité renforcée'
    },
    {
      id: 'k10',
      name: 'Serrure Intelligente K10',
      image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(6).webp',
      url: '/product/k10',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Face ID',
        'Carte NFC',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Modèle robuste avec écran haute définition et mécanisme de sécurité avancé'
    },
    {
      id: 'x5-cam',
      name: 'Serrure Intelligente X5 CAM',
      image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(5).webp',
      url: '/product/x5-cam',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Carte NFC',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Serrure poignée avec design minimaliste et technologie NFC intégrée'
    },
    {
      id: 'x5-ultra',
      name: 'Serrure Intelligente X5 ULTRA',
      image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(4).webp',
      url: '/product/x5-ultra',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Carte NFC',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Version ultra-compacte avec clavier numérique et reconnaissance biométrique'
    },
    {
      id: 'k5',
      name: 'Serrure Intelligente K5',
      image: '/images/k5.webp',
      url: '/product/k5',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Carte NFC',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Serrure intelligente K5 avec toutes les options de sécurité : NFC, code numérique et contrôle mobile'
    },
    {
      id: 'i20',
      name: 'Serrure Intelligente I20',
      image: '/images/i20.webp',
      url: '/product/i20',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Carte NFC',
        'Live cam view',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Serrure intelligente I20 avec caméra intégrée pour surveillance en temps réel et contrôle mobile'
    },
    {
      id: 'qm50',
      name: 'Serrure Intelligente QM50',
      image: '/images/qm50.webp',
      url: '/product/qm50',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Carte NFC',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Serrure intelligente QM50 avec design moderne et sécurité renforcée'
    },
    {
      id: 'qm60',
      name: 'Serrure Intelligente QM60',
      image: '/images/qm60.webp',
      url: '/product/qm60',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Carte NFC',
        'Clé traditionnelle',
        'Mot de passe'
      ],
      description: 'Serrure intelligente QM60 avec technologie avancée et interface intuitive'
    }
  ];

  // Auto-loop carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselLocks.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        {/* Hero Section - Title, Image, Description, CTA */}
        <div className="text-center mb-16">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {selectedLang === 'Fr' ? 'Serrure Intelligente' : 'Smart Lock'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-300">{selectedLang === 'Fr' ? 'Maroc' : 'Morocco'}</span>
          </h1>

          {/* Animated Image Carousel */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-sm h-96 bg-white rounded-2xl overflow-hidden shadow-xl flex items-center justify-center relative">
              <img
                src={carouselLocks[currentIndex].image}
                alt={carouselLocks[currentIndex].name}
                className="w-full h-full object-contain p-8 transition-all duration-500"
              />
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-6 justify-center">
              {carouselLocks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-red-500 w-8'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Show lock ${index + 1}`}
                />
              ))}
            </div>

            {/* Product Name */}
            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              {carouselLocks[currentIndex].name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            {selectedLang === 'Fr' ? 'Installation professionnelle de serrures intelligentes au Maroc. Sécurité avancée avec Face ID, empreinte digitale et NFC.' : 'Professional installation of smart locks in Morocco. Advanced security with Face ID, fingerprint and NFC.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
               {selectedLang === 'Fr' ? 'Devis Gratuit' : 'Free Quote'}
            </button>
            <button
              onClick={() => window.location.href = '#services'}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border border-red-500 hover:bg-blue-50 transition-all duration-300"
            >
              En Savoir Plus
            </button>
          </div>
        </div>

        {/* Features */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sécurité Avancée</h3>
            <p className="text-gray-600">
              Technologie de reconnaissance faciale, empreinte digitale et NFC pour une sécurité maximale.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Smartphone className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contrôle Mobile</h3>
            <p className="text-gray-600">
              Gérez votre serrure depuis votre smartphone avec notre application dédiée.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Key className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Installation Pro</h3>
            <p className="text-gray-600">
              Installation par nos techniciens certifiés avec garantie 2 ans incluse.
            </p>
          </div>
        </div>

        {/* Smart Locks Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {selectedLang === 'Fr' ? 'Nos Serrures Intelligentes' : 'Our Smart Locks'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartLockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Installation Serrure Intelligente Maroc
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Ez lock est le leader en installation de serrures intelligentes au Maroc. Nos solutions de sécurité avancées combinent technologie de pointe et installation professionnelle pour protéger votre domicile ou votre entreprise.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Avantages des Serrures Intelligentes</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Accès sans clé avec reconnaissance biométrique</li>
              <li>Contrôle à distance via application mobile</li>
              <li>Historique des accès en temps réel</li>
              <li>Intégration avec systèmes domotiques existants</li>
              <li>Alertes de sécurité instantanées</li>
            </ul>
            <p className="text-gray-600">
              Contactez Ez lock dès aujourd'hui pour un devis gratuit et une installation sous 48h. Notre équipe d'experts vous accompagne dans le choix de la meilleure solution de serrure intelligente adaptée à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerrureIntelligente;