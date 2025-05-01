
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background with dark navy gradient */}
      <div className="absolute inset-0 z-0 bg-[#0b1526]"></div>
      
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="max-w-xl mb-10 md:mb-0 md:pr-8 lg:pr-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Your Trusted Partner for Premium Used Cars Since 1998
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            25+ years of expertise in car sales, services, and consultancy in Bhimavaram
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/buy">Browse Inventory</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/sell">Sell Your Car</Link>
            </Button>
          </div>
        </div>
        
        {/* Car Image - Now positioned to look like it's part of the background */}
        <div className="w-full md:w-1/2 lg:w-3/5 relative md:absolute md:right-0 md:bottom-0 md:top-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <img 
            src="/lovable-uploads/939842be-d16b-43ca-aee4-0691caea6ba5.png" 
            alt="Premium Car" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
