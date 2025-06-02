import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinancialPartnersCarousel from '@/components/financing/FinancialPartnersCarousel';
import PageHeader from '@/components/PageHeader';

const FinancingPage = () => {
  // Add state for EMI calculator
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(9);
  const [loanTenure, setLoanTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate EMI and related values
  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = (interestRate / 12) / 100;
    const numberOfMonths = loanTenure * 12;

    // EMI calculation formula
    const emiAmount = principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths) / 
                     (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);
    
    const totalPayment = emiAmount * numberOfMonths;
    const totalInterestAmount = totalPayment - principal;

    setEmi(Math.round(emiAmount));
    setTotalInterest(Math.round(totalInterestAmount));
    setTotalAmount(Math.round(totalPayment));
  };

  // Recalculate when values change
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div>
      {/* Use PageHeader component with the logo */}
      <PageHeader 
        title={
          <div className="flex justify-center items-center">
            <img 
              src="/assets/mcarslogo.png" 
              alt="Mavullamma Cars Logo" 
              className="h-40 w-auto object-contain"
            />
          </div>
        }
      />
      {/* Intro Paragraph */}
      <div className="section-padding bg-white text-center">
        <div className="container-custom">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Securing the right financing is crucial when buying a car, and at Mavullamma Cars, we make it easy. We offer flexible financing options and partner with trusted institutions to help you get behind the wheel with a plan that suits your budget.
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
                <h3 className="text-xl font-bold mb-4 text-mavBlue text-center">New Car Loans</h3>
                <p className="mb-6 text-gray-700 text-justify">
                  Get competitive interest rates and flexible tenure options for financing your new car purchase.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-justify">Interest rates starting from 7.25%</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-justify">Loan tenure up to 7 years</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-justify">Quick approval process</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-mavBlue text-center">Used Car Loans</h3>
                <p className="mb-6 text-gray-700 text-justify">
                  Affordable financing options for quality pre-owned vehicles with minimal documentation.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-justify">Interest rates starting from 9.5%</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-justify">Loan tenure up to 5 years</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-justify">Flexible repayment options</span>
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
      
      {/* 4-Step Financing Process */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Simple 4-Step Financing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: 1, 
                title: "Apply Online", 
                description: "Fill out our simple online application form with your basic details and requirements" 
              },
              { 
                step: 2, 
                title: "Document Submission", 
                description: "Submit required documents for verification and loan processing" 
              },
              { 
                step: 3, 
                title: "Loan Approval", 
                description: "Get your loan approved within 24-48 hours with competitive interest rates" 
              },
              { 
                step: 4, 
                title: "Drive Your Car", 
                description: "Complete the formalities and drive home your dream car" 
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center relative">
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-mavBlue text-white flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-justify">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-mavBlue" />
                  </div>
                )}
              </div>
            ))}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount ({formatCurrency(loanAmount)})
                    </label>
                    <input 
                      type="range" 
                      min="100000" 
                      max="5000000" 
                      step="50000" 
                      className="w-full" 
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>₹1 Lakh</span>
                      <span>₹50 Lakhs</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate ({interestRate}%)
                    </label>
                    <input 
                      type="range" 
                      min="7" 
                      max="16" 
                      step="0.25" 
                      className="w-full" 
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>7%</span>
                      <span>16%</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tenure ({loanTenure} Years)
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="7" 
                      step="1" 
                      className="w-full" 
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>1 Yr</span>
                      <span>7 Yrs</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="text-center mb-4">
                    <span className="text-sm text-gray-600">Your Monthly EMI</span>
                    <div className="text-3xl font-bold text-mavBlue">
                      {formatCurrency(emi)}
                    </div>
                  </div>
                  
                  <div className="w-full space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Principal Amount</span>
                      <span className="font-medium">{formatCurrency(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Interest</span>
                      <span className="font-medium">{formatCurrency(totalInterest)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Amount Payable</span>
                      <span className="font-medium">{formatCurrency(totalAmount)}</span>
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
              <h3 className="text-xl font-bold mb-4 text-mavBlue text-center">Salaried Individuals</h3>
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
                    <span className="text-justify">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-mavBlue text-center">Self-Employed</h3>
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
                    <span className="text-justify">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Finance Your Car?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your financing options and get started.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinancingPage;
