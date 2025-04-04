import Image from 'next/image';
import Link from 'next/link';
import EnglishLayout from './layout-en';

export default function Home() {
  return (
    <EnglishLayout>
      <div className="container-custom mx-auto py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Solutions for Italian Businesses
          </h1>
          <p className="text-xl mb-8">
            We help businesses leverage artificial intelligence to improve efficiency and drive growth
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/contact"
              className="bg-primary-blue text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full md:w-auto text-center"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="bg-gray-200 text-gray-800 py-3 px-6 rounded hover:bg-gray-300 transition w-full md:w-auto text-center"
            >
              Our Services
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            How Dolly Strategy Can Help Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Automated Process Analysis</h3>
              <p>
                We identify inefficiencies in your business processes and recommend AI-powered
                solutions to optimize them.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Customer Insights</h3>
              <p>
                Unlock valuable insights from your customer data using machine learning algorithms
                that predict behavior and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Custom AI Solutions</h3>
              <p>
                From chatbots to predictive analytics, we develop customized AI solutions tailored to
                your specific industry and business needs.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Trusted by Leading Italian Companies
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
    </EnglishLayout>
  );
} 