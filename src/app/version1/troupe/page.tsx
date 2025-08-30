import Image from 'next/image';

export default function TroupePage() {
  const members = [
    {
      id: '1',
      name: 'Sophie Martin',
      role: 'Fondatrice & Comédienne',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop',
      bio: 'Passionnée d\'improvisation depuis 10 ans, Sophie a fondé Tipaix avec l\'envie de partager sa passion pour cet art spontané.'
    },
    {
      id: '2',
      name: 'Marc Dubois',
      role: 'Comédien & Metteur en scène',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Ancien élève de cours de théâtre, Marc apporte sa technique et son expérience au groupe.'
    },
    {
      id: '3',
      name: 'Julie Leroy',
      role: 'Comédienne',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Venue de l\'univers de la danse, Julie apporte une approche corporelle unique à nos improvisations.'
    },
    {
      id: '4',
      name: 'Thomas Bernard',
      role: 'Comédien & Musicien',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Musicien de formation, Thomas enrichit nos spectacles avec des improvisations musicales.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">La Troupe Tipaix</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une équipe de passionnés unis par l'amour de l'improvisation théâtrale
          </p>
        </div>

        {/* Histoire de la troupe */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-gray-700 mb-4">
                Tipaix est née en 2019 de la rencontre de plusieurs passionnés de théâtre d'improvisation. 
                Notre nom, contraction de "théâtre" et "impro", reflète notre essence : l'art de créer 
                en temps réel, ensemble.
              </p>
              <p className="text-gray-700 mb-4">
                Nous nous retrouvons chaque semaine pour explorer de nouvelles formes d'improvisation, 
                travailler notre complicité et préparer nos spectacles. Notre approche mélange techniques 
                classiques et innovations contemporaines.
              </p>
              <p className="text-gray-700">
                Aujourd'hui, nous sommes fiers de présenter des spectacles réguliers et de participer 
                à des événements culturels locaux, toujours avec la même passion et la même envie de 
                partager notre art.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/troupe/troupe1.jpeg"
                alt="Troupe Tipaix en répétition"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Membres de la troupe */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nos Comédiens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-tipaix-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notre philosophie */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Notre Philosophie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Créativité</h3>
              <p className="text-gray-600">
                Nous croyons en la puissance de l'imagination collective et en la beauté de l'instantané.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bienveillance</h3>
              <p className="text-gray-600">
                L'impro se nourrit de confiance mutuelle et d'acceptation des propositions de chacun.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Plaisir</h3>
              <p className="text-gray-600">
                Avant tout, nous faisons du théâtre pour le plaisir de jouer et de faire rire.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}