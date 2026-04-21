import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Zap } from 'lucide-react';

const products = [
  { id: 'x1ai', image: '/images/x1ai.webp', name: 'Serrure Intelligente X1AI' },
  { id: 'i40', image: '/images/i40%20(2).webp', name: 'Serrure I40' },
  { id: 'i30', image: '/images/i30.webp', name: 'Serrure I30' },
  { id: 'i29', image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.22.webp', name: 'Serrure I29' },
  { id: 'k10', image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(6).webp', name: 'Clavier K10' },
  { id: 'x5-cam', image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(5).webp', name: 'Caméra X5' },
  { id: 'x5-ultra', image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(4).webp', name: 'Caméra X5 Ultra' },
  { id: 'k5', image: '/images/k5.webp', name: 'Clavier K5' },
  { id: 'i20', image: '/images/i20.webp', name: 'Serrure I20' },
  { id: 'qm50', image: '/images/qm50.webp', name: 'Lecteur QM50' },
  { id: 'qm60', image: '/images/qm60.webp', name: 'Lecteur QM60' },
  { id: 'ca1-ca2', image: '/images/ca2.webp', name: 'Contrôleur CA2' },
  { id: 'inta-intb', image: '/images/intb.webp', name: 'Interphone INTB' },
  { id: 'smart-switch-double', image: '/images/smart%20switch%20rideau.webp', name: 'Interrupteur Double Rideau' },
  { id: 'smart-switch-simple', image: '/images/smart%20switch.webp', name: 'Interrupteur Simple' },
  { id: 'cam', image: '/images/cam.webp', name: 'Caméra Surveillance' },
  { id: 'sound-system', image: '/images/sound/Smart Sound Bar.webp', name: 'Barre de Son' },
  { id: 'sound-system-2', image: '/images/sound/L1_Pro16.webp', name: 'Système Son L1 Pro' },
  { id: 'sound-system-3', image: '/images/sound/Bose Music Amplifier.webp', name: 'Amplificateur Bose' },
  { id: 'controle-acces-2', image: '/images/ca1.webp', name: 'Contrôleur CA1' }
];

const ScrollingProductMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };

  const features = [
    {
      icon: Shield,
      title: 'Sécurité Avancée',
      description: 'Protection maximale avec reconnaissance biométrique et contrôle d\'accès intelligent.',
    },
    {
      icon: Smartphone,
      title: 'Contrôle Mobile',
      description: 'Gérez votre système depuis votre smartphone avec notre application intuitive.',
    },
    {
      icon: Zap,
      title: 'Installation Rapide',
      description: 'Mise en service professionnelle en 24h avec formation complète incluse.',
    },
  ];

  // Get featured products (first 6)
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300">
      {/* Header Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-red-50">
        {/* Background elements */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-lg border border-red-500/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-red-500">
              <img
                src="/images/logob.webp"
                alt="Ez lock Logo"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                width="128"
                height="128"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="bg-gradient-to-r from-red-500 via-black to-red-500 bg-clip-text text-transparent">
                Nos Produits
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de solutions domotiques : serrures intelligentes,
              caméras de surveillance, contrôle d'accès et bien plus encore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button
                onClick={whatsappContact}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
              >
                <span>💬</span>
                <span>Demander un Devis</span>
              </button>

              <Link
                to="/contact"
                className="bg-white text-red-500 px-8 py-4 rounded-xl font-bold text-lg border-2 border-red-500 hover:bg-red-50 transition-all duration-300 inline-flex items-center space-x-3"
              >
                <span>📞</span>
                <span>Nous Contacter</span>
              </Link>
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
              Des produits de qualité supérieure avec une installation professionnelle
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

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Produits <span className="text-red-500">Phare</span>
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez notre sélection de produits les plus populaires
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
                      <span>🛒</span>
                      <span>Acheter Maintenant</span>
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full bg-gray-100 text-gray-700 py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>📋</span>
                      <span>Voir les détails</span>
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
              <span>🔍</span>
              <span>Voir Tous Nos Produits</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à Transformer Votre Espace ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès aujourd'hui pour découvrir nos solutions sur mesure
          </p>
          <button
            onClick={whatsappContact}
            className="bg-white text-red-500 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
          >
            <span>🚀</span>
            <span>Commencer Maintenant</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ScrollingProductMenu;