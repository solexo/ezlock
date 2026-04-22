import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Zap } from 'lucide-react';

const allProducts = [
  // Serrures Intelligentes (Smart Locks)
  { id: 'x1ai', image: '/images/x1ai.webp', name: 'Serrure Intelligente X1AI', category: 'serrure' },
  { id: 'i40', image: '/images/i40 (2).webp', name: 'Serrure I40', category: 'serrure' },
  { id: 'i30', image: '/images/i30.webp', name: 'Serrure I30', category: 'serrure' },
  { id: 'm1pro', image: '/images/m1pro.webp', name: 'Serrure M1 Pro', category: 'serrure' },
  { id: 'k10', image: '/images/k10.webp', name: 'Clavier K10', category: 'serrure' },
  { id: 'x5', image: '/images/x5.webp', name: 'X5', category: 'serrure' },
  // Contrôle d'Accès (Access Control)
  { id: 'ca1-ca2', image: '/images/ca2.webp', name: 'Controleur CA2', category: 'controle-acces' },
  { id: 'controle-acces-2', image: '/images/ca1.webp', name: 'Controleur CA1', category: 'controle-acces' },
  // Domotique (Home Automation)
  { id: 'inta-intb', image: '/images/intb.webp', name: 'Interrupteurs Tactiles INTA/INTB', category: 'domotique' },
  { id: 'smart-switch-double', image: '/images/smart switch rideau.webp', name: 'Interrupteur Double Rideau', category: 'domotique' },
  { id: 'smart-switch-simple', image: '/images/smart switch.webp', name: 'Interrupteur Simple', category: 'domotique' },
   // Caméras
   { id: 'camera-surveillance-1', image: '/images/camera de surveillance/a.webp', name: 'Caméra de surveillance 01', category: 'camera' },
   { id: 'camera-surveillance-2', image: '/images/camera de surveillance/a-1.webp', name: 'Caméra de surveillance 02', category: 'camera' },
   { id: 'camera-surveillance-3', image: '/images/camera de surveillance/a-2.webp', name: 'Caméra de surveillance 03', category: 'camera' },
   { id: 'camera-surveillance-4', image: '/images/camera de surveillance/o.webp', name: 'Caméra de surveillance 04', category: 'camera' },
   // Lecteur UHF
   { id: 'lecteur-uhf-1', image: '/images/lecteur uhf/H44d48b9fd1aa4fd4a1c0c7a261fe6156o-300x300.webp', name: 'Lecteur UHF 01', category: 'uhf' },
   { id: 'lecteur-uhf-2', image: '/images/lecteur uhf/Hed70fdbf6c104b2d85715adf0c15c5faD-300x300.webp', name: 'Lecteur UHF 02', category: 'uhf' },
   { id: 'lecteur-uhf-3', image: '/images/lecteur uhf/InkedHe673616e79f345cc84ff35ee432b74e66-300x300.jpg', name: 'Lecteur UHF 03', category: 'uhf' },
];

const getProductsByCategory = (category) => {
  if (Array.isArray(category)) {
    return allProducts.filter(p => category.includes(p.category));
  }
  return allProducts.filter(p => p.category === category);
};

const SimpleCarousel = ({ category, categoryTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = getProductsByCategory(category);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  if (!products.length) return null;

  return (
    <div className="relative flex flex-col items-center justify-center h-full p-6 bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl">
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-red-500">
          {categoryTitle}
        </h3>

        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl border-2 border-red-500/30 overflow-hidden shadow-lg bg-white">
            <img
              src={products[currentIndex]?.image}
              alt={products[currentIndex]?.name}
              className="w-full h-full object-contain p-4 transition-all duration-700"
              loading="eager"
              onError={(e) => {
                e.target.src = '/images/download.webp';
              }}
            />
          </div>
        </div>

        {/* Variants for X5 */}
        {products[currentIndex]?.id === 'x5' && (
          <div className="flex justify-center space-x-4 mb-4">
            <img
              src="/images/x5g.webp"
              alt="X5 Gold"
              className="w-12 h-12 object-contain"
            />
            <img
              src="/images/x5s.webp"
              alt="X5 Silver"
              className="w-12 h-12 object-contain"
            />
          </div>
        )}

        <div className="flex justify-center space-x-2 mb-4">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentIndex ? 'bg-red-500 w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <p className="text-xs sm:text-sm text-gray-700 font-semibold text-center line-clamp-2">
          {products[currentIndex]?.name}
        </p>
      </div>
    </div>
  );
};

const ScrollingProductMenu = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const products = [
    { id: 'x1ai', image: '/images/x1ai.webp', name: 'Serrure Intelligente X1AI' },
    { id: 'i40', image: '/images/i40 (2).webp', name: 'Serrure I40' },
    { id: 'i30', image: '/images/i30.webp', name: 'Serrure I30' },
    { id: 'm1pro', image: '/images/m1pro.webp', name: 'Serrure M1 Pro' },
    { id: 'k10', image: '/images/k10.webp', name: 'Clavier K10' },
    { id: 'x5', image: '/images/x5.webp', name: 'X5' },
    { id: 'i20', image: '/images/i20.webp', name: 'Serrure I20' },
    { id: 'ca1-ca2', image: '/images/ca2.webp', name: 'Controleur CA2' },
    { id: 'inta-intb', image: '/images/intb.webp', name: 'Interphone INTB' },
    { id: 'smart-switch-double', image: '/images/smart switch rideau.webp', name: 'Interrupteur Double Rideau' },
    { id: 'smart-switch-simple', image: '/images/smart switch.webp', name: 'Interrupteur Simple' },
    { id: 'cam', image: '/images/cam.webp', name: 'Camera Surveillance' },
    { id: 'controle-acces-2', image: '/images/ca1.webp', name: 'Controleur CA1' },
  ];

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
      {/* Main Hero Section with Center Animation and Side Carousels */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-red-50">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 items-center">
            {/* LEFT CAROUSEL - Domotique */}
            <div className="hidden md:block h-96">
              <SimpleCarousel category="domotique" categoryTitle="" />
            </div>

            {/* CENTER - Main Animation */}
            <div className="flex flex-col items-center justify-center py-12 md:py-0">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl border-4 border-red-500/40 overflow-hidden shadow-2xl bg-white transition-all duration-500 hover:shadow-2xl hover:border-red-500">
                    <img
                      src={featuredProducts[currentProductIndex]?.image}
                      alt={featuredProducts[currentProductIndex]?.name}
                      className="w-full h-full object-contain p-8 transition-all duration-700 ease-in-out"
                      loading="eager"
                      fetchPriority="high"
                      onError={(e) => {
                        e.target.src = '/images/download.webp';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white font-bold text-base sm:text-lg text-center">
                        {featuredProducts[currentProductIndex]?.name || 'Produit EZ Lock'}
                      </h3>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6 space-x-2">
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

              <div className="space-y-4 text-center">
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                  <button
                    onClick={whatsappContact}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Demander un Devis
                  </button>

                  <Link
                    to="/contact"
                    className="bg-white text-red-500 px-6 py-3 rounded-xl font-bold text-sm border-2 border-red-500 hover:bg-red-50 transition-all duration-300"
                  >
                    Nous Contacter
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT CAROUSEL - Camera & UHF */}
            <div className="hidden md:block h-96">
              <SimpleCarousel category={['camera', 'uhf']} categoryTitle="" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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

      {/* Produits Phare Section - UNTOUCHED */}
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

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA Section */}
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
