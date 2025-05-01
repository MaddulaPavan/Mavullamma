
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/lovable-uploads/f6999a3c-e0c6-43d3-87b5-18208a6c7ccc.png')`,
            filter: 'brightness(0.4)'
          }}
        ></div>
      </div>
      
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Your Trusted Partner for Premium Used Cars Since 1998
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            25+ years of expertise in car sales, services, and consultancy in Bhimavaram
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/buy">Browse Inventory</Link>
            </Button>
            <Button asChild size="lg" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/sell">Sell Your Car</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
