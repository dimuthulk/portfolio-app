"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import LinkedInPreview from "@/components/LinkedInPreview";
import DeveloperJourney from "@/components/DeveloperJourney";
import TechStack from "@/components/TechStack";
import SpotifyHover from "@/components/SpotifyHover";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import ThemeToggle from "../components/ThemeToggle";
import AnimatedTooltip from "../components/AnimatedTooltip";
import GitHubGraph from "../components/GitHubGraph";

export default function Portfolio() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black px-4 sm:px-6 md:px-12 py-0 md:py-0 max-w-5xl mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="mt-4 md:mt-10 w-full">
        {/* Title Section */}
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between mb-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-xl pb-0 font-reckless font-semibold"
          >
            <span className="flex items-center gap-2 underline decoration-1 underline-offset-[8px] decoration-black dark:decoration-white">
              <motion.span
                className="text-sky-500 font-semibold"
                animate={{
                  scale: [1, 1.18, 1],
                  rotate: [0, -4, 4, 0],
                  y: [0, -3, 0],
                  color: ["#0ea5e9", "#38bdf8", "#0ea5e9"],
                  textShadow: [
                    "0px 0px 0px #38bdf8",
                    "0px 0px 12px #38bdf8",
                    "0px 0px 0px #38bdf8",
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
            {/* nayaka */}
          </motion.h2>

          <div className="self-end sm:self-auto">
            <ThemeToggle />
          </div>
        </div>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-7 md:leading-8 mb-0 text-left md:text-justify"
        >
          I'm an{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 my-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/40 dark:border-amber-700/40 dark:text-amber-300 whitespace-nowrap">
            <Icon
              icon="solar:cpu-bolt-bold-duotone"
              className="text-amber-500 text-lg md:text-xl"
            />
            Electronics & Computer Science undergraduate
          </span>{" "}
          and an aspiring{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 my-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:border-blue-700/40 dark:text-blue-300 whitespace-nowrap">
            <Icon
              icon="solar:code-circle-bold-duotone"
              className="text-blue-500 text-lg md:text-xl"
            />
            Full-Stack Developer
          </span>{" "}
          who loves to build products with <strong>purpose</strong>. With over 9
          years of experience as a{" "}
          <strong>
            Graphic Designer & Art Director on{" "}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 my-1 rounded-xl border font-bold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-700/40 dark:text-emerald-300 whitespace-nowrap">
              <Icon icon="ri:fiverr-fill" className="text-[#00b22d] text-xl" />
              Fiverr
            </span>
          </strong>
          , I combine <strong>technical problem-solving</strong> in frontend and
          backend with a <strong>designer's eye for detail</strong>. Great apps
          shouldn't just work well; they need amazing{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 my-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/40 dark:border-purple-700/40 dark:text-purple-300 whitespace-nowrap">
            <Icon
              icon="solar:palette-bold-duotone"
              className="text-purple-500 text-lg md:text-xl"
            />
            UI/UX design
          </span>
          . I build things so people will <strong>remember them</strong>.
        </motion.p>

        {/* Second Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-7 md:leading-8 mb-6 text-left md:text-justify"
        >
          <div>
            When someone gives me a project, they are{" "}
            <strong>trusting me</strong>, and I take that seriously. Whether I'm
            building web apps, exploring{" "}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 my-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-700/40 dark:text-indigo-300 whitespace-nowrap">
              <Icon
                icon="solar:graph-up-bold-duotone"
                className="text-indigo-500 text-lg md:text-xl"
              />
              AI Development
            </span>
            , or writing <LinkedInPreview />, I love creating useful tools.
            Mixing code with art, working with clients, and learning new things
            has tested my patience and my sleep schedule and I've{" "}
            <strong>loved every second of it</strong>.
          </div>
        </motion.div>

        {/* Third Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-7 md:leading-8 mb-6 text-left md:text-justify"
        >
          Beyond work, I spend my time hunting for the latest{" "}
          <strong className="font-bold">tech news</strong> or relaxing while
          listening to music on{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 my-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-700/40 dark:text-red-300 whitespace-nowrap">
            <Icon
              icon="selfhst:youtube"
              className="text-[#FF0000] text-lg md:text-xl"
            />
            YouTube
          </span>{" "}
          and{" "}
          <SpotifyHover>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 my-1 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-700/40 dark:text-emerald-300 whitespace-nowrap">
              <Icon
                icon="selfhst:spotify"
                className="text-[#1DB954] text-lg md:text-xl"
              />
              Spotify
            </span>
          </SpotifyHover>
          .
        </motion.div>

        {/* Social Links Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-3 mt-8"
        >
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-6 text-left md:text-justify">
            Got a project in mind? Let's bring it to life!
          </p>

          <div className="flex flex-wrap gap-2 items-center">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dimuthu-rathnayaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
            >
              <Icon
                icon="fa7-brands:square-linkedin"
                className="text-[#0A66C2] text-xl"
              />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dimuthulk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
            >
              <Icon
                icon="fa7-brands:github-square"
                className="text-black dark:text-white text-xl"
              />
              GitHub
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/@dimuthulk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
            >
              <Icon
                icon="fa7-brands:medium"
                className="text-black dark:text-white text-xl"
              />
              Medium
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1dB-6jeOpj2RbDQI08O5kbXrOzwiCAoJ-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
            >
              <Icon
                icon="mdi:resume"
                className="text-black dark:text-white text-xl"
              />
              Resume
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/94768050633"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-sm md:text-base align-middle transition-all duration-300 hover:scale-105 bg-white border-gray-200 text-gray-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-gray-300 shadow-sm"
            >
              <Icon
                icon="fa7-brands:square-whatsapp"
                className="text-[#25D366] text-xl"
              />
              WhatsApp
            </a>
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
      <section className="mt-20 md:mt-28 w-full">
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
      </section>

      {/* Projects Gallery */}
      <section className="mt-24 md:mt-32 mb-12 w-full">
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
      </section>
    </main>
  );
}
