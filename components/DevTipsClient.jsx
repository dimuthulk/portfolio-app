"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import devTipsData from "@/data/devtips.json";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dynamic from "next/dynamic";

// --- Dynamic Import ---
// Background Animation එක 3D/Canvas එකක් වෙන්න පුළුවන් නිසා ssr: false දෙනවා
const BackgroundAnimation = dynamic(
  () => import("@/components/BackgroundAnimation"),
  { ssr: false },
);

// 🔥 Super-Premium Card Component (JS version)
const DevTipCard = ({ post, index }) => {
  const [isLoading, setIsLoading] = useState(true);

  const shineX = useMotionValue(0);
  const shineY = useMotionValue(0);

  const handleShineMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    shineX.set(e.clientX - rect.left);
    shineY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.18 }}
      whileHover={{ scale: 1.02 }}
      className="relative w-full max-w-[504px] h-[670px] rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-800 
                 bg-white/40 dark:bg-black/40 backdrop-blur-md transition-all duration-300 shadow-2xl flex flex-col mx-auto group"
    >
      {/* ✨ Shine v3 — cursor reactive neon sweep */}
      <div
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
        onMouseMove={handleShineMove}
      >
        <motion.div
          style={{
            left: shineX,
            top: shineY,
          }}
          className="
      absolute w-[180%] h-[180%]
      -translate-x-1/2 -translate-y-1/2
      bg-[radial-gradient(circle,_rgba(0,200,255,0.25),_transparent_60%)]
      dark:bg-[radial-gradient(circle,_rgba(0,200,255,0.18),_transparent_60%)]
      blur-2xl
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
    "
        />

        {/* diagonal sweep */}
        <motion.div
          initial={{ x: "-120%" }}
          whileHover={{ x: "40%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
      absolute -inset-y-20 -left-1/2 w-[160%]
      bg-gradient-to-r 
      from-transparent 
      via-cyan-300/40 
      to-transparent
      dark:via-cyan-200/25
      rotate-12
      opacity-0 group-hover:opacity-100
      transition-opacity duration-700
    "
        />
      </div>

      {/* 🟢 Premium Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col p-5 bg-white dark:bg-[#18181b] rounded-2xl overflow-hidden pointer-events-none">
          {/* Header Section: Profile Pic & Info */}
          <div className="flex items-center gap-3 mb-4">
            <Skeleton
              circle
              width={48}
              height={48}
              baseColor="#e5e7eb"
              highlightColor="#f3f4f6"
              className="dark:!bg-zinc-800 dark:after:!bg-gradient-to-r dark:after:!from-zinc-800 dark:after:!via-zinc-700 dark:after:!to-zinc-800"
            />
            <div className="flex-1 flex flex-col gap-1">
              <Skeleton width="45%" height={14} borderRadius={4} />
              <Skeleton width="65%" height={10} borderRadius={4} />
              <Skeleton width="25%" height={10} borderRadius={4} />
            </div>
          </div>

          {/* Body Section: Post Text */}
          <div className="mb-4">
            <Skeleton
              count={2}
              height={12}
              className="mb-1.5"
              borderRadius={4}
            />
            <Skeleton width="75%" height={12} borderRadius={4} />
          </div>

          {/* Media Section: The large image/link preview */}
          <div className="flex-1 w-full relative">
            <Skeleton
              height="100%"
              containerClassName="h-full block"
              className="absolute inset-0 rounded-xl"
              borderRadius={12}
            />
          </div>

          {/* Footer Section: Like, Comment, Share buttons */}
          <div className="flex justify-between items-center mt-5 pt-3 border-t border-gray-100 dark:border-zinc-800/50">
            <Skeleton width={60} height={20} borderRadius={16} />
            <Skeleton width={80} height={20} borderRadius={16} />
            <Skeleton width={60} height={20} borderRadius={16} />
          </div>
        </div>
      )}

      {/* 🟢 Actual Iframe (always top layer) */}
      <iframe
        src={post.url}
        height="100%"
        width="100%"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        sandbox="allow-scripts allow-same-origin allow-popups"
        className={`bg-transparent w-full h-full absolute inset-0 z-30 transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      ></iframe>
    </motion.div>
  );
};

export default function DevTipsClient() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-black dark:text-gray-200 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none bg-transparent">
        <BackgroundAnimation />
      </div>

      <AnimatePresence>
        <motion.div
          key="devtips-page"
          initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(4px)" }}
          transition={{ duration: 0.8, ease: [0.22, 0.8, 0.4, 1] }}
          className="relative z-10 flex flex-col items-center py-10 md:py-20 px-4 sm:px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-5xl mb-8"
          >
            <Link
              href="/"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 w-fit text-sm md:text-base font-medium"
            >
              <Icon icon="solar:arrow-left-bold-duotone" className="text-xl" />
              git checkout portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 0.8, 0.4, 1],
            }}
            className="w-full max-w-4xl mb-12 text-center relative"
          >
            <div className="pointer-events-none absolute -inset-x-10 -top-10 h-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)] blur-3xl" />

            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 flex flex-wrap items-center justify-center gap-3 text-black dark:text-white leading-tight">
              <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 dark:from-sky-300 dark:via-cyan-200 dark:to-emerald-200 bg-clip-text text-transparent">
                My
              </span>
              <span
                className="inline-flex items-center justify-center px-3 py-2 rounded-xl border 
                  bg-[#f3f4f6] border-[#e5e7eb] text-black 
                  dark:bg-[#020617] dark:border-[#1f2937] dark:text-white
                  transition-colors duration-300 shadow-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100 via-transparent to-sky-100 dark:from-sky-900/40 dark:via-transparent dark:to-sky-900/40 opacity-70" />
                <Icon
                  icon="logos:linkedin"
                  className="w-24 md:w-40 h-auto max-w-full relative z-10"
                />
              </span>
              <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 dark:from-sky-300 dark:via-cyan-200 dark:to-emerald-200 bg-clip-text text-transparent">
                DEV TIPS
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed md:leading-8">
              Sharing practical{" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 md:py-1 mx-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-sky-50 border-sky-200 text-sky-700 dark:bg-sky-950/40 dark:border-sky-700/40 dark:text-sky-300 whitespace-nowrap mb-1">
                <Icon
                  icon="solar:code-bold-duotone"
                  className="text-sky-500 text-lg md:text-xl"
                />
                Developer Tips
              </span>
              , real-world{" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 md:py-1 mx-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-700/40 dark:text-red-300 whitespace-nowrap mb-1">
                <Icon
                  icon="solar:bug-bold-duotone"
                  className="text-red-500 text-lg md:text-xl"
                />
                Solutions
              </span>
              ,{" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 md:py-1 mx-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-950/40 dark:border-orange-700/40 dark:text-orange-300 whitespace-nowrap mb-1">
                <Icon icon="skill-icons:git" className="text-lg md:text-xl" />
                Git
              </span>
              {" & "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 md:py-1 mx-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-neutral-100 border-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white whitespace-nowrap mb-1">
                <Icon
                  icon="skill-icons:github-dark"
                  className="text-lg md:text-xl"
                />
                GitHub
              </span>{" "}
              best practices, and lessons I learn while building{" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 md:py-1 mx-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-cyan-50 border-cyan-200 text-cyan-700 dark:bg-cyan-950/40 dark:border-cyan-700/40 dark:text-cyan-300 whitespace-nowrap mb-1">
                <Icon
                  icon="carbon:application-web"
                  className="text-cyan-500 text-lg md:text-xl"
                />
                Modern Web Apps
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 0.8, 0.4, 1],
            }}
            className="w-full max-w-[1600px] flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {devTipsData.map((post, i) => (
              <DevTipCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
