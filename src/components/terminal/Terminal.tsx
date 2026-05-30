"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface TerminalProps {
  onLaunch: () => void;
}

interface LogEntry {
  id: string;
  type: "input" | "output" | "system";
  content: React.ReactNode;
}

const BOOT_SEQUENCE = [
  "Initializing Portfolio...",
  "Loading Projects...",
  "Loading Research Profile...",
  "Loading Certifications...",
  "Loading Experience...",
  "System Ready.",
];

export default function Terminal({ onLaunch }: TerminalProps) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [welcomeLogs, setWelcomeLogs] = useState<LogEntry[]>([]);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // Focus input when clicking anywhere on the terminal window
    const handleWindowClick = () => {
      inputRef.current?.focus();
    };
    window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever logs change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs, welcomeLogs]);

  useEffect(() => {
    let delay = 0;
    const timeouts: NodeJS.Timeout[] = [];

    BOOT_SEQUENCE.forEach((msg, index) => {
      delay += msg.includes("System Ready") ? 1000 : Math.random() * 400 + 200;
      const t = setTimeout(() => {
        setWelcomeLogs((prev) => [
          ...prev,
          { id: `boot-${index}`, type: "system", content: msg },
        ]);
        if (index === BOOT_SEQUENCE.length - 1) {
          setTimeout(() => {
            setWelcomeLogs((prev) => [
              ...prev,
              {
                id: "welcome",
                type: "system",
                content: (
                  <div className="mt-8 mb-4 space-y-1">
                    <p>Welcome to the Ganath Avinash's Portfolio</p>
                    <p>Type "help" to begin.</p>
                    <p className="mt-2 text-blue-400">To launch the portfolio interface:</p>
                    <p className="text-blue-400 font-bold">gui</p>
                  </div>
                ),
              },
            ]);
            setIsBooting(false);
          }, 500);
        }
      }, delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue("");
      setHistoryIndex(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInputValue(history[history.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputValue(history[history.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue("");
      }
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    setHistory((prev) => [...prev, cmd]);

    setLogs((prev) => [
      ...prev,
      { id: `in-${Date.now()}`, type: "input", content: (
        <div className="flex gap-2">
          <span className="text-cyan-400 font-bold shrink-0">ganath:~$</span>
          <span>{cmd}</span>
        </div>
      ) },
    ]);

    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p>Available commands:</p>
            <div className="grid grid-cols-[80px_1fr] gap-x-4 max-w-md">
              <span className="text-blue-400">help</span><span>Show this help message</span>
              <span className="text-blue-400">about</span><span>About Ganath Avinash G R</span>
              <span className="text-blue-400">skills</span><span>List technical skills</span>
              <span className="text-blue-400">projects</span><span>View featured projects</span>
              <span className="text-blue-400">theme</span><span>Toggle light/dark theme</span>
              <span className="text-blue-400">clear</span><span>Clear the terminal output</span>
              <span className="text-green-400 font-bold">gui</span><span>Launch visual portfolio interface</span>
            </div>
          </div>
        );
        break;
      case "about":
        output = (
          <div className="space-y-1">
            <p className="text-xl font-bold text-white">Ganath Avinash G R</p>
            <p className="text-zinc-400">Computer Science Engineer</p>
            <p className="text-zinc-400">AI Integration Enthusiast</p>
            <p className="text-zinc-400">Full Stack Developer</p>
            <p className="text-zinc-400">IEEE Research Member</p>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="space-y-2">
            <p>Technical Skills:</p>
            <div className="pl-4 border-l-2 border-zinc-800 space-y-1">
              <p><span className="text-blue-400">AI & ML:</span> TensorFlow, PyTorch, OpenCV, LangChain</p>
              <p><span className="text-blue-400">Frontend:</span> React, Next.js, Tailwind CSS</p>
              <p><span className="text-blue-400">Backend:</span> Node.js, Express.js</p>
              <p><span className="text-blue-400">Languages:</span> Python, Java, C, JavaScript</p>
            </div>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-2">
            <p>Featured Projects:</p>
            <div className="pl-4 border-l-2 border-zinc-800 space-y-2 text-zinc-300">
              <p>- Facial Emotion Recognition</p>
              <p>- AI Interview Assistant</p>
              <p>- Smart Attendance System</p>
              <p>- Full Stack SaaS Platform</p>
              <p className="text-blue-400 italic">Type 'gui' to see detailed project cards.</p>
            </div>
          </div>
        );
        break;
      case "theme":
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        output = `Theme switched to ${newTheme} mode.`;
        break;
      case "clear":
        setLogs([]); // Only clears the commands, not the welcome boot sequence
        return;
      case "gui":
        setLogs((prev) => [
          ...prev,
          { id: `out-${Date.now()}`, type: "system", content: <span className="text-green-400">Preparing Portfolio Interface...</span> },
        ]);
        setTimeout(() => onLaunch(), 800);
        return;
      default:
        output = <span className="text-red-400">Command not found: {trimmedCmd}. Type 'help' for available commands.</span>;
    }

    setLogs((prev) => [
      ...prev,
      { id: `out-${Date.now()}`, type: "output", content: output },
    ]);
  };

  return (
    <div className="w-full max-w-4xl h-[70vh] bg-[#1e1e1e] rounded-xl shadow-2xl flex flex-col overflow-hidden text-zinc-300 font-mono text-sm sm:text-base border border-zinc-800 relative z-10">
      {/* Mac Window Header */}
      <div className="h-10 bg-[#2d2d2d] flex items-center px-4 shrink-0 border-b border-black/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-zinc-400 text-xs font-sans absolute left-1/2 -translate-x-1/2">
          Terminal
        </span>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 selection:bg-blue-500/30 selection:text-white">
        <div className="flex flex-col space-y-2">
          {/* Boot sequence always stays visible */}
          {welcomeLogs.map((log) => (
            <div key={log.id} className="leading-relaxed">
              {log.content}
            </div>
          ))}

          {/* User typed commands and outputs */}
          {logs.map((log) => (
            <div key={log.id} className="leading-relaxed">
              {log.content}
            </div>
          ))}
          
          {/* Active Input Line */}
          {!isBooting && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-cyan-400 font-bold shrink-0">ganath:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-zinc-300 w-full"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          )}
          <div ref={bottomRef} className="h-4" />
        </div>
      </div>
    </div>
  );
}
