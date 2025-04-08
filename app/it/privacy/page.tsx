export default function PrivacyPolicyItalian() {
  return (
    <div className="container-custom mx-auto py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-blue">Informativa sulla Privacy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Introduzione</h2>
          <p>Dolly Strategy ("noi," "nostro," o "ci") rispetta la tua privacy e si impegna a proteggerla attraverso la nostra conformità a questa politica. Questa Informativa sulla Privacy descrive i tipi di informazioni che potremmo raccogliere da te o che potresti fornire quando visiti il nostro sito web (il nostro "Sito Web") e le nostre pratiche per la raccolta, l'uso, la manutenzione, la protezione e la divulgazione di tali informazioni.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Informazioni che Raccogliamo</h2>
          <p>Raccogliamo diversi tipi di informazioni dagli utenti del nostro Sito Web, tra cui informazioni:</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Tramite le quali puoi essere personalmente identificato, come nome, indirizzo email, numero di telefono ("informazioni personali");</li>
            <li>Che ti riguardano ma che individualmente non ti identificano, come il nome della tua azienda, il settore e il titolo di lavoro;</li>
            <li>Sulla tua connessione internet, l'apparecchiatura che utilizzi per accedere al nostro Sito Web e i dettagli di utilizzo.</li>
          </ul>
          <p>Raccogliamo queste informazioni:</p>
          <ul className="list-disc pl-8">
            <li>Direttamente da te quando ce le fornisci.</li>
            <li>Automaticamente mentre navighi nel sito. Le informazioni raccolte automaticamente possono includere dettagli di utilizzo, indirizzi IP e informazioni raccolte tramite cookie e altre tecnologie di tracciamento.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Utilizzo delle Tue Informazioni</h2>
          <p>Utilizziamo le informazioni che raccogliamo su di te o che ci fornisci, incluse eventuali informazioni personali:</p>
          <ul className="list-disc pl-8">
            <li>Per presentarti il nostro Sito Web e i suoi contenuti.</li>
            <li>Per fornirti informazioni, prodotti o servizi che ci richiedi.</li>
            <li>Per adempiere agli scopi per cui hai fornito le informazioni o che sono stati descritti quando sono state raccolte.</li>
            <li>Per adempiere ai nostri obblighi e far valere i nostri diritti derivanti da qualsiasi contratto stipulato tra te e noi.</li>
            <li>Per informarti su modifiche al nostro Sito Web o a qualsiasi prodotto o servizio che offriamo o forniamo attraverso di esso.</li>
            <li>In qualsiasi altro modo che potremmo descrivere quando fornisci le informazioni.</li>
            <li>Per qualsiasi altro scopo con il tuo consenso.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Divulgazione delle Tue Informazioni</h2>
          <p>Possiamo divulgare informazioni aggregate sui nostri utenti e informazioni che non identificano alcun individuo, senza restrizioni. Possiamo divulgare informazioni personali che raccogliamo o che ci fornisci come descritto in questa informativa sulla privacy:</p>
          <ul className="list-disc pl-8">
            <li>A appaltatori, fornitori di servizi e altri terzi che utilizziamo per supportare la nostra attività.</li>
            <li>A un acquirente o altro successore in caso di fusione, cessione, ristrutturazione, riorganizzazione, scioglimento o altra vendita o trasferimento di alcuni o tutti gli asset di Dolly Strategy.</li>
            <li>Per adempiere allo scopo per cui le fornisci.</li>
            <li>Per qualsiasi altro scopo divulgato da noi quando fornisci le informazioni.</li>
            <li>Con il tuo consenso.</li>
          </ul>
          <p>Potremmo anche divulgare le tue informazioni personali:</p>
          <ul className="list-disc pl-8">
            <li>Per rispettare qualsiasi ordinanza del tribunale, legge o procedimento legale, compresa la risposta a qualsiasi richiesta governativa o normativa.</li>
            <li>Per applicare o applicare i nostri termini di utilizzo e altri accordi.</li>
            <li>Se riteniamo che la divulgazione sia necessaria o appropriata per proteggere i diritti, la proprietà o la sicurezza di Dolly Strategy, dei nostri clienti o di altri.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Sicurezza dei Dati</h2>
          <p>Abbiamo implementato misure progettate per proteggere le tue informazioni personali da perdite accidentali e da accessi, utilizzi, alterazioni e divulgazioni non autorizzati. Sfortunatamente, la trasmissione di informazioni via internet non è completamente sicura. Sebbene facciamo del nostro meglio per proteggere le tue informazioni personali, non possiamo garantire la sicurezza delle tue informazioni personali trasmesse al nostro Sito Web. Qualsiasi trasmissione di informazioni personali è a tuo rischio.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Modifiche alla Nostra Informativa sulla Privacy</h2>
          <p>È nostra politica pubblicare su questa pagina qualsiasi modifica apportata alla nostra informativa sulla privacy. Se apportiamo modifiche sostanziali al modo in cui trattiamo le informazioni personali dei nostri utenti, te lo notificheremo tramite un avviso sulla homepage del Sito Web. La data dell'ultima revisione dell'informativa sulla privacy è indicata all'inizio della pagina.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Informazioni di Contatto</h2>
          <p>Per porre domande o commentare questa informativa sulla privacy e le nostre pratiche sulla privacy, contattaci a:</p>
          <p className="font-medium">info@dollystrategy.com</p>
          <p>o tramite il nostro numero di telefono: +39 123 456 7890</p>
        </section>
      </div>
    </div>
  );
} 