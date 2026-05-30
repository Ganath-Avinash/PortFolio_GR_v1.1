"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl tracking-tighter">GA</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Mobile menu button could go here, but for now we keep it minimal */}
          <div className="md:hidden flex items-center">
            <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
