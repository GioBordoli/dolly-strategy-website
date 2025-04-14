"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

// Service cards data
const serviceCards = [
  {
    title: "Automazione",
    color: "#1a365d", // primary-blue
    image: "/images/services/automation.jpg",
    description: "Semplifica i processi aziendali con le nostre soluzioni di automazione AI. Risparmia tempo e risorse aumentando la produttività.",
    benefits: [
      "Riduzione del carico di lavoro manuale e dei costi operativi",
      "Minimizzazione degli errori umani e aumento della precisione",
      "Liberazione del tempo prezioso dei dipendenti per compiti strategici",
      "Scalare le operazioni in modo efficiente"
    ],
    quote: "Le nostre soluzioni di automazione sono create su misura per affrontare le sfide uniche del tuo flusso di lavoro."
  },
  {
    title: "Formazione",
    color: "#1a365d", // primary-blue
    image: "/images/services/training.jpg",
    description: "Porta il tuo team all'avanguardia con i nostri programmi di formazione AI completi. Impara a sfruttare l'AI nelle operazioni quotidiane.",
    benefits: [
      "Percorsi di apprendimento personalizzati per ruoli diversi",
      "Workshop pratici ed esercizi applicativi",
      "Supporto continuo e sessioni di follow-up",
      "Materiali aggiornati sulle ultime tendenze dell'AI"
    ],
    quote: "Dota il tuo team delle conoscenze e delle competenze necessarie per eccellere nel panorama aziendale guidato dall'AI."
  },
  {
    title: "Consulenza",
    color: "#1a365d", // primary-blue
    image: "/images/services/consulting.jpg",
    description: "I nostri consulenti esperti analizzeranno le esigenze della tua azienda e forniranno soluzioni AI su misura per affrontare le tue sfide specifiche.",
    benefits: [
      "Valutazione approfondita delle tue operazioni attuali",
      "Identificazione delle opportunità per l'integrazione dell'AI",
      "Sviluppo di un piano di implementazione strategico",
      "Analisi ROI e metriche di performance"
    ],
    quote: "Traduciamo concetti AI complessi in applicazioni aziendali pratiche che forniscono risultati misurabili."
  },
  {
    title: "Soluzioni Personalizzate",
    color: "#2d9d78", // primary-green
    image: "/images/services/custom_solutions.jpg",
    description: "Non trovi quello che stai cercando? Ci specializziamo nello sviluppo di soluzioni AI personalizzate su misura per le tue esigenze aziendali uniche.",
    benefits: [
      "Sessioni di scoperta collaborative",
      "Sviluppo e test di prototipi",
      "Perfezionamento iterativo basato sul feedback",
      "Integrazione perfetta con i sistemi esistenti"
    ],
    quote: "Raccontaci le tue sfide e creeremo una soluzione AI che le affronti efficacemente."
  }
];

// Star field background component with parallax effect
const StarField = () => {
  const [stars, setStars] = useState<{x: number, y: number, z: number, size: number, opacity: number}[]>([]);
  const mouseRef = useRef<{x: number, y: number}>({ x: 0, y: 0 });
  
  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    // Create stars with varying distance (z-index)
    const starCount = 300;
    const newStars = [];
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random(), // z value between 0 and 1 (distance factor)
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
    
    setStars(newStars);
    
    // Animate stars for subtle movement
    const animateStars = () => {
      setStars(prev => 
        prev.map(star => {
          // Calculate parallax offset based on mouse position and star's z-depth
          const parallaxX = mouseRef.current.x * 20 * star.z;
          const parallaxY = mouseRef.current.y * 20 * star.z;
          
          return {
            ...star,
            x: ((star.x + parallaxX / 100) + 100) % 100,
            y: ((star.y + parallaxY / 100) + 100) % 100,
          };
        })
      );
      
      animationFrameId = requestAnimationFrame(animateStars);
    };
    
    let animationFrameId = requestAnimationFrame(animateStars);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-0">
      {stars.map((star, i) => {
        // Larger z value = closer star = more movement
        const twinkleAnimation = `twinkle ${2 + star.z * 3}s ease-in-out infinite ${Math.random() * 2}s`;
        
        return (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size + star.z}px`,
              height: `${star.size + star.z}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${(star.size + star.z) * 2}px rgba(255, 255, 255, ${star.opacity})`,
              animation: Math.random() > 0.7 ? twinkleAnimation : 'none',
              transform: `translateZ(${star.z * 100}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        );
      })}
    </div>
  );
};

// Animated nebula clouds
const Nebulas = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <motion.div 
        className="absolute -top-1/2 right-0 w-full h-full opacity-20 pointer-events-none"
        style={{ y: translateY, x: translateX, rotate }}
      >
        <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full bg-gradient-radial from-primary-blue/30 to-transparent blur-3xl"></div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-full opacity-15 pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]), rotate: useTransform(scrollYProgress, [0, 1], [0, -10]) }}
      >
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-full bg-gradient-radial from-primary-green/30 to-transparent blur-3xl"></div>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 opacity-20 pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -70]), rotate: useTransform(scrollYProgress, [0, 1], [0, 20]) }}
      >
        <div className="absolute w-full h-full rounded-full bg-gradient-radial from-purple-500/20 to-transparent blur-3xl"></div>
      </motion.div>
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
        <h3 className="text-lg font-bold mb-2 text-white">
          {service.title === "Formazione" ? "Include Principali:" : "Vantaggi Principali:"}
        </h3>
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

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <div id="services-page-container" className="relative min-h-screen bg-[#0f1626] text-white overflow-hidden">
      {/* Background elements */}
      <StarField />
      <Nebulas />
      
      <div className="relative z-10 py-24">
        <div className="container-custom">
          {/* Page Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              I Nostri Servizi
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Offriamo una gamma di servizi basati sull'AI per aiutare la tua azienda a prosperare.
            </p>
          </motion.div>

          {/* Services Introduction */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-8">
              In Dolly Strategy, comprendiamo che ogni azienda è unica, con il proprio insieme di sfide e opportunità. I nostri servizi sono progettati per adattarsi alle tue esigenze specifiche, fornendo soluzioni AI su misura che generano risultati reali.
            </p>
          </motion.div>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {serviceCards.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="p-8 md:p-12 rounded-xl bg-gradient-to-br from-[#1a365d]/80 to-[#0f1626]/90 backdrop-blur-md border border-[#2d9d78]/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#2d9d78]">
              Pronto a Trasformare la Tua Azienda?
            </h2>
            <p className="mb-6 max-w-2xl mx-auto text-gray-300">
              Contattaci oggi per discutere di come i nostri servizi AI possono aiutare la tua azienda a raggiungere i suoi obiettivi.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                href="/it/contact" 
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-lg hover:shadow-glow transition-all duration-300"
              >
                Contattaci
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom styles */}
      <style jsx global>{`
        .hover\:shadow-glow:hover {
          box-shadow: 0 0 25px rgba(45, 157, 120, 0.6);
        }
        
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
        
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        
        #services-page-container {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
} 