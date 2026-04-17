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
    // Force dark mode for premium aesthetic
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const whatsappContact = () => {
    window.open('https://wa.me/212660245937', '_blank');
  };

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/serrure-intelligente', label: 'Serrures Intelligentes' },
    { to: '/domotique-casablanca', label: 'Domotique' },
    { to: '/cameras-surveillance', label: 'Caméras' },
    { to: '/controle-acces', label: 'Contrôle d\'Accès' },
    { to: '/systeme-son', label: 'Son' },
    { to: '/blog', label: 'Blog' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-bg/80 backdrop-blur-xl shadow-depth-md border-b border-slate-800/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-blue-accent/50 overflow-hidden transition-all duration-300 group-hover:shadow-glow-blue group-hover:border-blue-accent">
              <div className="absolute inset-0 bg-gradient-glow"></div>
              <img
                src="/images/logob.webp"
                alt="DOMO28 Logo"
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
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-blue-accent transition-all duration-300 rounded-lg hover:bg-dark-secondary/40"
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
              className="lg:hidden text-text-secondary hover:text-blue-accent transition-colors p-2 hover:bg-dark-secondary/40 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-dark-secondary/95 backdrop-blur-xl border-b border-slate-800/30 shadow-depth-lg">
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div
                  key={link.to}
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(link.to);
                  }}
                  className="block w-full text-left px-4 py-3 text-text-secondary hover:text-blue-accent hover:bg-dark-tertiary/40 rounded-lg transition-all duration-300 font-medium cursor-pointer"
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