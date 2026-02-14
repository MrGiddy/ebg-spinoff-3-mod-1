import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../constants';
import { Check, ArrowLeft, Calendar, FileText, ArrowRight, LayoutGrid, Phone, Mail } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const { useParams, Navigate, Link } = ReactRouterDOM;

export default function ServiceOfferingDetail() {
  const { categorySlug, serviceSlug } = useParams<{ categorySlug: string; serviceSlug: string }>();
  
  // Find category and offering
  const category = SERVICE_CATEGORIES.find(c => c.id === categorySlug);
  const offering = category?.offerings.find(o => o.id === serviceSlug);

  // Get related offerings (siblings)
  const relatedOfferings = category?.offerings.filter(o => o.id !== serviceSlug) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, serviceSlug]);

  if (!category || !offering) {
    return <Navigate to="/" replace />;
  }

  // Helper to parse markdown-like bold headers in description
  const renderDescription = (lines: string[]) => {
    return lines.map((line, index) => {
      // Check for header style: **Title**
      const headerMatch = line.match(/^\*\*(.*)\*\*$/);
      if (headerMatch) {
        return (
          <h4 key={index} className="text-2xl font-heading font-bold text-dark mt-10 mb-5 relative inline-block">
            {headerMatch[1]}
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
          </h4>
        );
      }
      
      // Check for inline bold: text **bold** text
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={index} className="leading-8 mb-6 text-textLight text-lg">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} className="text-primaryDark font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="pt-0">
      {/* Hero Section - Heightened and refined */}
      <div className="relative min-h-[70vh] flex items-end pb-16 lg:pb-24 overflow-hidden group">
        {/* Dynamic Background Image with subtle zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={offering.imageUrl} 
            alt={offering.title} 
            className="w-full h-full object-cover transition-transform duration-[20s] ease-linear transform scale-100 group-hover:scale-110"
          />
          {/* Multi-layer gradients for text readability - Increased darkness */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-transparent to-transparent"></div>
        </div>
        
        {/* Background Pattern/Icon */}
        <div className="absolute -top-20 -right-20 text-white/5 pointer-events-none transform rotate-12 z-0 hidden lg:block">
           <category.icon size={600} strokeWidth={0.5} />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-white pt-32">
          <RevealOnScroll direction="up">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-8 overflow-x-auto whitespace-nowrap pb-2 font-medium tracking-wide">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="opacity-50">/</span>
              <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
              <span className="opacity-50">/</span>
              <Link to={`/services/${category.id}`} className="hover:text-white transition-colors">{category.title}</Link>
              <span className="opacity-50">/</span>
              <span className="text-secondary font-bold">{offering.title}</span>
            </nav>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-secondary/90 backdrop-blur-sm text-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] shadow-lg border border-white/20">
                            {category.title}
                        </span>
                        <div className="h-px w-10 bg-white/40"></div>
                        <span className="text-white/90 text-sm font-semibold tracking-wide">Specialized Engineering</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight drop-shadow-xl">
                    {offering.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-50 max-w-3xl font-normal leading-relaxed border-l-4 border-secondary pl-8 py-2 drop-shadow-md">
                    {offering.shortDescription}
                    </p>
                </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Detailed Content */}
            <div className="lg:col-span-8">
              <RevealOnScroll>
                <div className="prose prose-lg text-textLight max-w-none">
                  {/* Introduction Block */}
                  <div className="mb-12">
                     <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">Comprehensive Overview</h3>
                     <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6">
                       Technical Specifications & Methodology
                     </h2>
                  </div>
                  
                  {/* Dynamic Description */}
                  <div className="text-lg text-textLight/90">
                    {renderDescription(offering.fullDescription)}
                  </div>

                  {/* Enhanced Features Grid */}
                  <div className="mt-16 bg-light rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                    {/* Decorative Icon */}
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                        <FileText size={200} />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-dark mb-8 flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-secondary flex items-center justify-center border border-gray-100">
                        <FileText size={24} />
                      </div>
                      Key Capabilities & Deliverables
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                       {offering.features.map((feature, index) => (
                         <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300 group">
                            <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-dark transition-colors">
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <span className="font-semibold text-text group-hover:text-dark transition-colors">{feature}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* CTA Card - Enhanced */}
                <RevealOnScroll delay={200} direction="left">
                  <div className="bg-dark text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-dark via-primaryDark/50 to-dark bg-[length:200%_200%] animate-[gradient_6s_ease-in-out_infinite]"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-3xl font-heading font-bold mb-4">Start Your Project</h3>
                      <p className="text-gray-300 mb-8 leading-relaxed">
                        Ready to deploy our {offering.title.toLowerCase()} expertise? Let's discuss your requirements.
                      </p>
                      
                      <Link 
                        to="/contact" 
                        className="flex items-center justify-center gap-3 w-full bg-primaryDark text-white font-bold py-4 px-6 rounded-xl hover:bg-primary transition-all duration-300 shadow-lg transform group-hover:-translate-y-1"
                      >
                        Request Consultation
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                    
                    {/* Background decoration */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>
                  </div>
                </RevealOnScroll>

                {/* Quick Contact Info - Enhanced */}
                <RevealOnScroll delay={300} direction="left">
                   <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                      <h4 className="font-bold text-dark mb-6 flex items-center gap-3 text-lg">
                         <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primaryDark">
                            <Calendar size={20} />
                         </div>
                         Project Availability
                      </h4>
                      <p className="text-textLight text-sm mb-8 leading-relaxed border-b border-gray-50 pb-6">
                        We are currently accepting new commissions for Q2-Q3. Our engineering teams are ready for rapid mobilization.
                      </p>
                      
                      <div className="space-y-4">
                         <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-primary/5 text-primaryDark flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-textLight/60">Email Inquiries</p>
                                <a href="mailto:info@geotechengineering.com" className="font-medium text-dark hover:text-primary transition-colors">
                                    info@geotechengineering.com
                                </a>
                            </div>
                         </div>
                         <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-primary/5 text-primaryDark flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-textLight/60">Call Us</p>
                                <a href="tel:+13035557890" className="font-medium text-dark hover:text-primary transition-colors">
                                    (303) 555-7890
                                </a>
                            </div>
                         </div>
                      </div>
                   </div>
                </RevealOnScroll>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Services Section - Updated to match ServiceDetail cards */}
      {relatedOfferings.length > 0 && (
        <section className="py-24 bg-light border-t border-gray-200 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <RevealOnScroll>
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div>
                   <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3">
                      <LayoutGrid size={14} />
                      More Options
                   </div>
                   <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark">Explore Related Services</h2>
                 </div>
                 <Link 
                   to={`/services/${category.id}`} 
                   className="flex items-center gap-2 text-primaryDark font-bold hover:text-dark transition-colors group"
                 >
                   View All {category.title} Services 
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
               </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {relatedOfferings.slice(0, 3).map((related, idx) => (
                 <RevealOnScroll key={related.id} delay={idx * 100}>
                    <Link 
                      to={`/services/${category.id}/${related.id}`}
                      className="group block relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 [mask-image:linear-gradient(white,white)]"
                    >
                       {/* Background Image */}
                       <img 
                          src={related.imageUrl} 
                          alt={related.title} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Gradient Overlay - Always Visible */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent opacity-90 transition-opacity duration-300"></div>
                        
                        {/* Content Container - Always Visible */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="transform transition-transform duration-500">
                                <h4 className="text-xl font-heading font-bold text-white mb-3 leading-tight drop-shadow-md">
                                    {related.title}
                                </h4>
                                <div className="h-1 w-12 bg-secondary mb-4 rounded-full"></div>
                                
                                <p className="text-gray-200 text-sm line-clamp-2 mb-6 leading-relaxed">
                                    {related.shortDescription}
                                </p>
                                
                                <span className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider group-hover:text-secondary transition-colors">
                                    View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </div>

                        {/* Hover Overlay Light */}
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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