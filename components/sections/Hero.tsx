"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall, ShieldCheck, Clock, Zap, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_FR = [
  { text: "Plomberie", gradient: "from-blue-400 to-cyan-300" },
  { text: "Débouchage", gradient: "from-blue-500 to-indigo-400" },
  { text: "Chauffage", gradient: "from-orange-500 to-red-500" },
  { text: "Gaz", gradient: "from-amber-400 to-orange-500" },
  { text: "Électricité", gradient: "from-yellow-300 to-yellow-500" },
  { text: "Climatisation", gradient: "from-sky-300 to-blue-400" },
  { text: "Ventilation VMC", gradient: "from-emerald-300 to-teal-400" },
  { text: "Caméras", gradient: "from-purple-400 to-indigo-400" },
  { text: "Panneaux Solaires", gradient: "from-amber-300 to-yellow-400" },
  { text: "Vidange Fosse", gradient: "from-cyan-400 to-blue-600" },
  { text: "Toiture", gradient: "from-slate-300 to-slate-100" },
];

const SERVICES_NL = [
  { text: "Loodgieter", gradient: "from-blue-400 to-cyan-300" },
  { text: "Ontstopping", gradient: "from-blue-500 to-indigo-400" },
  { text: "Verwarming", gradient: "from-orange-500 to-red-500" },
  { text: "Gas", gradient: "from-amber-400 to-orange-500" },
  { text: "Elektriciteit", gradient: "from-yellow-300 to-yellow-500" },
  { text: "Climatisatie", gradient: "from-sky-300 to-blue-400" },
  { text: "Ventilatie VMC", gradient: "from-emerald-300 to-teal-400" },
  { text: "Bewakingscamera's", gradient: "from-purple-400 to-indigo-400" },
  { text: "Zonnepanelen", gradient: "from-amber-300 to-yellow-400" },
  { text: "Ruiming Putten", gradient: "from-cyan-400 to-blue-600" },
  { text: "Dakbedekking", gradient: "from-slate-300 to-slate-100" },
];

export function Hero() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const currentServicesList = isNl ? SERVICES_NL : SERVICES_FR;
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((current) => (current + 1) % currentServicesList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentServicesList.length]);

  return (
    <section className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-12 py-10 pt-32 min-h-[90vh] items-center max-w-[1600px] mx-auto">
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center relative">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 sm:gap-3 mb-8"
        >
          <div className="bg-blue-900/40 text-blue-300 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-blue-500/30 uppercase tracking-widest backdrop-blur-md flex items-center shadow-lg">
            <Clock className="w-3.5 h-3.5 mr-2" /> {isNl ? "24U/24" : "24H/24"}
          </div>
          <div className="bg-emerald-900/40 text-emerald-400 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30 uppercase tracking-widest backdrop-blur-md flex items-center shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 mr-2" /> {isNl ? "Gecertificeerd & Verzekerd" : "Agréés et Assurés"}
          </div>
          <div className="bg-rose-900/40 text-rose-400 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-rose-500/30 uppercase tracking-widest backdrop-blur-md flex items-center shadow-lg">
            <Zap className="w-3.5 h-3.5 mr-2" /> {isNl ? "Snel" : "Rapide"}
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black leading-[0.95] mb-8"
          >
            <div className="text-[14vw] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] min-h-[140px] sm:min-h-[160px] flex flex-col justify-center overflow-visible py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={serviceIndex}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-y-2 sm:gap-x-4"
                >
                  <span
                    className={`bg-clip-text text-transparent bg-gradient-to-r ${currentServicesList[serviceIndex].gradient}`}
                  >
                    {currentServicesList[serviceIndex].text.toUpperCase()}
                  </span>
                  <span className="text-white opacity-90 tracking-tight">
                    {isNl ? "IN BELGIË" : "EN BELGIQUE"}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-slate-400 block mt-2 text-2xl md:text-4xl lg:text-5xl tracking-tight uppercase">
              {isNl ? "EXPRESS INTERVENTIE 24U/24" : "INTERVENTION EXPRESS 24H/24"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed font-medium"
          >
            {isNl ? (
              "De marktleider in België voor loodgieterij, ontstopping, verwarming, gas, elektriciteit, climatisatie, VMC ventilatie, bewakingscamera's, zonnepanelen, ruiming van putten, dakbedekking en renovatie. Onze gecertificeerde technici grijpen in heel België in binnen 45 minuten."
            ) : (
              "Le leader en Belgique pour la plomberie, débouchage, chauffage, gaz, électricité, climatisation, ventilation VMC, caméras de surveillance, panneaux solaires, vidange fosse septique, toiture & rénovation. Nos techniciens locaux interviennent dans toute la Belgique en moins de 45 minutes."
            )}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 pt-6"
        >
          <div className="flex-1 sm:flex-initial">
            <Link
              href="tel:0498352588"
              className="group relative w-full px-8 py-5 rounded-2xl font-black text-xl text-white flex items-center justify-center gap-3 transition-all overflow-hidden bg-gradient-to-br from-red-600 to-rose-700 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_-10px_rgba(220,38,38,0.7)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[bg-shift_2s_linear_infinite]" />
              <PhoneCall className="w-6 h-6 animate-pulse relative z-10" />
              <span className="relative z-10 tracking-wide">0498 35 25 88</span>
            </Link>
          </div>
          <div className="flex-1 sm:flex-initial">
            <Link
              href={isNl ? "/nl/devis" : "/devis"}
              className="w-full glass-card hover:bg-white/10 px-8 py-5 rounded-2xl font-black text-xl text-white transition-all flex justify-center items-center h-full border border-white/20 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Target className="w-5 h-5 mr-3 text-cyan-400" />
              {isNl ? "Gratis Offerte" : "Devis Gratuit"}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center gap-8 md:gap-12"
        >
          <div className="flex flex-col">
            <div className="text-3xl md:text-5xl font-black text-white tracking-tighter drop-shadow-lg">
              5000<span className="text-blue-500">+</span>
            </div>
            <div className="text-[10px] text-blue-200 uppercase tracking-widest font-black mt-2">
              {isNl ? "Tevreden Klanten" : "Clients Satisfaits"}
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="flex flex-col">
            <div className="text-3xl md:text-5xl font-black text-white tracking-tighter drop-shadow-lg">
              15<span className="text-blue-500"> {isNl ? "Jaar" : "Ans"}</span>
            </div>
            <div className="text-[10px] text-blue-200 uppercase tracking-widest font-black mt-2">
              {isNl ? "Ervaring" : "D'Expérience"}
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="flex flex-col">
            <div className="text-3xl md:text-5xl font-black text-white tracking-tighter flex items-center gap-2 drop-shadow-lg">
              4.9<span className="text-blue-500 text-2xl">/5</span>
            </div>
            <div className="text-[10px] text-blue-200 uppercase tracking-widest font-black mt-2 flex items-center">
              {isNl ? "Google Reviews" : "Google Avis"}
              <div className="flex ml-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400 drop-shadow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Image Side */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="col-span-1 lg:col-span-5 flex items-center justify-center mt-12 lg:mt-0 relative"
      >
        <div className="relative aspect-[4/5] w-full max-w-[320px] lg:max-w-xl mx-auto flex items-end justify-center group">
          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-cyan-500/30" />
          <div className="absolute top-1/4 right-0 w-32 h-32 bg-cyan-400/30 rounded-full blur-[50px]" />
          <div className="absolute bottom-1/4 left-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-[50px]" />

          <div className="relative z-10 w-full h-[120%] flex items-end justify-center transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-4">
            <Image
              src="https://debouchageexpress24hh.odoo.com/web/image/4154-71fb4457/technician%20%282%29.webp"
              alt={isNl ? "Gekwalificeerde DEB PRO SERVICES technicus klaar voor een dringende interventie" : "Technicien qualifié DEB PRO SERVICES prêt pour une intervention urgente"}
              fill
              referrerPolicy="no-referrer"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 450px, 550px"
              priority={true}
              quality={80}
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-110 saturate-110"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

