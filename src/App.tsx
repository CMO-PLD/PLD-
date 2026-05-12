import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
