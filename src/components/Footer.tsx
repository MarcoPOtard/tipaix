import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-tipaix-light border-opacity-30 relative">
            {/* Decorative curtain effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tipaix-light to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center md:text-left">
                        <div className="space-x-4 mb-6 text-center md:text-left">
                            <Image
                                src="/images/logo/logo-tipaix.png"
                                alt="Logo Tipaix"
                                width={150}
                                height={40}
                                className="mx-auto md:ms-0"
                            />
                                <div className="text-xs text-purple-200 tracking-[0.15em] uppercase ml-0">
                                    Théâtre d'Improvisation
                                </div>
                        </div>
                        <p className="text-purple-100 font-light leading-relaxed italic">
                            "L'art de créer dans l'instant, la magie du théâtre
                            spontané."
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="font-bold text-tipaix-light mb-6 text-lg tracking-wide">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href=""
                                    className="text-purple-100 hover:text-tipaix-light transition-colors font-light tracking-wide"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/spectacles"
                                    className="text-purple-100 hover:text-tipaix-light transition-colors font-light tracking-wide"
                                >
                                    Spectacles
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/troupe"
                                    className="text-purple-100 hover:text-tipaix-light transition-colors font-light tracking-wide"
                                >
                                    La Tipaix
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-purple-100 hover:text-tipaix-light transition-colors font-light tracking-wide"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-right">
                        <h3 className="font-bold text-tipaix-light mb-6 text-lg tracking-wide">
                            Informations
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/mentions-legales"
                                    className="text-purple-100 hover:text-tipaix-light transition-colors font-light tracking-wide"
                                >
                                    Mentions légales
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://www.micim.fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-100 hover:text-tipaix-light transition-colors font-light tracking-wide"
                                >
                                    Micim
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-tipaix-light border-opacity-20 mt-12 pt-8">
                    <div className="text-center">
                        <p className="text-purple-200 font-light text-sm tracking-wide">
                            © 2025 MICIM • Malicieuse et Intenable Compagnie
                            d&apos;Impro Musicale
                        </p>
                        <p className="text-purple-300 font-light text-xs mt-2 italic">
                            "Chaque représentation est unique, chaque moment est
                            éphémère."
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tipaix-light to-transparent opacity-50"></div>
        </footer>
    );
}
