import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Star, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { SplitText } from "./SplitText";
import { Magnetic } from "./Magnetic";

const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=3270&auto=format&fit=crop",
    alt: "Modern barndominium farmhouse exterior San Antonio TX",
  },
  {
    url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=90&w=3270&auto=format&fit=crop",
    alt: "Luxury marble bathroom interior with premium fixtures",
  },
];

const DISPLAY_MS   = 9000;
const CROSSFADE_MS = 1800;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx]     = useState(0);
  const [prevIdx, setPrevIdx]         = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Parallax: background slides up as user scrolls down
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  // Slide crossfade timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setPrevIdx(activeIdx);
      const next = (activeIdx + 1) % SLIDES.length;
      setTimeout(() => {
        setActiveIdx(next);
        setIsTransitioning(false);
        setPrevIdx(null);
      }, CROSSFADE_MS);
    }, DISPLAY_MS);
    return () => clearInterval(timer);
  }, [activeIdx]);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-gray-900">

      {/* ── Parallax Background ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        {/* Outgoing slide */}
        {prevIdx !== null && (
          <div
            className="absolute inset-0 transition-opacity"
            style={{ opacity: isTransitioning ? 0 : 1, transitionDuration: `${CROSSFADE_MS}ms` }}
          >
            <img src={SLIDES[prevIdx].url} alt={SLIDES[prevIdx].alt}
              className="absolute inset-0 w-full h-full object-cover" />
          </div>
        )}

        {/* Active slide — Ken Burns */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            key={activeIdx}
            src={SLIDES[activeIdx].url}
            alt={SLIDES[activeIdx].alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ animation: `kenBurns ${DISPLAY_MS + CROSSFADE_MS}ms ease-in-out forwards` }}
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to right, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.72) 50%, rgba(17,24,39,0.42) 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(17,24,39,0.55))" }}
        />

        {/* Noise grain texture for premium feel */}
        <div className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
        />
      </motion.div>

      {/* ── Dot Indicators ── */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setActiveIdx(i)} aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{ width: i === activeIdx ? "24px" : "8px", height: "8px",
              background: i === activeIdx ? "#f97316" : "rgba(255,255,255,0.4)" }}
          />
        ))}
      </div>

      {/* ── Hero Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">

          {/* Rating badge — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-fit mb-8"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-white text-sm font-medium tracking-wide">5.0 Rating · 15 Reviews · San Antonio</span>
          </motion.div>

          {/* H1 — word by word reveal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            <SplitText delay={0.1} stagger={0.07}>
              Handyman & Remodeling Services
            </SplitText>
            <br />
            <span className="text-orange-500">
              <SplitText delay={0.4} stagger={0.1}>
                San Antonio, TX
              </SplitText>
            </span>
          </h1>

          {/* Subtitle — clip-path wipe reveal */}
          <motion.p
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl font-light leading-relaxed"
          >
            Joshua's Remodeling &amp; Repairs — licensed and insured handyman services for homeowners and
            businesses across Bexar County.
          </motion.p>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mb-10"
          >
            <a href="tel:+12109925170"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-xl transition-colors group"
            >
              <motion.span
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
              >
                <Phone className="w-5 h-5" />
              </motion.span>
              (210) 992-5170
            </a>
            <span className="text-gray-400 text-sm ml-4">Mon–Fri 8am–6pm · Sat 9am–2pm</span>
          </motion.div>

          {/* CTAs with Magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Magnetic strength={0.3}>
              <a href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-orange-600/30"
              >
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a href="/#services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center"
              >
                View Our Services
              </a>
            </Magnetic>
          </motion.div>

          {/* Trust badges — stagger in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-16 flex items-center gap-8 text-white/70 text-sm font-medium uppercase tracking-wider"
          >
            {["Licensed", "Insured", "100% Satisfaction"].map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.15 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1.10) translate(-1.5%, -1.5%); }
          to   { transform: scale(1.0)  translate(0%, 0%); }
        }
      `}</style>
    </section>
  );
}
