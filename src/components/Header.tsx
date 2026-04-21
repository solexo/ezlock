import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Force light mode for clean aesthetic
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/serrure-intelligente', label: 'SERRURE INTELLIGENTE' },
    { to: '/domotique-casablanca', label: 'DOMOTIQUE' },
    { to: '/cameras-surveillance', label: 'CAMÉRA DE SURVEILLANCE' },
    { to: '/controle-acces', label: 'CONTRÔLE D\'ACCÈS' },
    { to: '/lecteur-uhf', label: 'LECTEUR UHF' },
    { to: '/contact', label: 'CONTACTEZ NOUS' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 group">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg border border-red-500/50 overflow-hidden transition-all duration-300 group-hover:shadow-glow-blue group-hover:border-red-500">
              <div className="absolute inset-0 bg-gradient-glow"></div>
              <img
                src="/images/logobb.webp"
                alt="Ez lock Logo"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                width="128"
                height="128"
              />
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-500 transition-all duration-300 rounded-lg hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={whatsappContact}
              className="btn-glow hidden sm:inline-flex items-center space-x-2 px-5 py-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-600 hover:text-red-500 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div
                  key={link.to}
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(link.to);
                  }}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:text-red-500 hover:bg-gray-100 rounded-lg transition-all duration-300 font-medium cursor-pointer"
                >
                  {link.label}
                </div>
              ))}
              <div
                onClick={() => {
                  setIsMenuOpen(false);
                  whatsappContact();
                }}
                className="w-full btn-glow flex items-center justify-center space-x-2 py-2 mt-4 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;