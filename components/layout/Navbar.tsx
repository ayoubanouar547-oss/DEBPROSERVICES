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
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isMobileMenuOpen ? 'z-[999999]' : 'z-50'} ${
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
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#000814]/95 z-[60] md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen px-6 py-8">
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-black text-blue-500 uppercase tracking-widest">Menu Principal</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="bg-white/5 p-3 rounded-full border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-2 mt-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group relative flex items-center justify-between bg-transparent border-b border-white/5 py-5 transition-colors"
                    >
                      <span className="text-2xl font-black text-slate-200 group-hover:text-blue-400 group-active:text-blue-500 tracking-tight transition-colors">
                        {link.name}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                        <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      {/* Fire for Chauffage in Mobile Menu */}
                      {isMounted && link.name === 'Chauffage' && (
                        <div className="absolute top-1/2 -translate-y-1/2 left-32 w-10 h-6 flex justify-center items-end pointer-events-none overflow-visible">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={`fire-mobile-${i}`}
                              animate={{ 
                                y: [0, -8, -15],
                                x: [0, (Math.random() - 0.5) * 6],
                                scale: [1, 1.3, 0],
                                opacity: [0.7, 0.4, 0]
                              }}
                              transition={{
                                duration: Math.random() * 2 + 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                delay: Math.random() * 1.5
                              }}
                              className="w-2 h-2 rounded-full absolute bottom-0 bg-gradient-to-t from-orange-500 to-red-500 blur-[1px]"
                              style={{ left: `${20 + i * 15}%` }}
                            />
                          ))}
                        </div>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-10 pb-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link 
                    href="/urgence"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-3 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 py-4 rounded-2xl font-black text-lg transition-colors active:bg-yellow-500/20"
                  >
                    <AlertTriangle className="w-5 h-5" /> URGENCE 24J/7
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="w-full flex items-center justify-center gap-3 bg-red-600 text-white py-4 rounded-2xl font-black text-xl shadow-lg shadow-red-600/20 active:scale-[0.98] transition-all"
                  >
                    <Phone className="w-5 h-5 fill-white" /> {PHONE_NUMBER}
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
