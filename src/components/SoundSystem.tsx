import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Volume2, Music, Wifi, ShoppingCart, FileText } from 'lucide-react';

// Import images
import L1Pro16 from '/images/sound/L1_Pro16.webp';
import L1Pro8 from '/images/sound/L1pro8.webp';
import SmartSoundBar from '/images/sound/Smart Sound Bar.webp';
import SmartUltraSoundbar from '/images/sound/Smart Ultra Soundbar.webp';
import Cube from '/images/sound/cube.webp';
import Acoustimass3 from '/images/sound/Caisson de Bass Acoustimass3.webp';
import SmartUltraCaisson from '/images/sound/Smart Ultra Caisson 700.webp';
import CaissonBasFlush from '/images/sound/Caisson de bass flush.webp';
import DM2C from '/images/sound/DM2C.webp';
import DM3Flush from '/images/sound/DM3_Flush.webp';
import DM5Flush from '/images/sound/DM5_Flush.webp';
import DM8CFlush from '/images/sound/DM8C_Flush.webp';
import FS2C from '/images/sound/FS2C.webp';
import FS2SE from '/images/sound/FS2SE.webp';
import Speaker251 from '/images/sound/251.webp';
import SatelliteFlush from '/images/sound/Satellite_flush.webp';
import IZA2120 from '/images/sound/IZA2120.webp';
import BoseAmplifier from '/images/sound/Bose Music Amplifier.webp';
import EC360P from '/images/sound/360P_EC.webp';
import ZA250 from '/images/sound/ZA250.webp';

// Product data
const productsData = [
  {
    nameFr: 'Smart Soundbar',
    nameEn: 'Smart Soundbar',
    image: '/images/sound/Smart Sound Bar.webp',
    descriptionFr: 'Soundbar intelligente avec son immersif et connectivité WiFi',
    descriptionEn: 'Smart soundbar with immersive sound and WiFi connectivity',
    priceFr: 'Sur devis',
    priceEn: 'On request',
  },
  {
    nameFr: 'Smart Ultra Soundbar',
    nameEn: 'Smart Ultra Soundbar',
    image: '/images/sound/Smart Ultra Soundbar.webp',
    descriptionFr: 'Soundbar premium avec Dolby Atmos 3D',
    descriptionEn: 'Premium soundbar with 3D Dolby Atmos',
    priceFr: 'Sur devis',
    priceEn: 'On request',
  },
  {
    nameFr: 'Acoustimass Series 3 Haut-parleur',
    nameEn: 'Acoustimass Series 3 Speaker',
    image: '/images/sound/cube.webp',
    descriptionFr: 'Enceintes satellites cubes Acoustimass Series 3 pour système surround',
    descriptionEn: 'Acoustimass Series 3 cube satellite speakers for surround system',
    priceFr: '900 DH TTC',
    priceEn: '900 DH TTC',
  },
  {
    nameFr: 'Acoustimass 3',
    nameEn: 'Acoustimass 3',
    image: '/images/sound/Caisson%20de%20Bass%20Acoustimass3.webp',
    descriptionFr: 'Caisson de basses Acoustimass 3 pour son surround',
    descriptionEn: 'Acoustimass 3 subwoofer for surround sound',
    priceFr: '3900 DH TTC',
    priceEn: '3900 DH TTC',
  },
  {
    nameFr: 'Smart Ultra Caisson 700',
    nameEn: 'Smart Ultra 700 Subwoofer',
    image: '/images/sound/Smart Ultra Caisson 700.webp',
    descriptionFr: 'Caisson de basses premium avec technologie sans fil',
    descriptionEn: 'Premium subwoofer with wireless technology',
    priceFr: '25800 DH TTC',
    priceEn: '25800 DH TTC',
  },
  {
    nameFr: 'Caisson de Bass Flush',
    nameEn: 'Flush Subwoofer',
    image: '/images/sound/Caisson de bass flush.webp',
    descriptionFr: 'Caisson de basses encastrable avec design flush',
    descriptionEn: 'Flush mountable subwoofer with flush design',
    priceFr: '4500 DH TTC',
    priceEn: '4500 DH TTC',
  },
  {
    nameFr: 'DM2C Encastrable',
    nameEn: 'DM2C In-Ceiling Speaker',
    image: '/images/sound/DM2C.webp',
    descriptionFr: 'Enceinte encastrée pour installations professionnelles',
    descriptionEn: 'In-ceiling speaker for professional installations',
    priceFr: '1800 DH TTC',
    priceEn: '1800 DH TTC',
  },
  {
    nameFr: 'DM3 Flush',
    nameEn: 'DM3 Flush Speaker',
    image: '/images/sound/DM3_Flush.webp',
    descriptionFr: 'Enceinte flush avec design discret',
    descriptionEn: 'Flush speaker with discreet design',
    priceFr: '2450 DH TTC',
    priceEn: '2450 DH TTC',
  },
  {
    nameFr: 'DM5 Flush',
    nameEn: 'DM5 Flush Speaker',
    image: '/images/sound/DM5_Flush.webp',
    descriptionFr: 'Enceinte flush premium avec son supérieur',
    descriptionEn: 'Premium flush speaker with superior sound',
    priceFr: '3450 DH TTC',
    priceEn: '3450 DH TTC',
  },
  {
    nameFr: 'DM8C Flush',
    nameEn: 'DM8C Flush Speaker',
    image: '/images/sound/DM8C_Flush.webp',
    descriptionFr: 'Enceinte flush haut de gamme avec acoustique exceptionnelle',
    descriptionEn: 'Premium flush speaker with exceptional acoustics',
    priceFr: '6900 DH TTC',
    priceEn: '6900 DH TTC',
  },
  {
    nameFr: 'FS2C',
    nameEn: 'FS2C Speaker',
    image: '/images/sound/FS2C.webp',
    descriptionFr: 'Enceinte professionnelle FS2C pour installations',
    descriptionEn: 'FS2C professional speaker for installations',
    priceFr: '1450 DH TTC',
    priceEn: '1450 DH TTC',
  },
  {
    nameFr: 'FS2SE',
    nameEn: 'FS2SE Speaker',
    image: '/images/sound/FS2SE.webp',
    descriptionFr: 'Enceinte professionnelle FS2SE pour installations',
    descriptionEn: 'FS2SE professional speaker for installations',
    priceFr: '1950 DH TTC',
    priceEn: '1950 DH TTC',
  },
  {
    nameFr: '251 Enceinte Extérieure',
    nameEn: '251 Outdoor Speaker',
    image: '/images/sound/251.webp',
    descriptionFr: 'Enceinte extérieure Articulated Array® avec zone d\'écoute vaste et homogène',
    descriptionEn: 'Articulated Array® outdoor speaker with wide, homogeneous listening zone',
    priceFr: '3250 DH TTC',
    priceEn: '3250 DH TTC',
  },
  {
    nameFr: 'Satellite Flush',
    nameEn: 'Satellite Flush Speaker',
    image: '/images/sound/Satellite_flush.webp',
    descriptionFr: 'Enceinte satellite flush pour installations discrètes',
    descriptionEn: 'Flush satellite speaker for discreet installations',
    priceFr: '1200 DH TTC',
    priceEn: '1200 DH TTC',
  },
  {
    nameFr: 'IZA2120',
    nameEn: 'IZA2120',
    image: '/images/sound/IZA2120.webp',
    descriptionFr: 'Amplificateur professionnel IZA2120',
    descriptionEn: 'IZA2120 professional amplifier',
    priceFr: '11800 DH TTC',
    priceEn: '11800 DH TTC',
  },
  {
    nameFr: 'Bose Music Amplifier',
    nameEn: 'Bose Music Amplifier',
    image: '/images/sound/Bose Music Amplifier.webp',
    descriptionFr: 'Amplificateur multicanal pour applications professionnelles',
    descriptionEn: 'Multi-zone amplifier for professional applications',
    priceFr: '8500 DH TTC',
    priceEn: '8500 DH TTC',
  },
  {
    nameFr: 'L1 PRO 16',
    nameEn: 'L1 PRO 16',
    image: '/images/sound/L1_Pro16.webp',
    descriptionFr: 'Système de sonorisation portable professionnel 16 canaux',
    descriptionEn: 'Professional portable PA system 16 channels',
    priceFr: '25800 DH TTC',
    priceEn: '25800 DH TTC',
  },
  {
    nameFr: 'L1 PRO 8',
    nameEn: 'L1 PRO 8',
    image: '/images/sound/L1pro8.webp',
    descriptionFr: 'Système de sonorisation portable professionnel 8 canaux',
    descriptionEn: 'Professional portable PA system 8 channels',
    priceFr: '16800 DH TTC',
    priceEn: '16800 DH TTC',
  },
  {
    nameFr: '360P EC',
    nameEn: '360P EC',
    image: '/images/sound/360P_EC.webp',
    descriptionFr: 'Enceinte portable résistante à l\'eau avec son 360°',
    descriptionEn: 'Waterproof portable speaker with 360° sound',
    priceFr: '4900 DH TTC',
    priceEn: '4900 DH TTC',
  },
  {
    nameFr: 'ZA250-LZ Zone Amplifier',
    nameEn: 'ZA250-LZ Zone Amplifier',
    image: '/images/sound/ZA250.webp',
    descriptionFr: 'Amplificateur de zone pour extension de systèmes sonores',
    descriptionEn: 'Zone amplifier for sound system expansion',
    priceFr: 'Sur devis',
    priceEn: 'On request',
  },
];

const SoundSystem = () => {
  const [selectedLang, setSelectedLang] = useState('Fr');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Featured sound products for carousel
  const featuredProducts = [
    { name: 'Smart Soundbar', image: '/images/sound/Smart Sound Bar.webp' },
    { name: 'Smart Ultra Soundbar', image: '/images/sound/Smart Ultra Soundbar.webp' },
    { name: 'Acoustimass 3', image: '/images/sound/Caisson%20de%20Bass%20Acoustimass3.webp' },
    { name: 'L1 PRO 16', image: '/images/sound/L1_Pro16.webp' },
    { name: 'Bose Music Amplifier', image: '/images/sound/Bose Music Amplifier.webp' },
  ];

  // Auto-loop carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const whatsappContact = (productName = '') => {
    const message = productName 
      ? `Bonjour, je suis intéressé par ${productName}. Pouvez-vous me faire un devis?`
      : 'Bonjour, je suis intéressé par vos systèmes audio. Pouvez-vous me contacter?';
    window.open(`https://wa.me/212660245937?text=${encodeURIComponent(message)}`, '_blank');
  };

  const ProductCard = ({ product }) => {
    const name = selectedLang === 'Fr' ? product.nameFr : product.nameEn;
    const description = selectedLang === 'Fr' ? product.descriptionFr : product.descriptionEn;
    const price = selectedLang === 'Fr' ? product.priceFr : product.priceEn;
    
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
          <img
            src={product.image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              e.target.src = '/images/sound/cube.webp';
            }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-2">
            {description}
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => whatsappContact(name)}
              className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {selectedLang === 'Fr' ? 'Devis' : 'Quote'}
            </button>
            <button
              onClick={() => whatsappContact(name)}
              className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              {selectedLang === 'Fr' ? 'Acheter' : 'Buy'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          {selectedLang === 'Fr' ? 'Retour à l\'accueil' : 'Back to Home'}
        </Link>

        {/* Language Selector */}
        <div className="flex justify-end mb-8">
          <div className="flex gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg">
            <button
              onClick={() => setSelectedLang('Fr')}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                selectedLang === 'Fr'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setSelectedLang('En')}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                selectedLang === 'En'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hero Section - Title, Description, Image, CTA */}
        <div className="text-center mb-16">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {selectedLang === 'Fr' ? 'Système Son' : 'Sound System'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{selectedLang === 'Fr' ? 'Domotique' : 'Automation'}</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            {selectedLang === 'Fr'
              ? 'Installation professionnelle de systèmes audio domotiques au Maroc. Contrôle intelligent de votre musique et ambiance sonore.'
              : 'Professional installation of smart audio systems in Morocco. Intelligent control of your music and sound ambiance.'}
          </p>

          {/* Animated Image Carousel */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-sm h-96 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center relative">
              <img
                src={featuredProducts[currentIndex].image}
                alt={featuredProducts[currentIndex].name}
                className="w-full h-full object-contain p-8 transition-all duration-500"
              />
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-6 justify-center">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-yellow-500 w-8'
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Show product ${index + 1}`}
                />
              ))}
            </div>

            {/* Product Name */}
            <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              {featuredProducts[currentIndex].name}
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">

            <button
              onClick={() => whatsappContact()}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {selectedLang === 'Fr' ? 'Devis Gratuit' : 'Free Quote'}
            </button>
            <button
              onClick={() => window.location.href = '#products'}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border border-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {selectedLang === 'Fr' ? 'Nos Produits' : 'Our Products'}
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Volume2 className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedLang === 'Fr' ? 'Audio Haute Qualité' : 'High Quality Audio'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedLang === 'Fr'
                ? 'Systèmes audio professionnels avec son surround et amplification de qualité supérieure.'
                : 'Professional audio systems with surround sound and superior amplification.'}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Music className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedLang === 'Fr' ? 'Contrôle Musical' : 'Music Control'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedLang === 'Fr'
                ? 'Gestion centralisée de votre musique avec streaming et playlists personnalisées.'
                : 'Centralized music management with streaming and personalized playlists.'}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <Wifi className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedLang === 'Fr' ? 'Connexion WiFi' : 'WiFi Connection'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedLang === 'Fr'
                ? 'Contrôle à distance via application mobile et intégration avec votre système domotique.'
                : 'Remote control via mobile app and integration with your home automation system.'}
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            {selectedLang === 'Fr' ? 'Nos Produits Audio' : 'Our Audio Products'}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
            {selectedLang === 'Fr'
              ? 'Découvrez notre large gamme de systèmes audio professionnels'
              : 'Discover our wide range of professional audio systems'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {selectedLang === 'Fr' ? 'Nos Services Audio' : 'Our Audio Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {selectedLang === 'Fr' ? 'Installation Complète' : 'Complete Installation'}
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• {selectedLang === 'Fr' ? 'Étude acoustique de votre espace' : 'Acoustic study of your space'}</li>
                <li>• {selectedLang === 'Fr' ? 'Installation d\'enceintes et amplificateurs' : 'Installation of speakers and amplifiers'}</li>
                <li>• {selectedLang === 'Fr' ? 'Configuration du système domotique' : 'Configuration of home automation system'}</li>
                <li>• {selectedLang === 'Fr' ? 'Formation à l\'utilisation' : 'Training on use'}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {selectedLang === 'Fr' ? 'Maintenance & Support' : 'Maintenance & Support'}
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• {selectedLang === 'Fr' ? 'Garantie complète sur nos installations' : 'Complete warranty on our installations'}</li>
                <li>• {selectedLang === 'Fr' ? 'Support technique 24/7' : '24/7 technical support'}</li>
                <li>• {selectedLang === 'Fr' ? 'Mises à jour logicielles' : 'Software updates'}</li>
                <li>• {selectedLang === 'Fr' ? 'Extensions et améliorations' : 'Extensions and improvements'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 md:p-12 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            {selectedLang === 'Fr' 
              ? 'Prêt à Révolutionner Votre Expérience Audio ?'
              : 'Ready to Revolutionize Your Audio Experience?'}
          </h3>
          <p className="text-lg mb-8 opacity-90">
            {selectedLang === 'Fr'
              ? 'Contactez-nous dès aujourd\'hui pour un devis personnalisé gratuit !'
              : 'Contact us today for a free personalized quote!'}
          </p>
          <button
            onClick={() => whatsappContact()}
            className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {selectedLang === 'Fr' ? 'Obtenir un Devis Gratuit' : 'Get a Free Quote'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoundSystem;