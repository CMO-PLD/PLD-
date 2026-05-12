import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-2">Get In Touch</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">Let's Find Your Perfect Property</h2>
            <p className="text-gray-600 font-light mb-12 max-w-lg">
              Reach out to us for expert consultation, property inquiries, or to schedule a site visit. We are here to help you make informed real estate decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <MapPin className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Office Location</h4>
                  <p className="text-gray-600 font-light text-sm">
                    SIRHIND-CHANDIGARH HIGHWAY,<br />
                    village Bhairon Pur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Phone className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-600 font-light text-sm">+91 9592529908</p>
                  <p className="text-gray-600 font-light text-sm">+91 7986035683</p>
                  <p className="text-gray-600 font-light text-sm">+91 6239550085</p>
                  <p className="text-gray-600 font-light text-sm">+91 7986318552</p>
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
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Mail className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Email Address</h4>
                  <p className="text-gray-600 font-light text-sm">cmo@punjablanddevelopers.in</p>
                </div>
              </div>
            </div>
            
            <button onClick={() => window.open('https://wa.me/919592529908', '_blank')} className="mt-12 bg-green-600 text-white px-8 py-4 font-medium tracking-wide uppercase text-sm rounded-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              Chat on WhatsApp
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
