
import React from 'react';

const partners = [
  { name: "HDFC Bank", logo: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3" },
  { name: "State Bank of India", logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3" },
  { name: "ICICI Bank", logo: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3" },
  { name: "Axis Bank", logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3" },
  { name: "Kotak Mahindra Bank", logo: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3" },
  { name: "Yes Bank", logo: "https://images.unsplash.com/photo-1563302111-eeada2cb8859?ixlib=rb-4.0.3" },
];

const PartnersMarquee = () => {
  return (
    <div className="bg-gray-50 py-12 overflow-hidden">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Trusted Financial Partners</h2>
        <div className="relative w-full">
          <div className="flex animate-marquee space-x-8 whitespace-nowrap">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-20">
                <div className="bg-white h-full w-full rounded-md shadow-sm flex items-center justify-center p-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;
