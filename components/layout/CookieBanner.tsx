'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pb-8"
        >
          <div className="max-w-4xl mx-auto bg-dark text-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-heading font-bold text-xl mb-2">Cookies & Confidentialité</h3>
              <p className="text-gray-300 text-sm">
                Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic de notre site et garantir le bon fonctionnement des formulaires. En continuant votre navigation, vous acceptez notre <Link href="/privacy-policy" className="text-secondary hover:underline">politique de confidentialité</Link>.
              </p>
            </div>
            <div className="flex shrink-0 flex-col sm:flex-row w-full sm:w-auto gap-3">
              <button 
                onClick={declineCookies}
                className="px-6 py-2.5 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10 transition text-sm font-bold"
              >
                Refuser
              </button>
              <button 
                onClick={acceptCookies}
                className="px-6 py-2.5 rounded-lg bg-primary hover:bg-white hover:text-primary transition text-white text-sm font-bold shadow-lg"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
