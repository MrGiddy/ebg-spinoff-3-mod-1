import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { SERVICE_CATEGORIES, PROJECTS } from '../constants';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const { useParams, Navigate, Link } = ReactRouterDOM;

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const category = SERVICE_CATEGORIES.find(c => c.id === slug);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  // Filter projects for the current category
  const categoryProjects = PROJECTS.filter(project => project.category === category.title);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-end pb-16 lg:pb-24 overflow-hidden">
        {/* Dynamic Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={category.imageUrl} 
            alt={category.title} 
            className="w-full h-full object-cover"
          />
          {/* Sophisticated Gradients for depth and readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/40 to-transparent"></div>
        </div>
        
        {/* Decorative Background Icon Watermark */}
        <div className="absolute -top-20 -right-20 text-white/5 pointer-events-none transform rotate-12 z-0 hidden lg:block">
           <category.icon size={600} strokeWidth={0.5} />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-white pt-24">
          <RevealOnScroll direction="up">
            {/* Breadcrumb Navigation */}
            <Link 
                to="/#services" 
                className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors mb-8 group text-sm font-bold uppercase tracking-wider"
            >
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-dark transition-all duration-300">
                    <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                </div>
                Back to Services
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-4 text-secondary font-bold tracking-[0.2em] uppercase text-sm">
                        <span className="w-10 h-[2px] bg-secondary inline-block"></span>
                        Service Category
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-none tracking-tight drop-shadow-xl">
                    {category.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-100 font-normal leading-relaxed border-l-4 border-secondary/50 pl-6 max-w-2xl drop-shadow-md">
                    {category.description}
                    </p>
                </div>
                
                {/* Visual Identity Icon */}
                <div className="hidden lg:block mb-2">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <category.icon size={48} className="text-secondary" />
                    </div>
                </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Offerings Gateway Grid Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 max-w-7xl">
          <RevealOnScroll>
             <div className="mb-16 text-center max-w-3xl mx-auto">
               <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primaryDark text-sm font-bold uppercase tracking-widest border border-primary/20 mb-4">
                 Expert Capabilities
               </div>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">Specialized Services</h2>
               <p className="text-textLight text-lg">
                 Explore our core competencies within the {category.title} sector. Each service is tailored to deliver precision, safety, and sustainable results.
               </p>
             </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {category.offerings.map((offering, index) => (
              <RevealOnScroll key={offering.id} delay={index * 100}>
                <Link 
                   to={`/services/${category.id}/${offering.id}`}
                   className="group relative block w-full h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 [mask-image:linear-gradient(white,white)]"
                >
                  {/* Background Image with Zoom Effect */}
                  <img 
                    src={offering.imageUrl} 
                    alt={offering.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Gradient Overlay for Text Readability - Always strong enough for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Hover Color Overlay */}
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Right Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-secondary group-hover:border-secondary group-hover:text-dark transition-all duration-300 z-10 shadow-lg">
                    <ArrowUpRight size={22} className="transform group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                  
                  {/* Content positioned at bottom - Visible always */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col items-start justify-end h-full z-10">
                    <div className="w-full">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 leading-tight drop-shadow-lg">
                        {offering.title}
                        </h3>
                        
                        <div className="h-1.5 w-16 bg-secondary mb-5 rounded-full transition-all duration-500 group-hover:w-24"></div>
                        
                        {/* Always visible description and button */}
                        <div className="flex flex-col gap-5">
                            <p className="text-gray-100 text-sm md:text-base line-clamp-3 max-w-lg leading-relaxed drop-shadow-md font-medium">
                            {offering.shortDescription}
                            </p>
                            
                            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-bold uppercase tracking-wider group-hover:bg-secondary group-hover:border-secondary group-hover:text-dark transition-all duration-300 w-fit">
                                Explore Service <ArrowRight size={16} />
                            </span>
                        </div>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio Section */}
      {categoryProjects.length > 0 && (
        <section className="py-24 bg-white border-t border-gray-200 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <RevealOnScroll>
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-dark mb-2">Related Projects</h2>
                            <p className="text-textLight max-w-2xl">Proven track record in {category.title} across varying complexities.</p>
                        </div>
                        <div className="h-1 w-full md:w-auto bg-gray-100 flex-grow md:ml-10 rounded-full"></div>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryProjects.map((project, index) => (
                        <RevealOnScroll key={project.id} delay={index * 100} className="flex">
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
            </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
           <RevealOnScroll direction="up">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6">Need a Custom {category.title} Solution?</h2>
             <p className="text-lg text-textLight mb-10 max-w-2xl mx-auto leading-relaxed">
               Our team of engineers and geologists can tailor our services to meet your specific project requirements. 
               Contact us today to discuss your needs.
             </p>
             <Link 
               to="/contact" 
               className="inline-flex items-center gap-3 px-10 py-4 bg-primaryDark text-white rounded-full font-bold uppercase tracking-wide hover:bg-secondary hover:text-dark transition-all duration-300 shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1"
             >
               Contact Our Team
               <ArrowRight size={20} />
             </Link>
           </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}