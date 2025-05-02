import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinancialPartnersCarousel from '@/components/financing/FinancialPartnersCarousel';

const FinancingPage = () => {
  return (
    <div>
      {/* Hero Section - With solid blue background instead of image */}
      <div className="relative bg-mavBlue text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1526] to-[#11203c]"></div>
        
        <div className="container-custom relative z-10 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Car Financing Solutions</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Flexible financing options to help you drive home your dream car
          </p>
        </div>
      </div>
      
      {/* Financial Partners Carousel */}
      <FinancialPartnersCarousel />
      
      {/* Rest of the financing page content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Financing Options</h2>
            <p className="text-lg text-center mb-12">
              At Mavullamma Cars, we partner with leading financial institutions to offer you the best financing solutions 
              tailored to your needs and budget.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-mavBlue">New Car Loans</h3>
                <p className="mb-6 text-gray-700">
                  Get competitive interest rates and flexible tenure options for financing your new car purchase.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Interest rates starting from 7.25%</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Loan tenure up to 7 years</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Quick approval process</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-mavBlue">Used Car Loans</h3>
                <p className="mb-6 text-gray-700">
                  Affordable financing options for quality pre-owned vehicles with minimal documentation.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Interest rates starting from 9.5%</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Loan tenure up to 5 years</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Flexible repayment options</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* EMI Calculator Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">EMI Calculator</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
                    <input 
                      type="range" 
                      min="100000" 
                      max="5000000" 
                      step="50000" 
                      className="w-full" 
                      defaultValue="1000000"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>₹1 Lakh</span>
                      <span>₹50 Lakhs</span>
                    </div>
                    <div className="text-center font-semibold text-lg mt-2">₹10,00,000</div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                    <input 
                      type="range" 
                      min="7" 
                      max="16" 
                      step="0.25" 
                      className="w-full" 
                      defaultValue="9"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>7%</span>
                      <span>16%</span>
                    </div>
                    <div className="text-center font-semibold text-lg mt-2">9.00%</div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tenure (Years)</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="7" 
                      step="1" 
                      className="w-full" 
                      defaultValue="5"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>1 Yr</span>
                      <span>7 Yrs</span>
                    </div>
                    <div className="text-center font-semibold text-lg mt-2">5 Years</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="text-center mb-4">
                    <span className="text-sm text-gray-600">Your Monthly EMI</span>
                    <div className="text-3xl font-bold text-mavBlue">₹20,758</div>
                  </div>
                  
                  <div className="w-full space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Principal Amount</span>
                      <span className="font-medium">₹10,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Interest</span>
                      <span className="font-medium">₹2,45,480</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Amount</span>
                      <span className="font-medium">₹12,45,480</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                This calculator provides an estimate. Actual EMI may vary based on processing fees and other charges.
              </p>
              <Button asChild size="lg" className="bg-mavBlue hover:bg-blue-700">
                <Link to="/contact">Get Personalized Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Documents Required Section */}
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Documents Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-mavBlue">Salaried Individuals</h3>
              <ul className="space-y-3">
                {[
                  "Identity Proof (Aadhar/PAN/Passport)",
                  "Address Proof (Utility Bill/Rental Agreement)",
                  "Income Proof (Salary Slips for 3 months)",
                  "Bank Statements for last 6 months",
                  "Form 16 or IT Returns for last 2 years",
                  "Passport size photographs"
                ].map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-mavBlue">Self-Employed</h3>
              <ul className="space-y-3">
                {[
                  "Identity Proof (Aadhar/PAN/Passport)",
                  "Address Proof (Utility Bill/Property Deed)",
                  "Business Existence Proof",
                  "Bank Statements for last 6 months",
                  "IT Returns for last 2 years",
                  "Balance Sheet & P&L by CA",
                  "Passport size photographs"
                ].map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span>{doc}</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Finance Your Dream Car?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Our finance experts are here to guide you through the entire process and help you get the best deal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-mavBlue hover:bg-gray-100">
              <a href="tel:9701511116">Call Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/contact">Schedule Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancingPage;
