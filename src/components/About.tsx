import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Home, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '15+', icon: Award },
  { label: 'Happy Clients', value: '500+', icon: Users },
  { label: 'Properties Sold', value: '350+', icon: Home },
  { label: 'Trusted Investments', value: '₹100Cr+', icon: TrendingUp },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-2">About Us</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark leading-tight">
                A Legacy of Trust in Punjab Real Estate
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              <strong className="font-semibold text-brand-green">PUNJAB LAND DEVELOPERS</strong> is a trusted name in Fatehgarh Sahib and Sirhind real estate. We specialize in helping clients find premium residential, commercial, and investment properties with absolute transparency and reliability.
            </p>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Whether you are looking to build your dream home, establish a commercial venture, or secure high-yield farmland, our deep local expertise ensures you make the right investment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-green/5 rounded-full flex items-center justify-center mb-4 text-brand-green">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-serif font-semibold text-brand-dark mb-1">{stat.value}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
