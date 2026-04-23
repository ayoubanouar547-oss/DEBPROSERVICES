'use client';

import { Home, Search, Phone, MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

export function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Accueil', icon: Home, href: '/' },
    { name: 'Services', icon: ShieldCheck, href: '/#services' },
    { name: 'Appeler', icon: Phone, href: 'tel:0470000000', isLarge: true },
    { name: 'Zones', icon: MapPin, href: '/zones-de-services' },
    { name: 'Urgence', icon: AlertTriangle, href: '/urgence' },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-[100]">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#000814]/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-2 flex items-center justify-between shadow-2xl"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.isLarge) {
            return (
              <a 
                key={item.name}
                href={item.href}
                className="relative -top-8 bg-red-600 p-4 rounded-full border-4 border-[#000814] shadow-xl shadow-red-600/40"
              >
                <Icon className="w-8 h-8 text-white animate-pulse" />
              </a>
            );
          }

          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex flex-col items-center justify-center p-3 rounded-2xl transition-colors relative"
            >
              <Icon className={`w-6 h-6 ${isActive ? 'text-[#1565c0]' : 'text-slate-200'}`} />
              <span className={`text-[10px] font-black mt-1 uppercase tracking-tighter ${isActive ? 'text-[#1565c0]' : 'text-slate-100 opacity-70'}`}>
                {item.name}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 w-1 h-1 bg-[#1565c0] rounded-full"
                />
              )}
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
