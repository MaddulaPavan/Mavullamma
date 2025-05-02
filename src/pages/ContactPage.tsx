import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#0b1526] text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            We're here to answer your questions and provide the assistance you need
          </p>
        </div>
      </div>

      {/* Reach Us & Location Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-mavBlue/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-mavBlue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our consultants</p>
              <a href="tel:9701511116" className="text-mavBlue font-semibold text-lg hover:underline">9701511116</a>
              <a href="tel:8074504580" className="text-mavBlue font-semibold text-lg hover:underline mt-2">8074504580</a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-mavBlue/10 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8 text-mavBlue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your queries anytime</p>
              <a href="mailto:info@mavullammacars.com" className="text-mavBlue font-semibold hover:underline">info@mavullammacars.com</a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-mavBlue/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-mavBlue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come to our showroom</p>
              <address className="not-italic text-gray-600">
                Bhimavaram, Andhra Pradesh, India
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Car Buying Consultancy */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Expert Car Buying Consultancy</h2>
              <p className="text-gray-600 mb-6">
                With over 25 years of experience in the automotive industry, our founder 
                Mr. Maddula Srinivasa Rao provides personalized car buying consultancy 
                to help you make the right decision.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <span className="text-mavBlue font-bold">•</span>
                  <span className="text-gray-600">Professional advice on car selection based on your needs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-mavBlue font-bold">•</span>
                  <span className="text-gray-600">Expert evaluation of vehicle condition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-mavBlue font-bold">•</span>
                  <span className="text-gray-600">Guidance on financing options and paperwork</span>
                </li>
              </ul>
              <Button asChild className="btn-primary">
                <a href="tel:9701511116">Schedule a Consultation</a>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3" 
                alt="Car Consultant" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book a Consultation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Book a Consultation Session</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to schedule a personal consultation with our car experts
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What kind of car are you looking for?</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                  placeholder="Tell us about your car requirements, budget, and preferences"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date and Time</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                  />
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button type="submit" className="btn-primary px-10">Book Consultation</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Visit Our Showroom */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Showroom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Come and see our collection in person at our showroom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
              {/* This would be a map component in a real project */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-gray-500 text-lg">
                  Map Location: Bhimavaram, Andhra Pradesh
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Showroom Address</h3>
                <p className="text-gray-600 mb-6">
                  Bhimavaram, Andhra Pradesh, India
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Working Hours:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Saturday:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </li>
                </ul>
                
                <h4 className="font-semibold text-lg mb-3">Get Directions:</h4>
                <div className="flex space-x-4">
                  <Button asChild className="btn-primary">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      Google Maps
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:9701511116">Call for Directions</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Send Us a Message */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mavBlue focus:border-transparent"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <Button type="submit" className="btn-primary px-10">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
