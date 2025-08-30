import Image from 'next/image';
import Link from 'next/link';
import ShowCard from '@/components/version1/ShowCard';
import { mockShows } from '@/data/shows';

export default function Version1Home() {
  const upcomingShows = mockShows.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-tipaix-primary to-tipaix-light">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow-sm">
              Bienvenue chez Tipaix
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Troupe de théâtre d'improvisation amateur - L'art de l'impro à l'état pur
            </p>
            <Link 
              href="/version1/spectacles"
              className="inline-block px-8 py-3 bg-white text-tipaix-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Découvrir nos spectacles
            </Link>
          </div>
        </div>
      </section>

      {/* Prochains spectacles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prochains Spectacles</h2>
            <p className="text-lg text-gray-600">
              Découvrez nos prochaines représentations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingShows.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/version1/spectacles"
              className="inline-block px-6 py-3 border border-tipaix-primary text-tipaix-primary hover:bg-tipaix-primary hover:text-white transition-colors rounded-lg"
            >
              Voir tous les spectacles
            </Link>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                L'Art de l'Improvisation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Tipaix est une troupe de théâtre d'improvisation amateur passionnée par l'art spontané de la création théâtrale. 
                Depuis notre création, nous explorons les possibilités infinies de l'improvisation.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Chaque spectacle est unique, chaque représentation est une aventure partagée entre les comédiens et le public. 
                Nous croyons en la magie de l'instant présent et en la créativité collective.
              </p>
              <Link 
                href="/version1/troupe"
                className="inline-block px-6 py-3 bg-tipaix-primary text-white hover:bg-tipaix-dark transition-colors rounded-lg"
              >
                En savoir plus sur la troupe
              </Link>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/troupe/troupe1.jpeg"
                alt="Troupe Tipaix"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}