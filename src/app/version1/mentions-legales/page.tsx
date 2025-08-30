export default function MentionsLegalesPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
            <p className="text-gray-700 mb-2"><strong>Tipaix</strong></p>
            <p className="text-gray-700 mb-2">Association loi 1901</p>
            <p className="text-gray-700 mb-2">Siège social : 123 Rue de la Culture, 75000 Paris</p>
            <p className="text-gray-700 mb-2">Email : contact@tipaix.fr</p>
            <p className="text-gray-700 mb-2">Téléphone : 06 12 34 56 78</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Directeur de publication</h2>
            <p className="text-gray-700">Sophie Martin, Présidente de l'association Tipaix</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
            <p className="text-gray-700 mb-2"><strong>Vercel Inc.</strong></p>
            <p className="text-gray-700 mb-2">340 S Lemon Ave #4133</p>
            <p className="text-gray-700 mb-2">Walnut, CA 91789</p>
            <p className="text-gray-700">États-Unis</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              Le contenu de ce site web (textes, images, vidéos, etc.) est la propriété exclusive de 
              l'association Tipaix, sauf mention contraire. Toute reproduction, même partielle, 
              est interdite sans autorisation écrite préalable.
            </p>
            <p className="text-gray-700">
              Les marques citées sur ce site sont la propriété de leurs propriétaires respectifs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection des données personnelles</h2>
            <p className="text-gray-700 mb-4">
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au 
              Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit 
              d'accès, de rectification, de portabilité et d'effacement de vos données.
            </p>
            <p className="text-gray-700 mb-4">
              Les données collectées via le formulaire de contact sont utilisées uniquement pour 
              répondre à vos demandes et ne sont pas transmises à des tiers.
            </p>
            <p className="text-gray-700">
              Pour exercer vos droits, contactez-nous à : contact@tipaix.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700">
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
              Aucun cookie de tracking ou publicitaire n'est utilisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              L'association Tipaix s'efforce d'assurer l'exactitude et la mise à jour des 
              informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, 
              la précision ou l'exhaustivité des informations mises à disposition.
            </p>
            <p className="text-gray-700">
              En conséquence, l'association décline toute responsabilité pour toute imprécision, 
              inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}