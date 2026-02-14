import React, { useState, useMemo, useEffect } from 'react';
import { PROJECTS } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS;
    } 
    return PROJECTS.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-dark overflow-hidden">
        {/* Background Image */}
         <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
             alt="Portfolio Background" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-dark/80 mix-blend-multiply"></div>
         </div>
         
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-white text-center pt-20">
          <RevealOnScroll direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              A showcase of our technical expertise and engineering excellence across diverse terrains and challenges.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 max-w-7xl">
            
          {/* Filter Buttons */}
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                    activeCategory === category
                        ? 'bg-primaryDark text-white border-primaryDark shadow-lg transform scale-105'
                        : 'bg-white text-textLight border-gray-200 hover:bg-gray-50 hover:text-primaryDark hover:border-primaryDark/30'
                    }`}
                >
                    {category}
                </button>
                ))}
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 50} className="flex">
                    <Link 
                        to={`/projects/${project.id}`}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col w-full h-full border border-gray-100 hover:border-primary/40 [mask-image:linear-gradient(white,white)]"
                    >
                         {/* Image Container */}
                        <div className="h-64 overflow-hidden relative">
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
                                <div className="w-10 h-10 bg-secondary text-dark rounded-full flex items-center justify-center shadow-lg">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-grow flex flex-col">
                            <h3 className="text-xl font-heading font-bold text-dark mb-3 group-hover:text-primaryDark transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-textLight text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>
                            
                             {/* Footer Action */}
                             <div className="mt-auto pt-5 border-t border-gray-50 flex justify-between items-center text-primaryDark font-semibold">
                                <span className="text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                                    Case Study
                                </span>
                                <ArrowRight size={18} className="text-secondary group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </Link>
                </RevealOnScroll>
            ))}
          </div>
          
           {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-textLight text-lg">No projects found in this category.</p>
                <button onClick={() => setActiveCategory('All')} className="mt-4 text-primaryDark font-bold hover:underline">View All Projects</button>
            </div>
            )}

            <div className="mt-20 text-center">
                 <Link 
                   to="/contact" 
                   className="inline-block border-b-[3px] border-secondary pb-1 font-bold text-dark hover:text-primaryDark hover:border-primaryDark transition-all duration-300 text-lg uppercase tracking-widest hover:-translate-y-0.5"
                 >
                    Start a Conversation
                 </Link>
            </div>
        </div>
      </section>
    </div>
  );
}