'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { SITE_SETTINGS_QUERY_RESULT } from '@/sanity.types';

interface HeaderProps {
  navigation: NonNullable<SITE_SETTINGS_QUERY_RESULT>['navigation'] | undefined;
}

export default function Header({ navigation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const items = navigation ?? [];

  return (
    <header className="bg-linear-to-r from-tipaix-primary to-tipaix-dark border-b border-tipaix-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-tipaix-light to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-tipaix-light to-transparent"></div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
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
            {items.map((item) =>
              item.href?.startsWith('http') ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-white font-light tracking-wide hover:text-purple-100 transition-all duration-300 group py-2"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-tipaix-light to-tipaix-primary group-hover:w-full transition-all duration-500"></div>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href ?? '/'}
                  className="relative text-white font-light tracking-wide hover:text-purple-100 transition-all duration-300 group py-2"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-tipaix-light to-tipaix-primary group-hover:w-full transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-sm transition-opacity duration-300"></div>
                </Link>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-purple-100 transition-colors p-2"
            aria-label="Menu mobile"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-6 border-t border-tipaix-light border-opacity-30 mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              {items.map((item) =>
                item.href?.startsWith('http') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-100 transition-colors font-light tracking-wide py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded-sm"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href ?? '/'}
                    className="text-white hover:text-purple-100 transition-colors font-light tracking-wide py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
