'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function WaterSplash() {
  const [particles, setParticles] = useState<{ id: number; startX: number; endX: number; endY: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      // Random start x position across the logo width (approx)
      startX: Math.random() * 200 - 100, 
      // End x position (spreads out further)
      endX: Math.random() * 400 - 200,
      // End y position (shoots upwards)
      endY: -(Math.random() * 150 + 50),
      size: Math.random() * 6 + 2,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1.5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center">
      {particles.map((p) => (
        <motion.div
           key={p.id}
           initial={{ opacity: 0, x: p.startX, y: 10, scale: 0 }}
           animate={{
             opacity: [0, 1, 0.8, 0],
             x: [p.startX, p.startX + (p.endX - p.startX) * 0.5, p.endX],
             y: [10, p.endY * 0.5, p.endY],
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
            className="rounded-full bg-blue-300/80 blur-[0.5px] shadow-[0_0_8px_rgba(96,165,250,0.8)]"
            style={{ width: p.size, height: p.size }}
          />
        </motion.div>
      ))}
    </div>
  );
}
