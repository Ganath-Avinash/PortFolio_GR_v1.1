"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SplitText from "../SplitText";

function TerminalAbout() {
  const codeSnippet = `{
  "name": "Ganath Avinash G R",
  "role": "B.Tech CSE Student",
  "location": "Chennai, India",
  "education": "Amrita Vishwa Vidyapeetham",
  "focus": ["Full-Stack", "AI Integration"],
  "status": "Building scalable solutions..."
}`;

  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const intervalId = setInterval(() => {
      setText(codeSnippet.slice(0, i));
      i++;
      if (i > codeSnippet.length) {
        clearInterval(intervalId);
      }
    }, 30); // Typing speed
    return () => clearInterval(intervalId);
  }, [started, codeSnippet]);

  // Basic syntax highlighting for the JSON strings
  const highlightedText = text
    .replace(/"(.*?)"/g, '<span class="text-emerald-400">"$1"</span>')
    .replace(/([\[\]\{\}])/g, '<span class="text-zinc-500">$1</span>')
    .replace(/:(.*?)/g, '<span class="text-blue-400">:</span>$1');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setStarted(true)}
      style={{ willChange: "transform, opacity" }}
      className="w-full rounded-2xl overflow-hidden bg-[#1e1e1e] border border-zinc-800 shadow-2xl font-mono text-sm sm:text-base"
    >
      {/* Mac Window Header */}
      <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-zinc-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-zinc-400">developer.json</div>
      </div>
      {/* Terminal Body */}
      <div className="p-6 text-zinc-300 h-64 sm:h-72 overflow-y-auto">
        <pre className="whitespace-pre-wrap leading-loose">
          <code dangerouslySetInnerHTML={{ __html: highlightedText }} />
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-zinc-400 align-middle ml-1"
          />
        </pre>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
        >
          <SplitText
            text="Hello, World"
            className="text-3xl font-bold mb-6"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
            tag="h2"
          />
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            <p>
              I am a B.Tech Computer Science student at Amrita Vishwa Vidyapeetham with a strong foundation in Full-Stack Development, SDLC, and modern software engineering practices. Passionate about building scalable and user-centric applications, I continuously explore Artificial Intelligence and Machine Learning to create innovative solutions that enhance product usability, automation, and overall user experience.
            </p>
            <p>
              As a Software Developer Intern at the Airports Authority of India, I contributed to the development of an Asset Management System that streamlined asset tracking and management through a web-based platform. With experience in software development, research, and technical problem-solving, I enjoy leveraging technology to address real-world challenges and deliver impactful digital solutions.
            </p>
          </div>
        </motion.div>
        <div className="flex items-center justify-center">
          <TerminalAbout />
        </div>
      </div>
    </section>
  );
}
