import React from 'react';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

export default function ContactCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        {/* Background Texture - Subtle dots */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
            <RevealOnScroll>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
                    <div className="text-center lg:text-left lg:max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mb-6 leading-tight">
                            Partner with Precision. <br/>
                            <span className="text-primaryDark">Build with Confidence.</span>
                        </h2>
                        <p className="text-lg text-textLight leading-relaxed font-light mb-8 lg:mb-0">
                            Whether you need detailed geological mapping, comprehensive geotechnical investigations, or specialized engineering design, our team is ready to mobilize. Let's discuss how we can add value to your project.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto justify-center lg:justify-start">
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primaryDark text-white rounded-full font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-w-[200px]"
                        >
                            Get in Touch
                            <ArrowRight size={20} />
                        </Link>
                        <Link 
                            to="/portfolio" 
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-gray-300 text-dark rounded-full font-bold uppercase tracking-widest hover:border-dark hover:bg-gray-50 transition-all duration-300 min-w-[200px]"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    </section>
  );
}