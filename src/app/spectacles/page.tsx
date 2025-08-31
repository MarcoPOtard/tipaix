import ShowCard from '@/components/ShowCard';
import { mockShows } from '@/data/shows';
import Image from 'next/image';

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
              "Chaque représentation est un voyage unique dans l'univers de l'improvisation théâtrale, 
              où l'authenticité rencontre la virtuosité, où le spontané côtoie le maîtrisé."
            </p>
          </div>
          
          <div className={`grid gap-8 justify-items-center ${
            mockShows.length === 1 
              ? 'grid-cols-1 max-w-sm mx-auto' 
              : mockShows.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' 
              : mockShows.length % 3 === 1 && mockShows.length > 3
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {mockShows.map((show, index) => (
              <ShowCard key={show.id} show={show} index={index} />
            ))}
          </div>

          {/* Decorative quote section */}
          <div className="mt-24 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="text-6xl text-tipaix-light opacity-20 font-gagalin leading-none">"</div>
                <blockquote className="text-lg md:text-xl text-purple-200 font-light italic leading-relaxed -mt-8 mb-6">
                  L'improvisation théâtrale est cet art délicat où chaque instant compte, 
                  où chaque émotion trouve sa vérité, où la magie naît de la rencontre 
                  entre les comédiens et leur public.
                </blockquote>
                <div className="text-6xl text-tipaix-light opacity-20 font-gagalin leading-none float-right -mb-6">"</div>
              </div>
              
              <div className="w-16 h-px bg-tipaix-light mx-auto mt-8 mb-4"></div>
              <cite className="text-tipaix-light font-light tracking-wide">Troupe Tipaix</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}