import React from 'react';
import { motion } from 'motion/react';
import { Shield, MapPinned, FileCheck, Landmark, PiggyBank, GraduationCap } from 'lucide-react';

const reasons = [
  {
    title: 'Local Market Expertise',
    description: 'Deep-rooted knowledge of Fatehgarh Sahib & Sirhind real estate trends and valuations.',
    icon: MapPinned,
  },
  {
    title: 'Trusted Property Deals',
    description: 'A reputation built on years of honest, transparent, and fair property transactions.',
    icon: Shield,
  },
  {
    title: 'Transparent Process',
    description: 'No hidden fees or surprises. We ensure complete clarity from planning to registration.',
    icon: FileCheck,
  },
  {
    title: 'Prime Locations',
    description: 'Access to the most sought-after residential and commercial zones before they hit the market.',
    icon: Landmark,
  },
  {
    title: 'Investment Guidance',
    description: 'Strategic advice to help multiply your wealth through high-ROI real estate plays.',
    icon: PiggyBank,
  },
  {
    title: 'Professional Support',
    description: 'End-to-end assistance including legal checks, documentation, and smooth handovers.',
    icon: GraduationCap,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-green text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green-light opacity-50 transform skew-x-[-20deg] origin-top-right z-0" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-2">Why Choose Us</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">The Punjab Land Developers Advantage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-sm bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
                  <reason.icon className="w-6 h-6 text-brand-gold" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{reason.title}</h4>
                <p className="text-brand-light/80 font-light leading-relaxed text-sm md:text-base">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
