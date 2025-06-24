"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import SectionContainer from '../components/SectionContainer';
import TeamMemberCard from '../components/TeamMemberCard';
import Script from 'next/script';
import { Inter } from 'next/font/google';

// Dati delle card dei servizi
const serviceCards = [
  {
    title: "Consulenza",
    color: "#1a365d", // primary-blue
    image: "/images/services/consulting.jpg",
    description: "I nostri consulenti esperti analizzeranno le esigenze della tua azienda e forniranno soluzioni AI su misura per affrontare le tue sfide specifiche.",
    benefits: [
      "Valutazione approfondita delle tue operazioni attuali",
      "Identificazione delle opportunità di integrazione dell'AI",
      "Sviluppo di un piano strategico di implementazione",
      "Analisi del ROI e metriche di performance"
    ],
    quote: "Traduciamo concetti AI complessi in applicazioni aziendali pratiche che offrono risultati misurabili."
  },
  {
    title: "Formazione",
    color: "#1a365d", // primary-blue
    image: "/images/services/training.jpg",
    description: "Prepara il tuo team con i nostri programmi di formazione AI completi. Impara a sfruttare l'AI nelle operazioni quotidiane.",
    benefits: [
      "Percorsi di apprendimento personalizzati per diversi ruoli",
      "Workshop pratici ed esercizi concreti",
      "Supporto continuo e sessioni di follow-up",
      "Materiali aggiornati sulle ultime tendenze dell'AI"
    ],
    quote: "Potenzia il tuo team con le conoscenze e le competenze necessarie per eccellere nel panorama aziendale guidato dall'AI."
  },
  {
    title: "Automazione",
    color: "#1a365d", // primary-blue
    image: "/images/services/automation.jpg",
    description: "Ottimizza i processi aziendali con le nostre soluzioni di automazione AI. Risparmia tempo e risorse aumentando la produttività.",
    benefits: [
      "Riduzione del carico di lavoro manuale e dei costi operativi",
      "Minimizzazione degli errori umani e aumento della precisione",
      "Liberazione di tempo prezioso dei dipendenti per compiti strategici",
      "Scalabilità efficiente delle operazioni"
    ],
    quote: "Le nostre soluzioni di automazione sono create su misura per affrontare le tue specifiche sfide di workflow."
  },
  {
    title: "Soluzioni Personalizzate",
    color: "#2d9d78", // primary-green
    image: "/images/services/custom_solutions.jpg",
    description: "Non trovi ciò che cerchi? Siamo specializzati nello sviluppo di soluzioni AI personalizzate in base alle specifiche esigenze della tua azienda.",
    benefits: [
      "Sessioni di scoperta collaborative",
      "Sviluppo e testing di prototipi",
      "Perfezionamento iterativo basato sul feedback",
      "Integrazione senza problemi con i sistemi esistenti"
    ],
    quote: "Raccontaci le tue sfide e creeremo una soluzione AI che le affronti efficacemente."
  }
];

// Componente di sfondo ottimizzato che utilizza immagini statiche con animazioni CSS sottili
const OptimizedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Controlla per viewport mobile lato client
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Controllo iniziale
    checkMobile();
    
    // Ascolta per il ridimensionamento della finestra
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Immagine di sfondo - Diversa per mobile e desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ 
          backgroundImage: isMobile 
            ? 'url("/images/nebula-mobile.jpg")' 
            : 'url("/images/nebula-desktop.jpg")'
        }}
      />
      
      {/* Overlay per regolare la luminosità dell'immagine */}
      <div className="absolute inset-0 bg-[#0f1626]/40"></div>
      
      {/* Elementi animati sottili - solo su desktop */}
      {!isMobile && (
        <>
          {/* Bagliore blu nebulosa */}
          <div className="nebula-glow absolute top-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-primary-blue/20 blur-3xl"></div>
          
          {/* Bagliore verde nebulosa */}
          <div className="nebula-glow-alt absolute bottom-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-primary-green/20 blur-3xl"></div>
          
          {/* Accento viola */}
          <div className="nebula-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full bg-purple-500/10 blur-3xl"></div>
        </>
      )}
    </div>
  );
};

// Componente Card Servizio
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
        <h3 className="text-lg font-bold mb-2 text-white">Vantaggi Principali:</h3>
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

// Menu di navigazione per pagina singola
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
                Servizi
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-primary-green w-full text-left py-2 px-4 rounded hover:bg-white/10 transition-colors"
              >
                Chi Siamo
              </button>
            </li>
            <li>
              <Link 
                href="/it/quiz"
                className="text-white hover:text-primary-green w-full text-left block py-2 px-4 rounded hover:bg-white/10 transition-colors"
              >
                Quiz Profitto
              </Link>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-primary-green w-full text-left py-2 px-4 rounded hover:bg-white/10 transition-colors"
              >
                Contatti
              </button>
            </li>
            <li className="border-t border-white/10 mt-2 pt-2">
              <Link 
                href="/"
                className="text-white hover:text-primary-green w-full text-left block py-2 px-4 rounded hover:bg-white/10 transition-colors flex items-center"
              >
                <span>English 🇬🇧</span>
                
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

export default function HomePageItalian() {
  // Funzione per aprire Calendly
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/dollystrategy/30min'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0f1626] text-white overflow-hidden">
      {/* Elementi di sfondo */}
      <OptimizedBackground />
      
      {/* Menu di navigazione */}
      <NavMenu />
      
      {/* Sezione Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div className="container-custom mx-auto z-10 relative py-16">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Soluzioni AI per le Piccole Imprese
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Aiutiamo le aziende a sfruttare l'intelligenza artificiale per migliorare l'efficienza, guidare la crescita e rimanere competitive.
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
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-lg hover:shadow-glow transition-all duration-300"
              >
                Fissa una Chiamata
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Sezione Servizi */}
      <section id="services" className="relative py-16">
        <div className="container-custom mx-auto">
          {/* Intestazione Sezione */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              I Nostri Servizi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Offriamo una gamma di servizi basati sull'AI per aiutare la tua azienda a prosperare.
            </p>
          </motion.div>

          {/* Introduzione ai Servizi */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6">
              In Dolly Strategy, comprendiamo che ogni azienda è unica, con le proprie sfide e opportunità. I nostri servizi sono progettati per adattarsi alle tue esigenze specifiche, fornendo soluzioni AI su misura che portano risultati concreti.
            </p>
          </motion.div>

          {/* Lista Servizi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {serviceCards.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
          
          {/* CTA Servizi */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 mb-8">
              Pronto a scoprire come i nostri servizi AI possono trasformare la tua azienda?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCalendly}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-lg hover:shadow-glow transition-all duration-300"
            >
              Fissa una Chiamata
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Sezione Chi Siamo */}
      <section id="about" className="relative py-24">
        <div className="container-custom mx-auto">
          {/* Intestazione Sezione */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              Chi è Dolly Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conosci la nostra azienda e la nostra missione di portare l'AI alle imprese italiane.
            </p>
          </motion.div>

          {/* Sezione Missione */}
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
                La Nostra Missione
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-300 mb-4">
                  In Dolly Strategy, ci impegniamo a democratizzare la tecnologia AI per le aziende di tutte le dimensioni in Italia. La nostra missione è colmare il divario tra le innovazioni all'avanguardia dell'AI e le applicazioni aziendali pratiche.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  Crediamo che l'intelligenza artificiale debba essere accessibile, comprensibile e preziosa per ogni azienda, indipendentemente dalle dimensioni o dal settore. Il nostro obiettivo è aiutare le aziende italiane a sfruttare l'AI per aumentare l'efficienza, ridurre i costi e ottenere un vantaggio competitivo nel mercato globale.
                </p>
                <p className="text-lg text-gray-300">
                  Attraverso i nostri servizi, miriamo a trasformare il panorama aziendale italiano introducendo soluzioni AI che siano sia innovative che pratiche, concentrandoci su applicazioni nel mondo reale che offrono risultati misurabili.
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
                alt="Missione di Dolly Strategy" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1626]/50 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Sezione Valori */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-12 text-center text-white">I Nostri Valori</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* Valore Innovazione */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col"
              >
                {/* Immagine con dimensioni naturali */}
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image 
                    src="/images/values/innovation.jpg" 
                    alt="Innovazione" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                {/* Testo direttamente sotto l'immagine */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-3 text-white">Innovazione</h4>
                  <p className="text-gray-300">
                    Esploriamo e adottiamo continuamente tecnologie AI all'avanguardia per fornire le soluzioni più avanzate ai nostri clienti.
                  </p>
                </div>
              </motion.div>
              
              {/* Valore Collaborazione */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col"
              >
                {/* Immagine con dimensioni naturali */}
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image 
                    src="/images/values/collaboration.jpg" 
                    alt="Collaborazione" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                {/* Testo direttamente sotto l'immagine */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-3 text-white">Collaborazione</h4>
                  <p className="text-gray-300">
                    Crediamo nel lavorare a stretto contatto con i nostri clienti per comprendere le loro esigenze uniche e sviluppare soluzioni su misura che affrontino le loro sfide specifiche.
                  </p>
                </div>
              </motion.div>
              
              {/* Valore Privacy */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col"
              >
                {/* Immagine con dimensioni naturali */}
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image 
                    src="/images/values/privacy.jpg" 
                    alt="Privacy" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                {/* Testo direttamente sotto l'immagine */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-3 text-white">Privacy</h4>
                  <p className="text-gray-300">
                    Ci impegniamo a proteggere i tuoi dati e garantire che gli standard di privacy siano mantenuti in tutte le nostre implementazioni AI e processi aziendali.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      

      {/* CTA Sezione Quiz */}
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
              Scopri il Tuo Potenziale di Profitto con l'AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Fai il nostro quiz interattivo per vedere quanto fatturato potresti generare e quali costi potresti risparmiare implementando soluzioni AI nella tua azienda.
            </p>
            
            <motion.div className="flex justify-center">
              <Link href="/it/quiz">
                <motion.div
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-xl inline-block hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fai il Quiz sul Profitto
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sezione Contatti */}
      <section id="contact" className="relative py-16">
        <div className="container-custom mx-auto">
          {/* Intestazione Sezione */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              Contattaci
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Pronto a trasformare la tua azienda con l'AI? Contattaci oggi!
            </p>
            
            {/* Pulsante CTA Calendly Principale */}
            <motion.div 
              className="mb-12"
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
                Fissa una Chiamata
              </motion.button>
              <p className="mt-3 text-gray-300">
                Programma una chiamata strategica di 30 minuti con uno dei nostri esperti AI
              </p>
            </motion.div>
          </motion.div>

          {/* Modulo di Contatto e Informazioni */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Modulo di Contatto */}
            <motion.div 
              className="bg-[#0f1626]/70 backdrop-blur-md border border-[#4facfe]/20 rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Inviaci un messaggio</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#1a2536] border border-[#4facfe]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9d78] text-white"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#1a2536] border border-[#4facfe]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9d78] text-white"
                    placeholder="tua@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Messaggio</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1a2536] border border-[#4facfe]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9d78] text-white"
                    placeholder="Come possiamo aiutarti?"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Invia Messaggio
                </motion.button>
              </form>
            </motion.div>

            {/* Informazioni di Contatto */}
            <motion.div 
              className="bg-[#0f1626]/70 backdrop-blur-md border border-[#4facfe]/20 rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Informazioni Aziendali</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-blue to-[#4facfe] rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Indirizzo</h4>
                    <p className="text-gray-300">Via AI 123, Distretto Tecnologico, Milano, Italia</p>
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
                    <h4 className="text-lg font-semibold text-white mb-1">Telefono</h4>
                    <a href="tel:+391234567890" className="text-gray-300 hover:text-primary-green transition-colors">+39 123 456 7890</a>
                  </div>
                </div>
              </div>

              {/* Mappa o contenuto aggiuntivo */}
              <div className="mt-8 relative h-48 rounded-lg overflow-hidden border border-[#4facfe]/30">
                <Image 
                  src="/images/skyscrapers.png"
                  alt="La nostra location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1626]/70 via-transparent to-transparent flex items-end justify-center pb-4">
                  <span className="text-white font-medium px-4 py-2 bg-[#1a2536]/80 rounded-full backdrop-blur-sm">
                    La Nostra Sede
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
            {/* Informazioni Aziendali */}
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
                Soluzioni AI per le Aziende Italiane
              </p>
            </div>

            {/* Collegamenti Rapidi */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Collegamenti Rapidi
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
                    Servizi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    Chi Siamo
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('quiz-cta')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    Quiz Profitto
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-green transition-colors"
                  >
                    Contatti
                  </button>
                </li>
              </ul>
            </div>

            {/* Informazioni di Contatto */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Contattaci
              </h3>
              <address className="not-italic">
                <p className="mb-2 text-gray-300">
                  Via AI 123, Distretto Tecnologico, Milano, Italia
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
              © 2023 Dolly Strategy. Tutti i diritti riservati.
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