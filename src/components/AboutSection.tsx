import React, { useEffect, useRef } from 'react';
import { Code, Palette, Globe, BookOpen } from 'lucide-react';
export const AboutSection = () => {
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
  const skills = [{
    name: 'Development',
    icon: <Code size={24} />,
    description: 'HTML, CSS, JavaScript, TypeScript, React, Next.js'
  }, {
    name: 'Design',
    icon: <Palette size={24} />,
    description: 'UI/UX, Figma, Adobe PhotShop, Design Responsivo'
  }, {
    name: 'Backend',
    icon: <Globe size={24} />,
    description: 'Node.js, Express, Postgress'
  }, {
    name: 'Aprendizado',
    icon: <BookOpen size={24} />,
    description: 'Sempre expandindo meus conhecimentos em tecnologias web'
  }];
  return <section id="about" ref={sectionRef} className="py-24 bg-white w-full transition-all duration-1000 transform translate-y-10 opacity-0">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Quem <span className="text-blue-600">Sou</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <img src="/iphoto.png" alt="Rodrigo Dev" className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10" />
            </div>
          </div>
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-4">
              Front-end Developer & Entusiasta UI/UX 
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sou um desenvolvedor web apaixonado, com mais de 3 anos de experiência
              na criação de sites e aplicativos responsivos e fáceis de usar. Sou
              especialista em desenvolvimento front-end com foco especial em
              criar experiências de usuário intuitivas e envolventes.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Minha abordagem combina código limpo, princípios de design modernos e
              otimização de desempenho para entregar produtos digitais excepcionais.
              Estou constantemente aprendendo novas tecnologias e técnicas para me manter
              na vanguarda do desenvolvimento web.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => <div key={index} className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">{skill.icon}</div>
                  <div>
                    <h4 className="font-bold">{skill.name}</h4>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};