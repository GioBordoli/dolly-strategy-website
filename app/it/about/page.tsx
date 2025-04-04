import Image from 'next/image';

export default function AboutPageItalian() {
  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Chi è Dolly Strategy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri la nostra azienda e la nostra missione di portare l&apos;AI alle imprese italiane.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">La Nostra Missione</h2>
            <p className="text-lg text-gray-700 mb-6">
              In Dolly Strategy, ci impegniamo a democratizzare la tecnologia AI per aziende di tutte le dimensioni in Italia. La nostra missione è colmare il divario tra le innovazioni AI all&apos;avanguardia e le applicazioni aziendali pratiche.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Crediamo che l&apos;intelligenza artificiale debba essere accessibile, comprensibile e preziosa per ogni azienda, indipendentemente dalle dimensioni o dal settore. Il nostro obiettivo è aiutare le aziende italiane a sfruttare l&apos;AI per aumentare l&apos;efficienza, ridurre i costi e ottenere un vantaggio competitivo nel mercato globale.
            </p>
            <p className="text-lg text-gray-700">
              Attraverso i nostri servizi, miriamo a trasformare il panorama aziendale italiano introducendo soluzioni AI che siano sia innovative che pratiche, concentrandoci su applicazioni reali che forniscono risultati misurabili.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/mission.jpg" 
              alt="Missione di Dolly Strategy" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-blue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovazione</h3>
              <p className="text-gray-600">
                Esploriamo e adottiamo continuamente tecnologie AI all&apos;avanguardia per fornire le soluzioni più avanzate ai nostri clienti.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-blue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborazione</h3>
              <p className="text-gray-600">
                Crediamo nel lavorare a stretto contatto con i nostri clienti per comprendere le loro esigenze uniche e sviluppare soluzioni su misura che affrontino le loro sfide specifiche.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-blue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fiducia</h3>
              <p className="text-gray-600">
                Siamo impegnati nella trasparenza, nelle pratiche etiche di AI e nella costruzione di relazioni a lungo termine basate sulla fiducia e sul rispetto reciproco.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Il Nostro Team</h2>
          <p className="text-lg text-center text-gray-700 mb-10">
            Dolly Strategy è alimentata da un team diversificato di esperti in intelligenza artificiale, data science, strategia aziendale e domini specifici del settore.
          </p>

          {/* Individual Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Giorgio Bordoli - CEO & Fondatore */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/team/giorgio.jpg" 
                  alt="Giorgio Bordoli" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Giorgio Bordoli</h3>
                <p className="text-primary-blue font-semibold mb-3">CEO & Fondatore</p>
                <p className="text-gray-600">
                  Imprenditore visionario con esperienza nell&apos;implementazione dell&apos;AI e nella trasformazione aziendale. Giorgio guida la nostra direzione strategica e le partnership con i clienti.
                </p>
              </div>
            </div>

            {/* Daniel Maurot - CFO */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/team/daniel.jpg" 
                  alt="Daniel Maurot" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Daniel Maurot</h3>
                <p className="text-primary-blue font-semibold mb-3">Direttore Finanziario</p>
                <p className="text-gray-600">
                  Stratega finanziario con profonda esperienza negli investimenti tecnologici. Daniel garantisce che la nostra crescita sia sostenibile massimizzando il valore per i nostri clienti.
                </p>
              </div>
            </div>

            {/* Marissa - Lead Operations Officer */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/team/marissa.jpg" 
                  alt="Marissa" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Marissa</h3>
                <p className="text-primary-blue font-semibold mb-3">Responsabile Operativo</p>
                <p className="text-gray-600">
                  Esperta di operazioni che orchestra la nostra consegna di progetti con precisione ed eccellenza. Marissa garantisce un&apos;esecuzione impeccabile di tutte le soluzioni per i clienti.
                </p>
              </div>
            </div>

            {/* Laura - Executive Secretary */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/team/laura.jpg" 
                  alt="Laura" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Laura</h3>
                <p className="text-primary-blue font-semibold mb-3">Segretaria Esecutiva</p>
                <p className="text-gray-600">
                  Specialista della comunicazione che coordina le nostre attività esecutive e le relazioni con i clienti. Laura garantisce che le nostre operazioni si svolgano in modo fluido ed efficiente.
                </p>
              </div>
            </div>

            {/* Kush Burdak - ML Specialist */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-2 lg:col-span-4">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative h-64 lg:h-auto">
                  <Image 
                    src="/images/team/kush.jpg" 
                    alt="Kush Burdak" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 lg:col-span-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-1">Kush Burdak</h3>
                  <p className="text-primary-blue font-semibold mb-3">Specialista in Machine Learning</p>
                  <p className="text-gray-600">
                    Esperto di AI e machine learning con una profonda comprensione di algoritmi avanzati e data science. Kush guida il nostro team di implementazione tecnica, progettando soluzioni innovative che trasformano i dati grezzi in business intelligence attuabile. La sua esperienza spazia dall&apos;elaborazione del linguaggio naturale, all&apos;analisi predittiva e alla visione artificiale, garantendo ai nostri clienti applicazioni AI all&apos;avanguardia che offrono risultati misurabili.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 