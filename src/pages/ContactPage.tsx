
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Sales Inquiry',
    message: ''
  });

  const [consultForm, setConsultForm] = useState({
    name: '',
    phone: '',
    email: '',
    consultationType: 'Car Purchase Advice',
    date: '',
    time: '',
    questions: ''
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  const handleConsultChange = (e) => {
    const { name, value } = e.target;
    setConsultForm({
      ...consultForm,
      [name]: value
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    toast.success('Thank you! Your message has been sent. We will get back to you shortly.');
    
    setContactForm({
      name: '',
      phone: '',
      email: '',
      subject: 'Sales Inquiry',
      message: ''
    });
  };

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation form submitted:', consultForm);
    toast.success('Thank you! Your consultation request has been received. We will contact you to confirm the appointment.');
    
    setConsultForm({
      name: '',
      phone: '',
      email: '',
      consultationType: 'Car Purchase Advice',
      date: '',
      time: '',
      questions: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-800 text-white">
        <div className="container-custom py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch with Mavullamma Cars</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            We're here to help with all your car-related needs
          </p>
        </div>
      </div>

      {/* Contact Information and Map */}
      <div className="section-padding bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Reach Us</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-mavBlue mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-700">
                      Mavullamma Cars<br />
                      Main Road, Near Bus Stand<br />
                      Bhimavaram, Andhra Pradesh<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-mavBlue mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:9701511116" className="hover:text-mavBlue">9701511116</a><br />
                      <a href="tel:8074504580" className="hover:text-mavBlue">8074504580</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-mavBlue mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@mavullammacars.com" className="hover:text-mavBlue">info@mavullammacars.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-mavBlue mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <table className="text-gray-700">
                      <tbody>
                        <tr>
                          <td className="pr-4">Monday - Saturday:</td>
                          <td>9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td className="pr-4">Sunday:</td>
                          <td>10:00 AM - 6:00 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Location</h2>
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://maps.google.com/maps?q=bhimavaram&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy"
                  title="Mavullamma Cars Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="section-padding bg-gray-100">
        <div className="container mx-auto px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Our Showroom</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Experience our services firsthand by visiting our showroom in Bhimavaram. 
            Our team is ready to assist you with all your car-related needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="https://maps.google.com/maps?q=bhimavaram" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-mavBlue hover:bg-gray-100">
              <a href="tel:9701511116">Call Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="section-padding bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            
            <form onSubmit={handleContactSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={contactForm.name} 
                    onChange={handleContactChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={contactForm.phone} 
                    onChange={handleContactChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={contactForm.email} 
                  onChange={handleContactChange} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue" 
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select 
                  name="subject" 
                  value={contactForm.subject} 
                  onChange={handleContactChange} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                >
                  <option value="Sales Inquiry">Sales Inquiry</option>
                  <option value="Service Booking">Service Booking</option>
                  <option value="Financing">Financing</option>
                  <option value="Consultancy">Consultancy</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea 
                  name="message" 
                  value={contactForm.message} 
                  onChange={handleContactChange} 
                  rows={5} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                  required 
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full md:w-auto">Send Message</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Car Buying Consultancy */}
      <div className="section-padding bg-gray-100">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Expert Car Buying Consultancy</h2>
            <p className="text-center text-gray-700 mb-12 text-lg">
              With 25+ years of experience in the automotive industry, Mr. Maddula Srinivasa Rao (Mavullamma Srinu) 
              offers expert consultancy services to help you make informed decisions about buying or selling cars.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Our Consultancy Services Include:</h3>
                <ul className="space-y-3">
                  {[
                    "Professional car valuation and price negotiation advice",
                    "Assessment of car condition and potential maintenance costs",
                    "Guidance on selecting the right car for your needs and budget",
                    "Expert opinion on market trends and resale value",
                    "Assistance with documentation and transfer procedures",
                    "Business mentorship for those interested in the automotive field"
                  ].map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-green-500 mr-3">✓</div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-center">Why Choose Our Consultation?</h3>
                <div className="space-y-4">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-2 text-mavBlue font-bold text-xl">25+</div>
                    <p className="text-gray-700">Years of Industry Experience</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-2 text-mavBlue font-bold text-xl">10L+</div>
                    <p className="text-gray-700">Satisfied Customers</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-2 text-mavBlue font-bold text-xl">100%</div>
                    <p className="text-gray-700">Transparent Advice</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 text-center">Book a Consultation Session</h2>
            <form onSubmit={handleConsultSubmit} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={consultForm.name} 
                    onChange={handleConsultChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={consultForm.phone} 
                    onChange={handleConsultChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={consultForm.email} 
                  onChange={handleConsultChange} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue" 
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Consultation Type *</label>
                <select 
                  name="consultationType" 
                  value={consultForm.consultationType} 
                  onChange={handleConsultChange} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                  required
                >
                  <option value="Car Purchase Advice">Car Purchase Advice</option>
                  <option value="Car Sale Advice">Car Sale Advice</option>
                  <option value="Price Negotiation">Price Negotiation</option>
                  <option value="Business Mentorship">Business Mentorship</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={consultForm.date} 
                    onChange={handleConsultChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                  <input 
                    type="time" 
                    name="time" 
                    value={consultForm.time} 
                    onChange={handleConsultChange} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Specific Questions/Requirements</label>
                <textarea 
                  name="questions" 
                  value={consultForm.questions} 
                  onChange={handleConsultChange} 
                  rows={4} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full md:w-auto">Request Consultation</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
