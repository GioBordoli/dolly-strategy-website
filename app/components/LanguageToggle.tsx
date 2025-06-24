"use client";

import { usePathname, useRouter } from 'next/navigation';

interface LanguageToggleProps {
  className?: string;
  withFlags?: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  className = '',
  withFlags = true 
}) => {
  const pathname = usePathname();
  const router = useRouter();
  
  const currentLang = pathname?.startsWith('/it') ? 'it' : 'en';
  const isItalian = currentLang === 'it';
  
  const toggleLanguage = () => {
    const newPath = isItalian 
      ? pathname?.replace('/it', '') || '/'
      : `/it${pathname || ''}`;
    
    router.push(newPath);
    
    // Analytics tracking (if gtag is available)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lang_switch', {
        from: currentLang,
        to: isItalian ? 'en' : 'it'
      });
    }
  };
  
  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors ${className}`}
      aria-label={`Switch to ${isItalian ? 'English' : 'Italian'}`}
      title={`Switch to ${isItalian ? 'English' : 'Italian'}`}
    >
      {withFlags && (
        <span className="text-lg mr-1" aria-hidden="true">
          {isItalian ? '🇬🇧' : '🇮🇹'}
        </span>
      )}
      <span className="font-medium text-sm">
        {isItalian ? 'EN' : 'IT'}
      </span>
    </button>
  );
};

export default LanguageToggle; 