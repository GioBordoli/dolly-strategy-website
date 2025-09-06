"use client";

export default function TermsPageItalian() {
  return (
    <div className="container-custom mx-auto py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-blue">Termini e Condizioni</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Accettazione dei Termini</h2>
          <p>Accedendo e utilizzando questo sito web, accetti e concordi di essere vincolato da questi Termini e Condizioni e dalla nostra Informativa sulla Privacy.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Uso del Sito</h2>
          <p>Puoi utilizzare questo sito solo per scopi leciti e in conformità con questi Termini. Accetti di non utilizzare il sito in modo da disabilitarlo, sovraccaricarlo, danneggiarlo o comprometterlo o interferire con l'uso del sito da parte di terzi.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Proprietà Intellettuale</h2>
          <p>Tutti i contenuti, le funzionalità e le caratteristiche di questo sito, inclusi testi, grafica, loghi e immagini, sono di proprietà di Dolly Strategy o dei suoi licenziatari e sono protetti dalle leggi sulla proprietà intellettuale applicabili.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Modifiche ai Termini</h2>
          <p>Possiamo rivedere e aggiornare questi Termini di tanto in tanto a nostra esclusiva discrezione. Tutte le modifiche sono efficaci immediatamente quando le pubblichiamo.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Contatti</h2>
          <p>Se hai domande su questi Termini, contattaci a:</p>
          <p className="font-medium">info@dollystrategy.com</p>
          <p>o tramite il nostro numero di telefono: +39 333 324 9234</p>
        </section>
      </div>
    </div>
  );
} 