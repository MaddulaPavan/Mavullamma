import React from 'react';
import PageHeader from '@/components/PageHeader';
import { useIsMobile } from '@/hooks/use-mobile';

const ServicesPage = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive automotive solutions to keep your car running smoothly"
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3"
      />
      
      {/* Rest of the services page content */}
      <div className={`section-padding ${isMobile ? 'pt-8' : 'pt-12 md:pt-16'}`}>
        {/* Services content would go here */}
      </div>
    </div>
  );
};

export default ServicesPage;
