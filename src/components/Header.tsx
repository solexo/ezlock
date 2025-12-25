import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X, Phone, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode, remove any dark class
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappContact = () => {
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Use whatsapp:// URL scheme for mobile apps
      window.location.href = 'whatsapp://send?phone=212660245937';
    } else {
      // Use web WhatsApp for desktop
      window.open('https://wa.me/212660245937', '_blank');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <img
              src="/images/logob.webp"
              alt="DOMO28 Logo"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
              loading="eager"
              fetchPriority="high"
              width="128"
              height="128"
              srcSet="/images/logob.webp 128w"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
            />
          </div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link
              to="/"
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-heading"
            >
              Accueil
            </Link>
            <Link
              to="/serrure-intelligente"
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-heading"
            >
              Serrure Intelligente
            </Link>
            <Link
              to="/domotique-casablanca"
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-heading"
            >
              Domotique Maroc
            </Link>
            <Link
              to="/cameras-surveillance"
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-heading"
            >
              Caméras Surveillance
            </Link>
            <Link
              to="/controle-acces"
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-heading"
            >
              Contrôle d'Accès
            </Link>
            <Link
              to="/blog"
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-heading"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-heading"
            >
              À Propos
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-yellow-400 active:scale-95 transition-colors touch-manipulation"
              title={isDarkMode ? 'Mode clair' : 'Mode sombre'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={whatsappContact}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 active:scale-95 transition-colors flex items-center space-x-2 font-medium touch-manipulation"
            >
              <Phone className="w-4 h-4" />
              <span>Contacter nous !</span>
            </button>
          </nav>

          {/* Menu mobile */}
          <button
            className="lg:hidden text-gray-700 dark:text-gray-300 active:scale-95 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            title={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile déployé */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium"
              >
                Accueil
              </Link>
              <Link
                to="/serrure-intelligente"
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium"
              >
                Serrure Intelligente
              </Link>
              <Link
                to="/domotique-casablanca"
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium"
              >
                Domotique Maroc
              </Link>
              <Link
                to="/cameras-surveillance"
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium"
              >
                Caméras Surveillance
              </Link>
              <Link
                to="/controle-acces"
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium"
              >
                Contrôle d'Accès
              </Link>
              <Link
                to="/blog"
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium"
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium"
              >
                À Propos
              </Link>
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 w-full text-left text-gray-700 dark:text-gray-300 hover:text-yellow-400 active:scale-95 transition-colors font-medium touch-manipulation"
                aria-label={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
                title={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{isDarkMode ? 'Mode clair' : 'Mode sombre'}</span>
              </button>
              <button
                onClick={whatsappContact}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 active:scale-95 transition-colors flex items-center justify-center space-x-2 font-medium touch-manipulation"
              >
                <Phone className="w-4 h-4" />
                <span>Contacter nous !</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;