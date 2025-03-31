export default function BlogPageItalian() {
  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Il Nostro Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resta sintonizzato per aggiornamenti, approfondimenti e notizie su AI e trasformazione aziendale.
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gray-50 p-12 rounded-lg text-center mb-16">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-20 w-20 text-primary-blue mx-auto mb-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
            />
          </svg>
          <h2 className="text-3xl font-bold mb-4">Articoli del Blog in Arrivo!</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Stiamo lavorando alla creazione di articoli illuminanti su AI, trasformazione aziendale e applicazioni specifiche del settore. Torna presto per gli aggiornamenti!
          </p>
        </div>

        {/* Sample Topics Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Argomenti che Tratteremo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Tendenze AI</h3>
              <p className="text-gray-600">
                Esplorare gli ultimi sviluppi nell&apos;intelligenza artificiale e come influenzano le aziende in diversi settori.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Storie di Successo</h3>
              <p className="text-gray-600">
                Casi studio di aziende che hanno implementato con successo soluzioni AI e i risultati che hanno ottenuto.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Guide all&apos;Implementazione</h3>
              <p className="text-gray-600">
                Consigli pratici e guide passo-passo per integrare soluzioni AI nelle operazioni aziendali.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup (placeholder) */}
        <div className="bg-primary-blue text-white p-10 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Rimani Aggiornato</h2>
              <p className="mb-0">
                Iscriviti alla nostra newsletter per ricevere notifiche quando pubblichiamo nuovi articoli e approfondimenti.
              </p>
            </div>
            <div className="text-center md:text-right">
              <button className="btn bg-white text-primary-blue hover:bg-gray-100">
                In Arrivo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 