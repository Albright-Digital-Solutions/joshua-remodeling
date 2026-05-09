import { motion } from "motion/react";
import { ArrowRight, Star, Phone } from "lucide-react";
import { useState, useEffect } from "react";

// Curated people-free background images
// Slide 1: Texas-style modern barndominium / farmhouse exterior
// Slide 2: Luxury bathroom interior with premium fixtures
const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=3270&auto=format&fit=crop",
    alt: "Modern barndominium farmhouse exterior San Antonio TX",
    label: "Exterior",
    // Ken Burns: start slightly zoomed in top-left, end slightly zoomed in bottom-right
    kbStart: "scale(1.12) translate(-2%, -2%)",
    kbEnd:   "scale(1.0)  translate(0%, 0%)",
  },
  {
    url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=90&w=3270&auto=format&fit=crop",
    alt: "Luxury marble bathroom interior with premium fixtures",
    label: "Interior",
    kbStart: "scale(1.0)  translate(0%, 0%)",
    kbEnd:   "scale(1.12) translate(2%, 2%)",
  },
];

const DISPLAY_MS   = 9000;  // 9s per slide
const CROSSFADE_MS = 1800;  // 1.8s crossfade

export function Hero() {
  const [activeIdx, setActiveIdx]     = useState(0);
  const [prevIdx, setPrevIdx]         = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-gray-900">

      {/* ── Background Slides ── */}
      <div className="absolute inset-0 z-0">

        {/* Previous slide (fades out) */}
        {prevIdx !== null && (
          <div
            className="absolute inset-0 transition-opacity"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transitionDuration: `${CROSSFADE_MS}ms`,
            }}
          >
            <img
              src={SLIDES[prevIdx].url}
              alt={SLIDES[prevIdx].alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: SLIDES[prevIdx].kbEnd }}
            />
          </div>
        )}

        {/* Active slide (Ken Burns pan+zoom) */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            key={activeIdx}
            src={SLIDES[activeIdx].url}
            alt={SLIDES[activeIdx].alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              animation: `kenBurns ${DISPLAY_MS + CROSSFADE_MS}ms ease-in-out forwards`,
              transformOrigin: "center center",
            }}
          />
        </div>

        {/* Dark overlays for text legibility */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(17,24,39,0.90) 0%, rgba(17,24,39,0.70) 50%, rgba(17,24,39,0.40) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-10"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(17,24,39,0.55))" }}
        />
      </div>

      {/* ── Dot Indicators ── */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:  i === activeIdx ? "24px" : "8px",
              height: "8px",
              background: i === activeIdx ? "#f97316" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* ── Hero Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-fit mb-6"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-white text-sm font-medium tracking-wide">5.0 Rating · 15 Reviews · San Antonio</span>
          </motion.div>

          {/* H1 — SEO: service + city */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Handyman &amp; Remodeling Services<br />
            <span className="text-orange-500">San Antonio, TX</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl font-light leading-relaxed"
          >
            Joshua's Remodeling &amp; Repairs — licensed and insured handyman services for homeowners and
            businesses across Bexar County.
          </motion.p>

          {/* NAP — prominent for local SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8"
          >
            <a
              href="tel:+12109925170"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              (210) 992-5170
            </a>
            <span className="text-gray-400 text-sm ml-4">Mon–Fri 8am–6pm · Sat 9am–2pm</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Get Your Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center"
            >
              View Our Services
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex items-center gap-8 text-white/70 text-sm font-medium uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> Licensed
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> Insured
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> 100% Satisfaction
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ken Burns keyframe animation */}
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1.10) translate(-1.5%, -1.5%); }
          to   { transform: scale(1.0)  translate(0%, 0%); }
        }
      `}</style>
    </section>
  );
}
