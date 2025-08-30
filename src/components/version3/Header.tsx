'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-tipaix-primary to-tipaix-dark border-b border-tipaix-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tipaix-light to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tipaix-light to-transparent"></div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <Link href="/version3" className="flex items-center group">
            <div className="relative">
              <Image
                src="/images/logo/logo-tipaix.png"
                alt="Logo Tipaix"
                width={240}
                height={47}
                className="h-12 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {[
              { href: '/version3', label: 'Scène' },
              { href: '/version3/spectacles', label: 'Représentations' },
              { href: '/version3/troupe', label: 'La Compagnie' },
              { href: '/version3/contact', label: 'Correspondance' },
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="relative text-white font-light tracking-wide hover:text-purple-100 transition-all duration-300 group py-2"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tipaix-light to-tipaix-primary group-hover:w-full transition-all duration-500"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></div>
              </Link>
            ))}
            <a 
              href="https://www.micim.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative text-white font-light tracking-wide hover:text-purple-100 transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Micim</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tipaix-light to-tipaix-primary group-hover:w-full transition-all duration-500"></div>
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-purple-100 transition-colors p-2"
            aria-label="Menu mobile"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 border-t border-tipaix-light border-opacity-30 mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/version3" 
                className="text-white hover:text-purple-100 transition-colors font-light tracking-wide py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded"
                onClick={() => setIsOpen(false)}
              >
                Scène
              </Link>
              <Link 
                href="/version3/spectacles" 
                className="text-white hover:text-purple-100 transition-colors font-light tracking-wide py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded"
                onClick={() => setIsOpen(false)}
              >
                Représentations
              </Link>
              <Link 
                href="/version3/troupe" 
                className="text-white hover:text-purple-100 transition-colors font-light tracking-wide py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded"
                onClick={() => setIsOpen(false)}
              >
                La Compagnie
              </Link>
              <Link 
                href="/version3/contact" 
                className="text-white hover:text-purple-100 transition-colors font-light tracking-wide py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded"
                onClick={() => setIsOpen(false)}
              >
                Correspondance
              </Link>
              <a 
                href="https://www.micim.fr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-purple-100 transition-colors font-light tracking-wide py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded"
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