"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Code2,
  BrainCircuit,
  Rocket,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";

const accents = {
  purple: {
    bg: "from-purple-300/20 to-purple-500/10 dark:from-purple-900/20 dark:to-purple-500/10",
    skill:
      "bg-purple-50/80 border-purple-200/60 text-purple-800 dark:bg-purple-950/30 dark:border-purple-800/40 dark:text-purple-300",
    iconBg:
      "bg-purple-100/70 dark:bg-purple-950/40 border-purple-200/50 dark:border-purple-800/30",
  },
  blue: {
    bg: "from-blue-300/20 to-blue-500/10 dark:from-blue-900/20 dark:to-blue-500/10",
    skill:
      "bg-blue-50/80 border-blue-200/60 text-blue-800 dark:bg-blue-950/30 dark:border-blue-800/40 dark:text-blue-300",
    iconBg:
      "bg-blue-100/70 dark:bg-blue-950/40 border-blue-200/50 dark:border-blue-800/30",
  },
  emerald: {
    bg: "from-emerald-300/20 to-emerald-500/10 dark:from-emerald-900/20 dark:to-emerald-500/10",
    skill:
      "bg-emerald-50/80 border-emerald-200/60 text-emerald-800 dark:bg-emerald-950/30 dark:border-emerald-800/40 dark:text-emerald-300",
    iconBg:
      "bg-emerald-100/70 dark:bg-emerald-950/40 border-emerald-200/50 dark:border-emerald-800/30",
  },
  indigo: {
    bg: "from-indigo-300/20 to-indigo-500/10 dark:from-indigo-900/20 dark:to-indigo-500/10",
    skill:
      "bg-indigo-50/80 border-indigo-200/60 text-indigo-800 dark:bg-indigo-950/30 dark:border-indigo-800/40 dark:text-indigo-300",
    iconBg:
      "bg-indigo-100/70 dark:bg-indigo-950/40 border-indigo-200/50 dark:border-indigo-800/30",
  },
  amber: {
    bg: "from-amber-300/20 to-amber-500/10 dark:from-amber-900/25 dark:to-amber-500/10",
    skill:
      "bg-amber-50/90 border-amber-200/70 text-amber-900 dark:bg-amber-950/30 dark:border-amber-800/40 dark:text-amber-300",
    iconBg:
      "bg-amber-100/80 dark:bg-amber-950/40 border-amber-200/50 dark:border-amber-800/30",
  },
};

const journey = [
  {
    year: "2017",
    title: "Graphic Design Journey",
    icon: Palette,
    description:
      "Started creating visual experiences with Photoshop, Illustrator and creative design.",
    skills: ["Photoshop", "Illustrator", "Branding", "Art Direction"],
    accentKey: "purple",
  },
  {
    year: "2021",
    title: "Programming Started",
    icon: GraduationCap,
    description:
      "Started my Electronics & Computer Science journey and explored programming.",
    skills: ["C", "Java", "Python", "Microcontrollers"],
    accentKey: "blue",
  },
  {
    year: "2023",
    title: "Full Stack Development",
    icon: Code2,
    description:
      "Started building modern web applications using frontend and backend technologies.",
    skills: ["React", "Next.js", "Node.js", "MongoDB"],
    accentKey: "emerald",
  },
  {
    year: "2024",
    title: "AI Development & Research",
    icon: BrainCircuit,
    description:
      "Exploring Artificial Intelligence and Natural Language Processing.",
    skills: ["Machine Learning", "NLP", "Python", "Transformers"],
    accentKey: "indigo",
  },
  {
    year: "2026",
    title: "Building The Future",
    icon: Rocket,
    description:
      "Combining design thinking and engineering to create meaningful products.",
    skills: ["Full Stack", "UI/UX", "Cloud", "Open Source"],
    accentKey: "amber",
  },
];

export default function DeveloperJourney() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);

  const prefersReduced = useMemo(() => {
    return (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const intervalMs = prefersReduced ? 0 : 2000;

  const nextSlide = useCallback(() => {
    setCurrentIndex((p) => (p === journey.length - 1 ? 0 : p + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((p) => (p === 0 ? journey.length - 1 : p - 1));
  }, []);

  const setSlide = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying || prefersReduced || intervalMs === 0) return;
    const t = setInterval(() => nextSlide(), intervalMs);
    return () => clearInterval(t);
  }, [isPlaying, nextSlide, intervalMs, prefersReduced]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleEnter = () => setIsPlaying(false);
    const handleLeave = () => setIsPlaying(true);

    el.addEventListener("pointerenter", handleEnter);
    el.addEventListener("pointerleave", handleLeave);
    el.addEventListener("focusin", handleEnter);
    el.addEventListener("focusout", handleLeave);

    return () => {
      el.removeEventListener("pointerenter", handleEnter);
      el.removeEventListener("pointerleave", handleLeave);
      el.removeEventListener("focusin", handleEnter);
      el.removeEventListener("focusout", handleLeave);
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      setIsPlaying((p) => !p);
    }
  };

  const navButtonClasses =
    "h-9 w-9 rounded-xl flex items-center justify-center border transition duration-300 hover:scale-105 focus:outline-none";
  const lightNavClasses =
    "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-black shadow-sm";
  const darkNavClasses =
    "dark:bg-zinc-900/50 dark:border-white/[0.08] dark:text-gray-300 dark:hover:bg-zinc-800 dark:hover:text-white";

  return (
    <section
      ref={containerRef}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Developer journey carousel"
      className="mt-5 w-full selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 rounded-2xl p-2"
    >
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Developer Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-7 text-justify">
            My evolution from a designer to a full-stack developer, combining
            creativity with technology.
          </p>
        </div>

        <div className="flex gap-2 items-center flex-shrink-0 self-end sm:self-auto">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className={`${navButtonClasses} ${lightNavClasses} ${darkNavClasses}`}
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={() => setIsPlaying((p) => !p)}
            aria-pressed={!isPlaying}
            aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            className={`${navButtonClasses} ${lightNavClasses} ${darkNavClasses}`}
          >
            {isPlaying ? (
              <Pause size={14} className="fill-current" />
            ) : (
              <Play size={14} className="fill-current" />
            )}
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className={`${navButtonClasses} ${lightNavClasses} ${darkNavClasses}`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Carousel area - Height is now controlled dynamic via absolute container structure safely */}
      <div className="relative w-full overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {journey.map((item, index) => {
            if (index !== currentIndex) return null;
            const Icon = item.icon;
            const accent = accents[item.accentKey] || accents.blue;

            return (
              <motion.div
                key={item.year}
                initial={
                  prefersReduced
                    ? { opacity: 0 }
                    : { opacity: 0, x: 40, scale: 0.99 }
                }
                animate={
                  prefersReduced
                    ? { opacity: 1 }
                    : { opacity: 1, x: 0, scale: 1 }
                }
                exit={
                  prefersReduced
                    ? { opacity: 0 }
                    : { opacity: 0, x: -40, scale: 0.99 }
                }
                transition={{
                  duration: prefersReduced ? 0.05 : 0.4,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="w-full"
              >
                <motion.div
                  whileHover={prefersReduced ? {} : { y: -2 }}
                  className={`w-full rounded-2xl p-5 md:p-6 border border-gray-200/80 
                    dark:border-white/[0.06] bg-gradient-to-br ${accent.bg} 
                    dark:bg-zinc-950/20 backdrop-blur-md shadow-md dark:shadow-xl
                    flex flex-col justify-between transition-all duration-300`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`text-gray-800 dark:text-gray-200 p-2 rounded-xl border ${accent.iconBg}`}
                        >
                          <Icon size={20} strokeWidth={2} />
                        </div>
                        <h3 className="text-lg font-medium text-gray-950 dark:text-white">
                          {item.title}
                        </h3>
                      </div>

                      <span className="inline-flex items-center px-3 py-1 rounded-lg border text-xs font-medium bg-white/80 border-gray-200 text-gray-800 dark:bg-white/[0.04] dark:border-white/[0.06] dark:text-gray-200 shadow-sm">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed text-justify mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200/50 dark:border-white/[0.05]">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-0.5 rounded-md border text-xs font-medium shadow-sm transition-colors ${accent.skill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Progress Dots / Slider Indicators */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {journey.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? "true" : "false"}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:ring-offset-1 dark:focus:ring-offset-zinc-950 ${
              currentIndex === index
                ? "w-7 bg-gray-900 dark:bg-emerald-400"
                : "w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
