
import React from 'react';

const FloatButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Call Button */}
      <a 
        href="tel:9701511116"
        className="flex items-center bg-mavBlue text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        aria-label="Call Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span>Call Us</span>
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/9701511116" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
        <span>Chat with Us</span>
      </a>
    </div>
  );
};

export default FloatButtons;
