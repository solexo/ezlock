import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Users, Building } from 'lucide-react';
import ProductCard from './ProductCard';
import { useLanguage } from '../contexts/LanguageContext';

const ControleAcces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { selectedLang } = useLanguage();

  const products = [
    {
      id: 'controle-acces-cp01',
      name: selectedLang === 'Fr' ? 'Digicode Metallique CP01' : 'Metal Keypad CP01',
      image: '/images/controle dacces/Digicode-metallique-CP01-1-250x250.jpg',
      url: '/product/controle-acces-cp01',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: selectedLang === 'Fr'
        ? 'Digicode metallique robuste pour le controle d acces securise de porte, portail ou bureau.'
        : 'Robust metal keypad for secure access control on doors, gates, or offices.'
    },
    {
      id: 'controle-acces-rfid-lecteur-1',
      name: selectedLang === 'Fr' ? 'Lecteur RFID' : 'RFID Reader',
      image: '/images/controle dacces/Lecteur-Rfid-1.jpg',
      url: '/product/controle-acces-rfid-lecteur-1',
      features: ['Carte NFC', 'Controle d acces', 'Application mobile'],
      description: selectedLang === 'Fr'
        ? 'Lecteur RFID pratique pour les systemes de controle d acces professionnels et residentiels.'
        : 'Practical RFID reader for professional and residential access control systems.'
    },
    {
      id: 'controle-acces-padlock-1',
      name: selectedLang === 'Fr' ? 'Cadenas Connecte' : 'Connected Padlock',
      image: '/images/controle dacces/padlock-1-250x250.webp',
      url: '/product/controle-acces-padlock-1',
      features: ['Application mobile', 'Empreinte digitale', 'Controle d acces'],
      description: selectedLang === 'Fr'
        ? 'Cadenas intelligent pour securiser rapidement casiers, portes et espaces techniques.'
        : 'Smart padlock for quickly securing lockers, doors, and technical spaces.'
    },
    {
      id: 'controle-acces-prise-intelligente',
      name: selectedLang === 'Fr' ? 'Prise Intelligente Aubess' : 'Aubess Smart Socket',
      image: '/images/controle dacces/Aubess-Prise-3.webp',
      url: '/product/controle-acces-prise-intelligente',
      features: ['Controle mobile', 'Programmation horaire', 'Controle d acces'],
      description: selectedLang === 'Fr'
        ? 'Prise intelligente pour le controle d acces aux appareils electriques avec application mobile.'
        : 'Smart socket for access control to electrical devices with mobile application.'
    },
    {
      id: 'controle-acces-clavier-1',
      name: selectedLang === 'Fr' ? 'Clavier de Controle 01' : 'Access Keypad 01',
      image: '/images/controle dacces/11161020751990325179.jpg',
      url: '/product/controle-acces-clavier-1',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: selectedLang === 'Fr'
        ? 'Clavier de controle d acces avec design compact pour installations interieures et exterieures.'
        : 'Compact access control keypad for indoor and outdoor installations.'
    },
    {
      id: 'controle-acces-clavier-2',
      name: selectedLang === 'Fr' ? 'Clavier de Controle 02' : 'Access Keypad 02',
      image: '/images/controle dacces/1892504409-1613275237.jpg',
      url: '/product/controle-acces-clavier-2',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: selectedLang === 'Fr'
        ? 'Solution de controle d acces fiable pour bureaux, residences et coproprietes.'
        : 'Reliable access control solution for offices, residences, and buildings.'
    },
    {
      id: 'controle-acces-clavier-3',
      name: selectedLang === 'Fr' ? 'Clavier de Controle 03' : 'Access Keypad 03',
      image: '/images/controle dacces/23703153969957916.jpg',
      url: '/product/controle-acces-clavier-3',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: selectedLang === 'Fr'
        ? 'Clavier securise pour gerer les acces avec code et badges sur site.'
        : 'Secure keypad to manage access with code and badge credentials.'
    },
    {
      id: 'controle-acces-clavier-4',
      name: selectedLang === 'Fr' ? 'Clavier de Controle 04' : 'Access Keypad 04',
      image: '/images/controle dacces/80713322-1538541174.jpg',
      url: '/product/controle-acces-clavier-4',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: selectedLang === 'Fr'
        ? 'Modele de controle d acces pense pour un usage intensif avec installation simple.'
        : 'Access control model designed for heavy use with simple installation.'
    },
    {
      id: 'controle-acces-badgeuse-1',
      name: selectedLang === 'Fr' ? 'Badgeuse et Lecteur 01' : 'Reader Unit 01',
      image: '/images/controle dacces/IMG_20210321_184217.jpg',
      url: '/product/controle-acces-badgeuse-1',
      features: ['Carte NFC', 'Controle d acces', 'Application mobile'],
      description: selectedLang === 'Fr'
        ? 'Lecteur de controle d acces adapte aux immeubles, entreprises et zones sensibles.'
        : 'Access control reader suited to buildings, businesses, and sensitive areas.'
    },
    {
      id: 'controle-acces-badgeuse-2',
      name: selectedLang === 'Fr' ? 'Badgeuse et Lecteur 02' : 'Reader Unit 02',
      image: '/images/controle dacces/InkedHe673616e79f345cc84ff35ee432b74e66-300x300.jpg',
      url: '/product/controle-acces-badgeuse-2',
      features: ['Carte NFC', 'Controle d acces', 'Application mobile'],
      description: selectedLang === 'Fr'
        ? 'Unite de lecture compacte pour une integration rapide dans votre systeme de securite.'
        : 'Compact reader unit for quick integration into your security system.'
    },
    {
      id: 'controle-acces-prise-intelligente',
      name: selectedLang === 'Fr' ? 'Prise Intelligente Aubess' : 'Aubess Smart Socket',
      image: '/images/controle dacces/Aubess-Prise-3.webp',
      url: '/product/controle-acces-prise-intelligente',
      features: ['Controle mobile', 'Programmation horaire', 'Controle d acces'],
      description: selectedLang === 'Fr'
        ? 'Prise intelligente pour le controle d acces aux appareils electriques avec application mobile.'
        : 'Smart socket for access control to electrical devices with mobile application.'
    }
  ];

  const accessProducts = products.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % accessProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [accessProducts.length]);

  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };

  const translations = {
    Fr: {
      title: "Controle d'Acces Maroc",
      description: "Systemes de controle d'acces avances au Maroc. Solutions pour entreprises et residences avec biometrie, cartes RFID et applications mobiles.",
      ctaFreeQuote: 'Devis Gratuit',
      ctaLearnMore: 'En Savoir Plus',
      features: {
        biometricSecurity: 'Securite Biometrique',
        biometricDesc: 'Reconnaissance faciale, empreinte digitale et badges securises pour un acces fiable.',
        userManagement: 'Gestion Utilisateurs',
        userDesc: 'Controle precis des permissions et historiques d acces en temps reel.',
        businessSolutions: 'Solutions Entreprises',
        businessDesc: 'Systemes adaptes aux bureaux, immeubles, commerces et institutions.',
      },
      productsTitle: "Nos Produits de Controle d'Acces",
      installation: {
        title: "Installation Controle d'Acces Maroc",
        intro: "Ez lock installe des systemes de controle d'acces de derniere generation pour securiser vos locaux. Nos solutions s'adaptent a tous types d'environnement.",
        typesTitle: "Types de Controle d'Acces",
        types: [
          "Controle d'acces par badge RFID",
          'Claviers a code',
          'Lecteurs compacts',
          'Controle mobile',
          'Solutions pour entreprises',
          'Systemes pour residences',
          "Gestion des acces utilisateurs",
          'Integration securite'
        ],
        closing: 'Installation professionnelle avec formation et support technique. Contactez-nous pour une consultation gratuite.',
      },
      backHome: "Retour a l'accueil",
    },
    En: {
      title: 'Access Control Morocco',
      description: 'Advanced access control systems in Morocco. Solutions for businesses and residences with biometrics, RFID cards, and mobile applications.',
      ctaFreeQuote: 'Free Quote',
      ctaLearnMore: 'Learn More',
      features: {
        biometricSecurity: 'Biometric Security',
        biometricDesc: 'Facial recognition, fingerprint, and secure credentials for reliable access.',
        userManagement: 'User Management',
        userDesc: 'Precise permission control and real-time access history.',
        businessSolutions: 'Business Solutions',
        businessDesc: 'Systems adapted to offices, buildings, shops, and institutions.',
      },
      productsTitle: 'Our Access Control Products',
      installation: {
        title: 'Access Control Installation Morocco',
        intro: 'Ez lock installs state-of-the-art access control systems to secure your premises. Our solutions adapt to all types of environments.',
        typesTitle: 'Types of Access Control',
        types: [
          'RFID badge access control',
          'Code keypads',
          'Compact readers',
          'Mobile control',
          'Business solutions',
          'Residential systems',
          'User access management',
          'Security integration'
        ],
        closing: 'Professional installation with training and technical support. Contact us for a free consultation.',
      },
      backHome: 'Back to Home',
    },
  };

  const t = translations[selectedLang];

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.backHome}
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h1>

          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-sm h-96 bg-white rounded-2xl overflow-hidden shadow-xl flex items-center justify-center relative">
              <img
                src={accessProducts[currentIndex].image}
                alt={accessProducts[currentIndex].name}
                className="w-full h-full object-contain p-8 transition-all duration-500"
              />
            </div>

            <div className="flex gap-2 mt-6 justify-center">
              {accessProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-red-500 w-8' : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Show product ${index + 1}`}
                />
              ))}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              {accessProducts[currentIndex].name}
            </h3>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t.ctaFreeQuote}
            </button>
            <button
              onClick={() => window.location.href = '#services'}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border border-red-500 hover:bg-blue-50 transition-all duration-300"
            >
              {t.ctaLearnMore}
            </button>
          </div>
        </div>

        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Lock className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.features.biometricSecurity}</h3>
            <p className="text-gray-600">{t.features.biometricDesc}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.features.userManagement}</h3>
            <p className="text-gray-600">{t.features.userDesc}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Building className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.features.businessSolutions}</h3>
            <p className="text-gray-600">{t.features.businessDesc}</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.productsTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.installation.title}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">{t.installation.intro}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.installation.typesTitle}</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {t.installation.types.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600">{t.installation.closing}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControleAcces;
