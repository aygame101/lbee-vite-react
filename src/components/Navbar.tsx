import React from 'react';
import { Menu, X, Bug } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-[#0f0014]/90 backdrop-blur-sm z-50 border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Bug className="h-8 w-8 text-pink-500" />
              <span className="text-white text-xl font-semibold neon-text">LBee</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-300 hover:text-pink-500 transition-colors">À propos</a>
              {/* <a href="#menu" className="text-gray-300 hover:text-pink-500 transition-colors">Carte</a>
              <a href="#events" className="text-gray-300 hover:text-pink-500 transition-colors">Évènements</a> */}
              <a href="#contact" className="text-gray-300 hover:text-pink-500 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0f0014]/90">
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-pink-500">À propos</a>
            {/* <a href="#menu" className="block px-3 py-2 text-gray-300 hover:text-pink-500">Carte</a>
            <a href="#events" className="block px-3 py-2 text-gray-300 hover:text-pink-500">Évènements</a> */}
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-pink-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}