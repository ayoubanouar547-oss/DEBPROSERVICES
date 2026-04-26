'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function WaterSplash() {
  const [particles, setParticles] = useState<{ id: number; startX: number; startY: number; endX: number; endY: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      // Start exactly at the new relative origin (right side of logo)
      startX: 0, 
      startY: Math.random() * 30 - 15,
      // Shoot far to the right and spread up/down
      endX: Math.random() * 400 + 50, 
      endY: (Math.random() - 0.5) * 300,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 1.2 + 0.8
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute right-0 top-1/2 mt-2 pointer-events-none overflow-visible flex items-center justify-start z-0">
      
      {/* Simulation of the 3 main water jets shooting right */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1.2, 0.8, 0], opacity: [0, 0.9, 0.5, 0], x: [0, 80, 150] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-24 h-5 rounded-[100%] bg-gradient-to-r from-blue-300 to-cyan-300 blur-[2px] origin-left -rotate-12"
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1.5, 0.5, 0], opacity: [0, 1, 0.6, 0], x: [0, 100, 180] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2, ease: "easeOut" }}
        className="absolute w-32 h-6 rounded-[100%] bg-gradient-to-r from-cyan-200 to-blue-500 blur-[3px] origin-left rotate-2"
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1.1, 0.7, 0], opacity: [0, 0.8, 0.4, 0], x: [0, 60, 110] }}
        transition={{ duration: 1.1, repeat: Infinity, delay: 0.4, ease: "easeOut" }}
        className="absolute w-20 h-4 rounded-[100%] bg-gradient-to-r from-blue-400 to-cyan-400 blur-[2px] origin-left mt-2 rotate-[15deg]"
      />

      {/* Droplets spraying right */}
      {particles.map((p) => (
        <motion.div
           key={p.id}
           initial={{ opacity: 0, x: p.startX, y: p.startY, scale: 0 }}
           animate={{
             opacity: [0, 1, 0.8, 0],
             x: [p.startX, p.startX + (p.endX - p.startX) * 0.6, p.endX],
             y: [p.startY, p.startY + (p.endY - p.startY) * 0.4, p.endY],
             scale: [0, Math.random() * 1 + 0.5, 0],
           }}
           transition={{
             duration: p.duration,
             repeat: Infinity,
             delay: p.delay,
             ease: "easeOut"
           }}
           className="absolute w-2 h-2"
        >
          <div 
            className="rounded-full bg-cyan-200 blur-[1px] shadow-[0_0_12px_rgba(103,232,249,0.8)]"
            style={{ width: p.size, height: p.size }}
          />
        </motion.div>
      ))}
    </div>
  );
}
