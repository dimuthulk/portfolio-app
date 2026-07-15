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

export default function SpotifyHover({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const { data, isLoading } = useSWR(
    isHovered ? "/api/spotify" : null,
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 60000,
    },
  );

  // 🔥 Auto-hide after 10 seconds (Display time එක වැඩි කළා)
  useEffect(() => {
    if (isHovered) {
      const t = setTimeout(() => setIsHovered(false), 8000); // 5000 -> 10000
      return () => clearTimeout(t);
    }
  }, [isHovered]);

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // onTouchStart සහ onTouchEnd අයින් කරලා onClick දැම්මා (Mobile fix)
      onClick={() => setIsHovered(!isHovered)}
    >
      <span className="font-semibold text-emerald-600 dark:text-emerald-400 underline decoration-dashed underline-offset-4">
        {children}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(6px)" }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            // 🔥 Mobile වලදී fixed bottom widget එකක් වෙනවා, Desktop (sm) වලදී absolute tooltip එකක් වෙනවා.
            className="fixed bottom-8 left-1/2 -translate-x-1/2 sm:absolute sm:bottom-full sm:mb-3 z-[100] w-[90vw] sm:w-[260px]"
          >
            {/* 🔽 Tooltip Arrow (Mobile වලදී මේක hide කරලා තියෙන්නේ 'hidden sm:block' දීලා) */}
            <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-3 h-3 bg-white dark:bg-zinc-900 rotate-45 border-b border-r border-zinc-300 dark:border-zinc-700"></div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10 overflow-hidden rounded-xl border border-zinc-700/40 dark:bg-zinc-950/90 bg-white/95 backdrop-blur-xl shadow-2xl"
            >
              {isLoading && !data ? (
                <div className="flex items-center gap-2 p-3 text-sm text-zinc-500">
                  <Icon
                    icon="svg-spinners:ring-resize"
                    className="text-emerald-500"
                  />
                  Updating...
                </div>
              ) : data && !data.error ? (
                <a
                  href={data.songUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {/* TOP */}
                  <div className="relative flex items-center dark:bg-zinc-700 h-[80px] pl-3 gap-2">
                    {/* Album Cover */}
                    <div
                      className={`relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-xl border-[1px] shadow-xl ${
                        data.isPlaying
                          ? "border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                          : "border-zinc-950 dark:border-zinc-950"
                      }`}
                    >
                      {/* Spotify Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-emerald-500/25 blur-2xl"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Gradient Ring */}
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
                        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                          <motion.div
                            animate={{ scale: [1, 1.12, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                            className="h-4 w-4 rounded-full bg-black flex items-center justify-center"
                          >
                            <Icon
                              icon="logos:spotify-icon"
                              className="text-xl"
                            />
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {/* Song Details */}
                    <div className="min-w-0 flex-1 pr-2">
                      <h3 className="text-base font-semibold tracking-wide text-zinc-900 dark:text-white truncate">
                        {data.title}
                      </h3>

                      <p className="mt-0 text-xs text-zinc-500 dark:text-zinc-400 truncate">
                        {data.artist}
                      </p>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="h-[30px] flex items-center px-4 bg-zinc-200 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                    {data.isPlaying ? (
                      <div className="flex items-center gap-2 text-emerald-500 font-semibold text-xs">
                        {/* Waveform Animation */}
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
                        className="text-xs text-zinc-500 dark:text-zinc-400"
                      >
                        Last played {timeAgoSafe(data.lastPlayed)}
                      </motion.p>
                    )}
                  </div>
                </a>
              ) : (
                <p className="p-3 text-sm text-zinc-500">No music found.</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
