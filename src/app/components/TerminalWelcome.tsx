"use client";
export default function TerminalWelcome() {
    return (
      <section
      aria-labelledby="seo-intro" className="bg-black font-mono pt-4 w-full mx-auto mt-3">
        <div className="flex items-center">
          {/* Show on small screens (mobile) */}
          <span className="text-blue-400 block sm:hidden">nivedita@portfolio:~$</span>

          {/* Show on medium and larger screens */}
          <span className="text-blue-400 hidden sm:block">niveditarani@portfolio:~$</span>
          <span className="ml-2 text-green-400">welcome</span>
        </div>
        <p className="mt-2 text-white">
          Hi, I'm Nivedita Rani, a full stack developer based in Copenhagen. I enjoy crafting delightful UI, pragmatic APIs and production-ready systems using Next.js + TypeScript.
        </p>
          <h3 className="text-lg font-semibold text-green-200 mt-2 mb-2">Skills:</h3>
          <ul className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-green-300">
            <li>React, Next.js, App Router</li>
            <li>TypeScript, JavaScript</li>
            <li>HTML5, CSS3, TailwindCSS</li>
            <li>Node.js, REST APIs</li>
            <li>UX, Accessibility (a11y)</li>
            <li>Performance, SEO</li>
          </ul>

        <p className="mt-2 text-green-400">
          Welcome to my interactive portfolio terminal!
        </p>
        <p className="mt-2 text-yellow-400">
          Type <span className="font-bold">&apos;help&apos;</span> to see available commands.
        </p>     
        </section>
    );
  }