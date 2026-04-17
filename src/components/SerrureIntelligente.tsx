import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Smartphone, Key } from 'lucide-react';

const SerrureIntelligente = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Smart lock products
  const smartLocks = [
    { name: 'X13 AI', image: '/images/x13ai.webp' },
    { name: 'K5', image: '/images/k5.webp' },
    { name: 'K10', image: '/images/k10.webp' },
    { name: 'I30', image: '/images/i30.webp' },
    { name: 'I40', image: '/images/i40 (2).webp' },
  ];

  // Auto-loop carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % smartLocks.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212660245937', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        {/* Hero Section - Title, Description, Image, CTA */}
        <div className="text-center mb-16">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Serrure Intelligente <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Maroc</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Installation professionnelle de serrures intelligentes au Maroc. Sécurité avancée avec Face ID, empreinte digitale et NFC.
          </p>

          {/* Animated Image Carousel */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-sm h-96 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center relative">
              <img
                src={smartLocks[currentIndex].image}
                alt={smartLocks[currentIndex].name}
                className="w-full h-full object-contain p-8 transition-all duration-500"
              />
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-6 justify-center">
              {smartLocks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-yellow-500 w-8'
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Show lock ${index + 1}`}
                />
              ))}
            </div>

            {/* Product Name */}
            <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              {smartLocks[currentIndex].name}
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Devis Gratuit
            </button>
            <button
              onClick={() => window.location.href = '#services'}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border border-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              En Savoir Plus
            </button>
          </div>
        </div>

        {/* Features */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sécurité Avancée</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Technologie de reconnaissance faciale, empreinte digitale et NFC pour une sécurité maximale.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Smartphone className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contrôle Mobile</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gérez votre serrure depuis votre smartphone avec notre application dédiée.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Key className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Installation Pro</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Installation par nos techniciens certifiés avec garantie 2 ans incluse.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Installation Serrure Intelligente Maroc
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              DOMO28 est le leader en installation de serrures intelligentes au Maroc. Nos solutions de sécurité avancées combinent technologie de pointe et installation professionnelle pour protéger votre domicile ou votre entreprise.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Avantages des Serrures Intelligentes</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
              <li>Accès sans clé avec reconnaissance biométrique</li>
              <li>Contrôle à distance via application mobile</li>
              <li>Historique des accès en temps réel</li>
              <li>Intégration avec systèmes domotiques existants</li>
              <li>Alertes de sécurité instantanées</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              Contactez DOMO28 dès aujourd'hui pour un devis gratuit et une installation sous 48h. Notre équipe d'experts vous accompagne dans le choix de la meilleure solution de serrure intelligente adaptée à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerrureIntelligente;