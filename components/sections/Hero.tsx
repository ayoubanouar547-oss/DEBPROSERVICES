'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, ShieldCheck, Clock, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const SERVICES = ['Débouchage Urgence', 'Plomberie', 'Chauffagiste', 'Fuite de Gaz', 'Électricité', 'Vidange Fosse'];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [serviceIndex, setServiceIndex] = useState(0);

  // Typewriter effect logic
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((current) => (current + 1) % SERVICES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Simple particle system for the background (Water effect)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number, y: number, radius: number, vY: number, opacity: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vY: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
        p.y -= p.vY;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = window.requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-12 py-10 pt-32 min-h-[90vh] items-center">
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-blue-600/20 text-blue-400 text-[10px] font-bold px-2 py-1 rounded border border-blue-500/30 uppercase tracking-widest">✓ Disponible 24H/24</span>
          <span className="bg-green-600/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded border border-green-500/30 uppercase tracking-widest">✓ Agréés & Assurés</span>
          <span className="bg-purple-600/20 text-purple-400 text-[10px] font-bold px-2 py-1 rounded border border-purple-500/30 uppercase tracking-widest">✓ Devis Gratuit</span>
          <span className="bg-red-600/20 text-red-400 text-[10px] font-bold px-2 py-1 rounded border border-red-500/30 uppercase tracking-widest">✓ Intervention Rapide</span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            Plombier & Débouchage en Belgique <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 block mt-2 text-shiny">
              Intervention Express 24H/24
            </span>
          </h1>
          <p className="text-lg text-slate-100 mb-8 max-w-lg leading-relaxed font-medium">
            Débouchage, chauffage, gaz, électricité et fosse septique. Techniciens agréés, disponibles 7j/7 dans toute la Belgique.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-6">
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="flex-1 sm:flex-initial">
            <Link 
              href="tel:0470000000"
              className="w-full btn-luxury px-10 py-5 rounded-2xl font-black text-xl text-white flex items-center justify-center gap-3 transition-all border-b-4 border-red-950 active:border-b-0 active:translate-y-1"
            >
               <PhoneCall className="w-6 h-6 animate-pulse" />
               Appeler Maintenant
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="flex-1 sm:flex-initial">
            <Link 
              href="/devis"
              className="w-full glass-card hover:bg-white/10 px-10 py-5 rounded-2xl font-black text-xl text-white transition-all flex justify-center items-center h-full border border-white/20"
            >
               Devis Gratuit en 2 min
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-wrap gap-10">
          <div>
            <div className="text-4xl font-black text-[#1565c0]">5000+</div>
            <div className="text-[10px] text-white uppercase tracking-widest font-black mt-2 bg-[#1565c0]/20 px-2 py-0.5 rounded border border-[#1565c0]/20">Clients Satisfaits</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10 self-center"></div>
          <div>
            <div className="text-4xl font-black text-[#1565c0]">15 Ans</div>
            <div className="text-[10px] text-white uppercase tracking-widest font-black mt-2 bg-blue-600/20 px-2 py-0.5 rounded border border-blue-500/20">D'Expérience</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10 self-center"></div>
          <div>
            <div className="text-4xl font-black text-[#1565c0]">4.9/5</div>
            <div className="text-[10px] text-white uppercase tracking-widest font-black mt-2 bg-green-600/20 px-2 py-0.5 rounded border border-green-500/20">Note Avis Google</div>
          </div>
        </div>
      </div>

      {/* Trust Box area right side if needed, let's keep it minimal as in UI */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="col-span-1 lg:col-span-5 block mt-0 lg:mt-0"
      >
        <div className="relative aspect-[4/5] w-full max-w-[320px] lg:max-w-lg mx-auto flex items-end justify-center">
           {/* Decorative background glow for the Technician */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/30 blur-[100px] rounded-full -z-10"></div>
           
           {/* Technician Uploaded Image Container */}
           <div className="relative z-10 w-full h-[110%] flex items-end justify-center">
               <Image 
                 src="/technician.png" 
                 alt="Technicien DEB PRO SERVICES" 
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 priority={true}
                 className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] scale-110 md:scale-100"
               />
           </div>
        </div>
      </motion.div>
    </section>
  );
}
