"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Conventional Commits",
    subtitle: "DEV TIP #01",
    image: "/images/tip-03.jpg",
  },
  {
    id: 2,
    title: "Semantic Versioning",
    subtitle: "DEV TIP #02",
    image: "/images/tip-02.jpg",
  },
  {
    id: 3,
    title: "GitHub Licenses",
    subtitle: "DEV TIP #03",
    image: "/images/tip-01.jpg",
  },
  {
    id: 4,
    title: "Conventional Commits",
    subtitle: "DEV TIP #01",
    image: "/images/tip-03.jpg",
  },
  {
    id: 5,
    title: "Semantic Versioning",
    subtitle: "DEV TIP #02",
    image: "/images/tip-02.jpg",
  },
  {
    id: 6,
    title: "GitHub Licenses",
    subtitle: "DEV TIP #03",
    image: "/images/tip-01.jpg",
  },
];

export default function LinkedInPreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/dev-tips"
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text Animation */}
      <motion.span
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="font-bold bg-[linear-gradient(90deg,#06b6d4,#a855f7,#06b6d4)] bg-[length:200%_auto] bg-clip-text text-transparent underline decoration-sky-400 decoration-wavy underline-offset-4"
      >
        DEV TIPS articles on LinkedIn
      </motion.span>

      {/* Pop-up Box */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-5 z-50 pointer-events-auto"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden w-[400px] rounded-3xl p-4
                         border border-slate-200/50 bg-white/70 backdrop-blur-2xl shadow-[0_30px_60px_rgba(15,23,42,0.1)]
                         dark:border-white/10 dark:bg-black/20 dark:shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            >
              {/* Adaptive Glow Layer */}
              <div className="absolute -z-10 w-64 h-32 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[60px] top-4 left-8 pointer-events-none" />

              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ["-150%", "250%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/5 blur-xl rotate-12 pointer-events-none"
              />

              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex gap-3.5 w-max"
                >
                  {articles.map((article, index) => (
                    <motion.div
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                        border: "1px solid rgba(6,182,212,0.4)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      key={`${article.id}-${index}`}
                      className="w-32 rounded-xl overflow-hidden shrink-0 transition-colors duration-300
                                 bg-slate-50 border border-slate-200/60
                                 dark:bg-white/5 dark:border-white/10"
                    >
                      {/* Image Layer */}
                      <div className="relative h-32 w-full">
                        <Image
                          src={article.image}
                          fill
                          alt={article.title}
                          sizes="128px"
                          className="object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* ⭐ මෙන්න සුපිරියට හදපු Mini Glass Badge එක */}
                        <div className="absolute bottom-1 left-2">
                          <span
                            className="inline-flex items-center justify-center text-[7.5px] font-bold font-mono uppercase tracking-wider w-max h-auto leading-none px-1.5 py-[2px] rounded-md border
             bg-white border-white text-black
             dark:bg-sky-700 dark:border-sky-400 dark:text-white"
                          >
                            {article.subtitle}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
