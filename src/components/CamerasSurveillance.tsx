import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Camera, Eye, Monitor } from 'lucide-react';

const CamerasSurveillance = () => {
  const whatsappContact = () => {
    window.open('https://wa.me/212660245937', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Caméras Surveillance Maroc - Installation & Sécurité | DOMO28</title>
        <meta name="description" content="Installation professionnelle de systèmes de caméras surveillance au Maroc. Solutions analogiques et IP avec marques leaders comme Hikvision et Ezviz." />
        <link rel="canonical" href="https://www.domo28.ma/cameras-surveillance" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Caméras Surveillance <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Maroc</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Installation professionnelle de systèmes de caméras surveillance au Maroc. Solutions analogiques et IP avec marques leaders comme Hikvision et Ezviz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Devis Gratuit
            </button>
            <button
              onClick={() => window.location.href = '#produits'}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border border-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Voir Nos Produits
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Camera className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Caméras IP & Analogique</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Large gamme de caméras de surveillance pour tous vos besoins de sécurité.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Eye className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Vision Nocturne</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Surveillance 24/7 avec vision nocturne infrarouge avancée.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Monitor className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contrôle à Distance</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Accédez à vos caméras depuis votre smartphone ou ordinateur.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Installation Caméras Surveillance Maroc
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              DOMO28 propose des solutions complètes de caméras surveillance pour sécuriser votre domicile, entreprise ou propriété au Maroc. Nos systèmes incluent installation, configuration et formation.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nos Services de Caméras Surveillance</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
              <li>IP Camera Systems</li>
              <li>Analog Camera Solutions</li>
              <li>Night Vision Cameras</li>
              <li>Remote Monitoring</li>
              <li>Hikvision Systems</li>
              <li>Ezviz Cameras</li>
              <li>IP Camera Installation</li>
              <li>Surveillance Maintenance</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              Bénéficiez d'une installation professionnelle avec garantie et support technique. Contactez-nous pour un devis personnalisé.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CamerasSurveillance;