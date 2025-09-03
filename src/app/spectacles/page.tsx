import ShowCard from '@/components/ShowCard';
import { mockShows } from '@/data/shows';
import Image from 'next/image';
import { generateMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

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
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/spectacles`,
});

export default function SpectaclesPage() {
    return (
        <div className="relative min-h-screen bg-black">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/images/troupe/troupe1.jpeg"
                    alt="La Tipaix"
                    fill
                    className="object-cover filter sepia-[0.4] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black"></div>
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
                            "Chaque représentation est un voyage unique dans
                            l'univers de l'improvisation théâtrale, où
                            l'authenticité rencontre la virtuosité, où le
                            spontané côtoie le maîtrisé."
                        </p>
                    </div>

                    <div
                        className={`grid gap-8 mb-32 justify-items-center ${
                            mockShows.length === 1
                                ? 'grid-cols-1 max-w-sm mx-auto'
                                : mockShows.length === 2
                                ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto'
                                : mockShows.length % 3 === 1 &&
                                  mockShows.length > 3
                                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        }`}
                    >
                        {mockShows.map((show, index) => (
                            <ShowCard key={show.id} show={show} index={index} />
                        ))}
                    </div>

                    <div className=" mb-16 max-w-2xl mx-auto">
                        <h1 className="font-gagalin text-center text-5xl md:text-6xl text-tipaix-light mb-8 tracking-wider">
                            Les différents spectacles
                        </h1>
                        <div className="w-24 h-px bg-tipaix-light mx-auto mb-8"></div>

                        <div className="space-y-6 text-lg text-purple-200 font-light leading-relaxed">
                        <h2 className='text-2xl md:text-3xl text-tipaix-light mb-8 tracking-wider font-bold'>Le Match d’Impro, c’est quoi ?</h2>

                        <p>
                            Imagine un match de sport… mais sans ballon et sans
                            buts. À la place, deux équipes montent sur scène et
                            s’affrontent avec leur seule arme :{' '}
                            <strong className="font-bold">
                                l’imagination !
                            </strong>
                        </p>
                        <p>
                            L’arbitre balance un thème, et hop : les joueurs
                            inventent une histoire complètement folle en
                            quelques secondes. Ça peut être drôle, émouvant,
                            absurde ou carrément épique… et c’est toujours une
                            surprise, même pour eux.
                        </p>
                        <p>
                            Et toi, dans tout ça ? Tu ne restes pas juste
                            spectateur : tu rigoles, tu encourages, tu cries, et
                            surtout…{' '}
                            <strong className="font-bold">tu votes</strong> pour
                            décider quelle équipe gagne.
                        </p>
                        <p>
                            Chaque match est différent, chaque impro est unique,
                            et l’ambiance est toujours au rendez-vous. Bref : si
                            tu veux passer un moment fun, imprévisible et plein
                            d’énergie, viens découvrir le match d’impro !
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
