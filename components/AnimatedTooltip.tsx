"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedTooltip({
  icon: Icon,
  name,
  colorClass = "",
}: {
  icon: any;
  name: string;
  colorClass?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap z-50 shadow-lg border border-gray-700"
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-center w-14 h-14 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-500 hover:bg-gray-800 transition-all duration-300">
        <Icon size={28} className={colorClass} />
      </div>
    </div>
  );
}
