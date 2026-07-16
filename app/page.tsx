"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import LinkedInPreview from "@/components/LinkedInPreview";
import DeveloperJourney from "@/components/DeveloperJourney";
import TechStack from "@/components/TechStack";
import SpotifyHover from "@/components/SpotifyHover";
import ThemeToggle from "../components/ThemeToggle";
import GitHubGraph from "../components/GitHubGraph";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Portfolio() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black px-4 sm:px-6 md:px-12 py-0 md:py-0 max-w-5xl mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="mt-4 md:mt-10 w-full">
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
              or{" "}
              <SpotifyHover>
                {/* <span className="inline-flex items-center gap-1 px-2 py-0.5 my-0 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-700/40 dark:text-emerald-300 whitespace-nowrap">
                  <Icon
                    icon="selfhst:spotify"
                    className="text-[#1DB954] text-lg md:text-xl"
                  />
                  Spotify
                </span> */}
              </SpotifyHover>{" "}
              whether I'm <strong>coding</strong>, <strong>designing</strong>,
              or just <strong>taking a break</strong>.
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

                {/* Download Resume (Highlighted) */}
                <a
                  href="https://drive.google.com/file/d/1dB-6jeOpj2RbDQI08O5kbXrOzwiCAoJ-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
                >
                  <Icon
                    icon="tabler:file-cv-filled"
                    className="text-black dark:text-white text-lg"
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
                    className="text-black dark:text-white text-lg"
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

      {/* Story So Far (Experience Timeline) */}
      {/* <section className="mt-20 md:mt-28 w-full">
        <h2 className="text-2xl font-semibold mb-10 text-gray-950 dark:text-white">
          Story So Far
        </h2>
        <div className="space-y-10 border-l border-gray-300 dark:border-zinc-800 ml-2 md:ml-3 pl-6 md:pl-8 relative">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-gray-950 dark:bg-white rounded-full -left-[32px] md:-left-[38px] top-2 border-2 border-white dark:border-black"></div>
            <h3 className="text-lg md:text-xl font-medium text-gray-950 dark:text-white">
              Art Director & Graphic Designer
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-3">
              Freelance (9+ Years) • Remote
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed text-justify">
              Delivering pixel-perfect, high-quality designs for domestic and
              international clients over a nine-year period. Specializing in
              print and digital platforms, including flyers, brochures, social
              media posts, and logo creation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-3 h-3 bg-gray-400 dark:bg-zinc-600 rounded-full -left-[32px] md:-left-[38px] top-2"></div>
            <h3 className="text-lg md:text-xl font-medium text-gray-950 dark:text-white">
              Frontend Developer / Software Developer
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-3">
              Freelance • Remote
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed text-justify">
              Architecting and developing highly responsive web applications
              utilizing Next.js, React, and SCSS. Actively contributing to the
              developer community through the curation of the "DEV TIPS" series
              on LinkedIn.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-3 h-3 bg-gray-400 dark:bg-zinc-600 rounded-full -left-[32px] md:-left-[38px] top-2"></div>
            <h3 className="text-lg md:text-xl font-medium text-gray-950 dark:text-white">
              Lead Graphic Designer
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-3">
              Sri Lanka v New Zealand U85kg Rugby Tour 2026 • Colombo
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed text-justify">
              Spearheading the end-to-end media and marketing strategy for an
              international sporting event. Designed official ticket sales
              promotional materials, flyers, and digital content.
            </p>
          </div>
        </div>
      </section> */}

      <Experience limit={3} />

      {/* Projects Gallery */}
      {/* <section className="mt-24 md:mt-32 mb-12 w-full">
        <h2 className="text-2xl font-semibold mb-8 text-gray-950 dark:text-white">
          Curious? Check out my projects.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 md:p-6 bg-white dark:bg-zinc-950/40 transition hover:bg-gray-50 dark:hover:bg-zinc-900 cursor-pointer flex flex-col h-full shadow-sm">
            <h3 className="text-xl font-medium mb-2 text-black dark:text-white">
              Shipped UI
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 text-justify flex-grow">
              Find your favourite components in seconds.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="px-4 py-1.5 bg-gray-900 text-white dark:bg-white dark:text-black text-xs md:text-sm rounded-full font-medium shadow-sm transition-colors"
              >
                Live
              </a>
            </div>
            <div className="w-full h-40 md:h-48 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden relative flex items-center justify-center mt-auto">
              <p className="text-gray-400 dark:text-gray-600 text-xs">
                Video / Image Thumbnail
              </p>
            </div>
          </div>

          <div className="group border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 md:p-6 bg-white dark:bg-zinc-950/40 transition hover:bg-gray-50 dark:hover:bg-zinc-900 cursor-pointer flex flex-col h-full shadow-sm">
            <h3 className="text-xl font-medium mb-2 text-black dark:text-white">
              DevQuest
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 text-justify flex-grow">
              Make open-source contributions, discover bounty-paying issues.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="px-4 py-1.5 bg-gray-900 text-white dark:bg-white dark:text-black text-xs md:text-sm rounded-full font-medium shadow-sm transition-colors"
              >
                Live
              </a>
              <a
                href="#"
                className="px-4 py-1.5 border border-gray-300 text-gray-700 dark:border-zinc-700 dark:text-zinc-300 text-xs md:text-sm rounded-full hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Github
              </a>
            </div>
            <div className="w-full h-40 md:h-48 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden relative flex items-center justify-center mt-auto">
              <p className="text-gray-400 dark:text-gray-600 text-xs">
                Video / Image Thumbnail
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Gallery */}
      <section className="mt-2 md:mt-5 mb-12 w-full">
        <Projects limit={2} />
      </section>
    </main>
  );
}
