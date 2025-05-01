
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background with dark navy gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1526] to-[#11203c]"></div>
      
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36">
        {/* Content container with full width now that image is removed */}
        <div className="grid grid-cols-1">
          <div className="relative z-20 max-w-3xl">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
