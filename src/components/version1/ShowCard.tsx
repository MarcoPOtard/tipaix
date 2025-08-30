import Image from 'next/image';
import Link from 'next/link';
import { Show } from '@/types';

interface ShowCardProps {
  show: Show;
}

export default function ShowCard({ show }: ShowCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="aspect-w-16 aspect-h-9 relative h-48">
        <Image
          src={show.image}
          alt={show.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{show.title}</h3>
        
        <div className="space-y-1 text-sm text-gray-600 mb-4">
          <p>📅 {new Date(show.date).toLocaleDateString('fr-FR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
          <p>🕐 {show.time}</p>
          <p>📍 {show.venue}</p>
        </div>
        
        <p className="text-gray-700 mb-4">{show.description}</p>
        
        <div className="flex space-x-3">
          <Link 
            href={`/version1/spectacles/${show.id}`}
            className="px-4 py-2 text-tipaix-primary border border-tipaix-primary rounded-lg hover:bg-tipaix-primary hover:text-white transition-colors"
          >
            Détails
          </Link>
          <a
            href={show.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-tipaix-primary text-white rounded-lg hover:bg-tipaix-dark transition-colors"
          >
            Réserver
          </a>
        </div>
      </div>
    </div>
  );
}