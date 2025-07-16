"use client";
import Terminal from './components/Terminal';
import MatrixBackground from './components/MatrixBackground';
import GlitchProfilePic from './components/GlitchProfilePic';
import Menu from './components/Menu';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
    {/* Left Section: Profile Pic with Glitch and Matrix Effect */}
    <div className="w-1/2 flex items-center justify-center relative">
      {/* Matrix effect */}
      <MatrixBackground />
      {/* Glitch profile pic */}
      <GlitchProfilePic />
    </div>
    {/* Right Section: Menu */}
    <div className="w-1/2 flex flex-col items-start justify-center px-12">
      <Menu />
    </div>
  </main>
  );
}