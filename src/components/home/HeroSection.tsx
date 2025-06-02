import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-mavBlue text-white overflow-hidden">
      {/* Background with dark navy gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1526] to-[#11203c]"></div>
      
      {/* Adjust padding-top and padding-bottom of this div to control the gap above and below the content */}
      <div className="container-custom relative z-10 py-4 md:py-8 lg:py-12">
        {/* Content container with grid for text and image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="relative z-20 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              Your Trusted Partner for Premium Used Cars Since 1998
            </h1>
            <p className="text-lg sm:text-xl mb-2 md:mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              25+ years of expertise in car sales, services, and consultancy in Bhimavaram
            </p>

            {/* Car image on mobile, placed between text and buttons */}
            {/* Adjust mt-* class to control the gap above the image */}
            <div className="relative z-10 md:hidden mt-0 mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/assets/c1.png" 
                alt="Premium Car" 
                className="w-full h-auto object-contain max-w-sm mx-auto"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/buy">Browse Cars</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-mavBlue border-white hover:bg-white/10 hover:text-white">
                <Link to="/sell">Sell Your Car</Link>
              </Button>
            </div>
          </div>
          
          {/* Car image on desktop */}
          <div className="relative z-10 hidden md:flex justify-center items-center">
            <img 
              src="/assets/c1.png" 
              alt="Premium Car" 
              className="w-full h-auto object-contain max-w-lg animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
