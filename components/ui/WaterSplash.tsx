'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  distanceX: number;
  distanceY: number;
  arcHeight: number;
  size: number;
  duration: number;
  delay: number;
}

export function WaterSplash() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles that match the user's requested animation behavior
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      distanceX: Math.random() * 600 + 300,
      distanceY: (Math.random() - 0.5) * 400,
      arcHeight: (Math.random() - 0.5) * 150 - 50,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 2 + 1.2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute top-[45%] right-[25px] w-0 h-0 pointer-events-none overflow-visible z-[-1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{ 
            x: [0, p.distanceX * 0.4, p.distanceX],
            y: [0, p.arcHeight, p.distanceY],
            opacity: [0, 1, 0.8, 0],
            scale: [0.2, 1, 0.8, 0.3],
            rotate: [0, 45, 90]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          className="absolute rounded-full"
          style={{ 
            width: p.size,
            height: p.size * 1.5,
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(0,173,239,0.7) 60%, rgba(29,78,216,0.2) 100%)",
            boxShadow: "0 0 8px rgba(0,173,239,0.6)",
            filter: "blur(0.5px)"
          }}
        />
      ))}
    </div>
  );
}
