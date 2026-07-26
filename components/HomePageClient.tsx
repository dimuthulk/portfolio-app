"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import LinkedInPreview from "@/components/LinkedInPreview";
import ThemeToggle from "@/components/ThemeToggle";
import dynamic from "next/dynamic";

// --- Dynamic Imports (Lazy Loading) ---

// Animations සහ Browser APIs ඕනේ කරන ඒවාට ssr: false දානවා
const SpotifyHover = dynamic(() => import("@/components/SpotifyHover"), {
  ssr: false,
});
const GitHubGraph = dynamic(() => import("@/components/GitHubGraph"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse h-40 bg-gray-200 dark:bg-gray-800 rounded-xl w-full"></div>
  ),
});

// පල්ලෙහා තියෙන Sections ටික Scroll කරද්දි Load වෙන්න දානවා (ssr: false ඕනේ නෑ)
const DeveloperJourney = dynamic(() => import("@/components/DeveloperJourney"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Certificates = dynamic(() => import("@/components/Certificates"));

export default function HomePageClient() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black px-4 sm:px-6 md:px-12 py-0 md:py-0 max-w-5xl mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <h1 className="sr-only">
        Dimuthu Rathnayaka - Art Director & Full-Stack Developer
      </h1>
      <section className="mt-4 md:mt-10 w-full">
        {/* <h1 className="sr-only md:not-sr-only">
          Dimuthu Rathnayaka — Full-Stack Developer & AI Engineer
        </h1> */}
        {/* Title Section */}
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl pb-0 font-reckless font-semibold text-gray-900 dark:text-white"
          >
            <span className="flex items-center gap-2 underline decoration-1 underline-offset-[8px] decoration-black dark:decoration-gray-400">
              <motion.span
                className="text-sky-500 font-semibold"
                animate={{
                  scale: [1, 1.18, 1],
                  rotate: [0, -4, 4, 0],
                  y: [0, -3, 0],
                  color: ["#0ea5e9", "#38bdf8", "#0ea5e9"],
                  textShadow: [
                    "0px 0px 0px rgba(56,189,248,0)",
                    "0px 0px 12px rgba(56,189,248,0.6)",
                    "0px 0px 0px rgba(56,189,248,0)",
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Hi,
              </motion.span>
              I'm Dimuthu Rathnayaka
            </span>
          </motion.h2>

          <div className="self-end sm:self-auto mb-4 sm:mb-0">
            <ThemeToggle />
          </div>
        </div>

        {/* ABOUT ME PREMIUM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative p-4 md:p-6 rounded-3xl 
          leading-relaxed text-gray-700 dark:text-gray-300
        "
        >
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl bg-white/60 dark:bg-zinc-800/40 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-[0_12px_40px_rgb(0,0,0,0.12)]">
            {/* Glow Layer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-transparent blur-2xl" />

            {/* Shine Sweep */}
            <motion.div
              animate={{ x: ["-150%", "250%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10 blur-xl rotate-12 pointer-events-none"
            />
          </div>

          {/* MAIN TEXT CONTENT */}
          <div className="relative z-10 text-base md:text-lg space-y-6">
            {/* First Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="leading-7 md:leading-8 text-left md:text-justify m-0"
            >
              I'm an{" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 my-0 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/40 dark:border-amber-700/40 dark:text-amber-300 whitespace-nowrap">
                <Icon
                  icon="mdi:university"
                  className="text-amber-500 text-lg md:text-xl"
                />
                Computer Science undergraduate
              </span>{" "}
              passionate about building modern software with{" "}
              <strong>clean code</strong>, <strong>thoughtful design</strong>,
              and <strong>real-world impact</strong>. My interests focus on{" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 my-0 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:border-blue-700/40 dark:text-blue-300 whitespace-nowrap">
                <Icon
                  icon="jam:code"
                  className="text-blue-500 text-lg md:text-xl"
                />
                Software Engineering
              </span>
              ,{" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 my-0 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/40 dark:border-purple-700/40 dark:text-purple-300 whitespace-nowrap">
                <Icon
                  icon="unjs:theme-colors"
                  className="text-purple-500 text-md md:text-lg"
                />
                UI/UX Engineering
              </span>
              , and{" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 my-0 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-700/40 dark:text-emerald-300 whitespace-nowrap">
                <Icon
                  icon="mingcute:ai-fill"
                  className="text-emerald-500 text-lg md:text-xl"
                />
                AI/ML
              </span>
              , where I enjoy turning ideas into{" "}
              <strong>intuitive digital experiences</strong>.
            </motion.p>

            {/* Second Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="leading-7 md:leading-8 text-left md:text-justify mt-4"
            >
              <div>
                From{" "}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 my-0 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-pink-50 border-pink-200 text-pink-700 dark:bg-pink-950/40 dark:border-pink-700/40 dark:text-pink-300 whitespace-nowrap">
                  <Icon
                    icon="ix:theme-filled"
                    className="text-pink-500 text-lg md:text-xl"
                  />
                  designing interfaces
                </span>{" "}
                to developing{" "}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 my-0 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-700/40 dark:text-indigo-300 whitespace-nowrap">
                  <Icon
                    icon="eos-icons:application"
                    className="text-indigo-500 text-lg md:text-xl"
                  />
                  full-stack applications
                </span>
                , I love creating products that are both{" "}
                <strong>functional</strong> and{" "}
                <strong>enjoyable to use</strong>. I also share what I learn by
                writing <LinkedInPreview />, helping other developers grow along
                the way.
              </div>
            </motion.div>

            {/* Third Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="leading-7 md:leading-8 text-left md:text-justify mt-4"
            >
              Beyond work, I usually have music playing on{" "}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 my-0 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-700/40 dark:text-red-300 whitespace-nowrap">
                <Icon
                  icon="selfhst:youtube"
                  className="text-[#FF0000] text-lg md:text-xl"
                />
                YouTube
              </span>{" "}
              or <SpotifyHover></SpotifyHover> whether I'm{" "}
              <strong>coding</strong>, <strong>designing</strong>, or just{" "}
              <strong>taking a break</strong>.
            </motion.div>

            {/* Social Links Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-2 pt-4 border-t border-gray-200/50 dark:border-white/10"
            >
              <p className="leading-6 text-left md:text-justify font-medium">
                Interested in working together? Let's connect.
              </p>

              <div className="flex flex-wrap gap-1 items-center">
                {/* GitHub */}
                <a
                  href="https://github.com/dimuthulk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
                >
                  <Icon
                    icon="mdi:github"
                    className="text-black dark:text-white text-lg"
                  />
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/dimuthu-rathnayaka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
                >
                  <Icon
                    icon="selfhst:linkedin"
                    className="text-[#0A66C2] text-lg"
                  />
                  LinkedIn
                </a>

                {/* Resume*/}
                <a
                  href="/Dimuthu_Rathnayaka - CV.pdf"
                  download="Dimuthu_Rathnayaka_CV_SoftwareEngineer.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
                >
                  <Icon
                    icon="mdi:resume"
                    className="text-black dark:text-white text-xl"
                  />
                  Resume
                </a>

                {/* Medium */}
                <a
                  href="https://medium.com/@dimuthulk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
                >
                  <Icon
                    icon="simple-icons:medium"
                    className="text-black dark:text-white text-md"
                  />
                  Medium
                </a>

                {/* Email */}
                <a
                  href="mailto:info.dimuthulk@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
                >
                  <Icon
                    icon="selfhst:gmail"
                    className="text-[#EA4335] text-lg"
                  />
                  Email
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/94768050633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
                >
                  <Icon
                    icon="logos:whatsapp-icon"
                    className="text-[#25D366] text-lg"
                  />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* GitHub Graph */}
      <section className="mt-3 md:mt-3 w-full">
        {/* <h2 className="text-2xl font-semibold mb-6 text-gray-950 dark:text-white">
          GitHub Contributions
        </h2> */}
        <GitHubGraph />
      </section>

      {/* <section className="mt-0 md:mt-0 w-full">
        <DeveloperJourney />
      </section> */}

      {/* Tech Stack Section */}
      <section className="mt-4 md:mt-6 w-full">
        <TechStack />
      </section>

      <Experience limit={3} />

      <section className="mt-5 md:mt-5 w-full">
        <Certificates limit={3} />
      </section>

      {/* Projects Gallery */}
      <section className="mt-10 md:mt-8 mb-12 w-full">
        <Projects limit={2} />
      </section>
    </main>
  );
}
