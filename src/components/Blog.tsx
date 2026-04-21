import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const whatsappContact = () => {
    window.open('https://wa.me/212601534301', '_blank');
  };
  const articles = [
    {
      id: 1,
      title: 'Installation Serrure Intelligente : Guide Complet',
      excerpt: 'Découvrez comment installer une serrure intelligente avec Ez lock. Guide étape par étape pour une sécurité optimale.',
      date: '2025-10-20',
      author: 'Ez lock Team',
      tags: ['serrure intelligente', 'installation'],
      image: '/images/i20.webp'
    },
    {
      id: 2,
      title: 'Domotique Maroc : Tendances 2025',
      excerpt: 'Les dernières tendances en domotique au Maroc pour 2025. Découvrez les innovations en matière de maison connectée.',
      date: '2025-10-15',
      author: 'Ez lock Team',
      tags: ['domotique', 'Maroc', 'tendances'],
      image: '/images/ca1.webp'
    },
    {
      id: 3,
      title: 'Caméras Surveillance : Choisir le Bon Système',
      excerpt: 'Guide pour choisir le système de caméras surveillance idéal pour votre propriété.',
      date: '2025-10-10',
      author: 'Ez lock Team',
      tags: ['caméras surveillance', 'sécurité'],
      image: '/images/cam.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
             Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-300">Domotique</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tutoriels, guides et conseils pour votre domotique au Maroc. Apprenez à installer et optimiser vos systèmes intelligents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gray-200">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                  <User className="w-4 h-4 ml-4 mr-1" />
                  {article.author}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-500 transition-colors">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                   {article.tags.map((tag) => (
                     <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                       <Tag className="w-3 h-3 mr-1" />
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Restez informé des dernières actualités domotique au Maroc. Abonnez-vous à notre newsletter !
          </p>
          <button
            onClick={whatsappContact}
            className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            S'abonner à la Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;