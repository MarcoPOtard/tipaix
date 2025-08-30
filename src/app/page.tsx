import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const versions = [
    {
      id: 'version1',
      title: 'Moderne & Épuré',
      description: 'Un design clean et professionnel avec une approche minimaliste',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      color: 'from-slate-500 to-slate-700'
    },
    {
      id: 'version3',
      title: 'Théâtral & Artistique', 
      description: 'Un design sophistiqué inspiré de l\'univers théâtral classique',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop',
      color: 'from-yellow-600 to-yellow-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-tipaix-primary to-tipaix-dark">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl p-4">
              <Image
                src="/images/logo/logo-tipaix.svg"
                alt="Logo Tipaix"
                width={64}
                height={64}
                className="w-12 h-12"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow-sm">
            Tipaix
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Découvrez les 2 versions du site de la troupe de théâtre d'improvisation Tipaix
          </p>
        </div>

        {/* Versions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {versions.map((version) => (
            <Link key={version.id} href={`/${version.id}`}>
              <div className="group relative bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={version.image}
                    alt={version.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${version.color} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-tipaix-primary transition-colors">
                    {version.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {version.description}
                  </p>
                  <div className="flex items-center text-tipaix-primary font-semibold group-hover:text-tipaix-dark transition-colors">
                    <span>Découvrir cette version</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-tipaix-primary bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-purple-100 mb-2">
              💡 <strong>Conseil :</strong> Chaque version présente les mêmes fonctionnalités avec un style différent
            </p>
            <p className="text-purple-200 text-sm">
              📱 Toutes les versions sont responsive et optimisées pour mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}