"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { belgianCities } from "@/lib/data/cities";
import { services } from "@/lib/data/services";
import { dutchServices } from "@/lib/data/translations";

const PHONE = "0492 47 92 01";
const EMAIL = "debproservices@canalrose.be";

export function Footer() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;
  const currentYear = new Date().getFullYear();

  const servicesList = isNl ? dutchServices : services;

  return (
    <footer className="relative z-10 px-8 py-3 bg-black/40 border-t border-white/10 text-sm text-slate-300 mt-auto">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand & Desc */}
          <div className="space-y-6 h-card">
            <Link href={isNl ? "/nl" : "/"} className="inline-block u-url p-name p-org">
              <span className="text-2xl font-black tracking-tighter text-white">
                DEB PRO<span className="text-blue-500">SERVICES</span>
              </span>
            </Link>
            <p className="text-sm text-slate-100 font-medium opacity-80 p-note">
              {isNl ? (
                "Uw betrouwbare partner voor al uw installatiewerken en spoedinterventies van loodgieterij, verwarming, gas, elektriciteit, ontstopping en renovatie in heel België."
              ) : (
                "Votre partenaire de confiance pour tous vos travaux et urgences de plomberie, chauffage, gaz, électricité et débouchage à travers toute la Belgique."
              )}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/debservices"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-blue-600/20 text-white transition border border-white/10 u-url"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/debservices"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-blue-600/20 text-white transition border border-white/10 u-url"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-600/20 border border-blue-500/30 max-w-fit px-3 py-1.5 rounded uppercase tracking-widest p-category">
              <ShieldCheck className="w-4 h-4" /> {isNl ? "Erkend Bedrijf" : "Entreprise Agréée"}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">
              {isNl ? "Onze Diensten" : "Nos Services"}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <Link
                    href={isNl ? `/nl/${service.slug}` : `/${service.slug}`}
                    className="text-sm hover:text-secondary transition flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full group-hover:scale-150 transition-transform"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Zones (SEO value) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">
              {isNl ? "Belangrijkste Zones" : "Zones Principales"}
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {belgianCities.slice(0, 10).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={isNl ? `/nl/loodgieter-${city.slug}` : `/zones-de-services/plomberie/${city.slug}`}
                    className="hover:text-secondary transition opacity-80 hover:opacity-100 flex items-center gap-1"
                  >
                    <ChevronRight className="w-2 h-2 text-secondary" />
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href={isNl ? "/nl/zones-de-services" : "/zones-de-services"}
                className="text-secondary text-sm font-bold hover:underline flex items-center gap-2"
              >
                {isNl ? "Bekijk alle steden" : "Voir toutes les villes"} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="h-card">
            <h3 className="text-lg font-bold text-white mb-6 font-heading">
              {isNl ? "Neem Contact Op" : "Contactez-nous"}
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="text-lg font-bold text-white hover:text-secondary transition p-tel"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-secondary transition u-email"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3 p-adr h-adr">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps/place/Deb+Pro+Services/@50.9343749,4.3843725,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3e9f7ff0c3d79:0x54ce02342d4a8439!8m2!3d50.9343749!4d4.3869474!16s%2Fg%2F11z3pw860x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition"
                >
                  <span className="p-locality">
                    {isNl ? "Interventie 24/7" : "Intervention 24/7"}
                    <br />
                    {isNl ? "Heel België (Google Maps)" : "Toute la Belgique (Voir sur Maps)"}
                  </span>
                </a>
                <span className="p-country-name hidden">Belgium</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-white/60 uppercase tracking-widest">
          <p>&copy; {currentYear} DEB PRO SERVICES.</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link
              href={isNl ? "/nl/mentions-legales" : "/mentions-legales"}
              className="hover:text-white transition"
            >
              {isNl ? "Juridische Info" : "Mentions Légales"}
            </Link>
            <Link
              href={isNl ? "/nl/privacy-policy" : "/privacy-policy"}
              className="hover:text-white transition"
            >
              {isNl ? "Privacybeleid" : "Confidentialité"}
            </Link>
            <a
              href="https://www.google.com/maps/place/Deb+Pro+Services/@50.9343749,4.3843725,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3e9f7ff0c3d79:0x54ce02342d4a8439!8m2!3d50.9343749!4d4.3869474!16s%2Fg%2F11z3pw860x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full group cursor-pointer hover:bg-blue-600/20 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-white group-hover:text-blue-400">
                {isNl ? "4.9/5 GOOGLE REVIEWS" : "4.9/5 AVIS GOOGLE"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

