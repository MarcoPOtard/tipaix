import Image from 'next/image';
import Link from 'next/link';
import { Show } from '@/types';

interface ShowCardProps {
  show: Show;
  index: number;
}

export default function ShowCard({ show, index }: ShowCardProps) {
  return (
    <div className="group relative bg-black border border-tipaix-light border-opacity-30 rounded-lg overflow-hidden hover:border-tipaix-light transition-all duration-500">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-tipaix-light z-10"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-tipaix-light z-10"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-tipaix-light z-10"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-tipaix-light z-10"></div>
      
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
        <Image
          src={show.image}
          alt={show.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 filter sepia-[0.3] contrast-110"
        />
        
        {/* Vintage overlay */}
        <div className="absolute inset-0 bg-tipaix-light mix-blend-multiply opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
        
      </div>
      
      <div className="p-6 bg-black">
        <h3 className="font-gagalin text-xl text-tipaix-light mb-4 group-hover:text-purple-300 transition-colors tracking-wide">
          {show.title}
        </h3>
        
        <div className="space-y-2 text-sm mb-6">
          <div className="flex items-center text-purple-100">
            <span className="w-2 h-2 bg-tipaix-light rounded-full mr-3 flex-shrink-0"></span>
            <span className="font-light">
              {new Date(show.date).toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          <div className="flex items-center text-purple-100">
            <span className="w-2 h-2 bg-tipaix-light rounded-full mr-3 flex-shrink-0"></span>
            <span className="font-light">{show.time}</span>
          </div>
          <div className="flex items-center text-purple-100">
            <span className="w-2 h-2 bg-tipaix-light rounded-full mr-3 flex-shrink-0"></span>
            <span className="font-light">{show.venue}</span>
          </div>
        </div>
        
        <p className="text-purple-200 font-light leading-relaxed mb-6 text-sm italic">
          {show.description}
        </p>
        
        <div className="flex space-x-3">
          <Link 
            href={`/spectacles/${show.id}`}
            className="flex-1 px-4 py-2 text-center border border-tipaix-light text-tipaix-light font-light tracking-wide hover:bg-tipaix-light hover:text-black transition-all duration-300 text-sm"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}