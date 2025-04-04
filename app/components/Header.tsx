"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

// This would normally use the language context, but we'll keep it simple for now
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Simplified language detection - in a real app, we'd use the language context
  const currentLang = pathname?.startsWith('/it') ? 'it' : 'en';
  const isItalian = currentLang === 'it';
  
  const toggleLanguage = () => {
    const newPath = isItalian 
      ? pathname?.replace('/it', '') 
      : `/it${pathname || ''}`;
    router.push(newPath || '/');
  };

  const navItems = [
    { name: isItalian ? 'Home' : 'Home', href: isItalian ? '/it' : '/' },
    { name: isItalian ? 'Servizi' : 'Services', href: isItalian ? '/it/services' : '/services' },
    { name: isItalian ? 'Chi Siamo' : 'About', href: isItalian ? '/it/about' : '/about' },
    { name: isItalian ? 'Blog' : 'Blog', href: isItalian ? '/it/blog' : '/blog' },
    { name: isItalian ? 'Contatti' : 'Contact', href: isItalian ? '/it/contact' : '/contact' },
  ];

  return (
    <header className="bg-primary-blue text-white fixed w-full z-10">
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href={isItalian ? '/it' : '/'} className="flex items-center">
            <Image 
              src="/images/white-logo.png" 
              alt="Dolly Strategy Logo" 
              width={160} 
              height={50} 
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-gray-300 transition ${
                  pathname === item.href ? 'font-bold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="hover:text-gray-300 transition"
            >
              {isItalian ? 'EN' : 'IT'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
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
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-gray-300 transition ${
                    pathname === item.href ? 'font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Switcher */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="hover:text-gray-300 transition text-left"
              >
                {isItalian ? 'EN' : 'IT'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 