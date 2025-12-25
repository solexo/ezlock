import React from 'react';
import { Home, Phone, Mail, Clock, Shield, Award, Instagram, Facebook } from 'lucide-react';

const Footer = () => {

  const openInstagram = () => {
    window.open('https://www.instagram.com/domo_28/', '_blank');
  };

  const openFacebook = () => {
    window.open('https://web.facebook.com/profile.php?id=61582655861695', '_blank');
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/images/logob.webp"
                alt="DOMO28 Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Spécialiste en serrures intelligentes et domotique. Nous sécurisons votre domicile 
              avec des solutions technologiques avancées et un service d'installation professionnel.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Installation incluse</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-blue-500" />
                <span>Garantie 2 ans</span>
              </div>
            </div>
          </div>

          {/* Contact rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+212 660 24 59 37</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+212 669 15 42 35</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>badr.assanoussi@domo28.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>ali.belgamra@domo28.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Lun-Sam 8h-18h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/serrure-intelligente" className="hover:text-yellow-400 transition-colors">Serrures intelligentes</a></li>
              <li><a href="/domotique-casablanca" className="hover:text-yellow-400 transition-colors">Domotique</a></li>
              <li><a href="/cameras-surveillance" className="hover:text-yellow-400 transition-colors">Caméras surveillance</a></li>
              <li><a href="/controle-acces" className="hover:text-yellow-400 transition-colors">Contrôle d'accès</a></li>
              <li>Installation professionnelle</li>
              <li>Maintenance & SAV</li>
              <li>Conseil en domotique</li>
              <li>Formation utilisateur</li>
              <li>Support technique</li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="space-y-3">
              <button
                onClick={openInstagram}
                className="flex items-center space-x-3 text-gray-400 hover:text-pink-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Instagram</div>
                  <div className="text-sm">@domo_28</div>
                </div>
              </button>
              
              <button
                onClick={openFacebook}
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Facebook</div>
                  <div className="text-sm">DOMO28</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Intégrations */}
        <div className="mt-6 sm:mt-8 md:mt-12 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center mb-3 sm:mb-4 md:mb-6">Compatible avec</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/tuya.webp" alt="Tuya Smart Home" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">Tuya Smart Home</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/googleassistant.webp" alt="Google Assistant" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">Google Assistant</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/google home.webp" alt="Google Home" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">Google Home</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/alexa.webp" alt="Amazon Alexa" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">Amazon Alexa</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/smartlife.webp" alt="Smart Life" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">Smart Life</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/tplink.webp" alt="TP-Link" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">TP-Link</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/ewlink.webp" alt="EW Link" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">EW Link</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/airbnb.webp" alt="Airbnb" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">Airbnb</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/booking.webp" alt="Booking.com" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">Booking.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-800 p-2 sm:p-3 rounded-lg">
              <img src="/images/sonoff.webp" alt="Sonoff" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" loading="lazy" width="32" height="32" />
              <span className="font-bold text-white text-xs sm:text-xs md:text-sm">Sonoff</span>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 DOMO28. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;