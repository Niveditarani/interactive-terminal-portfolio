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

const ABOUT_TEXT = [
    "",
    "I’m a full stack developer based in Copenhagen, fascinated by large-scale, high-impact products and contributed to the development of features in industry-leading services.",
    "Currently channeling my energy into open source projects that aim to make a difference.",
    "",
    "Here are some of the technologies I work with regularly:",
    "",
    "- TypeScript",
    "-JavaScript (ES6+)",
    "- React",
    "- Next.js",
    "- Node.js",
    "- Tailwind CSS",
    "- Git",
    "",
    "Beyond the code, I find joy in creating art, tending to my garden, and experimenting in the kitchen.",
    "",
    "Feel free to explore more using the 'projects', 'CV', or 'contact' commands!",
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
    } else if (cmd === "about") {
        setOutput((prev) => [...prev, `niveditarani@portfolio:~$ about`, ...ABOUT_TEXT]);
    } else if (cmd.trim().toLowerCase() === "clear") {
      setOutput([]);
    } else if (cmd.trim() !== "") {
      setOutput((prev) => [...prev, `niveditarani@portfolio:~$ ${cmd}`,"", `Command not found: ${cmd}`, ""]);
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
                <div key={idx} className="snap-start">&nbsp;</div>
            ) : line === "Available commands:" ? (
                <div key={idx} className="text-white whitespace-pre snap-start">{line}</div>
            ) : line === "Type any command to continue..." ? (
                <div key={idx} className="text-yellow-400 whitespace-pre snap-start">{line}</div>
            ) : line.startsWith("COMMAND_NOT_FOUND:") ? (
                <div key={idx} className="text-yellow-400 whitespace-pre snap-start">
                {`Command not found: ${line.replace("COMMAND_NOT_FOUND:", "")}`}
                </div>
            ) : line.startsWith("ABOUT_SECTION:") ? (
                <div key={idx} className="text-white whitespace-pre snap-start">
                {line.replace("ABOUT_SECTION:", "")}
                </div>
            ) : line.startsWith("niveditarani@portfolio:~$") ? (
                <div key={idx} className="whitespace-pre snap-start">
                <span className="text-blue-400">
                    {line.slice(0, "niveditarani@portfolio:~$".length)}
                </span>
                {line.slice("niveditarani@portfolio:~$".length)}
                </div>
            ) : (
                <div key={idx} className="whitespace-pre snap-start">{line}</div>
            )
        ))}
      <div className="flex items-center snap-start">
            <span className="text-blue-400">niveditarani@portfolio:~$</span>
            <div className="relative ml-2 flex-1">
                <input
                ref={inputRef}
                className="bg-black text-green-400 font-mono outline-none w-full caret-transparent"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                />
                <span className="absolute left-0 top-0 blinking-cursor text-green-400 font-bold pointer-events-none">
                {input}
                <span className="ml-0">█</span>
                </span>
            </div>
        </div>

    </div>
  );
}