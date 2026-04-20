import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 'x1ai',
    name: 'X1 Ai 🔐 7 Méthodes d\'Ouverture Intelligentes',
    image: '/images/x1ai.webp',
    url: '/product/x1ai',
    features: [
      'Reconnaissance Faciale (AI) ultra-précise',
      'Empreinte Digitale 360°',
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
    <section id="produits" className="relative py-20 sm:py-24 bg-gradient-smart overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-accent/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-blue-accent/5 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-hero text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-4 sm:mb-6">
            Nos <span className="bg-gradient-to-r from-blue-accent to-blue-300 bg-clip-text text-transparent animate-pulse">Équipements</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète d'équipements domotiques dernière génération. 
            Serrures intelligentes, éclairage connecté, systèmes de sécurité avec installation gratuite.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-16 sm:mb-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-elevated bg-gradient-blue-accent relative overflow-hidden p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/10 to-transparent opacity-50"></div>

            <div className="relative z-10">
              <h3 className="font-hero text-3xl sm:text-4xl text-white mb-4">
                Besoin d'Aide pour Choisir ?
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Contactez nos experts pour un conseil personnalisé gratuit et un devis sur mesure.
              </p>
              <button
                onClick={() => window.open('https://wa.me/212660245937', '_blank')}
                className="inline-flex items-center space-x-2 bg-white text-blue-accent hover:bg-slate-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-glow-lg active:scale-95"
              >
                <span>💬</span>
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