"use client";
import SplitText from "../SplitText";

import { GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Education() {
  const education = [
    {
      institution: "Amrita Vishwa Vidyapeetham",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2024 - 2028",
      details: "Focus on AI, Data Structures, and Scalable Software Engineering. CGPA: 9.01",
      image: "/imgs/educations/Amrita Vishwa Vidyapeetham Logo Vector.svg .png"
    },
    {
      institution: "Prince Srivari Senior Secondary School",
      degree: "12th Grade (Bio-Math)",
      duration: "2023 - 2024",
      details: "Percentage: 92%",
      image: "/imgs/educations/prince.png",
      imageClass: "scale-[1.7]"
    },
    {
      institution: "Prince Srivari Senior Secondary School",
      degree: "10th Grade",
      duration: "2021 - 2022",
      details: "Math, Physics, Chemistry, English, Social. Percentage: 88%",
      image: "/imgs/educations/prince.png",
      imageClass: "scale-[1.7]"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-10">
        <SplitText text="Educations" className="text-3xl md:text-4xl font-bold tracking-tight mb-2" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
        <p className="text-zinc-500 font-semibold tracking-widest uppercase text-sm">Academics</p>
      </div>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-900/50"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex-shrink-0 flex items-center justify-center border border-indigo-100 dark:border-indigo-900/30 overflow-hidden relative">
              <Image src={edu.image} alt={edu.institution} fill className={`object-contain p-2 ${edu.imageClass || ""}`} sizes="48px" />
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
