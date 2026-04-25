'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

const SERVICES = [
  { text: 'Plomberie', gradient: 'from-blue-400 to-cyan-300' },
  { text: 'Débouchage', gradient: 'from-blue-500 to-indigo-400' },
  { text: 'Chauffage', gradient: 'from-orange-500 to-red-500' },
  { text: 'Gaz', gradient: 'from-amber-400 to-orange-500' },
  { text: 'Électricité', gradient: 'from-yellow-300 to-yellow-500' },
  { text: 'Climatisation', gradient: 'from-sky-300 to-blue-400' }
];

export function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(SERVICES[0].text.toUpperCase());
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentService = SERVICES[serviceIndex].text.toUpperCase();

    if (!isDeleting) {
      if (displayedText.length < currentService.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentService.substring(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setServiceIndex((current) => (current + 1) % SERVICES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, serviceIndex]);

  return (
    <section className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-16 py-10 pt-40 min-h-screen items-center overflow-hidden">
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
        {/* Badges system from video */}
        <div className="flex flex-wrap gap-2 mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 bg-blue-900/40 backdrop-blur-md border border-blue-500/30 px-4 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">Disponible 24H/24</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 bg-green-900/40 backdrop-blur-md border border-green-500/30 px-4 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-100">Agréés & Assurés</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 bg-purple-900/40 backdrop-blur-md border border-purple-500/30 px-4 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-100">Devis Gratuit</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 bg-red-900/40 backdrop-blur-md border border-red-500/30 px-4 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-100">Intervention Rapide</span>
          </motion.div>
        </div>
        
        <div className="space-y-6">
          <h1 className="font-oswald font-black leading-[0.9] mb-8 lg:text-left text-center">
            <div className="text-6xl md:text-8xl lg:text-[110px] tracking-tighter uppercase mb-2">
              <motion.span 
                 key={serviceIndex}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 className="block"
              >
                {displayedText}
              </motion.span>
              <span className="text-white block mt-2">EN BELGIQUE</span>
            </div>
            <div className="flex items-center gap-4 lg:justify-start justify-center mt-6">
               <div className="h-1 lg:w-24 w-12 bg-blue-500 rounded-full"></div>
               <span className="text-2xl md:text-4xl text-blue-400 font-black uppercase tracking-widest">
                 Intervention Express 24H/24
               </span>
            </div>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium lg:text-left text-center mx-auto lg:mx-0">
            Débouchage, plomberie, chauffage, gaz, électricité et fosse septique. Nos techniciens certifiés interviennent <span className="text-white">partout en Belgique</span> jour et nuit.
          </p>
        </div>

        {/* CTA Buttons - Matching exactly the video style */}
        <div className="flex flex-col sm:flex-row gap-6 pt-10 lg:justify-start justify-center">
          <Link 
            href="tel:0496325733"
            className="group relative bg-[#CC1F1F] hover:bg-[#E52D2D] text-white font-black px-12 py-7 rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 shadow-[0_20px_50px_rgba(204,31,31,0.4)] hover:scale-105 active:scale-95 border-b-4 border-[#8B1515]"
          >
             <PhoneCall className="w-8 h-8 animate-pulse" />
             <span className="text-2xl uppercase tracking-tighter">Appeler Maintenant</span>
          </Link>
          <Link 
            href="/devis"
            className="group relative bg-[#0D1F4C] hover:bg-[#162D6D] text-white font-black px-12 py-7 rounded-2xl flex items-center justify-center transition-all duration-300 border border-white/10 shadow-[0_20px_50px_rgba(13,31,76,0.5)] hover:scale-105 active:scale-95"
          >
             <span className="text-2xl uppercase tracking-tighter">Devis Gratuit en 2 min</span>
          </Link>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-5 relative lg:block hidden">
        <div className="relative aspect-[4/5] w-full flex items-end justify-center">
           {/* Stronger glow effect behind technician */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[180px] rounded-full"></div>
           
           <motion.div 
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative z-10 w-[120%] h-[120%] flex items-end justify-center pointer-events-none"
           >
                <Image 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200" 
                  alt="Technicien Professional" 
                  fill
                  sizes="40vw"
                  priority={true}
                  className="object-contain object-bottom drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] filter brightness-110 contrast-110"
                />
                
                {/* Floating labels for credibility */}
                <div className="absolute top-[20%] -right-10 bg-[#FFD600] text-black px-6 py-3 rounded-2xl font-black rotate-12 shadow-2xl animate-float">
                  AGRÉÉ BELGIQUE
                </div>
                <div className="absolute bottom-[40%] -left-10 bg-blue-500 text-white px-6 py-3 rounded-2xl font-black -rotate-6 shadow-2xl animate-float animation-delay-2000">
                  ASSURANCE TOUS RISQUES
                </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
