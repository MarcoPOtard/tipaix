import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/images/logo/logo-tipaix.svg"
                  alt="Logo Tipaix"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <span className="text-xl font-bold text-tipaix-primary">Tipaix</span>
            </div>
            <p className="text-gray-600">
              Troupe de théâtre d'improvisation amateur passionnée par l'art de l'impro.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/version1" className="text-gray-600 hover:text-tipaix-primary">Accueil</Link></li>
              <li><Link href="/version1/spectacles" className="text-gray-600 hover:text-tipaix-primary">Spectacles</Link></li>
              <li><Link href="/version1/troupe" className="text-gray-600 hover:text-tipaix-primary">La Troupe</Link></li>
              <li><Link href="/version1/contact" className="text-gray-600 hover:text-tipaix-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link href="/version1/mentions-legales" className="text-gray-600 hover:text-tipaix-primary">Mentions légales</Link></li>
              <li><a href="https://www.micim.fr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-tipaix-primary">Micim</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">© 2024 Tipaix. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}