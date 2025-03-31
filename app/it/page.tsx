import Image from 'next/image';
import Link from 'next/link';

export default function HomePageItalian() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Dolly Strategy</h1>
            <p className="text-xl md:text-2xl mb-8">Soluzioni AI per le Aziende Italiane</p>
            <Link href="/it/contact" className="btn btn-primary">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">I Nostri Servizi</h2>
            <p className="text-gray-600">
              Forniamo soluzioni AI all&apos;avanguardia su misura per le esigenze della tua azienda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Automazione</h3>
              <p className="text-gray-600">
                Semplifica i processi aziendali con le nostre soluzioni di automazione AI. Risparmia tempo e risorse aumentando la produttività.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Formazione</h3>
              <p className="text-gray-600">
                Porta il tuo team all&apos;avanguardia con i nostri programmi di formazione AI completi. Impara a sfruttare l&apos;AI nelle operazioni quotidiane.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Consulenza</h3>
              <p className="text-gray-600">
                I nostri consulenti esperti analizzeranno le esigenze della tua azienda e forniranno soluzioni AI su misura per affrontare le tue sfide specifiche.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/it/services" className="btn btn-outline">
              Visualizza Tutti i Servizi
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Chi Siamo</h2>
              <p className="text-gray-600 mb-6">
                Dolly Strategy aiuta le aziende a sfruttare la tecnologia AI per migliorare l&apos;efficienza e guidare la crescita. Il nostro team di esperti è dedicato a fornire soluzioni AI personalizzate per aziende di tutte le dimensioni in Italia.
              </p>
              <Link href="/it/about" className="btn btn-outline">
                Scopri di Più
              </Link>
            </div>
            <div className="relative h-80 w-full">
              {/* Placeholder for an image. In a real project, replace with an actual image */}
              <div className="bg-gray-200 rounded-lg h-full w-full flex items-center justify-center">
                <p className="text-gray-500">Placeholder Immagine Aziendale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Contattaci</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pronto a trasformare la tua azienda con l&apos;AI? Contattaci oggi!
          </p>
          <Link href="/it/contact" className="btn bg-white text-primary-green hover:bg-gray-100">
            Contattaci Ora
          </Link>
        </div>
      </section>
    </div>
  );
} 