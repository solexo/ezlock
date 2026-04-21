import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Zap, Shield } from 'lucide-react';
import ProductCard from './ProductCard';

const DomotiqueCasablanca = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };

  const products = [
    {
      id: 'domotique-4ch-r3-pro-2',
      name: '4CH R3 Pro',
      image: '/images/domotique/4CH-R3-Pro-2.webp',
      url: '/product/domotique-4ch-r3-pro-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Controle prises', 'Programmation horaire'],
      description: 'Module domotique multi-canaux pour automatiser plusieurs circuits d eclairage et equipements.'
    },
    {
      id: 'domotique-aubess-prise-3',
      name: 'Aubess Prise Smart',
      image: '/images/domotique/Aubess-Prise-3.webp',
      url: '/product/domotique-aubess-prise-3',
      features: ['Application mobile', 'Connexion WiFi', 'Controle prises', 'Programmation horaire'],
      description: 'Prise connectee intelligente pour piloter vos appareils a distance et suivre vos automatisations.'
    },
    {
      id: 'domotique-bridge-r2-2',
      name: 'Bridge R2',
      image: '/images/domotique/Bridge-R2-2.webp',
      url: '/product/domotique-bridge-r2-2',
      features: ['Application mobile', 'Connexion WiFi', 'Programmation horaire'],
      description: 'Passerelle domotique pour relier et centraliser vos accessoires intelligents a la maison.'
    },
    {
      id: 'domotique-dual-r3-1',
      name: 'Dual R3',
      image: '/images/domotique/Dual-R3-1.webp',
      url: '/product/domotique-dual-r3-1',
      features: ['Application mobile', 'Connexion WiFi', 'Controle rideaux', 'Controle eclairage'],
      description: 'Relais double intelligent ideal pour l automatisation des volets, rideaux et circuits electriques.'
    },
    {
      id: 'domotique-mini-r2-2',
      name: 'Mini R2',
      image: '/images/domotique/mini-r2-2.webp',
      url: '/product/domotique-mini-r2-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Design compact'],
      description: 'Micro module compact pour transformer un interrupteur classique en interrupteur connecte.'
    },
    {
      id: 'domotique-mini-r3-2',
      name: 'Mini R3',
      image: '/images/domotique/Mini-R3-2.webp',
      url: '/product/domotique-mini-r3-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Design compact'],
      description: 'Solution mini format pour piloter l eclairage et les automatismes dans les petits espaces.'
    },
    {
      id: 'domotique-mini-r4-1',
      name: 'Mini R4',
      image: '/images/domotique/Mini-R4-1.webp',
      url: '/product/domotique-mini-r4-1',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Design compact'],
      description: 'Nouvelle generation de mini relais intelligent pour scenarios domotiques simples et efficaces.'
    },
    {
      id: 'domotique-s26-r2-2',
      name: 'S26 R2',
      image: '/images/domotique/S26-R2-2.webp',
      url: '/product/domotique-s26-r2-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle prises', 'Programmation horaire'],
      description: 'Prise intelligente WiFi pour automatiser vos appareils electriques a la maison ou au bureau.'
    },
    {
      id: 'domotique-switch-r5-1',
      name: 'Switch R5',
      image: '/images/domotique/Switch-R5-1.webp',
      url: '/product/domotique-switch-r5-1',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage'],
      description: 'Interrupteur scene pour piloter rapidement plusieurs actions domotiques depuis un seul point.'
    },
    {
      id: 'domotique-t3eu3c',
      name: 'T3EU3C',
      image: '/images/domotique/T3EU3C.jpg',
      url: '/product/domotique-t3eu3c',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Programmation horaire'],
      description: 'Interrupteur tactile connecte trois canaux pour une gestion elegante de votre eclairage.'
    },
    {
      id: 'domotique-telecommande-2',
      name: 'Telecommande Smart',
      image: '/images/domotique/telecommande-2-250x250.jpg',
      url: '/product/domotique-telecommande-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage'],
      description: 'Telecommande domotique pratique pour declencher vos scenes et commandes a distance.'
    }
  ];

  const domotiqueProducts = products.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % domotiqueProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [domotiqueProducts.length]);

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour a l'accueil
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Domotique <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-300">Maroc</span>
          </h1>

          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-sm h-96 bg-white rounded-2xl overflow-hidden shadow-xl flex items-center justify-center relative">
              <img
                src={domotiqueProducts[currentIndex].image}
                alt={domotiqueProducts[currentIndex].name}
                className="w-full h-full object-contain p-8 transition-all duration-500"
              />
            </div>

            <div className="flex gap-2 mt-6 justify-center">
              {domotiqueProducts.map((_, index) => (
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
              {domotiqueProducts[currentIndex].name}
            </h3>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Leader en domotique au Maroc. Installation de systemes domotiques complets : serrures intelligentes, cameras surveillance, controle d'acces, eclairage LED et automatisation connectee.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={whatsappContact}
              className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Devis Gratuit
            </button>
            <button
              onClick={() => window.location.href = '#produits'}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border border-red-500 hover:bg-blue-50 transition-all duration-300"
            >
              Voir Nos Produits
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Home className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Maison Connectee</h3>
            <p className="text-gray-600">
              Transformez votre maison en habitat intelligent avec nos solutions domotiques avancees.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Zap className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Economie d'Energie</h3>
            <p className="text-gray-600">
              Optimisez votre consommation avec l'eclairage LED intelligent et l'automatisation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Securite Totale</h3>
            <p className="text-gray-600">
              Cameras surveillance, serrures intelligentes et scenarios connectes pour une protection complete.
            </p>
          </div>
        </div>

        <div id="produits" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nos Produits Domotiques</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Decouvrez les produits de notre gamme domotique disponibles pour vos projets de maison connectee, automatisation et confort intelligent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Services Solution intelligente
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Ez lock est votre partenaire de confiance pour tous vos projets domotiques au Maroc. Avec nos installations et notre accompagnement, nous proposons des solutions adaptees a chaque maison, commerce ou bureau.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Services</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Installation de modules domotiques</li>
              <li>Prises et interrupteurs connectes</li>
              <li>Automatisation des rideaux et volets</li>
              <li>Gestion de l'eclairage intelligent</li>
              <li>Centralisation des commandes mobiles</li>
              <li>Scenarios et programmations horaires</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Choisir Ez lock a Casablanca ?</h3>
            <p className="text-gray-600 mb-6">
              Notre expertise locale nous permet de concevoir des installations fiables, simples a utiliser et adaptees aux habitudes de vie de nos clients au Maroc.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Installation rapide</li>
              <li>Garantie et support technique</li>
              <li>Configuration sur mesure</li>
              <li>Formation utilisateur incluse</li>
              <li>Devis gratuit en 24h</li>
            </ul>
            <p className="text-gray-600">
              Contactez-nous aujourd'hui pour transformer votre maison en habitat intelligent avec une solution domotique adaptee a vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomotiqueCasablanca;
