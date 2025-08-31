import Image from 'next/image';
import Link from 'next/link';
import { mockShows } from '@/data/shows';
import { notFound } from 'next/navigation';

interface ShowDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ShowDetailPage({ params }: ShowDetailPageProps) {
  const { id } = await params;
  const show = mockShows.find(s => s.id === id);
  
  if (!show) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={show.image}
          alt={show.title}
          fill
          className="object-cover filter sepia-[0.4] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        <div className="absolute inset-0 bg-tipaix-light mix-blend-multiply opacity-10"></div>
      </div>

      <div className="relative z-20 py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/spectacles"
            className="inline-flex items-center text-tipaix-light hover:text-purple-300 mb-12 font-light tracking-wide transition-colors"
          >
            ← Retour aux Représentations
          </Link>
          
          <div className="bg-black bg-opacity-70 border border-tipaix-light border-opacity-20 backdrop-blur-sm overflow-hidden">
            {/* Decorative frame */}
            
            <div className="relative h-96 overflow-hidden">
              <Image
                src={show.image}
                alt={show.title}
                fill
                className="object-cover filter sepia-[0.3] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-tipaix-light mix-blend-multiply opacity-15"></div>
              
              {/* Title overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h1 className="font-gagalin text-4xl md:text-5xl text-tipaix-light mb-2 tracking-wider">
                  {show.title}
                </h1>
                <div className="w-16 h-px bg-tipaix-light"></div>
              </div>
            </div>
            
            <div className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="font-gagalin text-2xl text-tipaix-light mb-8 tracking-wide">
                    Informations Pratiques
                  </h2>
                  <div className="w-12 h-px bg-tipaix-light mb-8"></div>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4 opacity-70">📅</span>
                      <span className="text-purple-200 font-light">
                        {new Date(show.date).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-4 opacity-70">🕐</span>
                      <span className="text-purple-200 font-light">{show.time}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-4 opacity-70 mt-1">📍</span>
                      <div className="text-purple-200 font-light flex-1">
                        <div className="font-medium text-tipaix-light mb-1">{show.venue}</div>
                        <div className="text-sm leading-relaxed mb-3">{show.address}</div>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-purple-100 hover:text-tipaix-light transition-colors font-light tracking-wide underline underline-offset-2 hover:no-underline"
                        >
                          Voir l'itinéraire
                          <svg className="w-3 h-3 ml-2 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 21,19V12H19V19Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="font-gagalin text-2xl text-tipaix-light mb-8 tracking-wide">
                    Réservation
                  </h2>
                  <div className="w-12 h-px bg-tipaix-light mb-8"></div>
                  <p className="text-purple-200 font-light mb-8 leading-relaxed italic">
                    "Réservez dès à présent votre place pour cette représentation unique. 
                    Chaque spectacle d'improvisation est un moment privilégié, 
                    une expérience théâtrale authentique et éphémère."
                  </p>
                  <a
                    href={show.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 border-2 border-tipaix-light text-tipaix-light font-light tracking-wide hover:bg-tipaix-light hover:text-black transition-all duration-500 relative group overflow-hidden"
                  >
                    <span className="relative z-10">Réserver votre Place</span>
                    <div className="absolute inset-0 bg-tipaix-light transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </a>
                </div>
              </div>
              
              <div className="border-t border-tipaix-light border-opacity-20 pt-12">
                <h2 className="font-gagalin text-2xl text-tipaix-light mb-8 tracking-wide">
                  À propos de cette Représentation
                </h2>
                <div className="w-12 h-px bg-tipaix-light mb-8"></div>
                <div className="text-purple-200 font-light leading-relaxed text-lg">
                  <p className="mb-6 italic">
                    "{show.description}"
                  </p>
                  <p className="text-sm opacity-80">
                    Une soirée d'improvisation théâtrale où talent, spontanéité et émotion 
                    se rencontrent pour créer un spectacle unique et inoubliable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}