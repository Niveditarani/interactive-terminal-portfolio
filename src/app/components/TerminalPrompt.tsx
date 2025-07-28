"use client";
import { useState, useRef, useEffect } from "react";
import { ABOUT_TEXT } from "../constants/aboutContent";
import HELP_TEXT from "../constants/helpText";
import BoxSpinner from "./BoxSpinner";
import CONTACT_TEXT from "../constants/contact";
import { EXPERIENCE_TEXT } from "../constants/experience";

export default function TerminalPrompt() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const COMMANDS: Record<string, () => void> = {
    help: () => setOutput(prev => [...prev, `niveditarani@portfolio:~$ help`, ...HELP_TEXT]),
    about: () => setOutput((prev) => [
      ...prev,
      `niveditarani@portfolio:~$ about`,
      ...ABOUT_TEXT.map(line => line.startsWith("ABOUT_HIGHLIGHT:") ? line
      : line ? `ABOUT_TEXT:${line}` : ""),
    ]),
    projects: () => {setOutput(prev => [...prev, `niveditarani@portfolio:~$ projects`, "PROJECTS_LOADING"]);
      setTimeout(()=> {
        setOutput((prev)=> [...prev.slice(0, -1), "",
          "COMING_SOON: Projects section is coming soon!",
        "",
      ]);
      },800);
    },
    contact: () => setOutput((prev) => [
      ...prev,
      `niveditarani@portfolio:~$ contact`,
      ...CONTACT_TEXT.map(line => line.startsWith("CONTACT_HIGHLIGHT:") ? line
      : line ? `CONTACT_TEXT:${line}` : ""),
    ]),
    experience: () => setOutput(prev => [...prev, `niveditarani@portfolio:~$ experience`, ...EXPERIENCE_TEXT.map(line => line ? `CONTACT_TEXT:${line}` : ""),]),
    clear: () => setOutput([]),
  };
  

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight; //Scroll all the way down to the bottom of the terminal
    }
  }, [output]); // output is your array of terminal lines

  useEffect(() => {
    if (window.innerWidth > 1024) {
      inputRef.current?.focus();
    }
  }, [output]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const commandAction = COMMANDS[trimmedCmd];
  
    if (commandAction) {
      commandAction();
    } else if (trimmedCmd !== "") {
      setOutput(prev => [
        ...prev,
        `niveditarani@portfolio:~$ ${cmd}`,
        "",
        `COMMAND_NOT_FOUND: ${cmd}`,
        "",
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
      setInput("");
      e.currentTarget.blur();
    }
  };

  function parseContactLine(line: string) {
    if (line.includes("nivedita.rani19@gmail.com")) {
      const [label] = line.split("nivedita.rani19@gmail.com");
      return (
        <>
          {label}
          <a
            href="https://mail.google.com/mail/?view=cm&to=nivedita.rani19@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            nivedita.rani19@gmail.com
          </a>
        </>
      );
    }
    
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    if (urlRegex.test(line)) {
      return line.split(urlRegex).map((part, idx) =>
        urlRegex.test(part) ? (
          <a
            key={idx}
            href={part}
            className="text-blue-400 underline hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        ) : (
          <span key={idx}>{part}</span>
        )
      );
    }
  
    // Twitter handle as fallback
    if (line.includes("@memoizedMom")) {
      return (
        <>
          Twitter (X):{" "}
          <a
            href="https://twitter.com/memoizedMom"
            className="text-blue-400 underline hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            @memoizedMom
          </a>
        </>
      );
    }
  
    return line;
  }

  return (
    <div
      ref={scrollRef}
      className="bg-black font-mono w-full mx-auto mt-4 overflow-y-auto overflow-x-hidden break-words whitespace-pre-wrap pb-6"
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
                {`Command not found: ${line.replace("COMMAND_NOT_FOUND:", "").trim()}`}
                </div>
            ): line.startsWith("ABOUT_HIGHLIGHT:") ? (
                <div key={idx} className="text-yellow-400 whitespace-pre-wrap break-words snap-start">
                {line.replace("ABOUT_HIGHLIGHT:", "").trim()}
                </div>
            ) : line.startsWith("ABOUT_TEXT:") ? (
                <div key={idx} className="text-white whitespace-pre-wrap break-words snap-start">
                {line.replace("ABOUT_TEXT:", "").trim()}
                </div>
            ) : line === "PROJECTS_LOADING" ? (
                <div key={idx} className="flex items-center text-green-400 snap-start space-x-2">
                  <span><BoxSpinner /></span><span>Coming soon...</span>
                </div>
            ) : line.startsWith("COMING_SOON:") ? (
              <div key={idx} className="text-yellow-400 whitespace-pre-wrap">
                {line.replace("COMING_SOON:", "").trim()}
              </div>
            ) : line.startsWith("EXPERIENCE_TEXT:") ? (
              <div key={idx} className="text-white whitespace-pre-wrap break-words snap-start">
                {line.replace("EXPERIENCE_TEXT:", "").trim()}
              </div>
            ) : line.startsWith("CONTACT_HIGHLIGHT:") ? (
              <div key={idx} className="text-yellow-400 whitespace-pre-wrap break-words snap-start">
               {line.replace("CONTACT_HIGHLIGHT:", "").trim()}
              </div>
            ) : line.startsWith("CONTACT_TEXT:") ? (
                <div key={idx} className="text-white whitespace-pre-wrap break-words snap-start">
                 {parseContactLine(line.replace("CONTACT_TEXT:", "").trim())}
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
            {/* Show on small screens (mobile) */}
            <span className="text-blue-400 block sm:hidden">nivedita@portfolio:~$</span>

            {/* Show on medium and larger screens */}
            <span className="text-blue-400 hidden sm:block">niveditarani@portfolio:~$</span>
            <div className="relative ml-2 flex-1">
                <input
                ref={inputRef}
                className="bg-black text-white-400 font-mono outline-none w-full caret-transparent"
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