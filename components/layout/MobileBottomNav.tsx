// @ts-nocheck
'use client';

import { Home, Phone, MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', icon: Home, href: '/' },
    { name: 'Services', icon: ShieldCheck, href: '/#services' },
    { name: 'Appeler', icon: Phone, href: 'tel:0496325733', isLarge: true },
    { name: 'Zones', icon: MapPin, href: '/zones-de-services' },
    { name: 'Urgence', icon: AlertTriangle, href: '/urgence' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="md:hidden fixed bottom-2 left-2 right-2 z-[9000]">
          <motion.nav 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="bg-[#000814]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-1.5 flex items-center justify-between shadow-2xl scale-95 origin-bottom"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              if (item.isLarge) {
                return (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="relative -top-6 bg-green-600 p-3 rounded-full border-4 border-[#000814] shadow-xl shadow-green-600/40"
                  >
                    <Icon className="w-6 h-6 text-white animate-pulse" />
                  </a>
                );
              }

              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="flex flex-col items-center justify-center p-2 rounded-2xl transition-colors relative"
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-slate-200'}`} />
                  <span className={`text-[9px] font-black mt-1 uppercase tracking-tighter ${isActive ? 'text-blue-400' : 'text-slate-100 opacity-70'}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-0.5 w-1 h-1 bg-blue-400 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}
