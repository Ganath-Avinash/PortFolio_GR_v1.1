"use client";
import SplitText from "../SplitText";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FiAward, FiStar, FiExternalLink } from "react-icons/fi";

type LeetcodeData = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
};

export default function CodingStats() {
  const [lcData, setLcData] = useState<LeetcodeData | null>(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/Ganath/solved")
      .then(res => res.json())
      .then(data => {
        if (data && data.solvedProblem !== undefined) {
          setLcData({
            totalSolved: data.solvedProblem,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
            ranking: 0
          });
        }
      })
      .catch(() => {
        setLcData({
          totalSolved: 125,
          easySolved: 70,
          mediumSolved: 40,
          hardSolved: 15,
          ranking: 0
        });
      });
  }, []);

  const leetcodeSolved = lcData?.totalSolved || 0;
  const gfgSolved = 10; 
  const hrSolved = 35;   
  const totalSolved = leetcodeSolved + gfgSolved + hrSolved;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="coding-stats" className="py-24 px-6 max-w-7xl mx-auto">
      <SplitText text="Coding Stats" className="text-3xl md:text-4xl font-bold mb-12 tracking-tight" delay={50} duration={1.25} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-50px" textAlign="inherit" tag="h2" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Total Solved Card (Left, spans 2 rows) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="md:row-span-2 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/80 shadow-sm"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-6 bg-white dark:bg-zinc-800 shadow-sm">
              <FiAward className="w-7 h-7 text-zinc-900 dark:text-zinc-100" />
            </div>
            <h3 className="text-2xl font-bold">Ganath Avinash</h3>
            <p className="text-sm text-zinc-500 mb-8">@Ganath-Avinash</p>
          </div>
          
          <div>
            <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-2">Total Problems Solved</p>
            <h4 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
              {totalSolved > 0 ? totalSolved : "..."}
            </h4>
          </div>
        </motion.div>

        {/* LeetCode (Top Right, spans 2 cols) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="md:col-span-2 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 bg-white dark:bg-zinc-900 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden group"
        >
          <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <SiLeetcode className="w-48 h-48 text-orange-500" />
          </div>
          <div className="relative z-10 mb-6 sm:mb-0">
             <div className="flex items-center gap-4 mb-4">
               <div className="bg-orange-50 dark:bg-orange-500/10 p-3 rounded-2xl border border-orange-100 dark:border-orange-500/20">
                 <SiLeetcode className="w-8 h-8 text-orange-500" />
               </div>
               <div>
                 <div className="flex items-center gap-2">
                   <h4 className="font-bold text-xl">Leetcode</h4>
                   <a href="https://leetcode.com/u/Ganath/" target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg" aria-label="View Leetcode Profile">
                     <FiExternalLink className="w-4 h-4 text-zinc-500" />
                   </a>
                 </div>
                 <p className="text-xs text-zinc-500">@Ganath</p>
               </div>
             </div>
             {lcData && (
                <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider">
                  <span className="text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-100 dark:border-emerald-500/20 shadow-sm">Easy {lcData.easySolved}</span>
                  <span className="text-yellow-600 bg-yellow-50 dark:bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-yellow-100 dark:border-yellow-500/20 shadow-sm">Med {lcData.mediumSolved}</span>
                  <span className="text-red-500 bg-red-50 dark:bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-100 dark:border-red-500/20 shadow-sm">Hard {lcData.hardSolved}</span>
                </div>
             )}
          </div>
          <div className="text-left sm:text-right relative z-10">
            <div className="text-6xl font-black">{leetcodeSolved > 0 ? leetcodeSolved : "..."}</div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mt-1">Solved</div>
          </div>
        </motion.div>

        {/* HackerRank (Bottom middle) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between group"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
               <div className="bg-[#00EA64]/10 p-3 rounded-2xl border border-[#00EA64]/20 inline-block mb-4">
                 <SiHackerrank className="w-6 h-6 text-[#00EA64]" />
               </div>
               <div className="flex items-center gap-2">
                 <h4 className="font-bold text-lg">Hackerrank</h4>
                 <a href="https://hackerrank.com/profile/ganathavinash_gr" target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg" aria-label="View Hackerrank Profile">
                   <FiExternalLink className="w-4 h-4 text-zinc-500" />
                 </a>
               </div>
               <p className="text-xs text-zinc-500">@Ganath Avinash</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-black">{hrSolved}</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1">Solved</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <FiAward className="text-[#00EA64] shrink-0" /> SQL Advanced Certified
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <FiStar className="text-yellow-500 fill-yellow-500 shrink-0" /> Python 4 Star
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <FiStar className="text-yellow-500 fill-yellow-500 shrink-0" /> C 4 Star
            </span>
          </div>
        </motion.div>

        {/* GeeksForGeeks (Bottom right) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <SiGeeksforgeeks className="w-32 h-32 text-green-600" />
          </div>
          <div className="relative z-10">
             <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-2xl border border-green-100 dark:border-green-900/30 inline-block mb-4">
               <SiGeeksforgeeks className="w-6 h-6 text-green-600" />
             </div>
             <div className="flex items-center gap-2">
               <h4 className="font-bold text-lg">GeeksForGeeks</h4>
               <a href="https://www.geeksforgeeks.org/profile/ganathav07am" target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg" aria-label="View GeeksForGeeks Profile">
                 <FiExternalLink className="w-4 h-4 text-zinc-500" />
               </a>
             </div>
             <p className="text-xs text-zinc-500">@Ganath Avinash</p>
          </div>
          <div className="relative z-10 mt-8 text-right">
            <div className="text-5xl font-black">{gfgSolved}</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1">Problems Solved</div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
