import { motion } from "motion/react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const serviceLinks = [
  { name: "Drywall & Painting", path: "/services/drywall-painting" },
  { name: "Minor Plumbing", path: "/services/minor-plumbing" },
  { name: "Fixture Installation", path: "/services/fixture-installation" },
  { name: "Carpentry & Woodwork", path: "/services/carpentry-woodwork" },
  { name: "Rental Make-Ready", path: "/services/rental-make-ready" },
  { name: "Window & Door Repair", path: "/services/window-door-repair" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="https://i0.wp.com/joshua-remodeling.com/wp-content/uploads/2026/02/ca782439-5f10-4884-968b-136fdc3bc12d-edited.png?fit=1191%2C670&ssl=1" 
              alt="Joshua's Remodeling & Repair" 
              className="h-16 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link to="/#services" className="flex items-center gap-1 text-gray-600 hover:text-orange-600 font-medium transition-colors py-2">
                Services <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left -translate-y-2 group-hover:translate-y-0 z-50">
                <div className="pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                    {serviceLinks.map((link, i) => (
                      <Link 
                        key={i} 
                        to={link.path} 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-50 last:border-0"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link to="/#about" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">About Us</Link>
            <Link to="/#gallery" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Gallery</Link>
            <div className="flex items-center gap-4 ml-6">
              <a href="tel:+12109925170" className="flex items-center gap-2 text-gray-900 font-bold hover:text-orange-600 transition-colors">
                <Phone className="w-5 h-5 text-orange-600" />
                <span>Call Now</span>
              </a>
              <a href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
                Get Estimate
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-xl overflow-y-auto max-h-[80vh]"
        >
          <div className="space-y-1">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-md"
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpen && (
              <div className="pl-6 space-y-1 pb-2">
                {serviceLinks.map((link, i) => (
                  <Link 
                    key={i} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-md">About Us</Link>
          <Link to="/#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-md">Gallery</Link>
          <div className="mt-4 pt-4 flex flex-col gap-3 border-t border-gray-100">
             <a href="tel:+12109925170" className="flex items-center justify-center gap-2 text-gray-900 font-bold border border-gray-200 py-3 rounded-lg">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            <a href="/contact" className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg font-medium text-center">
              Get Estimate
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
