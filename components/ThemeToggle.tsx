"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle3D() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration mismatch එක වළක්වා ගැනීමට
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>; // Component එක load වෙනකම් හිස් ඉඩක් ලබා දීම
  }

  // System theme එකත් එක්කම දැනට තියෙන theme එක මොකක්ද කියලා හඳුනාගැනීම
  const isDark = theme === "dark" || resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
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
          ${isDark ? "[transform:rotateY(180deg)]" : ""}
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
