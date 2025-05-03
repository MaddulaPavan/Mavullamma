
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative bg-mavBlue text-white overflow-hidden">
      {/* Background with dark navy gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1526] to-[#11203c]"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-28">
        {/* Content container with grid for text and image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-20">
            <h1 className={`font-bold mb-4 leading-tight animate-fade-in ${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl md:text-6xl'}`}>
              Your Trusted Partner for Premium Used Cars Since 1998
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              25+ years of expertise in car sales, services, and consultancy in Bhimavaram
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size={isMobile ? "default" : "lg"} className="btn-primary">
                <Link to="/buy">Browse Cars</Link>
              </Button>
              <Button asChild size={isMobile ? "default" : "lg"} className="bg-white text-mavBlue border-white hover:bg-white/10 hover:text-white">
                <Link to="/sell">Sell Your Car</Link>
              </Button>
            </div>
          </div>
          
          {/* Car image on the right */}
          <div className="relative z-10 hidden md:block">
            <img 
              src="/lovable-uploads/939842be-d16b-43ca-aee4-0691caea6ba5.png" 
              alt="Premium Car" 
              className="w-full h-auto object-contain animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
