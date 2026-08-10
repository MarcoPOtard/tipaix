import Image from "next/image";
import SanityImage from "@/components/SanityImage";
import { PortableText } from "next-sanity";
import { generateMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import { TROUPE_PAGE_QUERY } from '@/sanity/queries';

export const metadata: Metadata = generateMetadata({
    title: 'La Troupe - Tipaix',
    description: 'Découvrez l\'histoire de la Tipaix, troupe de théâtre d\'improvisation fondée à Aix-en-Provence. Notre philosophie artistique et notre passion pour l\'art de l\'impro.',
    keywords: [
        'troupe Tipaix',
        'histoire théâtre improvisation',
        'Sébastien Chombart',
        'improvisation Aix en Provence',
        'philosophie théâtrale',
        'art improvisation',
        'match impro origine'
    ],
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.tipaix.fr'}/troupe`,
});

export default async function TroupePage() {
    const { data: troupePage } = await sanityFetch({ query: TROUPE_PAGE_QUERY });

    return (
        <div className="relative min-h-screen bg-black">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/images/troupe/troupe1.jpeg"
                    alt="La Tipaix"
                    fill
                    sizes="100vw"
                    className="object-cover filter sepia-[0.4] contrast-110"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black via-black/85 to-black"></div>
                <div className="absolute inset-0 bg-tipaix-light mix-blend-multiply opacity-5"></div>
            </div>

            <div className="relative z-20 py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h1 className="font-gagalin text-5xl md:text-6xl text-tipaix-light mb-8 tracking-wider">
                            La Tipaix
                        </h1>
                        <div className="w-24 h-px bg-tipaix-light mx-auto mb-8"></div>
                        <p className="text-xl text-purple-200 font-light italic max-w-4xl mx-auto leading-relaxed">
                            &quot;{troupePage?.introQuote}&quot;
                        </p>
                    </div>

                    {/* Histoire de la compagnie */}
                    <section className="mb-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="relative group -inset-4 border border-tipaix-light border-opacity-20 p-4">
                                    {/* Decorative frame */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tipaix-light"></div>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-tipaix-light"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-tipaix-light"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tipaix-light"></div>

                                    <div className="relative h-96 overflow-hidden">
                                        <SanityImage
                                            image={troupePage?.genesisImage}
                                            alt="Compagnie Tipaix en répétition"
                                            sizes="(min-width: 1024px) 50vw, 100vw"
                                            className="object-cover filter sepia-[0.3] contrast-110 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-tipaix-light mix-blend-multiply opacity-15 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <h2 className="font-gagalin text-4xl text-tipaix-light mb-8 tracking-wide">
                                    Notre Genèse
                                </h2>
                                <div className="w-16 h-px bg-tipaix-light mb-8"></div>

                                <div className="space-y-6 text-lg text-purple-200 font-light leading-relaxed">
                                    {troupePage?.genesisText && (
                                        <PortableText value={troupePage.genesisText} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Philosophie */}
                    <section>
                        <div className="bg-black bg-opacity-60 border border-tipaix-light border-opacity-20 backdrop-blur-xs p-12">
                            <div className="text-center mb-12">
                                <h2 className="font-gagalin text-4xl text-tipaix-light mb-8 tracking-wide">
                                    Notre Philosophie Artistique
                                </h2>
                                <div className="w-16 h-px bg-tipaix-light mx-auto"></div>
                            </div>

                            <div className="text-purple-200 font-light leading-relaxed text-center">
                                {troupePage?.philosophyText && (
                                    <PortableText value={troupePage.philosophyText} />
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
