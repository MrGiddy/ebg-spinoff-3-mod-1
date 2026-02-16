import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

const SLIDES = [
  {
    id: 'general',
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: <>Innovative Geological & <br className="hidden md:block"/> Geo-Engineering Solutions</>,
    subtitle: "Providing expert geological analysis and engineering services for sustainable development",
    primaryCta: { text: "Our Services", link: "/#services" },
    secondaryCta: { text: "Get in Touch", link: "/contact" }
  },
  {
    id: 'geo-engineering',
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1950&auto=format&fit=crop",
    title: <>Advanced Geotechnical <br className="hidden md:block"/> Engineering</>,
    subtitle: "Foundation design, slope stability, and risk mitigation for safe and resilient infrastructure.",
    primaryCta: { text: "Explore Engineering", link: "/services/geo-engineering-works" },
    secondaryCta: { text: "View Projects", link: "/portfolio" }
  },
  {
    id: 'geological',
    image: "https://images.unsplash.com/photo-1461301214746-1e790926d323?q=80&w=1950&auto=format&fit=crop",
    title: <>Precise Geological <br className="hidden md:block"/> Intelligence</>,
    subtitle: "Hydrogeology, lithological mapping, and geophysical surveys to de-risk your projects.",
    primaryCta: { text: "Geological Services", link: "/services/geological-services" },
    secondaryCta: { text: "Contact Experts", link: "/contact" }
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000); // 10 seconds per slide

    return () => clearInterval(timer);
  }, [currentSlide, nextSlide]); 

  return (
    <section id="home" className="h-screen min-h-[600px] relative overflow-hidden flex items-center justify-center bg-dark">
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 ease-in-out ${
            isMounted ? 'transition-opacity duration-1000' : ''
          } ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
            {/* Darker overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent z-10"></div>
            
            <img 
              src={slide.image} 
              alt={typeof slide.title === 'string' ? slide.title : 'Hero Background'} 
              className="w-full h-full object-cover"
            />
        </div>
      ))}

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white pt-10">
         <div className="max-w-5xl mx-auto h-[300px] flex flex-col justify-center items-center relative">
            {SLIDES.map((slide, index) => (
                <div 
                    key={slide.id}
                    className={`absolute inset-0 flex flex-col items-center justify-center transform ${
                        isMounted ? 'transition-all duration-700' : ''
                    } ${
                        index === currentSlide 
                            ? 'opacity-100 translate-y-0 visible' 
                            : 'opacity-0 translate-y-8 invisible pointer-events-none'
                    }`}
                >
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight tracking-tight text-white">
                        {slide.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-10 drop-shadow-lg font-medium opacity-100 max-w-3xl mx-auto leading-relaxed text-gray-50">
                        {slide.subtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        {/* Primary CTA: Brand Yellow with Black Text (Maintained Original Style) */}
                        <Link 
                            to={slide.primaryCta.link} 
                            className="inline-block px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 bg-secondary text-dark border-2 border-secondary hover:bg-white hover:border-white hover:text-dark shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            {slide.primaryCta.text}
                        </Link>
                        
                        {/* Secondary CTA: Glass Effect with Solid White Outline (Maintained Original Style) */}
                        <Link 
                            to={slide.secondaryCta.link} 
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 bg-white/5 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-dark hover:border-white shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <span>{slide.secondaryCta.text}</span>
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            ))}
         </div>
      </div>

      {/* Navigation Controls (Maintained Original Style) */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary w-10' 
                : 'bg-white/40 w-2 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-all hidden md:flex border border-white/10 hover:border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-all hidden md:flex border border-white/10 hover:border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow text-white opacity-80 z-20">
        <Link to="/#services" aria-label="Scroll down">
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  );
}