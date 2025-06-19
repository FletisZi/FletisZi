import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 transition-colors hover:text-blue-600">
          <span className="text-blue-600">F</span>letis<span className="text-blue-600">Z</span>i
          <span className="text-blue-600">.</span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {['Home', 'About', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              {item}
            </a>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>)}
          </div>
        </div>}
    </header>;
};