import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dolly Strategy | Soluzioni AI per le Aziende Italiane',
  description: 'Dolly Strategy aiuta le aziende a sfruttare la tecnologia AI per migliorare l\'efficienza e guidare la crescita',
};

export default function ItalianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-16 flex-grow">{children}</main>
      <Footer />
    </>
  );
} 