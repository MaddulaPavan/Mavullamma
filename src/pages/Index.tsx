
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCars from '@/components/home/FeaturedCars';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <div className="min-w-full">
      <HeroSection />
      <FeaturedCars />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
