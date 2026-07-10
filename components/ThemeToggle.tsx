"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle3D() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
      setFlipped(saved === "dark");
      return;
    }
    const hasDark = document.documentElement.classList.contains("dark");
    setTheme(hasDark ? "dark" : "light");
    setFlipped(hasDark);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    setFlipped(next === "dark");
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative w-10 h-10 
        [perspective:600px]
        rounded-full
      "
    >
      <div
        className={`
          relative w-full h-full 
          transition-transform duration-500 
          [transform-style:preserve-3d]
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* Front - Light (Moon) */}
        <div
          className="
            absolute inset-0 
            flex items-center justify-center 
            rounded-full 
            bg-white text-black 
            border border-gray-300 
            dark:border-gray-600
            [backface-visibility:hidden]
            shadow-sm
          "
        >
          <Moon size={18} />
        </div>

        {/* Back - Dark (Sun) */}
        <div
          className="
            absolute inset-0 
            flex items-center justify-center 
            rounded-full 
            bg-black text-yellow-300 
            border border-gray-600 
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            shadow-md
          "
        >
          <Sun size={18} />
        </div>
      </div>
    </button>
  );
}
