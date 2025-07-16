import Image from "next/image";

export default function GlitchProfilePic() {
  return (
    <div className="relative w-48 h-48">
      <Image
        src="/profile.jpg" // Place your profile pic in public/profile.jpg
        alt="Nivedita Rani"
        fill
        className="object-cover rounded-full glitch"
        priority
      />
      {/* Add glitch effect with CSS */}
      <style jsx>{`
        .glitch {
          animation: glitch 1s infinite;
        }
        @keyframes glitch {
          0% { filter: none; }
          20% { filter: hue-rotate(10deg) blur(1px); }
          40% { filter: contrast(2) brightness(1.2); }
          60% { filter: hue-rotate(-10deg) blur(2px); }
          80% { filter: none; }
          100% { filter: none; }
        }
      `}</style>
    </div>
  );
}