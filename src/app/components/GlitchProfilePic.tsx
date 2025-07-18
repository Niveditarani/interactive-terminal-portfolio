"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GlitchProfilePic() {
  return (
    <div className="relative w-84 h-84 mx-auto">
      {/* Base Image (Main Layer) */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, -2, 2, -3, 3, 0],
          y: [0, 2, -2, 0],
        }}
        transition={{
          repeat: 5,
          duration: 0.8,
          ease: "linear",
        }}
        style={{ zIndex: 3 }}
      >
        <Image
          src="/profile.png"
          alt="Nivedita Rani"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg"
          priority
        />
      </motion.div>

      {/* Red Shift Layer */}
      <motion.div
        className="absolute inset-0 mix-blend-saturation"
        animate={{
          x: [0, 9, -9, 2, -2, 0],
          opacity: [0.3, 0.5, 0.2, 0.4, 0.3],
        }}
        transition={{
          repeat: 7,
          duration: 0.6,
          ease: "linear",
        }}
        style={{ zIndex: 2 }}
      >
        <Image
          src="/profile.png"
          alt="Red Channel"
          fill
          className="object-cover rounded-lg"
          style={{ filter: "drop-shadow(0 0 8px #ff005a) brightness(1.8)" }}
          priority
        />
      </motion.div>

      {/* Blue Shift Layer */}
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        animate={{
          x: [0, -8, 8, -4, 4, 0],  
          opacity: [0.3, 0.2, 0.5, 0.4, 0.3],
        }}
        transition={{
          repeat: 7,
          duration: 0.7,
          ease: "linear",
        }}
        style={{ zIndex: 1 }}
      >
        <Image
          src="/profile.png"
          alt="Blue Channel"
          fill
          className="object-cover rounded-lg"
          style={{ filter: "drop-shadow(0 0 8px #00fff9) brightness(1.2)" }}
          priority
        />
      </motion.div>

      {/* Scanlines (SVG + motion) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        animate={{ y: [0, -4, 0, 4, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
          ease: "linear",
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect y="0" width="4" height="2" fill="#000" fillOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scanlines)" />
        </svg>
      </motion.div>

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          backgroundImage: "url('/noise-texture.png')",
          mixBlendMode: "screen",
          opacity: 0.04,
        }}
      />
      {/* Layered slices with clip-path and animation */}
      {/* 1️⃣ Top 15% */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: "inset(10% 0% 75% 0%)", zIndex: 10 }}
        animate={{ x: [-4, 3, -2, 0] }}
        transition={{ repeat: 7, duration: 0.7, ease: "easeInOut" }}
      >
        <Image
          src="/profile.png"
          alt="slice-1"
          fill
          className="object-cover brightness-125"
        />
      </motion.div>

      {/* 2️⃣ 15% to 35% (20%) */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: "inset(15% 0% 65% 0%)", zIndex: 9 }}
        animate={{ x: [2, -5, 3, 0] }}
        transition={{ repeat: 7, duration: 0.9, ease: "easeInOut" }}
      >
        <Image
          src="/profile.png"
          alt="slice-2"
          fill
          className="object-cover hue-rotate-20"
        />
      </motion.div>

      {/* 3️⃣ 35% to 55% (20%) */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: "inset(35% 0% 45% 0%)", zIndex: 8 }}
        animate={{ x: [-3, 4, -2, 0] }}
        transition={{ repeat: 7, duration: 1, ease: "easeInOut" }}
      >
        <Image
          src="/profile.png"
          alt="slice-3"
          fill
          className="object-cover contrast-125"
        />
      </motion.div>

      {/* 4️⃣ 55% to 65% (10%) */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: "inset(55% 0% 35% 0%)", zIndex: 7 }}
        animate={{ x: [5, -2, 2, 0] }}
        transition={{ repeat: 7, duration: 0.6, ease: "easeInOut" }}
      >
        <Image
          src="/profile.png"
          alt="slice-4"
          fill
          className="object-cover saturate-200"
        />
      </motion.div>

      {/* 5️⃣ 65% to 80% (15%) */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: "inset(65% 0% 20% 0%)", zIndex: 6 }}
        animate={{ x: [-6, 3, -1, 0] }}
        transition={{ repeat: 7, duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src="/profile.png"
          alt="slice-5"
          fill
          className="object-cover brightness-110"
        />
      </motion.div>

      {/* 6️⃣ Bottom 20% */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: "inset(80% 0% 0% 0%)", zIndex: 5 }}
        animate={{ x: [3, -3, 1, 0] }}
        transition={{ repeat: 7, duration: 1.1, ease: "easeInOut" }}
      >
        <Image
          src="/profile.png"
          alt="slice-6"
          fill
          className="object-cover hue-rotate-90"
        />
      </motion.div>
    </div>
  );
}
