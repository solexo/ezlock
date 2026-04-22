import React from 'react';
import { Wrench, Shield, Clock, Users, Award, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Installation Pro',
      description: 'Installation par techniciens Ez lock certifiés',
    },
    {
      icon: Shield,
      title: 'Garantie 1 an',
      description: 'Couverture complète pièces & main-d\'œuvre',
    },
    {
      icon: Clock,
      title: 'Intervention 48h',
      description: 'Service rapide & urgence 24/7 disponible',
    },
    {
      icon: Users,
      title: 'Formation',
      description: 'Formation complète système & application',
    },
    {
      icon: Award,
      title: '500+ Installations',
      description: 'Leader domotique Maroc depuis 2020',
    },
    {
      icon: Headphones,
      title: 'Support 7j/7',
      description: 'Assistance technique domotique continue',
    }
  ];

  return (
    <section id="services" className="relative py-20 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
           <h2 className="font-hero text-4xl sm:text-5xl lg:text-6xl text-text-primary dark:text-text-primary-dark mb-4 sm:mb-6">
             Nos <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent">Services</span>
           </h2>
          <p className="text-lg sm:text-xl text-text-secondary dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed">
            Service domotique complet : installation, formation, garantie, et support technique 7j/7.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-elevated p-8 group flex flex-col text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 group-hover:shadow-glow-blue transition-all duration-300">
                    <Icon className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="font-heading text-lg sm:text-xl text-text-primary dark:text-text-primary-dark mb-2 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary dark:text-text-secondary-dark text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Integrations section */}
        <div className="hidden sm:block mt-16 sm:mt-20 pt-16 border-t border-slate-800/30">
          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-text-primary dark:text-text-primary-dark text-center mb-4 sm:mb-6">
            Intégrations Smart Home
          </h3>
          <p className="text-text-secondary dark:text-text-secondary-dark text-center mb-12 max-w-3xl mx-auto">
            Nos systèmes s'intègrent avec les meilleures plateformes pour un contrôle unifié.
          </p>
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
      </div>
    </section>
  );
};

export default Services;
