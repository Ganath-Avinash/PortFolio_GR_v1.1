"use client";

import { Award } from "lucide-react";

const achievements = [
  {
    title: "Top 10 in Global Hackathon",
    date: "November 2023",
    description: "Built an AI-powered accessibility tool that won 9th place globally among 500+ teams.",
    link: "#"
  },
  {
    title: "Open Source Contributor",
    date: "August 2023",
    description: "Ranked in the top 100 contributors during Hacktoberfest for multiple major repositories.",
    link: "#"
  },
  {
    title: "Best UX Design Award",
    date: "March 2023",
    description: "Awarded for designing a seamless, highly accessible interface for a local non-profit.",
    link: "#"
  }
];

export default function Achievements() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Achievement</h2>
        <p className="text-zinc-500 font-semibold tracking-widest uppercase text-sm">Recognition</p>
      </div>
      
      <div className="space-y-4">
        {achievements.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-900/50"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-500/10 flex-shrink-0 flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-zinc-500 mb-2">{item.date}</p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl">{item.description}</p>
            </div>
            <a 
              href={item.link} 
              className="text-sm font-semibold hover:underline text-zinc-900 dark:text-white mt-2 sm:mt-0 flex-shrink-0 whitespace-nowrap"
            >
              View More &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
