
import React, { useEffect, useRef } from 'react';

const financialPartners = [
  { name: "ICICI Bank", logo: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3" },
  { name: "HDFC Bank", logo: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3" },
  { name: "SBI", logo: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3" },
  { name: "Axis Bank", logo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3" },
  { name: "Kotak Mahindra", logo: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3" },
];

const FinancialPartnersCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };
    
    const scrollInterval = setInterval(scroll, 30);
    
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="w-full bg-gray-50 py-8 overflow-hidden">
      <div className="container-custom mb-4">
        <h2 className="text-2xl font-bold text-center mb-6">Our Financial Partners</h2>
      </div>
      
      <div 
        ref={scrollRef} 
        className="flex items-center overflow-x-hidden whitespace-nowrap" 
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Double the items to create a seamless loop */}
        {[...financialPartners, ...financialPartners].map((partner, index) => (
          <div 
            key={index} 
            className="inline-flex flex-col items-center justify-center mx-6"
          >
            <div className="w-36 h-16 bg-white flex items-center justify-center p-3 rounded shadow">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="mt-2 font-medium text-sm">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialPartnersCarousel;
