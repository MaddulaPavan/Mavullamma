
import React from 'react';
import { Check, Award, Heart, Shield, Coffee, Link as LinkIcon, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const achievements = [
    { year: '1998', milestone: 'Founded by Mr. Maddula Srinivasa Rao in Bhimavaram' },
    { year: '2005', milestone: 'Expanded services to include car financing and consultancy' },
    { year: '2010', milestone: 'Served our 50,000th customer' },
    { year: '2015', milestone: 'Added premium car care services' },
    { year: '2020', milestone: 'Reached the milestone of 10 lakh+ satisfied customers' },
    { year: '2023', milestone: 'Established as the leading premium used car consultancy in AP & TS' },
  ];

  const values = [
    {
      icon: <Shield className="w-10 h-10 text-mavBlue" />,
      title: 'Trust & Transparency',
      description: 'We believe in complete honesty about every vehicle\'s history and condition.'
    },
    {
      icon: <Check className="w-10 h-10 text-mavBlue" />,
      title: 'Quality Assurance',
      description: 'Every car undergoes thorough inspection before joining our inventory.'
    },
    {
      icon: <Heart className="w-10 h-10 text-mavBlue" />,
      title: 'Customer Satisfaction',
      description: 'Your happiness and confidence in your purchase is our priority.'
    },
    {
      icon: <Coffee className="w-10 h-10 text-mavBlue" />,
      title: 'Expert Guidance',
      description: 'We offer professional advice to help you make the best decision.'
    },
    {
      icon: <Award className="w-10 h-10 text-mavBlue" />,
      title: 'After-Sale Support',
      description: 'Our relationship continues even after you drive away with your car.'
    },
    {
      icon: <Star className="w-10 h-10 text-mavBlue" />,
      title: 'Community Commitment',
      description: 'We're dedicated to giving back to the community that has supported us.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white">
        <div className="container-custom py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Journey of Excellence</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Trusted by over 10 lakh customers across Andhra Pradesh & Telangana
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Mavullamma Story</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded by Mr. Maddula Srinivasa Rao (popularly known as Mavullamma Srinu), 
                Mavullamma Cars began its journey in 1998 with a simple mission: to provide 
                high-quality cars at affordable prices with complete transparency. With over 
                25 years of experience in the automotive industry, we have grown to become one 
                of the most trusted names in premium used car sales and services in Bhimavaram and beyond.
              </p>
              <p>
                Our reputation is built on honesty, quality, and customer satisfaction. 
                Every vehicle we sell undergoes a rigorous inspection to ensure it meets our 
                strict standards of quality and performance. Our commitment to excellence has 
                earned us the trust of over 10 lakh customers from all walks of life across 
                Andhra Pradesh and Telangana.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Founder */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3" 
                  alt="Mr. Maddula Srinivasa Rao" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:col-span-7">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Mr. Maddula Srinivasa Rao (Mavullamma Srinu)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    With 25+ years of expertise in the automotive industry, Mr. Maddula Srinivasa Rao 
                    has established himself as an authority in car valuation, sales, and consultancy. 
                    Known for his honest approach and deep knowledge of automobiles, he has built a 
                    reputation as a trusted advisor for car buyers and sellers alike.
                  </p>
                  <p>
                    His vision of creating a transparent and customer-centric car business has helped 
                    thousands make informed decisions about their vehicle purchases. Under his leadership, 
                    Mavullamma Cars continues to uphold the highest standards of quality and service excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center h-full">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Achievements */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Milestones & Achievements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-mavBlue pl-8 ml-4 space-y-10">
              {achievements.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-12 mt-1.5 h-7 w-7 rounded-full bg-mavBlue text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-mavBlue mb-1">{item.year}</h3>
                  <p className="text-gray-700">{item.milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-mavBlue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Mavullamma Difference?</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-white text-mavBlue hover:bg-gray-100">
              <Link to="/buy">Browse Our Inventory</Link>
            </Button>
            <Button asChild size="lg" className="text-mavBlue bg-white border-white hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
