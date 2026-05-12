import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Maximize, ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Luxury Villa Plot in Green Enclave',
    location: 'Sirhind City Center',
    price: '₹45 Lakhs',
    size: '250 sq yards',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    type: 'Residential'
  },
  {
    id: 2,
    title: 'Prime Commercial Complex',
    location: 'Fatehgarh Sahib Main Road',
    price: '₹1.2 Crores',
    size: '1200 sq ft',
    status: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    type: 'Commercial'
  },
  {
    id: 3,
    title: 'Fertile Agricultural Land',
    location: 'Outskirts of Sirhind',
    price: '₹85 Lakhs / Acre',
    size: '5 Acres',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80',
    type: 'Farm Land'
  }
];

export default function Properties() {
  return (
    <section id="properties" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-2">Featured Listings</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark">Exclusive Properties</h2>
          </div>
          <button className="flex items-center gap-2 text-brand-green font-medium hover:text-brand-dark transition-colors group">
            View All Properties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-shadow rounded-sm border border-gray-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-brand-dark text-brand-gold px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-sm">
                  {prop.status}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-dark px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-sm">
                  {prop.type}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-semibold mb-2 text-brand-dark">{prop.title}</h4>
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-brand-green" />
                  {prop.location}
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto mb-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Starting Price</p>
                    <p className="text-lg font-semibold text-brand-green">{prop.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Area</p>
                    <p className="flex items-center text-sm font-medium text-brand-dark">
                      <Maximize className="w-4 h-4 mr-1 text-gray-400" />
                      {prop.size}
                    </p>
                  </div>
                </div>

                <button className="w-full py-3 border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-300 rounded-sm font-medium tracking-wide uppercase text-sm">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
