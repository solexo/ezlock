import React from 'react';
import { Wrench, Shield, Clock, Users, Award, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Installation Professionnelle',
      description: 'Installation serrures intelligentes par techniciens certifiés DOMO28. Service professionnel.',
      color: 'text-yellow-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Garantie 2 ans',
      description: 'Garantie 2 ans complète DOMO28 : pièces, main d\'œuvre, support technique. Service après-vente domotique.',
      color: 'text-blue-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Intervention Rapide',
      description: 'Intervention rapide : installation domotique sous 48h. Service urgence 24/7 disponible.',
      color: 'text-green-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Formation Utilisateur',
      description: 'Formation utilisateur domotique : apprentissage complet systèmes intelligents, application mobile, sécurité maison connectée.',
      color: 'text-purple-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expertise Reconnue',
      description: 'DOMO28 : 500+ installations réussies, équipe experts domotique certifiés. Leader maison connectée.',
      color: 'text-indigo-500'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Support Technique',
      description: 'Support technique domotique 7j/7 : assistance maisons connectées, dépannage urgence, maintenance préventive.',
      color: 'text-pink-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-black dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title text-gray-900 dark:text-white mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-400">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Service domotique complet Maroc : installation serrures intelligentes, caméras surveillance, contrôle accès, éclairage intelligent, agriculture intelligente. Conseil expert, formation utilisateur, maintenance 7j/7 pour maisons connectées sécurisées.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
            >
              <div className={`${service.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-base font-heading text-gray-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Intégrations - Hidden on mobile, visible on tablet and up */}
        <div className="hidden sm:block mb-8 md:mb-12 lg:mb-16 px-2 md:px-4">
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-title text-gray-900 dark:text-white mb-4 md:mb-6 lg:mb-8 text-center">
            Intégrations Smart Home
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 text-center mb-4 md:mb-6 lg:mb-8 max-w-3xl mx-auto px-2">
            Nos systèmes domotiques s'intègrent parfaitement avec les principales plateformes pour un contrôle unifié de votre maison intelligente.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/tuya.webp" alt="Tuya Smart Home" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">Tuya Smart Home</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/googleassistant.webp" alt="Google Assistant" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">Google Assistant</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/google home.webp" alt="Google Home" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">Google Home</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/alexa.webp" alt="Amazon Alexa" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">Amazon Alexa</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/smartlife.webp" alt="Smart Life" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">Smart Life</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/tplink.webp" alt="TP-Link" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">TP-Link</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/ewlink.webp" alt="EW Link" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">EW Link</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/airbnb.webp" alt="Airbnb" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">Airbnb</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/booking.webp" alt="Booking.com" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">Booking.com</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <img src="/images/sonoff.webp" alt="Sonoff" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain" loading="lazy" width="64" height="64" />
              <span className="font-bold text-gray-900 dark:text-white text-xs md:text-sm text-center leading-tight">Sonoff</span>
            </div>
          </div>
        </div>

        {/* Section processus d'installation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-title text-gray-900 dark:text-white mb-4">
              Processus d'Installation Domotique
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Installation professionnelle maisons connectées en 4 étapes simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Devis gratuit', description: 'Contactez-nous pour un devis personnalisé' },
              { step: '2', title: 'Prise de rendez-vous', description: 'Planification de l\'intervention sous 48h' },
              { step: '3', title: 'Installation', description: 'Installation professionnelle par nos experts' },
              { step: '4', title: 'Formation', description: 'Formation complète à l\'utilisation' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-r from-black to-yellow-400 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => window.open('https://wa.me/212660245937', '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 text-lg"
            >
              <span>💬</span>
              <span>Commencer mon projet</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;