import Image from 'next/image';
import Link from 'next/link';

export default function HomePageItalian() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay - reduced opacity for more transparency */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/50 to-primary-blue/30"></div>
      </div>
      
      <div className="container-custom mx-auto py-16 z-10 relative">
        <section className="mb-16 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Soluzioni AI per le Aziende Italiane
          </h1>
          <p className="text-xl mb-10 text-white">
            Aiutiamo le aziende a sfruttare l'intelligenza artificiale per migliorare l'efficienza e guidare la crescita
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/it/contact"
              className="bg-white text-primary-blue py-3 px-8 rounded-full hover:bg-gray-100 transition w-full md:w-auto text-center font-semibold"
            >
              Inizia Ora
            </a>
            <a
              href="/it/services"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white/10 transition w-full md:w-auto text-center font-semibold"
            >
              I Nostri Servizi
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Come Dolly Strategy Può Aiutare la Tua Azienda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="bg-primary-blue/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Image 
                  src="/images/icons/automation-icon.svg" 
                  alt="Icona Automazione" 
                  width={40} 
                  height={40}
                  className="text-primary-blue"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Analisi Automatizzata dei Processi</h3>
              <p className="text-gray-600">
                Identifichiamo le inefficienze nei processi aziendali e raccomandiamo soluzioni basate sull'AI per ottimizzarli.
              </p>
              <a href="/it/services" className="inline-block mt-6 text-primary-blue font-semibold hover:underline">
                Scopri di più →
              </a>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="bg-primary-blue/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Image 
                  src="/images/icons/insights-icon.svg" 
                  alt="Icona Approfondimenti" 
                  width={40} 
                  height={40}
                  className="text-primary-blue"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Approfondimenti sui Clienti</h3>
              <p className="text-gray-600">
                Sblocca preziose informazioni dai dati dei tuoi clienti utilizzando algoritmi di machine learning che prevedono comportamenti e preferenze.
              </p>
              <a href="/it/services" className="inline-block mt-6 text-primary-blue font-semibold hover:underline">
                Scopri di più →
              </a>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="bg-primary-blue/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Image 
                  src="/images/icons/solutions-icon.svg" 
                  alt="Icona Soluzioni" 
                  width={40} 
                  height={40}
                  className="text-primary-blue"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Soluzioni AI Personalizzate</h3>
              <p className="text-gray-600">
                Dai chatbot all'analisi predittiva, sviluppiamo soluzioni AI personalizzate adattate alle specifiche esigenze della tua industria e del tuo business.
              </p>
              <a href="/it/services" className="inline-block mt-6 text-primary-blue font-semibold hover:underline">
                Scopri di più →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 