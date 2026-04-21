import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Zap } from 'lucide-react';

const products = [
  { id: 'x1ai', image: '/images/x1ai.webp', name: 'Serrure Intelligente X1AI' },
  { id: 'i40', image: '/images/i40 (2).webp', name: 'Serrure I40' },
  { id: 'i30', image: '/images/i30.webp', name: 'Serrure I30' },
  { id: 'i29', image: '/images/WhatsApp Image 2025-09-11 at 15.47.22.webp', name: 'Serrure I29' },
  { id: 'k10', image: '/images/WhatsApp Image 2025-09-11 at 15.47.21 (6).webp', name: 'Clavier K10' },
  { id: 'x5-cam', image: '/images/WhatsApp Image 2025-09-11 at 15.47.21 (5).webp', name: 'Camera X5' },
  { id: 'x5-ultra', image: '/images/WhatsApp Image 2025-09-11 at 15.47.21 (4).webp', name: 'Camera X5 Ultra' },
  { id: 'i20', image: '/images/i20.webp', name: 'Serrure I20' },
  { id: 'ca1-ca2', image: '/images/ca2.webp', name: 'Controleur CA2' },
  { id: 'inta-intb', image: '/images/intb.webp', name: 'Interphone INTB' },
  { id: 'smart-switch-double', image: '/images/smart switch rideau.webp', name: 'Interrupteur Double Rideau' },
  { id: 'smart-switch-simple', image: '/images/smart switch.webp', name: 'Interrupteur Simple' },
  { id: 'cam', image: '/images/cam.webp', name: 'Camera Surveillance' },
  { id: 'controle-acces-2', image: '/images/ca1.webp', name: 'Controleur CA1' },
  { id: 'alexa', image: '/images/alexa.webp', name: 'Integration Alexa' },
  { id: 'google-home', image: '/images/google home.webp', name: 'Integration Google Home' },
  { id: 'tuya', image: '/images/tuya.webp', name: 'Plateforme Tuya' }
];

const ScrollingProductMenu = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const featuredProducts = products.slice(0, 6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };

  const features = [
    {
      icon: Shield,
      title: 'Securite Avancee',
      description: "Protection maximale avec reconnaissance biometrique et controle d'acces intelligent.",
    },
    {
      icon: Smartphone,
      title: 'Controle Mobile',
      description: 'Gerez votre systeme depuis votre smartphone avec notre application intuitive.',
    },
    {
      icon: Zap,
      title: 'Installation Rapide',
      description: 'Mise en service professionnelle en 24h avec formation complete incluse.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300">
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-red-50">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl border-2 border-red-500/30 overflow-hidden shadow-2xl bg-white transition-all duration-500">
                <img
                  src={featuredProducts[currentProductIndex]?.image}
                  alt={featuredProducts[currentProductIndex]?.name}
                  className="w-full h-full object-contain p-6 transition-all duration-700 ease-in-out"
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    e.target.src = '/images/download.webp';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white font-bold text-sm sm:text-base text-center">
                    {featuredProducts[currentProductIndex]?.name || 'Produit EZ Lock'}
                  </h3>
                </div>
              </div>

              <div className="flex justify-center mt-4 space-x-2">
                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProductIndex ? 'bg-red-500 w-6' : 'bg-gray-300 hover:bg-red-300'
                    }`}
                    aria-label={`View ${featuredProducts[index]?.name}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="bg-gradient-to-r from-red-500 via-black to-red-500 bg-clip-text text-transparent">
                Nos Produits
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Decouvrez notre gamme complete de solutions domotiques : serrures intelligentes,
              cameras de surveillance, controle d'acces et bien plus encore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button
                onClick={whatsappContact}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
              >
                <span>Demander un Devis</span>
              </button>

              <Link
                to="/contact"
                className="bg-white text-red-500 px-8 py-4 rounded-xl font-bold text-lg border-2 border-red-500 hover:bg-red-50 transition-all duration-300 inline-flex items-center space-x-3"
              >
                <span>Nous Contacter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir <span className="text-red-500">EZ Lock</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des produits de qualite superieure avec une installation professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card-elevated p-8 text-center group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-red-500" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Produits <span className="text-red-500">Phare</span>
            </h2>
            <p className="text-lg text-gray-600">
              Decouvrez notre selection de produits les plus populaires
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300 p-6"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-red-500 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={whatsappContact}
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2.5 px-4 rounded-lg font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Acheter Maintenant</span>
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full bg-gray-100 text-gray-700 py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Voir les details</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/serrure-intelligente"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
            >
              <span>Voir Tous Nos Produits</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pret a Transformer Votre Espace ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous des aujourd'hui pour decouvrir nos solutions sur mesure
          </p>
          <button
            onClick={whatsappContact}
            className="bg-white text-red-500 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
          >
            <span>Commencer Maintenant</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ScrollingProductMenu;
