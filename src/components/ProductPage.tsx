import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductCard from './ProductCard';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  // Import products from ProductGallery
  const products = [
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

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Produit non trouvé
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Le produit demandé n'existe pas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - DOMO28 | Équipements Domotiques Maroc</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://www.domo28.ma/product/${productId}`} />
      </Helmet>
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              Découvrez tous les détails de ce produit
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProductCard product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;