import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import SectionHeader from './SectionHeader';

const { Link } = ReactRouterDOM;

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <RevealOnScroll>
          <SectionHeader
            title="OUR SPECIALIZED SERVICES"
            subtitle="Expert-led geological and engineering solutions designed for technical precision and sustainable development."
          />
        </RevealOnScroll>

        <div className="mt-20 space-y-32 lg:space-y-40">
          {SERVICE_CATEGORIES.map((category, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={category.id} className="group relative">
                {/* Decorative background blob for each item - subtle */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-left-20' : '-right-20'} w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -z-10 opacity-60`}></div>

                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>

                  {/* Flashy Image Content */}
                  <div className="w-full lg:w-1/2">
                    <RevealOnScroll direction={isEven ? 'left' : 'right'}>
                      <Link to={`/services/${category.id}`} className="block relative aspect-[4/3] min-h-[240px] rounded-none overflow-hidden shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 [mask-image:linear-gradient(white,white)] z-10">
                        {/* Image with Parallax-like Zoom */}
                        <img
                          src={category.imageUrl}
                          alt={category.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                        />

                        {/* Complex Gradient Overlay - Strengthened for text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/45 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-primary/30 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Mobile Top-Right Arrow Badge */}
                        <div className="sm:hidden absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white shadow-md">
                          <ArrowUpRight size={18} />
                        </div>

                        {/* Floating Glass Card for Icon & Title */}
                        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8">
                          <div className="flex items-center justify-between gap-3 sm:gap-4">
                            <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                              <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 shrink-0 bg-black/25 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:bg-white group-hover:text-primaryDark transition-all duration-500">
                                <category.icon className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                              </div>
                              <div className="text-white min-w-0">
                                <span className="block text-secondary font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-0.5 sm:mb-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:transform sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-500">Explore Category</span>
                                <h4 className="font-heading font-bold text-lg sm:text-2xl lg:text-3xl drop-shadow-lg leading-snug sm:leading-tight [text-wrap:balance] text-white">
                                  {category.title}
                                </h4>
                              </div>
                            </div>

                            {/* Desktop/Tablet Inline Circle Arrow Button */}
                            <div className="hidden sm:flex w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-secondary group-hover:border-secondary group-hover:text-dark transition-all duration-300 transform group-hover:rotate-45">
                              <ArrowUpRight size={24} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </RevealOnScroll>
                  </div>

                  {/* Text Content */}
                  <div className="w-full lg:w-1/2">
                    <RevealOnScroll direction={isEven ? 'right' : 'left'} delay={200}>
                      <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primaryDark text-sm font-bold uppercase tracking-widest border border-primary/20">
                          Expert Solutions
                        </div>

                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-dark group-hover:text-primaryDark transition-colors duration-300 leading-tight">
                          {category.title}
                        </h3>

                        {/* Increased description text size */}
                        <p className="text-textLight text-xl leading-relaxed font-light">
                          {category.description}
                        </p>

                        {/* More visual list with Brand Yellow Ticks */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 py-6 border-t border-gray-100">
                          {category.offerings.slice(0, 4).map((offering) => (
                            <div key={offering.id} className="flex items-start gap-3 group/item">
                              <div className="mt-1 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-dark transition-colors duration-300 shadow-sm">
                                <CheckCircle2 size={12} strokeWidth={4} />
                              </div>
                              <span className="text-text font-semibold text-base group-hover:text-primaryDark transition-colors duration-300">{offering.title}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2">
                          <Link
                            to={`/services/${category.id}`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primaryDark text-white rounded-full font-bold uppercase tracking-wide hover:bg-secondary hover:text-dark group-hover:bg-secondary group-hover:text-dark transition-all duration-300 shadow-xl hover:shadow-lg transform hover:-translate-y-1"
                          >
                            Explore {category.title}
                            <ArrowRight size={20} />
                          </Link>
                        </div>
                      </div>
                    </RevealOnScroll>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}