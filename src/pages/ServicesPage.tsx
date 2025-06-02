import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Layers, Shield, Activity, Zap, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';

const ServicesPage = () => {
  // Service categories
  const serviceCategories = [
    {
      id: 'paint-protection',
      title: 'Paint Protection',
      icon: <Shield className="w-8 h-8" />,
      services: [
        {
          id: 'ceramic-coating',
          title: 'Ceramic Coating',
          description: 'The ultimate solution for long-lasting protection with a high-gloss finish. Our ceramic coating enhances your car\'s shine while providing self-healing properties for minor scratches and water & dust repellent features.',
          benefits: [
            'Enhanced Gloss: Gives your car a stunning, high-gloss finish',
            'Self-Healing: Minor scratches disappear over time',
            'Water & Dust Repellent: Protects your car from water spots and dust accumulation'
          ]
        },
        {
          id: 'ppf',
          title: 'Paint Protection Film (PPF)',
          description: 'An invisible, durable shield for your car\'s body. Essential for luxury and high-end vehicles, PPF protects your car from scratches, chips, and road debris while extending the lifespan of your paint.',
          benefits: [
            'Durable Shield: Protects your car from scratches, chips, and road debris',
            'Enhanced Durability: Adds long-term protection to your car\'s paint job',
            'Increased Paint Life: Prevents fading and damage from sun and elements'
          ]
        },
        {
          id: 'teflon-coating',
          title: 'Teflon Coating',
          description: 'A cost-effective solution to enhance your car\'s appearance and protection. Using three different pads and compounds, our Teflon coating provides a shiny, high-gloss finish while removing minor scratches.',
          benefits: [
            'Shiny Gloss Finish: Enhances the look of your car with a smooth, glossy surface',
            'Scratch Removal: Helps remove minor scratches and imperfections',
            'Water & Dirt Repellent: Keeps your car cleaner for longer'
          ]
        }
      ]
    },
    {
      id: 'protection-maintenance',
      title: 'Protection & Maintenance',
      icon: <Activity className="w-8 h-8" />,
      services: [
        {
          id: 'underbody-rust',
          title: 'Underbody Rust Coating',
          description: 'Essential for ensuring the long-term health and durability of your vehicle. Our underbody rust coating protects your car\'s undercarriage from rust and corrosion caused by salt, moisture, and grime.',
          benefits: [
            'Prevents Rust & Corrosion: Protects from salt, moisture, and grime',
            'Enhanced Durability: Ensures long-term health of your car\'s undercarriage',
            'Long-Term Protection: Safeguards critical areas of your car'
          ]
        },
        {
          id: 'sunroof-maintenance',
          title: 'Sunroof Maintenance',
          description: 'Specialized care for your car\'s sunroof system. Our maintenance service ensures smooth operation while preventing leaks and mechanical issues.',
          benefits: [
            'Smooth Operation: Ensures your sunroof functions properly',
            'Leak Prevention: Seals and protects against water intrusion',
            'Extended Lifespan: Maintains the longevity of sunroof components'
          ]
        },
        {
          id: 'two-wheeler-maintenance',
          title: 'Two-Wheeler Maintenance',
          description: 'Comprehensive maintenance service for motorcycles and scooters. Our specialized team ensures your two-wheeler performs at its best with regular maintenance and protection.',
          benefits: [
            'Engine Care: Regular maintenance for optimal performance',
            'Chain & Belt Service: Proper lubrication and tension adjustment',
            'Brake System Maintenance: Ensuring safe and responsive braking'
          ]
        }
      ]
    },
    {
      id: 'cleaning-detailing',
      title: 'Cleaning & Detailing',
      icon: <Zap className="w-8 h-8" />,
      services: [
        {
          id: 'interior-cleaning',
          title: 'Deep Interior Cleaning',
          description: 'A thorough cleaning service that ensures every inch of your car\'s interior is spotless and fresh. We use specialized techniques and high-quality products to remove dirt, stains, and bacteria.',
          benefits: [
            'Pristine Interiors: Removes dirt, stains, and odors from your car\'s cabin',
            'Enhanced Hygiene: Eliminates bacteria and allergens',
            'Revitalized Look: Restores your car\'s interior to like-new condition'
          ]
        },
        {
          id: 'engine-cleaning',
          title: 'Engine Cleaning',
          description: 'Professional cleaning that ensures your car\'s engine remains free of grease, dust, and debris. This service allows it to run efficiently while enhancing longevity.',
          benefits: [
            'Improved Performance: Removes build-up that affects engine efficiency',
            'Better Heat Dissipation: Prevents overheating issues',
            'Easier Maintenance: Makes future servicing simpler and problems easier to spot'
          ]
        },
        {
          id: 'waxing',
          title: 'Waxing',
          description: 'Enhance your car\'s shine while providing an additional layer of protection. Our waxing service helps protect your car\'s paint from contaminants, UV rays, and water spots.',
          benefits: [
            'Enhanced Shine: Provides a deep, glossy finish',
            'Paint Protection: Shields your car\'s exterior from pollutants and UV damage',
            'Water Beading Effect: Helps repel water, keeping the surface clean for longer'
          ]
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
      
      {/* Services Overview */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mavBlue to-blue-600">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Mavullamma Cars, we offer a wide range of premium services designed to enhance and maintain your vehicle's performance, appearance, and value. From protective coatings to deep cleaning, our expert team uses only the highest quality products and latest techniques.
            </p>
          </div>

          {/* Service Categories */}
          <div className="space-y-20">
            {serviceCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-20 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-center gap-4 mb-12 pb-4 border-b border-gray-200">
                  <div className="text-mavBlue">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-center">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <div key={service.id} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-mavBlue/20 h-full flex flex-col">
                      <h3 className="text-xl font-bold mb-4 text-mavBlue group-hover:text-blue-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-gray-800">Benefits:</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button asChild className="w-full bg-mavBlue hover:bg-blue-600 transition-colors mt-auto">
                        <Link to="/contact">Enquire Now</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Services */}
      <div className="pt-0 pb-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-mavBlue to-blue-600">Why Choose Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Premium Care",
                  description: "Expert care for premium and luxury vehicles",
                  icon: <Car className="w-6 h-6" />
                },
                {
                  title: "Expert Team",
                  description: "Highly skilled and experienced technicians",
                  icon: <Layers className="w-6 h-6" />
                },
                {
                  title: "Quality Products",
                  description: "Using only the highest quality materials and products",
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  title: "Attention to Detail",
                  description: "Meticulous care in every aspect of our service",
                  icon: <Activity className="w-6 h-6" />
                }
              ].map((point, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200 hover:border-mavBlue/20 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col items-center text-center gap-4 mb-4">
                    <div className="text-mavBlue bg-mavBlue/10 p-4 rounded-full">{point.icon}</div>
                    <h3 className="text-xl font-bold text-mavBlue">{point.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-gradient-to-r from-mavBlue to-blue-600 text-white mt-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Book Your Service Today</h2>
            <p className="text-lg mb-10 text-blue-50">
              Give your car the care it deserves. Contact us to schedule a service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="mb-6">Call us directly to discuss your requirements</p>
                <Button variant="outline" className="w-full bg-white text-mavBlue hover:bg-blue-50">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                <p className="mb-6">Schedule a visit to our state-of-the-art facility</p>
                <Button variant="outline" className="w-full bg-white text-mavBlue hover:bg-blue-50">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
