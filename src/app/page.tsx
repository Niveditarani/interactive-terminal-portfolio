"use client";
import MatrixBackground from './components/MatrixBackground';
import GlitchProfilePic from './components/GlitchProfilePic';
import Menu from './components/Menu';

export default function Home() {
  return (
    <div className="h-full grid grid-cols-12 items-stretch bg-black">
      {/* Left: Glitch Profile Pic on Matrix Background */}
      <div className="relative h-full col-span-5 flex items-center justify-center border-r-1 border-green-400">
        {/* Matrix background fills the entire area */}
        <MatrixBackground />
        {/* Glitch profile pic centered and above the matrix */}
        <div className="absolute inset-0 flex h-full items-center justify-center z-10">
          <GlitchProfilePic />
        </div>
      </div>
      {/* Right: Menu Options */}
      <div className="col-span-7 flex flex-col px-6 h-full overflow-hidden">
        <Menu />
      </div>
    </div>
  );
}