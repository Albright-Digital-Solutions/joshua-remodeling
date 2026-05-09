import { useState, ReactNode } from "react";
import { motion } from "motion/react";

interface TexturedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

// ── Texture 1: Subtle linen / diagonal weave (default) ─────────────────────
const LINEN_BG = {
  backgroundImage: [
    "repeating-linear-gradient( 45deg, rgba(0,0,0,0.035) 0px, rgba(0,0,0,0.035) 1px, transparent 1px, transparent 10px)",
    "repeating-linear-gradient(-45deg, rgba(0,0,0,0.025) 0px, rgba(0,0,0,0.025) 1px, transparent 1px, transparent 10px)",
  ].join(", "),
  backgroundSize: "16px 16px",
  backgroundColor: "#ffffff",
};

// ── Texture 2: Blueprint / architect's measuring paper (hover) ──────────────
const BLUEPRINT_BG = {
  backgroundImage: [
    // Major grid lines (every 40px)
    "linear-gradient(rgba(59,130,246,0.13) 1px, transparent 1px)",
    "linear-gradient(90deg, rgba(59,130,246,0.13) 1px, transparent 1px)",
    // Minor grid lines (every 10px)
    "linear-gradient(rgba(59,130,246,0.055) 1px, transparent 1px)",
    "linear-gradient(90deg, rgba(59,130,246,0.055) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "40px 40px, 40px 40px, 10px 10px, 10px 10px",
  backgroundColor: "#f5f8ff",
};

export function TexturedSection({ children, className = "", id }: TexturedSectionProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={id}
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Linen texture — visible by default, fades out on hover ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        style={LINEN_BG}
      />

      {/* ── Blueprint texture — hidden by default, fades in on hover ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        style={BLUEPRINT_BG}
      />

      {/* ── Section content sits on top ── */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
