import Header from './components/Header';
import Footer from './components/Footer';

export default function EnglishLayout({
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