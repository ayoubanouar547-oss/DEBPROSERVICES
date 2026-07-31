"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Phone, MapPin, CheckCircle, ShieldAlert } from "lucide-react";

// Geocoordinates and descriptions for our key service areas in Belgium
const COVERAGE_AREAS = [
  {
    name: "Bruxelles-Capitale (19 Communes)",
    lat: 50.8503,
    lng: 4.3517,
    description: "Plomberie, débouchage de canalisation express & recherche de fuite d'eau urgente. Techniciens de garde 24h/24.",
    phone: "0465 99 60 76",
    tag: "Zone Principale"
  },
  {
    name: "Woluwe-Saint-Pierre",
    lat: 50.8354,
    lng: 4.4339,
    description: "Dépannage sanitaire, débouchage WC & colmatage de fuite. Intervention en moins de 30 minutes.",
    phone: "0465 99 60 76",
    tag: "Dépannage 30m"
  },
  {
    name: "Woluwe-Saint-Lambert",
    lat: 50.8468,
    lng: 4.4262,
    description: "Équipes d'intervention rapide près de Tomberg et de l'UCL. Disponibilité totale jour et nuit.",
    phone: "0465 99 60 76",
    tag: "Dépannage 30m"
  },
  {
    name: "Grimbergen",
    lat: 50.9333,
    lng: 4.3667,
    description: "Plombier local, vidange, assainissement & réparation de chauffe-eau ou de chaudière.",
    phone: "0465 99 60 76",
    tag: "Service Local"
  },
  {
    name: "Liège",
    lat: 50.6326,
    lng: 5.5797,
    description: "Spécialistes vidange fosse septique, hydrocurage haute pression & curage de canalisation.",
    phone: "0465 99 60 76",
    tag: "Urgence Vidange"
  },
  {
    name: "Seraing",
    lat: 50.5966,
    lng: 5.5085,
    description: "Service pompage fosse septique, bac à graisse & curage d'égout pour particuliers et professionnels.",
    phone: "0465 99 60 76",
    tag: "Service Vidange"
  },
  {
    name: "Verviers",
    lat: 50.5932,
    lng: 5.8638,
    description: "Dépannage de plomberie d'urgence, recherche de fuites & curage de canalisation.",
    phone: "0465 99 60 76",
    tag: "Intervention 24h/7"
  },
  {
    name: "Charleroi",
    lat: 50.4108,
    lng: 4.4446,
    description: "Débouchage WC, inspection caméra, plomberie générale et urgences de chauffage.",
    phone: "0465 99 60 76",
    tag: "Urgence Sanitaire"
  },
  {
    name: "Vilvorde",
    lat: 50.9272,
    lng: 4.4217,
    description: "Réparation urgente de tuyauterie fuyarde, installations sanitaires & mitigeurs.",
    phone: "0465 99 60 76",
    tag: "Plombier Pro"
  },
  {
    name: "Waterloo",
    lat: 50.7171,
    lng: 4.3980,
    description: "Recherche de fuite non destructive, réparation de boiler et plomberie.",
    phone: "0465 99 60 76",
    tag: "Recherche Fuite"
  },
  {
    name: "Namur",
    lat: 50.4669,
    lng: 4.8675,
    description: "Déploiement de camions pompe et d'artisans plombiers certifiés sur toute la province.",
    phone: "0465 99 60 76",
    tag: "Dépannage Rapide"
  },
  {
    name: "Anvers (Antwerpen)",
    lat: 51.2194,
    lng: 4.4025,
    description: "Interventions rapides en débouchage, urgence égouttage et plomberie.",
    phone: "0465 99 60 76",
    tag: "Débouchage Pro"
  }
];

export default function CoverageMapInner() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Custom DivIcon styled with Tailwind classes for an animated glowing effect
  const createCustomIcon = (tagType: string) => {
    const isVidange = tagType.includes("Vidange");
    const ringColor = isVidange ? "bg-green-400" : "bg-blue-400";
    const coreColor = isVidange ? "bg-green-500" : "bg-blue-500";

    return L.divIcon({
      html: `
        <div class="relative flex h-8 w-8 items-center justify-center">
          <div class="animate-ping absolute inline-flex h-full w-full rounded-full ${ringColor} opacity-75"></div>
          <div class="relative inline-flex rounded-full h-4.5 w-4.5 ${coreColor} border-2 border-white shadow-xl transition-all hover:scale-125 duration-200"></div>
        </div>
      `,
      className: "custom-leaflet-marker",
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -10],
    });
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(30,58,138,0.15)] bg-slate-950">
      <MapContainer
        center={[50.78, 4.5]}
        zoom={8.5}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ background: "#020617" }}
      >
        {/* Dark style tiles from CartoDB */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {COVERAGE_AREAS.map((area, idx) => (
          <Marker
            key={idx}
            position={[area.lat, area.lng]}
            icon={createCustomIcon(area.tag)}
          >
            <Popup className="custom-map-popup">
              <div className="p-3 text-white max-w-[260px] font-sans">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] bg-blue-500/10 border border-blue-500/20 text-blue-400 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {area.tag}
                  </span>
                  <span className="text-[10px] text-green-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Actif
                  </span>
                </div>
                <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1">
                  {area.name}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {area.description}
                </p>
                <a
                  href={`tel:${area.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black py-2 px-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-red-900/30 active:scale-95 text-center"
                >
                  <Phone className="w-3 h-3" /> Appeler : 0465 99 60 76
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Floating map info card */}
      <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-xs z-[1000] bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl pointer-events-auto">
        <div className="flex items-center gap-3 mb-2">
          <MapPin className="w-5 h-5 text-blue-400 animate-pulse" />
          <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
            Légende & Infos
          </h4>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-3">
          Cliquez sur un marqueur lumineux pour voir les détails d&apos;intervention dans votre localité ou région.
        </p>
        <div className="space-y-1.5 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-white/20 animate-pulse inline-block"></span>
            <span>Plomberie, Débouchage & Chauffage</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white/20 animate-pulse inline-block"></span>
            <span>Vidange de Fosse Septique & Bacs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
