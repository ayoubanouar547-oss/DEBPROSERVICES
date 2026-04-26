'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function WaterSplash() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 40 - 20, // Variation horizontale
      y: -Math.random() * 60 - 40, // Variation verticale (vers le haut)
      size: Math.random() * 6 + 4,
      delay: Math.random() * 2,
      duration: Math.random() * 1.5 + 1
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            x: p.x * 3,
            y: p.y * 2,
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut"
          }}
          className="absolute left-1/2 bottom-0 w-2 h-2"
        >
          <div 
            className="rounded-full bg-blue-400 blur-[1px]"
            style={{ width: p.size, height: p.size }}
          />
        </motion.div>
      ))}
      
      {/* Jet principal continu simulé */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-blue-500/40 to-transparent blur-md rounded-t-full"
      />
    </div>
  );
}
