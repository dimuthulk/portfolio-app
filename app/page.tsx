"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Icon } from "@iconify/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import ThemeToggle from "../components/ThemeToggle";
import AnimatedTooltip from "../components/AnimatedTooltip";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black px-5 md:px-12 py-0 md:py-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="mt-20 w-full">
        {/* Title Section */}
        <div className="flex items-center justify-between mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-4xl font-semibold tracking-tight mb-2"
          >
            <span className="underline decoration-2 underline-offset-[15px] decoration-gray-300">
              Hi, I'm Dimuthu Rathnayaka
            </span>
          </motion.h2>

          <ThemeToggle />
        </div>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 text-lg leading-8 mb-6 text-justify"
        >
          I'm an{" "}
          <span className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105 bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/40 dark:border-amber-700/40 dark:text-amber-300">
            <Icon
              icon="solar:cpu-bolt-bold-duotone"
              className="text-amber-500 text-xl"
            />
            Electronics & Computer Science undergraduate
          </span>{" "}
          and an aspiring{" "}
          <span className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105 bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:border-blue-700/40 dark:text-blue-300">
            <Icon
              icon="solar:code-circle-bold-duotone"
              className="text-blue-500 text-xl"
            />
            Full-Stack Developer
          </span>{" "}
          who loves to build products with <strong>purpose</strong>. With over 9
          years of experience as a{" "}
          <strong>
            Graphic Designer & Art Director on{" "}
            <span className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-bold text-base align-middle transition-all duration-300 hover:scale-105 bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-700/40 dark:text-emerald-300">
              <Icon icon="ri:fiverr-fill" className="text-[#00b22d] text-2xl" />
              Fiverr
            </span>
          </strong>
          , I combine <strong>technical problem-solving</strong> in frontend and
          backend with a <strong>designer's eye for detail</strong>. Great apps
          shouldn't just work well; they need amazing{" "}
          <span className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105 bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/40 dark:border-purple-700/40 dark:text-purple-300">
            <Icon
              icon="solar:palette-bold-duotone"
              className="text-purple-500 text-xl"
            />
            UI/UX design
          </span>
          . I build things so people will <strong>remember them</strong>.
        </motion.p>

        {/* Second Paragraph with Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 text-lg leading-8 mb-6 text-justify"
        >
          <div className="relative inline-block group w-full">
            <p>
              When someone gives me a project, they are{" "}
              <strong>trusting me</strong>, and I take that seriously. Whether
              I'm building web apps, exploring{" "}
              <span className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105 bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-700/40 dark:text-indigo-300">
                <Icon
                  icon="solar:graph-up-bold-duotone"
                  className="text-indigo-500 text-xl"
                />
                AI Development
              </span>
              , or writing{" "}
              <Link href="/dev-tips" className="inline-block">
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                  className="font-bold cursor-pointer inline-block bg-[linear-gradient(90deg,#06b6d4,#a855f7,#06b6d4)] bg-[length:200%_auto] bg-clip-text text-transparent underline decoration-sky-400 decoration-wavy underline-offset-4"
                >
                  DEV TIPS articles on LinkedIn
                </motion.span>
              </Link>
              , I love creating useful tools. Mixing code with art, working with
              clients, and learning new things has tested my patience and my
              sleep schedule and I've <strong>loved every second of it</strong>.
            </p>

            {/* Tooltip OUTSIDE <p> but still inside group wrapper */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-50 flex justify-center">
              {/* Tooltip Cards */}
              <div className="relative w-full h-40 flex items-end justify-center pb-2">
                {/* Card 1 */}
                <div className="absolute w-24 h-24 rounded-lg shadow-xl border border-gray-700 transform -rotate-12 -translate-x-14 overflow-hidden bg-gray-900 z-10 transition-transform duration-300 group-hover:-rotate-[15deg]">
                  <img
                    src="/images/tip-02.jpg"
                    className="w-full h-full object-cover"
                    alt="Semantic Versioning"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-1">
                    <span className="text-[10px] text-gray-300 text-center font-bold font-mono">
                      Semantic
                      <br />
                      Versioning
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="absolute w-24 h-24 rounded-lg shadow-xl border border-gray-700 transform rotate-12 translate-x-14 overflow-hidden bg-gray-900 z-10 transition-transform duration-300 group-hover:rotate-[15deg]">
                  <img
                    src="/images/tip-01.jpg"
                    className="w-full h-full object-cover"
                    alt="GitHub Licenses"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-1">
                    <span className="text-[10px] text-gray-300 text-center font-bold font-mono">
                      GitHub
                      <br />
                      Licenses
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="absolute w-32 h-32 rounded-lg shadow-2xl border border-sky-400/80 transform transition-transform duration-300 group-hover:scale-110 overflow-hidden bg-black z-20">
                  <img
                    src="/images/tip-03.jpg"
                    className="w-full h-full object-cover"
                    alt="Conventional Commits"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-2 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="bg-sky-400 text-white font-bold text-[8px] px-2 py-0.5 rounded-full mb-1">
                      DEV TIP #01
                    </div>
                    <span className="text-[11px] text-white text-center font-bold leading-tight drop-shadow-md">
                      Conventional
                      <br />
                      Commits
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-300 text-lg leading-8 mb-6 text-justify"
        >
          Beyond work, I spend my time hunting for the latest{" "}
          <strong className="font-bold">tech news</strong> or relaxing while
          listening to music on{" "}
          <span className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105 bg-red-50 border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-700/40 dark:text-red-300">
            <Icon icon="selfhst:youtube" className="text-[#FF0000] text-xl" />
            YouTube
          </span>{" "}
          and{" "}
          <span className="inline-flex items-center gap-1 px-2 py-1 mx-1 rounded-xl border font-semibold text-base align-middle transition-all duration-300 hover:scale-105 bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-700/40 dark:text-emerald-300">
            <Icon icon="selfhst:spotify" className="text-[#1DB954] text-xl" />
            Spotify
          </span>
          .
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 mt-8"
        >
          <a
            href="#"
            className="p-2 border border-gray-300 dark:border-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="p-2 border border-gray-300 dark:border-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            className="p-2 border border-gray-300 dark:border-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black dark:bg-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="mt-32 w-full">
        <h2 className="text-2xl font-semibold mb-6">Tools I use?</h2>
        <div className="flex flex-wrap gap-4">
          <AnimatedTooltip
            icon={SiNextdotjs}
            name="Next.js"
            colorClass="text-white"
          />
          <AnimatedTooltip
            icon={SiReact}
            name="React"
            colorClass="text-blue-400"
          />
          <AnimatedTooltip
            icon={SiTailwindcss}
            name="Tailwind CSS"
            colorClass="text-cyan-400"
          />
          <AnimatedTooltip
            icon={SiPostgresql}
            name="PostgreSQL"
            colorClass="text-blue-500"
          />
          <AnimatedTooltip
            icon={SiMongodb}
            name="MongoDB"
            colorClass="text-green-500"
          />
        </div>
      </section>

      {/* Story So Far (Experience Timeline) */}
      <section className="mt-24 w-full">
        <h2 className="text-2xl font-semibold mb-10">Story So Far</h2>
        <div className="space-y-12 border-l border-gray-800 ml-3 pl-8 relative">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-white rounded-full -left-[38px] top-2"></div>
            <h3 className="text-xl font-medium">
              Art Director & Graphic Designer
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Freelance (9+ Years) • Remote
            </p>
            <p className="text-gray-400 mb-3 text-justify">
              Delivering pixel-perfect, high-quality designs for domestic and
              international clients over a nine-year period. Specializing in
              print and digital platforms, including flyers, brochures, social
              media posts, and logo creation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[38px] top-2"></div>
            <h3 className="text-xl font-medium">
              Frontend Developer / Software Developer
            </h3>
            <p className="text-gray-500 text-sm mb-4">Freelance • Remote</p>
            <p className="text-gray-400 mb-3 text-justify">
              Architecting and developing highly responsive web applications
              utilizing Next.js, React, and SCSS. Actively contributing to the
              developer community through the curation of the "DEV TIPS" series
              on LinkedIn.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[38px] top-2"></div>
            <h3 className="text-xl font-medium">Lead Graphic Designer</h3>
            <p className="text-gray-500 text-sm mb-4">
              Sri Lanka v New Zealand U85kg Rugby Tour 2026 • Colombo
            </p>
            <p className="text-gray-400 mb-3 text-justify">
              Spearheading the end-to-end media and marketing strategy for an
              international sporting event. Designed official ticket sales
              promotional materials, flyers, and digital content.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="mt-32 w-full">
        <h2 className="text-2xl font-semibold mb-10">
          Curious? Check out my projects.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group border border-gray-300 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-black transition hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer flex flex-col h-full">
            <h3 className="text-xl font-medium mb-2 text-black dark:text-white">
              Shipped UI
            </h3>
            <p className="text-gray-400 text-sm mb-6 text-justify flex-grow">
              Find your favourite components in seconds.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="px-4 py-1.5 bg-white text-black text-sm rounded-full font-medium"
              >
                Live
              </a>
            </div>
            <div className="w-full h-48 bg-gray-800 rounded-xl overflow-hidden relative flex items-center justify-center mt-auto">
              <p className="text-gray-500 text-xs">Video / Image Thumbnail</p>
            </div>
          </div>

          <div className="group border border-gray-300 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-black transition hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer flex flex-col h-full">
            <h3 className="text-xl font-medium mb-2 text-black dark:text-white">
              DevQuest
            </h3>
            <p className="text-gray-400 text-sm mb-6 text-justify flex-grow">
              Make open-source contributions, discover bounty-paying issues.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="px-4 py-1.5 bg-white text-black text-sm rounded-full font-medium"
              >
                Live
              </a>
              <a
                href="#"
                className="px-4 py-1.5 border border-gray-700 text-white text-sm rounded-full hover:bg-gray-800"
              >
                Github
              </a>
            </div>
            <div className="w-full h-48 bg-gray-800 rounded-xl overflow-hidden relative flex items-center justify-center mt-auto">
              <p className="text-gray-500 text-xs">Video / Image Thumbnail</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
