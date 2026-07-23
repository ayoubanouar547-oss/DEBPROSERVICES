"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { MapPin, ChevronRight, Search, X, Globe, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { belgianCities } from "@/lib/data/cities";
import { services } from "@/lib/data/services";
import { dutchServices } from "@/lib/data/translations";
import { CoverageMap } from "@/components/sections/CoverageMap";

export default function ZonesDeServicesClient({ isNl = false }: { isNl?: boolean }) {
  const [searchTerm, setSearchTerm] = useState("");

  const displayServices = useMemo(() => {
    if (!isNl) return services;
    return dutchServices.map(ds => {
      const original = services.find(s => s.id === ds.id);
      return {
        ...ds,
        icon: original?.icon || MapPin,
        color: original?.color || { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30", glow: "bg-blue-500" }
      };
    });
  }, [isNl]);

  const [activeService, setActiveService] = useState<string | null>(
    displayServices[0]?.slug || null,
  );

  useEffect(() => {
    if (searchTerm) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveService(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20% 0px -60% 0px" },
    );

    displayServices.forEach((service) => {
      const element = document.getElementById(service.slug);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [searchTerm, displayServices]);

  const sortedProvinces = useMemo(() => {
    return Array.from(new Set(belgianCities.map((c) => c.province))).sort();
  }, []);

  const citiesByProvince = useMemo(() => {
    return sortedProvinces.reduce(
      (acc, province) => {
        acc[province] = belgianCities
          .filter((c) => c.province === province)
          .sort((a, b) => a.name.localeCompare(b.name));
        return acc;
      },
      {} as Record<string, typeof belgianCities>,
    );
  }, [sortedProvinces]);

  const majorCities = useMemo(
    () => ["bruxelles", "antwerpen", "gent", "charleroi", "liege"],
    [],
  );

  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return displayServices;

    return displayServices.filter((service) => {
      const cityMatch = belgianCities.some(
        (city) =>
          city.name.toLowerCase().includes(term) ||
          city.province.toLowerCase().includes(term),
      );
      return service.title.toLowerCase().includes(term) || cityMatch;
    });
  }, [searchTerm, displayServices]);

  const searchResults = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return null;

    return belgianCities.filter(
      (city) =>
        city.name.toLowerCase().includes(term) ||
        city.province.toLowerCase().includes(term),
    );
  }, [searchTerm]);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href={isNl ? "/nl" : "/"} className="hover:text-blue-400 transition-colors">
              {isNl ? "Home" : "Accueil"}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">
              {isNl ? "Interventiezones" : "Zones de Services"}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tight uppercase">
                {isNl ? "Interventiezones" : "Zones d'Intervention"} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {isNl ? "over heel België" : "sur toute la Belgique"}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium">
                {isNl
                  ? "Onze noodteams zijn strategisch verspreid om een interventie binnen 30 minuten, 24u/24 en 7j/7 te garanderen."
                  : "Nos équipes d'urgence sont déployées stratégiquement pour garantir une intervention en moins de 30 minutes, 24h/24 et 7j/7."}
              </p>
            </div>

            <div className="relative max-w-xl mx-auto lg:mx-0 w-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500"></div>
              <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-2 flex items-center gap-4">
                <Search className="w-6 h-6 ml-4 text-slate-500" />
                <input
                  type="text"
                  aria-label={isNl ? "Zoek een stad, provincie of service" : "Rechercher une ville, province ou service"}
                  placeholder={isNl ? "Zoek een stad, provincie of service..." : "Rechercher une ville, province ou service..."}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-lg text-white placeholder-slate-500 py-3"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="p-2 hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {!searchTerm && (
        <section className="py-16 relative z-10 bg-slate-950/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-400 border border-blue-500/20 mb-4">
                <MapPin className="w-3.5 h-3.5 animate-pulse" /> {isNl ? "Nationaal werkgebied" : "Rayon d'activité national"}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                {isNl ? "Interactieve Kaart van onze interventies" : "Carte Interactive de nos interventions"}
              </h2>
              <p className="text-slate-300 max-w-2xl font-medium text-sm md:text-base leading-relaxed">
                {isNl
                  ? "Onze loodgieters, verwarmingsmonteurs, ontstoppingsteams en ruimtechnici zijn 24u/24 actief. Selecteer uw regio hieronder om direct contact op te nemen met een erkende technicus bij u in de buurt."
                  : "Nos équipes de plombiers, chauffagistes, déboucheurs de garde et techniciens en vidange circulent 24h/24. Sélectionnez votre zone ci-dessous pour joindre immédiatement un technicien agréé près de chez vous."}
              </p>
            </div>
            <CoverageMap />
          </div>
        </section>
      )}

      <section className="py-24 relative z-10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {!searchTerm ? (
              <div className="flex flex-col xl:flex-row gap-16">
                {/* Fixed Mobile Navigation */}
                <nav className="xl:hidden sticky top-[80px] z-30 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 -mx-4 sm:-mx-6 px-4 py-4 mb-8 overflow-x-auto no-scrollbar flex items-center gap-3">
                  {displayServices.map((service) => (
                    <button
                      key={`mob-nav-${service.slug}`}
                      onClick={() =>
                        document
                          .getElementById(service.slug)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                        activeService === service.slug
                          ? `${service.color.border} ${service.color.bg} ${service.color.text} shadow-lg shadow-blue-500/10`
                          : "border-white/5 text-slate-500 bg-white/5"
                      }`}
                    >
                      <service.icon className="w-3.5 h-3.5" />
                      {service.title}
                    </button>
                  ))}
                </nav>

                {/* Sticky Navigation (Desktop Sidebar) */}
                <aside className="hidden xl:block w-72 shrink-0">
                  <div className="sticky top-32 space-y-3">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] mb-6">
                      <div className="flex items-center gap-3 text-blue-400 mb-4">
                        <Menu className="w-5 h-5" />
                        <span className="text-xs font-black uppercase tracking-[0.2em]">
                          {isNl ? "Navigatie" : "Navigation"}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {isNl ? "Onze diensten per regio" : "Nos métiers par zones"}
                      </h3>
                    </div>

                    {displayServices.map((service) => (
                      <button
                        key={`nav-${service.slug}`}
                        onClick={() =>
                          document
                            .getElementById(service.slug)
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group ${
                          activeService === service.slug
                            ? `${service.color.border} ${service.color.bg} ${service.color.text} shadow-xl shadow-blue-500/10 translate-x-2`
                            : "border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2 rounded-xl transition-colors ${activeService === service.slug ? "bg-white/10" : "bg-slate-800"}`}
                          >
                            <service.icon className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-sm tracking-tight">
                            {service.title}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${activeService === service.slug ? "translate-x-1 opacity-100" : "opacity-0"}`}
                        />
                      </button>
                    ))}
                  </div>
                </aside>

                <div className="flex-1 space-y-40">
                  {displayServices.map((service) => (
                    <div
                      key={service.slug}
                      className="scroll-mt-32"
                      id={service.slug}
                    >
                      {/* Service Header */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
                        <div className="flex items-center gap-6">
                          <div
                            className={`${service.color.bg} ${service.color.text} border ${service.color.border} rounded-2xl p-4 shadow-lg shadow-blue-500/10`}
                          >
                            <service.icon className="w-10 h-10" />
                          </div>
                          <div>
                            <h2 className="text-4xl font-black text-white mb-2">
                              {service.title}
                            </h2>
                            <p className="text-slate-400 max-w-xl">
                              {isNl
                                ? `Snelle interventie 24u/24 voor al uw behoeften op het gebied van ${service.title.toLowerCase()}.`
                                : `Intervention express 24h/24 pour tous vos besoins en ${service.title.toLowerCase()}.`}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Top 5 Cities - Quick Access */}
                      <div className="mb-16">
                        <div className="flex items-center gap-2 mb-8">
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                          <h3 className="text-lg font-bold text-white uppercase tracking-wider text-sm">
                            {isNl ? "Populaire Steden" : "Villes Fréquentes"}
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                          {belgianCities
                            .filter((c) => majorCities.includes(c.slug))
                            .slice(0, 5)
                            .map((city) => (
                              <Link
                                key={`top-${service.slug}-${city.slug}`}
                                href={isNl ? `/nl/zones-de-services/${service.slug}/${city.slug}` : `/zones-de-services/${service.slug}/${city.slug}`}
                                className="group p-6 rounded-3xl bg-blue-600/5 border border-blue-500/20 hover:border-blue-500/50 transition-all text-center"
                              >
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                                  <MapPin className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors uppercase text-sm tracking-widest">
                                  {city.name}
                                </h4>
                              </Link>
                            ))}
                        </div>
                      </div>

                      {/* All Cities by Province */}
                      <div>
                        <div className="flex items-center gap-2 mb-8">
                          <Globe className="w-5 h-5 text-slate-500" />
                          <h3 className="text-lg font-bold text-white uppercase tracking-wider text-sm">
                            {isNl ? "Al onze Regio's per Provincie" : "Toutes nos Zones par Province"}
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                          {sortedProvinces.map((province) => {
                            const cities = citiesByProvince[province];
                            return (
                              <div
                                key={`${service.slug}-${province}`}
                                className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl transition-colors hover:bg-white/[0.04]"
                              >
                                <h4 className="text-slate-300 font-bold mb-4 pb-2 border-b border-white/5 flex items-center justify-between">
                                  {province}
                                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full font-mono">
                                    {cities.length}
                                  </span>
                                </h4>
                                <ul className="space-y-2">
                                  {cities.map((city) => (
                                    <li
                                      key={`${service.slug}-${province}-${city.slug}`}
                                    >
                                      <Link
                                        href={isNl ? `/nl/zones-de-services/${service.slug}/${city.slug}` : `/zones-de-services/${service.slug}/${city.slug}`}
                                        className="flex items-center justify-between text-sm text-slate-500 hover:text-blue-400 py-1 transition-colors group/link"
                                      >
                                        <span>{city.name}</span>
                                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12"
              >
                {filteredData.length > 0 &&
                searchResults &&
                searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredData.map((service) => (
                      <div key={service.slug} className="contents">
                        {searchResults.map((city) => (
                          <Link
                            key={`search-${service.slug}-${city.slug}`}
                            href={isNl ? `/nl/zones-de-services/${service.slug}/${city.slug}` : `/zones-de-services/${service.slug}/${city.slug}`}
                            className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <div
                                className={`${service.color.bg} ${service.color.text} p-2 rounded-xl border ${service.color.border}`}
                              >
                                <service.icon className="w-5 h-5" />
                              </div>
                              <span className="text-xs font-bold text-slate-400 group-hover:text-blue-400 transition-colors uppercase tracking-widest">
                                {service.title}
                              </span>
                            </div>
                            <h4 className="text-2xl font-black text-white mb-1">
                              {city.name}
                            </h4>
                            <p className="text-sm text-slate-500">
                              {city.province}
                            </p>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-40">
                    <Search className="w-16 h-16 text-slate-700 mx-auto mb-6" />
                    <h2 className="text-3xl font-black text-white mb-2">
                      {isNl ? "Geen resultaten" : "Aucun résultat"}
                    </h2>
                    <p className="text-slate-500">
                      {isNl
                        ? `We hebben geen dienst of stad gevonden die overeenkomt met "${searchTerm}"`
                        : `Nous n'avons pas trouvé de service ou de ville correspondant à "${searchTerm}"`}
                    </p>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="mt-8 px-6 py-3 bg-blue-600 rounded-xl text-white font-bold hover:bg-blue-500 transition-colors"
                    >
                      {isNl ? "Reset" : "Réinitialiser"}
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
