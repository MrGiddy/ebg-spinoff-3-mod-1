import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { PROJECTS } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';
import { ArrowLeft, Calendar, MapPin, Building, Tag, ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

const { useParams, Navigate, Link } = ReactRouterDOM;

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = PROJECTS
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 pb-16 text-white">
          <RevealOnScroll direction="up">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
               <span className="bg-secondary text-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                  {project.category}
               </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/80 text-sm font-medium">
              {project.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-secondary" />
                  {project.location}
                </div>
              )}
              {project.date && (
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-secondary" />
                  {project.date}
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Project Story */}
            <div className="lg:col-span-8">
              <RevealOnScroll>
                <div className="prose prose-lg text-textLight max-w-none">
                  <h3 className="text-2xl font-heading font-bold text-dark mb-4">Overview</h3>
                  <p className="leading-relaxed mb-10 text-lg">
                    {project.description}
                  </p>

                  <div className="space-y-12">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                      <h3 className="text-2xl font-heading font-bold text-dark mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">1</span>
                        The Challenge
                      </h3>
                      <p className="leading-relaxed">
                        {project.challenge || "Specific project challenges were identified during the initial assessment phase, requiring a tailored engineering approach to mitigate risks and ensure structural stability."}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                      <h3 className="text-2xl font-heading font-bold text-dark mb-4 flex items-center gap-3">
                         <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
                         Our Solution
                      </h3>
                      <p className="leading-relaxed">
                        {project.solution || "Our team deployed advanced analytical methods and field investigations to design a robust solution that met all regulatory and safety standards."}
                      </p>
                    </div>

                    <div className="bg-dark text-white rounded-2xl p-8 shadow-xl">
                      <h3 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                         <span className="w-8 h-8 rounded-full bg-secondary text-dark flex items-center justify-center text-sm font-bold">3</span>
                         The Result
                      </h3>
                      <p className="leading-relaxed opacity-90 text-gray-300">
                        {project.result || "The project was delivered on time and within budget, achieving all performance metrics and ensuring long-term sustainability."}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <RevealOnScroll direction="left" delay={100}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-lg font-heading font-bold text-dark mb-6 pb-2 border-b border-gray-100">
                      Project Details
                    </h3>
                    
                    <ul className="space-y-6">
                      {project.client && (
                        <li className="flex flex-col">
                          <span className="text-xs font-bold uppercase tracking-widest text-textLight/70 mb-1 flex items-center gap-2">
                             <Building size={14} /> Client
                          </span>
                          <span className="font-semibold text-dark">{project.client}</span>
                        </li>
                      )}
                       {project.location && (
                        <li className="flex flex-col">
                          <span className="text-xs font-bold uppercase tracking-widest text-textLight/70 mb-1 flex items-center gap-2">
                             <MapPin size={14} /> Location
                          </span>
                          <span className="font-semibold text-dark">{project.location}</span>
                        </li>
                      )}
                      {project.date && (
                        <li className="flex flex-col">
                          <span className="text-xs font-bold uppercase tracking-widest text-textLight/70 mb-1 flex items-center gap-2">
                             <Calendar size={14} /> Year
                          </span>
                          <span className="font-semibold text-dark">{project.date}</span>
                        </li>
                      )}
                      <li className="flex flex-col">
                          <span className="text-xs font-bold uppercase tracking-widest text-textLight/70 mb-1 flex items-center gap-2">
                             <Tag size={14} /> Category
                          </span>
                          <span className="font-semibold text-dark">{project.category}</span>
                      </li>
                    </ul>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                       <Link 
                         to="/contact" 
                         className="flex items-center justify-center gap-2 w-full bg-primaryDark text-white font-bold py-3 px-4 rounded-xl hover:bg-primary transition-all duration-300 shadow-md"
                       >
                         Start a Similar Project
                       </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-light border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <RevealOnScroll>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-heading font-bold text-dark">Related Projects</h2>
                <Link to="/portfolio" className="hidden md:flex items-center gap-2 font-bold text-primaryDark hover:text-primary transition-colors">
                  View Full Portfolio <ArrowRight size={18} />
                </Link>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((p, idx) => (
                <RevealOnScroll key={p.id} delay={idx * 100}>
                  <Link 
                    to={`/projects/${p.id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col w-full h-full relative border border-gray-100 hover:border-primary/40 [mask-image:linear-gradient(white,white)]"
                  >
                    {/* Image Container */}
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={p.imageUrl} 
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                         <span className="inline-block bg-white/95 backdrop-blur-md text-dark px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                            {p.category}
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
                        {p.title}
                      </h3>
                      <p className="text-textLight text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                        {p.description}
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
    </div>
  );
}