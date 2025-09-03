import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import { generateMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
    title: 'Contact - Tipaix',
    description: 'Contactez la troupe de théâtre d\'improvisation Tipaix. Rejoignez-nous, posez vos questions ou découvrez nos horaires de répétition à Aix-en-Provence.',
    keywords: [
        'contact Tipaix',
        'théâtre improvisation contact',
        'rejoindre troupe théâtre',
        'répétition Aix en Provence',
        'cours improvisation',
        'atelier théâtre'
    ],
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
});

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/troupe/troupe1.jpeg"
          alt="La Tipaix"
          fill
          className="object-cover filter sepia-[0.4] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        <div className="absolute inset-0 bg-tipaix-light mix-blend-multiply opacity-5"></div>
      </div>

      <div className="relative z-20 py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-gagalin text-5xl md:text-6xl text-tipaix-light mb-8 tracking-wider">
              Contact
            </h1>
            <div className="w-24 h-px bg-tipaix-light mx-auto mb-8"></div>
            <p className="text-xl text-purple-200 font-light italic max-w-2xl mx-auto">
              "Une question, une proposition ? Engageons le dialogue et créons ensemble 
              les prochains chapitres de notre aventure théâtrale."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-tipaix-light border-opacity-20"></div>
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tipaix-light"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-tipaix-light"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-tipaix-light"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tipaix-light"></div>
                
                <div className="bg-black bg-opacity-60 p-8 backdrop-blur-sm">
                  <h2 className="font-gagalin text-3xl text-tipaix-light mb-8 tracking-wide">
                    Coordonnées
                  </h2>
                  
                  <div className="space-y-8">
                    {/* <div>
                      <h3 className="font-medium text-tipaix-light mb-3 tracking-wide">Correspondance</h3>
                      <p className="text-purple-200 font-light">micim@micim.fr</p>
                    </div>

                    <div>
                      <h3 className="font-medium text-tipaix-light mb-3 tracking-wide">Téléphone</h3>
                      <p className="text-purple-200 font-light">06 12 34 56 78</p>
                    </div> */}

                    <div>
                      <h3 className="font-medium text-tipaix-light mb-3 tracking-wide">Lieu de Répétition</h3>
                      <p className="text-purple-200 font-light leading-relaxed">
                        Salle de la mairie annexe de Luynes<br/>
                        Place de la Libération<br/>
                        13080 Aix-en-Provence
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-tipaix-light mb-3 tracking-wide">Horaires de Répétition</h3>
                      <p className="text-purple-200 font-light leading-relaxed">
                        Samedis : de 9h30 à 11h00 et de 11h00 à 12h30
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 p-6 border border-tipaix-light border-opacity-30 bg-tipaix-light bg-opacity-5">
                    <h3 className="font-medium text-tipaix-light mb-3 tracking-wide">Rejoindre la Tipaix</h3>
                    <p className="text-purple-200 font-light italic leading-relaxed">
                      L'art de l'improvisation vous appelle ? Nous accueillons avec plaisir 
                      les âmes créatives désireuses d'explorer cet univers fascinant.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-black bg-opacity-60 p-8 backdrop-blur-sm border border-tipaix-light border-opacity-20">
                <h2 className="font-gagalin text-3xl text-tipaix-light mb-8 tracking-wide">
                  Adressez-nous votre Message
                </h2>
                <div className="w-16 h-px bg-tipaix-light mb-8"></div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}