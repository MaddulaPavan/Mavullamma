
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, DollarSign, Droplet, Shield, Wrench, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Car Sales & Purchase',
    description: 'Wide range of premium verified cars to choose from, with transparent history and documentation.',
    icon: Car
  },
  {
    id: 2,
    title: 'Car Financing',
    description: 'Low-interest financing options with quick approvals and minimal documentation requirements.',
    icon: DollarSign
  },
  {
    id: 3,
    title: 'Premium Car Wash',
    description: 'Professional car washing services that keep your vehicle looking pristine inside and out.',
    icon: Droplet
  },
  {
    id: 4,
    title: 'Paint Protection Services',
    description: 'Ceramic coatings and protective films that maintain your car\'s appearance and value.',
    icon: Shield
  },
  {
    id: 5,
    title: 'Interior & Engine Cleaning',
    description: 'Deep cleaning services that remove dirt, stains, and bacteria for a healthier vehicle.',
    icon: Wrench
  },
  {
    id: 6,
    title: 'Car Buying Consultancy',
    description: 'Expert advice to help you make informed decisions when buying or selling cars.',
    icon: HeadphonesIcon
  }
];

const ServicesOverview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Car Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions for all your automotive needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            
            return (
              <div key={service.id} className="service-card group">
                <div className="bg-mavBlue/10 p-4 rounded-full mb-4 group-hover:bg-mavBlue group-hover:text-white transition-all duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-mavBlue font-medium hover:underline mt-auto inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="btn-primary">
            <Link to="/services" className="inline-flex items-center">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
