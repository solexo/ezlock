import React from 'react';
import ProductCard from './ProductCard';

const products = [
  // Camera surveillance products
  {
    id: 'camera-surveillance-1',
    name: 'Caméra de surveillance 01',
    image: '/images/camera de surveillance/a.webp',
    url: '/product/camera-surveillance-1',
    features: [
      'Application mobile',
      'Vision nocturne',
      'Détection de mouvement',
      'Enregistrement HD',
      'Notifications push'
    ],
    description: 'Caméra de surveillance pour sécuriser votre maison, commerce ou bureau avec visualisation à distance.'
  },
  {
    id: 'camera-surveillance-2',
    name: 'Caméra de surveillance 02',
    image: '/images/camera de surveillance/a-1.webp',
    url: '/product/camera-surveillance-2',
    features: [
      'Application mobile',
      'Vision nocturne',
      'Détection de mouvement',
      'Enregistrement HD',
      'Stockage cloud'
    ],
    description: 'Solution de vidéosurveillance connectée avec image nette et contrôle facile depuis smartphone.'
  },
  {
    id: 'camera-surveillance-3',
    name: 'Caméra de surveillance 03',
    image: '/images/camera de surveillance/a-2.webp',
    url: '/product/camera-surveillance-3',
    features: [
      'Application mobile',
      'Vision nocturne',
      'Détection de mouvement',
      'Enregistrement HD',
      'Notifications push'
    ],
    description: 'Caméra adaptée à la surveillance quotidienne avec accès rapide aux alertes et au flux vidéo.'
  },
  {
    id: 'camera-surveillance-4',
    name: 'Caméra de surveillance 04',
    image: '/images/camera de surveillance/o.webp',
    url: '/product/camera-surveillance-4',
    features: [
      'Application mobile',
      'Vision nocturne',
      'Détection de mouvement',
      'Enregistrement HD',
      'Stockage cloud'
    ],
    description: 'Caméra moderne pour une installation professionnelle avec supervision locale et à distance.'
  },
  // Controle acces products
  {
    id: 'controle-acces-cp01',
    name: 'Digicode Métallique CP01',
    image: '/images/controle dacces/Digicode-metallique-CP01-1-250x250.jpg',
    url: '/product/controle-acces-cp01',
    features: ['Code numérique', 'Carte NFC', 'Contrôle d\'accès'],
    description: 'Digicode métallique robuste pour le contrôle d\'accès sécurisé de porte, portail ou bureau.'
  },
  {
    id: 'controle-acces-rfid-lecteur-1',
    name: 'Lecteur RFID',
    image: '/images/controle dacces/Lecteur-Rfid-1.jpg',
    url: '/product/controle-acces-rfid-lecteur-1',
    features: ['Carte NFC', 'Contrôle d\'accès', 'Application mobile'],
    description: 'Lecteur RFID pratique pour les systèmes de contrôle d\'accès professionnels et résidentiels.'
  },
  {
    id: 'controle-acces-padlock-1',
    name: 'Cadenas Connecté',
    image: '/images/controle dacces/padlock-1-250x250.webp',
    url: '/product/controle-acces-padlock-1',
    features: ['Application mobile', 'Empreinte digitale', 'Contrôle d\'accès'],
    description: 'Cadenas intelligent pour sécuriser rapidement casiers, portes et espaces techniques.'
  },
  {
    id: 'controle-acces-prise-intelligente',
    name: 'Prise Intelligente Aubess',
    image: '/images/controle dacces/Aubess-Prise-3.webp',
    url: '/product/controle-acces-prise-intelligente',
    features: ['Contrôle mobile', 'Programmation horaire', 'Contrôle d\'accès'],
    description: 'Prise intelligente pour le contrôle d\'accès aux appareils électriques avec application mobile.'
  },
  {
    id: 'controle-acces-clavier-1',
    name: 'Clavier de Contrôle 01',
    image: '/images/controle dacces/11161020751990325179.jpg',
    url: '/product/controle-acces-clavier-1',
    features: ['Code numérique', 'Carte NFC', 'Contrôle d\'accès'],
    description: 'Clavier de contrôle d\'accès avec design compact pour installations intérieures et extérieures.'
  },
  {
    id: 'controle-acces-clavier-2',
    name: 'Clavier de Contrôle 02',
    image: '/images/controle dacces/1892504409-1613275237.jpg',
    url: '/product/controle-acces-clavier-2',
    features: ['Code numérique', 'Carte NFC', 'Contrôle d\'accès'],
    description: 'Solution de contrôle d\'accès fiable pour bureaux, résidences et copropriétés.'
  },
  {
    id: 'controle-acces-clavier-3',
    name: 'Clavier de Contrôle 03',
    image: '/images/controle dacces/23703153969957916.jpg',
    url: '/product/controle-acces-clavier-3',
    features: ['Code numérique', 'Carte NFC', 'Contrôle d\'accès'],
    description: 'Clavier sécurisé pour gérer les accès avec code et badges sur site.'
  },
  {
    id: 'controle-acces-clavier-4',
    name: 'Clavier de Contrôle 04',
    image: '/images/controle dacces/80713322-1538541174.jpg',
    url: '/product/controle-acces-clavier-4',
    features: ['Code numérique', 'Carte NFC', 'Contrôle d\'accès'],
    description: 'Modèle de contrôle d\'accès pensé pour un usage intensif avec installation simple.'
  },
  {
    id: 'controle-acces-badgeuse-1',
    name: 'Badgeuse et Lecteur 01',
    image: '/images/controle dacces/IMG_20210321_184217.jpg',
    url: '/product/controle-acces-badgeuse-1',
    features: ['Carte NFC', 'Contrôle d\'accès', 'Application mobile'],
    description: 'Lecteur de contrôle d\'accès adapté aux immeubles, entreprises et zones sensibles.'
  },
  {
    id: 'controle-acces-badgeuse-2',
    name: 'Badgeuse et Lecteur 02',
    image: '/images/controle dacces/InkedHe673616e79f345cc84ff35ee432b74e66-300x300.jpg',
    url: '/product/controle-acces-badgeuse-2',
    features: ['Carte NFC', 'Contrôle d\'accès', 'Application mobile'],
    description: 'Unité de lecture compacte pour une intégration rapide dans votre système de sécurité.'
  },
  // UHF reader products
  {
    id: 'lecteur-uhf-1',
    name: 'Lecteur UHF 01',
    image: '/images/lecteur uhf/H44d48b9fd1aa4fd4a1c0c7a261fe6156o-300x300.webp',
    url: '/product/lecteur-uhf-1',
    features: ['Application mobile', 'Contrôle d\'accès', 'Carte NFC'],
    description: 'Lecteur UHF longue portée pour identification automatique dans les environnements professionnels.'
  },
  {
    id: 'lecteur-uhf-2',
    name: 'Lecteur UHF 02',
    image: '/images/lecteur uhf/Hed70fdbf6c104b2d85715adf0c15c5faD-300x300.webp',
    url: '/product/lecteur-uhf-2',
    features: ['Application mobile', 'Contrôle d\'accès', 'Carte NFC'],
    description: 'Solution UHF compacte pour la lecture rapide et fiable de badges et étiquettes à distance.'
  },
  {
    id: 'lecteur-uhf-3',
    name: 'Lecteur UHF 03',
    image: '/images/lecteur uhf/InkedHe673616e79f345cc84ff35ee432b74e66-300x300.jpg',
    url: '/product/lecteur-uhf-3',
    features: ['Application mobile', 'Contrôle d\'accès', 'Carte NFC'],
    description: 'Lecteur UHF professionnel adapté aux parkings, entrepôts, sites industriels et contrôle d\'accès.'
  },
  // Smart locks
  {
    id: 'x1ai',
    name: 'X1 Ai 🔐 7 Méthodes d\'Ouverture Intelligentes',
    image: '/images/x1ai.webp',
    url: '/product/x1ai',
    features: [
      'Reconnaissance Faciale (AI) ultra-précise',
      'Empreinte Digitale 360Â°',
      'Code PIN personnalisable',
      'Clé mécanique',
      'Carte NFC',
      'Application mobile (Wi-Fi & Bluetooth)',
      'Ouverture par paume intelligente (AI Palm ID)'
    ],
    description: 'Grâce à son système AI avancé, la X1 reconnaît les visages avec une précision exceptionnelle, s\'adapte à la luminosité et apprend vos habitudes pour un confort d\'utilisation optimal. ✨ Design et Performance Écran tactile HD élégant et intuitif. Corps en alliage d\'aluminium résistant et raffiné. Installation simple et compatible avec la plupart des portes. Batterie longue durée avec alerte intelligente de faible charge.'
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
      'ClÃ© traditionnelle',
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
    id: 'i20',
    name: 'Serrure Intelligente I20',
    image: '/images/i20.webp',
    url: '/product/i20',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Face ID',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure intelligente I20 avec caméra intégrée pour surveillance en temps réel et contrôle mobile'
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
    <section id="produits" className="relative py-20 sm:py-24 bg-white overflow-hidden">
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-hero text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-4 sm:mb-6">
            Nos <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent animate-pulse">Équipements</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète d'équipements domotiques dernière génération.
            Serrures intelligentes, éclairage connecté, systèmes de sécurité avec installation gratuite.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch mb-16 sm:mb-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <div className="card-elevated bg-gradient-red-500 relative overflow-hidden p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-50"></div>

            <div className="relative z-10">
              <h3 className="font-hero text-3xl sm:text-4xl text-black mb-4">
                Besoin d'Aide pour Choisir ?
              </h3>
              <p className="text-black text-lg mb-8 leading-relaxed">
                Contactez nos experts pour un conseil personnalisé gratuit et un devis sur mesure.
              </p>
              <button
                onClick={() => window.open('https://wa.me/212601534301', '_blank')}
                className="inline-flex items-center space-x-2 bg-white text-red-500 hover:bg-slate-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-glow-lg active:scale-95"
              >
                <span>ðŸ’¬</span>
                <span>Conseil Gratuit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
