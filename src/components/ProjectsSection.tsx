import React, { useEffect, useState, useRef, Component } from 'react';
import { ExternalLink, Github } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}
export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const projects: Project[] = [{
    id: 1,
    title: 'TWITCH API',
    description: 'Integração com a Twitch API: Projeto focado em exibir informações de canais, lives e estatísticas em tempo real utilizando requisições REST e autenticação OAuth.',
    image: '/capaTwitch.png',
    tags: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
    liveLink: 'https://apitfletiszi.netlify.app/',
    githubLink: 'https://github.com/FletisZi/Ampm-V2'
  }, {
    id: 2,
    title: 'Andreas Manfred',
    description: 'Site moderno e responsivo para um dj jvem e despojado, tudo o que uma festa precisa.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Vite.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#'
  }, {
    id: 3,
    title: 'Convite casamento',
    description: 'Para um grande dia requer um grande convite.',
    image: '/ferduda.png ',
    tags: ['React', 'Next.js', 'Vercel'],
    liveLink: 'https://ferduda.vercel.app/',
    githubLink: 'https://github.com/FletisZi/fereduda'
  }, {
    id: 4,
    title: 'AMPM',
    description: 'Cardapio online.',
    image: '/ampm.png',
    tags: ['HTML', 'Java Script', 'CSS'],
    liveLink: 'https://cardapioestreladalva.netlify.app/',
    githubLink: 'https://github.com/FletisZi/Ampm-V2'
  }, {
    id: 5,
    title: 'BEHANCE',
    description: 'A comprehensive fitness tracking application with workout plans, progress monitoring, and nutrition guidance.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['React Native', 'GraphQL', 'AWS', 'Chart.js'],
    liveLink: '#',
    githubLink: '#'
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('translate-y-10', 'opacity-0');
        // Staggered animation for project cards
        if (projectsRef.current) {
          const cards = projectsRef.current.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100', 'translate-y-0');
              card.classList.remove('opacity-0', 'translate-y-10');
            }, 150 * index);
          });
        }
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
  return <section id="projects" ref={sectionRef} className="py-24 bg-gray-50 w-full transition-all duration-1000 transform translate-y-10 opacity-0">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Meus <span className="text-blue-600">Projetos</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Explore meus trabalhos recente e veja como dou vida às ideias com código limpo e princípios de design modernos.
        </p>
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <div key={project.id} className="project-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform opacity-0 translate-y-10 hover:-translate-y-2 hover:shadow-xl" onMouseEnter={() => setActiveProject(project.id)} onMouseLeave={() => setActiveProject(null)}>
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out" style={{
              backgroundImage: `url(${project.image})`,
              transform: activeProject === project.id ? 'scale(1.1)' : 'scale(1)'
            }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <a href={project.liveLink} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors" aria-label="View live site" target="_blank">
                      <ExternalLink size={18} className="text-white" />
                    </a>
                    <a href={project.githubLink} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors" aria-label="View source code on GitHub" target="_blank">
                      <Github size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
            Ver mais
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>;
};