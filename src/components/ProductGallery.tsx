import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 'x13ai',
    name: 'X13 Ai 🔐 7 Méthodes d\'Ouverture Intelligentes',
    image: '/images/x13ai.webp',
    url: '/product/x13ai',
    features: [
      'Reconnaissance Faciale (AI) ultra-précise',
      'Empreinte Digitale 360°',
      'Code PIN personnalisable',
      'Clé mécanique',
      'Carte NFC',
      'Application mobile (Wi-Fi & Bluetooth)',
      'Ouverture par paume intelligente (AI Palm ID)'
    ],
    description: 'Grâce à son système AI avancé, la X13 reconnaît les visages avec une précision exceptionnelle, s\'adapte à la luminosité et apprend vos habitudes pour un confort d\'utilisation optimal. ✨ Design et Performance Écran tactile HD élégant et intuitif. Corps en alliage d\'aluminium résistant et raffiné. Installation simple et compatible avec la plupart des portes. Batterie longue durée avec alerte intelligente de faible charge.'
  },
  {
    id: 'i40',
    name: 'Serrure Intelligente I40',
    image: '/images/i40%20(2).webp',
    url: '/product/i40',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Face ID',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure premium avec écran tactile et reconnaissance faciale avancée'
  },
  {
    id: 'i30',
    name: 'Serrure Intelligente I30',
    image: '/images/i30.webp',
    url: '/product/i30',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Face ID',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure intelligente I30 avec toutes les fonctionnalités avancées comme l\'I40'
  },
  {
    id: 'i29',
    name: 'Serrure Intelligente I29',
    image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.22.webp',
    url: '/product/i29',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Face ID',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Design élégant avec interface utilisateur intuitive et sécurité renforcée'
  },
  {
    id: 'k10',
    name: 'Serrure Intelligente K10',
    image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(6).webp',
    url: '/product/k10',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Face ID',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Modèle robuste avec écran haute définition et mécanisme de sécurité avancé'
  },
  {
    id: 'x5-cam',
    name: 'Serrure Intelligente X5 CAM',
    image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(5).webp',
    url: '/product/x5-cam',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure poignée avec design minimaliste et technologie NFC intégrée'
  },
  {
    id: 'x5-ultra',
    name: 'Serrure Intelligente X5 ULTRA',
    image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(4).webp',
    url: '/product/x5-ultra',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Version ultra-compacte avec clavier numérique et reconnaissance biométrique'
  },
  {
    id: 'k5',
    name: 'Serrure Intelligente K5',
    image: '/images/k5.webp',
    url: '/product/k5',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure intelligente K5 avec toutes les options de sécurité : NFC, code numérique et contrôle mobile'
  },
  {
    id: 'i20',
    name: 'Serrure Intelligente I20',
    image: '/images/i20.webp',
    url: '/product/i20',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Carte NFC',
      'Live cam view',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure intelligente I20 avec caméra intégrée pour surveillance en temps réel et contrôle mobile'
  },
  {
    id: 'qm50',
    name: 'Serrure Intelligente QM50',
    image: '/images/qm50.webp',
    url: '/product/qm50',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure intelligente QM50 avec design moderne et sécurité renforcée'
  },
  {
    id: 'qm60',
    name: 'Serrure Intelligente QM60',
    image: '/images/qm60.webp',
    url: '/product/qm60',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure intelligente QM60 avec technologie avancée et interface intuitive'
  },
  {
    id: 'ca1-ca2',
    name: 'Contrôle d\'Accès CA1/CA2',
    image: '/images/ca2.webp',
    url: '/product/ca1-ca2',
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
    url: '/product/inta-intb',
    features: [
      'Application mobile',
      'Connexion WiFi',
      'Contrôle éclairage',
      'Contrôle rideaux',
      'Contrôle TV',
      'Contrôle climatisation'
    ],
    description: 'Interrupteurs tactiles INTA et INTB pour contrôler l\'éclairage, rideaux, TV et climatisation via WiFi et application'
  },
  {
    id: 'smart-switch-double',
    name: 'Smart Switch Intelligent Double',
    image: '/images/smart%20switch%20rideau.webp',
    url: '/product/smart-switch-double',
    features: [
      'Application mobile',
      'Connexion WiFi',
      'Contrôle éclairage',
      'Contrôle rideaux',
      'Contrôle climatisation',
      'Contrôle prises',
      '2 canaux indépendants',
      'Programmation horaire'
    ],
    description: 'Smart switch double pour contrôler deux appareils indépendamment : éclairage, rideaux, climatisation, prises via WiFi et application'
  },
  {
    id: 'smart-switch-simple',
    name: 'Smart Switch Intelligent Simple',
    image: '/images/smart%20switch.webp',
    url: '/product/smart-switch-simple',
    features: [
      'Application mobile',
      'Connexion WiFi',
      'Contrôle éclairage',
      'Contrôle rideaux',
      'Contrôle climatisation',
      'Contrôle prises',
      'Design compact',
      'Programmation horaire'
    ],
    description: 'Smart switch simple pour contrôler éclairage, rideaux, climatisation, prises via WiFi et application mobile'
  },
  {
    id: 'cam',
    name: 'Caméra de Surveillance',
    image: '/images/cam.webp',
    url: '/product/cam',
    features: [
      'Application mobile',
      'Vision nocturne',
      'Détection de mouvement',
      'Enregistrement HD',
      'Stockage cloud',
      'Notifications push'
    ],
    description: 'Caméra de surveillance intelligente avec vision nocturne, détection de mouvement et notifications en temps réel'
  }
];

const ProductGallery = () => {
  return (
    <section id="produits" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-pulse">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-yellow-600 dark:from-white dark:to-yellow-400 animate-bounce">Équipements Domotiques</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            🔥 <strong>Découvrez notre gamme complète</strong> d'équipements domotiques de dernière génération ! 
            🔐 Serrures intelligentes, 💡 éclairage connecté, 🛡️ systèmes de sécurité et 📱 contrôle centralisé. 
            ⚡ Installation professionnelle GRATUITE pour transformer votre maison !
          </p>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-yellow-50 dark:from-black dark:to-gray-700 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🤔 Besoin d'aide pour choisir ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              💬 Contactez nos experts pour un <strong>conseil personnalisé GRATUIT</strong> et un devis sur mesure !
            </p>
            <button
              onClick={() => window.open('https://wa.me/212660245937', '_blank')}
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>💬</span>
              <span>Conseil gratuit sur WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;