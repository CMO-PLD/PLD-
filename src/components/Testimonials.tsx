import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Gurpreet Singh',
    role: 'Homeowner',
    content: 'Punjab Land Developers made finding our dream home in Sirhind incredibly easy. Their transparency and knowledge of the area are unmatched. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
  {
    name: 'Baljit Kaur',
    role: 'Investor',
    content: 'I have invested in multiple commercial properties through them. Their market insights are spot on, and they handle all the legal paperwork flawlessly. A truly premium service.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
  {
    name: 'Rajinder Sharma',
    role: 'Farm Land Buyer',
    content: 'Bought 5 acres of agricultural land near Fatehgarh Sahib. The entire process was smooth, honest, and professional. They are the best property dealers in the region.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-2">Client Reviews</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark max-w-2xl">What Our Clients Say About Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100" />
              
              <div className="flex text-brand-gold mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 italic font-serif leading-relaxed mb-8 relative z-10">
                "{test.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={test.image} 
                  alt={test.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-green/20"
                />
                <div>
                  <h4 className="font-semibold text-brand-dark">{test.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
