"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import devTipsData from "@/data/devtips.json";

// 1. Independent Card Component for Individual Loading States
const DevTipCard = ({ post, index }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.18 }}
      whileHover={{ scale: 1.03 }}
      // w-[504px] වෙනුවට w-full sm:w-[504px] භාවිතා කර ඇත
      className="w-full sm:w-[504px] h-[670px] max-w-full rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-800 
                 bg-white/40 dark:bg-black/40 backdrop-blur-md transition-all duration-300 shadow-2xl relative flex flex-col"
    >
      {/* ... (Skeleton Loader එක කලින් විදියටම තියන්න) ... */}

      {/* Actual Iframe */}
      <iframe
        src={post.url}
        height="100%"
        width="100%" // width="504" වෙනුවට width="100%" භාවිතා කරන්න
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        sandbox="allow-scripts allow-same-origin allow-popups"
        className={`bg-transparent w-full h-full absolute inset-0 z-10 transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      ></iframe>
    </motion.div>
  );
};

export default function DevTipsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-black dark:text-gray-200 font-sans">
      {/* 1. LAYER 1: Background Animation (z-0) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-transparent">
        <BackgroundAnimation />
      </div>

      {/* 2. LAYER 2: Main Content (relative z-10) */}
      <div className="relative z-10 flex flex-col items-center py-20 px-4">
        {/* Back Button */}
        <div className="w-full max-w-2xl mb-8">
          <Link
            href="/"
            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 w-fit"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl mb-12 text-center"
        >
          <h1 className="text-4xl font-extrabold mb-4 flex items-center justify-center gap-4 text-black dark:text-white">
            My
            <span
              className="inline-flex items-center justify-center px-3 py-2 rounded-xl border 
                  bg-[#f3f4f6] border-[#e5e7eb] text-black 
                  dark:bg-[#111827] dark:border-[#374151] dark:text-white
                 transition-colors duration-300"
            >
              <Icon icon="logos:linkedin" className="w-40 h-auto max-w-full" />
            </span>
            DEV TIPS
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-8">
            Sharing practical{" "}
            <span
              className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105
    bg-sky-50 border-sky-200 text-sky-700
    dark:bg-sky-950/40 dark:border-sky-700/40 dark:text-sky-300"
            >
              <Icon
                icon="solar:code-bold-duotone"
                className="text-sky-500 text-xl"
              />
              Developer Tips
            </span>
            , real-world{" "}
            <span
              className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105
    bg-red-50 border-red-200 text-red-700
    dark:bg-red-950/40 dark:border-red-700/40 dark:text-red-300"
            >
              <Icon
                icon="solar:bug-bold-duotone"
                className="text-red-500 text-xl"
              />
              Solutions
            </span>
            ,{" "}
            <span
              className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105
    bg-orange-50 border-orange-200 text-orange-700
    dark:bg-orange-950/40 dark:border-orange-700/40 dark:text-orange-300"
            >
              <Icon icon="skill-icons:git" className="text-xl" />
              Git
            </span>
            {" & "}
            <span
              className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105
    bg-neutral-100 border-neutral-300 text-neutral-900
    dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
            >
              <Icon icon="skill-icons:github-dark" className="text-xl" />
              GitHub
            </span>{" "}
            best practices, and lessons I learn while building{" "}
            <span
              className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105
    bg-cyan-50 border-cyan-200 text-cyan-700
    dark:bg-cyan-950/40 dark:border-cyan-700/40 dark:text-cyan-300"
            >
              <Icon
                icon="carbon:application-web"
                className="text-cyan-500 text-xl"
              />
              Modern Web Apps
            </span>
            .
          </p>
        </motion.div>

        {/* Posts Section */}
        <div className="w-full flex flex-wrap justify-center gap-10">
          {devTipsData.map((post, i) => (
            <DevTipCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
