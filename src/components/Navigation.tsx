import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-gray-900">CGP</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#work" className="text-gray-600 hover:text-gray-900">Work</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Services</a>
            <a href="#work" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Work</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
