
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="mb-4 text-2xl font-bold font-montserrat">
              <span className="text-mavBlue">Mavullamma</span> <span className="text-white">Cars</span>
            </div>
            <p className="mb-4 text-gray-300">
              Your trusted partner for premium used cars since 1998. With over 25 years of expertise in car sales, services, and consultancy in Bhimavaram.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/buy" className="text-gray-300 hover:text-white transition-colors">Buy Cars</Link></li>
              <li><Link to="/sell" className="text-gray-300 hover:text-white transition-colors">Sell Your Car</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/financing" className="text-gray-300 hover:text-white transition-colors">Financing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-mavBlue" />
                <span className="text-gray-300">Bhimavaram, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-mavBlue" />
                <a href="tel:9701511116" className="text-gray-300 hover:text-white transition-colors">9701511116</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-mavBlue" />
                <a href="tel:8074504580" className="text-gray-300 hover:text-white transition-colors">8074504580</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-mavBlue" />
                <a href="mailto:info@mavullammacars.com" className="text-gray-300 hover:text-white transition-colors">info@mavullammacars.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-mavBlue transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-mavBlue transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://wa.me/9701511116" target="_blank" rel="noopener noreferrer" className="hover:text-mavBlue transition-colors" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-messages-square"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Mavullamma Car Consultancy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
