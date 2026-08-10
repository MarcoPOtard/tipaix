import Image from 'next/image';
import Link from 'next/link';
import { mockShows } from '@/data/shows';
import { formatShowDate } from '@/lib/shows';
import { notFound } from 'next/navigation';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

interface ShowDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ShowDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const show = mockShows.find(s => s.id === id);

    if (!show) {
        return createMetadata({
            title: 'Spectacle non trouvé - Tipaix',
            description: 'Le spectacle demandé n\'a pas été trouvé.',
        });
    }

    const showDate = formatShowDate(show.date);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.tipaix.fr';

    return createMetadata({
        title: `${show.title} - Spectacle Tipaix`,
        description: `${show.description} Spectacle de théâtre d'improvisation le ${showDate} à ${show.time} au ${show.venue}. Réservez vos places dès maintenant !`,
        keywords: [
            show.title,
            'spectacle improvisation',
            'match impro',
            'théâtre Tipaix',
            show.venue,
            'réservation spectacle',
            'improvisation théâtrale',
            showDate.split(' ').slice(-3).join(' ') // mois année
        ],
        image: show.image,
        url: `${baseUrl}/spectacles/${show.id}`,
        type: 'article',
        publishedTime: new Date().toISOString(),
    });
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
          sizes="100vw"
          className="object-cover filter sepia-[0.4] contrast-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black"></div>
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
          
          <div className="bg-black bg-opacity-70 border border-tipaix-light border-opacity-20 backdrop-blur-xs overflow-hidden">
            {/* Decorative frame */}
            
            <div className="relative h-144 overflow-hidden">
              <Image
                src={show.image}
                alt={show.title}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover filter sepia-[0.3] contrast-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
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
                        {formatShowDate(show.date)}
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
                          Voir l&apos;itinéraire
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
                    &quot;Réservez dès à présent ... Et non, pas besoin de réservation. Vous êtes tous les bienvenus gratuitement pour voir les jeunes en pleine actions&quot;
                  </p>
                </div>
              </div>
              
              <div className="border-t border-tipaix-light border-opacity-20 pt-12">
                <h2 className="font-gagalin text-2xl text-tipaix-light mb-8 tracking-wide">
                  À propos de cette Représentation
                </h2>
                <div className="w-12 h-px bg-tipaix-light mb-8"></div>
                <div className="text-purple-200 font-light leading-relaxed text-lg">
                  <p className="mb-6 italic">
                    &quot;{show.description}&quot;
                  </p>
                  <p className="text-sm opacity-80">
                    Une soirée d&apos;improvisation théâtrale où talent, spontanéité et émotion 
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