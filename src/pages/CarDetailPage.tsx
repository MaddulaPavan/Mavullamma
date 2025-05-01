
import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetailPage = () => {
  const { carId } = useParams();
  
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Car Details</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">Coming soon - Detailed information about car ID: {carId}</p>
        <p className="text-gray-600">This page will be implemented in the next iteration with complete car specifications, gallery, features, etc.</p>
      </div>
    </div>
  );
};

export default CarDetailPage;
