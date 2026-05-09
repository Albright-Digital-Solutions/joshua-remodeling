import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

const LOGO_URL =
  "https://i0.wp.com/joshua-remodeling.com/wp-content/uploads/2026/02/ca782439-5f10-4884-968b-136fdc3bc12d-edited.png?fit=1191%2C670&ssl=1";

// Approximate navbar logo geometry (h-16 = 64px, aspect ~1.78, left padding ~20px, v-center in h-24)
const NAV_LOGO_W  = 114; // 64px * 1.78
const NAV_LOGO_H  = 64;
const NAV_LEFT    = 20;  // px-4 / sm:px-6 left padding approx
const NAV_TOP     = 16;  // (96px navbar - 64px logo) / 2
const SPLASH_W    = 300; // width of logo in splash center

type Phase = "enter" | "hold" | "fly" | "done";

function useWindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const fn = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return size;
}

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const { w, h } = useWindowSize();
  const [phase, setPhase] = useState<Phase>("enter");
  const [visible, setVisible] = useState(true);

  // Calculate the vector to move the logo from center → navbar position
  // Logo center in splash: (w/2, h/2)
  // Logo center in navbar: (NAV_LEFT + NAV_LOGO_W/2, NAV_TOP + NAV_LOGO_H/2)
  const targetX = NAV_LEFT + NAV_LOGO_W / 2 - w / 2;
  const targetY = NAV_TOP  + NAV_LOGO_H / 2 - h / 2;
  const targetScale = NAV_LOGO_W / SPLASH_W;

  useEffect(() => {
    // Skip on repeat visits this session
    if (sessionStorage.getItem("jr_splash_shown")) {
      setVisible(false);
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase("hold"),  900);   // logo fully in
    const t2 = setTimeout(() => setPhase("fly"),   2000);  // begin fly to nav
    const t3 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("jr_splash_shown", "1");
      onComplete();
    }, 3100);

    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
          style={{ background: "#050505" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* ── Radial orange glow ── */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "fly" ? 0 : 0.22 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-[700px] h-[700px] rounded-full"
              style={{
                background: "radial-gradient(circle, #f97316 0%, transparent 65%)",
                filter: "blur(20px)",
              }}
            />
          </motion.div>

          {/* ── Horizontal scan line ── */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none"
            initial={{ top: "40%", opacity: 0 }}
            animate={
              phase === "enter"
                ? { top: "60%", opacity: [0, 0.8, 0] }
                : { opacity: 0 }
            }
            transition={{ duration: 1.0, ease: "easeInOut" }}
          />

          {/* ── Logo — flies to navbar position ── */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={
              phase === "fly"
                ? {
                    opacity: 1,
                    scale: targetScale,
                    x: targetX,
                    y: targetY,
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                  }
            }
            transition={
              phase === "fly"
                ? { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <img
              src={LOGO_URL}
              alt="Joshua's Remodeling & Repairs"
              style={{ width: SPLASH_W, height: "auto", filter: "brightness(1.05)" }}
              draggable={false}
            />
          </motion.div>

          {/* ── Tagline — fades in below logo, fades out on fly ── */}
          <motion.div
            className="absolute z-10 text-center"
            style={{ top: "calc(50% + 120px)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={
              phase === "hold"
                ? { opacity: 1, y: 0 }
                : phase === "fly"
                ? { opacity: 0, y: -8 }
                : {}
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-gray-400 text-sm uppercase tracking-[0.35em] font-light">
              San Antonio, TX &nbsp;·&nbsp; Licensed &amp; Insured
            </p>
          </motion.div>

          {/* ── Progress bar at bottom ── */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 overflow-hidden">
            <motion.div
              className="h-full bg-orange-500"
              initial={{ width: "0%" }}
              animate={{ width: phase === "fly" ? "100%" : "55%" }}
              transition={{
                duration: phase === "fly" ? 0.9 : 1.8,
                ease: phase === "fly" ? [0.22, 1, 0.36, 1] : "easeOut",
              }}
            />
          </div>

          {/* ── Corner accent lines (top-left, bottom-right) ── */}
          <motion.div
            className="absolute top-6 left-6 w-12 h-12 border-t border-l border-orange-500/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "fly" ? 0 : 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-orange-500/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "fly" ? 0 : 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
