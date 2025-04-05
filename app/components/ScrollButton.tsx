"use client";

import { ReactNode } from 'react';

type ScrollButtonProps = {
  targetId: string;
  children: ReactNode;
  className?: string;
  isMobile?: boolean;
};

export default function ScrollButton({ targetId, children, className, isMobile = false }: ScrollButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isMobile) {
    return (
      <div className="lg:hidden">
        <button 
          onClick={handleClick}
          className={className}
        >
          {children}
        </button>
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <button 
        onClick={handleClick}
        className={className}
      >
        {children}
      </button>
    </div>
  );
} 