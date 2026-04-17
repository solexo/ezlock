import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 'i40', image: '/images/i40%20(2).webp' },
  { id: 'i30', image: '/images/i30.webp' },
  { id: 'i29', image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.22.webp' },
  { id: 'k10', image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(6).webp' },
  { id: 'x5-cam', image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(5).webp' },
  { id: 'x5-ultra', image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.21%20(4).webp' },
  { id: 'k5', image: '/images/k5.webp' },
  { id: 'i20', image: '/images/i20.webp' },
  { id: 'qm50', image: '/images/qm50.webp' },
  { id: 'qm60', image: '/images/qm60.webp' },
  { id: 'ca1-ca2', image: '/images/ca2.webp' },
  { id: 'inta-intb', image: '/images/intb.webp' },
  { id: 'smart-switch-double', image: '/images/smart%20switch%20rideau.webp' },
  { id: 'smart-switch-simple', image: '/images/smart%20switch.webp' },
  { id: 'cam', image: '/images/cam.webp' }
];

const ScrollingProductMenu = () => {
  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-title text-gray-900 dark:text-white mb-6">
          Découvrez nos produits
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {products.concat(products).map((product, index) => (
              <Link 
                key={`${product.id}-${index}`}
                to={`/product/${product.id}`}
                className="flex-shrink-0 w-64 mx-4 cursor-pointer group"
              >
                <div className="relative rounded-lg overflow-hidden h-48 bg-white">
                  <img
                    src={product.image}
                    alt={`Produit ${product.id}`}
                    className="w-full h-full object-contain shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 p-2"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    width="256"
                    height="192"
                    srcSet={`${product.image} 256w`}
                    sizes="256px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
};

export default ScrollingProductMenu;