"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Phone, Menu, X, AlertTriangle, ChevronDown, Moon,
  Home, Wrench, Droplets, Flame, Zap, Wind, Truck, Sun, Camera, Hammer, Sparkles, Trees, Palette 
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { WaterSplash } from "../ui/WaterSplash";
import { getAlternatePath } from "@/lib/data/translations";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");
  const pathname = usePathname();

  const isHomePage = !pathname || pathname === "/" || pathname === "/nl";
  const PHONE_NUMBER = isHomePage ? "0465 99 60 76" : "0498 35 25 88";

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
        setCurrentTheme("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(nextTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", nextTheme);
      if (nextTheme === "light") {
        document.documentElement.classList.add("light-theme");
      } else {
        document.documentElement.classList.remove("light-theme");
      }
    }
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const servicesList = isNl ? [
    { name: "Renovatie", href: "/nl/renovatie", desc: "Huis- & badkamerrenovatie op maat", icon: Home, color: "text-indigo-400" },
    { name: "Loodgieter", href: "/nl/loodgieter", desc: "Lekdetectie & sanitair herstelling", icon: Wrench, color: "text-blue-400" },
    { name: "Ontstopping", href: "/nl/ontstopping", desc: "Verstopte WC, gootsteen & riolering 24/7", icon: Droplets, color: "text-cyan-400" },
    { name: "Verwarming", href: "/nl/verwarming", desc: "Installatie & onderhoud verwarmingsketels", icon: Flame, color: "text-amber-400" },
    { name: "Gas", href: "/nl/gas", desc: "CERGA gasconformiteit & lekdetectie", icon: Flame, color: "text-orange-400" },
    { name: "Stookolietank", href: "/nl/stookolietank", desc: "Sanering, ontgassing & neutralisatie van tank", icon: Truck, color: "text-stone-400" },
    { name: "Gaz Naturel Comprimé (GNC)", href: "/nl/cng", desc: "Installatie, onderhoud & herstelling cng", icon: Flame, color: "text-emerald-500" },
    { name: "Elektriciteit", href: "/nl/elektriciteit", desc: "AREI-keuring, pannes & zekeringkasten", icon: Zap, color: "text-yellow-400" },
    { name: "Airco", href: "/nl/airco", desc: "Warmtepomp & airconditioning installaties", icon: Wind, color: "text-sky-400" },
    { name: "Putlediging", href: "/nl/putlediging", desc: "Beerput & septische put ledigen 24/7", icon: Truck, color: "text-emerald-400" },
    { name: "Zonnepanelen", href: "/nl/zonnepanelen", desc: "RESCert-zonnepanelen & thuisbatterijen", icon: Sun, color: "text-yellow-500" },
    { name: "Dakwerken", href: "/nl/dakwerken", desc: "Dakdekker voor pannen, leien & zinkwerk", icon: Home, color: "text-rose-400" },
    { name: "Camerabewaking", href: "/nl/camerabewaking", desc: "Professionele HD IP-beveiligingscamera's", icon: Camera, color: "text-violet-400" },
    { name: "Bouwwerken", href: "/nl/bouwwerken", desc: "Metselwerk, dragende muren & ruwbouw", icon: Hammer, color: "text-orange-400" },
    { name: "Ruitenwasser", href: "/nl/ruitenwasser", desc: "Streeploze ruitenwas voor huizen & winkels", icon: Sparkles, color: "text-cyan-300" },
    { name: "Tuinieren", href: "/nl/tuinieren", desc: "Tuinonderhoud, bomen vellen & hagen snoeien", icon: Trees, color: "text-emerald-400" },
    { name: "Schilderwerken", href: "/nl/schilderwerken", desc: "Binnen- & buitenschilderwerken, gevels & pleisterwerk", icon: Palette, color: "text-purple-400" }
  ] : [
    { name: "Rénovation", href: "/renovation-maison", desc: "Rénovation de maison & salle de bain", icon: Home, color: "text-indigo-400" },
    { name: "Plomberie", href: "/plomberie", desc: "Dépannage de fuites & sanitaires d'urgence", icon: Wrench, color: "text-blue-400" },
    { name: "Débouchage", href: "/debouchage-canalisation", desc: "Débouchage WC, éviers & égouts 24h/24", icon: Droplets, color: "text-cyan-400" },
    { name: "Chauffage", href: "/chauffage", desc: "Installation & entretien chaudière gaz/mazout", icon: Flame, color: "text-amber-400" },
    { name: "Gaz", href: "/gaz", desc: "Conformité CERGA & dépannage installations", icon: Flame, color: "text-orange-400" },
    { name: "Citerne Mazout", href: "/citerne-mazout-cuve", desc: "Entretien, dégazage, neutralisation & enlèvement", icon: Truck, color: "text-stone-400" },
    { name: "Gaz Naturel Comprimé (GNC)", href: "/gaz-naturel-comprime", desc: "Installation, entretien & dépannage GNC", icon: Flame, color: "text-emerald-500" },
    { name: "Électricité", href: "/electricite", desc: "Dépannage électrique urgent & mise en conformité", icon: Zap, color: "text-yellow-400" },
    { name: "Climatisation", href: "/climatisation", desc: "Installation pompe à chaleur & climatiseurs", icon: Wind, color: "text-sky-400" },
    { name: "Vidange Fosse", href: "/vidange-fosse-septique", desc: "Vidange rapide & curage de fosse septique", icon: Truck, color: "text-emerald-400" },
    { name: "Panneaux Solaires", href: "/installation-panneaux-solaires", desc: "Rendement optimal & batterie physique", icon: Sun, color: "text-yellow-500" },
    { name: "Travaux de Toiture", href: "/travaux-de-toiture", desc: "Artisan couvreur, fuites, tuiles & zinguerie", icon: Home, color: "text-rose-400" },
    { name: "Vidéosurveillance", href: "/installation-cameras-surveillance", desc: "Caméras de surveillance IP connectées", icon: Camera, color: "text-violet-400" },
    { name: "Construction & Gros Œuvre", href: "/travaux-de-construction-gros-oeuvre", desc: "Maçonnerie générale, extensions, dalles & IPN", icon: Hammer, color: "text-orange-400" },
    { name: "Nettoyage de Vitres", href: "/nettoyage-de-vitres", desc: "Lavage professionnel de vitres & vitrines", icon: Sparkles, color: "text-cyan-300" },
    { name: "Jardinage & Élagage", href: "/travaux-de-jardinage-elagage", desc: "Entretien, taille de haies & abattage d'arbres", icon: Trees, color: "text-emerald-400" },
    { name: "Peinture & Finitions", href: "/peinture", desc: "Peinture intérieure, extérieure, façade & enduisage", icon: Palette, color: "text-purple-400" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isMobileMenuOpen ? "z-[999999]" : "z-50"} ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with Dripping Effect */}
            <Link
              href="/"
              className="relative group transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative z-10 flex items-center justify-center">
                <WaterSplash />
                <Image
                  src="https://deb-pro-service.odoo.com/web/image/679-4360ef3d/PRO%20SERVICE.png"
                  alt="PRO SERVICES - Logo officiel Plomberie et Débouchage en Belgique"
                  width={240}
                  height={80}
                  className="h-16 xs:h-18 md:h-20 lg:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link
                href={isNl ? "/nl" : "/"}
                className={`text-sm font-bold transition-colors py-2 ${
                  pathname === "/" || pathname === "/nl" ? "text-blue-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {isNl ? "Home" : "Accueil"}
              </Link>

              {/* Hover Dropdown for Nos Services */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-bold transition-colors cursor-pointer outline-none ${
                    pathname !== "/" && 
                    pathname !== "/nl" &&
                    pathname !== "/zones-de-services" && 
                    pathname !== "/nl/zones-de-services" && 
                    pathname !== "/devis" && 
                    pathname !== "/nl/devis" && 
                    pathname !== "/contact" &&
                    pathname !== "/nl/contact"
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isNl ? "Onze Diensten" : "Nos Services"}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Mega Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[650px] bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl z-50 grid grid-cols-2 gap-x-6 gap-y-3"
                    >
                      {servicesList.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-start gap-3 p-2 rounded-2xl hover:bg-white/5 transition-all group"
                        >
                          <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-600/10 transition-colors flex-shrink-0 ${service.color}`}>
                            <service.icon className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href={isNl ? "/nl/zones-de-services" : "/zones-de-services"}
                className={`text-sm font-bold transition-colors py-2 ${
                  pathname === "/zones-de-services" || pathname === "/nl/zones-de-services" ? "text-blue-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {isNl ? "Interventiezones" : "Zones d'intervention"}
              </Link>

              <Link
                href={isNl ? "/nl/devis" : "/devis"}
                className={`text-sm font-bold transition-colors py-2 ${
                  pathname === "/devis" || pathname === "/nl/devis" ? "text-blue-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {isNl ? "Gratis Offerte" : "Devis Gratuit"}
              </Link>

              <Link
                href={isNl ? "/nl/contact" : "/contact"}
                className={`text-sm font-bold transition-colors py-2 ${
                  pathname === "/contact" || pathname === "/nl/contact" ? "text-blue-400" : "text-slate-300 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 h-[42px]">
                <Link
                  href={getAlternatePath(pathname || "", "fr")}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-black tracking-wider transition-all h-full flex items-center ${
                    !isNl
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  FR
                </Link>
                <Link
                  href={getAlternatePath(pathname || "", "nl")}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-black tracking-wider transition-all h-full flex items-center ${
                    isNl
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  NL
                </Link>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all focus:outline-none cursor-pointer flex items-center justify-center group"
                aria-label="Toggle Theme"
                title="Bascule de thème nuit/jour"
              >
                {currentTheme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 group-hover:rotate-45" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-500 transition-transform duration-300 group-hover:-rotate-12" />
                )}
              </button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-bold text-white">
                  {PHONE_NUMBER}
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={isNl ? "/nl/urgence" : "/urgence"}
                  className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full text-xs font-black text-white shadow-lg shadow-red-600/20 uppercase tracking-wider transition-all block"
                >
                  {isNl ? "Spoed 24/7" : "Urgence 24h/24"}
                </Link>
              </motion.div>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 h-[36px]">
                <Link
                  href={getAlternatePath(pathname || "", "fr")}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-black transition-all h-full flex items-center ${
                    !isNl
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  FR
                </Link>
                <Link
                  href={getAlternatePath(pathname || "", "nl")}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-black transition-all h-full flex items-center ${
                    isNl
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  NL
                </Link>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all focus:outline-none flex items-center justify-center"
                aria-label="Toggle Theme"
                title="Bascule de thème nuit/jour"
              >
                {currentTheme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-500" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7 text-white" />
                ) : (
                  <Menu className="w-7 h-7 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Popup */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[99999] lg:hidden flex items-center justify-center p-4">
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
              className="relative w-full max-w-[360px] max-h-[90vh] bg-slate-950 rounded-[32px] border border-white/10 overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.8)] flex flex-col z-[70]"
            >
              <div className="p-5 flex flex-col h-full overflow-hidden">
                <div className="flex justify-between items-center mb-4 flex-shrink-0">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">
                    Navigation
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-full text-slate-400 hover:text-white transition-colors"
                    aria-label="Fermer le menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Container inside Popup */}
                <div className="overflow-y-auto flex-grow pr-1 space-y-4 max-h-[60vh] scrollbar-thin scrollbar-thumb-white/10">
                  {/* General Links Grid */}
                  <div className="grid grid-cols-2 gap-2 border-b border-white/5 pb-4 flex-shrink-0">
                    <Link
                      href={isNl ? "/nl" : "/"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl py-3 text-xs font-bold text-slate-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    >
                      {isNl ? "Home" : "Accueil"}
                    </Link>
                    <Link
                      href={isNl ? "/nl/zones-de-services" : "/zones-de-services"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl py-3 text-xs font-bold text-slate-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    >
                      {isNl ? "Interventiezones" : "Zones d'intervention"}
                    </Link>
                    <Link
                      href={isNl ? "/nl/devis" : "/devis"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl py-3 text-xs font-bold text-slate-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    >
                      {isNl ? "Gratis Offerte" : "Devis Gratuit"}
                    </Link>
                    <Link
                      href={isNl ? "/nl/contact" : "/contact"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl py-3 text-xs font-bold text-slate-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    >
                      Contact
                    </Link>
                  </div>

                  {/* Services Header */}
                  <div>
                    <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 pl-1">
                      {isNl ? "Onze Spoeddiensten" : "Nos Services d'Urgence"}
                    </h5>
                    {/* Services Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {servicesList.map((service, idx) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.02 }}
                        >
                          <Link
                            href={service.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-2xl p-2.5 transition-all active:scale-95 active:bg-blue-600/15 group text-left"
                          >
                            <div className={`w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 ${service.color}`}>
                              <service.icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-[11px] font-bold text-slate-300 group-hover:text-white leading-tight">
                              {service.name}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Urgent Call & Contact CTAs */}
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-col gap-2 flex-shrink-0">
                  <Link
                    href={isNl ? "/nl/urgence" : "/urgence"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 py-2.5 rounded-xl font-bold text-xs"
                  >
                    <AlertTriangle className="w-4 h-4" /> {isNl ? "SPOED 24/7" : "URGENCE 24/7"}
                  </Link>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-red-600/20 active:scale-95 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white" /> {PHONE_NUMBER}
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
