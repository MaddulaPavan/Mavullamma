
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo as Home link */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl md:text-3xl font-bold font-montserrat">
              <span className="text-mavBlue">Mavullamma</span> Cars
            </div>
          </Link>

          {/* Desktop Navigation - Updated order */}
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
            <a href="tel:9701511116" className="flex items-center text-mavBlue font-medium">
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
            className="lg:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Updated order */}
        {isMenuOpen && (
          <div className="lg:hidden pt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/buy" 
                className="font-medium hover:text-mavBlue transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy Cars
              </Link>
              <Link 
                to="/sell" 
                className="font-medium hover:text-mavBlue transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell Your Car
              </Link>
              <Link 
                to="/financing" 
                className="font-medium hover:text-mavBlue transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Finance
              </Link>
              <Link 
                to="/services" 
                className="font-medium hover:text-mavBlue transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="font-medium hover:text-mavBlue transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="font-medium hover:text-mavBlue transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:9701511116" 
                className="flex items-center text-mavBlue font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>9701511116</span>
              </a>
              <Button asChild className="btn-primary">
                <Link to="/buy" onClick={() => setIsMenuOpen(false)}>
                  View Cars
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
