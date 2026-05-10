import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

// Only show on devices with a real mouse (not touch screens / mobile)
const HAS_MOUSE = typeof window !== "undefined"
  && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const SIZE      = 60;    // ~dime size in px
const LASER     = "#ff2020";
const GLOW_LINE = `0 0 3px 1px rgba(255,20,20,0.9), 0 0 8px 3px rgba(255,20,20,0.4)`;
const GLOW_RING = `0 0 4px 2px rgba(255,20,20,0.7), 0 0 10px 4px rgba(255,20,20,0.3)`;
const GLOW_DOT  = `0 0 0 1.5px #ff2020, 0 0 6px 3px rgba(255,20,20,0.8)`;

export function Cursor() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const [isVisible,  setIsVisible]  = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMove  = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); setIsVisible(true); };
    const onDown  = () => setIsClicking(true);
    const onUp    = () => setIsClicking(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, []);

  useEffect(() => {
    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);
    const els = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
    );
    els.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      els.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  if (!HAS_MOUSE)  return null;
  if (!isVisible)  return null;

  const scale = isClicking ? 0.85 : isHovering ? 1.18 : 1;
  const size  = SIZE * scale;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width:  size,
        height: size,
      }}
      animate={{ width: size, height: size, opacity: isClicking ? 0.75 : 1 }}
      transition={{ duration: 0.12, ease: "easeOut" }}
    >
      {/* ── Outer ring ── */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border:    `1.5px solid ${LASER}`,
          boxShadow: GLOW_RING,
        }}
      />

      {/* ── Horizontal laser line (across full diameter, centered) ── */}
      <div
        className="absolute left-0 right-0"
        style={{
          top:       "50%",
          height:    "1.5px",
          marginTop: "-0.75px",
          background: LASER,
          boxShadow:  GLOW_LINE,
        }}
      />

      {/* ── Vertical laser line (top to bottom, centered) ── */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left:      "50%",
          width:     "1.5px",
          marginLeft:"-0.75px",
          background: LASER,
          boxShadow:  GLOW_LINE,
        }}
      />

      {/* ── Center target dot ── */}
      <div
        className="absolute rounded-full bg-white"
        style={{
          width:     7,
          height:    7,
          top:       "50%",
          left:      "50%",
          marginTop: "-3.5px",
          marginLeft:"-3.5px",
          boxShadow:  GLOW_DOT,
        }}
      />
    </motion.div>
  );
}
