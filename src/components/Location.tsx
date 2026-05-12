import React from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-0 relative h-[500px] bg-gray-200">
      {/* 
        This is a placeholder for a real Google Map iframe.
        In a production environment, replace src with the actual embedded map URL from Google Maps. 
      */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.1349079973804!2d76.3897!3d30.6402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391008064dc98aab%3A0xe72618991a9f029b!2sFatehgarh%20Sahib%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
        className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
      ></iframe>
      
      {/* Floating Location Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-1/2 md:left-24 lg:left-32 md:-translate-y-1/2 bg-white p-8 shadow-2xl z-10 rounded-sm w-11/12 max-w-sm border-t-4 border-brand-green">
        <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
          <MapPin className="w-6 h-6 text-brand-green" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-brand-dark mb-2">Our Location</h3>
        <p className="text-gray-600 font-light mb-4">
          Visit us at our head office for a face-to-face consultation. We are centrally located in Fatehgarh Sahib.
        </p>
        <div className="h-px w-full bg-gray-100 mb-4"></div>
        <p className="text-sm font-medium text-brand-dark mb-1">Punjab Land Developers</p>
        <p className="text-sm text-gray-500 font-light leading-relaxed">
          Main Market, Sirhind Road,<br />
          Fatehgarh Sahib,<br />
          Punjab, India - 140406
        </p>
      </div>
    </section>
  );
}
