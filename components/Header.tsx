import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowRight, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, SERVICE_CATEGORIES } from '../constants';
import { useScrollSpy } from '../hooks/useScrollSpy';
import * as ReactRouterDOM from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const { Link } = ReactRouterDOM;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Extract section IDs for the scroll spy (removing the '/#' prefix)
  const sectionIds = NAV_ITEMS.map(item => item.href.substring(2));
  const activeSection = useScrollSpy(isHomePage ? sectionIds : []);

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset mobile expanded state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setMobileServicesExpanded(false);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getLinkClasses = (href: string) => {
    const sectionId = href.substring(2); // Remove '/#'
    const isActive = isHomePage && (activeSection === sectionId);
    
    return `font-medium relative py-1 transition-colors duration-300 ${
      isActive ? 'text-primaryDark font-semibold' : 'text-dark hover:text-primaryDark'
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;
  };

  const isServicesActive = location.pathname.includes('/services') || (isHomePage && activeSection === 'services');

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled || isOpen || !isHomePage
              ? 'bg-white shadow-md py-3' 
              : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative z-50">
          {/* Logo Section */}
          <Link to="/#home" className="flex items-center gap-3 sm:gap-4 group select-none flex-shrink-0" onClick={closeMenu} aria-label="Earthbinders Homepage">
              {/* Logo Image */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-105">
                 <img 
                   src="https://via.placeholder.com/100x84/539BD4/ffffff?text=EBG" 
                   alt="Earthbinders Logo" 
                   className="w-full h-full object-contain drop-shadow-sm"
                 />
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col justify-center">
                  <div className="font-heading text-lg sm:text-xl leading-none tracking-tight transition-colors duration-300 whitespace-nowrap">
                      <span className="font-bold text-primary">Earthbinders</span> 
                      <span className="font-light text-secondary ml-1">Geo-Engineering</span>
                  </div>
                  <div className="hidden md:block text-[0.6rem] uppercase font-semibold mt-0.5 w-full text-justify [text-align-last:justify] text-dark leading-tight tracking-wider">
                      GEO-ENGINEERING AND GEOLOGICAL CONSULTING FIRM
                  </div>
              </div>
          </Link>

          {/* Desktop Navigation - Right Aligned next to CTA */}
          <nav className="hidden lg:flex flex-1 justify-end px-8" aria-label="Desktop Navigation">
            <ul className="flex items-center gap-8 xl:gap-12">
              {NAV_ITEMS.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <li key={item.label} className="relative group h-full flex items-center" aria-haspopup="true">
                      <div className="flex items-center h-full">
                        <Link 
                          to={item.href}
                          className={`font-medium relative py-1 transition-colors duration-300 flex items-center gap-1.5 ${
                            isServicesActive ? 'text-primaryDark font-semibold' : 'text-dark hover:text-primaryDark'
                          }`}
                        >
                          {item.label}
                          <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180 opacity-70 mt-0.5" />
                          <span className={`absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 ${isServicesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                      </div>

                      {/* Hover bridge to prevent dropdown from closing when moving mouse */}
                      <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>

                      {/* Dropdown Menu - Main Level - ALIGNED RIGHT */}
                      <div className="absolute top-[calc(100%+0.5rem)] right-0 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                         {/* Container */}
                         <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 relative">
                            {/* Arrow Tip - Pointing to the right side where the link text is */}
                            <div className="absolute -top-1.5 right-10 w-3 h-3 bg-white border-t border-l border-gray-100 transform rotate-45"></div>

                            {SERVICE_CATEGORIES.map((category) => (
                              <div key={category.id} className="relative group/item px-2">
                                 {/* Category Item */}
                                 <Link 
                                     to={`/services/${category.id}`}
                                     className="flex items-center justify-between px-3 py-2.5 rounded-lg text-textLight hover:text-dark hover:bg-gray-50 transition-colors group-hover/item:bg-gray-50 group-hover/item:text-dark"
                                 >
                                     <div className="flex items-center gap-3">
                                         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                                             <category.icon size={16} />
                                         </div>
                                         <span className="font-semibold text-sm">{category.title}</span>
                                     </div>
                                     <ChevronRight size={14} className="text-gray-300 group-hover/item:text-primary transition-colors" />
                                 </Link>
 
                                 {/* Submenu (Flyout) - Opens to the RIGHT */}
                                 <div className="absolute top-0 left-[95%] w-64 pl-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 transform group-hover/item:translate-x-0 -translate-x-2 z-50">
                                     <div className="bg-gray-50 rounded-xl shadow-2xl border border-gray-200 p-3 border-l-4 border-l-secondary">
                                         {/* Submenu Links - Simplified */}
                                         <div className="space-y-1">
                                             {category.offerings.map(offering => (
                                                 <Link 
                                                     key={offering.id}
                                                     to={`/services/${category.id}/${offering.id}`}
                                                     className="block px-3 py-2 rounded-lg text-sm text-textLight font-medium hover:text-primaryDark hover:bg-white hover:shadow-sm transition-all duration-200"
                                                 >
                                                     {offering.title}
                                                 </Link>
                                             ))}
                                         </div>
                                         
                                         {/* Submenu Footer */}
                                         <div className="mt-2 pt-2 border-t border-gray-200">
                                             <Link 
                                                 to={`/services/${category.id}`} 
                                                 className="flex items-center justify-between px-2 py-1 text-xs font-bold uppercase tracking-wider text-primaryDark hover:text-dark transition-colors"
                                             >
                                                 <span>View All</span>
                                                 <ArrowRight size={12} />
                                             </Link>
                                         </div>
                                     </div>
                                 </div>
                              </div>
                            ))}
                         </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link 
                      to={item.href} 
                      className={getLinkClasses(item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Side Actions: Desktop CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 flex-shrink-0">
             <Link 
               to="/contact" 
               className="hidden lg:flex group px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 items-center gap-2 bg-primaryDark text-white hover:bg-primary"
             >
               <span>Contact Us</span>
               <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
             </Link>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-dark focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 origin-top overflow-hidden border-t border-gray-100 ${
            isOpen ? 'max-h-[85vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 max-h-[80vh] overflow-y-auto" aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                 // Handle Services Dropdown for Mobile
                 if (item.label === 'Services') {
                   return (
                     <li key={item.label} className="rounded-lg overflow-hidden">
                       <button
                         onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                         className={`w-full flex items-center justify-between p-4 transition-colors ${
                           isServicesActive 
                           ? 'bg-primary/5 text-primaryDark font-semibold' 
                           : 'text-text hover:bg-gray-50 hover:text-primaryDark'
                         }`}
                         aria-expanded={mobileServicesExpanded}
                       >
                         <span className="flex items-center gap-2">
                           {item.label}
                         </span>
                         <ChevronDown size={16} className={`transition-transform duration-300 ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                       </button>

                       {/* Mobile Submenu */}
                       <div className={`bg-gray-50/50 transition-all duration-300 ease-in-out overflow-hidden ${
                         mobileServicesExpanded ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
                       }`}>
                          <Link 
                            to="/#services"
                            className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-text hover:text-primaryDark border-b border-gray-100"
                            onClick={closeMenu}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                            All Services
                          </Link>
                          {SERVICE_CATEGORIES.map(category => (
                            <Link 
                              key={category.id}
                              to={`/services/${category.id}`}
                              className="flex items-center gap-3 px-6 py-3 text-sm text-textLight hover:text-primaryDark hover:bg-gray-100 transition-colors"
                              onClick={closeMenu}
                            >
                              <category.icon size={16} className="text-primary/70" />
                              {category.title}
                            </Link>
                          ))}
                       </div>
                     </li>
                   );
                 }

                 const sectionId = item.href.substring(2);
                 const isActive = isHomePage && (activeSection === sectionId);
                 return (
                  <li key={item.label}>
                    <Link 
                      to={item.href} 
                      className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                        isActive 
                        ? 'bg-primary/5 text-primaryDark font-semibold' 
                        : 'text-text hover:bg-gray-50 hover:text-primaryDark'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                      {isActive && <ChevronRight size={16} />}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 px-2 pb-6">
                <Link 
                  to="/contact" 
                  className="group flex items-center justify-center gap-2 w-full text-center bg-primaryDark text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-primary transition-all duration-300 shadow-lg active:scale-[0.98]"
                  onClick={closeMenu}
                >
                  <span>Contact Us</span>
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}