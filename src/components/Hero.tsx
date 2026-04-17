import React, { useEffect } from 'react';
import { ArrowRight, Smartphone, Lock, Zap } from 'lucide-react';
import ScrollingProductMenu from './ScrollingProductMenu';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappContact = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'whatsapp://send?phone=212660245937';
    } else {
      window.open('https://wa.me/212660245937', '_blank');
    }
  };

  const features = [
    {
      icon: Smartphone,
      title: 'Contrôle Centralisé',
      description: 'Gérez votre maison depuis une seule app',
    },
    {
      icon: Lock,
      title: 'Sécurité Avancée',
      description: 'Face ID, Empreinte & Authentification',
    },
    {
      icon: Zap,
      title: 'Installation Pro',
      description: 'Configuration complète et garantie',
    },
  ];

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-smart"></div>

      {/* Animated glow orbs in background */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-accent/20 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-accent/10 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Main heading */}
          <div className="space-y-4 sm:space-y-6 text-center animate-fade-in-up">
            <h1 className="font-hero text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              <span className="bg-gradient-to-r from-blue-accent via-blue-400 to-blue-300 bg-clip-text text-transparent">
                Votre Maison Intelligente de Demain
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Transformez votre habitat avec les solutions domotiques les plus avancées.
              <span className="text-blue-accent font-semibold"> Sécurité, confort, efficacité énergétique.</span>
            </p>

            {/* Product menu */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <ScrollingProductMenu />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card-elevated p-6 sm:p-8 text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-accent/10 rounded-xl group-hover:bg-blue-accent/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-blue-accent" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Integration platforms */}
          <div className="hidden sm:block pt-8 sm:pt-12">
            <h3 className="font-heading text-center text-xl sm:text-2xl text-text-primary mb-8">
              Compatible avec les meilleures plateformes
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {[
                'tuya', 'googleassistant', 'google home', 'alexa', 'smartlife',
                'tplink', 'ewlink', 'airbnb', 'booking', 'sonoff'
              ].map((platform, index) => (
                <div
                  key={index}
                  className="card-elevated p-4 flex items-center justify-center h-20 group cursor-pointer"
                >
                  <img
                    src={`/images/${platform}.webp`}
                    alt={platform}
                    className="w-12 h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 sm:pt-12">
            <button
              onClick={scrollToProducts}
              className="btn-glow group w-full sm:w-auto flex items-center justify-center space-x-3 text-lg font-semibold px-8 py-4"
            >
              <span>Découvrir Produits</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={whatsappContact}
              className="relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-glow-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center space-x-2">
                <span>Devis GRATUIT</span>
                <span className="text-lg group-hover:scale-110 transition-transform">⚡</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;