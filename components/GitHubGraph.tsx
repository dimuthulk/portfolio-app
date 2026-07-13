"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function GitHubGraph() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-32 w-full animate-pulse bg-gray-200 dark:bg-zinc-800 rounded-2xl" />
    );
  }

  // ⭐ Correct theme format (arrays only)
  const customTheme = {
    light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const colorScheme = theme === "dark" ? "dark" : "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ rotateX: 4, rotateY: -4 }}
      className="
        relative
        w-full 
        max-w-6xl 
        mx-auto 
        p-4 sm:p-6 
        rounded-2xl 
        border border-black/10 dark:border-white/10
        bg-white/60 dark:bg-zinc-800/40
        backdrop-blur-xl 
        shadow-[0_8px_30px_rgb(0,0,0,0.08)]
        transition-all
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className="absolute inset-0 rounded-2xl animate-glow opacity-30 dark:opacity-60" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particles opacity-10 dark:opacity-25" />
      </div>

      {/* Centering */}
      <div className="w-full overflow-x-auto flex justify-center items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.015,
              },
            },
          }}
          className="min-w-[340px] sm:min-w-0 flex justify-center items-center"
        >
          <GitHubCalendar
            key={theme} // ⭐ FIX: re-render on theme change
            username="dimuthulk"
            blockSize={12}
            blockMargin={3}
            fontSize={14}
            colorScheme={colorScheme}
            theme={customTheme}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
