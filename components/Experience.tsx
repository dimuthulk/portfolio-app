"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import experienceData from "@/data/experience.json";
import { Icon } from "@iconify/react";

interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  employmentType: string;
  workMode: string;
  expanded: boolean;
  description: string[];
  technologies: string[];
}

const ExperienceCard = ({ data }: { data: ExperienceItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col mb-6 last:mb-0">
      {/* Company + Logo */}
      <div className="flex items-center gap-3">
        <div
          className="
            relative z-10 flex h-11 w-11 shrink-0 items-center justify-center 
            overflow-hidden rounded-xl 
            border border-white/20 dark:border-white/10 
            bg-white/60 dark:bg-white/10 
            shadow-[0_0_15px_rgba(0,0,0,0.08)]
            backdrop-blur-md
            p-1
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-40 blur-xl"></div>

          <Image
            src={data.logo}
            alt={data.company}
            width={40}
            height={40}
            className="h-full w-full object-cover relative z-10 rounded-lg"
            unoptimized
          />
        </div>

        <div className="flex items-center gap-2.5">
          <h3 className="text-base font-bold text-gray-900 dark:text-white">
            {data.company}
          </h3>

          {/* Premium Green Pulse */}
          {data.endDate.toLowerCase() === "present" && (
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            </span>
          )}
        </div>
      </div>

      {/* Timeline Connector */}
      <div className="relative ml-6 mt-3 pl-7">
        <div className="pointer-events-none absolute -top-6 left-[-2px] h-10 w-6 rounded-bl-xl border-b-2 border-l-2 border-gray-200 dark:border-white/10"></div>

        {/* Clickable Header */}
        <div
          className="group flex cursor-pointer items-center justify-between py-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <h4
              className="
                text-md font-semibold text-gray-800 dark:text-gray-100 
                transition-all duration-300 
                group-hover:text-blue-600 dark:group-hover:text-blue-400 
                group-hover:translate-x-0.5
              "
            >
              {data.role}
            </h4>
            <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-300">
              {data.startDate} - {data.endDate} • {data.workMode} •{" "}
              {data.employmentType}
            </p>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mr-2 rounded-md p-1 group-hover:bg-gray-100 dark:group-hover:bg-white/5"
          >
            <ChevronDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="
                  pb-5 pt-5 px-6 
                  rounded-xl 
                  bg-white/40 dark:bg-white/5 
                  backdrop-blur-md 
                  border border-white/20 dark:border-white/10 
                  shadow-sm 
                  transition-all duration-300
                "
              >
                <ul className="space-y-2 pl-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {data.description.map((desc, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-4 top-[8px] h-1.5 w-1.5 rounded-full bg-black dark:bg-white"></span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {data.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        rounded-lg border border-white/20 
                        bg-white/30 dark:bg-white/5 
                        backdrop-blur-md 
                        px-3 py-1.5 text-xs font-medium 
                        text-gray-800 dark:text-gray-300 
                        shadow-sm 
                        transition-all duration-300 
                        hover:bg-white/50 dark:hover:bg-white/10 
                        hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Experience({ limit }: { limit?: number }) {
  const experiences = experienceData as ExperienceItem[];
  const displayedExperiences = limit
    ? experiences.slice(0, limit)
    : experiences;

  return (
    <section className="w-full py-4">
      {limit ? (
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-reckless">
            Story So Far
          </h2>
          <Link
            href="/experience"
            className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            See All
            <Icon
              icon="famicons:arrow-redo-outline"
              className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      ) : (
        <div className="mb-5 flex items-center justify-between">
          <div className="inline-block border-b border-gray-900 dark:border-white pb-1">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-reckless">
              Experience
            </h2>
          </div>
          <Link
            href="/"
            className="text-lg font-medium text-black dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors tracking-widest"
          >
            .. /
          </Link>
        </div>
      )}

      {/* Premium Card Container */}
      <div
        className="
          group/card relative overflow-hidden rounded-2xl 
          border border-white/20 
          bg-white/10 dark:bg-black/20 
          backdrop-blur-2xl 
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          transition-all duration-500
          p-5 sm:p-6
        "
      >
        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 to-transparent opacity-40 dark:from-white/5"></div>

        {/* Glow Layer */}
        <div
          className="
            pointer-events-none absolute inset-0 
            opacity-0 group-hover/card:opacity-100 
            transition-all duration-700 
            bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-transparent 
            blur-3xl
          "
        />

        {/* Shine Sweep */}
        <motion.div
          animate={{ x: ["-150%", "250%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="
            pointer-events-none absolute inset-y-0 -z-10 
            w-24 rotate-12 
            bg-gradient-to-r from-transparent via-white/20 to-transparent 
            blur-xl dark:via-white/10
          "
        />

        {/* Content */}
        <div className="relative z-10">
          {displayedExperiences.map((exp, index) => (
            <div key={index} className="relative">
              <ExperienceCard data={exp} />

              {/* Horizontal Divider */}
              {index !== displayedExperiences.length - 1 && (
                <div
                  className="
    w-full h-[2px] 
    my-6
    bg-gradient-to-r 
    from-purple-500/0 
    via-purple-500/40 
    to-purple-500/0 
    dark:via-purple-300/40
    blur-[0.5px]
  "
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
