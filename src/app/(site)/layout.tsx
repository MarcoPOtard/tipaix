import '../globals.css';
import { Inter } from 'next/font/google';
import { stegaClean } from '@sanity/client/stega';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity/visual-editing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DisableDraftMode from '@/components/DisableDraftMode';
import { generateMetadata } from '@/lib/metadata';
import { Metadata, Viewport } from 'next';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { SITE_SETTINGS_QUERY } from '@/sanity/queries';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.tipaix.fr';

export const metadata: Metadata = {
    ...generateMetadata(),
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    other: {
        'msapplication-TileColor': '#8B5A96',
        'apple-mobile-web-app-title': 'Tipaix',
        'format-detection': 'telephone=no',
    },
};

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

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: siteSettings } = await sanityFetch({ query: SITE_SETTINGS_QUERY });

  // `href`/`platform`/`url` pilotent la navigation et le JSON-LD : ils
  // doivent être propres. `label` reste éditable en direct (Visual Editing).
  const navigation = siteSettings?.navigation?.map((item) => ({
    ...item,
    href: stegaClean(item.href),
  }));
  const socialLinks = siteSettings?.socialLinks?.map((social) => ({
    ...social,
    platform: stegaClean(social.platform),
    url: stegaClean(social.url),
  }));

  const sameAs = (socialLinks ?? [])
    .map((social) => social.url)
    .filter((url): url is string => Boolean(url));

  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TheaterGroup",
            "name": "Tipaix",
            "description": "Troupe de théâtre d'improvisation du pays d'Aix spécialisée dans les matchs d'impro et spectacles d'improvisation théâtrale",
            "url": baseUrl,
            "logo": `${baseUrl}/images/logo/logo-tipaix.png`,
            "image": `${baseUrl}/images/groupe-match.jpeg`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Aix-en-Provence",
              "addressRegion": "Provence-Alpes-Côte d'Azur",
              "addressCountry": "FR"
            },
            "foundingDate": "2024",
            "genre": ["Théâtre d'improvisation", "Match d'impro", "Spectacle vivant"],
            "sameAs": sameAs,
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "micim@micim.fr"
            }
          })
        }}
      />
      <div className={`${inter.className} min-h-screen flex flex-col bg-linear-to-br from-gray-900 via-black to-gray-800`}>
        <Header navigation={navigation} />
        <main className="flex-1 relative">
          {children}
        </main>
        <Footer navigation={navigation} socialLinks={socialLinks} />
      </div>
      <SanityLive />
      {isDraftMode && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </>
  );
}
