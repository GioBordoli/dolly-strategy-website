import Image from 'next/image';
import EnglishLayout from '../layout-en';

export default function AboutPage() {
  return (
    <EnglishLayout>
      <div className="min-h-screen py-16">
        <div className="container-custom">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Dolly Strategy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know our company and mission to bring AI to Italian businesses.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Dolly Strategy, we are committed to democratizing AI technology for businesses of all sizes in Italy. Our mission is to bridge the gap between cutting-edge AI innovations and practical business applications.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that artificial intelligence should be accessible, understandable, and valuable for every business, regardless of their size or industry. Our goal is to help Italian companies leverage AI to increase efficiency, reduce costs, and gain a competitive edge in the global market.
              </p>
              <p className="text-lg text-gray-700">
                Through our services, we aim to transform the Italian business landscape by introducing AI solutions that are both innovative and practical, focusing on real-world applications that deliver measurable results.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for an image */}
              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                <p className="text-gray-500">Mission Image Placeholder</p>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Founder</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded by AI enthusiasts with years of experience in business transformation, Dolly Strategy brings together expertise in artificial intelligence, data science, and business strategy.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founder recognized the immense potential of AI in transforming businesses but also observed a significant gap between technological possibilities and practical implementations, especially for small and medium-sized enterprises in Italy.
              </p>
              <p className="text-lg text-gray-700">
                With a background in both technology and business consulting, our leadership team is uniquely positioned to understand the challenges businesses face and identify opportunities where AI can make the most impact.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg md:order-1">
              {/* Placeholder for founder image */}
              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                <p className="text-gray-500">Founder Image Placeholder</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary-blue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously explore and adopt cutting-edge AI technologies to provide the most advanced solutions for our clients.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary-blue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in working closely with our clients to understand their unique needs and develop tailored solutions that address their specific challenges.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary-blue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Trust</h3>
                <p className="text-gray-600">
                  We are committed to transparency, ethical AI practices, and building long-term relationships based on mutual trust and respect.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section (Placeholder for future expansion) */}
          <div className="bg-gray-50 p-12 rounded-lg mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
            <p className="text-lg text-center text-gray-700 mb-10">
              Dolly Strategy is powered by a diverse team of experts in artificial intelligence, data science, business strategy, and industry-specific domains.
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-700 italic">
                Team profiles coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </EnglishLayout>
  );
} 