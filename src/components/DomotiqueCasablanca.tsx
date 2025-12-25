import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Zap, Shield } from 'lucide-react';

const DomotiqueCasablanca = () => {
  const whatsappContact = () => {
    window.open('https://wa.me/212660245937', '_blank');
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Domotique <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Maroc</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Leader en domotique au Maroc. Installation de systèmes domotiques complets : serrures intelligentes, caméras surveillance, contrôle d'accès, éclairage LED, agriculture intelligente. Devis gratuit 24h !
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Devis Gratuit
            </button>
            <button
              onClick={() => window.location.href = '#services'}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border border-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Nos Services
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Home className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Maison Connectée</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Transformez votre maison en habitat intelligent avec nos solutions domotiques avancées.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Économie d'Énergie</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimisez votre consommation avec l'éclairage LED intelligent et l'automatisation.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sécurité Totale</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Caméras surveillance, serrures intelligentes et alarmes pour une protection complète.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Services Domotique Maroc
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              DOMO28 est votre partenaire de confiance pour tous vos projets domotiques au Maroc. Avec plus de 500 installations réussies, nous sommes les experts en systèmes domotiques.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nos Services</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
              <li>Installation serrures intelligentes</li>
              <li>Caméras surveillance</li>
              <li>Contrôle d'accès</li>
              <li>Éclairage LED intelligent</li>
              <li>Rideaux automatiques</li>
              <li>Portes automatiques</li>
              <li>Agriculture intelligente</li>
              <li>Maison connectée</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pourquoi Choisir DOMO28 à Casablanca ?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Notre expertise au Maroc nous permet de comprendre vos besoins spécifiques et de proposer des solutions adaptées au climat et aux exigences locales.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
              <li>Installation sous 48h</li>
              <li>Garantie 2 ans complète</li>
              <li>Formation utilisateur incluse</li>
              <li>Support technique 7j/7</li>
              <li>Devis gratuit en 24h</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              Contactez-nous dès aujourd'hui pour transformer votre maison en un habitat intelligent. DOMO28 - Votre Maison De Demain au Maroc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomotiqueCasablanca;