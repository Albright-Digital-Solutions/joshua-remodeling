import { Wrench, Paintbrush, Droplets, Hammer, Home, Frame } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    title: "Drywall & Painting",
    description: "Expert patching of holes, cracks, and damage, plus touch-up painting.",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    href: "/services/drywall-painting"
  },
  {
    title: "Plumbing Repairs & Fixtures",
    description: "Faucet replacement, toilet repair, fixing leaks, and clearing simple clogs.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    href: "/services/minor-plumbing"
  },
  {
    title: "Fixture Installation",
    description: "Installing ceiling fans, light fixtures, cabinet hardware, and TV mounts.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop",
    href: "/services/fixture-installation"
  },
  {
    title: "Carpentry & Woodwork",
    description: "Fence and deck repair, trim installation, custom shelving, and minor door repair.",
    icon: Hammer,
    image: "/carpentry-gazebo.jpg",
    href: "/services/carpentry-woodwork"
  },
  {
    title: "Rental Make-Ready",
    description: "Comprehensive services to quickly prepare rental properties for new tenants.",
    icon: Home,
    image: "/rental-floor-replacement.jpg",
    href: "/services/rental-make-ready"
  },
  {
    title: "Window & Door Repair",
    description: "Replacing broken panes, adjusting sticking doors, and hardware replacements.",
    icon: Frame,
    image: "/window-door-installation.jpg",
    href: "/services/window-door-repair"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display mt-2">
            Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600">
            From small everyday fixes to larger property maintenance projects, our team has the expertise to handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-50 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-white p-3 rounded-xl shadow-lg">
                  <service.icon className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <Link to={service.href} className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 group/link">
                  Learn more 
                  <span className="transform transition-transform group-hover/link:translate-x-1 ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
