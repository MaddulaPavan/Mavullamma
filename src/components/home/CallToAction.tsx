
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Map } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-mavBlue to-blue-700 text-white py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for the Perfect Car? We Can Help!</h2>
          <p className="text-lg mb-8">
            Visit our showroom or call us today for expert advice on finding your ideal vehicle
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-mavBlue hover:bg-gray-100">
              <a href="tel:9701511116" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 9701511116
              </a>
            </Button>
            <Button asChild size="lg" className="bg-mavGreen hover:bg-green-700">
              <a href="https://maps.app.goo.gl/2wCkaqN3FXB9tHhV8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Map className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
