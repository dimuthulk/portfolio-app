"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import AnimatedTooltip from "../components/AnimatedTooltip";

export default function Portfolio() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black px-6 md:px-12 py-12 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="mt-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Hi, I'm Dimuthu Rathnayaka
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg leading-relaxed mb-6 text-justify"
        >
          I'm a software engineer who loves to build products with purpose,
          merging technical problem-solving with a designer's eye for detail
          that don't just work, but leave an impression so I stay a little
          longer, ask a little more, and build like someone's going to remember
          it.
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
            className="p-2 border border-gray-800 rounded-full hover:bg-gray-800 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="p-2 border border-gray-800 rounded-full hover:bg-gray-800 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            className="p-2 border border-gray-800 rounded-full hover:bg-gray-800 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="mt-32 w-full">
        <h2 className="text-2xl font-semibold mb-6">Tools I use?</h2>
        <div className="flex flex-wrap gap-4">
          <AnimatedTooltip icon={SiNextdotjs} name="Next.js" />
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
          <div className="group border border-gray-800 rounded-2xl p-6 hover:bg-gray-900 transition cursor-pointer flex flex-col h-full">
            <h3 className="text-xl font-medium mb-2">Shipped UI</h3>
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

          <div className="group border border-gray-800 rounded-2xl p-6 hover:bg-gray-900 transition cursor-pointer flex flex-col h-full">
            <h3 className="text-xl font-medium mb-2">DevQuest</h3>
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
