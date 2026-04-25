'use client';

import Link from 'next/link';
import { Phone, Menu, X, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneButton } from '../ui/PhoneButton';

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
