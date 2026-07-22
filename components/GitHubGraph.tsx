"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GitHubGraph() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // අලුත් API එකෙන් data fetch කිරීම
  const { data, isLoading } = useSWR("/api/github", fetcher);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return (
      <div className="h-32 w-full animate-pulse bg-gray-200 dark:bg-zinc-800 rounded-2xl" />
    );
  }

  const customTheme = {
    light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const colorScheme = theme === "dark" ? "dark" : "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="
        relative
        w-full
        max-w-6xl
        mx-auto
        p-3 sm:p-3
        rounded-2xl
        border border-black/10 dark:border-white/10
        bg-white/60 dark:bg-zinc-800/40
        shadow-[0_12px_40px_rgb(0,0,0,0.12)]
        overflow-hidden
      "
    >
      <div className="w-full flex justify-center items-center overflow-hidden px-2">
        <div className="w-full origin-top flex justify-center">
          {data && data.length > 0 ? (
            <ActivityCalendar
              data={data}
              colorScheme={colorScheme}
              theme={customTheme}
              blockSize={12}
              blockMargin={3}
              fontSize={14}
              labels={{
                totalCount: `{{count}} contributions in the last year`,
              }}
            />
          ) : (
            <div className="text-sm text-gray-500 py-10">
              Failed to load contributions.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
