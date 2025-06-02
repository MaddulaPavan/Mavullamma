export interface CarDetails {
  id: number;
  name: string;
  year: number;
  price: number;
  kilometers: number;
  fuel: string;
  transmission: string;
  owner: string;
  engine: string;
  mileage: string;
  color: string;
  insurance: string;
  description: string;
  features: string[];
  images: string[];
}

export const carDatabase: Record<string, CarDetails> = {
  '1': {
    id: 1,
    name: '2018 Toyota Innova Crysta 2.4 V',
    year: 2018,
    price: 1850000,
    kilometers: 100138,
    fuel: 'Diesel',
    transmission: 'Manual',
    owner: '1st',
    engine: '2.4L',
    mileage: '15.6 kmpl',
    color: 'Silver',
    insurance: 'Valid until December 2024',
    description: 'The 2018 Toyota Innova Crysta 2.4 V is a premium, spacious MPV known for its unmatched reliability, powerful engine, and comfort. Perfect for families and long journeys, it combines performance, safety, and style effortlessly. The vehicle comes with a fancy registration number 4959 and has been meticulously maintained throughout its lifetime.',
    features: [
      'Powerful 2.4L Diesel Engine',
      'Premium Leather Upholstery',
      'Advanced Touchscreen Infotainment',
      'Rear AC Vents for All Rows',
      'Keyless Entry with Push-Button Start',
      'Multiple Airbags',
      'ABS with EBD',
      'Alloy Wheels',
      'Ample Boot Space',
      'Power Adjustable Seats'
    ],
    images: [
      '/assets/cars/inv (1).jpg',
      '/assets/cars/inv (2).jpg',
      '/assets/cars/inv (3).jpg',
      '/assets/cars/inv (4).jpg'
    ]
  },
  '2': {
    id: 2,
    name: '2019 Maruti Suzuki S-Cross Alpha',
    year: 2019,
    price: 950000,
    kilometers: 88726,
    fuel: 'Diesel',
    transmission: 'Manual',
    owner: '1st',
    engine: '1.3L DDiS 200',
    mileage: '23-25 kmpl',
    color: 'White',
    insurance: 'Valid',
    description: 'The S-Cross Alpha is Maruti\'s premium crossover, known for its rugged design, powerful performance, and upscale interiors. It offers a comfortable ride, advanced safety features, and a feature-rich cabin, making it an excellent choice for long drives and city commutes alike.',
    features: [
      'Bold front grille and muscular stance',
      'SmartPlay touchscreen infotainment system',
      'Cruise control for highway convenience',
      'LED projector headlamps with DRLs',
      'Rear parking camera and sensors',
      'Dual airbags and ABS with EBD'
    ],
    images: [
      '/assets/cars/scross (1).jpg',
      '/assets/cars/scross (2).jpg',
      '/assets/cars/scross (3).jpg',
      '/assets/cars/scross (4).jpg'
    ]
  },
  '3': {
    id: 3,
    name: '2014 Maruti Suzuki Alto LXI',
    year: 2014,
    price: 250000,
    kilometers: 81257,
    fuel: 'Petrol',
    transmission: 'Manual',
    owner: '1st',
    engine: '796cc',
    mileage: '22-24 kmpl',
    color: 'Silver',
    insurance: 'Valid',
    description: 'The Maruti Suzuki Alto LXI is a compact hatchback known for its reliability, fuel efficiency, and low maintenance costs. It\'s perfect for city commuting and offers a budget-friendly entry into the world of car ownership.',
    features: [
      'Compact, easy-to-maneuver design',
      'Fuel-efficient engine',
      'Comfortable seating for 4-5 passengers',
      'Low running and maintenance costs',
      'Proven reliability',
      'Power Windows'
    ],
    images: [
      '/assets/cars/alto (1).jpg',
      '/assets/cars/alto (2).jpg',
      '/assets/cars/alto (3).jpg',
      '/assets/cars/alto (4).jpg'
    ]
  },
  '4': {
    id: 4,
    name: '2019 Maruti Suzuki Ertiga VDI',
    year: 2019,
    price: 1050000,
    kilometers: 102000,
    fuel: 'Diesel',
    transmission: 'Manual',
    owner: '1st',
    engine: '1.5L Diesel',
    mileage: '20 kmpl',
    color: 'Silver',
    insurance: 'Valid',
    description: 'Well-maintained 2019 Ertiga VDI with a powerful 1.5L diesel engine, ideal for family trips and daily commuting. Driven 102,000 km and still in excellent running condition. Comes with valid insurance and four brand new seal tyres for added safety and comfort.',
    features: [
      'Spacious 7-seater MPV',
      'Dual airbags',
      'ABS with EBD',
      'Rear parking sensors',
      'Power steering & power windows',
      'Touchscreen infotainment system',
      'Brand new 4-seal tyres',
      'Valid insurance'
    ],
    images: [
      '/assets/cars/ert (1).jpg',
      '/assets/cars/ert (2).jpg',
      '/assets/cars/ert (3).jpg',
      '/assets/cars/ert (4).jpg'
    ]
  },
  '5': {
    id: 5,
    name: '2019 Hyundai Creta Executive SX(O)',
    year: 2019,
    price: 1250000,
    kilometers: 114000,
    fuel: 'Diesel',
    transmission: 'Manual',
    owner: '1st',
    engine: '1.6L CRDi',
    mileage: '20 kmpl',
    color: 'White',
    insurance: 'Valid',
    description: 'This 2019 Hyundai Creta SX(O) Diesel is a premium compact SUV known for its robust build, stylish design, and feature-rich interior. Perfect for those who seek comfort, performance, and reliability, it\'s ideal for both city commutes and long road trips.',
    features: [
      'Powerful diesel engine',
      'Premium interior',
      'Advanced touchscreen infotainment',
      'Rear parking camera',
      'Keyless entry with push-button start',
      'ABS with EBD and multiple airbags for safety',
      'Alloy wheels for a premium look'
    ],
    images: [
      '/assets/cars/creta (1).jpg',
      '/assets/cars/creta (2).jpg',
      '/assets/cars/creta (3).jpg',
      '/assets/cars/creta (4).jpg'
    ]
  }
};

// Helper functions for common data operations
export const getFeaturedCars = () => {
  return Object.values(carDatabase)
    .sort((a, b) => b.year - a.year)
    .slice(0, 4);
};

export const getAllCars = () => {
  return Object.values(carDatabase);
};

export const getCarById = (id: string) => {
  return carDatabase[id];
}; 