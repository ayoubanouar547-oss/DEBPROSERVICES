// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie_consent');
    if (!hasConsented) {
      // Slight delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          {...({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 }
          } as any)}
        >
          <div className="fixed inset-0 z-[999999] p-4 flex items-center justify-center bg-[#000814]/80 backdrop-blur-sm">
            <motion.div 
              {...({
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                className: "max-w-xl mx-auto bg-slate-900 text-white rounded-3xl shadow-2xl p-8 border border-white/10 flex flex-col items-center text-center gap-6"
              } as any)}
            >
            <div className="flex-1">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                 <span className="text-3xl">🍪</span>
              </div>
              <h3 className="font-heading font-black text-2xl mb-3 text-white">Cookies & Confidentialité</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic de notre site et garantir le bon fonctionnement des formulaires. En continuant votre navigation, vous acceptez notre <Link href="/privacy-policy" className="text-blue-400 font-bold hover:underline">politique de confidentialité</Link>.
              </p>
            </div>
            <div className="flex w-full flex-col sm:flex-row gap-4 mt-2">
              <button 
                onClick={declineCookies}
                className="flex-1 px-6 py-3.5 rounded-xl border-2 border-white/10 text-slate-300 hover:bg-white/5 transition text-sm font-black uppercase tracking-wider"
              >
                Continuer sans accepter
              </button>
              <button 
                onClick={acceptCookies}
                className="flex-1 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white text-sm font-black shadow-lg shadow-blue-600/30 uppercase tracking-wider"
              >
                Accepter
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
}
