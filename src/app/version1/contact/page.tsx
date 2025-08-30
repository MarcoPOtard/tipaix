import ContactForm from '@/components/version1/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-lg text-gray-600">
            Une question ? Une proposition ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700">contact@tipaix.fr</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
                <p className="text-gray-700">06 12 34 56 78</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Adresse de répétition</h3>
                <p className="text-gray-700">
                  Salle municipale<br/>
                  123 Rue de la Culture<br/>
                  75000 Paris
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Répétitions</h3>
                <p className="text-gray-700">
                  Tous les mardis de 19h00 à 21h00<br/>
                  Tous les samedis de 14h00 à 17h00
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-tipaix-primary bg-opacity-10 rounded-lg">
              <h3 className="font-semibold text-tipaix-dark mb-2">Vous voulez nous rejoindre ?</h3>
              <p className="text-gray-700">
                Nous sommes toujours à la recherche de nouveaux talents ! 
                N'hésitez pas à nous contacter si l'aventure de l'impro vous tente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}