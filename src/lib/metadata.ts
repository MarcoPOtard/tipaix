import { Metadata } from 'next';

interface MetadataConfig {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tipaix.com';
const defaultImage = `${baseUrl}/images/og-image.jpg`;

export function generateMetadata(config: MetadataConfig = {}): Metadata {
    const {
        title = 'Tipaix - Théâtre d\'Improvisation',
        description = 'Découvrez la Tipaix, troupe de théâtre d\'improvisation du pays d\'Aix. Spectacles, matchs d\'impro et ateliers pour tous les âges. L\'art de l\'improvisation théâtrale à l\'état pur.',
        keywords = [
            'théâtre improvisation',
            'impro',
            'match improvisation',
            'spectacle',
            'Aix en Provence',
            'troupe théâtre',
            'Tipaix',
            'théâtre amateur',
            'improvisation théâtrale',
            'spectacle vivant'
        ],
        image = defaultImage,
        url = baseUrl,
        type = 'website',
        author = 'Tipaix - Troupe de théâtre d\'improvisation',
        publishedTime,
        modifiedTime
    } = config;

    const fullTitle = title === 'Tipaix - Théâtre d\'Improvisation' ? title : `${title} | Tipaix`;

    return {
        title: fullTitle,
        description,
        keywords: keywords.join(', '),
        authors: [{ name: author }],
        creator: author,
        publisher: 'Tipaix',
        
        // Open Graph
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: 'Tipaix',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                }
            ],
            locale: 'fr_FR',
            type,
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },
        
        // Twitter
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [image],
            creator: '@tipaix',
            site: '@tipaix',
        },
        
        // Additional meta tags
        alternates: {
            canonical: url,
        },
        
        // Robots
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        
        // Verification (à personnaliser avec vos codes)
        verification: {
            google: 'your-google-verification-code',
            // yandex: 'your-yandex-verification-code',
            // yahoo: 'your-yahoo-verification-code',
        },
        
        // App specific
        applicationName: 'Tipaix',
        category: 'Entertainment',
        classification: 'Théâtre d\'improvisation',
        
        // Language and locale
        other: {
            'content-language': 'fr-FR',
            'geo.region': 'FR-13',
            'geo.placename': 'Aix-en-Provence',
            'geo.position': '43.529742;5.447427',
            'ICBM': '43.529742, 5.447427',
        }
    };
}