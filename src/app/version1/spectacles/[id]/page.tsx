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
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/version1/spectacles"
          className="inline-flex items-center text-tipaix-primary hover:text-tipaix-dark mb-8"
        >
          ← Retour aux spectacles
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="relative h-96">
            <Image
              src={show.image}
              alt={show.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{show.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations pratiques</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📅</span>
                    <span className="text-gray-700">
                      {new Date(show.date).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🕐</span>
                    <span className="text-gray-700">{show.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📍</span>
                    <span className="text-gray-700">{show.venue}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Réservation</h2>
                <p className="text-gray-700 mb-4">
                  Réservez vos places dès maintenant pour ne pas manquer ce spectacle !
                </p>
                <a
                  href={show.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-tipaix-primary text-white rounded-lg hover:bg-tipaix-dark transition-colors"
                >
                  Réserver maintenant
                </a>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{show.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}