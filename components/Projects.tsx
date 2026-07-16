"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import projectsData from "@/data/projects.json";

interface TechStack {
  name: string;
  icon: string;
}

interface ProjectLink {
  platform: string;
  url: string;
  icon: string;
}

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  status: string;
  thumbnail: {
    type: string;
    url: string;
  };
  techStack: TechStack[];
  links: ProjectLink[];
}

const ProjectCard = ({ data }: { data: ProjectItem }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-3 rounded-2xl bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/10">
      {/* Thumbnail Section */}
      <div className="w-full md:w-5/12 shrink-0 aspect-video relative rounded-xl overflow-hidden border border-white/20 dark:border-white/10 shadow-sm bg-gray-100 dark:bg-zinc-900/50">
        {data.thumbnail.type === "video" ? (
          <video
            src={data.thumbnail.url}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            fill
            className="object-cover"
            unoptimized
          />
        )}
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-center w-full md:w-7/12 py-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {data.title}
          </h3>
          <span className="px-3 py-1 text-xs font-medium rounded-full border border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800/50 text-gray-700 dark:text-zinc-300 capitalize">
            {data.status}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
          {data.description}
        </p>

        {/* Tech Stack - Expanding on Hover */}
        <div className="flex flex-wrap gap-2 mb-6">
          {data.techStack.map((tech, i) => (
            <div
              key={i}
              className="group/tech flex items-center justify-center h-10 min-w-[40px] rounded-full border border-white/40 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md px-2.5 transition-all duration-300 ease-in-out hover:bg-white dark:hover:bg-white/10 hover:shadow-sm cursor-default"
            >
              <Icon
                icon={tech.icon}
                className="text-xl text-gray-700 dark:text-gray-300"
              />
              <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover/tech:max-w-[100px] group-hover/tech:opacity-100 group-hover/tech:ml-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Links / Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {data.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-sm hover:-translate-y-0.5 ${
                i === 0
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black hover:shadow-md"
                  : "bg-white/50 dark:bg-transparent border border-gray-300 dark:border-white/20 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-white/5"
              }`}
            >
              <Icon icon={link.icon} className="text-lg" />
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects({ limit }: { limit?: number }) {
  // projects.json එකේ තියෙන data array එක ගන්නවා
  const projects = projectsData.projects as ProjectItem[];
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="w-full py-0.5">
      {/* Dynamic Header */}
      {limit ? (
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-reckless">
            Curious? Check out my projects.
          </h2>
          <Link
            href="/projects"
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
              Projects
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

      {/* Premium Card Container (Same as Experience component) */}
      <div
        className="
          group/card relative overflow-hidden rounded-2xl 
          border border-white/20 
          bg-white/10 dark:bg-black/20 
          backdrop-blur-2xl 
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          transition-all duration-500
          p-2 sm:p-4
        "
      >
        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 to-transparent opacity-40 dark:from-white/5"></div>

        {/* Shine Sweep */}
        <motion.div
          animate={{ x: ["-150%", "250%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="
            pointer-events-none absolute inset-y-0 -z-10 
            w-24 rotate-12 
            bg-gradient-to-r from-transparent via-white/10 to-transparent 
            blur-xl dark:via-white/5
          "
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-5">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
