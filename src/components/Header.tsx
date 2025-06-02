import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container-custom py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo as Home link */}
          <Link to="/" className="flex items-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold font-montserrat">
              <span className="text-mavBlue">Mavullamma</span> Cars
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/buy" className="font-medium hover:text-mavBlue transition-colors">
              Buy Cars
            </Link>
            <Link to="/sell" className="font-medium hover:text-mavBlue transition-colors">
              Sell Your Car
            </Link>
            <Link to="/financing" className="font-medium hover:text-mavBlue transition-colors">
              Finance
            </Link>
            <Link to="/services" className="font-medium hover:text-mavBlue transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-medium hover:text-mavBlue transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="font-medium hover:text-mavBlue transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:9701511116" className="flex items-center text-mavBlue font-medium hover:text-blue-700 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>9701511116</span>
            </a>
            <Button asChild className="btn-primary">
              <Link to="/buy">View Cars</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-mavBlue focus:ring-opacity-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 pb-4">
            <Link 
              to="/buy" 
              className="font-medium hover:text-mavBlue transition-colors px-4 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy Cars
            </Link>
            <Link 
              to="/sell" 
              className="font-medium hover:text-mavBlue transition-colors px-4 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sell Your Car
            </Link>
            <Link 
              to="/financing" 
              className="font-medium hover:text-mavBlue transition-colors px-4 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Finance
            </Link>
            <Link 
              to="/services" 
              className="font-medium hover:text-mavBlue transition-colors px-4 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="font-medium hover:text-mavBlue transition-colors px-4 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="font-medium hover:text-mavBlue transition-colors px-4 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:9701511116" 
              className="flex items-center text-mavBlue font-medium px-4 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>9701511116</span>
            </a>
            <Button asChild className="btn-primary w-full mt-2">
              <Link to="/buy" onClick={() => setIsMenuOpen(false)}>
                View Cars
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
