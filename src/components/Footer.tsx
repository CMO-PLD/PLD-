import React from 'react';
import { Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h2 className="text-xl font-serif font-semibold text-brand-gold mb-6 uppercase tracking-widest">
              Punjab Land<br/>Developers
            </h2>
            <p className="text-brand-light/70 font-light text-sm leading-relaxed mb-6">
              Your trusted partner for premium real estate investments, residential plots, and commercial properties in Fatehgarh Sahib and Sirhind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Featured Properties', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-brand-light/70 hover:text-brand-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Residential Plots', 'Commercial Spaces', 'Farm Lands', 'Property Valuation', 'Legal Consultation'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-brand-light/70 hover:text-brand-gold transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-light/70">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span>Sirhind Road, Fatehgarh Sahib,<br/>Punjab, India 140406</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-light/70">
                <span className="text-brand-gold font-medium">📞</span>
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-light/70">
                <span className="text-brand-gold font-medium">✉️</span>
                info@punjablanddevelopers.com
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-light/50">
          <p>© {new Date().getFullYear()} Punjab Land Developers. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
