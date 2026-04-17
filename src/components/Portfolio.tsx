import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Installation Domotique Villa Casablanca',
      description: 'Système domotique complet avec serrures intelligentes, caméras surveillance et éclairage LED automatique.',
      location: 'Casablanca',
      date: '2025-09-15',
      image: '/images/ca1.jpg',
      services: ['Serrure Intelligente', 'Caméras Surveillance', 'Éclairage Intelligent']
    },
    {
      id: 2,
      title: 'Sécurité Bureau Rabat',
      description: 'Contrôle d\'accès biométrique et système de surveillance pour entreprise à Rabat.',
      location: 'Rabat',
      date: '2025-08-20',
      image: '/images/i30.jpg',
      services: ['Contrôle d\'Accès', 'Caméras IP', 'Alarme']
    },
    {
      id: 3,
      title: 'Maison Connectée Marrakech',
      description: 'Domotique complète avec irrigation automatique et rideaux motorisés à Marrakech.',
      location: 'Marrakech',
      date: '2025-07-10',
      image: '/images/ca2.jpg',
      services: ['Domotique Complète', 'Irrigation Automatique', 'Rideaux Automatiques']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title text-gray-900 dark:text-white mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-400">Projets</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez nos réalisations en domotique et sécurité au Maroc. Projets réussis à Casablanca, Rabat, Marrakech et Tanger.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                  <Calendar className="w-4 h-4 ml-4 mr-1" />
                  {project.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((service) => (
                    <span key={service} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium"
                >
                  Voir le projet
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Voir Tous les Projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;