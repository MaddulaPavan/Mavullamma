
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-mavBlue text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-mavBlue/75"></div>
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24 text-center">
        <h1 className={`font-bold mb-4 leading-tight ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
