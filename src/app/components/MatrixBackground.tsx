"use client";
import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      if (!canvas.parentElement) return;

      const width = canvas.parentElement.offsetWidth;
      const height = canvas.parentElement.offsetHeight;

      canvas.width = width;
      canvas.height = height;

      const columns = Math.floor(width / 20);
      dropsRef.current = new Array(columns).fill(1);
    };

    // Initial resize and listen for resize
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      const drops = dropsRef.current;

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#22c55e";
      ctx.font = "12px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "1" : "0";
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationRef.current = window.setInterval(draw, 120);

  return () => {
    window.removeEventListener("resize", setCanvasSize);
    if (animationRef.current !== null) {
      clearInterval(animationRef.current);
    }
  };
}, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
