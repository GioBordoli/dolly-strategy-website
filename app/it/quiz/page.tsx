import Image from 'next/image';
import Link from 'next/link';
import QuizForm from '../../components/QuizForm';
import ScrollButton from '../../components/ScrollButton';

export default function QuizPageItalian() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container-custom pt-8 pb-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-primary-blue">
            Il Quiz di Automazione di 5 Minuti: <span className="text-primary-green">Sblocca i Profitti Nascosti della Tua Azienda</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Scopri quanto la tua azienda sta perdendo a causa di sprechi di tempo e come l&apos;automazione può restituirtelo.
          </p>
          
          {/* Trust Builder */}
          <div className="flex items-center justify-center mb-6">
            <p className="text-sm font-medium text-gray-600">
              Creato da Dolly Strategy—esperti di automazione per piccole aziende
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Value Prop */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <p className="text-lg md:text-xl mb-6 text-gray-800">
                Stai sprecando ore in attività ripetitive? Spendi troppo per personale che potrebbe essere sostituito da uno strumento da 10€? Fai questo quiz di 5 minuti per vedere esattamente quanto sta perdendo la tua azienda e come l&apos;automazione può aumentare i tuoi profitti.
              </p>
              
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">In soli 5 minuti, scoprirai:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-green rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-md md:text-lg font-medium">Richiede solo 5 minuti</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-green rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-md md:text-lg font-medium">Ottieni il tuo report di profitto personalizzato</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-green rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-md md:text-lg font-medium">Nessuna competenza tecnica richiesta</span>
                  </li>
                </ul>
              </div>
              
              {/* Mobile CTA - shown only on smaller screens */}
              <ScrollButton 
                targetId="quiz-form"
                className="w-full py-4 px-6 bg-primary-green text-white font-bold rounded-lg text-lg shadow-lg hover:bg-primary-green/90 transition duration-300 transform hover:-translate-y-1"
                isMobile={true}
              >
                Fai il Quiz Ora
              </ScrollButton>
              <p className="text-center text-sm font-medium mt-2 text-gray-600 lg:hidden">
                Inizia a sbloccare i tuoi profitti in 5 minuti
              </p>
              
              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-gray-50 p-4 rounded-lg italic text-gray-700">
                  <p className="text-md">"Il quiz ci ha mostrato che stavamo sprecando 3.240€ al mese in processi manuali. Usando gli strumenti di automazione di Dolly, abbiamo recuperato 15 ore a settimana!"</p>
                  <p className="mt-2 font-medium text-right">— Marco G., Piccolo Studio di Contabilità</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="lg:col-span-2" id="quiz-form">
            <div className="sticky top-28">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-primary-green">
                <h3 className="font-bold text-xl mb-6 text-center">Inizia la Tua Valutazione dei Profitti in 5 Minuti</h3>
                
                <QuizForm />
                
                <div className="mt-6">
                  <p className="text-center text-sm text-gray-600">
                    I tuoi dati sono al sicuro. Non condivideremo mai le tue informazioni.
                  </p>
                </div>
              </div>
              
              {/* Results Preview Teaser */}
              <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
                <p className="font-medium mb-2">Dopo il quiz, scoprirai:</p>
                <ul className="space-y-2 mb-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">▶</span>
                    <span>Quanto stai perdendo a causa di processi inefficienti</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">▶</span>
                    <span>I tuoi potenziali risparmi grazie all'automazione</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2">▶</span>
                    <span>Opportunità di crescita dei ricavi personalizzate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Non lasciare soldi sul tavolo
          </h3>
          <p className="text-lg mb-6">
            La media delle piccole aziende recupera più di 12 ore a settimana con gli strumenti di automazione adeguati.
          </p>
          
          {/* Desktop Bottom CTA - hidden on mobile since we have one above */}
          <ScrollButton 
            targetId="quiz-form"
            className="py-4 px-8 bg-primary-green text-white font-bold rounded-lg text-lg shadow-lg hover:bg-primary-green/90 transition duration-300 transform hover:-translate-y-1"
          >
            Fai il Quiz Ora
          </ScrollButton>
          <p className="text-center text-sm font-medium mt-2 text-gray-600 hidden lg:block">
            Inizia a sbloccare i tuoi profitti in 5 minuti
          </p>
        </div>
      </div>
    </div>
  );
} 