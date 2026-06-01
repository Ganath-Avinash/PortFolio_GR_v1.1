"use client";
import SplitText from "../SplitText";

import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    { title: "Generative AI For Everyone", issuer: "DeepLearning.AI", year: "Mar 2026", image: "/imgs/certifications/deeplearn.jpeg", link: "https://drive.google.com/file/d/1u6kJEGD8RNjl5RJQc0fkrGcLN3eBFzSZ/view?usp=drive_link" },
    { title: "Meta - Full Stack Specialisation", issuer: "Meta", year: "Ongoing (1/10)", image: "/imgs/certifications/meta.png", link: "https://drive.google.com/drive/folders/1agfxKW_9oXmpmmlW1v_9UvoqxsP1GT9d?usp=drive_link" },
    { title: "SQL Advanced", issuer: "HackerRank", year: "Apr 2026", image: "/imgs/certifications/hackerrank.png", link: "https://drive.google.com/file/d/176H2h60c4qHKIjC-R7wgzevX9eCrM5Oy/view?usp=drive_link" },
    { title: "Gemini Student & Educator Certification", issuer: "Google Gemini", year: "Feb 2026", image: "/imgs/certifications/gemini.png", link: "https://drive.google.com/file/d/1k5ZNzXolFWTOM4WFcVIanCFuNHl4HQj9/view?usp=drive_link" },
    { title: "RDBMS & DBMS Certification", issuer: "Udemy", year: "Oct 2025", image: "/imgs/certifications/udemy.png", link: "https://drive.google.com/file/d/1mTdM-eaK9INzLpQxaE8wBUOmTJK5RDXo/view?usp=drive_link" },
  ];

  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <SplitText text="Certifications" className="text-3xl md:text-4xl font-bold tracking-tight mb-2" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
        <p className="text-zinc-500 font-semibold tracking-widest uppercase text-sm">Learnings</p>
      </div>
      <div className="flex flex-col gap-6">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-4 sm:gap-6 flex-grow">
              <div className="w-16 h-16 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-[1.2rem] flex items-center justify-center text-3xl shadow-sm shrink-0 overflow-hidden p-2.5">
                <img src={cert.image} alt={cert.issuer} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-start pt-1">
                <h3 className="font-bold text-[1.1rem] text-zinc-900 dark:text-white mb-1 leading-none">{cert.title}</h3>
                <p className="text-sm text-zinc-500">From {cert.issuer} • {cert.year.includes("Ongoing") ? "" : "Issued "}{cert.year}</p>
              </div>
            </div>
            <a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-zinc-200 dark:border-zinc-700 rounded-full text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm shrink-0 mt-2 sm:mt-0"
            >
              View Credential
            </a>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a 
          href="https://drive.google.com/drive/folders/1agfxKW_9oXmpmmlW1v_9UvoqxsP1GT9d?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:scale-105 transition-transform shadow-md"
        >
          View More
        </a>
      </div>
    </section>
  );
}
