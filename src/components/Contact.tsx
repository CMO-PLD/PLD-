import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-2">Get In Touch</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">Let's Find Your Perfect Property</h2>
            <p className="text-gray-600 font-light mb-10 max-w-lg">
              Reach out to us for expert consultation, property inquiries, or to schedule a site visit. We are here to help you make informed real estate decisions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <MapPin className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Office Location</h4>
                  <p className="text-gray-600 font-light text-sm">
                    Main Market, Sirhind Road,<br />
                    Fatehgarh Sahib, Punjab 140406
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Phone className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-600 font-light text-sm">+91 98765 43210</p>
                  <p className="text-gray-600 font-light text-sm">+91 99887 76655</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Clock className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Working Hours</h4>
                  <p className="text-gray-600 font-light text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600 font-light text-sm">Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-serif font-medium text-brand-dark mb-6">Send an Inquiry</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-shadow"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-brand-dark mb-1">Property Interest</label>
                  <select 
                    id="interest" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-shadow"
                  >
                    <option>Residential Plot</option>
                    <option>Commercial Property</option>
                    <option>Farm Land</option>
                    <option>Investment Advice</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-shadow resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button type="button" className="flex-1 bg-brand-dark text-white py-4 font-medium tracking-wide uppercase text-sm rounded-sm hover:bg-brand-darker transition-colors">
                  Submit Inquiry
                </button>
                <button type="button" className="flex-1 bg-green-600 text-white py-4 font-medium tracking-wide uppercase text-sm rounded-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  WhatsApp Contact
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
