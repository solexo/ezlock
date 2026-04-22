import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Fingerprint, CreditCard, Key, Lock, Eye, Hash, Bluetooth, Camera, Lightbulb, Wifi, Tv, Wind, Moon, Zap, Cloud, Bell, Clock, ArrowRight } from 'lucide-react';
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
  showVariants?: boolean;
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

const ProductCard: React.FC<ProductCardProps> = ({ product, showVariants = false }) => {
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getProductImages = (productId: string) => {
    switch (productId) {
      case 'ca1-ca2':
        return ['/images/ca1.webp', '/images/ca2.webp'];
      case 'inta-intb':
        return ['/images/inta.webp', '/images/intb.webp'];
      case 'x5':
        return ['/images/x5.webp', '/images/x5g.webp', '/images/x5s.webp'];
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

    window.open(`https://wa.me/212601534301?text=${message}`, '_blank');
  };

  const handleWhatsAppPurchase = async (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // Track purchase event (we'll use a default value since we don't have actual pricing)
    await trackPurchase(100, 'MAD'); // Default value, can be customized

    const message = encodeURIComponent(
      `Bonjour ! Je souhaite acheter la ${product.name}. Pouvez-vous me donner le prix et les modalités d'achat ?`
    );

    window.open(`https://wa.me/212601534301?text=${message}`, '_blank');
  };

  return (
    <div className="group card-elevated flex flex-col h-full cursor-pointer transition-all duration-500 overflow-hidden" onClick={() => window.location.href = product.url}>
      {/* Product Image Container */}
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
        <div className="absolute inset-0 bg-gradient-glow opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img
          src={productImages[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-contain p-4 sm:p-6 md:p-8 group-hover:scale-110 transition-transform duration-500 ease-out relative z-10"
          onClick={handleImageClick}
          loading="lazy"
          fetchPriority={product.id === 'i29' ? "high" : "auto"}
          width="272"
          height="272"
        />
      </div>

      {/* Variants for X5 */}
      {showVariants && product.id === 'x5' && (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 border-t border-slate-800/50">
          <div className="flex justify-center space-x-6">
            <img
              src="/images/x5.webp"
              alt="X5 Black"
              className="w-20 h-20 object-contain cursor-pointer border-2 border-transparent hover:border-red-500 rounded transition-all"
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(0); }}
            />
            <img
              src="/images/x5g.webp"
              alt="X5 Gold"
              className="w-20 h-20 object-contain cursor-pointer border-2 border-transparent hover:border-red-500 rounded transition-all"
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(1); }}
            />
            <img
              src="/images/x5s.webp"
              alt="X5 Silver"
              className="w-20 h-20 object-contain cursor-pointer border-2 border-transparent hover:border-red-500 rounded transition-all"
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(2); }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col bg-gray-50 dark:bg-gray-800">
        <h3 className="text-lg sm:text-xl font-heading text-text-primary dark:text-text-primary-dark mb-2 group-hover:text-red-500 transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-text-secondary dark:text-text-secondary-dark text-sm mb-4 flex-grow line-clamp-2 sm:line-clamp-3">
          {product.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <h4 className="font-semibold text-text-secondary dark:text-text-secondary-dark text-xs uppercase tracking-wider">Caractéristiques</h4>
          <div className="flex flex-wrap gap-2">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-lg text-xs text-gray-600 dark:text-gray-300 hover:border-red-500 transition-colors"
              >
                <div className="text-red-500">
                  {getFeatureIcon(feature)}
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mt-auto pt-4 border-t border-slate-800/50">
          <button
            onClick={handleWhatsAppPurchase}
            onTouchStart={handleWhatsAppPurchase}
             className="w-full relative px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden group/btn transition-all duration-300 hover:shadow-glow-blue active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 group-hover/btn:via-red-500/40 transition-all"></div>
            <span className="relative flex items-center justify-center space-x-2">
              <span>🛒 Acheter</span>
            </span>
          </button>

           <button
             onClick={handleWhatsAppContact}
             onTouchStart={handleWhatsAppContact}
             className="w-full relative px-4 py-3 bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white font-semibold rounded-lg overflow-hidden group/btn transition-all duration-300 hover:shadow-glow-blue active:scale-95"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 group-hover/btn:via-red-500/40 transition-all"></div>
             <span className="relative flex items-center justify-center space-x-2">
               <span>💬 Devis</span>
             </span>
           </button>

          <Link
            to={product.url}
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:border-red-500 hover:text-red-500 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Détails</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>



      {/* Image Gallery Modal */}
      {showImageGallery && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowImageGallery(false)}>
          <div className="card-elevated max-w-4xl max-h-[90vh] overflow-hidden bg-white dark:bg-gray-800" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-slate-800/30 dark:border-gray-700">
              <h3 className="text-xl font-heading text-text-primary dark:text-text-primary-dark">{product.name}</h3>
              <button
                onClick={() => setShowImageGallery(false)}
                className="text-text-secondary dark:text-text-secondary-dark hover:text-red-500 text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <img 
                src={productImages[currentImageIndex]} 
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-contain"
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="flex justify-center space-x-3 p-6 border-t border-slate-800/30">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-red-500 w-8' 
                        : 'bg-slate-700 hover:bg-slate-600'
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