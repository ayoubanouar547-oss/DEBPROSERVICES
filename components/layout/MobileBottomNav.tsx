"use client";

import { Home, Phone, MapPin, AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Removed scroll dependency to make it persistent from start as per user request for "always loaded" feel
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { name: "Accueil", icon: Home, href: "/" },
    { name: "Services", icon: ShieldCheck, href: "/#services" },
    { name: "Appeler", icon: Phone, href: "tel:0498 35 25 88", isLarge: true },
    { name: "Zones", icon: MapPin, href: "/zones-de-services" },
    { name: "Urgence", icon: AlertTriangle, href: "/urgence" },
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
                    aria-label={item.name}
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
                  className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl transition-all relative flex-1 group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-blue-500/10 rounded-2xl border border-blue-500/20"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <Icon
                    className={`w-5 h-5 relative z-10 transition-colors duration-300 ${isActive ? "text-blue-400" : "text-slate-400 group-hover:text-white"}`}
                  />
                  <span
                    className={`text-[9px] font-bold mt-1 uppercase tracking-tighter relative z-10 transition-colors duration-300 ${isActive ? "text-blue-400" : "text-slate-400 group-hover:text-white"}`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}
