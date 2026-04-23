'use client';

import Link from 'next/link';
import { Phone, Menu, X, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneButton } from '../ui/PhoneButton';

const PHONE_NUMBER = "0470 00 00 00"; // Placeholder, can be changed easily

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navLinks = [
      { name: 'Plomberie', href: '/plomberie' },
      { name: 'Débouchage', href: '/debouchage-canalisation' },
      { name: 'Chauffage', href: '/chauffage' },
      { name: 'Gaz', href: '/gaz' },
      { name: 'Électricité', href: '/electricite' },
      { name: 'Climatisation', href: '/climatisation' },
      { name: 'Fosse', href: '/vidange-fosse-septique' },
      { name: 'Zones', href: '/zones-de-services' },
    ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/50 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo with Dripping Effect */}
          <Link 
            href="/" 
            className="relative group lg:-ml-6 xl:-ml-10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative z-10">
              <img 
                src="https://www.debouchageexpress24-24h.be/web/image/website/1/logo/Debouchage%20Express%2024H?unique=0a4877c" 
                alt="Deb PRO Services Logo" 
                className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Water Spray Animation from the Nozzle (Right side of logo) */}
            <div className="absolute top-[40%] right-[5%] w-0 h-0 pointer-events-none overflow-visible z-[-1]">
              {isMounted && [...Array(15)].map((_, i) => {
                // Generate random trajectory for each water particle
                const distanceX = Math.random() * 250 + 150; // Spray distance to the right
                const distanceY = Math.random() * 250 + 100;  // Fall distance downwards
                const arcHeight = -(Math.random() * 40 + 20); // Arc upwards before falling
                const duration = Math.random() * 1.5 + 1; // 1 to 2.5 seconds
                const delay = Math.random() * 2;
                const size = Math.random() * 4 + 2; // 2px to 6px drops
                
                return (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{ 
                      x: [0, distanceX * 0.4, distanceX],
                      y: [0, arcHeight, distanceY],
                      opacity: [0, 1, 0.8, 0],
                      scale: [0.2, 1, 0.8, 0.3],
                      rotate: [0, 45, 90]
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      delay: delay,
                      ease: "linear"
                    }}
                    className="absolute rounded-full"
                    style={{ 
                      width: size,
                      height: size * 1.5,
                      background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(59,130,246,0.7) 60%, rgba(29,78,216,0.2) 100%)",
                      boxShadow: "0 0 8px rgba(96,165,250,0.6)",
                      filter: "blur(0.5px)"
                    }}
                  />
                );
              })}
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative text-sm font-bold text-slate-300 hover:text-white transition-colors group py-2"
              >
                {/* Fire for Chauffage (Above) */}
                {isMounted && link.name === 'Chauffage' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full h-4 flex justify-center items-end pointer-events-none overflow-visible">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`fire-${i}`}
                        animate={{ 
                          y: [0, -6, -10],
                          x: [0, (Math.random() - 0.5) * 4],
                          scale: [1, 1.2, 0],
                          opacity: [0.6, 0.3, 0]
                        }}
                        transition={{
                          duration: Math.random() * 2 + 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: Math.random() * 1.5
                        }}
                        className="w-1.5 h-1.5 rounded-full absolute bottom-0 bg-gradient-to-t from-orange-500 to-red-500 blur-[1px]"
                        style={{ left: `${10 + i * 20}%` }}
                      />
                    ))}
                  </div>
                )}

                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-white">{PHONE_NUMBER}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/urgence"
                className="bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-full text-sm font-black text-white shadow-lg shadow-red-600/20 uppercase tracking-wider transition-all block"
              >
                Urgence 24h/24
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#000814]/95 backdrop-blur-2xl z-[60] md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-20 overflow-y-auto">
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-black text-blue-400 uppercase tracking-tighter">Navigation</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="bg-white/10 p-2 rounded-full border border-white/10">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-blue-600/20 transition-colors"
                    >
                      <span className="text-sm font-bold text-white uppercase tracking-tight">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 space-y-4">
                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="w-full flex items-center justify-center gap-3 bg-red-600 text-white py-5 rounded-3xl font-black text-xl shadow-xl shadow-red-600/30"
                >
                  <Phone className="w-6 h-6 fill-white" /> {PHONE_NUMBER}
                </motion.a>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/urgence"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white py-5 rounded-3xl font-black text-xl backdrop-blur-xl"
                  >
                    <AlertTriangle className="w-6 h-6 text-yellow-500" /> URGENCE 24/7
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
