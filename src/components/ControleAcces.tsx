import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Users, Building } from 'lucide-react';
import ProductCard from './ProductCard';
import { useLanguage } from '../contexts/LanguageContext';

const ControleAcces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { selectedLang } = useLanguage();

  // Featured access control products
  const accessProducts = [
    { name: 'Contrôle d\'Accès CA1/CA2', image: '/images/ca2.webp' },
    { name: 'Interrupteurs Tactiles INTA/INTB', image: '/images/intb.webp' },
    { name: 'Biométrie Avancée', image: '/images/ca2.webp' },
    { name: 'RFID Card Systems', image: '/images/intb.webp' },
    { name: 'Mobile Access Control', image: '/images/ca2.webp' },
  ];

  // Auto-loop carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % accessProducts.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212660245937', '_blank');
  };

  // Translations object
  const translations = {
    Fr: {
      title: "Contrôle d'Accès Maroc",
      description: "Systèmes de contrôle d'accès avancés au Maroc. Solutions pour entreprises et résidences avec biométrie, cartes RFID et applications mobiles.",
      ctaFreeQuote: "Devis Gratuit",
      ctaLearnMore: "En Savoir Plus",
      features: {
        biometricSecurity: "Sécurité Biométrique",
        biometricDesc: "Reconnaissance faciale, empreinte digitale et iris pour un accès ultra-sécurisé.",
        userManagement: "Gestion Utilisateurs",
        userDesc: "Contrôle précis des permissions et historiques d'accès en temps réel.",
        businessSolutions: "Solutions Entreprises",
        businessDesc: "Systèmes adaptés aux besoins des entreprises et institutions.",
      },
      productsTitle: "Nos Produits de Contrôle d'Accès",
      installation: {
        title: "Installation Contrôle d'Accès Maroc",
        intro: "DOMO28 installe des systèmes de contrôle d'accès de dernière génération pour sécuriser vos locaux. Nos solutions s'adaptent à tous types d'environnement.",
        typesTitle: "Types de Contrôle d'Accès",
        types: [
          "Contrôle d'Accès Biométrique",
          "Systèmes de Cartes RFID",
          "Applications Mobiles",
          "Intégration Domotique",
          "Systèmes Biométriques",
          "Cartes RFID",
          "Logiciel de Gestion d'Accès",
          "Intégration de Sécurité",
        ],
        closing: "Installation professionnelle avec formation et support technique. Contactez-nous pour une consultation gratuite.",
      },
      backHome: "Retour à l'accueil",
    },
    En: {
      title: "Access Control Morocco",
      description: "Advanced access control systems in Morocco. Solutions for businesses and residences with biometrics, RFID cards and mobile applications.",
      ctaFreeQuote: "Free Quote",
      ctaLearnMore: "Learn More",
      features: {
        biometricSecurity: "Biometric Security",
        biometricDesc: "Facial recognition, fingerprint and iris for ultra-secure access.",
        userManagement: "User Management",
        userDesc: "Precise permission control and real-time access history.",
        businessSolutions: "Business Solutions",
        businessDesc: "Systems adapted to the needs of businesses and institutions.",
      },
      productsTitle: "Our Access Control Products",
      installation: {
        title: "Access Control Installation Morocco",
        intro: "DOMO28 installs state-of-the-art access control systems to secure your premises. Our solutions adapt to all types of environments.",
        typesTitle: "Types of Access Control",
        types: [
          "Biometric Access Control",
          "RFID Card Systems",
          "Mobile Applications",
          "Home Automation Integration",
          "Biometric Systems",
          "RFID Cards",
          "Access Management Software",
          "Security Integration",
        ],
        closing: "Professional installation with training and technical support. Contact us for a free consultation.",
      },
      backHome: "Back to Home",
    },
  };

  const t = translations[selectedLang];

  const products = [
    {
      id: 'ca1-ca2',
      name: 'Contrôle d\'Accès CA1/CA2',
      image: '/images/ca2.webp',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Code numérique',
        'Carte NFC',
        'Contrôle d\'accès'
      ],
      description: 'Systèmes de contrôle d\'accès CA1 et CA2 avec empreinte digitale, code et NFC pour sécuriser vos espaces'
    },
    {
      id: 'inta-intb',
      name: 'Interrupteurs Tactiles INTA/INTB',
      image: '/images/intb.webp',
      features: [
        'Application mobile',
        'Connexion WiFi',
        'Contrôle éclairage',
        'Contrôle rideaux',
        'Contrôle TV',
        'Contrôle climatisation'
      ],
      description: 'Interrupteurs tactiles INTA et INTB pour contrôler l\'éclairage, rideaux, TV et climatisation via WiFi et application'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-accent hover:text-blue-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.backHome}
        </Link>

        {/* Hero Section - Title, Image, Description, CTA */}
        <div className="text-center mb-16">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.title}
          </h1>

          {/* Animated Image Carousel */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-sm h-96 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center relative">
              <img
                src={accessProducts[currentIndex].image}
                alt={accessProducts[currentIndex].name}
                className="w-full h-full object-contain p-8 transition-all duration-500"
              />
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-6 justify-center">
              {accessProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-accent w-8'
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Show product ${index + 1}`}
                />
              ))}
            </div>

            {/* Product Name */}
            <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              {accessProducts[currentIndex].name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">

            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-blue-accent via-blue-400 to-blue-300 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t.ctaFreeQuote}
            </button>
            <button
              onClick={() => window.location.href = '#services'}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border border-blue-accent hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {t.ctaLearnMore}
            </button>
          </div>
        </div>

        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Lock className="w-12 h-12 text-blue-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.features.biometricSecurity}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t.features.biometricDesc}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Users className="w-12 h-12 text-blue-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.features.userManagement}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t.features.userDesc}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Building className="w-12 h-12 text-blue-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.features.businessSolutions}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t.features.businessDesc}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.productsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.installation.title}
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t.installation.intro}
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.installation.typesTitle}</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
              {t.installation.types.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              {t.installation.closing}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControleAcces;