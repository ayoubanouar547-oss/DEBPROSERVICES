'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function WaterSplash() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 200 - 100, // Variation horizontale plus large
      y: Math.random() * 200 + 50, // Variation verticale (tombe vers le bas)
      size: Math.random() * 8 + 4,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 1.5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, x: 0, y: -20, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.7, 0],
            x: [0, p.x * 0.5, p.x],
            y: [-20, -50, p.y],
            scale: [0, 1.2, 1, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut"
          }}
          className="absolute left-1/2 top-4 w-2 h-2"
        >
          <div 
            className="rounded-full bg-blue-400/60 blur-[1px] border border-white/20 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
            style={{ width: p.size, height: p.size }}
          />
        </motion.div>
      ))}
      
      {/* Jet principal continu simulé */}
      <motion.div
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.4, 0.7, 0.4],
          y: [0, 5, 0]
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-4 -translate-x-1/2 w-6 h-12 bg-gradient-to-b from-blue-500/50 to-transparent blur-md rounded-b-full origin-top"
      />
    </div>
  );
}
