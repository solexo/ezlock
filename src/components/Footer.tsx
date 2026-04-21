import React from 'react';
import { Phone, Mail, Clock, Shield, Award, Instagram, Facebook } from 'lucide-react';

const Footer = () => {

  const openInstagram = () => {
    window.open('https://www.instagram.com/ezlock.ma/', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  return (
    <footer className="relative bg-dark-bg border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-lg border border-blue-accent/50 overflow-hidden">
                <img
                  src="/images/logob.webp"
                  alt="Ez lock Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <div className="font-hero text-xl text-text-primary">Ez lock</div>
                <div className="text-sm text-text-secondary">Smart Home Maroc</div>
              </div>
            </div>
            <p className="text-text-secondary mb-6 max-w-md leading-relaxed">
              Spécialiste domotique Maroc. Solutions intelligentes pour maisons connectées sécurisées.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-text-secondary">
                <Shield className="w-4 h-4 text-blue-accent" />
                <span>Installation Pro</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Award className="w-4 h-4 text-blue-accent" />
                <span>Garantie 2 ans</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg text-text-primary mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <Phone className="w-4 h-4 text-blue-accent flex-shrink-0 mt-1" />
                <div className="text-text-secondary group-hover:text-blue-accent transition-colors text-sm">
                  06 01 53 43 01
                </div>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <Phone className="w-4 h-4 text-blue-accent flex-shrink-0 mt-1" />
                <div className="text-text-secondary group-hover:text-blue-accent transition-colors text-sm">
                  06 66 59 18 24
                </div>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <Phone className="w-4 h-4 text-blue-accent flex-shrink-0 mt-1" />
                <div className="text-text-secondary group-hover:text-blue-accent transition-colors text-sm">
                  Fax: 05 22 55 00 99
                </div>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <Mail className="w-4 h-4 text-blue-accent flex-shrink-0 mt-1" />
                <div className="text-text-secondary group-hover:text-blue-accent transition-colors text-sm break-all">
                  info@ezlock.com
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-accent flex-shrink-0 mt-1" />
                <div className="text-text-secondary text-sm">
                  Lun-Sam 8h-18h
                </div>
              </div>
              <div className="flex items-start space-x-3 mt-4">
                <div className="text-text-secondary text-sm">
                  <div className="font-semibold text-text-primary mb-2">Adresse :</div>
                  26 Avenue Mers Sultan<br/>
                  Apt N°3 étage 1<br/>
                  Casablanca - Maroc
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading text-lg text-text-primary mb-6">Categories</h3>
            <ul className="space-y-3">
              {[
                { label: 'CAMÉRA DE SURVEILLANCE' },
                { label: 'CONTRÔLE D\'ACCÈS' },
                { label: 'DOMOTIQUE' },
                { label: 'LECTEUR UHF' },
                { label: 'SERRURE INTELLIGENTE' },
              ].map((item, index) => (
                <li key={index}>
                  <span 
                    className="text-text-secondary hover:text-blue-accent transition-colors text-sm cursor-pointer"
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-lg text-text-primary mb-6">Suivez-nous</h3>
            <div className="space-y-4">
              <button
                onClick={openInstagram}
                className="flex items-center space-x-3 group w-full p-3 rounded-lg border border-slate-800/30 hover:border-blue-accent/50 hover:bg-blue-accent/5 transition-all"
              >
                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-text-primary">Instagram</div>
                  <div className="text-xs text-text-secondary">Ez lock</div>
                </div>
              </button>
              
              <button
                onClick={openFacebook}
                className="flex items-center space-x-3 group w-full p-3 rounded-lg border border-slate-800/30 hover:border-blue-accent/50 hover:bg-blue-accent/5 transition-all"
              >
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-text-primary">Facebook</div>
                  <div className="text-xs text-text-secondary">Ez lock</div>
                </div>
              </button>
            </div>
          </div>
        </div>


        {/* Bottom bar */}
        <div className="border-t border-slate-800/30 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-text-secondary text-sm text-center sm:text-left">
              © 2025 Ez lock. Tous droits réservés.
            </div>
            <div className="text-text-secondary text-xs mt-4 sm:mt-0">
              Solutions Smart Home Maroc
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;