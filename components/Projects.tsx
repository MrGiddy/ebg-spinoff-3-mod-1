import React, { useMemo } from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

export default function Projects() {
  // Logic to select featured projects (one from each category to show variety, limited to 4)
  const featuredProjects = useMemo(() => {
    const uniqueCategories = Array.from(new Set(PROJECTS.map(p => p.category)));
    return uniqueCategories.map(category => {
      return PROJECTS.find(p => p.category === category);
    }).filter((p): p is typeof PROJECTS[0] => p !== undefined).slice(0, 4);
  }, []);

  return (
    <section id="projects" className="py-24 bg-light relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <RevealOnScroll>
          <SectionHeader 
            title="Featured Projects" 
            subtitle="Explore highlights from our portfolio of successful geological and geo-engineering endeavors."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 min-h-[400px]">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 50} className="flex h-full">
              <Link 
                to={`/projects/${project.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col w-full h-full relative border border-gray-100 hover:border-primary/40 [mask-image:linear-gradient(white,white)]"
              >
                {/* Image Container */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                     <span className="inline-block bg-white/95 backdrop-blur-md text-dark px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                        {project.category}
                     </span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                     <div className="w-9 h-9 bg-secondary text-dark rounded-full flex items-center justify-center shadow-lg">
                        <ArrowUpRight size={18} />
                     </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-heading font-bold text-dark mb-3 group-hover:text-primaryDark transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-textLight text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Footer Action */}
                  <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center text-primaryDark font-semibold">
                     <span className="text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                        View Project
                     </span>
                     <ArrowRight size={16} className="text-secondary group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className="mt-16 text-center">
             <Link 
               to="/portfolio" 
               className="inline-flex items-center gap-3 px-10 py-4 bg-primaryDark text-white rounded-full font-bold uppercase tracking-wide hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-lg transform hover:-translate-y-1"
             >
               View Full Portfolio
               <ArrowRight size={20} />
             </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}