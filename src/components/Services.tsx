import { Wrench, Paintbrush, Droplets, Hammer, Home, Frame, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { SplitText } from "./SplitText";

const services = [
  {
    title: "Drywall & Painting",
    description: "Expert patching of holes, cracks, and damage, plus touch-up painting.",
    icon: Paintbrush,
    image: "/drywall-painting.jpg",
    href: "/services/drywall-painting",
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "Plumbing Repairs & Fixtures",
    description: "Faucet replacement, toilet repair, fixing leaks, and clearing simple clogs.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    href: "/services/minor-plumbing",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Fixture Installation",
    description: "Installing ceiling fans, light fixtures, cabinet hardware, and TV mounts.",
    icon: Wrench,
    image: "/fixture-ceiling-fan.jpg",
    href: "/services/fixture-installation",
    color: "from-yellow-500/20 to-amber-500/10",
  },
  {
    title: "Carpentry & Woodwork",
    description: "Fence and deck repair, trim installation, custom shelving, and minor door repair.",
    icon: Hammer,
    image: "/carpentry-gazebo.jpg",
    href: "/services/carpentry-woodwork",
    color: "from-green-600/20 to-emerald-500/10",
  },
  {
    title: "Rental Make-Ready",
    description: "Comprehensive services to quickly prepare rental properties for new tenants.",
    icon: Home,
    image: "/rental-floor-replacement.jpg",
    href: "/services/rental-make-ready",
    color: "from-purple-500/20 to-violet-500/10",
  },
  {
    title: "Window & Door Repair",
    description: "Replacing broken panes, adjusting sticking doors, and hardware replacements.",
    icon: Frame,
    image: "/window-door-installation.jpg",
    href: "/services/window-door-repair",
    color: "from-sky-500/20 to-blue-500/10",
  },
];

function TiltCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 14;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${isHovered ? 1.03 : 1})`,
          transition: isHovered
            ? "transform 0.12s ease-out, box-shadow 0.2s ease"
            : "transform 0.5s ease-out, box-shadow 0.3s ease",
          boxShadow: isHovered
            ? "0 24px 60px -12px rgba(0,0,0,0.18), 0 4px 16px -4px rgba(249,115,22,0.15)"
            : "0 1px 3px rgba(0,0,0,0.05)",
        }}
        className="rounded-2xl border border-gray-100 overflow-hidden bg-white flex flex-col will-change-transform cursor-none"
      >
        {/* Image section */}
        <div className="h-48 overflow-hidden relative">
          {/* Gradient accent overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} z-10 opacity-60 mix-blend-multiply`} />
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          {/* Icon badge */}
          <div
            className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg"
            style={{
              transform: isHovered ? "translateY(-2px)" : "translateY(0)",
              transition: "transform 0.3s ease",
            }}
          >
            <service.icon className="w-6 h-6 text-orange-600" />
          </div>

          {/* "View Service" pill — slides up on hover */}
          <div
            className="absolute inset-0 z-20 flex items-center justify-center"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          >
            <span className="bg-orange-600/90 backdrop-blur text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              View Service
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-500 leading-relaxed mb-6 flex-1 text-sm">{service.description}</p>
          <Link
            to={service.href}
            className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 gap-1.5 group/link text-sm"
          >
            Learn more
            <ArrowRight
              className="w-4 h-4"
              style={{
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.2s ease",
              }}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-50 blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-50 blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-600 font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            What We Do
          </motion.p>

          <div className="text-4xl md:text-5xl font-bold text-gray-900 font-display leading-tight mb-6">
            <SplitText stagger={0.06}>Comprehensive Services</SplitText>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-500"
          >
            From small everyday fixes to larger property maintenance projects, our team has the expertise to handle it all.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <TiltCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
