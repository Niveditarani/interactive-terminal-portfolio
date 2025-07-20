"use client";
import { useState, useRef, useEffect } from "react";

const HELP_TEXT = [
  "",
  "Available commands:",
  "about         - Learn about me",
  "projects      - Yeah! I've made some cool stuff. View my projects.",
  "CV            - Check out my CV",
  "contact       - How to reach me",
  "clear         - Clear the terminal",
  "",
  "Type any command to continue...",
  "",
];

export default function TerminalPrompt() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [output]); // output is your array of terminal lines

  useEffect(() => {
    inputRef.current?.focus();
  }, [output]);

  const handleCommand = (cmd: string) => {
    if (cmd.trim().toLowerCase() === "help") {
      setOutput((prev) => [...prev, `niveditarani@portfolio:~$ help`, ...HELP_TEXT]);
    } else if (cmd.trim().toLowerCase() === "clear") {
      setOutput([]);
    } else if (cmd.trim() !== "") {
      setOutput((prev) => [...prev, `niveditarani@portfolio:~$ ${cmd}`, `Command not found: ${cmd}`]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div
      ref={scrollRef}
      className="bg-black text-green-400 font-mono rounded-lg w-full mx-auto mt-4 shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-black snap-y snap-mandatory h-80"
    >
      {output.map((line, idx) => (
        line === "" ? (
            <div key={idx} className="snap-start h-3">&nbsp;</div>
          ) : line === "Available commands:" ? (
            <div key={idx} className="text-white whitespace-pre snap-start">{line}</div>
          ): line === "Type any command to continue..." ? (
            <div key={idx} className="text-yellow-400 whitespace-pre snap-start">{line}</div>
          ) : line.startsWith("niveditarani@portfolio:~$") ? (
            <div key={idx} className="whitespace-pre snap-start">
              <span className="text-blue-400">
                {line.slice(0, "niveditarani@portfolio:~$".length)}
              </span>
              {line.slice("niveditarani@portfolio:~$".length)}
            </div>
          ): (
            <div key={idx} className="whitespace-pre snap-start">{line}</div>
          )
      ))}
      <div className="flex items-center snap-start">
            <span className="text-blue-400">niveditarani@portfolio:~$</span>
            <div className="flex items-center ml-2">
                <span className="text-green-400 font-mono">
                {input}
                <span className="animate-blink font-bold">█</span>
                </span>

                {/* Hidden real input though not ideal from accessibility issue. Fix this! */}
                <input
                ref={inputRef}
                className="absolute opacity-0 w-0 h-0"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                />
            </div>
        </div>
    </div>
  );
}