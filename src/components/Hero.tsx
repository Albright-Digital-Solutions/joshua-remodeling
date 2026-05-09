import { motion } from "motion/react";
import { ArrowRight, Star, Phone } from "lucide-react";
import { useState, useEffect } from "react";

// Video 1: Texas Barndominium exterior tour
// Video 2: Luxury bathroom sink/fixture installation
const VIDEOS = [
  {
    id: "MckqboqquFI",
    // Start at 10s to get right into the exterior shot, skip intro
    start: 10,
    label: "Barndominium Exterior",
  },
  {
    id: "z4gJAHm3H9g",
    start: 2,
    label: "Bathroom Fixture Install",
  },
];

// Seconds each video shows before crossfading
const DISPLAY_DURATION = 14000; // 14s
const FADE_DURATION = 1800;     // 1.8s crossfade

function YoutubeBackground({ videoId, start, visible }: { videoId: string; start: number; visible: boolean }) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0&start=${start}&iv_load_policy=3&playsinline=1`;

  return (
    <div
      className="absolute inset-0 w-full h-full transition-opacity"
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${FADE_DURATION}ms`,
        transitionTimingFunction: "ease-in-out",
        zIndex: 0,
      }}
    >
      <iframe
        src={src}
        title={`Hero background video`}
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "calc(100vw + 200px)",
          height: "calc(100vh + 200px)",
          minWidth: "177.78vh",
          minHeight: "56.25vw",
          pointerEvents: "none",
          border: "none",
        }}
      />
    </div>
  );
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VIDEOS.length);
    }, DISPLAY_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">

      {/* ── Video Backgrounds ── */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        {VIDEOS.map((v, i) => (
          <YoutubeBackground
            key={v.id}
            videoId={v.id}
            start={v.start}
            visible={i === activeIndex}
          />
        ))}

        {/* Dark overlay — stronger on left for text legibility */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.75) 50%, rgba(17,24,39,0.45) 100%)",
          }}
        />

        {/* Bottom fade to blend into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(17,24,39,0.6))" }}
        />
      </div>

      {/* ── Video indicator dots ── */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: i === activeIndex ? "#f97316" : "rgba(255,255,255,0.4)",
              transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
            }}
            aria-label={`Switch to video ${i + 1}`}
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
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
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

          {/* NAP — SEO: prominent phone in first 100 words */}
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
    </section>
  );
}
