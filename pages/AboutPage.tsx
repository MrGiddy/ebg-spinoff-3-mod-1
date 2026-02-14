import React, { useEffect } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import { Award, Users, Globe, ArrowRight, ShieldCheck, Leaf, Lightbulb, Target } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Award },
    { label: 'Years of Experience', value: '18', icon: Globe },
    { label: 'Expert Professionals', value: '45', icon: Users },
  ];

  const values = [
    {
      title: 'Sustainability',
      description: 'We prioritize environmentally responsible solutions that protect our planet for future generations.',
      icon: Leaf
    },
    {
        title: 'Innovation',
        description: 'Leveraging cutting-edge technology and modern engineering practices to solve complex challenges.',
        icon: Lightbulb
    },
    {
        title: 'Integrity',
        description: 'We uphold the highest standards of professional ethics, transparency, and safety in all our operations.',
        icon: ShieldCheck
    },
    {
        title: 'Precision',
        description: 'Delivering data-driven insights and exact engineering designs that stand the test of time.',
        icon: Target
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop" 
            alt="Engineering Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-white pt-20 text-center">
          <RevealOnScroll direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 drop-shadow-xl">
              About Earthbinders
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-md">
              Pioneering Sustainable Geo-Engineering Solutions Since 2005
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Main Content: Who We Are */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <RevealOnScroll direction="left">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6 relative pb-4 inline-block">
                        Who We Are
                        <span className="absolute bottom-0 left-0 h-[3px] w-20 bg-secondary"></span>
                    </h2>
                    <div className="space-y-6 text-textLight text-lg leading-relaxed">
                        <p>
                        Founded in 2005, Earthbinders Geo-Engineering has established itself as a leader in geological and
                        geo-engineering services. Our team of experienced professionals combines cutting-edge technology
                        with decades of field experience to deliver exceptional results for our clients.
                        </p>
                        <p>
                        We pride ourselves on our commitment to sustainability, technical excellence, and client
                        satisfaction. Our innovative approaches have helped solve complex geological challenges across
                        various industries including construction, mining, energy, and infrastructure development.
                        </p>
                        <p>
                            From complex soil analysis to large-scale foundation design, we bring expertise and reliability to every project, ensuring that the ground you build on is as solid as your vision.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll direction="right" delay={200}>
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                        <img 
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200" 
                            alt="Construction Planning" 
                            className="w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
                         <div className="absolute bottom-8 left-8 right-8 text-white">
                             <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80 text-secondary">Our Philosophy</div>
                             <div className="text-2xl font-heading font-bold">"Building trust from the ground up."</div>
                         </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
      </section>

      {/* Stats Section - Minimal Design */}
      <section className="py-12 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
              <RevealOnScroll direction="up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center px-4 py-4 md:py-0 group">
                            <div className="text-4xl md:text-5xl font-heading font-bold text-primaryDark group-hover:text-dark transition-colors duration-300 mb-2">{stat.value}</div>
                            <div className="flex items-center justify-center gap-2 text-textLight text-xs font-bold uppercase tracking-widest">
                                <stat.icon size={16} className="text-secondary" />
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-light">
          <div className="container mx-auto px-4 max-w-7xl">
              <RevealOnScroll>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">Our Core Values</h2>
                    <p className="text-textLight max-w-2xl mx-auto">The principles that guide our work and define our commitment to excellence.</p>
                </div>
              </RevealOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((val, idx) => (
                      <RevealOnScroll key={idx} delay={idx * 100}>
                          <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 h-full border-t-4 border-secondary">
                              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primaryDark mb-6">
                                  <val.icon size={28} />
                              </div>
                              <h3 className="text-xl font-bold text-dark mb-3">{val.title}</h3>
                              <p className="text-textLight leading-relaxed text-sm">{val.description}</p>
                          </div>
                      </RevealOnScroll>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <RevealOnScroll direction="up">
             <h2 className="text-3xl font-heading font-bold text-dark mb-6">Ready to Start Your Project?</h2>
             <p className="text-lg text-textLight mb-8">
               Our team is ready to bring expertise and innovation to your next development.
             </p>
             <Link 
               to="/contact" 
               className="inline-flex items-center gap-2 px-10 py-4 bg-primaryDark text-white rounded-full font-bold uppercase tracking-wide hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
             >
               Contact Us
               <ArrowRight size={20} />
             </Link>
           </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}