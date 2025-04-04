import Link from 'next/link';
import EnglishLayout from '../layout-en';

export default function ServicesPage() {
  return (
    <EnglishLayout>
      <div className="min-h-screen py-16">
        <div className="container-custom">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of AI-powered services to help your business thrive.
            </p>
          </div>

          {/* Services Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 mb-8">
              At Dolly Strategy, we understand that every business is unique, with its own set of challenges and opportunities. Our services are designed to adapt to your specific needs, providing tailored AI solutions that drive real results.
            </p>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-blue p-6 text-white">
                <h2 className="text-2xl font-bold">Automation</h2>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Streamline your business processes with our AI automation solutions. Save time and resources while increasing productivity.
                </p>
                <h3 className="text-lg font-bold mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Reduce manual workload and operational costs</li>
                  <li>Minimize human error and increase accuracy</li>
                  <li>Free up valuable employee time for strategic tasks</li>
                  <li>Scale your operations efficiently</li>
                </ul>
                <p className="text-gray-600 italic">
                  &quot;Our automation solutions are custom-built to address your unique workflow challenges.&quot;
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-blue p-6 text-white">
                <h2 className="text-2xl font-bold">Training</h2>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Get your team up to speed with our comprehensive AI training programs. Learn how to leverage AI in your daily operations.
                </p>
                <h3 className="text-lg font-bold mb-2">Training Includes:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Customized learning paths for different roles</li>
                  <li>Hands-on workshops and practical exercises</li>
                  <li>Continuous support and follow-up sessions</li>
                  <li>Up-to-date materials on the latest AI trends</li>
                </ul>
                <p className="text-gray-600 italic">
                  &quot;Empower your team with the knowledge and skills needed to excel in the AI-driven business landscape.&quot;
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-blue p-6 text-white">
                <h2 className="text-2xl font-bold">Consulting</h2>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Our expert consultants will analyze your business needs and provide tailored AI solutions to address your specific challenges.
                </p>
                <h3 className="text-lg font-bold mb-2">Consulting Process:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Thorough assessment of your current operations</li>
                  <li>Identification of opportunities for AI integration</li>
                  <li>Development of a strategic implementation plan</li>
                  <li>ROI analysis and performance metrics</li>
                </ul>
                <p className="text-gray-600 italic">
                  &quot;We translate complex AI concepts into practical business applications that deliver measurable results.&quot;
                </p>
              </div>
            </div>

            {/* Service 4 (placeholder for future expansion) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-green p-6 text-white">
                <h2 className="text-2xl font-bold">Custom Solutions</h2>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Can&apos;t find what you&apos;re looking for? We specialize in developing custom AI solutions tailored to your unique business requirements.
                </p>
                <h3 className="text-lg font-bold mb-2">Our Approach:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Collaborative discovery sessions</li>
                  <li>Prototype development and testing</li>
                  <li>Iterative refinement based on feedback</li>
                  <li>Seamless integration with existing systems</li>
                </ul>
                <p className="text-gray-600 italic">
                  &quot;Tell us your challenges, and we&apos;ll create an AI solution that addresses them effectively.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how our AI services can help your business achieve its goals.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </EnglishLayout>
  );
} 