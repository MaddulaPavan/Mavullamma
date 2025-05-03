
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

const PageHeader = ({ title, subtitle, bgImage }: PageHeaderProps) => {
  return (
    <div className="relative bg-gray-800 text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1526]/90 to-[#11203c]/90"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
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
