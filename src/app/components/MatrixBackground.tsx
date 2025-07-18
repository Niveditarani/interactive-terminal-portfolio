"use client";
import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    // Set canvas size to parent size
    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);
  

    let width = canvas.width = 300;
    let height = canvas.height = 300;
    let columns = Math.floor(width / 20);
    let drops = Array(columns).fill(1);

    function draw() {
        if (!ctx) return; // Add this line
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "#22c55e";
        ctx.font = "6px monospace";
        for (let i = 0; i < drops.length; i++) {
          const text = Math.random() > 0.5 ? "1" : "0";
          ctx.fillText(text, i * 20, drops[i] * 20);
          if (drops[i] * 20 > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

    let interval = setInterval(draw, 50);
    return () => {
        window.removeEventListener("resize", resize);
        clearInterval(interval);
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