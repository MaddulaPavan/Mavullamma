
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCars from '@/components/home/FeaturedCars';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-w-full">
      <HeroSection />
      <FeaturedCars />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <div className="text-center py-4 text-sm text-gray-500">
        <Link to="/terms" className="hover:underline">Terms and Conditions</Link>
      </div>
    </div>
  );
};

export default Index;
