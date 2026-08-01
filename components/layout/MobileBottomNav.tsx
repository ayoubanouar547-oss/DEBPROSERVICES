"use client";

import { Home, Phone, MapPin, AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isNl = pathname ? pathname.startsWith("/nl") : false;
  const isHomePage = !pathname || pathname === "/" || pathname === "/nl";
  const phoneHref = isHomePage ? "tel:0465996076" : "tel:0498352588";

  const navItems = [
    { name: isNl ? "Home" : "Accueil", icon: Home, href: isNl ? "/nl" : "/" },
    { name: "Services", icon: ShieldCheck, href: isNl ? "/nl#services" : "/#services" },
    { name: isNl ? "Bellen" : "Appeler", icon: Phone, href: phoneHref, isLarge: true },
    { name: "Zones", icon: MapPin, href: isNl ? "/nl/zones-de-services" : "/zones-de-services" },
    { name: isNl ? "Spoed" : "Urgence", icon: AlertTriangle, href: isNl ? "/nl/urgence" : "/urgence" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="md:hidden fixed bottom-1.5 left-1/2 -translate-x-1/2 w-[92%] max-w-[350px] z-[9000]">
          <motion.nav
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="bg-[#000814]/90 backdrop-blur-2xl border border-white/15 rounded-full px-2 py-0.5 flex items-center justify-between shadow-[0_8px_25px_rgba(0,0,0,0.6)] h-11 relative"
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
                    className="relative -top-2.5 bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-500 p-2.5 rounded-full border-2 border-[#000814] shadow-md shadow-emerald-500/50 flex items-center justify-center text-white active:scale-95 transition-transform"
                  >
                    <Icon className="w-4 h-4 text-white animate-pulse" />
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center justify-center py-0.5 px-1 rounded-full transition-all relative flex-1 group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBottomNav"
                      className="absolute inset-0 bg-blue-500/20 rounded-full border border-blue-400/30"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <Icon
                    className={`w-3.5 h-3.5 relative z-10 transition-colors duration-200 ${
                      isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-white"
                    }`}
                  />
                  <span
                    className={`text-[8px] font-bold mt-0.5 tracking-tight uppercase relative z-10 transition-colors duration-200 ${
                      isActive ? "text-cyan-400 font-extrabold" : "text-slate-400 group-hover:text-white"
                    }`}
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
