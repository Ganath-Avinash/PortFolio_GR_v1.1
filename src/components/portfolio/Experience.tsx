"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "AI & Full Stack Developer",
    company: "Freelance",
    duration: "2023 - Present",
    details: [
      "Built production-ready AI applications and full-stack platforms.",
      "Optimized latency for LLM queries by 40% using caching and streaming.",
      "Developed responsive, accessible, and high-performance user interfaces."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Tech Startup",
    duration: "Summer 2023",
    details: [
      "Collaborated on building a microservices architecture using Node.js and Docker.",
      "Implemented seamless authentication flows and integrated third-party APIs.",
      "Participated in agile sprints, code reviews, and system design sessions."
    ]
  }
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Experiences</h2>
        <p className="text-zinc-500 font-semibold tracking-widest uppercase text-sm">Work</p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <button 
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <span className="text-zinc-500 hidden md:block">•</span>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-4 text-zinc-500">
                  <span className="text-sm font-medium hidden sm:block">{exp.duration}</span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-zinc-100 dark:border-zinc-800/50">
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="text-sm leading-relaxed">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
