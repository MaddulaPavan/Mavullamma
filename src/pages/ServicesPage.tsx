import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Layers, Shield, Activity, Zap, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  // Service categories
  const serviceCategories = [
    {
      id: 'paint-protection',
      title: 'Paint Protection',
      services: [
        {
          id: 'ceramic-coating',
          title: 'Ceramic Coating',
          description: 'The ultimate solution for long-lasting protection with a high-gloss finish. Our ceramic coating enhances your car\'s shine while providing self-healing properties for minor scratches and water & dust repellent features.',
          benefits: [
            'Enhanced Gloss: Gives your car a stunning, high-gloss finish',
            'Self-Healing: Minor scratches disappear over time',
            'Water & Dust Repellent: Protects your car from water spots and dust accumulation'
          ],
          priceRange: 'Starting from ₹10,000'
        },
        {
          id: 'ppf',
          title: 'Paint Protection Film (PPF)',
          description: 'An invisible, durable shield for your car\'s body. Essential for luxury and high-end vehicles, PPF protects your car from scratches, chips, and road debris while extending the lifespan of your paint.',
          benefits: [
            'Durable Shield: Protects your car from scratches, chips, and road debris',
            'Enhanced Durability: Adds long-term protection to your car\'s paint job',
            'Increased Paint Life: Prevents fading and damage from sun and elements'
          ],
          priceRange: 'Starting from ₹25,000'
        },
        {
          id: 'teflon-coating',
          title: 'Teflon Coating',
          description: 'A cost-effective solution to enhance your car\'s appearance and protection. Using three different pads and compounds, our Teflon coating provides a shiny, high-gloss finish while removing minor scratches.',
          benefits: [
            'Shiny Gloss Finish: Enhances the look of your car with a smooth, glossy surface',
            'Scratch Removal: Helps remove minor scratches and imperfections',
            'Water & Dirt Repellent: Keeps your car cleaner for longer'
          ],
          priceRange: 'Starting from ₹5,000',
          bonus: 'Includes complimentary Engine and Interior Deep Cleaning'
        }
      ]
    },
    {
      id: 'protection-maintenance',
      title: 'Protection & Maintenance',
      services: [
        {
          id: 'underbody-rust',
          title: 'Underbody Rust Coating',
          description: 'Essential for ensuring the long-term health and durability of your vehicle. Our underbody rust coating protects your car\'s undercarriage from rust and corrosion caused by salt, moisture, and grime.',
          benefits: [
            'Prevents Rust & Corrosion: Protects from salt, moisture, and grime',
            'Enhanced Durability: Ensures long-term health of your car\'s undercarriage',
            'Long-Term Protection: Safeguards critical areas of your car'
          ],
          priceRange: 'Starting from ₹6,000',
          bonus: 'Includes complimentary One-Step Paint Restoration'
        },
        {
          id: 'sunroof-maintenance',
          title: 'Sunroof Maintenance',
          description: 'Specialized care for your car\'s sunroof system. Our maintenance service ensures smooth operation while preventing leaks and mechanical issues.',
          benefits: [
            'Smooth Operation: Ensures your sunroof functions properly',
            'Leak Prevention: Seals and protects against water intrusion',
            'Extended Lifespan: Maintains the longevity of sunroof components'
          ],
          priceRange: 'Starting from ₹3,500'
        }
      ]
    },
    {
      id: 'cleaning-detailing',
      title: 'Cleaning & Detailing',
      services: [
        {
          id: 'interior-cleaning',
          title: 'Deep Interior Cleaning',
          description: 'A thorough cleaning service that ensures every inch of your car\'s interior is spotless and fresh. We use specialized techniques and high-quality products to remove dirt, stains, and bacteria.',
          benefits: [
            'Pristine Interiors: Removes dirt, stains, and odors from your car\'s cabin',
            'Enhanced Hygiene: Eliminates bacteria and allergens',
            'Revitalized Look: Restores your car\'s interior to like-new condition'
          ],
          priceRange: 'Starting from ₹3,000'
        },
        {
          id: 'engine-cleaning',
          title: 'Engine Cleaning',
          description: 'Professional cleaning that ensures your car\'s engine remains free of grease, dust, and debris. This service allows it to run efficiently while enhancing longevity.',
          benefits: [
            'Improved Performance: Removes build-up that affects engine efficiency',
            'Better Heat Dissipation: Prevents overheating issues',
            'Easier Maintenance: Makes future servicing simpler and problems easier to spot'
          ],
          priceRange: 'Starting from ₹2,500'
        },
        {
          id: 'waxing',
          title: 'Waxing',
          description: 'Enhance your car\'s shine while providing an additional layer of protection. Our waxing service helps protect your car\'s paint from contaminants, UV rays, and water spots.',
          benefits: [
            'Enhanced Shine: Provides a deep, glossy finish',
            'Paint Protection: Shields your car\'s exterior from pollutants and UV damage',
            'Water Beading Effect: Helps repel water, keeping the surface clean for longer'
          ],
          priceRange: 'Starting from ₹2,000'
        }
      ]
    }
  ];

  // Service packages
  const servicePackages = [
    {
      title: 'Premium Protection Package',
      description: 'Ceramic Coating + PPF + Engine, Interior & Underbody Deep Cleaning',
      price: '₹35,000',
      savePercentage: '15%',
    },
    {
      title: 'Essential Care Package',
      description: 'Teflon Coating + Engine & Interior Deep Cleaning',
      price: '₹7,500',
      savePercentage: '10%',
    },
    {
      title: 'Complete Maintenance Package',
      description: 'Underbody Rust Coating + Waxing + One-Step Paint Restoration',
      price: '₹9,000',
      savePercentage: '12%',
    }
  ];

  return (
    <div>
      {/* Hero Section - Changed to solid blue background */}
      <div className="relative bg-mavBlue text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1526] to-[#11203c]"></div>
        
        <div className="container-custom relative z-10 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Car Care Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Professional solutions to keep your car in perfect condition
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600">
              At Mavullamma Cars, we offer a wide range of premium services designed to enhance and maintain your vehicle's performance, appearance, and value. From protective coatings to deep cleaning, our expert team uses only the highest quality products and latest techniques.
            </p>
          </div>

          {/* Service Categories */}
          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-3 border-b border-gray-200">
                  {category.title}
                </h2>
                
                <div className="space-y-12">
                  {category.services.map((service) => (
                    <div key={service.id} className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-mavBlue">{service.title}</h3>
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex">
                              <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap justify-between items-end">
                        <div>
                          <p className="text-lg font-semibold text-mavBlue">{service.priceRange}</p>
                          {service.bonus && (
                            <p className="text-sm text-green-600 mt-1">
                              <strong>Bonus:</strong> {service.bonus}
                            </p>
                          )}
                        </div>
                        <Button asChild className="mt-4 md:mt-0">
                          <Link to="/contact">Enquire Now</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Packages */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Value Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-mavBlue text-white p-4 text-center">
                  <h3 className="text-xl font-bold">{pkg.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-mavBlue">{pkg.price}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Save {pkg.savePercentage}
                    </span>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Services - Updated with framed points */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Our Services</h2>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Premium Care for Premium Cars",
                  "Experienced Technicians",
                  "High-Quality Products",
                  "Attention to Detail",
                  "Customer Satisfaction Guaranteed"
                ].map((point, index) => (
                  <li key={index} className="flex items-start p-3 border border-gray-200 rounded-md">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-mavBlue text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Service Today</h2>
          <p className="text-center max-w-2xl mx-auto mb-10">
            Give your car the care it deserves. Call us or fill out the form below to schedule a service.
          </p>
          
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900">
                  <option value="">Select a Service</option>
                  <option value="ceramic-coating">Ceramic Coating</option>
                  <option value="ppf">Paint Protection Film</option>
                  <option value="teflon-coating">Teflon Coating</option>
                  <option value="underbody-rust">Underbody Rust Coating</option>
                  <option value="sunroof-maintenance">Sunroof Maintenance</option>
                  <option value="interior-cleaning">Deep Interior Cleaning</option>
                  <option value="engine-cleaning">Engine Cleaning</option>
                  <option value="waxing">Waxing</option>
                  <option value="premium-package">Premium Protection Package</option>
                  <option value="essential-package">Essential Care Package</option>
                  <option value="maintenance-package">Complete Maintenance Package</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date & Time</label>
                <input 
                  type="datetime-local" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue text-gray-900" 
                  rows={3}
                ></textarea>
              </div>
              <Button className="w-full">Book Appointment</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
