import React from 'react';
import { motion } from 'motion/react';
import { Home, Store, Trees, Briefcase, Handshake, Network } from 'lucide-react';

const services = [
  {
    title: 'Residential Plots',
    description: 'Prime locations for your dream home with clear titles and essential amenities.',
    icon: Home,
  },
  {
    title: 'Commercial Spaces',
    description: 'High-visibility properties in Sirhind and Fatehgarh Sahib for business growth.',
    icon: Store,
  },
  {
    title: 'Farm Lands',
    description: 'Fertile agricultural and farmhouse lands for long-term secure investments.',
    icon: Trees,
  },
  {
    title: 'Property Investment',
    description: 'Strategic advisory to maximize your returns in the growing Punjab real estate market.',
    icon: Briefcase,
  },
  {
    title: 'Buying & Selling',
    description: 'Seamless, transparent, and legally sound property transactions handled by experts.',
    icon: Handshake,
  },
  {
    title: 'Real Estate Consultation',
    description: 'Expert market analysis, valuation, and legal guidance for all property matters.',
    icon: Network,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-2">Our Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Comprehensive Real Estate Services</h2>
          <p className="text-gray-400 text-lg font-light">
            Providing end-to-end solutions for all your property needs, ensuring peace of mind and profitable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-darker border border-white/10 p-8 hover:border-brand-gold/50 transition-colors group rounded-sm"
            >
              <service.icon className="w-10 h-10 text-brand-gold mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold mb-3 tracking-wide">{service.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
