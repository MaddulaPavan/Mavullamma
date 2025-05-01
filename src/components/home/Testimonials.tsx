
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Buying a car from Mavullamma was the best decision I made. Their expertise and transparency made the process smooth and worry-free.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'I was amazed by the quality of cars and service. Mr. Maddula personally helped me find the perfect car for my family within my budget.',
    rating: 5
  },
  {
    id: 3,
    name: 'Suresh Reddy',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    quote: 'The ceramic coating service they provided has kept my car looking brand new for over a year now. Highly recommend their services!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-600 italic mb-3 flex-grow">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
