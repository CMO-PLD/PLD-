import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark/90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border-brand-gold/30 mb-6">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium tracking-wide text-brand-light uppercase">
              Fatehgarh Sahib & Sirhind
            </span>
          </div>
          <h2 className="text-brand-gold tracking-[0.2em] text-sm md:text-base font-semibold uppercase mb-4">
            Punjab Land Developers
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium max-w-4xl mx-auto leading-tight">
            Building Trust Through <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark">
              Real Estate Excellence
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Premium residential, commercial, and investment property deals in the heart of Punjab.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a href="#properties" className="group flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-darker font-semibold hover:bg-brand-gold-light transition-all duration-300 rounded-sm">
            Explore Properties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 rounded-sm backdrop-blur-sm">
            <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
            Contact on WhatsApp
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          {[
            { icon: Building2, text: "Trusted Local Developers" },
            { icon: ShieldCheck, text: "Verified Property Deals" },
            { icon: MapPin, text: "Prime Investment Guidance" }
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 glass-dark px-6 py-4 rounded-sm">
              <badge.icon className="w-6 h-6 text-brand-gold" />
              <span className="text-gray-200 font-medium text-sm tracking-wide">{badge.text}</span>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
