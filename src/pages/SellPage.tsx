
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, FileText, DollarSign, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

const SellPage = () => {
  const [formData, setFormData] = useState({
    carMake: '',
    carModel: '',
    year: '',
    registrationNumber: '',
    kilometers: '',
    fuelType: 'Petrol',
    transmissionType: 'Manual',
    name: '',
    phone: '',
    email: '',
    contactTime: 'Any Time',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log('Form submitted:', formData);
    toast.success("Thank you! We've received your car details. Our team will contact you shortly.");
    
    // Reset form
    setFormData({
      carMake: '',
      carModel: '',
      year: '',
      registrationNumber: '',
      kilometers: '',
      fuelType: 'Petrol',
      transmissionType: 'Manual',
      name: '',
      phone: '',
      email: '',
      contactTime: 'Any Time',
      additionalInfo: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3')`,
              filter: 'brightness(0.4)'
            }}
          ></div>
        </div>
        
        <div className="container-custom relative z-10 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sell Your Car with Confidence</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8">
            Get the best value for your vehicle with our expert evaluation
          </p>
          <Button size="lg" className="btn-primary">
            Get a Free Valuation
          </Button>
        </div>
      </div>

      {/* Why Sell With Us */}
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Sell Your Car with Mavullamma Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-10 h-10 text-mavBlue" />,
                title: "Fair & Competitive Pricing",
                description: "Get the true value of your car based on expert evaluation"
              },
              {
                icon: <Clock className="w-10 h-10 text-mavBlue" />,
                title: "Quick Process",
                description: "Complete the sale in as little as 24 hours"
              },
              {
                icon: <FileText className="w-10 h-10 text-mavBlue" />,
                title: "Hassle-Free Documentation",
                description: "We handle all the paperwork for you"
              },
              {
                icon: <DollarSign className="w-10 h-10 text-mavBlue" />,
                title: "Immediate Payment",
                description: "Receive payment quickly and securely"
              },
              {
                icon: <Check className="w-10 h-10 text-mavBlue" />,
                title: "No Hidden Charges",
                description: "Transparent process with no surprise fees"
              },
              {
                icon: <Check className="w-10 h-10 text-mavBlue" />,
                title: "Expert Evaluation",
                description: "Our team has 25+ years of experience in car valuation"
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

      {/* How It Works */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple 3-Step Selling Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Contact Us",
                  description: "Call us or fill the form with your car details"
                },
                {
                  step: 2,
                  title: "Get Evaluated",
                  description: "Our experts will inspect your car and provide a fair valuation"
                },
                {
                  step: 3,
                  title: "Complete Sale",
                  description: "Accept our offer and receive immediate payment"
                }
              ].map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-mavBlue text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-mavBlue" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Car Submission Form */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Submit Your Car Details</h2>
            <p className="text-center mb-8 text-gray-600">
              Fill in the details below and our team will get back to you with a fair valuation.
            </p>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Car Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Car Make *</label>
                  <input 
                    type="text" 
                    name="carMake" 
                    value={formData.carMake} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Car Model *</label>
                  <input 
                    type="text" 
                    name="carModel" 
                    value={formData.carModel} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year of Manufacture *</label>
                  <input 
                    type="number" 
                    name="year" 
                    value={formData.year} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                    min="1990" 
                    max={new Date().getFullYear()} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number *</label>
                  <input 
                    type="text" 
                    name="registrationNumber" 
                    value={formData.registrationNumber} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kilometers Driven *</label>
                  <input 
                    type="number" 
                    name="kilometers" 
                    value={formData.kilometers} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                    min="0" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
                  <select 
                    name="fuelType" 
                    value={formData.fuelType} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="CNG">CNG</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Transmission Type</label>
                  <select 
                    name="transmissionType" 
                    value={formData.transmissionType} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                  >
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                    <option value="CVT">CVT</option>
                    <option value="DCT">DCT</option>
                  </select>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Time</label>
                  <select 
                    name="contactTime" 
                    value={formData.contactTime} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                  >
                    <option value="Any Time">Any Time</option>
                    <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                    <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                    <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea 
                  name="additionalInfo" 
                  value={formData.additionalInfo} 
                  onChange={handleChange} 
                  rows={4} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                  placeholder="Please share any other details about your car that might help us with the valuation..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full md:w-auto btn-primary">
                Submit for Valuation
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What documents do I need to sell my car?",
                answer: "You'll need your car registration certificate (RC), insurance papers, PUC certificate, service history, and a valid ID proof such as Aadhaar card or driving license."
              },
              {
                question: "How is the value of my car determined?",
                answer: "We consider factors like the make and model, year of manufacture, kilometers driven, overall condition, service history, market demand, and any modifications or accessories."
              },
              {
                question: "How long does the selling process take?",
                answer: "The entire process can be completed within 24-48 hours once you accept our offer. In many cases, we can complete the purchase on the same day."
              },
              {
                question: "Is there any obligation to sell after getting a valuation?",
                answer: "No, there's absolutely no obligation. You're free to decline our offer if you're not satisfied with the valuation."
              },
              {
                question: "What types of cars do you purchase?",
                answer: "We purchase all types of cars including sedans, hatchbacks, SUVs, and luxury vehicles. We particularly focus on premium used cars in good condition."
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

      {/* CTA Section */}
      <div className="section-padding bg-mavBlue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell Your Car?</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-white text-mavBlue hover:bg-gray-100">
              <a href="tel:9701511116">Call Now: 9701511116</a>
            </Button>
            <Button asChild size="lg" className="bg-transparent text-white border border-white hover:bg-white/10">
              <Link to="/contact">Visit Our Showroom</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
