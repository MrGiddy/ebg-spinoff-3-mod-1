import React from 'react';
import { SOCIAL_LINKS, SERVICE_CATEGORIES, CONTACT_INFO } from '../constants';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const { Link } = ReactRouterDOM;

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  // Helper to safely get contact info from constants
  const address = CONTACT_INFO.find(c => c.id === 'office');
  const email = CONTACT_INFO.find(c => c.id === 'email');
  const phone = CONTACT_INFO.find(c => c.id === 'phone');

  return (
    <footer className="bg-dark text-white pt-16 pb-8 relative overflow-hidden border-t border-white/5">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Socials (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
                <Link to="/" className="inline-block group mb-4">
                    <h2 className="text-2xl font-heading font-bold tracking-tight text-primary transition-colors">
                    Earthbinders <span className="text-secondary font-light block text-lg">Geo-Engineering</span>
                    </h2>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Delivering precision-driven geological analysis and engineering solutions for a resilient, sustainable future.
                </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                    <a 
                    key={social.id} 
                    href={social.href}
                    aria-label={`Follow on ${social.id}`}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <social.icon size={16} />
                    </a>
                ))}
            </div>
          </div>

          {/* Column 2: Services (Span 2) */}
          <div className="lg:col-span-2">
                 <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 relative inline-block">
                    Services
                    <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full"></span>
                </h3>
                <ul className="space-y-3">
                  {SERVICE_CATEGORIES.map((category) => (
                    <li key={category.id}>
                      <Link 
                        to={`/services/${category.id}`} 
                        className="text-gray-400 hover:text-secondary transition-colors text-sm block"
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
          </div>

          {/* Column 3: Company (Span 2) */}
          <div className="lg:col-span-2">
                 <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 relative inline-block">
                    Company
                    <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full"></span>
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.href} 
                        className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center group"
                      >
                         <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <ArrowRight size={10} className="mr-1" />
                        </span>
                         {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
          </div>

          {/* Column 4: Contact (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 relative inline-block">
                Get in Touch
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full"></span>
            </h3>
            
            <ul className="space-y-4">
                {address && (
                    <li className="flex items-start gap-3 text-sm text-gray-400">
                        <div className="mt-0.5 shrink-0 text-primary">
                            <address.icon size={16} />
                        </div>
                        <span className="leading-snug">
                            {address.lines.map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                        </span>
                    </li>
                )}
                {email && (
                    <li className="flex items-start gap-3 text-sm text-gray-400">
                        <div className="mt-0.5 shrink-0 text-primary">
                            <email.icon size={16} />
                        </div>
                        <div className="flex flex-col leading-snug">
                           {email.lines.map((line, i) => (
                             <a key={i} href={`mailto:${line}`} className="hover:text-white transition-colors">{line}</a>
                           ))}
                        </div>
                    </li>
                )}
                {phone && (
                    <li className="flex items-start gap-3 text-sm text-gray-400">
                         <div className="mt-0.5 shrink-0 text-primary">
                            <phone.icon size={16} />
                        </div>
                        <div className="flex flex-col leading-snug">
                           {phone.lines.map((line, i) => (
                             <a key={i} href={`tel:${line.replace(/\D/g,'')}`} className="hover:text-white transition-colors">{line}</a>
                           ))}
                        </div>
                    </li>
                )}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Earthbinders Geo-Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link to="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-secondary transition-colors">Terms</Link>
            <Link to="#" className="hover:text-secondary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}