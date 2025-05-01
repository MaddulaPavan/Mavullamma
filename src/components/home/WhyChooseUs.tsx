
import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  "25+ Years of Industry Experience",
  "Wide Selection of Premium Used Cars",
  "Verified Showroom Track Records",
  "Low-Interest Financing Options",
  "10 Lakh+ Satisfied Customers",
  "Expert Car Buying Consultancy"
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
      {/* Background car silhouette - subtle */}
      <div className="absolute right-0 bottom-0 opacity-5">
        <svg width="600" height="400" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M786.4,204.2c-10.1-24-35.4-72.5-71-107.6C679.7,62.9,640.9,23.9,577.5,14.7c-63.4-9.3-85.4,5.9-99.4,30
            c-14,24.1-45.1,20.9-67.2,19.6c-22-1.3-59.3-15.3-124.5-15.3S176.8,62.3,116.3,69.3S14.7,96.7,7.6,121.9c-7.1,25.3-7.6,43.3-6.8,61.5
            c0.8,18.2,14.4,32.1,14.4,32.1s23.7,27.3,92.2,36.8c0,0,28.8,14.3,58.5,23.4c29.7,9.1,66.1,14.3,66.1,14.3l4.8,20.3
            c0,0,13.1,23.3,31.2,27.1c18.1,3.8,137.9,5.1,137.9,5.1s119.9-1.3,134.2-5.1c14.3-3.8,30.1-20.3,33.1-26.3c3-6.1,3.3-8.6,3.3-8.6
            s83.9-9.4,120.9-14.8c36.9-5.4,55.7-22.5,61.4-29.1C764.5,250,796.5,228.2,786.4,204.2z M240.7,286.8c0,0-7.1-27.8-7.1-33.4
            c0-5.5,4.6-19.8,32.4-19.8c27.8,0,323.7,0,323.7,0s21,5,21,19.3c0,14.3-5.5,33.9-5.5,33.9H240.7z M206.8,214.2
            c-20.2,0-36.5-16.3-36.5-36.5s16.3-36.5,36.5-36.5s36.5,16.3,36.5,36.5S227,214.2,206.8,214.2z M626.1,214.2
            c-20.2,0-36.5-16.3-36.5-36.5s16.3-36.5,36.5-36.5s36.5,16.3,36.5,36.5S646.2,214.2,626.1,214.2z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Mavullamma Cars</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've been helping customers find their perfect cars for over two decades with trust and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CheckCircle className="h-6 w-6 text-mavBlue flex-shrink-0 mt-0.5" />
              <span className="text-lg">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
