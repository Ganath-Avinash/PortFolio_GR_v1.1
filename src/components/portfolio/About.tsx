"use client";

import { motion } from "framer-motion";
import SplitText from "../SplitText";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-3xl flex items-center justify-center text-zinc-400 border border-zinc-200 dark:border-zinc-800"
        >
          <span className="text-sm">Profile Image Placeholder</span>
        </motion.div>
      </div>
    </section>
  );
}
