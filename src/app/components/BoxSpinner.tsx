"use client";
import { motion } from "framer-motion";

const spinnerSize = 10;

export default function BoxSpinner() {
  const path = [
    { x: 0, y: 0 }, // bottom-left
    { x: 0, y: -spinnerSize }, // top-left
    { x: spinnerSize, y: -spinnerSize }, // top-right
    { x: spinnerSize, y: 0 }, // bottom-right
    { x: 0, y: 0 }, // loop back to bottom-left
  ];
  return (
    <div className="h-[8px] w-[8px] relative mt-2 mr-2">
      {[0, 1, 2].map((dotIndex) => (
        <motion.div
          key={dotIndex}
          className="w-1 h-1 rounded-full bg-green-400 absolute"
          animate={{
            x: path.map(p => p.x),
            y: path.map(p => p.y),
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: dotIndex * 0.2, // Staggered start
          }}
        />
      ))}
    </div>
  );
}
