import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Camera, Eye, Monitor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CamerasSurveillance = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { selectedLang } = useLanguage();

  // Featured cameras
  const cameras = [
    { name: 'Hikvision DS-2CD2T63G0-I5', image: '/images/cam.webp' },
    { name: 'Hikvision DS-2CD2646FWD-IZS', image: '/images/cam.webp' },
    { name: 'Ezviz C6N', image: '/images/cam.webp' },
    { name: 'Ezviz C3W Pro', image: '/images/cam.webp' },
    { name: 'Hikvision DS-2CD2143G0-I', image: '/images/cam.webp' },
  ];

  // Auto-loop carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cameras.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>{selectedLang === 'Fr' ? 'Caméras Surveillance Maroc - Installation & Sécurité | Ez lock' : 'Surveillance Cameras Morocco - Installation & Security | Ez lock'}</title>
        <meta name="description" content={selectedLang === 'Fr' ? "Installation professionnelle de systèmes de caméras surveillance au Maroc. Solutions analogiques et IP avec marques leaders comme Hikvision et Ezviz." : "Professional installation of surveillance camera systems in Morocco. Analog and IP solutions with leading brands like Hikvision and Ezviz."} />
        <link rel="canonical" href="https://www.ezlock.ma/cameras-surveillance" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-blue-accent hover:text-blue-400 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>

        {/* Hero Section - Title, Image, Description, CTA */}
        <div className="text-center mb-16">
          {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {selectedLang === 'Fr' ? 'Caméras Surveillance' : 'Surveillance Cameras'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-accent via-blue-400 to-blue-300">{selectedLang === 'Fr' ? 'Maroc' : 'Morocco'}</span>
            </h1>

          {/* Animated Image Carousel */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-sm h-96 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center relative">
              <img
                src={cameras[currentIndex].image}
                alt={cameras[currentIndex].name}
                className="w-full h-full object-contain p-8 transition-all duration-500"
              />
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-6 justify-center">
              {cameras.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-accent w-8'
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Show camera ${index + 1}`}
                />
              ))}
            </div>

            {/* Product Name */}
            <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              {cameras[currentIndex].name}
            </h3>
          </div>

           {/* Description */}
           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
             {selectedLang === 'Fr' ? 'Installation professionnelle de systèmes de caméras surveillance au Maroc. Solutions analogiques et IP avec marques leaders comme Hikvision et Ezviz.' : 'Professional installation of surveillance camera systems in Morocco. Analog and IP solutions with leading brands like Hikvision and Ezviz.'}
           </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
             <button
               onClick={whatsappContact}
                className="bg-gradient-to-r from-blue-accent via-blue-400 to-blue-300 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
             >
               {selectedLang === 'Fr' ? 'Devis Gratuit' : 'Free Quote'}
             </button>
             <button
               onClick={() => window.location.href = '#produits'}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border border-blue-accent hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
             >
               {selectedLang === 'Fr' ? 'Voir Nos Produits' : 'View Our Products'}
             </button>
          </div>
        </div>

        <div id="produits" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
              <Camera className="w-12 h-12 text-blue-accent mx-auto mb-4" />
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{selectedLang === 'Fr' ? 'Caméras IP & Analogique' : 'IP & Analog Cameras'}</h3>
             <p className="text-gray-600 dark:text-gray-300">
               {selectedLang === 'Fr' ? 'Large gamme de caméras de surveillance pour tous vos besoins de sécurité.' : 'Wide range of surveillance cameras for all your security needs.'}
             </p>
           </div>
           <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
              <Eye className="w-12 h-12 text-blue-accent mx-auto mb-4" />
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{selectedLang === 'Fr' ? 'Vision Nocturne' : 'Night Vision'}</h3>
             <p className="text-gray-600 dark:text-gray-300">
               {selectedLang === 'Fr' ? 'Surveillance 24/7 avec vision nocturne infrarouge avancée.' : '24/7 surveillance with advanced infrared night vision.'}
             </p>
           </div>
           <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
              <Monitor className="w-12 h-12 text-blue-accent mx-auto mb-4" />
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{selectedLang === 'Fr' ? 'Contrôle à Distance' : 'Remote Control'}</h3>
             <p className="text-gray-600 dark:text-gray-300">
               {selectedLang === 'Fr' ? 'Accédez à vos caméras depuis votre smartphone ou ordinateur.' : 'Access your cameras from your smartphone or computer.'}
             </p>
           </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {selectedLang === 'Fr' ? 'Installation Caméras Surveillance Maroc' : 'Surveillance Camera Installation Morocco'}
          </h2>
           <div className="prose prose-lg dark:prose-invert max-w-none">
             <p className="text-gray-600 dark:text-gray-300 mb-6">
               {selectedLang === 'Fr' ? "Ez lock propose des solutions complètes de caméras surveillance pour sécuriser votre domicile, entreprise ou propriété au Maroc. Nos systèmes incluent installation, configuration et formation." : "Ez lock offers comprehensive surveillance camera solutions to secure your home, business or property in Morocco. Our systems include installation, configuration and training."}
             </p>
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedLang === 'Fr' ? 'Nos Services de Caméras Surveillance' : 'Our Surveillance Camera Services'}</h3>
             <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
               <li>{selectedLang === 'Fr' ? 'Systèmes de Caméras IP' : 'IP Camera Systems'}</li>
               <li>{selectedLang === 'Fr' ? 'Solutions de Caméras Analogiques' : 'Analog Camera Solutions'}</li>
               <li>{selectedLang === 'Fr' ? 'Caméras Vision Nocturne' : 'Night Vision Cameras'}</li>
               <li>{selectedLang === 'Fr' ? 'Surveillance à Distance' : 'Remote Monitoring'}</li>
               <li>{selectedLang === 'Fr' ? 'Systèmes Hikvision' : 'Hikvision Systems'}</li>
               <li>{selectedLang === 'Fr' ? 'Caméras Ezviz' : 'Ezviz Cameras'}</li>
               <li>{selectedLang === 'Fr' ? 'Installation de Caméras IP' : 'IP Camera Installation'}</li>
               <li>{selectedLang === 'Fr' ? 'Maintenance de Surveillance' : 'Surveillance Maintenance'}</li>
             </ul>
             <p className="text-gray-600 dark:text-gray-300">
               {selectedLang === 'Fr' ? "Bénéficiez d'une installation professionnelle avec garantie et support technique. Contactez-nous pour un devis personnalisé." : "Benefit from professional installation with warranty and technical support. Contact us for a personalized quote."}
             </p>
           </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CamerasSurveillance;