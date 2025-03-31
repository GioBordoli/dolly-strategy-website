import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Dolly Strategy</h1>
            <p className="text-xl md:text-2xl mb-8">AI Solutions for Italian Businesses</p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              We provide cutting-edge AI solutions tailored for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Automation</h3>
              <p className="text-gray-600">
                Streamline your business processes with our AI automation solutions. Save time and resources while increasing productivity.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Training</h3>
              <p className="text-gray-600">
                Get your team up to speed with our comprehensive AI training programs. Learn how to leverage AI in your daily operations.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Consulting</h3>
              <p className="text-gray-600">
                Our expert consultants will analyze your business needs and provide tailored AI solutions to address your specific challenges.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600 mb-6">
                Dolly Strategy helps businesses leverage AI technology to improve efficiency and drive growth. Our team of experts is dedicated to providing customized AI solutions for businesses of all sizes in Italy.
              </p>
              <Link href="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
            <div className="relative h-80 w-full">
              {/* Placeholder for an image. In a real project, replace with an actual image */}
              <div className="bg-gray-200 rounded-lg h-full w-full flex items-center justify-center">
                <p className="text-gray-500">Company Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your business with AI? Contact us today!
          </p>
          <Link href="/contact" className="btn bg-white text-primary-green hover:bg-gray-100">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
} 