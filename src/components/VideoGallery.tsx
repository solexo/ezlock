import React from 'react';
import { Play, Instagram } from 'lucide-react';

const VideoGallery = () => {
  const videos = [
    {
      id: 'DOmVVEzCN9t',
      url: 'https://www.instagram.com/domo_28/reel/DOmVVEzCN9t/?hl=am-et',
      title: 'Installation Domotique',
      visual: ''
    },
    {
      id: 'DO1_vWDiIfK',
      url: 'https://www.instagram.com/domo_28/reel/DO1_vWDiIfK/?hl=am-et',
      title: 'Installation Domotique',
      visual: ''
    },
    {
      id: 'DO9QCuKCPjh',
      url: 'https://www.instagram.com/domo_28/reel/DO9QCuKCPjh/?hl=am-et',
      title: 'Installation Domotique',
      visual: ''
    },
    {
      id: 'DPRnYGhCODY',
      url: 'https://www.instagram.com/domo_28/reel/DPRnYGhCODY/?hl=am-et',
      title: 'Installation Domotique',
      visual: ''
    },
    {
      id: 'DP9OwL6iHlA',
      url: 'https://www.instagram.com/domo_28/reel/DP9OwL6iHlA/?hl=am-et',
      title: 'Installation Domotique',
      visual: ''
    },
    {
      id: 'DO7CvcziLTk',
      url: 'https://www.instagram.com/domo_28/reel/DO7CvcziLTk/?hl=am-et',
      title: 'Installation Domotique',
      visual: ''
    },
    {
      id: 'DOY_dcMCCka',
      url: 'https://www.instagram.com/reel/DOY_dcMCCka/',
      title: 'Installation Domotique',
      visual: ''
    },
    {
      id: 'DOW0odTCKqa',
      url: 'https://www.instagram.com/reel/DOW0odTCKqa/?hl=fr',
      title: 'Installation Domotique',
      visual: ''
    },
    {
      id: 'DNJpBIio_Bo',
      url: 'https://www.instagram.com/reel/DNJpBIio_Bo/',
      title: 'Installation Domotique',
      visual: ''
    }
  ];

  const openVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-black dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-400">Vidéos</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            🎥 <strong>Découvrez nos réalisations en action !</strong> 
            Regardez nos vidéos Instagram pour voir nos installations domotiques 
            et démonstrations de produits en situation réelle.
          </p>
        </div>

        {/* Grille de vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => openVideo(video.url)}
              className="group cursor-pointer bg-white dark:bg-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
            >
              {/* Vidéo Instagram intégrée */}
              <div className="relative h-96 bg-gradient-to-br from-black to-gray-800 overflow-hidden">
                <iframe
                  src={`https://www.instagram.com/p/${video.id}/embed/`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="w-full h-full"
                  loading="lazy"
                  title={`Vidéo Instagram DOMO28 - ${video.title}`}
                ></iframe>
                
                {/* Overlay avec emoji au hover */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                      {video.visual}
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Cliquez pour regarder sur Instagram
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    Vidéo {index + 1}
                  </span>
                  <div className="flex items-center space-x-2 text-pink-500">
                    <Instagram className="w-4 h-4" />
                    <span className="text-sm font-medium">@domo_28</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-yellow-50 dark:from-black dark:to-gray-700 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              📱 Suivez-nous sur Instagram !
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              💬 <strong>Plus de vidéos et actualités</strong> sur notre compte Instagram @domo_28
            </p>
            <button
              onClick={() => window.open('https://www.instagram.com/domo_28/', '_blank')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Instagram className="w-6 h-6" />
              <span>Suivre @domo_28</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
