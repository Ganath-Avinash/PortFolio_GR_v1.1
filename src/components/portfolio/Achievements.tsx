"use client";
import SplitText from "../SplitText";

import { Award } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    title: "Approved Project - Assets Management System @ AAI",
    date: "May 2026",
    description: "Developed and successfully delivered a comprehensive asset tracking system.",
    link: "https://github.com/Ganath-Avinash?tab=repositories",
    image: "/imgs/achievements/AAI.png"
  },
  {
    title: "Coding Ranking 1500+ @Leetcode",
    date: "Ongoing",
    description: "Solving DSA problems as soon as I learn a new topic to continuously improve my algorithmic skills.",
    link: "https://leetcode.com/u/Ganath/",
    image: "/imgs/achievements/lc.png"
  },
  {
    title: "Top 6 in Code Auction @ AVV GFG",
    date: "Feb 2026",
    description: "Code Auction is an event where you bid for a problem then solve it. The highest one wins.",
    link: "https://drive.google.com/file/d/19JxdkjhtNPhmMqdT_Y8A8iukxoOUJF2j/view?usp=drive_link",
    image: "/imgs/achievements/gfg.png"
  }
];

export default function Achievements() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-10">
        <SplitText text="Achievements" className="text-3xl md:text-4xl font-bold tracking-tight mb-2" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
        <p className="text-zinc-500 font-semibold tracking-widest uppercase text-sm">Recognition</p>
      </div>
      
      <div className="space-y-4">
        {achievements.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-900/50"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-500/10 flex-shrink-0 flex items-center justify-center border border-blue-100 dark:border-blue-900/30 overflow-hidden relative">
              <Image src={item.image} alt={item.title} fill className="object-contain p-2" sizes="48px" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-zinc-500 mb-2">{item.date}</p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl">{item.description}</p>
            </div>
            {item.link && (
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:underline text-zinc-900 dark:text-white mt-2 sm:mt-0 flex-shrink-0 whitespace-nowrap"
              >
                View More &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
