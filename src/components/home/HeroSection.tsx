
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-[#0b1526] text-white overflow-hidden">
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative z-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              Your Trusted Partner for Premium Used Cars Since 1998
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              25+ years of expertise in car sales, services, and consultancy in Bhimavaram
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/buy">Browse Cars</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-mavBlue border-white hover:bg-white/10 hover:text-white">
                <Link to="/sell">Sell Your Car</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-end">
            <img 
              src="/lovable-uploads/994077b9-89f7-4d8b-9475-74ddc3b161c3.png" 
              alt="Premium Car" 
              className="max-w-full object-contain animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
