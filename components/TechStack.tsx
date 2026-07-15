"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import TechBadge from "./TechBadge";
import { techCategories } from "../data/techStack";

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full mt-2 space-y-6">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-semibold mb-2 text-gray-950 dark:text-white font-reckless "
      >
        Tools I use? See below
      </motion.h2>

      {/* MAIN PREMIUM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative p-4 rounded-2xl 
          bg-white/40 dark:bg-zinc-900/40 
          backdrop-blur-xl 
          border border-gray-200/50 dark:border-white/10 
          shadow-[0_12px_28px_rgba(0,0,0,0.06)]
          dark:shadow-[0_18px_40px_rgba(0,0,0,0.45)]
          overflow-hidden leading-relaxed text-gray-700 dark:text-gray-300
          space-y-3
        "
      >
        {/* Glow Layer */}
        <div
          className="
            absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 
            transition-opacity duration-700
            bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-transparent
            blur-2xl
          "
        />

        {/* Shine Sweep */}
        <motion.div
          animate={{ x: ["-150%", "250%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="
            absolute inset-y-0 w-24 
            bg-gradient-to-r from-transparent via-white/20 to-transparent 
            dark:via-white/10 blur-xl rotate-12 pointer-events-none
          "
        />

        {/* MAIN TEXT */}
        <div className="text-base md:text-lg space-y-5">
          <p>
            <span className="font-bold">My primary tech stack includes</span>{" "}
            <TechBadge
              icon="logos:react"
              name="React"
              colorClass="text-[#61DAFB]"
            />
            ,{" "}
            <TechBadge
              icon="simple-icons:nextdotjs"
              name="Next.js"
              colorClass="text-black dark:text-white"
            />
            , and{" "}
            <TechBadge
              icon="simple-icons:tailwindcss"
              name="Tailwind CSS"
              colorClass="text-[#06B6D4]"
            />
            , enabling me to build modern, responsive, and high-performance web
            applications.
          </p>

          <p>
            <span className="font-bold">On the backend</span>, I develop
            scalable solutions using{" "}
            <TechBadge
              icon="logos:nodejs-icon"
              name="Node.js"
              colorClass="text-[#339933]"
            />
            ,{" "}
            <TechBadge
              icon="bxl:express-js"
              name="Express.js"
              colorClass="text-black dark:text-white"
            />
            ,{" "}
            <TechBadge
              icon="simple-icons:springboot"
              name="Spring Boot"
              colorClass="text-[#6DB33F]"
            />
            , with{" "}
            <TechBadge
              icon="logos:mongodb-icon"
              name="MongoDB"
              colorClass="text-[#47A248]"
            />{" "}
            and <TechBadge icon="logos:mysql" name="MySQL" /> as my preferred
            databases.
          </p>

          <p>
            <span className="font-bold">For UI/UX design</span>, I work with{" "}
            <TechBadge icon="logos:figma" name="Figma" />,{" "}
            <TechBadge
              icon="logos:adobe-xd"
              name="Adobe XD"
              colorClass="text-[#FF61F6]"
            />
            , transforming ideas into intuitive and engaging user experiences.
          </p>

          <p>
            <span className="font-bold">I also integrate AI</span> and{" "}
            <span className="font-bold">Machine Learning</span> using{" "}
            <TechBadge
              icon="vscode-icons:file-type-gemini"
              name="Google AI Studio"
              colorClass="text-[#4285F4]"
            />
            ,{" "}
            <TechBadge
              icon="devicon:googlecolab"
              name="Google Colab"
              colorClass="text-[#F9AB00]"
            />
            ,{" "}
            <TechBadge
              icon="simple-icons:huggingface"
              name="Hugging Face"
              colorClass="text-[#FFD21E]"
            />
            .
          </p>

          <p>
            My workflow revolves around{" "}
            <TechBadge
              icon="simple-icons:git"
              name="Git"
              colorClass="text-[#F05032]"
            />
            ,{" "}
            <TechBadge
              icon="simple-icons:github"
              name="GitHub"
              colorClass="text-black dark:text-white"
            />
            ,{" "}
            <TechBadge
              icon="material-icon-theme:vscode"
              name="VS Code"
              colorClass="text-[#007ACC]"
            />
            , <TechBadge icon="logos:linux-tux" name="Linux" />, and{" "}
            <TechBadge
              icon="logos:docker-icon"
              name="Docker"
              colorClass="text-[#2496ED]"
            />
            . I <span className="font-bold">deploy</span> applications on{" "}
            <TechBadge
              icon="selfhst:digitalocean"
              name="DigitalOcean"
              colorClass="text-[#0080FF]"
            />{" "}
            and{" "}
            <TechBadge
              icon="fa-brands:aws"
              name="AWS"
              colorClass="text-[#FF9900]"
            />
            .
          </p>
        </div>
      </motion.div>

      {/* EXPANDED PREMIUM SECTION */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden space-y-4"
          >
            {/* Styled Curious Line */}
            <p
              className="
                text-gray-700 dark:text-gray-300 
                text-base md:text-lg font-medium 
                tracking-wide
                px-3 py-2
                rounded-lg
                bg-white/20 dark:bg-zinc-800/30 
                backdrop-blur-md
                border border-gray-200/30 dark:border-white/10
                shadow-sm
              "
            >
              Hmm.. you really are curious. Here's a few more:
            </p>

            {techCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className="
                  relative group p-4 rounded-2xl 
                  border border-gray-200/40 dark:border-white/10 
                  bg-white/30 dark:bg-zinc-900/30 
                  backdrop-blur-xl 
                  shadow-[0_10px_24px_rgba(0,0,0,0.05)]
                  dark:shadow-[0_14px_36px_rgba(0,0,0,0.45)]
                  overflow-hidden
                "
              >
                {/* Glow Behind */}
                <div
                  className="
                    absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-700
                    bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-transparent
                    blur-2xl
                  "
                />

                {/* Shine Sweep */}
                <motion.div
                  animate={{ x: ["-150%", "250%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="
                    absolute inset-y-0 w-24 
                    bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    dark:via-white/10 blur-xl rotate-12 pointer-events-none
                  "
                />

                {/* Title */}
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-600 dark:text-gray-300 mb-2">
                  {category.title}
                </h3>

                {/* Items */}
                <motion.div
                  className="flex flex-wrap gap-1.5"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.03 },
                    },
                  }}
                >
                  {category.items.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={{
                        hidden: { opacity: 0, y: 6 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <TechBadge
                        icon={item.icon}
                        name={item.name}
                        colorClass={item.color}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="
          mt-2 flex items-center gap-2 px-4 py-2 
          bg-white dark:bg-zinc-800/70 
          border border-gray-200 dark:border-zinc-800 
          rounded-lg text-gray-800 dark:text-gray-200 
          text-sm font-medium shadow-sm 
          hover:bg-gray-50 dark:hover:bg-zinc-700 
          transition-all
        "
      >
        {showAll ? "Show Less" : "Show All"}
        <Icon
          icon={
            showAll
              ? "solar:alt-arrow-up-linear"
              : "solar:alt-arrow-down-linear"
          }
          className="text-lg"
        />
      </button>
    </div>
  );
}
