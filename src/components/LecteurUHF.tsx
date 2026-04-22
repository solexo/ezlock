import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from './ProductCard';

const LecteurUHF = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };

  const products = [
    {
      id: 'lecteur-uhf-1',
      name: 'Lecteur UHF 01',
      image: '/images/lecteur uhf/H44d48b9fd1aa4fd4a1c0c7a261fe6156o-300x300.webp',
      url: '/product/lecteur-uhf-1',
      features: ['Application mobile', 'Controle d acces', 'Carte NFC'],
      description: 'Lecteur UHF longue portee pour identification automatique dans les environnements professionnels.'
    },
    {
      id: 'lecteur-uhf-2',
      name: 'Lecteur UHF 02',
      image: '/images/lecteur uhf/Hed70fdbf6c104b2d85715adf0c15c5faD-300x300.webp',
      url: '/product/lecteur-uhf-2',
      features: ['Application mobile', 'Controle d acces', 'Carte NFC'],
      description: 'Solution UHF compacte pour la lecture rapide et fiable de badges et etiquettes a distance.'
    },
    {
      id: 'lecteur-uhf-3',
      name: 'Lecteur UHF 03',
      image: '/images/lecteur uhf/InkedHe673616e79f345cc84ff35ee432b74e66-300x300.jpg',
      url: '/product/lecteur-uhf-3',
      features: ['Application mobile', 'Controle d acces', 'Carte NFC'],
      description: 'Lecteur UHF professionnel adapte aux parkings, entrepots, sites industriels et controle d acces.'
    }
  ];

  const uhfProducts = products.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % uhfProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [uhfProducts.length]);

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour a l'accueil
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            LECTEUR UHF
          </h1>

          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-sm h-96 bg-white rounded-2xl overflow-hidden shadow-xl flex items-center justify-center relative">
              <img
                src={uhfProducts[currentIndex].image}
                alt={uhfProducts[currentIndex].name}
                className="w-full h-full object-contain p-8 transition-all duration-500"
              />
            </div>

            <div className="flex gap-2 mt-6 justify-center">
              {uhfProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-red-500 w-8' : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Show product ${index + 1}`}
                />
              ))}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              {uhfProducts[currentIndex].name}
            </h3>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Solutions avancees de lecture UHF pour vos besoins en identification automatique.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Demander un Devis
            </button>
            <button
              onClick={() => window.location.href = '#produits'}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border border-red-500 hover:bg-blue-50 transition-all duration-300"
            >
              Voir les Produits
            </button>
          </div>
        </div>

        <div id="produits" className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Lecteurs UHF Professionnels
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Decouvrez notre gamme de lecteurs UHF haute performance pour diverses applications industrielles, logistiques et commerciales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Portee Etendue</h3>
                <p className="text-gray-600">Lecture a longue distance pour une efficacite maximale.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Haute Vitesse</h3>
                <p className="text-gray-600">Traitement rapide de multiples tags simultanement.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Fiabilite</h3>
                <p className="text-gray-600">Technologie robuste pour environnements exigeants.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch mb-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Demander un Devis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecteurUHF;
