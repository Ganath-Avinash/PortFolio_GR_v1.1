"use client";
import SplitText from "../SplitText";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Lanyard from "../Lanyard";

export default function Hero() {
  const titles = [
    "UG CSE @ AVV Chennai",
    "Full Stack Developer",
    "AI Engineer"
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[100vh] relative overflow-hidden flex items-center">
      
      {/* Lanyard Animation Container: Full screen canvas to prevent clipping or stretching. Card offset is now handled in 3D space. */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing block">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 pt-20 grid lg:grid-cols-2 gap-12 items-center relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left pt-20 lg:pt-0 pointer-events-auto"
        >
          {/* Allow wrapping on very small screens, keep single line on sm and above */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight sm:whitespace-nowrap">
            Ganath Avinash <span className="text-zinc-500">G R</span>
          </h1>
          <div className="h-10 sm:h-12 md:h-14 mb-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg"
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#skills"
              className="w-full sm:w-auto text-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg hover:scale-105 transition-transform"
            >
              Tech Skills
            </a>
            <a
              href="#coding-stats"
              className="w-full sm:w-auto text-center px-8 py-4 border-2 border-zinc-200 dark:border-zinc-800 rounded-full font-medium text-lg hover:border-black dark:hover:border-white transition-colors"
            >
              Coding Stats
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
