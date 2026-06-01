"use client";
import SplitText from "../SplitText";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Airport Authority Of India",
    duration: "Summer - 2026 - May",
    details: [
      "Developed Assets Management System For AAI IT assets",
      "It's Simple, Minimalistic and Secure",
      "Got great reviews from IT head and final review has been cleared",
      "It will be soon be used in AAI IT Department"
    ],
    proofLink: "https://drive.google.com/file/d/1I_cm8E_vcu_bvDEbnj-hxhdhAtAFm8hQ/view?usp=drive_link"
  },
  {
    role: "IEEE Member",
    company: "IEEE",
    duration: "Ongoing (Learning)",
    details: [
      "Research about AI and Cys",
      "Learning from papers",
      "Trying to publish my own IEEE Standard Paper"
    ],
    proofLink: "https://drive.google.com/file/d/1YWLkzK-bkyD_zSp1O3Tbli8VICXghLNI/view?usp=sharing"
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
        <SplitText text="Experiences" className="text-3xl md:text-4xl font-bold tracking-tight mb-2" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
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
                      {exp.proofLink && (
                        <div className="mt-5">
                          <a 
                            href={exp.proofLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-sm"
                          >
                            Proof of Experience
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}
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
