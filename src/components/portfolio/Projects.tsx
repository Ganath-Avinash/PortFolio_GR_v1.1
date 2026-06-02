"use client";
import SplitText from "../SplitText";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { title: "AAI - Assets Management System", description: "Developed a secure, minimalistic, and user-friendly Asset Management System for the Airports Authority of India (AAI) to streamline IT asset tracking and management. The project received positive feedback from the IT leadership team, successfully cleared the final review process, and is expected to be deployed within the AAI IT Department.", liveLink: "https://github.com/Ganath-Avinash/AAI_Software", githubLink: "https://github.com/Ganath-Avinash/AAI_Software", image: "/imgs/projects/p1.png" },
    { title: "RAG Triage", description: "Developed an AI-powered customer support ticket management system that leverages Retrieval-Augmented Generation (RAG) to intelligently analyze, categorize, and prioritize support requests. The solution streamlines ticket triage, improves response efficiency, and helps support teams resolve issues faster through context-aware AI assistance.", liveLink: "https://github.com/Ganath-Avinash/RAG-based-Triage-solution-software-for-support-tickets", githubLink: "https://github.com/Ganath-Avinash/RAG-based-Triage-solution-software-for-support-tickets", image: "/imgs/projects/p2.png" },
    { title: "TrafficSense", description: "Developed a scalable emissions analytics platform that visualizes transport emission trends across countries and continents through interactive comparison dashboards. Integrated a Linear Regression model for next-year emission forecasting, supported report exports, and delivered a fast, clear, and data-driven user experience.", liveLink: "https://ganath-avinash.github.io/Traffic_Emission_Haskell/scotty-web/static/", githubLink: "https://github.com/Ganath-Avinash/Traffic_Emission_Haskell", image: "/imgs/projects/p3.png" },
    { title: "Wits & Bytes", description: "One of my earliest web development projects, built after learning HTML, CSS, and JavaScript. Inspired by Pexels, this stock image and wallpaper discovery platform allows users to browse a wide variety of high-quality wallpapers through a clean and responsive interface. The project was primarily focused on front-end development, with minimal backend functionality.", liveLink: "https://ganath-avinash.github.io/", githubLink: "https://github.com/Ganath-Avinash/Ganath-Avinash.github.io", image: "/imgs/projects/p4.png" },
    { title: "Portfolio v1.1", description: "This is the portfolio you are currently exploring. Built to showcase my journey, skills, projects, and experiences through an interactive and engaging interface. Designed with a focus on performance, usability, and modern web technologies, it reflects both my technical expertise and passion for creating meaningful digital experiences.", liveLink: "#home", githubLink: "https://github.com/Ganath-Avinash/PortFolio_GR_v1.1", image: "/imgs/projects/p5.png" },
    { title: "Javascript games", description: "Built a collection of small browser-based games, including Memory Game and Rock-Paper-Scissors, while learning JavaScript fundamentals. These projects helped strengthen my understanding of DOM manipulation, event handling, game logic, and interactive user interface development.", liveLink: "https://github.com/Ganath-Avinash", githubLink: "https://github.com/Ganath-Avinash", image: "/imgs/projects/p6.png" },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SplitText text="Projects" className="text-3xl md:text-4xl font-bold mb-12 tracking-tight" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ willChange: "transform, opacity" }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 overflow-hidden relative">
                <Image src={project.image} alt={project.title} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
                <div className="flex gap-3 mt-auto pt-4">
                  <a href={project.liveLink} target={project.liveLink.startsWith('http') ? "_blank" : undefined} rel={project.liveLink.startsWith('http') ? "noopener noreferrer" : undefined} className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:opacity-80 transition-opacity">
                    Live
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    Github Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
