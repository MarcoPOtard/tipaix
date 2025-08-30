import Image from 'next/image';
import Link from 'next/link';
import ShowCard from '@/components/version3/ShowCard';
import { mockShows } from '@/data/shows';

export default function Version3Home() {
  const upcomingShows = mockShows.slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=1080&fit=crop"
            alt="Scène de théâtre"
            fill
            className="object-cover filter sepia-[0.4] contrast-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
          <div className="absolute inset-0 bg-tipaix-light mix-blend-multiply opacity-10"></div>
        </div>
        
        {/* Vintage stage curtains effect */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
        
        <div className="relative z-20 h-full flex items-start justify-center text-center px-4 pt-56">
          <div className="max-w-5xl">
            {/* Decorative elements */}
            
            <h1 className="font-gagalin text-6xl md:text-8xl text-tipaix-light mb-6 tracking-wider">
              TIPAIX
            </h1>
            
            <div className="text-xl md:text-2xl text-purple-100 mb-4 font-light tracking-[0.1em] uppercase">
              Compagnie de Théâtre d'Improvisation
            </div>
            
            <div className="w-24 h-px bg-tipaix-light mx-auto mb-8"></div>
            
            <p className="text-lg md:text-xl text-purple-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed italic">
              "Dans l'art de l'improvisation réside la véritable essence du théâtre :
              l'authenticité de l'instant, la beauté de l'imprévu, la magie de la création spontanée."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/version3/spectacles"
                className="px-8 py-4 border-2 border-tipaix-light text-tipaix-light font-light tracking-wide hover:bg-tipaix-light hover:text-black transition-all duration-500 relative group overflow-hidden"
              >
                <span className="relative z-10">Découvrir nos Représentations</span>
                <div className="absolute inset-0 bg-tipaix-light transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
              <Link 
                href="/version3/troupe"
                className="px-8 py-4 bg-tipaix-light text-black font-medium tracking-wide hover:bg-purple-300 transition-all duration-300 relative group"
              >
                <span className="relative z-10">Rencontrer la Compagnie</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        {/* Decorative separator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-tipaix-light"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gagalin text-4xl md:text-5xl text-tipaix-light mb-6 tracking-wide">
              Prochaines Représentations
            </h2>
            <div className="w-16 h-px bg-tipaix-light mx-auto mb-6"></div>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto font-light italic">
              "Chaque spectacle est un voyage unique dans l'univers de l'improvisation théâtrale."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingShows.map((show, index) => (
              <ShowCard key={show.id} show={show} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/version3/spectacles"
              className="inline-block px-8 py-4 border border-tipaix-light text-tipaix-light font-light tracking-wide hover:bg-tipaix-light hover:text-black transition-all duration-500 relative group overflow-hidden"
            >
              <span className="relative z-10">Voir toutes nos Représentations</span>
              <div className="absolute inset-0 bg-tipaix-light transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-tipaix-light border-opacity-30"></div>
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tipaix-light"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-tipaix-light"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-tipaix-light"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tipaix-light"></div>
                
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src="/images/troupe/troupe1.jpeg"
                    alt="Compagnie Tipaix"
                    fill
                    className="object-cover filter sepia-[0.3] contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-tipaix-light mix-blend-multiply opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-gagalin text-4xl md:text-5xl text-tipaix-light mb-8 tracking-wide">
                L'Art de l'Improvisation
              </h2>
              
              <div className="w-16 h-px bg-tipaix-light mb-8"></div>
              
              <div className="space-y-6 text-lg text-purple-200 font-light leading-relaxed">
                <p className="italic">
                  "Depuis 2019, la Compagnie Tipaix explore les territoires infinis de l'improvisation théâtrale, 
                  cette forme d'art où l'authenticité rencontre la virtuosité, où le spontané côtoie le maîtrisé."
                </p>
                
                <p>
                  Chaque représentation est une invitation au voyage, un parcours unique tissé dans l'instant présent 
                  par nos comédiens et nourri par l'énergie du public. Nous croyons en la beauté de l'éphémère 
                  et en la force de la création collective.
                </p>
                
                <p>
                  Notre approche mêle tradition théâtrale et modernité, technique rigoureuse et liberté créatrice, 
                  dans un équilibre délicat qui fait la singularité de notre compagnie.
                </p>
              </div>
              
              <div className="mt-10">
                <Link 
                  href="/version3/troupe"
                  className="inline-block px-8 py-4 bg-tipaix-light text-black font-medium tracking-wide hover:bg-purple-300 transition-all duration-300"
                >
                  Découvrir notre Histoire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-tipaix-light rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-tipaix-light rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-tipaix-light rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="text-8xl text-tipaix-light opacity-20 font-gagalin leading-none">"</div>
            <blockquote className="text-2xl md:text-3xl text-purple-200 font-light italic leading-relaxed -mt-12 mb-8">
              Le théâtre d'improvisation n'est pas seulement un spectacle,
              c'est un art de vivre, une philosophie de l'instant présent
              où chaque moment compte et chaque émotion trouve sa vérité.
            </blockquote>
            <div className="text-8xl text-tipaix-light opacity-20 font-gagalin leading-none float-right -mb-8">"</div>
          </div>
          
          <div className="w-24 h-px bg-tipaix-light mx-auto mt-8 mb-6"></div>
          <cite className="text-tipaix-light font-medium tracking-wide">Compagnie Tipaix</cite>
        </div>
      </section>
    </div>
  );
}