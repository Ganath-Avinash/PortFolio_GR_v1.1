"use client";

import { useTheme } from "next-themes";
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

export default function PortfolioGUI() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navItems = [
    {
      label: "Profile",
      bgColor: isDark ? "#18181b" : "#f4f4f5", // zinc-900 / zinc-100
      textColor: isDark ? "#fff" : "#000",
      links: [
        { label: "About Me", href: "#about", ariaLabel: "About section" },
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
      <CardNav
        logo={<span className="font-extrabold text-xl tracking-tighter">GA</span>}
        items={navItems}
        baseColor={isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.7)"}
        menuColor={isDark ? "#fff" : "#000"}
        buttonBgColor={isDark ? "#fff" : "#111"}
        buttonTextColor={isDark ? "#000" : "#fff"}
      />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CodingStats />
        <GithubFootprint />
        <Gallery />
        <Achievements />
        <Certifications />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingControls />
    </div>
  );
}
