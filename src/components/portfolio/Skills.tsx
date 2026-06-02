"use client";
import SplitText from "../SplitText";

import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiTailwindcss, SiFlask, SiMysql, SiMongodb, 
  SiSalesforce, SiGit, SiCanva, SiExpress, SiBootstrap,
  SiLeetcode, SiHackerrank, SiCodechef, SiGithub 
} from "react-icons/si";
import { FiDatabase, FiWifi, FiShare2, FiPenTool } from "react-icons/fi";
import { FaJava, FaWindows, FaReact, FaJs, FaNodeJs, FaFigma } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const SkillCard = ({ title, items }: { title: string, items: { name: string, icon: any, color?: string }[] }) => {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
      <div className="bg-zinc-50 dark:bg-zinc-800/40 text-zinc-900 dark:text-zinc-100 py-4 px-6 font-bold text-lg border-b border-zinc-200 dark:border-zinc-800">
        {title}
      </div>
      <div className="p-6 flex flex-col gap-5">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
             <div className={`w-10 h-10 shrink-0 flex items-center justify-center text-3xl transition-transform group-hover:scale-110 ${item.color || 'text-zinc-700 dark:text-zinc-300'}`}>
               <item.icon />
             </div>
             <span className="font-semibold text-[1.05rem] text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <SplitText text="Technical Skills" className="text-3xl md:text-4xl font-bold mb-16 tracking-tight" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Column 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          <SkillCard 
            title="Front-End"
            items={[
              { name: "React JS", icon: FaReact, color: "text-[#61DAFB]" },
              { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
              { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
              { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
              { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
              { name: "CSS", icon: SiCss, color: "text-[#1572B6]" }
            ]}
          />
          <SkillCard 
            title="Back-End"
            items={[
              { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
              { name: "Express.js", icon: SiExpress, color: "text-zinc-800 dark:text-zinc-200" },
              { name: "Flask", icon: SiFlask, color: "text-zinc-800 dark:text-zinc-200" }
            ]}
          />
        </motion.div>

        {/* Column 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          <SkillCard 
            title="Databases"
            items={[
              { name: "SQL Workbench", icon: SiMysql, color: "text-[#4479A1]" },
              { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" }
            ]}
          />
          <SkillCard 
            title="Cloud & CRM (Basic)"
            items={[
              { name: "Microsoft Azure", icon: VscAzure, color: "text-[#0089D6]" },
              { name: "Salesforce", icon: SiSalesforce, color: "text-[#00A1E0]" }
            ]}
          />
          <SkillCard 
            title="Version Control & Design"
            items={[
              { name: "Git", icon: SiGit, color: "text-[#F05032]" },
              { name: "GitHub", icon: SiGithub, color: "text-zinc-900 dark:text-zinc-100" },
              { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]" },
              { name: "Canva", icon: SiCanva, color: "text-[#00C4CC]" },
              { name: "Stitch", icon: FiPenTool, color: "text-[#FF007F]" }
            ]}
          />
        </motion.div>

        {/* Column 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          <SkillCard 
            title="Knowledge Areas"
            items={[
              { name: "DBMS", icon: FiDatabase, color: "text-indigo-500" },
              { name: "OOPs", icon: FaJava, color: "text-[#5382a1]" },
              { name: "Networks", icon: FiWifi, color: "text-sky-500" },
              { name: "Operating Systems", icon: FaWindows, color: "text-[#0078D6]" },
              { name: "DSA", icon: FiShare2, color: "text-purple-500" }
            ]}
          />
          <SkillCard 
            title="Platforms"
            items={[
              { name: "Leetcode", icon: SiLeetcode, color: "text-[#FFA116]" },
              { name: "Hackerrank", icon: SiHackerrank, color: "text-[#00EA64]" },
              { name: "CodeChef", icon: SiCodechef, color: "text-[#5B4638]" }
            ]}
          />
        </motion.div>

      </div>
    </section>
  );
}
