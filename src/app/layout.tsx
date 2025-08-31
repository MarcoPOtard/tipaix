import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tipaix - Théâtre d\'Improvisation',
  description: 'Troupe de théâtre d\'improvisation amateur - L\'art de l\'impro à l\'état pur',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <Header />
          <main className="flex-1 relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}