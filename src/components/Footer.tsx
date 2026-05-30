import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center overflow-hidden shadow-lg border border-amber-500/20">
                <img src="/logo.png" alt="Prime Champion Drive Academy" className="w-full h-full object-cover scale-110" />
              </div>
              <span className="text-lg font-bold">Prime Champion DS</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Professional driving school committed to your safety.</p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/nithe_esh31?igsh=aThoeXhmc25jcWhi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-tr hover:from-yellow-600 hover:via-pink-600 hover:to-purple-600 flex items-center justify-center text-gray-400 hover:text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                title="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                title="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
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
                <Phone size={16} /> +91 99639 32158
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> nitheeshreddyv@gmail.com
              </li>
              <li className="flex gap-2 text-xs leading-relaxed">
                <MapPin size={16} className="shrink-0 mt-0.5 text-blue-400" />
                <span>
                  2nd Floor, No 712, Modi Hospital Rd, Mahalakshmi Puram, West of Chord Road, Stage 2, Nagapura, Bengaluru, Karnataka 560086
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Prime Champion Drive Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
