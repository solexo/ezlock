import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Users, Building } from 'lucide-react';
import ProductCard from './ProductCard';

const ControleAcces = () => {
  const whatsappContact = () => {
    window.open('https://wa.me/212660245937', '_blank');
  };

  const products = [
    {
      id: 'ca1-ca2',
      name: 'Contrôle d\'Accès CA1/CA2',
      image: '/images/ca2.webp',
      features: [
        'Application mobile',
        'Empreinte digitale',
        'Code numérique',
        'Carte NFC',
        'Contrôle d\'accès'
      ],
      description: 'Systèmes de contrôle d\'accès CA1 et CA2 avec empreinte digitale, code et NFC pour sécuriser vos espaces'
    },
    {
      id: 'inta-intb',
      name: 'Interrupteurs Tactiles INTA/INTB',
      image: '/images/intb.webp',
      features: [
        'Application mobile',
        'Connexion WiFi',
        'Contrôle éclairage',
        'Contrôle rideaux',
        'Contrôle TV',
        'Contrôle climatisation'
      ],
      description: 'Interrupteurs tactiles INTA et INTB pour contrôler l\'éclairage, rideaux, TV et climatisation via WiFi et application'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contrôle d'Accès <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Maroc</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Systèmes de contrôle d'accès avancés au Maroc. Solutions pour entreprises et résidences avec biométrie, cartes RFID et applications mobiles.
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
              Nos Solutions
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Lock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sécurité Biométrique</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reconnaissance faciale, empreinte digitale et iris pour un accès ultra-sécurisé.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Gestion Utilisateurs</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Contrôle précis des permissions et historiques d'accès en temps réel.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Building className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Solutions Entreprises</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Systèmes adaptés aux besoins des entreprises et institutions.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nos Produits de Contrôle d'Accès
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Installation Contrôle d'Accès Maroc
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              DOMO28 installe des systèmes de contrôle d'accès de dernière génération pour sécuriser vos locaux. Nos solutions s'adaptent à tous types d'environnement.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Types de Contrôle d'Accès</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
              <li>Biometric Access Control</li>
              <li>RFID Card Systems</li>
              <li>Mobile Applications</li>
              <li>Home Automation Integration</li>
              <li>Biometric Systems</li>
              <li>RFID Cards</li>
              <li>Access Management Software</li>
              <li>Security Integration</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              Installation professionnelle avec formation et support technique. Contactez-nous pour une consultation gratuite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControleAcces;