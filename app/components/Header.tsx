"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Simplified language detection
  const currentLang = pathname?.startsWith('/it') ? 'it' : 'en';
  const isItalian = currentLang === 'it';

  const navItems = [
    { name: isItalian ? 'Home' : 'Home', href: isItalian ? '/it' : '/' },
    { name: isItalian ? 'Servizi' : 'Services', href: isItalian ? '/it/services' : '/services' },
    { name: isItalian ? 'Chi Siamo' : 'About', href: isItalian ? '/it/about' : '/about' },
    { name: isItalian ? 'Quiz' : 'Profit Quiz', href: isItalian ? '/it/quiz' : '/quiz' },
    { name: isItalian ? 'Blog' : 'Blog', href: isItalian ? '/it/blog' : '/blog' },
    { name: isItalian ? 'Contatti' : 'Contact', href: isItalian ? '/it/contact' : '/contact' },
  ];

  return (
    <header className="bg-primary-blue text-white fixed w-full z-50 shadow-md">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href={isItalian ? '/it' : '/'} className="flex items-center">
            <Image 
              src="/images/white-logo.png" 
              alt="Dolly Strategy Logo" 
              width={80} 
              height={24} 
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  pathname === item.href ? 'font-bold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <LanguageToggle className="ml-4" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${
                    pathname === item.href ? 'font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Switcher */}
              <div onClick={() => setMobileMenuOpen(false)}>
                <LanguageToggle className="w-full text-left" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 