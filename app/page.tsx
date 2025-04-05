import Image from 'next/image';
import Link from 'next/link';
import EnglishLayout from './layout-en';
import ServiceCard from './components/ServiceCard';
import SectionContainer from './components/SectionContainer';

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
          {/* Overlay with reduced opacity */}
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container-custom mx-auto z-10 relative">
          <SectionContainer className="text-center max-w-4xl mx-auto">
            <h1 className="text-white mb-8">
              AI Solutions for Italian Businesses
            </h1>
            <p className="text-xl mb-10 text-white">
              We help businesses leverage artificial intelligence to improve efficiency and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn bg-white text-primary-blue hover:bg-gray-100"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </SectionContainer>

          <SectionContainer>
            <h2 className="section-title text-white">
              How Dolly Strategy Can Help Your Business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <ServiceCard 
                iconSrc="/images/icons/automation-icon.svg"
                title="Automated Process Analysis"
                description="We identify inefficiencies in your business processes and recommend AI-powered solutions to optimize them."
                linkText="Learn more"
                linkHref="/services"
                alt="Automation Icon"
              />
              
              <ServiceCard 
                iconSrc="/images/icons/insights-icon.svg"
                title="Customer Insights"
                description="Unlock valuable insights from your customer data using machine learning algorithms that predict behavior and preferences."
                linkText="Learn more"
                linkHref="/services"
                alt="Insights Icon"
              />
              
              <ServiceCard 
                iconSrc="/images/icons/solutions-icon.svg"
                title="Custom AI Solutions"
                description="From chatbots to predictive analytics, we develop customized AI solutions tailored to your specific industry and business needs."
                linkText="Learn more"
                linkHref="/services"
                alt="Solutions Icon"
              />
            </div>
          </SectionContainer>
        </div>
      </div>
    </EnglishLayout>
  );
} 