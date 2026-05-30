"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            <p>
              I am a Computer Science Engineer with a deep focus on Artificial Intelligence and Full-Stack Development. I thrive at the intersection of innovative research and practical software engineering.
            </p>
            <p>
              My expertise lies in building scalable systems, integrating advanced AI models into accessible applications, and conducting rigorous technical research. As an active IEEE Research Member, I constantly explore new methodologies to solve complex problems.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-3xl flex items-center justify-center text-zinc-400 border border-zinc-200 dark:border-zinc-800"
        >
          <span className="text-sm">Profile Image Placeholder</span>
        </motion.div>
      </div>
    </section>
  );
}
