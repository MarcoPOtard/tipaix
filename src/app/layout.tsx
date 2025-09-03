import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/metadata';
import { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = generateMetadata();

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#8B5A96' },
        { media: '(prefers-color-scheme: dark)', color: '#8B5A96' },
    ],
    colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
        <head>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <meta name="apple-mobile-web-app-title" content="Tipaix" />
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8B5A96" />
            <meta name="msapplication-TileColor" content="#8B5A96" />
            <meta name="format-detection" content="telephone=no" />

        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TheaterGroup",
              "name": "Tipaix",
              "description": "Troupe de théâtre d'improvisation du pays d'Aix spécialisée dans les matchs d'impro et spectacles d'improvisation théâtrale",
              "url": "https://tipaix.com",
              "logo": "https://tipaix.com/images/logo.png",
              "image": "https://tipaix.com/images/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Aix-en-Provence",
                "addressRegion": "Provence-Alpes-Côte d'Azur",
                "addressCountry": "FR"
              },
              "foundingDate": "2024",
              "genre": ["Théâtre d'improvisation", "Match d'impro", "Spectacle vivant"],
              "sameAs": [
                "https://www.instagram.com/tipaix_micim"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "micim@micim.fr"
              }
            })
          }}
        />
      </head>
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