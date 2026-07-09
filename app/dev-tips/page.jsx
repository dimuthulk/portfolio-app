"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import BackgroundAnimation from "@/components/BackgroundAnimation";

import devTipsData from "@/data/devtips.json";

export default function DevTipsPage() {
  return (
    // Main container (background colors අයින් කරලා තියෙන්නේ)
    <div className="relative min-h-screen w-full overflow-hidden text-black dark:text-gray-200 font-sans">
      {/* 1. LAYER 1: Background Animation (z-0 දාලා තියෙන්නේ) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-transparent">
        <BackgroundAnimation />
      </div>

      {/* 2. LAYER 2: Main Content (relative z-10 දාලා Animation එකට උඩින් තිබ්බා) */}
      <div className="relative z-10 flex flex-col items-center py-20 px-4">
        {/* Back Button */}
        <div className="w-full max-w-2xl mb-8">
          <Link
            href="/"
            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 w-fit"
          >
            {/* ← Back to Portfolio */}← git checkout portfolio
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
          {/* <p className="text-gray-500 dark:text-gray-300 text-lg max-w-xl mx-auto drop-shadow-md">
            Sharing practical developer tips, real-world solutions, Git & GitHub
            best practices, and lessons I learn while building modern web
            applications.
          </p> */}

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
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.18 }}
              whileHover={{ scale: 1.03 }}
              className="w-[504px] max-w-full rounded-2xl overflow-hidden border border-gray-700 
                         bg-white/10 dark:bg-black/40 backdrop-blur-md transition-all duration-300 shadow-2xl"
            >
              <div className="relative">
                <iframe
                  src={post.url}
                  height="670"
                  width="504"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  className="bg-transparent max-w-full"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
