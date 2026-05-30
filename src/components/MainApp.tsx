"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Terminal from "./terminal/Terminal";
import PortfolioGUI from "./portfolio/PortfolioGUI";

export type ViewMode = "terminal" | "transition" | "gui";

export default function MainApp() {
  const [viewMode, setViewMode] = useState<ViewMode>("terminal");

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-background text-foreground">
      <AnimatePresence mode="wait">
        {viewMode === "terminal" && (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          >
            <Terminal onLaunch={() => setViewMode("transition")} />
          </motion.div>
        )}

        {viewMode === "transition" && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-background"
            onAnimationComplete={() => {
              setTimeout(() => setViewMode("gui"), 1500);
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 border-t-2 border-r-2 border-blue-500 rounded-full animate-spin" />
              <p className="text-blue-500 font-mono text-sm tracking-widest uppercase">
                Initializing Interface
              </p>
            </motion.div>
          </motion.div>
        )}

        {viewMode === "gui" && (
          <motion.div
            key="gui"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50"
          >
            <PortfolioGUI />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
