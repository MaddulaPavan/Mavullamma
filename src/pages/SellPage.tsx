import React from 'react';
import PageHeader from '@/components/PageHeader';
import { useIsMobile } from '@/hooks/use-mobile';

const SellPage = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <PageHeader 
        title="Sell Your Car"
        subtitle="Get the best value for your vehicle with our transparent process"
        backgroundImage="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3"
      />
      
      {/* Rest of the sell page content */}
      <div className={`section-padding ${isMobile ? 'pt-8' : 'pt-12 md:pt-16'}`}>
        {/* Content will be added here */}
      </div>
    </div>
  );
};

export default SellPage;
