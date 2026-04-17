import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 'x13ai', image: '/images/x13ai.webp' },
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
  { id: 'cam', image: '/images/cam.webp' },
  { id: 'cam-2', image: '/images/cam.webp' },
  { id: 'sound-system', image: '/images/sound/Smart Sound Bar.webp' },
  { id: 'sound-system-2', image: '/images/sound/L1_Pro16.webp' },
  { id: 'sound-system-3', image: '/images/sound/Bose Music Amplifier.webp' },
  { id: 'controle-acces-2', image: '/images/ca1.webp' }
];

const ScrollingProductMenu = () => {
  // Create columns for vertical scrolling
  const column1 = products.slice(0, Math.ceil(products.length / 3));
  const column2 = products.slice(Math.ceil(products.length / 3), Math.ceil(2 * products.length / 3));
  const column3 = products.slice(Math.ceil(2 * products.length / 3));

  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-title text-gray-900 dark:text-white mb-6">
          Découvrez nos produits
        </h2>
        <div className="flex justify-center items-start space-x-1 sm:space-x-2 lg:space-x-4">
          {/* Column 1 - Scroll Up */}
          <div className="relative h-80 sm:h-96 w-32 sm:w-44 lg:w-52 overflow-hidden">
            <div className="animate-scroll-up">
              {column1.concat(column1).map((product, index) => (
                <Link
                  key={`col1-${product.id}-${index}`}
                  to={`/product/${product.id}`}
                  className="cursor-pointer group block mb-3 sm:mb-4"
                >
                  <div className="relative rounded-lg overflow-hidden h-40 sm:h-48 w-32 sm:w-44 lg:w-52 bg-white shadow-md group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={product.image}
                      alt={`Produit ${product.id}`}
                      className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300 p-2"
                      loading="lazy"
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

          {/* Column 2 - Scroll Down */}
          <div className="relative h-80 sm:h-96 w-40 sm:w-56 lg:w-64 overflow-hidden">
            <div className="animate-scroll-down">
              {column2.concat(column2).map((product, index) => (
                <Link
                  key={`col2-${product.id}-${index}`}
                  to={`/product/${product.id}`}
                  className="cursor-pointer group block mb-3 sm:mb-4"
                >
                  <div className="relative rounded-lg overflow-hidden h-40 sm:h-48 w-40 sm:w-56 lg:w-64 bg-white shadow-md group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={product.image}
                      alt={`Produit ${product.id}`}
                      className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300 p-2"
                      loading="lazy"
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

          {/* Column 3 - Scroll Up */}
          <div className="relative h-80 sm:h-96 w-32 sm:w-44 lg:w-52 overflow-hidden">
            <div className="animate-scroll-up">
              {column3.concat(column3).map((product, index) => (
                <Link
                  key={`col3-${product.id}-${index}`}
                  to={`/product/${product.id}`}
                  className="cursor-pointer group block mb-3 sm:mb-4"
                >
                  <div className="relative rounded-lg overflow-hidden h-40 sm:h-48 w-32 sm:w-44 lg:w-52 bg-white shadow-md group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={product.image}
                      alt={`Produit ${product.id}`}
                      className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300 p-2"
                      loading="lazy"
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
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes scroll-down {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }



          .animate-scroll-up {
            animation: scroll-up 30s linear infinite;
          }
          .animate-scroll-down {
            animation: scroll-down 30s linear infinite;
          }
        `
      }} />
    </section>
  );
};

export default ScrollingProductMenu;