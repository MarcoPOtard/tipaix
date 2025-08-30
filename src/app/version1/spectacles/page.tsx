import ShowCard from '@/components/version1/ShowCard';
import { mockShows } from '@/data/shows';

export default function SpectaclesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Spectacles</h1>
          <p className="text-lg text-gray-600">
            Découvrez tous nos spectacles d'improvisation théâtrale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockShows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </div>
    </div>
  );
}