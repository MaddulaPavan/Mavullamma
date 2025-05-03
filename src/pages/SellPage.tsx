import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Rocket } from 'lucide-react';

const SellPage = () => {
  return (
    <div>
      <PageHeader 
        title="Sell Your Car With Confidence" 
        subtitle="Get the best value for your vehicle with our trusted experts"
        bgImage="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3"
      />
      
      {/* Sell Your Car Section */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Sell Your Car With Us?</h2>
            <p className="text-lg text-gray-700 mb-6">
              We offer a hassle-free and transparent process to help you sell your car quickly and at the best price.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-2">Get a Fair Price</h3>
                <p className="text-gray-600">Our experts provide accurate valuations based on market trends.</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-2">Quick & Easy Process</h3>
                <p className="text-gray-600">We handle all the paperwork and logistics for a seamless experience.</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
                <p className="text-gray-600">Your safety is our priority. We ensure secure transactions and protect your privacy.</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-2">Instant Payment</h3>
                <p className="text-gray-600">Get paid instantly once the deal is finalized. No waiting, no delays.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Submit Your Car Details", description: "Fill out our online form with your car's information." },
              { step: 2, title: "Get an Instant Offer", description: "Receive a preliminary valuation from our experts." },
              { step: 3, title: "Schedule an Inspection", description: "Bring your car in for a quick and thorough inspection." }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-mavBlue/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-mavBlue">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Mavullamma Advantage</h2>
            <p className="text-lg text-center mb-8">Selling your car with us means:</p>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <ul className="space-y-4">
                {[
                  "Hassle-free paperwork",
                  "Competitive pricing",
                  "Secure transactions",
                  "Expert assistance",
                  "Quick payment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start p-3 border border-gray-200 rounded-md">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-mavBlue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell Your Car?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Get started today and receive a free, no-obligation valuation.
          </p>
          <Button asChild size="lg" className="bg-white text-mavBlue hover:bg-gray-100">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
