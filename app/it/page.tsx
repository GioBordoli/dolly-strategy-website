import Image from 'next/image';
import Link from 'next/link';

export default function HomePageItalian() {
  return (
    <div className="container-custom mx-auto py-16">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Soluzioni AI per le Aziende Italiane
        </h1>
        <p className="text-xl mb-8">
          Aiutiamo le aziende a sfruttare l'intelligenza artificiale per migliorare l'efficienza e guidare la crescita
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/it/contact"
            className="bg-primary-blue text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full md:w-auto text-center"
          >
            Inizia Ora
          </a>
          <a
            href="/it/services"
            className="bg-gray-200 text-gray-800 py-3 px-6 rounded hover:bg-gray-300 transition w-full md:w-auto text-center"
          >
            I Nostri Servizi
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Come Dolly Strategy Può Aiutare la Tua Azienda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Analisi Automatizzata dei Processi</h3>
            <p>
              Identifichiamo le inefficienze nei processi aziendali e raccomandiamo soluzioni basate sull'AI per ottimizzarli.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Approfondimenti sui Clienti</h3>
            <p>
              Sblocca preziose informazioni dai dati dei tuoi clienti utilizzando algoritmi di machine learning che prevedono comportamenti e preferenze.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Soluzioni AI Personalizzate</h3>
            <p>
              Dai chatbot all'analisi predittiva, sviluppiamo soluzioni AI personalizzate adattate alle specifiche esigenze della tua industria e del tuo business.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Fidato dalle Principali Aziende Italiane
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
              Logo 1
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
              Logo 2
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
              Logo 3
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
              Logo 4
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 