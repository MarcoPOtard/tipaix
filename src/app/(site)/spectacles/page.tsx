import ShowCard from '@/components/ShowCard';
import { getUpcomingShows } from '@/lib/shows';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { generateMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import { SPECTACLES_PAGE_QUERY, SHOWS_QUERY } from '@/sanity/queries';

export const metadata: Metadata = generateMetadata({
    title: 'Nos Spectacles - Tipaix',
    description: 'Découvrez tous nos spectacles de théâtre d\'improvisation : matchs d\'impro, représentations et événements. Réservez vos places pour vivre l\'art de l\'improvisation en direct.',
    keywords: [
        'spectacles Tipaix',
        'match improvisation',
        'théâtre improvisation spectacle',
        'représentation impro',
        'réservation spectacle',
        'match impro Aix',
        'événement théâtre'
    ],
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.tipaix.fr'}/spectacles`,
});

export default async function SpectaclesPage() {
    const [{ data: spectaclesPage }, { data: shows }] = await Promise.all([
        sanityFetch({ query: SPECTACLES_PAGE_QUERY }),
        sanityFetch({ query: SHOWS_QUERY }),
    ]);

    const upcomingShows = getUpcomingShows(shows);

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
                    <div className="text-center mb-16">
                        <h1 className="font-gagalin text-5xl md:text-6xl text-tipaix-light mb-8 tracking-wider">
                            Nos spectacles
                        </h1>
                        <div className="w-24 h-px bg-tipaix-light mx-auto mb-8"></div>
                        <p className="text-xl text-purple-200 font-light italic max-w-3xl mx-auto leading-relaxed">
                            &quot;{spectaclesPage?.introQuote}&quot;
                        </p>
                    </div>

                    <div
                        className={`grid gap-8 mb-32 justify-items-center ${
                            upcomingShows.length === 1
                                ? 'grid-cols-1 max-w-sm mx-auto'
                                : upcomingShows.length === 2
                                ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto'
                                : upcomingShows.length % 3 === 1 &&
                                  upcomingShows.length > 3
                                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        }`}
                    >
                        {upcomingShows.map((show) => (
                            <ShowCard key={show._id} show={show} />
                        ))}
                    </div>

                    <div className=" mb-16 max-w-2xl mx-auto">
                        <h2 className="font-gagalin text-center text-5xl md:text-6xl text-tipaix-light mb-8 tracking-wider">
                            Les différents spectacles
                        </h2>
                        <div className="w-24 h-px bg-tipaix-light mx-auto mb-8"></div>

                        <div className="space-y-6 text-lg text-purple-200 font-light leading-relaxed">
                            <h2 className="text-2xl md:text-3xl text-tipaix-light mb-8 tracking-wider font-bold">
                                {spectaclesPage?.explanationHeading}
                            </h2>

                            {spectaclesPage?.explanationText && (
                                <PortableText value={spectaclesPage.explanationText} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
