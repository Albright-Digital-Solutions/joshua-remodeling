import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon } from "lucide-react";
import { TexturedSection } from "../components/TexturedSection";
import { SplitText } from "../components/SplitText";

// ── Real photos scraped from Joshua's Remodeling Google Business listing ──────
const PHOTOS = [
  { src: "/gallery/photo-01.jpg", alt: "Joshua's Remodeling project — completed work in San Antonio TX" },
  { src: "/gallery/photo-02.jpg", alt: "Remodeling and repair service work by Joshua's team" },
  { src: "/gallery/photo-03.jpg", alt: "Interior remodeling project San Antonio" },
  { src: "/gallery/photo-04.jpg", alt: "Handyman repair work completed by Joshua's Remodeling" },
  { src: "/gallery/photo-05.jpg", alt: "Home improvement project San Antonio TX" },
  { src: "/gallery/photo-06.jpg", alt: "Professional remodeling work — Joshua's Remodeling & Repairs" },
  { src: "/gallery/photo-07.jpg", alt: "Renovation and repair service San Antonio" },
  { src: "/gallery/photo-08.jpg", alt: "Quality craftsmanship by Joshua's team" },
  { src: "/gallery/photo-09.jpg", alt: "Completed home repair project San Antonio TX" },
  { src: "/gallery/photo-10.jpg", alt: "Professional handyman services in Bexar County TX" },
];

// ── Lightbox ─────────────────────────────────────────────────────────────────
interface LightboxProps {
  photos: typeof PHOTOS;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ photos, index, onClose, onNext, onPrev }: LightboxProps) {
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowRight")  onNext();
      if (e.key === "ArrowLeft")   onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-widest uppercase">
        {index + 1} / {photos.length}
      </div>

      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={photo.src}
          alt={photo.alt}
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>

      {/* Next */}
      <button
        className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom strip — thumbnail filmstrip */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2"
        onClick={(e) => e.stopPropagation()}
      >
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => { /* handled by parent */ }}
            className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === index ? "border-orange-500 opacity-100" : "border-transparent opacity-50 hover:opacity-75"}`}
          >
            <img src={p.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// ── Gallery Page ──────────────────────────────────────────────────────────────
export function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Project Gallery | Joshua's Remodeling & Repairs San Antonio TX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Browse real project photos from Joshua's Remodeling & Repairs in San Antonio, TX. See our completed drywall, painting, carpentry, fixture installation, and rental make-ready work across Bexar County.");
  }, []);

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % PHOTOS.length : null), []);
  const goPrev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null), []);

  return (
    <TexturedSection className="min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-gray-900 pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 40% 60%, rgba(249,115,22,0.15) 0%, transparent 65%)" }} />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6"
          >
            <ImageIcon className="w-4 h-4" />
            Real Work · Real Results
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            <SplitText delay={0.1} stagger={0.08}>Our Project Gallery</SplitText>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Photos directly from our Google Business listing — real projects completed
            by Joshua's team across San Antonio and Bexar County.
          </motion.p>

          <motion.a
            href="https://www.google.com/search?q=joshuas+remodeling+and+repair+san+antonio"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            View our Google Listing
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </motion.a>
        </div>
      </section>

      {/* ── Masonry Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto object-cover block"
                style={{
                  transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-bold uppercase tracking-widest px-5 py-2.5 rounded-full">
                  View Full Size
                </div>
              </div>

              {/* Photo number badge */}
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {i + 1} / {PHOTOS.length}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 bg-orange-600 rounded-3xl py-14 px-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Like What You See?</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Get the same quality craftsmanship for your home or rental property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:+12109925170"
              className="bg-orange-700 hover:bg-orange-800 border border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Call (210) 992-5170
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={PHOTOS}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNext={goNext}
            onPrev={goPrev}
          />
        )}
      </AnimatePresence>
    </TexturedSection>
  );
}
