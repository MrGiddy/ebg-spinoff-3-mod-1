import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import RevealOnScroll from '../components/RevealOnScroll';

export default function ContactPage() {
  // Ensure we start at the top when visiting the contact page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-dark text-white overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
             alt="Office skyscraper" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-dark/70 mix-blend-multiply"></div>
         </div>
         
         {/* Hero Content */}
         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <RevealOnScroll>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
                 Get in Touch
               </h1>
               <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                 Have a project in mind or need expert geological advice? <br className="hidden md:block"/>
                 Our team is ready to provide the solutions you need.
               </p>
            </RevealOnScroll>
         </div>
      </div>

      {/* Main Content */}
      <Contact />
      
      {/* Map Section */}
      <div className="h-[450px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48809.58880453303!2d-105.30567623192248!3d40.02927236545224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec2620e190c3%3A0x62800185994d5051!2sBoulder%2C%20CO%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
           width="100%" 
           height="100%" 
           style={{border:0}} 
           allowFullScreen={true} 
           loading="lazy" 
           title="Office Location"
           className="w-full h-full"
         ></iframe>
         
         {/* Map Overlay Card */}
         <div className="hidden md:block absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300 border border-gray-100">
            <h4 className="font-heading font-bold text-dark mb-2">Earthbinders HQ</h4>
            <p className="text-sm text-textLight mb-1">1234 Geology Way, Suite 500</p>
            <p className="text-sm text-textLight">Boulder, CO 80301</p>
         </div>
      </div>
    </div>
  );
}