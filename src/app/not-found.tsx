import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center px-4">
            <div className="text-center max-w-xl">
                <h1 className="font-gagalin text-6xl md:text-8xl text-tipaix-light mb-6 tracking-wider">
                    404
                </h1>
                <div className="w-24 h-px bg-tipaix-light mx-auto mb-8"></div>
                <p className="text-xl text-purple-200 font-light italic mb-12">
                    Cette scène n&apos;existe pas, ou l&apos;improvisation nous a menés ailleurs.
                </p>
                <Link
                    href="/"
                    className="inline-block px-8 py-4 border-2 border-tipaix-light text-tipaix-light font-light tracking-wide hover:bg-tipaix-light hover:text-black transition-all duration-500"
                >
                    Retour à l&apos;accueil
                </Link>
            </div>
        </div>
    );
}
