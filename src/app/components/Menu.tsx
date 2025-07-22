"use client";
import { useRef, useEffect } from 'react';
import TerminalWelcome from "./TerminalWelcome";
import TerminalPrompt from "./TerminalPrompt";

export default function Menu() {
    const options = ["help |", "about |", "projects |", "CV |", "contact |", "clear"];
    return (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="shrink-0">
                {/* Menu options at the top */}
                <div className="flex flex-row items-start justify-start pt-4 flex-wrap">
                    {options.map(option => (
                    <span
                        key={option}
                        className="text-green-400 text-md font-mono px-2"
                    >
                        {option}
                    </span>
                    ))}
                </div>
                {/* Separator line */}
                <div className="w-114 h-px bg-green-400 mt-3" />
            </div>
                {/* Terminal welcome message */}
                <div className="flex">
                    <TerminalWelcome />
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-green-500 overflow-x-hidden break-words">
                    {/* <TerminalWelcome /> */}
                    <TerminalPrompt />
                </div>
        
        </div>
    );
  }