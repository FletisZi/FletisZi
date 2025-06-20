import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('translate-y-10', 'opacity-0');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted! In a real application, this would send your message.');
  };
  return <section id="contact" ref={sectionRef} className="py-24 bg-white w-full transition-all duration-1000 transform translate-y-10 opacity-0">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Entre em <span className="text-blue-600">Contato</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Tem um projeto em mente ou quer discutir oportunidades? Adoraria falar com você.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Your name" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="your.email@example.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de contato</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a href="mailto:hello@janedeveloper.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    rjrodrigosantos12@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold">Telefone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +55 (17) 99274-1290
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold">Localização</h4>
                  <p className="text-gray-600">Olimpia, São Paulo</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="font-bold mb-4">Conecte-se comigo</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/rodrigo-s-santos/" className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="LinkedIn" target='_blanck'>
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/FletisZi" className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="GitHub" target='_blanck'>
                  <Github size={20} />
                </a>
                <a href="https://www.instagram.com/rodrig_japa/" className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="Twitter" target='_blanck'>
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};