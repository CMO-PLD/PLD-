import React from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-0 relative h-[500px] bg-gray-200">
      {/* Embedded map from the precise provided coordinates */}
      <iframe 
        src="https://maps.google.com/maps?q=30.644491,76.443337&hl=en&z=15&output=embed" 
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
          SIRHIND-CHANDIGARH HIGHWAY,<br />
          village Bhairon Pur
        </p>
      </div>
    </section>
  );
}
