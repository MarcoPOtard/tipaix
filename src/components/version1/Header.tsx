'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/version1" className="flex items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo/logo-tipaix.png"
                alt="Logo Tipaix"
                width={240}
                height={47}
                className="h-12"
                priority
              />
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/version1" className="text-gray-700 hover:text-tipaix-primary transition-colors">
              Accueil
            </Link>
            <Link href="/version1/spectacles" className="text-gray-700 hover:text-tipaix-primary transition-colors">
              Spectacles
            </Link>
            <Link href="/version1/troupe" className="text-gray-700 hover:text-tipaix-primary transition-colors">
              La Troupe
            </Link>
            <Link href="/version1/contact" className="text-gray-700 hover:text-tipaix-primary transition-colors">
              Contact
            </Link>
            <a 
              href="https://www.micim.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-tipaix-primary transition-colors"
            >
              Micim
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-tipaix-primary transition-colors p-2"
            aria-label="Menu mobile"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/version1" 
                className="text-gray-700 hover:text-tipaix-primary transition-colors py-2 px-3 hover:bg-gray-50 rounded"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/version1/spectacles" 
                className="text-gray-700 hover:text-tipaix-primary transition-colors py-2 px-3 hover:bg-gray-50 rounded"
                onClick={() => setIsOpen(false)}
              >
                Spectacles
              </Link>
              <Link 
                href="/version1/troupe" 
                className="text-gray-700 hover:text-tipaix-primary transition-colors py-2 px-3 hover:bg-gray-50 rounded"
                onClick={() => setIsOpen(false)}
              >
                La Troupe
              </Link>
              <Link 
                href="/version1/contact" 
                className="text-gray-700 hover:text-tipaix-primary transition-colors py-2 px-3 hover:bg-gray-50 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="https://www.micim.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-tipaix-primary transition-colors py-2 px-3 hover:bg-gray-50 rounded"
              >
                Micim
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}