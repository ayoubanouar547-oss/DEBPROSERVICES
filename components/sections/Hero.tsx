'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const [displayedText, setDisplayedText] = useState(SERVICES[0].text.toUpperCase() + ' EN BELGIQUE');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic - optimized to not start from empty
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentService = SERVICES[serviceIndex].text.toUpperCase();
    const fullText = currentService + ' EN BELGIQUE';

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        // Typing phase
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }, 90); // Normal typing speed
      } else {
        // Finished typing, pause for 3 seconds
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    } else {
      // Deleting phase
      timer = setTimeout(() => {
        setDisplayedText('');
        setIsDeleting(false);
        setServiceIndex((current) => (current + 1) % SERVICES.length);
      }, 500); 
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, serviceIndex]);

  return (
    <section className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-12 py-10 pt-32 min-h-[90vh] items-center">
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 mb-8">
          <motion.span 
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(37, 99, 235, 0.4)' }}
            className="bg-blue-600/20 text-blue-400 text-[9px] sm:text-[11px] font-bold px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full border border-blue-500/40 uppercase tracking-widest cursor-default shadow-[0_0_15px_rgba(37,99,235,0.3)] text-center flex items-center justify-center"
          >
            ✓ Disponible 24H/24
          </motion.span>
          <motion.span 
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(22, 163, 74, 0.4)' }}
            className="bg-green-600/20 text-green-400 text-[9px] sm:text-[11px] font-bold px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full border border-green-500/40 uppercase tracking-widest cursor-default shadow-[0_0_15px_rgba(22,163,74,0.3)] text-center flex items-center justify-center"
          >
            ✓ Agréés & Assurés
          </motion.span>
          <motion.span 
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.4)' }}
            className="bg-purple-600/20 text-purple-400 text-[9px] sm:text-[11px] font-bold px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full border border-purple-500/40 uppercase tracking-widest cursor-default shadow-[0_0_15px_rgba(147,51,234,0.3)] text-center flex items-center justify-center"
          >
            ✓ Devis Gratuit
          </motion.span>
          <motion.span 
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(220, 38, 38, 0.4)' }}
            className="bg-red-600/20 text-red-400 text-[9px] sm:text-[11px] font-bold px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full border border-red-500/40 uppercase tracking-widest cursor-default shadow-[0_0_15px_rgba(220,38,38,0.3)] text-center flex items-center justify-center"
          >
            ✓ Intervention Rapide
          </motion.span>
        </div>
        
        <div className="space-y-4">
          <h1 className="font-black leading-tight mb-8">
            <div className="text-[15vw] sm:text-4xl md:text-5xl lg:text-7xl min-h-[220px] sm:min-h-[140px] flex flex-col justify-center">
              <motion.div 
                 className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-4 relative overflow-visible"
                 animate={
                   isDeleting 
                     ? { opacity: 0, y: -20, scale: 0.95, filter: 'blur(10px)' } 
                     : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
                 }
                 transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className={`bg-clip-text text-transparent bg-gradient-to-r ${SERVICES[serviceIndex].gradient} block sm:inline leading-[0.9]`}>
                  {displayedText.substring(0, SERVICES[serviceIndex].text.length)}
                </div>
                <div className="text-white opacity-90 block sm:inline leading-[0.9] sm:whitespace-nowrap">
                  {displayedText.substring(SERVICES[serviceIndex].text.length)}
                </div>
              </motion.div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 block mt-2 text-3xl md:text-4xl lg:text-5xl text-shiny">
              Intervention Express 24H/24
            </span>
          </h1>
          <p className="text-lg text-slate-100 mb-8 max-w-lg leading-relaxed font-medium">
            Débouchage, chauffage, gaz, électricité et fosse septique. Techniciens agréés, disponibles 7j/7 dans toute la Belgique.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-6">
          <div className="flex-1 sm:flex-initial">
             {/* Removed whileHover/whileTap to reduce JS TBT on mobile, kept purely CSS or lightweight */}
            <Link 
              href="tel:0496325733"
              className="w-full btn-luxury px-10 py-5 rounded-2xl font-black text-xl text-white flex items-center justify-center gap-3 transition-all border-b-4 border-red-950 active:border-b-0 active:translate-y-1 hover:scale-105"
            >
               <PhoneCall className="w-6 h-6 animate-pulse" />
               Appeler Maintenant
            </Link>
          </div>
          <div className="flex-1 sm:flex-initial">
            <Link 
              href="/devis"
              className="w-full glass-card hover:bg-white/10 px-10 py-5 rounded-2xl font-black text-xl text-white transition-all flex justify-center items-center h-full border border-white/20 hover:scale-105"
            >
               Devis Gratuit en 2 min
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-10">
          <div className="flex flex-col justify-center">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">5000+</div>
            <div className="text-[10px] text-blue-200 uppercase tracking-widest font-black mt-2 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Clients Satisfaits</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10 self-center"></div>
          <div className="flex flex-col justify-center">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">15 Ans</div>
            <div className="text-[10px] text-blue-200 uppercase tracking-widest font-black mt-2 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">D'Expérience</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10 self-center"></div>
          <div className="flex flex-col justify-center">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 flex items-center gap-3">
              4.9/5
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="text-[10px] text-blue-200 uppercase tracking-widest font-black mt-2 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Note Avis Google</div>
          </div>
        </div>
      </div>

      {/* Trust Box area right side if needed, let's keep it minimal as in UI */}
      <div className="col-span-1 lg:col-span-5 block mt-0 lg:mt-0">
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
      </div>
    </section>
  );
}
