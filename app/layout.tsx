import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dolly Strategy | AI Solutions for Italian Businesses',
  description: 'Dolly Strategy helps businesses leverage AI technology to improve efficiency and drive growth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
} 