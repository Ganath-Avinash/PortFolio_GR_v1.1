"use client";

import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Ganath is an incredibly talented engineer. His ability to quickly grasp complex architectural problems and implement robust solutions is unmatched.",
      author: "Sr. Engineering Manager",
      role: "Tech Startup"
    },
    {
      quote: "I was amazed by the quality of the frontend interfaces he delivered. They were not only visually stunning but perfectly optimized for performance.",
      author: "Product Designer",
      role: "Freelance Client"
    },
    {
      quote: "A true team player and brilliant problem solver. Ganath's contributions during our hackathon were the primary reason we placed in the top 10.",
      author: "Hackathon Teammate",
      role: "University"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Testimonials</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((test, index) => (
          <div 
            key={index} 
            className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] bg-white dark:bg-zinc-900/50 flex flex-col justify-between h-full"
          >
            <div>
              <Quote className="w-8 h-8 text-zinc-300 dark:text-zinc-700 mb-6" />
              <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-8">
                "{test.quote}"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm">{test.author}</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{test.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
