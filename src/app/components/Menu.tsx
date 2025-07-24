"use client";
import TerminalWelcome from "./TerminalWelcome";
import TerminalPrompt from "./TerminalPrompt";

export default function Menu() {
    const options = ["help |", "about |", "projects |", "experience |", "contact |", "clear"];
    return (
        <div className="flex flex-col h-full">
            <div className="shrink-0">
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
                className="flex-1 overflow-y-auto ml-4 overflow-x-hidden scrollbar-thin scrollbar-thumb-grey-500 scrollbar-track-black break-words whitespace-pre-wrap"
                //style={{ maxHeight: 'calc(100vh - 80px)' }} // 50px depending on header + footer height
            >
                <TerminalWelcome />
                <TerminalPrompt />
            </div>
        
        </div>
    );
  }