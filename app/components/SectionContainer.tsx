import { ReactNode } from 'react';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  withPadding?: boolean;
};

export default function SectionContainer({ 
  children, 
  className = '', 
  withPadding = true 
}: SectionContainerProps) {
  return (
    <section className={`mb-12 sm:mb-16 ${withPadding ? 'py-8 sm:py-12' : ''} ${className}`}>
      {children}
    </section>
  );
} 