import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos de DOMO28
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
            Découvrez notre présentation complète sur les technologies domotiques modernes
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://docs.google.com/gview?url=https://domo28.ma/images/Blue%20and%20White%20Modern%20Smart%20Home%20Technology%20Presentation.pdf&embedded=true`}
                width="100%"
                height="600px"
                className="border-0 rounded"
                title="Présentation DOMO28 - Technologies Domotiques"
                allowFullScreen
              >
                <div className="flex flex-col items-center justify-center h-64 bg-gray-100 dark:bg-gray-700 rounded">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Impossible de charger la présentation directement.
                  </p>
                  <a
                    href="/images/Blue and White Modern Smart Home Technology Presentation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    Ouvrir la Présentation
                  </a>
                </div>
              </iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;