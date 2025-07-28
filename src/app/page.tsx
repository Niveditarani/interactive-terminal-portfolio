"use client";
import MatrixBackground from './components/MatrixBackground';
import GlitchProfilePic from './components/GlitchProfilePic';
import Menu from './components/Menu';

export default function Home() {
  return (
    <div className="h-full grid grid-cols-12 items-stretch bg-black">
      {/* Left: Glitch Profile Pic on Matrix Background */}
      <div className="hidden lg:block relative h-full col-span-4 flex items-center justify-center border-r border-green-400">
        {/* Matrix background fills the entire area */}
        <MatrixBackground />
        {/* Glitch profile pic centered and above the matrix */}
        <div className="absolute inset-0 flex h-full items-center justify-center z-10">
          <GlitchProfilePic />
        </div>
      </div>
      {/* Right: Menu Options */}
      <div className="col-span-12 md:col-span-12 lg:col-span-8 flex flex-col px-3 h-full overflow-hidden">
        <Menu />
      </div>
    </div>
  );
}