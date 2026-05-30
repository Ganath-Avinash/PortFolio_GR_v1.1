"use client";

import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "Vellore Institute of Technology",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2022 - 2026",
      details: "Focus on Artificial Intelligence, Data Structures, and Software Engineering."
    },
    {
      institution: "High School",
      degree: "Pre-University Education",
      duration: "2020 - 2022",
      details: "Completed with distinction in Physics, Chemistry, and Mathematics."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">My Academic journey so far...</h2>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-900/50"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex-shrink-0 flex items-center justify-center border border-indigo-100 dark:border-indigo-900/30">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{edu.institution}</h3>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-1">{edu.degree}</p>
              <p className="text-sm text-zinc-500 mb-3">{edu.duration}</p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
