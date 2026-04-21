import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LecteurUHF = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-blue-accent hover:text-blue-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            LECTEUR UHF
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Solutions avancées de lecture UHF pour vos besoins en identification automatique.
          </p>
        </div>

        {/* Content Placeholder */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Lecteurs UHF Professionnels
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Découvrez notre gamme de lecteurs UHF haute performance pour diverses applications industrielles et commerciales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Portée Étendue</h3>
                <p className="text-gray-600 dark:text-gray-300">Lecture à longue distance pour une efficacité maximale.</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Haute Vitesse</h3>
                <p className="text-gray-600 dark:text-gray-300">Traitement rapide de multiples tags simultanément.</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Fiabilité</h3>
                <p className="text-gray-600 dark:text-gray-300">Technologie robuste pour environnements exigeants.</p>
              </div>
            </div>

            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-blue-accent to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              📞 Demander un Devis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecteurUHF;