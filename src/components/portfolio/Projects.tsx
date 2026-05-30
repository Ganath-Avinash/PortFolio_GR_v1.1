"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Facial Emotion Recognition", description: "Deep learning model for real-time emotion detection." },
    { title: "AI Interview Assistant", description: "Automated mock interviews with feedback generation." },
    { title: "Smart Attendance System", description: "Face-recognition based attendance tracking." },
    { title: "Research Dashboard", description: "Data visualization platform for academic research." },
    { title: "Personal Portfolio", description: "Cinematic CLI-to-GUI portfolio experience." },
    { title: "Full Stack SaaS", description: "Scalable B2B application with microservices architecture." },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                <span className="text-sm">Project Preview Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
                <a href="#" className="text-sm font-medium underline underline-offset-4 hover:text-blue-500 transition-colors">
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
