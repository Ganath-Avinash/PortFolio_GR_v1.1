"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Eye, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingControls() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110 active:scale-95 overflow-hidden"
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          setTheme(newTheme);
        }}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div 
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div 
          className={`absolute bottom-full right-0 mb-3 flex flex-col gap-2 transition-all duration-300 ${
            isOpen 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible translate-y-2"
          }`}
        >
          <a
            href="https://drive.google.com/file/d/151GO-3b-RRosGO6flJ6bRAM3SZrK3yTf/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors whitespace-nowrap text-sm font-semibold"
            aria-label="View Resume"
          >
            <Eye size={16} /> View
          </a>
          <a
            href="/imgs/resume/Ganath_v2.pdf"
            download="Ganath_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors whitespace-nowrap text-sm font-semibold"
            aria-label="Download Resume"
          >
            <Download size={16} /> Download
          </a>
        </div>
        
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer"
        >
          <span className="font-bold text-xl">R</span>
        </div>
      </div>
    </div>
  );
}
