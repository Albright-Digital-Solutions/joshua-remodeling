import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

const LASER     = "#ff2020";
const GLOW_LINE = `0 0 3px 1px rgba(255,20,20,0.9), 0 0 10px 3px rgba(255,20,20,0.5), 0 0 20px 6px rgba(255,20,20,0.2)`;
const GLOW_DOT  = `0 0 0 2px #ff2020, 0 0 8px 4px rgba(255,20,20,0.8), 0 0 18px 8px rgba(255,20,20,0.35)`;

export function Cursor() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const [isVisible,  setIsVisible]  = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
    };
    const onDown = () => setIsClicking(true);
    const onUp   = () => setIsClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, []);

  // Watch for hover on interactive elements
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

  if (!isVisible) return null;

  return (
    <>
      {/* ── Horizontal laser line ──────────────────────────────────── */}
      <motion.div
        className="fixed left-0 pointer-events-none z-[9997]"
        style={{
          y,
          top:    "-1px",   // center the 2px line on cursor Y
          width:  "100vw",
          height: "2px",
          background: `linear-gradient(to right, transparent 0%, ${LASER} 8%, ${LASER} 92%, transparent 100%)`,
          boxShadow: GLOW_LINE,
          opacity: isClicking ? 0.6 : 1,
        }}
      />

      {/* ── Vertical laser line ────────────────────────────────────── */}
      <motion.div
        className="fixed top-0 pointer-events-none z-[9997]"
        style={{
          x,
          left:   "-1px",   // center the 2px line on cursor X
          width:  "2px",
          height: "100vh",
          background: `linear-gradient(to bottom, transparent 0%, ${LASER} 8%, ${LASER} 92%, transparent 100%)`,
          boxShadow: GLOW_LINE,
          opacity: isClicking ? 0.6 : 1,
        }}
      />

      {/* ── Center dot — laser target point ───────────────────────── */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-white"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: GLOW_DOT,
        }}
        animate={{
          width:  isHovering ? 18 : isClicking ? 6 : 10,
          height: isHovering ? 18 : isClicking ? 6 : 10,
          scale:  isClicking ? 0.7 : 1,
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
      />

      {/* ── "Level" tick marks on the lines (near center) ─────────── */}
      {/* Left tick */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x,
          y,
          translateX: "calc(-50% - 18px)",
          translateY: "-50%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: LASER,
          boxShadow: `0 0 4px 2px rgba(255,20,20,0.6)`,
          opacity: 0.6,
        }}
      />
      {/* Right tick */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x,
          y,
          translateX: "calc(-50% + 18px)",
          translateY: "-50%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: LASER,
          boxShadow: `0 0 4px 2px rgba(255,20,20,0.6)`,
          opacity: 0.6,
        }}
      />
      {/* Top tick */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "calc(-50% - 18px)",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: LASER,
          boxShadow: `0 0 4px 2px rgba(255,20,20,0.6)`,
          opacity: 0.6,
        }}
      />
      {/* Bottom tick */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "calc(-50% + 18px)",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: LASER,
          boxShadow: `0 0 4px 2px rgba(255,20,20,0.6)`,
          opacity: 0.6,
        }}
      />
    </>
  );
}
