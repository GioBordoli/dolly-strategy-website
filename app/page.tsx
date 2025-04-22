"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import EnglishLayout from './layout-en';
import SectionContainer from './components/SectionContainer';
import TeamMemberCard from './components/TeamMemberCard';
import Script from 'next/script';

// Service cards data
const serviceCards = [
  {
    title: "Automation",
    color: "#1a365d", // primary-blue
    image: "/images/services/automation.jpg",
    description: "Streamline your business processes with our AI automation solutions. Save time and resources while increasing productivity.",
    benefits: [
      "Reduce manual workload and operational costs",
      "Minimize human error and increase accuracy",
      "Free up valuable employee time for strategic tasks",
      "Scale your operations efficiently"
    ],
    quote: "Our automation solutions are custom-built to address your unique workflow challenges."
  },
  {
    title: "Training",
    color: "#1a365d", // primary-blue
    image: "/images/services/training.jpg",
    description: "Get your team up to speed with our comprehensive AI training programs. Learn how to leverage AI in your daily operations.",
    benefits: [
      "Customized learning paths for different roles",
      "Hands-on workshops and practical exercises",
      "Continuous support and follow-up sessions",
      "Up-to-date materials on the latest AI trends"
    ],
    quote: "Empower your team with the knowledge and skills needed to excel in the AI-driven business landscape."
  },
  {
    title: "Consulting",
    color: "#1a365d", // primary-blue
    image: "/images/services/consulting.jpg",
    description: "Our expert consultants will analyze your business needs and provide tailored AI solutions to address your specific challenges.",
    benefits: [
      "Thorough assessment of your current operations",
      "Identification of opportunities for AI integration",
      "Development of a strategic implementation plan",
      "ROI analysis and performance metrics"
    ],
    quote: "We translate complex AI concepts into practical business applications that deliver measurable results."
  },
  {
    title: "Custom Solutions",
    color: "#2d9d78", // primary-green
    image: "/images/services/custom_solutions.jpg",
    description: "Can't find what you're looking for? We specialize in developing custom AI solutions tailored to your unique business requirements.",
    benefits: [
      "Collaborative discovery sessions",
      "Prototype development and testing",
      "Iterative refinement based on feedback",
      "Seamless integration with existing systems"
    ],
    quote: "Tell us your challenges, and we'll create an AI solution that addresses them effectively."
  }
];

// Optimized background component that uses static images with subtle CSS animations
const OptimizedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile viewport on client-side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for window resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Background Image - Different for mobile and desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ 
          backgroundImage: isMobile 
            ? 'url("/images/nebula-mobile.jpg")' 
            : 'url("/images/nebula-desktop.jpg")'
        }}
      />
      
      {/* Overlay to adjust image darkness */}
      <div className="absolute inset-0 bg-[#0f1626]/40"></div>
      
      {/* Subtle animated elements - only on desktop */}
      {!isMobile && (
        <>
          {/* Blue nebula glow */}
          <div className="nebula-glow absolute top-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-primary-blue/20 blur-3xl"></div>
          
          {/* Green nebula glow */}
          <div className="nebula-glow-alt absolute bottom-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-primary-green/20 blur-3xl"></div>
          
          {/* Purple accent */}
          <div className="nebula-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full bg-purple-500/10 blur-3xl"></div>
        </>
      )}
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service, index }: { service: typeof serviceCards[0], index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className="rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative h-64 w-full">
        <Image 
          src={service.image} 
          alt={service.title}
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1626] via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-2xl font-bold text-white drop-shadow-md">{service.title}</h2>
        </div>
      </div>
      <div className="p-6 bg-[#0f1626]/80 backdrop-blur-md border border-opacity-20" style={{borderColor: service.color}}>
        <p className="mb-4 text-gray-300">
          {service.description}
        </p>
        <h3 className="text-lg font-bold mb-2 text-white">Key {service.title === "Training" ? "Includes" : "Benefits"}:</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-300">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="mb-1">{benefit}</li>
          ))}
        </ul>
        <p className="text-gray-400 italic border-l-2 pl-4 mt-6" style={{borderColor: service.color === "#1a365d" ? "#4facfe" : "#2d9d78"}}>
          &quot;{service.quote}&quot;
        </p>
      </div>
    </motion.div>
  );
};

// Navigation menu for single page
const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="fixed top-8 right-8 z-50">
      <motion.button
        className="bg-primary-blue/80 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>
      
      {isOpen && (
        <motion.div
          className="absolute top-16 right-0 bg-[#0f1626]/90 backdrop-blur-md rounded-lg shadow-lg p-4 w-48 border border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-primary-green w-full text-left py-2 px-4 rounded hover:bg-white/10 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-primary-green w-full text-left py-2 px-4 rounded hover:bg-white/10 transition-colors"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-primary-green w-full text-left py-2 px-4 rounded hover:bg-white/10 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-white hover:text-primary-green w-full text-left py-2 px-4 rounded hover:bg-white/10 transition-colors"
              >
                Team
              </button>
            </li>
            <li>
              <Link 
                href="/quiz"
                className="text-white hover:text-primary-green w-full text-left block py-2 px-4 rounded hover:bg-white/10 transition-colors"
              >
                Profit Quiz
              </Link>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-primary-green w-full text-left py-2 px-4 rounded hover:bg-white/10 transition-colors"
              >
                Contact
              </button>
            </li>
            <li className="border-t border-white/10 mt-2 pt-2">
              <Link 
                href="/it"
                className="text-white hover:text-primary-green w-full text-left block py-2 px-4 rounded hover:bg-white/10 transition-colors flex items-center"
              >
                <span>Italiano</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

// Define types for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
      }) => void;
    };
  }
}

export default function Home() {
  // Add Calendly open function
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/dollystrategy/30min'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0f1626] text-white overflow-hidden">
      {/* Background elements */}
      <OptimizedBackground />
      
      {/* Navigation Menu */}
      <NavMenu />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div className="container-custom mx-auto z-10 relative py-24">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI Solutions for Small Businesses
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We help businesses leverage artificial intelligence to boost efficiency, drive growth, and stay competitive.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCalendly}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-white to-gray-300 text-primary-blue font-bold text-lg hover:shadow-glow-white transition-all duration-300"
              >
                Book a Free Strategy Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services section starts here - more sections will be added */}
      <section id="services" className="relative py-24">
        <div className="container-custom mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a range of AI-powered services to help your business thrive.
            </p>
          </motion.div>

          {/* Services Introduction */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-8">
              At Dolly Strategy, we understand that every business is unique, with its own set of challenges and opportunities. Our services are designed to adapt to your specific needs, providing tailored AI solutions that drive real results.
            </p>
          </motion.div>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {serviceCards.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
          
          {/* Services CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 mb-8">
              Ready to see how our AI services can transform your business?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCalendly}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-lg hover:shadow-glow transition-all duration-300"
            >
              Book a Free Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="relative py-24">
        <div className="container-custom mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              About Dolly Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get to know our company and mission to bring AI to Italian businesses.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-4 text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-300 mb-4">
                  At Dolly Strategy, we are committed to democratizing AI technology for businesses of all sizes in Italy. Our mission is to bridge the gap between cutting-edge AI innovations and practical business applications.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  We believe that artificial intelligence should be accessible, understandable, and valuable for every business, regardless of their size or industry. Our goal is to help Italian companies leverage AI to increase efficiency, reduce costs, and gain a competitive edge in the global market.
                </p>
                <p className="text-lg text-gray-300">
                  Through our services, we aim to transform the Italian business landscape by introducing AI solutions that are both innovative and practical, focusing on real-world applications that deliver measurable results.
                </p>
              </motion.div>
            </div>
            <motion.div 
              className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg border border-[#2d9d78]/30"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/mission.jpg" 
                alt="Dolly Strategy Mission" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1626]/50 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-12 text-center text-white">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* Innovation Value Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col"
              >
                {/* Image with natural dimensions */}
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image 
                    src="/images/values/innovation.jpg" 
                    alt="Innovation" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                {/* Text directly below image */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-3 text-white">Innovation</h4>
                  <p className="text-gray-300">
                    We continuously explore and adopt cutting-edge AI technologies to provide the most advanced solutions for our clients.
                  </p>
                </div>
              </motion.div>
              
              {/* Collaboration Value Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col"
              >
                {/* Image with natural dimensions */}
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image 
                    src="/images/values/collaboration.jpg" 
                    alt="Collaboration" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                {/* Text directly below image */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-3 text-white">Collaboration</h4>
                  <p className="text-gray-300">
                    We believe in working closely with our clients to understand their unique needs and develop tailored solutions that address their specific challenges.
                  </p>
                </div>
              </motion.div>
              
              {/* Privacy Value Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col"
              >
                {/* Image with natural dimensions */}
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image 
                    src="/images/values/privacy.jpg" 
                    alt="Privacy" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                {/* Text directly below image */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-3 text-white">Privacy</h4>
                  <p className="text-gray-300">
                    We are committed to protecting your data and ensuring privacy standards are maintained throughout all our AI implementations and business processes.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="relative py-24">
        <div className="container-custom mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dolly Strategy is powered by a diverse team of experts in artificial intelligence, data science, business strategy, and industry-specific domains.
            </p>
          </motion.div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <TeamMemberCard 
                imageSrc="/images/team/giorgio.jpg"
                name="Giorgio Bordoli"
                role="CEO & Founder"
                description="Visionary entrepreneur with expertise in AI implementation and business transformation. Giorgio leads our strategic direction and client partnerships."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <TeamMemberCard 
                imageSrc="/images/team/daniel.jpg"
                name="Daniel Maurot"
                role="Chief Financial Officer"
                description="Financial strategist with deep experience in technology investments. Daniel ensures our growth is sustainable while maximizing value for our clients."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <TeamMemberCard 
                imageSrc="/images/team/marissa.jpg"
                name="Marissa"
                role="Lead Operations Officer"
                description="Operations expert who orchestrates our project delivery with precision and excellence. Marissa ensures seamless execution of all client solutions."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <TeamMemberCard 
                imageSrc="/images/team/laura.jpg"
                name="Laura"
                role="Executive Secretary"
                description="Communication specialist who coordinates our executive activities and client relationships. Laura ensures our operations run smoothly and efficiently."
              />
            </motion.div>
          </div>

          {/* Team CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 mb-8">
              Want to learn how our experts can help your business?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCalendly}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-lg hover:shadow-glow transition-all duration-300"
            >
              Book a Free Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Replace Quiz Section with a CTA to the quiz page */}
      <section id="quiz-cta" className="relative py-24">
        <div className="container-custom mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              Discover Your AI Profit Potential
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Take our interactive quiz to see how much revenue you could generate and costs you could save by implementing AI solutions in your business.
            </p>
            
            <motion.div className="flex justify-center">
              <Link href="/quiz">
                <motion.div
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-xl inline-block hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take the Profit Quiz
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24">
        <div className="container-custom mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your business with AI? Contact us today!
            </p>
            
            {/* Main Calendly CTA Button */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button 
                onClick={openCalendly}
                className="px-10 py-5 rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-xl hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Free Strategy Call
              </motion.button>
              <p className="mt-4 text-gray-300">
                Schedule a free 30-minute strategy call with one of our AI experts
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-[#0f1626]/70 backdrop-blur-md border border-[#4facfe]/20 rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#1a2536] border border-[#4facfe]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9d78] text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#1a2536] border border-[#4facfe]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9d78] text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1a2536] border border-[#4facfe]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9d78] text-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="bg-[#0f1626]/70 backdrop-blur-md border border-[#4facfe]/20 rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Company Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-blue to-[#4facfe] rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-300">123 AI Street, Tech District, Milan, Italy</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-blue to-[#4facfe] rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:info@dollystrategy.com" className="text-gray-300 hover:text-primary-green transition-colors">info@dollystrategy.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-blue to-[#4facfe] rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <a href="tel:+391234567890" className="text-gray-300 hover:text-primary-green transition-colors">+39 123 456 7890</a>
                  </div>
                </div>
              </div>

              {/* Map or additional content */}
              <div className="mt-8 relative h-48 rounded-lg overflow-hidden border border-[#4facfe]/30">
                <Image 
                  src="/images/skyscrapers.png"
                  alt="Our location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1626]/70 via-transparent to-transparent flex items-end justify-center pb-4">
                  <span className="text-white font-medium px-4 py-2 bg-[#1a2536]/80 rounded-full backdrop-blur-sm">
                    Our Location
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-[#4facfe]/20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <Image 
                  src="/images/white-logo.png" 
                  alt="Dolly Strategy Logo" 
                  width={80} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              <p className="mb-2 text-gray-300">
                AI Solutions for Italian Businesses
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('quiz-cta')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    Profit Quiz
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Contact Us
              </h3>
              <address className="not-italic">
                <p className="mb-2 text-gray-300">
                  123 AI Street, Tech District, Milan, Italy
                </p>
                <p className="mb-2">
                  <a
                    href="mailto:info@dollystrategy.com"
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    info@dollystrategy.com
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    href="tel:+391234567890"
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    +39 123 456 7890
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#4facfe]/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2023 Dolly Strategy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Custom styles */}
      <style jsx global>{`
        .hover\:shadow-glow:hover {
          box-shadow: 0 0 25px rgba(45, 157, 120, 0.6);
        }
        
        .hover\:shadow-glow-white:hover {
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.6);
        }
        
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
        
        /* Subtle animations for the nebula elements */
        .nebula-glow {
          animation: glow 8s ease-in-out infinite alternate;
        }
        
        .nebula-glow-alt {
          animation: glow 12s ease-in-out infinite alternate-reverse;
        }
        
        .nebula-pulse {
          animation: pulse 15s ease-in-out infinite;
        }
        
        @keyframes glow {
          0% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.2); }
          100% { opacity: 0.1; transform: scale(1); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.1; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.25; transform: scale(1.3) translate(-40%, -40%); }
          100% { opacity: 0.1; transform: scale(1) translate(-50%, -50%); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(1); }
        }
      `}</style>
      
      {/* Calendly Scripts */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
} 