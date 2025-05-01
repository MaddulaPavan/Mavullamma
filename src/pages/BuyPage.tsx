
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Check, ArrowRight, Car } from 'lucide-react';

// Sample car data
const cars = [
  {
    id: 1,
    name: 'Hyundai Creta SX',
    year: 2022,
    price: 1580000,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3',
    specs: {
      fuel: 'Petrol',
      transmission: 'Automatic',
      km: 18000,
      owner: '1st'
    }
  },
  {
    id: 2,
    name: 'Maruti Suzuki Swift ZXI',
    year: 2021,
    price: 780000,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3',
    specs: {
      fuel: 'Petrol',
      transmission: 'Manual',
      km: 25000,
      owner: '1st'
    }
  },
  {
    id: 3,
    name: 'Toyota Fortuner 4x4',
    year: 2020,
    price: 3250000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3',
    specs: {
      fuel: 'Diesel',
      transmission: 'Automatic',
      km: 35000,
      owner: '1st'
    }
  },
  {
    id: 4,
    name: 'Honda City ZX',
    year: 2021,
    price: 1280000,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3',
    specs: {
      fuel: 'Petrol',
      transmission: 'CVT',
      km: 20000,
      owner: '1st'
    }
  },
  {
    id: 5,
    name: 'Mahindra XUV700 AX7',
    year: 2022,
    price: 2150000,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3',
    specs: {
      fuel: 'Diesel',
      transmission: 'Automatic',
      km: 15000,
      owner: '1st'
    }
  },
  {
    id: 6,
    name: 'Kia Seltos HTX',
    year: 2021,
    price: 1350000,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3',
    specs: {
      fuel: 'Petrol',
      transmission: 'DCT',
      km: 22000,
      owner: '1st'
    }
  },
];

// Filter options
const brands = ['All', 'Hyundai', 'Maruti Suzuki', 'Toyota', 'Honda', 'Mahindra', 'Kia'];
const fuelTypes = ['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid'];
const transmissions = ['All', 'Manual', 'Automatic', 'CVT', 'DCT'];

const BuyPage = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedFuel, setSelectedFuel] = useState('All');
  const [selectedTransmission, setSelectedTransmission] = useState('All');
  
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
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3')`,
              filter: 'brightness(0.4)'
            }}
          ></div>
        </div>
        
        <div className="container-custom relative z-10 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Car</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8">
            Browse our selection of premium verified vehicles
          </p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="bg-white shadow-md py-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
              >
                {fuelTypes.map((fuel) => (
                  <option key={fuel} value={fuel}>{fuel}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
              <select
                value={selectedTransmission}
                onChange={(e) => setSelectedTransmission(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-mavBlue focus:border-mavBlue"
              >
                {transmissions.map((transmission) => (
                  <option key={transmission} value={transmission}>{transmission}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Car Listings */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Available Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="car-card overflow-hidden flex flex-col">
                <div className="aspect-w-16 aspect-h-10 bg-gray-100">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <span className="text-lg font-semibold text-mavBlue">{car.year}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-mavBlue">
                      {formatPrice(car.price)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-6">
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
                    <Button asChild className="flex-grow bg-mavBlue hover:bg-blue-700">
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
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple 4-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Car className="w-10 h-10 text-mavBlue" />, title: "Browse & Select", description: "Explore our verified premium cars online" },
              { icon: <Car className="w-10 h-10 text-mavBlue" />, title: "Test Drive", description: "Visit our showroom for a test drive experience" },
              { icon: <Car className="w-10 h-10 text-mavBlue" />, title: "Documentation", description: "Fast and hassle-free paperwork" },
              { icon: <Car className="w-10 h-10 text-mavBlue" />, title: "Drive Home", description: "Drive away with confidence in your new car" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-mavBlue/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute transform translate-x-[130%] translate-y-[-120%]">
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Mavullamma Guarantee</h2>
            <p className="text-lg text-center mb-8">Every car in our inventory comes with:</p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {[
                  "Verified showroom track record",
                  "Complete history documentation",
                  "Thorough mechanical inspection",
                  "Free interior and engine cleaning",
                  "Assistance with financing if needed"
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

      {/* CTA Section */}
      <div className="section-padding bg-mavBlue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Tell us your requirements and we'll help you find the perfect car
          </p>
          <Button asChild size="lg">
            <Link to="/contact" className="bg-white text-mavBlue hover:bg-gray-100">
              Contact Our Consultants
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
