
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const CallToAction = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="bg-mavBlue p-6 md:p-10 text-white text-center shadow-lg">
          <h2 className={`font-bold mb-4 ${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
            Looking for the Perfect Car? We Can Help!
          </h2>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Let our experts with 25+ years of experience find the ideal vehicle that matches your needs and budget
          </p>
          <div className="flex flex-wrap justify-center">
            <Button asChild size={isMobile ? "default" : "lg"} className="bg-white text-mavBlue hover:bg-gray-100">
              <a href="tel:9701511116">Call Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
