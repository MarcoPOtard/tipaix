import Image from "next/image";
import { generateMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

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
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/troupe`,
});

export default function TroupePage() {
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
                    <div className="text-center mb-20">
                        <h1 className="font-gagalin text-5xl md:text-6xl text-tipaix-light mb-8 tracking-wider">
                            La Tipaix
                        </h1>
                        <div className="w-24 h-px bg-tipaix-light mx-auto mb-8"></div>
                        <p className="text-xl text-purple-200 font-light italic max-w-4xl mx-auto leading-relaxed">
                            "Une famille de jeunes artistes unis par l'envie
                            d'apprendre l'improvisation théâtrale, où chaque
                            personnalité contribue à la magie collective de la
                            création spontanée."
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
                                        <Image
                                            src="/images/troupe/troupe1.jpeg"
                                            alt="Compagnie Tipaix en répétition"
                                            fill
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
                                    <p>
                                        La Tipaix pour troupe d'improvisation du
                                        pays d'Aix est née de l'initiative d'un
                                        improvisateur d'Aix en Provence membre
                                        de l'association Les Fondus depuis près
                                        de 15 ans.
                                        <br />
                                        Sébastien Chombart ou Séboune pour les
                                        intimes.
                                    </p>

                                    <p>
                                        L'objectif de ce projet est de faire
                                        découvrir l'art de l'improvisation
                                        théâtrale auprès des adolescents au
                                        travers du concept phare de l'impro !!
                                        <br />
                                        <strong>
                                            "Le match d'improvisation"
                                        </strong>
                                    </p>

                                    <p>
                                        Sous la forme d'un jeu théâtrale, le
                                        jeune improvisateur ou improvisatrice va
                                        développer de puissants outils
                                        personnels.
                                        <br />
                                        Développement de la Confiance en Soi,
                                        Stimulation de la Créativité,
                                        Amélioration des Compétences Sociales,
                                        Développement du Langage et de
                                        l’Expression, Gestion des Émotions,
                                        Développement de l’Adaptabilité,
                                        Renforcement de la Concentration et
                                        construction d'une pensée critique.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Philosophie */}
                    <section>
                        <div className="bg-black bg-opacity-60 border border-tipaix-light border-opacity-20 backdrop-blur-sm p-12">
                            <div className="text-center mb-12">
                                <h2 className="font-gagalin text-4xl text-tipaix-light mb-8 tracking-wide">
                                    Notre Philosophie Artistique
                                </h2>
                                <div className="w-16 h-px bg-tipaix-light mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="text-center">
                                    <div className="text-5xl mb-6 opacity-70">
                                        🎭
                                    </div>
                                    <h3 className="text-xl font-medium text-tipaix-light mb-6 tracking-wide">
                                        Créativité
                                    </h3>
                                    <div className="w-8 h-px bg-tipaix-light mx-auto mb-6"></div>
                                    <p className="text-purple-200 font-light leading-relaxed">
                                        Nous croyons en la puissance
                                        transcendante de l'imagination
                                        collective et en la beauté éphémère de
                                        l'instant créatif.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="text-5xl mb-6 opacity-70">
                                        🤝
                                    </div>
                                    <h3 className="text-xl font-medium text-tipaix-light mb-6 tracking-wide">
                                        Bienveillance
                                    </h3>
                                    <div className="w-8 h-px bg-tipaix-light mx-auto mb-6"></div>
                                    <p className="text-purple-200 font-light leading-relaxed">
                                        L'improvisation se nourrit de confiance
                                        mutuelle et de l'acceptation généreuse
                                        des propositions de chaque artiste.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="text-5xl mb-6 opacity-70">
                                        ✨
                                    </div>
                                    <h3 className="text-xl font-medium text-tipaix-light mb-6 tracking-wide">
                                        Émotion
                                    </h3>
                                    <div className="w-8 h-px bg-tipaix-light mx-auto mb-6"></div>
                                    <p className="text-purple-200 font-light leading-relaxed">
                                        Au cœur de notre art : le plaisir
                                        authentique de jouer, de créer et de
                                        partager des moments d'émotion pure avec
                                        notre public.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
