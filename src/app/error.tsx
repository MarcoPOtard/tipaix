'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center px-4">
            <div className="text-center max-w-xl">
                <h1 className="font-gagalin text-4xl md:text-5xl text-tipaix-light mb-6 tracking-wider">
                    Un imprévu sur scène
                </h1>
                <div className="w-24 h-px bg-tipaix-light mx-auto mb-8"></div>
                <p className="text-xl text-purple-200 font-light italic mb-12">
                    Une erreur inattendue est survenue. Réessayez, ou revenez plus tard.
                </p>
                <button
                    type="button"
                    onClick={reset}
                    className="inline-block px-8 py-4 border-2 border-tipaix-light text-tipaix-light font-light tracking-wide hover:bg-tipaix-light hover:text-black transition-all duration-500"
                >
                    Réessayer
                </button>
            </div>
        </div>
    );
}
