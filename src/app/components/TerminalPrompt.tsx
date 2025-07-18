"use client";
import { useState, useRef, useEffect } from "react";

const HELP_TEXT = [
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
    <div className="bg-black text-green-400 font-mono rounded-lg w-full max-w-2xl mx-auto mt-4 shadow-lg">
      {output.map((line, idx) => (
        line === "" ? (
            <div key={idx}>&nbsp;</div>
          ) : line === "Available commands:" ? (
            <div key={idx} className="text-white whitespace-pre">{line}</div>
          ): line === "Type any command to continue..." ? (
            <div key={idx} className="text-yellow-400 whitespace-pre">{line}</div>
          ) : line.startsWith("niveditarani@portfolio:~$") ? (
            <div key={idx} className="whitespace-pre">
              <span className="text-blue-400">
                {line.slice(0, "niveditarani@portfolio:~$".length)}
              </span>
              {line.slice("niveditarani@portfolio:~$".length)}
            </div>
          ): (
            <div key={idx} className="whitespace-pre">{line}</div>
          )
      ))}
      <div className="flex items-center">
        <span className="text-blue-400">niveditarani</span>
        <span>@portfolio:~$</span>
        <input
          ref={inputRef}
          className="bg-black text-green-400 font-mono outline-none ml-2 w-full"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        {/* <span className="ml-1 animate-pulse">|</span> */}
      </div>
    </div>
  );
}