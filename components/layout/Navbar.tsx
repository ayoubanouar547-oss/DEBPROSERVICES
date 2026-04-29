'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneButton } from '../ui/PhoneButton';
import { WaterSplash } from '../ui/WaterSplash';

const PHONE_NUMBER = "0496 32 57 33"; // Placeholder, can be changed easily

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

    const navLinks = [
      { name: 'Rénovation', href: '/renovation-maison' },
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
    <>
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
            <div className="relative z-10 flex items-center justify-center">
              <WaterSplash />
              <Image 
                src="/logo.png" 
                alt="DEB PRO SERVICES - Logo officiel Plomberie et Débouchage en Belgique" 
                width={160}
                height={64}
                className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10"
                referrerPolicy="no-referrer"
                unoptimized={true}
                priority
              />
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
    </header>

    {/* Mobile Menu Popup */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[99999] md:hidden flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Popup Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[340px] bg-[#000814] rounded-[32px] border border-white/10 overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.8)] flex flex-col z-[70]"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex flex-col items-center justify-center bg-white/5 border border-white/5 rounded-2xl py-4 transition-all active:scale-95 active:bg-blue-600/20 group"
                    >
                      <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link 
                  href="/urgence"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 py-3 rounded-xl font-bold text-sm"
                >
                  <AlertTriangle className="w-4 h-4" /> URGENCE 24/7
                </Link>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-xl font-bold text-base shadow-lg shadow-red-600/20"
                >
                  <Phone className="w-4 h-4 fill-white" /> {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </>
);
}
