"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import CardNav from "./CardNav";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import CodingStats from "./CodingStats";
import GithubFootprint from "./GithubFootprint";
import Gallery from "./Gallery";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Education from "./Education";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import FloatingControls from "./FloatingControls";
import DotGrid from "../DotGrid";
export default function PortfolioGUI() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navItems = [
    {
      label: "Profile",
      bgColor: isDark ? "#18181b" : "#f4f4f5", // zinc-900 / zinc-100
      textColor: isDark ? "#fff" : "#000",
      links: [
        { label: "Hello, World", href: "#about", ariaLabel: "About section" },
        { label: "Core Skills", href: "#skills", ariaLabel: "Skills section" },
      ]
    },
    {
      label: "Work", 
      bgColor: isDark ? "#27272a" : "#e4e4e7", // zinc-800 / zinc-200
      textColor: isDark ? "#fff" : "#000",
      links: [
        { label: "Experience", href: "#experience", ariaLabel: "Experience section" },
        { label: "Featured Projects", href: "#projects", ariaLabel: "Projects section" },
      ]
    },
    {
      label: "Connect",
      bgColor: isDark ? "#3f3f46" : "#d4d4d8", // zinc-700 / zinc-300
      textColor: isDark ? "#fff" : "#000",
      links: [
        { label: "Contact Form", href: "#contact", ariaLabel: "Contact Form" },
        { label: "GitHub", href: "https://github.com/Ganath-Avinash", ariaLabel: "GitHub" },
        { label: "LinkedIn", href: "https://linkedin.com/in/ganath", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div className="relative">
      <div className="fixed inset-0 z-[0] pointer-events-none opacity-50 dark:opacity-40">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor={isDark ? "#3f3f46" : "#e4e4e7"}
          activeColor={isDark ? "#ffffff" : "#000000"}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="relative z-10">
        <CardNav
        logo={<span className="font-extrabold text-xl tracking-tighter">GA</span>}
        items={navItems}
        baseColor={isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.7)"}
        menuColor={isDark ? "#fff" : "#000"}
        buttonBgColor={isDark ? "#fff" : "#111"}
        buttonTextColor={isDark ? "#000" : "#fff"}
      />
      <main className="flex-grow">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Hero /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><About /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Skills /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Experience /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Projects /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><CodingStats /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><GithubFootprint /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Achievements /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Certifications /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Education /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Gallery /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Testimonials /></motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}><Contact /></motion.div>
      </main>
      <Footer />
        <FloatingControls />
      </div>
    </div>
  );
}
