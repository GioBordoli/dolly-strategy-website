import Link from 'next/link';

export default function ServicesPageItalian() {
  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">I Nostri Servizi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo una gamma di servizi basati sull&apos;AI per aiutare la tua azienda a prosperare.
          </p>
        </div>

        {/* Services Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-8">
            In Dolly Strategy, comprendiamo che ogni azienda è unica, con il proprio insieme di sfide e opportunità. I nostri servizi sono progettati per adattarsi alle tue esigenze specifiche, fornendo soluzioni AI su misura che generano risultati reali.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary-blue p-6 text-white">
              <h2 className="text-2xl font-bold">Automazione</h2>
            </div>
            <div className="p-6">
              <p className="mb-4">
                Semplifica i processi aziendali con le nostre soluzioni di automazione AI. Risparmia tempo e risorse aumentando la produttività.
              </p>
              <h3 className="text-lg font-bold mb-2">Vantaggi Principali:</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Riduzione del carico di lavoro manuale e dei costi operativi</li>
                <li>Minimizzazione degli errori umani e aumento della precisione</li>
                <li>Liberazione del tempo prezioso dei dipendenti per compiti strategici</li>
                <li>Scalare le operazioni in modo efficiente</li>
              </ul>
              <p className="text-gray-600 italic">
                &quot;Le nostre soluzioni di automazione sono create su misura per affrontare le sfide uniche del tuo flusso di lavoro.&quot;
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary-blue p-6 text-white">
              <h2 className="text-2xl font-bold">Formazione</h2>
            </div>
            <div className="p-6">
              <p className="mb-4">
                Porta il tuo team all&apos;avanguardia con i nostri programmi di formazione AI completi. Impara a sfruttare l&apos;AI nelle operazioni quotidiane.
              </p>
              <h3 className="text-lg font-bold mb-2">La Formazione Include:</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Percorsi di apprendimento personalizzati per ruoli diversi</li>
                <li>Workshop pratici ed esercizi applicativi</li>
                <li>Supporto continuo e sessioni di follow-up</li>
                <li>Materiali aggiornati sulle ultime tendenze dell&apos;AI</li>
              </ul>
              <p className="text-gray-600 italic">
                &quot;Dota il tuo team delle conoscenze e delle competenze necessarie per eccellere nel panorama aziendale guidato dall&apos;AI.&quot;
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary-blue p-6 text-white">
              <h2 className="text-2xl font-bold">Consulenza</h2>
            </div>
            <div className="p-6">
              <p className="mb-4">
                I nostri consulenti esperti analizzeranno le esigenze della tua azienda e forniranno soluzioni AI su misura per affrontare le tue sfide specifiche.
              </p>
              <h3 className="text-lg font-bold mb-2">Processo di Consulenza:</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Valutazione approfondita delle tue operazioni attuali</li>
                <li>Identificazione delle opportunità per l&apos;integrazione dell&apos;AI</li>
                <li>Sviluppo di un piano di implementazione strategico</li>
                <li>Analisi ROI e metriche di performance</li>
              </ul>
              <p className="text-gray-600 italic">
                &quot;Traduciamo concetti AI complessi in applicazioni aziendali pratiche che forniscono risultati misurabili.&quot;
              </p>
            </div>
          </div>

          {/* Service 4 (placeholder for future expansion) */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary-green p-6 text-white">
              <h2 className="text-2xl font-bold">Soluzioni Personalizzate</h2>
            </div>
            <div className="p-6">
              <p className="mb-4">
                Non trovi quello che stai cercando? Ci specializziamo nello sviluppo di soluzioni AI personalizzate su misura per le tue esigenze aziendali uniche.
              </p>
              <h3 className="text-lg font-bold mb-2">Il Nostro Approccio:</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Sessioni di scoperta collaborative</li>
                <li>Sviluppo e test di prototipi</li>
                <li>Perfezionamento iterativo basato sul feedback</li>
                <li>Integrazione perfetta con i sistemi esistenti</li>
              </ul>
              <p className="text-gray-600 italic">
                &quot;Raccontaci le tue sfide e creeremo una soluzione AI che le affronti efficacemente.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Pronto a Trasformare la Tua Azienda?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contattaci oggi per discutere di come i nostri servizi AI possono aiutare la tua azienda a raggiungere i suoi obiettivi.
          </p>
          <Link href="/it/contact" className="btn btn-primary">
            Contattaci
          </Link>
        </div>
      </div>
    </div>
  );
} 