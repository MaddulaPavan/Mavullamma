import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Check, ArrowRight, Car } from 'lucide-react';
import { getAllCars } from '@/data/carDatabase';
import PageHeader from '@/components/PageHeader';

const BuyPage = () => {
  const cars = getAllCars().map(car => ({
    id: car.id,
    name: car.name,
    year: car.year,
    price: car.price,
    image: car.images[0], // Use first image from array
    specs: {
      fuel: car.fuel,
      transmission: car.transmission,
      km: car.kilometers,
      owner: car.owner
    }
  }));

  // Format price to Indian currency format
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div>
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
            At Mavullamma Cars, finding your perfect vehicle is a seamless experience. We offer a curated selection of premium pre-owned cars, each rigorously inspected to ensure quality and reliability. Our expert team is dedicated to helping you every step of the way, from browsing our inventory to driving home in your new car.
          </p>
        </div>
      </div>

      {/* Car Listings */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Available Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="car-card overflow-hidden flex flex-col bg-[#0a2472] rounded-lg shadow-md text-white">
                <div className="relative h-[300px]"> {/* Reduced height for better fit */}
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover bg-white" // Changed to object-cover from object-contain
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.year}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{car.name}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">
                      {formatPrice(car.price)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-white/90 mb-6">
                    <div className="flex items-center">
                      <span className="font-medium mr-1">Fuel:</span> {car.specs.fuel}
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">Trans:</span> {car.specs.transmission}
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">KM:</span> {car.specs.km.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">Owner:</span> {car.specs.owner}
                    </div>
                  </div>
                  <div className="mt-auto flex space-x-3">
                    <Button asChild className="flex-grow bg-white text-mavBlue hover:bg-gray-100">
                      <Link to={`/buy/${car.id}`}>View Details</Link>
                    </Button>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <a href="tel:9701511116">Contact</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How Buying Works */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple 4-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Car className="w-10 h-10 text-mavBlue" />, title: "Browse & Select", description: "Explore our verified premium cars online" },
              { icon: <Car className="w-10 h-10 text-mavBlue" />, title: "Test Drive", description: "Visit our showroom for a test drive experience" },
              { icon: <Car className="w-10 h-10 text-mavBlue" />, title: "Documentation", description: "Fast and hassle-free paperwork" },
              { icon: <Car className="w-10 h-10 text-mavBlue" />, title: "Drive Home", description: "Drive away with confidence in your new car" }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-mavBlue/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[80%]">
                    <ArrowRight className="w-6 h-6 text-mavBlue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Guarantee */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Mavullamma Guarantee</h2>
            <p className="text-lg text-center mb-8">Every car in our inventory comes with:</p>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <ul className="space-y-4">
                {[
                  "Verified showroom track record",
                  "Complete history documentation",
                  "Thorough mechanical inspection",
                  "Free interior and engine cleaning",
                  "Assistance with financing if needed"
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
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Tell us your requirements and we'll help you find the perfect car
          </p>
          <Button asChild size="lg" className="bg-white text-mavBlue hover:bg-gray-100">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
