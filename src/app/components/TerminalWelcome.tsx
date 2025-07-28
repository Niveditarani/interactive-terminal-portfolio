"use client";
export default function TerminalWelcome() {
    return (
      <div className="bg-black font-mono pt-4 w-full mx-auto mt-3">
        <div className="flex items-center">
          {/* Show on small screens (mobile) */}
          <span className="text-blue-400 block sm:hidden">nivedita@portfolio:~$</span>

          {/* Show on medium and larger screens */}
          <span className="text-blue-400 hidden sm:block">niveditarani@portfolio:~$</span>
          <span className="ml-2 text-green-400">welcome</span>
        </div>
        <p className="mt-2 text-white">
          Hi, I'm Nivedita Rani, a Software Engineer.
        </p>
        <p className="mt-2 text-green-400">
          Welcome to my interactive portfolio terminal!
        </p>
        <p className="mt-2 text-yellow-400">
          Type <span className="font-bold">&apos;help&apos;</span> to see available commands.
        </p>
      </div>
    );
  }