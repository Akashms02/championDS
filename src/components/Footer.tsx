import { Car, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold">Champion DS</span>
            </div>
            <p className="text-gray-400 text-sm">Professional driving school committed to your safety.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#contact" className="hover:text-blue-400 transition">Driving Lessons</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">License Test Prep</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Defensive Driving</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Refresher Courses</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} /> (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@championds.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> 123 Main Street
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Champion Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
