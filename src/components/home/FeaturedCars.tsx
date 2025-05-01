
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Car, Fuel, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

// Mock data for featured cars
const featuredCars = [
  {
    id: 1,
    name: 'Maruti Swift',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2022,
    price: 650000,
    specs: {
      fuel: 'Petrol',
      km: 15000,
      transmission: 'Manual'
    }
  },
  {
    id: 2,
    name: 'Hyundai Verna',
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2021,
    price: 850000,
    specs: {
      fuel: 'Diesel',
      km: 22000,
      transmission: 'Automatic'
    }
  },
  {
    id: 3,
    name: 'Honda City',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2020,
    price: 780000,
    specs: {
      fuel: 'Diesel',
      km: 35000,
      transmission: 'Manual'
    }
  },
  {
    id: 4,
    name: 'Volkswagen Passat',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff926fa3ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2019,
    price: 1200000,
    specs: {
      fuel: 'Petrol',
      km: 42000,
      transmission: 'Automatic'
    }
  }
];

// Format price to Indian Rupees
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

const FeaturedCars = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Premium Cars</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our selection of carefully curated premium vehicles that offer exceptional value and quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCars.map((car) => (
            <Card key={car.id} className="car-card overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-mavBlue text-white text-sm py-1 px-3 rounded">
                  {car.year}
                </div>
              </div>
              <CardContent className="flex-grow p-5">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <div className="text-2xl text-mavBlue font-semibold mb-3">
                  {formatPrice(car.price)}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="flex flex-col items-center text-gray-600">
                    <Fuel className="h-5 w-5 mb-1" />
                    <span className="text-sm">{car.specs.fuel}</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-600">
                    <Car className="h-5 w-5 mb-1" />
                    <span className="text-sm">{car.specs.km} KM</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-600">
                    <Settings className="h-5 w-5 mb-1" />
                    <span className="text-sm">{car.specs.transmission}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-5 py-3">
                <Button asChild className="w-full bg-gray-900 hover:bg-gray-800">
                  <Link to={`/buy/${car.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="btn-primary">
            <Link to="/buy" className="inline-flex items-center">
              View All Cars
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
