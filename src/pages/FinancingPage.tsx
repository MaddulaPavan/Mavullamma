
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign, Clock, FileText, Check, Percent, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancingPage = () => {
  // EMI Calculator state
  const [loanAmount, setLoanAmount] = useState(800000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [loanTenure, setLoanTenure] = useState(60); // in months
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate EMI
  useEffect(() => {
    const p = loanAmount;
    const r = interestRate / 100 / 12; // Convert annual rate to monthly
    const n = loanTenure;
    
    if (p > 0 && r > 0 && n > 0) {
      const emiValue = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emiValue * n;
      const totalInterestPayment = totalPayment - p;
      
      setEmi(Math.round(emiValue));
      setTotalInterest(Math.round(totalInterestPayment));
      setTotalAmount(Math.round(totalPayment));
    }
  }, [loanAmount, interestRate, loanTenure]);
  
  // Format amount as Indian currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Financial partner logos
  const partners = [
    { name: 'TVS Credit', logo: 'https://via.placeholder.com/150x80?text=TVS' },
    { name: 'CHOLA', logo: 'https://via.placeholder.com/150x80?text=CHOLA' },
    { name: 'PIRAMAL', logo: 'https://via.placeholder.com/150x80?text=PIRAMAL' },
    { name: 'KOTAK', logo: 'https://via.placeholder.com/150x80?text=KOTAK' },
    { name: 'ICICI Bank', logo: 'https://via.placeholder.com/150x80?text=ICICI' },
    { name: 'HDFC Bank', logo: 'https://via.placeholder.com/150x80?text=HDFC' },
    { name: 'YES Bank', logo: 'https://via.placeholder.com/150x80?text=YES' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3')`,
              filter: 'brightness(0.4)'
            }}
          ></div>
        </div>
        
        <div className="container-custom relative z-10 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Affordable Car Financing Solutions</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8">
            Quick approvals with low interest rates from trusted financial partners
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link to="#eligibility-form">Check Eligibility</Link>
          </Button>
        </div>
      </div>

      {/* Financing Overview */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Seamless Car Financing</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                At Mavullamma Cars, we understand that financing is a crucial part of your car buying journey. 
                That's why we've partnered with India's leading financial institutions to offer you 
                competitive interest rates, quick approvals, and hassle-free processing.
              </p>
              <p>
                Our dedicated team ensures your finance file is closed within just 3 days, allowing 
                you to drive home in your dream car without unnecessary delays. We handle all the 
                paperwork, making the entire process smooth and stress-free for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Financial Partners */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Trusted Financial Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financing Benefits */}
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Financing with Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Percent className="w-10 h-10 text-mavBlue" />,
                title: "Low Interest Rates",
                description: "Competitive rates that fit your budget"
              },
              {
                icon: <Clock className="w-10 h-10 text-mavBlue" />,
                title: "Quick Approvals",
                description: "Get approved within 24-48 hours"
              },
              {
                icon: <FileText className="w-10 h-10 text-mavBlue" />,
                title: "Minimal Documentation",
                description: "Simplified paperwork requirements"
              },
              {
                icon: <CreditCard className="w-10 h-10 text-mavBlue" />,
                title: "Flexible Tenures",
                description: "Choose repayment terms that suit your financial situation"
              },
              {
                icon: <Check className="w-10 h-10 text-mavBlue" />,
                title: "No Hidden Charges",
                description: "Complete transparency in processing fees and terms"
              },
              {
                icon: <CreditCard className="w-10 h-10 text-mavBlue" />,
                title: "Expert Guidance",
                description: "Our team assists you in selecting the best finance option"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-blue-50 p-3 rounded-full">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan Calculator */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">EMI Calculator</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount: {formatCurrency(loanAmount)}
                  </label>
                  <input 
                    type="range" 
                    min="100000" 
                    max="5000000" 
                    step="50000" 
                    value={loanAmount} 
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))} 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹50L</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate: {interestRate}%
                  </label>
                  <input 
                    type="range" 
                    min="5" 
                    max="20" 
                    step="0.5" 
                    value={interestRate} 
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))} 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Tenure: {loanTenure} months
                  </label>
                  <input 
                    type="range" 
                    min="12" 
                    max="84" 
                    step="12" 
                    value={loanTenure} 
                    onChange={(e) => setLoanTenure(parseInt(e.target.value))} 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 Year</span>
                    <span>7 Years</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-1">Your Monthly EMI</h3>
                  <p className="text-3xl font-bold text-mavBlue">{formatCurrency(emi)}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Loan Amount</h4>
                    <p className="text-lg font-semibold">{formatCurrency(loanAmount)}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Total Interest</h4>
                    <p className="text-lg font-semibold">{formatCurrency(totalInterest)}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-500">Total Amount Payable</h4>
                  <p className="text-xl font-bold">{formatCurrency(totalAmount)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Documents Required for Car Loan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-mavBlue">For Salaried Individuals</h3>
              <ul className="space-y-4">
                {[
                  "Identity Proof (Aadhaar, PAN Card, Voter ID)",
                  "Address Proof (Aadhaar, Utility Bills, Passport)",
                  "Income Proof (Salary Slips, Form 16, Bank Statements)",
                  "Passport-sized Photographs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-mavBlue">For Self-Employed Individuals</h3>
              <ul className="space-y-4">
                {[
                  "Identity Proof (Aadhaar, PAN Card, Voter ID)",
                  "Address Proof (Aadhaar, Utility Bills, Passport)",
                  "Business Proof (GST Registration, Business License)",
                  "Income Proof (ITR for last 2 years, Bank Statements)",
                  "Passport-sized Photographs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Financing Process */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple 4-Step Financing Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Application",
                  description: "Submit your loan application with required documents"
                },
                {
                  step: 2,
                  title: "Verification",
                  description: "Quick verification by our partner financial institution"
                },
                {
                  step: 3,
                  title: "Approval",
                  description: "Receive loan approval within 24-48 hours"
                },
                {
                  step: 4,
                  title: "Disbursement",
                  description: "Complete the purchase and drive home your new car"
                }
              ].map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-mavBlue text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is the maximum loan amount I can get?",
                answer: "The maximum loan amount varies based on your income, credit history, and the value of the car. Generally, our partner banks can finance up to 90% of the car's value for new cars and up to 80% for used cars."
              },
              {
                question: "What are the current interest rates?",
                answer: "Interest rates typically range from 7.25% to 15% per annum depending on your credit profile, loan amount, and tenure. We partner with multiple banks to ensure you get the best possible rate."
              },
              {
                question: "Can I get a loan for any car in your inventory?",
                answer: "Yes, you can get financing for any car in our inventory. However, loan terms may vary based on the car's age, model, and condition."
              },
              {
                question: "How long does the approval process take?",
                answer: "Most loan applications are approved within 24-48 hours, provided all necessary documents are submitted correctly."
              },
              {
                question: "Can I pre-close my loan before the tenure ends?",
                answer: "Yes, most loans can be pre-closed after a minimum period (usually 6-12 months). A pre-closure fee (typically 2-5% of the outstanding amount) may apply depending on the bank's policy."
              },
              {
                question: "What if I have a low credit score?",
                answer: "Having a low credit score doesn't automatically disqualify you. We work with multiple financial partners who specialize in different credit profiles. We'll help you find the best possible option based on your situation."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section with Form */}
      <div className="section-padding bg-mavBlue text-white" id="eligibility-form">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Ready to Finance Your Dream Car?</h2>
          <p className="text-center max-w-2xl mx-auto mb-10">
            Fill out the form below to check your eligibility and get started with the car financing process.
          </p>
          
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type *</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                  required
                >
                  <option value="">Select Employment Type</option>
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="business-owner">Business Owner</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income (₹) *</label>
                <input 
                  type="number" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Car of Interest</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                  placeholder="If you have a specific car in mind"
                />
              </div>
              <Button className="w-full">Check Eligibility</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancingPage;
