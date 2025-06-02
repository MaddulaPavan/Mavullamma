import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide buttons when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col space-y-3 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* Call Button */}
      <a 
        href="tel:9701511116"
        className="flex items-center bg-mavBlue text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5 mr-2" />
        <span className="hidden sm:inline">Call Us</span>
        <span className="sm:hidden">Call</span>
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/9701511116" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 active:bg-green-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        <span className="hidden sm:inline">Chat with Us</span>
        <span className="sm:hidden">Chat</span>
      </a>
    </div>
  );
};

export default FloatButtons;
