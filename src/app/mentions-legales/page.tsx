import Image from 'next/image';

export default function MentionsLegalesPage() {
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
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
                <div className="absolute inset-0 bg-tipaix-light mix-blend-multiply opacity-5"></div>
            </div>

            <div className="relative z-20 py-32">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="font-gagalin text-5xl md:text-6xl text-tipaix-light mb-8 tracking-wider">
                            Mentions Légales
                        </h1>
                        <div className="w-24 h-px bg-tipaix-light mx-auto"></div>
                    </div>

                    <div className="bg-black bg-opacity-70 border border-tipaix-light border-opacity-20 backdrop-blur-sm">
                        {/* Decorative frame */}
                        <div className="absolute -inset-4 -z-10 border border-tipaix-light border-opacity-10"></div>

                        <div className="p-12 space-y-12">
                            <section>
                                <h2 className="font-gagalin text-2xl text-tipaix-light mb-6 tracking-wide">
                                    Éditeur du Site
                                </h2>
                                <div className="w-12 h-px bg-tipaix-light mb-6"></div>
                                <div className="text-purple-200 font-light space-y-2 leading-relaxed">
                                    <p>
                                        <span className="text-tipaix-light font-medium">
                                            MICIM
                                        </span>
                                    </p>
                                    <p>
                                        Malicieuse et Intenable Compagnie
                                        d‘Impro Musicale
                                    </p>
                                    <p>Association loi 1901</p>
                                    <p>124 boulevard de l'égalité - Les florentines A1</p>
                                    <p>13320 Bouc Bel Air</p>
                                    <p>Email : micim@micim.fr</p>
                                    <p>
                                        Site web :{' '}
                                        <a
                                            href="https://www.micim.fr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-tipaix-light hover:text-purple-300 underline"
                                        >
                                            www.micim.fr
                                        </a>
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-gagalin text-2xl text-tipaix-light mb-6 tracking-wide">
                                    Directeur de Publication
                                </h2>
                                <div className="w-12 h-px bg-tipaix-light mb-6"></div>
                                <p className="text-purple-200 font-light leading-relaxed">
                                    Président de l'association MICIM
                                </p>
                            </section>

                            <section>
                                <h2 className="font-gagalin text-2xl text-tipaix-light mb-6 tracking-wide">
                                    Hébergement
                                </h2>
                                <div className="w-12 h-px bg-tipaix-light mb-6"></div>
                                <div className="text-purple-200 font-light space-y-2 leading-relaxed">
                                    <p>
                                        <span className="text-tipaix-light font-medium">
                                            Vercel Inc.
                                        </span>
                                    </p>
                                    <p>340 S Lemon Ave #4133</p>
                                    <p>Walnut, CA 91789</p>
                                    <p>États-Unis</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-gagalin text-2xl text-tipaix-light mb-6 tracking-wide">
                                    Propriété Intellectuelle
                                </h2>
                                <div className="w-12 h-px bg-tipaix-light mb-6"></div>
                                <div className="text-purple-200 font-light space-y-4 leading-relaxed">
                                    <p>
                                        Le contenu de ce site web (textes,
                                        images, vidéos, etc.) est la propriété
                                        de l'association MICIM et de La Tipaix,
                                        sauf mention contraire. Toute
                                        reproduction, même partielle, est
                                        interdite sans autorisation écrite
                                        préalable.
                                    </p>
                                    <p>
                                        Les marques citées sur ce site sont la
                                        propriété de leurs propriétaires
                                        respectifs.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-gagalin text-2xl text-tipaix-light mb-6 tracking-wide">
                                    Formulaire de Contact
                                </h2>
                                <div className="w-12 h-px bg-tipaix-light mb-6"></div>
                                <div className="text-purple-200 font-light space-y-4 leading-relaxed">
                                    <p>
                                        Le site met à disposition un formulaire
                                        de contact permettant aux visiteurs de
                                        nous adresser leurs demandes.
                                    </p>
                                    <p>
                                        <span className="text-tipaix-light font-medium">
                                            Données collectées :
                                        </span>{' '}
                                        nom, adresse email, sujet et contenu du
                                        message.
                                    </p>
                                    <p>
                                        <span className="text-tipaix-light font-medium">
                                            Finalité :
                                        </span>{' '}
                                        ces données sont utilisées exclusivement
                                        pour répondre à vos demandes de
                                        renseignements.
                                    </p>
                                    <p>
                                        <span className="text-tipaix-light font-medium">
                                            Traitement :
                                        </span>{' '}
                                        les messages sont envoyés directement
                                        par email aux responsables de MICIM et
                                        de La Tipaix.
                                    </p>
                                    <p>
                                        <span className="text-tipaix-light font-medium">
                                            Conservation :
                                        </span>{' '}
                                        les données sont conservées pendant une
                                        durée maximale de 1 an.
                                    </p>
                                    <p>
                                        <span className="text-tipaix-light font-medium">
                                            Responsables du traitement :
                                        </span>{' '}
                                        Sébastien Chombart et Marc Potard.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-gagalin text-2xl text-tipaix-light mb-6 tracking-wide">
                                    Protection des Données Personnelles
                                </h2>
                                <div className="w-12 h-px bg-tipaix-light mb-6"></div>
                                <div className="text-purple-200 font-light space-y-4 leading-relaxed">
                                    <p>
                                        Conformément à la loi "Informatique et
                                        Libertés" du 6 janvier 1978 modifiée et
                                        au Règlement Général sur la Protection
                                        des Données (RGPD), vous disposez d'un
                                        droit d'accès, de rectification, de
                                        portabilité et d'effacement de vos
                                        données.
                                    </p>
                                    <p>
                                        Vos données ne sont pas transmises à des
                                        tiers et ne font l'objet d'aucune
                                        commercialisation.
                                    </p>
                                    <p>
                                        Pour exercer vos droits, contactez-nous
                                        à :
                                        <span className="text-tipaix-light font-medium">
                                            {' '}
                                            micim@micim.fr
                                        </span>
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-gagalin text-2xl text-tipaix-light mb-6 tracking-wide">
                                    Cookies
                                </h2>
                                <div className="w-12 h-px bg-tipaix-light mb-6"></div>
                                <p className="text-purple-200 font-light leading-relaxed">
                                    Ce site ne utilise aucun cookie. Il
                                    fonctionne sans système de tracking, de
                                    publicité ou de collecte de données de
                                    navigation.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-gagalin text-2xl text-tipaix-light mb-6 tracking-wide">
                                    Responsabilité
                                </h2>
                                <div className="w-12 h-px bg-tipaix-light mb-6"></div>
                                <div className="text-purple-200 font-light space-y-4 leading-relaxed">
                                    <p>
                                        L'association MICIM s'efforce d'assurer
                                        l'exactitude et la mise à jour des
                                        informations diffusées sur ce site.
                                        Toutefois, elle ne peut garantir
                                        l'exactitude, la précision ou
                                        l'exhaustivité des informations mises à
                                        disposition.
                                    </p>
                                    <p>
                                        En conséquence, l'association décline
                                        toute responsabilité pour toute
                                        imprécision, inexactitude ou omission
                                        portant sur des informations disponibles
                                        sur ce site.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <div className="w-12 h-px bg-tipaix-light mb-6"></div>
                                <div className="text-purple-200 font-light space-y-4 leading-relaxed">
                                    <p>
                                        Site réalisé par{' '}
                                        <a
                                            href="https://www.marcpotard.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-tipaix-light hover:text-purple-300 underline"
                                        >
                                            Marc Potard
                                        </a>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
