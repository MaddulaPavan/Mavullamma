
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="section-padding bg-[#0b1526]">
      <div className="container-custom">
        <div className="text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for the Perfect Car? We Can Help!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our experts with 25+ years of experience find the ideal vehicle that matches your needs and budget
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-mavBlue hover:bg-gray-100">
              <a href="tel:9701511116">Call Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
