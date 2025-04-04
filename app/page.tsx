import Image from 'next/image';
import Link from 'next/link';
import EnglishLayout from './layout-en';

export default function Home() {
  return (
    <EnglishLayout>
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
              AI Solutions for Italian Businesses
            </h1>
            <p className="text-xl mb-10 text-white">
              We help businesses leverage artificial intelligence to improve efficiency and drive growth
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-blue py-3 px-8 rounded-full hover:bg-gray-100 transition w-full md:w-auto text-center font-semibold"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white/10 transition w-full md:w-auto text-center font-semibold"
              >
                Our Services
              </a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">
              How Dolly Strategy Can Help Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="bg-primary-blue/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Image 
                    src="/images/icons/automation-icon.svg" 
                    alt="Automation Icon" 
                    width={40} 
                    height={40}
                    className="text-primary-blue"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary-blue">Automated Process Analysis</h3>
                <p className="text-gray-600">
                  We identify inefficiencies in your business processes and recommend AI-powered
                  solutions to optimize them.
                </p>
                <a href="/services" className="inline-block mt-6 text-primary-blue font-semibold hover:underline">
                  Learn more →
                </a>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="bg-primary-blue/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Image 
                    src="/images/icons/insights-icon.svg" 
                    alt="Insights Icon" 
                    width={40} 
                    height={40}
                    className="text-primary-blue"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary-blue">Customer Insights</h3>
                <p className="text-gray-600">
                  Unlock valuable insights from your customer data using machine learning algorithms
                  that predict behavior and preferences.
                </p>
                <a href="/services" className="inline-block mt-6 text-primary-blue font-semibold hover:underline">
                  Learn more →
                </a>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="bg-primary-blue/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Image 
                    src="/images/icons/solutions-icon.svg" 
                    alt="Solutions Icon" 
                    width={40} 
                    height={40}
                    className="text-primary-blue"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary-blue">Custom AI Solutions</h3>
                <p className="text-gray-600">
                  From chatbots to predictive analytics, we develop customized AI solutions tailored to
                  your specific industry and business needs.
                </p>
                <a href="/services" className="inline-block mt-6 text-primary-blue font-semibold hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </EnglishLayout>
  );
} 