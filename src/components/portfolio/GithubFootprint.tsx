"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

export default function GithubFootprint() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    
    fetch("https://github-contributions-api.deno.dev/Ganath-Avinash.json")
      .then(res => res.json())
      .then(data => {
        if (data && data.contributions) {
          const total = data.contributions
            .flat()
            .reduce((acc: number, curr: any) => acc + (curr.contributionCount || 0), 0);
          setTotalContributions(total);
        }
      })
      .catch(() => setTotalContributions(542));
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Github Stats</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-6 bg-zinc-50 dark:bg-zinc-800">
              <SiGithub className="w-7 h-7 text-zinc-900 dark:text-white" />
            </div>
            <h3 className="font-bold text-lg">Total Contributions</h3>
            <p className="text-sm text-zinc-500 mb-8">@Ganath-Avinash</p>
          </div>
          <div>
            <h4 className="text-6xl font-black tracking-tighter">
              {totalContributions !== null ? totalContributions : "..."}
            </h4>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mt-2">In the last year</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 lg:col-span-3 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center overflow-x-auto"
        >
          <div className="min-w-[700px] flex justify-center">
            <GitHubCalendar 
              username="Ganath-Avinash"
              colorScheme={theme === "dark" ? "dark" : "light"}
              fontSize={14}
              blockSize={14}
              blockMargin={6}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
