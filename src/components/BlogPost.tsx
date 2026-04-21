import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      title: 'Installation Serrure Intelligente : Guide Complet',
      content: `
        <h2>Introduction</h2>
        <p>L'installation d'une serrure intelligente est une étape cruciale pour sécuriser votre domicile. Dans ce guide, nous vous expliquons étape par étape comment procéder.</p>
        <h2>Étape 1 : Préparation</h2>
        <p>Avant de commencer, assurez-vous d'avoir tous les outils nécessaires : tournevis, perceuse, et la serrure intelligente.</p>
        <h2>Étape 2 : Installation</h2>
        <p>Suivez les instructions du fabricant pour installer la serrure. Ez lock offre une installation professionnelle.</p>
        <h2>Conclusion</h2>
        <p>Avec une serrure intelligente, votre sécurité est renforcée. Contactez Ez lock pour une installation experte.</p>
      `,
      date: '2025-10-20',
      author: 'Ez lock Team',
      tags: ['serrure intelligente', 'installation'],
      image: '/images/i20.webp'
    },
    {
      id: 2,
      title: 'Domotique Maroc : Tendances 2025',
      content: `
        <h2>Introduction</h2>
        <p>La domotique au Maroc évolue rapidement. Découvrez les tendances pour 2025.</p>
        <h2>Tendances Principales</h2>
        <p>Intégration IA, sécurité avancée, et économie d'énergie sont au cœur des innovations.</p>
        <h2>Conclusion</h2>
        <p>Adoptez la domotique pour une maison moderne. Ez lock est votre partenaire.</p>
      `,
      date: '2025-10-15',
      author: 'Ez lock Team',
      tags: ['domotique', 'tendances'],
      image: '/images/ca1.webp'
    },
    {
      id: 3,
      title: 'Caméras Surveillance : Choisir le Bon Système',
      content: `
        <h2>Introduction</h2>
        <p>Choisir le bon système de caméras surveillance est essentiel pour votre sécurité.</p>
        <h2>Critères de Choix</h2>
        <p>Considérez la résolution, la vision nocturne, et l'intégration mobile.</p>
        <h2>Conclusion</h2>
        <p>Ez lock propose des systèmes de qualité. Contactez-nous pour un devis.</p>
      `,
      date: '2025-10-10',
      author: 'Ez lock Team',
      tags: ['caméras surveillance', 'sécurité'],
      image: '/images/cam.webp'
    }
  ];

  const article = articles.find(a => a.id === parseInt(id || '0'));

  useEffect(() => {
    if (article) {
      // Add structured data for the blog post
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.title,
        "author": {
          "@type": "Organization",
          "name": article.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Ez lock",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ezlock.ma/images/logo_resized.webp"
          }
        },
        "datePublished": article.date,
        "dateModified": article.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://ezlock.ma/blog/${article.id}`
        },
        "image": `https://ezlock.ma${article.image}`
      };

      // Remove existing blog post schema if any
      const existingSchema = document.querySelector('script[type="application/ld+json"][data-blog-post]');
      if (existingSchema) {
        existingSchema.remove();
      }

      // Add new schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-blog-post', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Cleanup function
      return () => {
        const schemaToRemove = document.querySelector('script[type="application/ld+json"][data-blog-post]');
        if (schemaToRemove) {
          schemaToRemove.remove();
        }
      };
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 transition-colors duration-300 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/blog" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au Blog
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Article non trouvé</h1>
          <p className="text-gray-600">L'article demandé n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - Blog Ez lock | Domotique Maroc</title>
        <meta name="description" content={article.title} />
        <link rel="canonical" href={`https://www.ezlock.ma/blog/${id}`} />
      </Helmet>
      <div className="min-h-screen bg-gray-50 transition-colors duration-300 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/blog" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au Blog
          </Link>

          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-video bg-gray-200">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date}
              <User className="w-4 h-4 ml-4 mr-1" />
              {article.author}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            <div className="prose prose-lg max-w-none mb-6">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
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
        </div>
      </div>
    </>
  );
};

export default BlogPost;