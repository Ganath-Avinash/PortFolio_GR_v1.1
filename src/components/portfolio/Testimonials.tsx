"use client";
import SplitText from "../SplitText";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      subject: "Probability and Random Distribution",
      quote: "Ganath has demonstrated a strong understanding of Probability and Random Distribution. His ability to analyze uncertain scenarios and apply probabilistic reasoning to data-driven problems is particularly impressive. I strongly recommend him for opportunities in data analytics, machine learning, and quantitative research.",
      author: "Dr. Selvaraj Palanisamy",
      role: "Assistant Professor, Amrita Vishwa Vidyapeetham"
    },
    {
      subject: "Linear Algebra",
      quote: "Ganath has exhibited excellent proficiency in Linear Algebra, effectively connecting mathematical theory with practical applications in computing and engineering. His structured problem-solving approach makes him a capable learner. I confidently recommend him for roles in computational mathematics and AI.",
      author: "Dr. Muthuselvan K",
      role: "Assistant Professor, Amrita Vishwa Vidyapeetham"
    },
    {
      subject: "Discrete Mathematics",
      quote: "Ganath has demonstrated a keen understanding of Discrete Mathematics, possessing a natural aptitude for abstract thinking. He consistently breaks down complex problems into logical components. I strongly recommend him for opportunities in computer science, software development, and theoretical computing.",
      author: "Dr. Ajithkumar M",
      role: "Assistant Professor, Amrita Vishwa Vidyapeetham"
    },
    {
      subject: "Digital Electronics",
      quote: "Ganath has shown a commendable understanding of Digital Electronics, effectively translating theoretical concepts into practical design tasks. His proactive learning attitude and problem-solving ability distinguish him as a promising engineering student. I strongly recommend him for roles in embedded systems and hardware design.",
      author: "Dr. Guruprasad Gorthala",
      role: "Assistant Professor, Amrita Vishwa Vidyapeetham"
    }
  ];

  return (
    <section id="testimonials" className="max-w-[100vw] overflow-hidden py-20 relative">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <SplitText text="Testimonials" className="text-3xl md:text-4xl font-bold tracking-tight mb-2" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
        <p className="text-zinc-500 font-semibold tracking-widest uppercase text-sm">Academic Recommendations</p>
      </div>
      
      <style>{`
        @keyframes scroll-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .marquee-container {
          display: flex;
          width: fit-content;
          animation: scroll-ltr 25s linear infinite;
        }
        .marquee-wrapper:hover .marquee-container {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full marquee-wrapper overflow-hidden pb-4">
        <div className="marquee-container gap-6 px-3">
          {[...testimonials, ...testimonials].map((test, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[400px] shrink-0 p-8 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] bg-white dark:bg-zinc-900/50 flex flex-col h-auto hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-zinc-300 dark:text-zinc-700" />
                  <span className="text-xs font-bold px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400">
                    {test.subject}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 text-justify">
                  "{test.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">{test.author}</h4>
                <p className="text-xs text-zinc-500 tracking-wide mt-1 leading-snug">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
