
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="bg-mavBlue p-6 md:p-8 lg:p-10 text-white text-center rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Looking for the Perfect Car? We Can Help!</h2>
          <p className="text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto">
            Let our experts with 25+ years of experience find the ideal vehicle that matches your needs and budget
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="w-full md:w-auto bg-white text-mavBlue hover:bg-gray-100">
              <a href="tel:9701511116">Call Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
