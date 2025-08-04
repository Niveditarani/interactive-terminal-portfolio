"use client";
import { useEffect, useRef, useState } from "react";
import TerminalWelcome from "./TerminalWelcome";
import TerminalPrompt from "./TerminalPrompt";

export default function Menu() {
    const options = ["help |", "about |", "projects |", "experience |", "contact |", "clear"];
    const scrollRef = useRef<HTMLDivElement>(null);
    const [output, setOutput] = useState<string[]>([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, [output]);

    return (
        <div className="flex flex-col h-full">
            <div className="shrink-0 hidden md:block">
                {/* Menu options at the top */}
                <div className="flex flex-row items-start justify-start pt-4 flex-wrap">
                    {options.map(option => (
                    <span key={option} className="text-green-400 text-md font-mono px-2">
                        {option}
                    </span>
                    ))}
                </div>
                {/* Separator line */}
                <div className="w-130 h-px bg-green-400 mt-3" />
            </div>
            {/* Terminal scroll container: fills remaining space, scrolls vertically, no horizontal scroll */}
            <div
                ref={scrollRef}
                className="flex-1 scrollable-terminal overflow-y-auto lg:ml-4 overflow-x-hidden scrollbar-thin scrollbar-thumb-grey-500 scrollbar-track-black break-words whitespace-pre-wrap scroll-smooth sm:scroll-auto"
            >
                <TerminalWelcome />
                <TerminalPrompt
                input={input}
                setInput={setInput}
                output={output}
                setOutput={setOutput}
                scrollRef={scrollRef}
                />
            </div>
        
        </div>
    );
  }