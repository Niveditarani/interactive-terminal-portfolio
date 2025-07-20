export default function TerminalWelcome() {
    return (
      <div className="bg-black text-green-400 font-mono rounded-lg pt-4 shadow-lg w-full mx-auto mt-3">
        <div className="flex items-center">
          <span className="text-blue-400">niveditarani@portfolio:~$</span>
          <span className="ml-2 text-green-400">welcome</span>
        </div>
        <div className="mt-2 text-white">
          Hi, I'm Nivedita Rani, a Software Engineer.
        </div>
        <div className="mt-2 text-green-400">
          Welcome to my interactive portfolio terminal!
        </div>
        <div className="mt-2 text-yellow-400">
          Type <span className="font-bold">'help'</span> to see available commands.
        </div>
      </div>
    );
  }