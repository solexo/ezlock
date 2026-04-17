import React, { useEffect } from 'react';
import { ArrowRight, Smartphone, Lock, Zap } from 'lucide-react';
import ScrollingProductMenu from './ScrollingProductMenu';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { selectedLang, setSelectedLang } = useLanguage();
  const scrollToProducts = () => {
    const element = document.getElementById('produits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappContact = () => {
    window.open('https://wa.me/212660245937', '_blank');
  };

  const features = [
    {
      icon: Smartphone,
      title: selectedLang === 'Fr' ? 'Contrôle Centralisé' : 'Centralized Control',
      description: selectedLang === 'Fr' ? 'Gérez votre maison depuis une seule app' : 'Manage your home from a single app',
    },
    {
      icon: Lock,
      title: selectedLang === 'Fr' ? 'Sécurité Avancée' : 'Advanced Security',
      description: selectedLang === 'Fr' ? 'Face ID, Empreinte & Authentification' : 'Face ID, Fingerprint & Authentication',
    },
    {
      icon: Zap,
      title: selectedLang === 'Fr' ? 'Installation Pro' : 'Professional Installation',
      description: selectedLang === 'Fr' ? 'Configuration complète et garantie' : 'Complete configuration and warranty',
    },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-smart"></div>

      {/* Animated glow orbs in background */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-accent/20 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-accent/10 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>

       {/* Content */}
       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
         {/* Language Selector */}
         <div className="absolute top-0 right-0 sm:right-4 lg:right-8 flex gap-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-2 rounded-lg">
           <button
             onClick={() => setSelectedLang('Fr')}
             className={`px-3 sm:px-4 py-1 sm:py-2 rounded text-sm font-semibold transition-all ${
               selectedLang === 'Fr'
                 ? 'bg-blue-accent text-white'
                 : 'text-text-primary hover:bg-white/20'
             }`}
           >
             FR
           </button>
           <button
             onClick={() => setSelectedLang('En')}
             className={`px-3 sm:px-4 py-1 sm:py-2 rounded text-sm font-semibold transition-all ${
               selectedLang === 'En'
                 ? 'bg-blue-accent text-white'
                 : 'text-text-primary hover:bg-white/20'
             }`}
           >
             EN
           </button>
         </div>

         <div className="space-y-6 sm:space-y-10 lg:space-y-16">
          {/* Main heading */}
          <div className="space-y-4 sm:space-y-6 text-center animate-fade-in-up">
            <h1 className="font-hero text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              <span className="bg-gradient-to-r from-blue-accent via-blue-400 to-blue-300 bg-clip-text text-transparent">
                {selectedLang === 'Fr' ? 'Votre Maison de Demain' : 'Your Home of Tomorrow'}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
              {selectedLang === 'Fr'
                ? 'Transformez votre habitat avec les solutions domotiques les plus avancées.'
                : 'Transform your home with the most advanced home automation solutions.'}
              <span className="text-blue-accent font-semibold">
                {selectedLang === 'Fr' ? ' Sécurité, confort, efficacité énergétique.' : ' Security, comfort, energy efficiency.'}
              </span>
            </p>

            {/* Product menu */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <ScrollingProductMenu />
            </div>

            {/* Promotional text right after animation */}
            <div className="mt-6 sm:mt-8">
              <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed px-4 text-center">
                🏠 <strong>Leader domotique Maroc</strong> - DOMO28 transforme votre maison en habitat intelligent.
                🔐 Installation serrures intelligentes, 📹 caméras surveillance, 🚪 contrôle d'accès, 🪟 rideaux automatiques,
                💡 éclairage LED intelligent, 🚪 portes automatiques, 🌱 agriculture intelligente et 📱 contrôle centralisé.
                ⚡ Installation professionnelle domotique Maroc - Devis gratuit 24h !
              </p>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 lg:pt-12">
            <button
              onClick={scrollToProducts}
              className="btn-glow group w-full sm:w-auto flex items-center justify-center space-x-3 text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4"
            >
              <span>Découvrir Produits</span>
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={whatsappContact}
              className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-glow-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center space-x-2">
                <span>Devis GRATUIT</span>
                <span className="text-base sm:text-lg group-hover:scale-110 transition-transform">⚡</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;