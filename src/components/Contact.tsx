import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, Mail, Users } from 'lucide-react';
import { trackProspect } from '../utils/facebookConversions';

const Contact = () => {
  const whatsappContact = async () => {
    await trackProspect();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'whatsapp://send?phone=212601534301';
    } else {
      window.open('https://wa.me/212601534301', '_blank');
    }
  };

  const benefits = [
    { icon: Clock, label: 'Devis sous 24h', color: 'bg-red-500/10' },
    { icon: Users, label: 'Équipe d\'experts', color: 'bg-red-500/10' },
    { icon: MapPin, label: 'Déplacement gratuit', color: 'bg-red-500/10' },
    { icon: Mail, label: 'Suivi personnalisé', color: 'bg-red-500/10' },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-gradient-smart overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl opacity-10 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-hero text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-4 sm:mb-6">
            Contactez Nos <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">Experts</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Notre équipe Ez lock est à votre disposition pour répondre à vos questions et accompagner votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl text-text-primary mb-4">
                Parlons de Votre Projet
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                Devis gratuit, conseils personnalisés, installation professionnelle. 
                Contactez-nous pour sécuriser votre maison intelligente.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="card-elevated p-6 group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-heading text-text-primary mb-1">Téléphone</h4>
                    <p className="text-red-500 font-semibold text-lg">06 01 53 43 01</p>
                    <p className="text-red-500 font-semibold text-lg">06 66 59 18 24</p>
                    <h4 className="font-heading text-text-primary mb-1 mt-3">Fax</h4>
                    <p className="text-red-500 font-semibold text-lg">05 22 55 00 99</p>
                    <p className="text-text-secondary text-sm mt-1">Lun-Sam 8h-18h</p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6 group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-heading text-text-primary mb-1">WhatsApp</h4>
                    <p className="text-green-400 font-semibold text-lg">Chat direct</p>
                    <p className="text-text-secondary text-sm mt-1">Réponse rapide en semaine</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className={`${benefit.color} border border-red-500/20 rounded-lg p-4 flex items-center space-x-3 hover:border-red-500/50 transition-colors`}>
                    <Icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-text-primary">{benefit.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="card-elevated bg-gradient-red-500 relative overflow-hidden p-8 md:p-12 flex flex-col justify-center">
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-50"></div>

            <div className="relative z-10 text-center space-y-8">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="font-hero text-3xl sm:text-4xl text-white leading-tight">
                Sécurisez Votre Maison Maintenant
              </h3>
              
              <p className="text-blue-100 text-lg leading-relaxed">
                Contactez-nous pour un devis gratuit. Nos experts vous conseillent et accompagnent votre projet domotique.
              </p>

              <button
                onClick={whatsappContact}
                className="w-full bg-white text-red-500 hover:bg-slate-50 font-bold text-lg py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-glow-lg active:scale-95 flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Devis Gratuit</span>
              </button>
              
              <div className="text-white/90 text-sm">
                <p>✓ Réponse sous 2h en semaine</p>
              </div>

              <div className="flex items-center justify-center space-x-3 text-sm text-white/80 flex-wrap gap-2">
                <span>✓ Gratuit</span>
                <span>✓ Installation Pro</span>
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