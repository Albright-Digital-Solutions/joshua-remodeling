import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="bg-white inline-block p-2 rounded-xl mb-6">
              <Link to="/">
                <img 
                  src="https://i0.wp.com/joshua-remodeling.com/wp-content/uploads/2026/02/ca782439-5f10-4884-968b-136fdc3bc12d-edited.png?fit=1191%2C670&ssl=1" 
                  alt="Joshua's Remodeling" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              San Antonio's most trusted, licensed, and insured remodeling & repair service. We make home improvement stress-free.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571846055591"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/joshuasremodeling_repairs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-display">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/drywall-painting" className="text-gray-400 hover:text-orange-500 transition-colors">Drywall & Painting</Link></li>
              <li><Link to="/services/minor-plumbing" className="text-gray-400 hover:text-orange-500 transition-colors">Minor Plumbing</Link></li>
              <li><Link to="/services/fixture-installation" className="text-gray-400 hover:text-orange-500 transition-colors">Fixture Installation</Link></li>
              <li><Link to="/services/carpentry-woodwork" className="text-gray-400 hover:text-orange-500 transition-colors">Carpentry & Woodwork</Link></li>
              <li><Link to="/services/rental-make-ready" className="text-gray-400 hover:text-orange-500 transition-colors">Rental Make-Ready</Link></li>
              <li><Link to="/services/window-door-repair" className="text-gray-400 hover:text-orange-500 transition-colors">Window & Door Repair</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+12109925170" className="text-gray-400 hover:text-white transition-colors">(210) 992-5170</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:Joshsanguineti@gmail.com" className="text-gray-400 hover:text-white transition-colors">Joshsanguineti@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=29.3989566,-98.696355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  2947 Ash Field Dr,<br />San Antonio, TX
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-display">Business Hours</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Joshua's Remodeling & Repairs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://joshua-remodeling.com/privacy-policy-2/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a
              href="https://clienthub.getjobber.com/client_hubs/5ea9918f-922b-472b-a8e5-99ddc2b28f09/login/new?source=share_login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-sm"
            >
              Client Hub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
