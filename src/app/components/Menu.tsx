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
                <nav className="flex flex-row items-start justify-start pt-4 flex-wrap">
                    {options.map(option => (
                    <button
                        key={option}
                        className="text-green-400 text-md font-mono px-2"
                    >
                        {option}
                    </button>
                    ))}
                </nav>
                {/* Separator line */}
                <div className="w-114 h-px bg-green-400 mt-3" />
            </div>
                {/* Terminal welcome message */}
                {/* <div className="flex">
                    <TerminalWelcome />
                </div> */}
                <div className="flex flex-col overflow-y-auto flex-1 scrollbar-thin scrollbar-track-black scrollbar-thumb-green-500 pr-2">
                    <TerminalWelcome />
                    <TerminalPrompt />
                </div>
        
        </div>
    );
  }