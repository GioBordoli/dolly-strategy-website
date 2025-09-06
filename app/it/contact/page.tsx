"use client";

import { useEffect } from 'react';
import Script from 'next/script';

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

export default function ContactPageItalian() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/dollystrategy/30min'
      });
    }
  };

  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contattaci</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mettiti in contatto con il nostro team per discutere di come possiamo aiutarti a trasformare la tua azienda con l&apos;AI.
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="text-center mb-12">
          <button 
            onClick={openCalendly}
            className="btn bg-primary-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition transform hover:-translate-y-1"
          >
            Prenota una Chiamata Gratuita
          </button>
          <p className="mt-4 text-gray-600">
            Programma una consulenza gratuita di 30 minuti con un nostro esperto
          </p>
        </div>

        {/* Company Information Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Informazioni Aziendali</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-2">Indirizzo</h3>
                <p className="text-gray-700 mb-6">
                  Via Porta 9, Como<br />
                  Italia, 22100
                </p>
                
                <h3 className="text-lg font-bold mb-2">Orari di Lavoro</h3>
                <p className="text-gray-700">
                  Lunedì - Venerdì: 9:00 - 18:00<br />
                  Sabato - Domenica: Chiuso
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Contatto</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@dollystrategy.com" className="text-primary-blue hover:underline">
                    info@dollystrategy.com
                  </a>
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Telefono:</strong>{" "}
                  <a href="tel:+393333249234" className="text-primary-blue hover:underline">
                    +39 333 324 9234
                  </a>
                </p>
                
                <h3 className="text-lg font-bold mb-2">Seguici</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-blue hover:text-primary-green">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-blue hover:text-primary-green">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calendly Scripts */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </div>
    </div>
  );
} 