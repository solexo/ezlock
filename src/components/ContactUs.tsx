import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-blue-accent hover:text-blue-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets domotiques.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Informations de Contact
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-blue-accent font-semibold text-lg">06 01 53 43 01</p>
                  <p className="text-blue-accent font-semibold text-lg">06 66 59 18 24</p>
                  <p className="text-gray-600 text-sm mt-1">Lun-Sam 8h-18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fax</h3>
                  <p className="text-blue-accent font-semibold text-lg">05 22 55 00 99</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-accent/10 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-blue-accent font-semibold">contact@ezlock.ma</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900  mb-1">Adresse</h3>
                  <p className="text-gray-600 ">
                    Casablanca, Maroc
                  </p>
                  <p className="text-gray-600  text-sm">
                    Zone de couverture : Casablanca, Rabat, Marrakech, Tanger
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-accent/10 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900  mb-1">Horaires d'ouverture</h3>
                  <p className="text-gray-600 ">
                    Lundi - Samedi : 8h00 - 18h00
                  </p>
                  <p className="text-gray-600 ">
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form/Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contactez-nous directement
            </h2>

            <div className="text-center">
              <p className="text-gray-600  mb-8">
                Pour un devis personnalisé ou des informations sur nos produits,
                contactez-nous via WhatsApp pour une réponse rapide.
              </p>

              <button
                onClick={whatsappContact}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3 mb-6"
              >
                <span>💬</span>
                <span>Contactez-nous sur WhatsApp</span>
              </button>

              <p className="text-gray-500 text-sm">
                Réponse garantie sous 24h !
              </p>
            </div>

            {/* Additional Contact Options */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900  mb-4">
                Autres moyens de contact
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => window.location.href = 'tel:+212601534301'}
                  className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  📞 Appel téléphonique direct
                </button>
                <button
                  onClick={() => window.location.href = 'mailto:contact@ezlock.ma'}
                  className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  ✉️ Envoyer un email
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-accent to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à transformer votre maison ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé.
          </p>
          <button
            onClick={whatsappContact}
            className="bg-white text-blue-accent px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
          >
            <span>🚀</span>
            <span>Obtenir un Devis Gratuit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;