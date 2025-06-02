import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Calendar, ArrowLeft, Info, Phone, Car, Fuel, Settings, Share2 } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageModal from '@/components/ui/image-modal';
import { getCarById, CarDetails, carDatabase } from '@/data/carDatabase';

const CarDetailPage: React.FC = () => {
  const { carId } = useParams<{ carId: string }>();
  const [car, setCar] = useState<CarDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  
  useEffect(() => {
    const loadCar = async () => {
      try {
        if (!carId) {
          setLoading(false);
          return;
        }
        const carData = getCarById(carId);
        setCar(carData);
      } catch (error) {
        console.error('Error loading car:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCar();
  }, [carId]);
  
  // Format price to Indian currency format
  const formatPrice = (price: number): string => {
    if (!price) return '₹0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/buy/${car.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: car.name,
          text: `Check out this ${car.year} ${car.name} at Mavullamma Car Dreams`,
          url: shareUrl
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    }
  };
  
  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="flex justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-96 w-full bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!car) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Car Not Found</h1>
        <p className="text-gray-600 mb-8">The car you're looking for doesn't exist or has been sold.</p>
        <Button asChild>
          <Link to="/buy">Back to Inventory</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6">
          <Link to="/buy" className="flex items-center text-mavBlue hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Inventory
          </Link>
        </div>
        
        {/* Car Name and Year */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">{car.name}</h1>
          <div className="flex items-center mt-2">
            <Calendar className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-gray-500">{car.year}</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-4 mb-8">
              {/* Share button */}
              <div className="flex justify-end mb-4">
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  {showShareTooltip && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded">
                      Link copied!
                    </div>
                  )}
                </div>
              </div>

              <Carousel className="w-full">
                <CarouselContent>
                  {car.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-w-16 aspect-h-9">
                        <img 
                          src={image} 
                          alt={`${car.name} - Image ${index + 1}`} 
                          className="w-full h-[400px] object-cover rounded-md cursor-pointer"
                          onClick={() => setSelectedImage(image)}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/assets/placeholder.jpg'; // Add a placeholder image
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              
              <div className="grid grid-cols-6 gap-2 mt-4">
                {car.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="h-20 w-full object-cover rounded-sm cursor-pointer border-2 border-transparent hover:border-mavBlue"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 mb-4">{car.description}</p>
            </div>
            
            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column: Details and Actions */}
          <div>
            {/* Price and Actions */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="mb-6">
                <span className="text-3xl font-bold text-mavBlue">{formatPrice(car.price)}</span>
              </div>
              <div className="space-y-3">
                <Button asChild className="w-full bg-mavBlue">
                  <a href="tel:9701511116" className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/9701511116" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/financing" className="flex items-center justify-center">
                    <Info className="w-4 h-4 mr-2" />
                    Check Finance Options
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Car className="w-5 h-5 text-mavBlue mr-3" />
                    <span className="text-gray-600">Registration Year</span>
                  </div>
                  <span className="font-medium">{car.year}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-mavBlue mr-3" />
                    <span className="text-gray-600">KM Driven</span>
                  </div>
                  <span className="font-medium">{car.kilometers.toLocaleString()} km</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Fuel className="w-5 h-5 text-mavBlue mr-3" />
                    <span className="text-gray-600">Fuel Type</span>
                  </div>
                  <span className="font-medium">{car.fuel}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-mavBlue mr-3" />
                    <span className="text-gray-600">Transmission</span>
                  </div>
                  <span className="font-medium">{car.transmission}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Car className="w-5 h-5 text-mavBlue mr-3" />
                    <span className="text-gray-600">Owner</span>
                  </div>
                  <span className="font-medium">{car.owner}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-mavBlue mr-3" />
                    <span className="text-gray-600">Engine</span>
                  </div>
                  <span className="font-medium">{car.engine}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Fuel className="w-5 h-5 text-mavBlue mr-3" />
                    <span className="text-gray-600">Mileage</span>
                  </div>
                  <span className="font-medium">{car.mileage}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Car className="w-5 h-5 text-mavBlue mr-3" />
                    <span className="text-gray-600">Color</span>
                  </div>
                  <span className="font-medium">{car.color}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <Info className="w-5 h-5 text-mavBlue mr-3" />
                    <span className="text-gray-600">Insurance</span>
                  </div>
                  <span className="font-medium">{car.insurance}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Cars */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(carDatabase)
              .filter(otherCar => otherCar.id !== Number(carId))
              .slice(0, 3) // Show only 3 similar cars
              .map(similarCar => (
                <div key={similarCar.id} className="car-card overflow-hidden flex flex-col">
                  <div className="aspect-w-16 aspect-h-10 bg-gray-100">
                    <img 
                      src={similarCar.images[0]} 
                      alt={similarCar.name} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{similarCar.name}</h3>
                      <span className="text-base font-medium text-mavBlue">{similarCar.year}</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold text-mavBlue">
                        {formatPrice(similarCar.price)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Fuel:</span> {similarCar.fuel}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Trans:</span> {similarCar.transmission}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button asChild className="w-full bg-mavBlue">
                        <Link to={`/buy/${similarCar.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        {/* Add Modal */}
        {selectedImage && (
          <ImageModal 
            imageUrl={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default CarDetailPage;
