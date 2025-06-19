import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
export const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Simple entry animations
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const button = buttonRef.current;
    if (heading && subheading && button) {
      heading.style.opacity = '0';
      subheading.style.opacity = '0';
      button.style.opacity = '0';
      setTimeout(() => {
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 300);
      setTimeout(() => {
        subheading.style.opacity = '1';
        subheading.style.transform = 'translateY(0)';
      }, 600);
      setTimeout(() => {
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);
  return <section id="home" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 py-24 pt-32 text-center relative z-10">
        <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 transform translate-y-10">
          <span className="block">Olá, sou</span>
          <span className="text-blue-600 block mt-2">Rodrigo Santos</span>
        </h1>
        <p ref={subheadingRef} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 transition-all duration-700 transform translate-y-10">
          Um desenvolvedor front-end apaixonado por criar experiências digitais bonitas, funcionais e centradas no usuário.
        </p>
        <div ref={buttonRef} className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 transition-all duration-700 transform translate-y-10">
          <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Contact Me
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>;
};