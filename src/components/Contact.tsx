import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, Mail, Users } from 'lucide-react';
import { trackProspect } from '../utils/facebookConversions';

const Contact = () => {
  const whatsappContact = async () => {
    // Track prospect event
    await trackProspect();

    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Use whatsapp:// URL scheme for mobile apps
      window.location.href = 'whatsapp://send?phone=212660245937';
    } else {
      // Use web WhatsApp for desktop
      window.open('https://wa.me/212660245937', '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-400">Nos Experts</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre projet de sécurisation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                Devis gratuit, conseils personnalisés et installation professionnelle. 
                Contactez-nous dès maintenant pour sécuriser votre domicile.
              </p>
            </div>

            {/* Moyens de contact */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Téléphone</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">+212 660 24 59 37</p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">+212 669 15 42 35</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Lun-Ven 8h-18h, Sam 9h-17h</p>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Devis sous 24h</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Équipe d'experts</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <MapPin className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Déplacement gratuit</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Mail className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Suivi personnalisé</span>
              </div>
            </div>
          </div>

          {/* Call-to-action principal */}
          <div className="bg-gradient-to-br from-black to-yellow-400 rounded-2xl p-8 md:p-12 text-white flex flex-col justify-center">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Prêt à sécuriser votre domicile ?
              </h3>
              
              <p className="text-white/90 text-lg leading-relaxed">
                Contactez-nous maintenant pour un devis gratuit et personnalisé. 
                Nos experts vous conseillent et vous accompagnent dans votre projet.
              </p>

              <div className="space-y-4">
                <button
                  onClick={whatsappContact}
                  className="w-full bg-white text-yellow-500 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 touch-manipulation"
                >
                  <span>💬</span>
                  <span>Demander un devis gratuit</span>
                </button>
                
                <div className="text-center text-white/80">
                  <p className="text-sm">Réponse garantie sous 2h en semaine</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6 text-sm text-white/80 flex-wrap gap-2">
                <span>✓ Devis gratuit</span>
                <span>✓ Installation incluse</span>
                <span>✓ Garantie 2 ans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;