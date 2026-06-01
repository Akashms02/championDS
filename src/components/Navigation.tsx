import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/animations.css';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'pricing', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Element matches if its top is near/above viewport top and bottom is below viewport top
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section);
            
            // Update URL pathname on scroll without page reload or hash
            const newPath = section === 'home' ? '/' : `/${section}`;
            if (window.location.pathname !== newPath) {
              window.history.replaceState(null, '', newPath);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'About us', href: '/about', id: 'about' },
    { label: 'Pricing', href: '/pricing', id: 'pricing' },
    { label: 'Testimonials', href: '/testimonials', id: 'testimonials' },
    { label: 'Contact us', href: '/contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-[#FAFAFA] backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section - Custom logo applied with a premium clean look */}
          <a href="/" className="flex items-center gap-3 animate-fade-in-down">
            <div className="h-14 md:h-16 w-auto flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="/logo.svg" 
                alt="Prime Champion Drive Academy" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  // Fallback if svg fails
                  (e.target as HTMLImageElement).src = '/logo.png';
                }}
              />
            </div>
          </a>
          
          {/* Desktop Menu - Centered Rounded Pill as in the reference */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="bg-white px-6 py-2 rounded-xl shadow-xs flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors duration-300 font-semibold text-sm px-3 py-1.5 relative group ${
                    activeSection === link.id
                      ? 'text-brand-red'
                      : 'text-gray-600 hover:text-brand-red'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA - Red theme alignment */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="bg-brand-red text-white px-6 py-2.5 rounded-full hover:bg-brand-red-hover transition-all duration-300 font-semibold text-sm shadow-md shadow-brand-red/10 hover:shadow-lg hover:shadow-brand-red/20 transform hover:-translate-y-0.5 inline-block"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-4 px-2 space-y-2 bg-white border border-gray-100 rounded-xl shadow-xl animate-slide-in-down">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium text-base transition-colors ${
                  activeSection === link.id
                    ? 'bg-brand-red-light text-brand-red'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-brand-red'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-4">
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-brand-red text-white py-3 rounded-lg hover:bg-brand-red-hover transition font-semibold"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
