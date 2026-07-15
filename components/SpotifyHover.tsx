"use client";

import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function timeAgoSafe(timestamp?: string | number) {
  if (!timestamp) return "recently";

  let past: Date;

  if (typeof timestamp === "number") {
    past = new Date(timestamp * 1000);
  } else {
    past = new Date(timestamp);
  }

  if (isNaN(past.getTime())) return "recently";

  const now = new Date();
  const diffMs = now.getTime() - past.getTime();

  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) return "just now";
  if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;
  return `${diffDays} days ago`;
}

export default function SpotifyHover() {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Initial fetch පමණයි. Background interval එක අයින් කලා performance වලට.
  const { data, isLoading, mutate } = useSWR("/api/spotify", fetcher, {
    revalidateOnFocus: false,
  });

  // Auto-hide after 8 seconds
  useEffect(() => {
    if (isHovered) {
      const t = setTimeout(() => setIsHovered(false), 8000);
      return () => clearTimeout(t);
    }
  }, [isHovered]);

  // 2. Hover කරද්දී සහ Click කරද්දී අලුත්ම data ටික ගන්නවා
  const handleMouseEnter = () => {
    setIsHovered(true);
    mutate(); // Fetch fresh data on hover
  };

  const handleClick = () => {
    setIsHovered(!isHovered);
    if (!isHovered) {
      mutate(); // Fetch fresh data on tap (Mobile)
    }
  };

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* 3. Animated Badge (කලින් children විදිහට ආපු එක) */}
      <motion.span
        whileHover={{ scale: 1.05 }}
        className={`inline-flex items-center gap-1.5 px-3 py-1 my-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 ${
          data?.isPlaying
            ? "bg-emerald-50 border-emerald-400 text-emerald-800 shadow-[0_0_12px_rgba(16,185,129,0.4)] dark:bg-emerald-950/50 dark:border-emerald-500/60 dark:text-emerald-300"
            : "bg-emerald-50/50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/20 dark:border-emerald-700/40 dark:text-emerald-400"
        }`}
      >
        <Icon
          icon="selfhst:spotify"
          className={`${
            data?.isPlaying
              ? "text-[#1DB954]"
              : "text-emerald-600 dark:text-emerald-500"
          } text-lg md:text-xl`}
        />
        Spotify
        {/* EQ Bars (සින්දුව අහනවා නම් පමණක් පෙන්වයි) */}
        {data?.isPlaying && (
          <div className="flex items-end gap-[2px] ml-1 h-[14px]">
            <motion.div
              animate={{ height: ["4px", "12px", "4px"] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-[3px] bg-emerald-500 rounded-sm"
            />
            <motion.div
              animate={{ height: ["8px", "14px", "8px"] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="w-[3px] bg-emerald-500 rounded-sm"
            />
            <motion.div
              animate={{ height: ["6px", "10px", "6px"] }}
              transition={{ repeat: Infinity, duration: 1.0 }}
              className="w-[3px] bg-emerald-500 rounded-sm"
            />
          </div>
        )}
      </motion.span>

      {/* 4. Popup Component */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(6px)" }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            // 🔥 Mobile Responsive Fix: Mobile වල left-0, Desktop වල left-1/2
            className="absolute bottom-full left-0 md:left-1/2 md:-translate-x-1/2 mb-3 z-[100] w-[260px] md:w-[280px]"
          >
            {/* Tooltip Arrow Mobile Responsive Fix */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 -bottom-[5px] w-3 h-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rotate-45 border-b border-r border-gray-200/50 dark:border-white/10 z-0"></div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="
                group relative z-10 overflow-hidden rounded-2xl 
                bg-white dark:bg-zinc-900 
                backdrop-blur-xl 
                border border-gray-200/50 dark:border-white/10 
                shadow-[0_12px_28px_rgba(0,0,0,0.06)]
                dark:shadow-[0_18px_40px_rgba(0,0,0,0.45)]
              "
            >
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-emerald-400/20 via-green-500/10 to-transparent blur-2xl" />
              <motion.div
                animate={{ x: ["-150%", "250%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10 blur-xl rotate-12 pointer-events-none z-0"
              />

              {isLoading && !data ? (
                <div className="relative z-10 flex items-center gap-2 p-4 text-sm text-gray-600 dark:text-gray-400">
                  <Icon
                    icon="svg-spinners:ring-resize"
                    className="text-emerald-500 text-lg"
                  />
                  Updating...
                </div>
              ) : data && !data.error ? (
                <a
                  href={data.songUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 block"
                >
                  <div className="relative flex items-center h-[85px] pl-3 gap-3">
                    <div
                      className={`relative h-[65px] w-[65px] shrink-0 overflow-hidden rounded-xl border-[1px] shadow-lg ${data.isPlaying ? "border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.3)]" : "border-gray-200/50 dark:border-white/10"}`}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-emerald-500/25 blur-md"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent pointer-events-none"></div>
                      <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        src={data.albumImageUrl}
                        alt={data.title}
                        className="h-full w-full object-cover"
                      />
                      {data.isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                            className="h-5 w-5 rounded-full bg-black/80 flex items-center justify-center shadow-sm"
                          >
                            <Icon
                              icon="logos:spotify-icon"
                              className="text-lg"
                            />
                          </motion.div>
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1 pr-3">
                      <h3 className="text-[15px] font-bold tracking-wide text-gray-800 dark:text-white truncate">
                        {data.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 font-medium truncate">
                        {data.artist}
                      </p>
                    </div>
                  </div>
                  <div className="h-[34px] flex items-center px-4 bg-black/5 dark:bg-white/5 border-t border-gray-200/50 dark:border-white/10">
                    {data.isPlaying ? (
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                        <motion.div
                          className="flex gap-[2px]"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                        >
                          <div className="w-[3px] h-[8px] bg-emerald-500 rounded-sm"></div>
                          <div className="w-[3px] h-[12px] bg-emerald-500 rounded-sm"></div>
                          <div className="w-[3px] h-[6px] bg-emerald-500 rounded-sm"></div>
                        </motion.div>
                        Listening now
                      </div>
                    ) : (
                      <motion.p
                        initial={{ opacity: 0, y: 2 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-xs text-gray-500 dark:text-gray-400 font-medium"
                      >
                        Last played {timeAgoSafe(data.lastPlayed)}
                      </motion.p>
                    )}
                  </div>
                </a>
              ) : (
                <p className="p-4 text-sm text-gray-500">No music found.</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
