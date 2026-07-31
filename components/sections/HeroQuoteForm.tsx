"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  User,
  Phone,
  MapPin,
  Wrench,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  PhoneCall,
  FileText,
} from "lucide-react";

export function HeroQuoteForm() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;
  const isHomePage = !pathname || pathname === "/" || pathname === "/nl";
  const formPhone = isHomePage ? "0465 99 60 76" : "0498 35 25 88";
  const formPhoneTel = isHomePage ? "0465996076" : "0498352588";

  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [service, setService] = useState("plomberie");
  const [ville, setVille] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!nom.trim()) {
      setErrorMsg(isNl ? "Vul uw naam in *" : "Veuillez indiquer votre nom *");
      return;
    }
    if (!telephone.trim() || telephone.length < 8) {
      setErrorMsg(
        isNl
          ? "Vul een geldig telefoonnummer in *"
          : "Veuillez indiquer un numéro de téléphone valide *"
      );
      return;
    }
    if (!ville.trim()) {
      setErrorMsg(
        isNl
          ? "Vul uw adres of stad in *"
          : "Veuillez indiquer votre localité *"
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          telephone,
          service,
          ville,
          message: message || "Demande de devis rapide via la page d'accueil.",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data.error ||
            (isNl
              ? "Fout bij het versturen, probeer het opnieuw."
              : "Erreur lors de l'envoi, veuillez réessayer.")
        );
      }
    } catch {
      setErrorMsg(
        isNl
          ? "Netwerkfout, probeer het opnieuw."
          : "Erreur réseau, veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 shadow-[0_20px_50px_-15px_rgba(16,185,129,0.25)] p-5 text-center text-white">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />
        <div className="my-3 flex justify-center">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 animate-bounce">
            <CheckCircle2 className="w-7 h-7" />
          </div>
        </div>
        <h3 className="text-xl font-black font-heading mb-1">
          {isNl ? "Aanvraag Verzonden!" : "Demande Envoyée !"}
        </h3>
        <p className="text-slate-300 text-xs max-w-xs mx-auto mb-4 leading-relaxed">
          {isNl
            ? "Bedankt! Een expert neemt binnen 15 minuten contact met u op."
            : "Merci ! Un technicien vous recontacte dans les 15 minutes."}
        </p>

        <a
          href={`tel:${formPhoneTel}`}
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-sm shadow-md hover:brightness-110 transition-all"
        >
          <PhoneCall className="w-4 h-4 animate-pulse" />
          <span>{isNl ? `Dringend? Bel ${formPhone}` : `Urgence ? Appelez ${formPhone}`}</span>
        </a>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 shadow-[0_15px_45px_-10px_rgba(15,23,42,0.8),0_0_30px_rgba(59,130,246,0.15)] p-5 sm:p-6 w-full max-w-md mx-auto">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />

      {/* Header */}
      <div className="mb-4 text-center">
        <h2 className="text-xl font-black font-heading text-white tracking-tight">
          {isNl ? "Gratis Offerte Aanvragen" : "Demande de Devis Gratuit"}
        </h2>
        <p className="text-[11px] text-slate-300 mt-1">
          {isNl
            ? "Snel en vrijblijvend een prijsaanvraag versturen"
            : "Saisissez vos coordonnées pour recevoir un tarif rapidement"}
        </p>
      </div>

      {errorMsg && (
        <div className="mb-3 p-2.5 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 relative z-10 text-xs">
        {/* Nom & Téléphone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
              {isNl ? "Naam *" : "Nom complet *"}
            </label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-blue-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                type="text"
                required
                placeholder={isNl ? "Jan Dupont" : "Jean Dupont"}
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full pl-8 pr-2.5 py-2 rounded-lg bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
              {isNl ? "Telefoon *" : "Téléphone *"}
            </label>
            <div className="relative">
              <Phone className="w-3.5 h-3.5 text-blue-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                type="tel"
                required
                placeholder="04XX XX XX XX"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="w-full pl-8 pr-2.5 py-2 rounded-lg bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Service & Localité */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
              {isNl ? "Dienst *" : "Service *"}
            </label>
            <div className="relative">
              <Wrench className="w-3.5 h-3.5 text-blue-400 absolute left-3 top-2.5 pointer-events-none" />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full pl-8 pr-6 py-2 rounded-lg bg-slate-800/90 border border-slate-700/80 text-white text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
              >
                <option value="plomberie">{isNl ? "Plomberie & Fuites" : "Plomberie & Recherche Fuite"}</option>
                <option value="debouchage">{isNl ? "Débouchage Urgent" : "Débouchage Urgent WC/Évier"}</option>
                <option value="chauffage">{isNl ? "Chauffage & Chaudière" : "Chauffage & Chaudière"}</option>
                <option value="electricite">{isNl ? "Électricité & Dépannage" : "Électricité & Dépannage"}</option>
                <option value="climatisation">{isNl ? "Climatisation / VMC" : "Climatisation / VMC"}</option>
                <option value="fosse">{isNl ? "Vidange Fosse Septique" : "Vidange Fosse Septique"}</option>
                <option value="construction">{isNl ? "Rénovation & Construction" : "Construction & Rénovation"}</option>
                <option value="vitres">{isNl ? "Nettoyage Vitres & Toiture" : "Nettoyage Vitres & Toiture"}</option>
              </select>
              <span className="absolute right-2.5 top-2.5 text-[10px] text-slate-400 pointer-events-none">▼</span>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
              {isNl ? "Stad / Postcode *" : "Localité / Code Postal *"}
            </label>
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 text-blue-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                type="text"
                required
                placeholder={isNl ? "1000 Brussel..." : "1000 Bruxelles..."}
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="w-full pl-8 pr-2.5 py-2 rounded-lg bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Message / Details */}
        <div>
          <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
            {isNl ? "Details " : "Message "}
            <span className="font-normal text-slate-500 text-[10px] lowercase">
              ({isNl ? "optioneel" : "optionnel"})
            </span>
          </label>
          <div className="relative">
            <FileText className="w-3.5 h-3.5 text-blue-400 absolute left-3 top-2.5 pointer-events-none" />
            <textarea
              rows={2}
              placeholder={isNl ? "Korte beschrijving van uw probleem..." : "Description rapide de votre demande..."}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full pl-8 pr-2.5 py-2 rounded-lg bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 group border border-blue-400/30 cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span>
                {isNl ? "Verstuur Aanvraag" : "Obtenir Mon Devis Gratuit"}
              </span>
            </>
          )}
        </button>

        {/* Subtext */}
        <p className="text-[10px] text-center text-slate-400 pt-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400 inline mr-1" />
          {isNl ? "100% gratis & vrijblijvend" : "100% gratuit & sans engagement"}
        </p>
      </form>
    </div>
  );
}
