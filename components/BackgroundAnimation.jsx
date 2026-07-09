"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function BackgroundAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  const parallaxX1 = useTransform(springX, (v) => v * -0.04);
  const parallaxY1 = useTransform(springY, (v) => v * -0.04);
  const parallaxX2 = useTransform(springX, (v) => v * -0.02);
  const parallaxY2 = useTransform(springY, (v) => v * -0.02);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none bg-slate-50 dark:bg-[#050505] transition-colors duration-700 text-slate-300 dark:text-slate-700">
      {/* Animated Infinite Grid - ඔන්න Opacity එක වැඩි කරා (0.3 සහ 0.25) */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Parallax Background Blobs */}
      <motion.div
        style={{ x: parallaxX1, y: parallaxY1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full filter blur-[100px] 
                   bg-blue-300/40 dark:bg-sky-800/30 will-change-transform"
      />

      <motion.div
        style={{ x: parallaxX2, y: parallaxY2 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full filter blur-[120px] 
                   bg-purple-300/40 dark:bg-indigo-900/30 will-change-transform"
      />

      {/* Interactive Cursor Aura */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full filter blur-[80px] 
                   bg-sky-400/20 dark:bg-blue-600/20 will-change-transform"
      />

      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute top-0 left-0 w-[150px] h-[150px] rounded-full filter blur-[50px] 
                   bg-cyan-300/40 dark:bg-cyan-500/30 will-change-transform"
      />

      {/* Premium Noise Overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.3] dark:opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
