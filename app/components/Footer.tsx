"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const isItalian = pathname?.startsWith('/it');

  return (
    <footer className="bg-gray-800 text-white py-12">
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
            <p className="mb-2">
              {isItalian
                ? 'Soluzioni AI per le Aziende Italiane'
                : 'AI Solutions for Italian Businesses'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isItalian ? 'Collegamenti Rapidi' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={isItalian ? '/it' : '/'}
                  className="hover:text-gray-300 transition"
                >
                  {isItalian ? 'Home' : 'Home'}
                </Link>
              </li>
              <li>
                <Link
                  href={isItalian ? '/it/services' : '/services'}
                  className="hover:text-gray-300 transition"
                >
                  {isItalian ? 'Servizi' : 'Services'}
                </Link>
              </li>
              <li>
                <Link
                  href={isItalian ? '/it/about' : '/about'}
                  className="hover:text-gray-300 transition"
                >
                  {isItalian ? 'Chi Siamo' : 'About'}
                </Link>
              </li>
              <li>
                <Link
                  href={isItalian ? '/it/blog' : '/blog'}
                  className="hover:text-gray-300 transition"
                >
                  {isItalian ? 'Blog' : 'Blog'}
                </Link>
              </li>
              <li>
                <Link
                  href={isItalian ? '/it/contact' : '/contact'}
                  className="hover:text-gray-300 transition"
                >
                  {isItalian ? 'Contatti' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isItalian ? 'Contattaci' : 'Contact Us'}
            </h3>
            <address className="not-italic">
              <p className="mb-2">
                {isItalian
                  ? 'Via AI 123, Distretto Tecnologico, Milano, Italia'
                  : '123 AI Street, Tech District, Milan, Italy'}
              </p>
              <p className="mb-2">
                <a
                  href="mailto:info@dollystrategy.com"
                  className="hover:text-gray-300 transition"
                >
                  info@dollystrategy.com
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="tel:+391234567890"
                  className="hover:text-gray-300 transition"
                >
                  +39 123 456 7890
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            {isItalian
              ? '© 2023 Dolly Strategy. Tutti i diritti riservati.'
              : '© 2023 Dolly Strategy. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 