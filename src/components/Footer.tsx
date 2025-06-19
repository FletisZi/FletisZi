import React from 'react';
import { Coffee } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-gray-800">
              <span className="text-blue-600">F</span>letis<span className="text-blue-600">Z</span>i
              <span className="text-blue-600">.</span>
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            © {currentYear} Rodrigo Santos Developer. Feito com {' '}
            <Coffee size={16} className="mx-1 text-red-500" /> e React.
          </p>
        </div>
      </div>
    </footer>;
};