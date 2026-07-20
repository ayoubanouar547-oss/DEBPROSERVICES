"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, Home, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center py-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>
      
      <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl max-w-lg shadow-2xl backdrop-blur-md">
        <div className="inline-flex p-4 bg-red-500/10 rounded-full border border-red-500/20 text-red-500 mb-6">
          <AlertTriangle size={48} className="animate-pulse" />
        </div>
        
        {/* French version */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 font-display">
            Page Non Trouvée (404)
          </h1>
          <p className="text-slate-300 text-sm">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. Notre équipe de techniciens professionnels reste à votre disposition 24h/24.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/80 my-6"></div>

        {/* Dutch version */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white/90 mb-2 font-display">
            Pagina Niet Gevonden (404)
          </h2>
          <p className="text-slate-400 text-sm">
            Sorry, de pagina die u zoekt bestaat niet of is verplaatst. Ons team van professionele technici staat 24/7 voor u klaar.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg shadow-primary/20 text-sm"
          >
            <Home size={18} />
            <span>Accueil / Home</span>
          </Link>
          
          <a
            href="tel:+32496325733"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg shadow-emerald-600/20 text-sm"
          >
            <Phone size={18} className="animate-bounce" />
            <span>Appel d'urgence / Noodoproep</span>
          </a>
        </div>
      </div>
    </div>
  );
}
