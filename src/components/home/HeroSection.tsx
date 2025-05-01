
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
      
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-10 md:mb-0">
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
            <Button asChild size="lg" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/sell">Sell Your Car</Link>
            </Button>
          </div>
        </div>
        
        {/* Added car image */}
        <div className="w-full md:w-1/2 max-w-md animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <img 
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" 
            alt="Premium Car" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
