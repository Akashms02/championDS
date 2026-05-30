import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';
import '../styles/animations.css';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section - Ready for custom logo */}
          <div className="flex items-center gap-2 animate-fade-in-down">
            {/* Custom Logo Placeholder */}
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
              {/* Replace with: <img src="/logo.png" alt="Champion DS" className="w-10 h-10" /> */}
              <Car size={24} />
            </div>
            <span className="text-xl font-bold text-blue-600 hidden sm:inline">Champion Driving School</span>
            <span className="text-lg font-bold text-blue-600 sm:hidden">Champion DS</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-blue-600 transition font-medium">Home</a>
            <a href="#about" className="hover:text-blue-600 transition font-medium">About</a>
            <a href="#pricing" className="hover:text-blue-600 transition font-medium">Pricing</a>
            <a href="#testimonials" className="hover:text-blue-600 transition font-medium">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 transition font-medium">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold transform hover:scale-105 duration-300">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t animate-slide-in-down">
            <a href="#home" className="block py-2 hover:text-blue-600 transition font-medium">Home</a>
            <a href="#about" className="block py-2 hover:text-blue-600 transition font-medium">About</a>
            <a href="#pricing" className="block py-2 hover:text-blue-600 transition font-medium">Pricing</a>
            <a href="#testimonials" className="block py-2 hover:text-blue-600 transition font-medium">Testimonials</a>
            <a href="#contact" className="block py-2 hover:text-blue-600 transition font-medium">Contact</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
