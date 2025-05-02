
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
    <section className="section-padding bg-[#0047AB] text-white relative">
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
              <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
              <span className="text-lg">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
