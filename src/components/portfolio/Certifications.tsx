"use client";

import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    { title: "Generative AI Mastermind", issuer: "Outskill", year: "May 2026", icon: "🟢" },
    { title: "Notion Academy Essentials", issuer: "Notion", year: "May 2026", icon: "📓" },
    { title: "Claude Code in Action", issuer: "Anthropic", year: "Mar 2026", icon: "❇️" },
  ];

  return (
    <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Certifications</h2>
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
            className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-900/50 flex items-start gap-6 hover:shadow-sm transition-all"
          >
            <div className="w-16 h-16 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-[1.2rem] flex items-center justify-center text-3xl shadow-sm shrink-0">
              {cert.icon}
            </div>
            <div className="flex flex-col items-start pt-1">
              <h3 className="font-bold text-[1.1rem] text-zinc-900 dark:text-white mb-1 leading-none">{cert.title}</h3>
              <p className="text-sm text-zinc-500 mb-4">From {cert.issuer} • Issued {cert.year}</p>
              <button className="px-4 py-1.5 border border-zinc-200 dark:border-zinc-700 rounded-full text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
                View Credential
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
