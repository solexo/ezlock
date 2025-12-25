import React, { useState } from 'react';
import { Smartphone, Fingerprint, CreditCard, Key, Lock, Eye, Hash, Bluetooth, Camera, Lightbulb, Wifi, Tv, Wind, Moon, Zap, Cloud, Bell, Clock } from 'lucide-react';
import { trackPurchase, trackProspect } from '../utils/facebookConversions';

interface Product {
  id: string;
  name: string;
  image: string;
  url: string;
  features: string[];
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const getFeatureIcon = (feature: string) => {
  switch (feature) {
    case 'Application mobile':
      return <Smartphone className="w-4 h-4" />;
    case 'Empreinte digitale':
      return <Fingerprint className="w-4 h-4" />;
    case 'Face ID':
      return <Eye className="w-4 h-4" />;
    case 'Carte NFC':
      return <CreditCard className="w-4 h-4" />;
    case 'Clé traditionnelle':
      return <Key className="w-4 h-4" />;
    case 'Mot de passe':
      return <Lock className="w-4 h-4" />;
    case 'Code numérique':
      return <Hash className="w-4 h-4" />;
    case 'Bluetooth':
      return <Bluetooth className="w-4 h-4" />;
    case 'Live cam view':
      return <Camera className="w-4 h-4" />;
    case 'Contrôle d\'accès':
      return <Fingerprint className="w-4 h-4" />;
    case 'Contrôle éclairage':
      return <Lightbulb className="w-4 h-4" />;
    case 'Contrôle rideaux':
      return <Wind className="w-4 h-4" />;
    case 'Contrôle TV':
      return <Tv className="w-4 h-4" />;
    case 'Contrôle climatisation':
      return <Wind className="w-4 h-4" />;
    case 'Connexion WiFi':
      return <Wifi className="w-4 h-4" />;
    case 'Vision nocturne':
      return <Moon className="w-4 h-4" />;
    case 'Détection de mouvement':
      return <Zap className="w-4 h-4" />;
    case 'Enregistrement HD':
      return <Camera className="w-4 h-4" />;
    case 'Stockage cloud':
      return <Cloud className="w-4 h-4" />;
    case 'Notifications push':
      return <Bell className="w-4 h-4" />;
    case 'Contrôle prises':
      return <Zap className="w-4 h-4" />;
    case '2 canaux indépendants':
      return <Zap className="w-4 h-4" />;
    case 'Design compact':
      return <Lightbulb className="w-4 h-4" />;
    case 'Programmation horaire':
      return <Clock className="w-4 h-4" />;
    default:
      return <Lock className="w-4 h-4" />;
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getProductImages = (productId: string) => {
    switch (productId) {
      case 'ca1-ca2':
        return ['/images/ca1.webp', '/images/ca2.webp'];
      case 'inta-intb':
        return ['/images/inta.webp', '/images/intb.webp'];
      default:
        return [product.image];
    }
  };

  const productImages = getProductImages(product.id);

  const handleImageClick = () => {
    if (productImages.length > 1) {
      setShowImageGallery(true);
    }
  };

  const handleWhatsAppContact = async (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // Track prospect event
    await trackProspect();

    const message = encodeURIComponent(
      `Bonjour ! Je suis intéressé(e) par la ${product.name}. Pourriez-vous me donner plus d'informations et un devis ?`
    );

    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Use whatsapp:// URL scheme for mobile apps
      window.location.href = `whatsapp://send?phone=212660245937&text=${message}`;
    } else {
      // Use web WhatsApp for desktop
      window.open(`https://wa.me/212660245937?text=${message}`, '_blank');
    }
  };

  const handleWhatsAppPurchase = async (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // Track purchase event (we'll use a default value since we don't have actual pricing)
    await trackPurchase(100, 'MAD'); // Default value, can be customized

    const message = encodeURIComponent(
      `Bonjour ! Je souhaite acheter la ${product.name}. Pouvez-vous me donner le prix et les modalités d'achat ?`
    );

    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Use whatsapp:// URL scheme for mobile apps
      window.location.href = `whatsapp://send?phone=212660245937&text=${message}`;
    } else {
      // Use web WhatsApp for desktop
      window.open(`https://wa.me/212660245937?text=${message}`, '_blank');
    }
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col cursor-pointer" onClick={() => window.location.href = product.url}>
      {/* Image du produit */}
      <div className="relative h-80 overflow-hidden flex-shrink-0 bg-transparent">
        <img
          src={productImages[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-125 transition-transform duration-500 ease-out bg-transparent cursor-pointer"
          onClick={handleImageClick}
          loading="lazy"
          fetchPriority={product.id === 'i29' ? "high" : "auto"}
          width="272"
          height="272"
          srcSet={`${productImages[currentImageIndex]} 272w`}
          sizes="272px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenu */}
      <div className="p-6 dark:bg-gray-800 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-400 transition-colors duration-500">
          {product.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
          {product.description}
        </p>

        {/* Caractéristiques */}
        <div className="space-y-2 mb-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Caractéristiques :</h4>
          <div className="flex flex-wrap gap-3">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-1 bg-gray-50 dark:bg-gray-700 px-3 py-1.5 rounded-full text-xs text-gray-600 dark:text-gray-300">
                <div className="text-yellow-400">
                  {getFeatureIcon(feature)}
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="space-y-3 mt-auto">
          <button
            onClick={handleWhatsAppPurchase}
            onTouchStart={handleWhatsAppPurchase}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 touch-manipulation"
          >
            <span>🛒</span>
            <span>Acheter maintenant</span>
          </button>

          <button
            onClick={handleWhatsAppContact}
            onTouchStart={handleWhatsAppContact}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 touch-manipulation"
          >
            <span>💬</span>
            <span>Demander un devis</span>
          </button>
        </div>
      </div>

      {/* Galerie d'images modale */}
      {showImageGallery && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowImageGallery(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
              <button 
                onClick={() => setShowImageGallery(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-4">
              <img 
                src={productImages[currentImageIndex]} 
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="flex justify-center space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;