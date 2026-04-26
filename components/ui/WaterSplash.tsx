'use client';

import { motion } from 'motion/react';

export function WaterSplash() {
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
    </div>
  );
}
