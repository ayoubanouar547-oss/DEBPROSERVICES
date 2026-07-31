'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface GalleryImage {
  url: string;
  category: string;
  title: string;
}

const paintingImages: GalleryImage[] = [
  { url: "https://deb-pro-service.odoo.com/web/image/636-8db3f049/WhatsApp%20Image%202026-07-29%20at%20DCDCD.jpeg", category: "Intérieur", title: "Peinture Intérieure Murs & Plafonds" },
  { url: "https://deb-pro-service.odoo.com/web/image/637-481b1760/WhatsApp%20Image%202026-07-29%20at%2001.01.18SEQ.jpeg", category: "Intérieur", title: "Finitions Salon & Séjour" },
  { url: "https://deb-pro-service.odoo.com/web/image/638-38c75153/WhatsApp%20Image%202026-07-29%20at%2001.01.18DCSDCSCS.jpeg", category: "Extérieur", title: "Peinture Façade & Ravalement" },
  { url: "https://deb-pro-service.odoo.com/web/image/639-cc624dcb/WhatsApp%20Image%202026-07-29%20at%2001.01.18DCC%25.jpeg", category: "Extérieur", title: "Traitement Murs Extérieurs" },
  { url: "https://deb-pro-service.odoo.com/web/image/640-bdac2999/WhatsApp%20Image%202026-07-29%20at%2001.01.18CS.jpeg", category: "Boiseries", title: "Peinture Boiseries & Portes" },
  { url: "https://deb-pro-service.odoo.com/web/image/641-6b9f38d2/WhatsApp%20Image%202026-07-29%20at%2001.01.18%20DCSDCSCS.jpeg", category: "Boiseries", title: "Châssis & Encadrements" },
  { url: "https://deb-pro-service.odoo.com/web/image/642-48caab7e/WhatsApp%20Image%202026-07-29%20at%2001.01.09%20%281%29SCDCS.jpeg", category: "Plaffonnage", title: "Préparation & Enduisage" },
  { url: "https://deb-pro-service.odoo.com/web/image/643-9eb37167/WhatsApp%20Image%202026-07-29%20at%2000.46.37CDCSDCSCS.jpeg", category: "Plaffonnage", title: "Lissage & Plâtrerie" },
  { url: "https://deb-pro-service.odoo.com/web/image/644-80f1c033/WhatsApp%20Image%202026-07-29%20at%2000.46.37.jpeg", category: "Sols", title: "Revêtements & Parquet" },
  { url: "https://deb-pro-service.odoo.com/web/image/645-7d4069bf/SQXSCSDCSCSC.jpeg", category: "Sols", title: "Résine Époxy & Sols Industriels" },
  { url: "https://deb-pro-service.odoo.com/web/image/646-8db3f049/P.jpeg", category: "Intérieur", title: "Décoration Murale & Teintes" },
  { url: "https://deb-pro-service.odoo.com/web/image/647-313f6724/EDEEFEFEDE.jpeg", category: "Intérieur", title: "Chambre & Finitions Soignées" },
  { url: "https://deb-pro-service.odoo.com/web/image/648-b8a9477d/EDEDEDECECECE.jpeg", category: "Extérieur", title: "Protection Toiture & Étanchéité" },
  { url: "https://deb-pro-service.odoo.com/web/image/649-b9d63242/DCSDCSDCSD.jpeg", category: "Cuisines", title: "Aménagement & Pose Cuisines" },
  { url: "https://deb-pro-service.odoo.com/web/image/651-09ff25bf/DCSDCSDCSCS.jpeg?height=256", category: "Cuisines", title: "Mobilier Sur Mesure" },
  { url: "https://deb-pro-service.odoo.com/web/image/654-6084151d/DCSCSDCSCSC.jpeg", category: "Plaffonnage", title: "Cloisons Gyproc & Faux Plafonds" },
  { url: "https://deb-pro-service.odoo.com/web/image/655-9bb2d004/DCSCSCSDCDCSD.jpeg", category: "Intérieur", title: "Couleurs Harmonieuses & Design" },
  { url: "https://deb-pro-service.odoo.com/web/image/656-90ccc0be/DCSCSCSCS.jpeg", category: "Intérieur", title: "Plafonds Tendus & Peints" },
  { url: "https://deb-pro-service.odoo.com/web/image/658-79ba2356/DCD.jpeg", category: "Extérieur", title: "Ravalement & Peinture Extérieure" },
  { url: "https://deb-pro-service.odoo.com/web/image/657-71e935c8/DCDCSSSXS.jpeg", category: "Boiseries", title: "Portes & Boiseries Finies" },
  { url: "https://deb-pro-service.odoo.com/web/image/659-82d32629/CSDCSDCSS.jpeg", category: "Sols", title: "Parquet Massif & Stratifié" },
];

export function PaintingGallery() {
  return (
    <div className="relative z-10 w-full mb-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs font-bold text-purple-400 mb-3 uppercase tracking-widest">
          <Sparkles className="w-3 h-3" /> Galerie de réalisations
        </div>
        <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight text-white">
          Nos chantiers & Finitions
        </h2>
        <p className="text-slate-300 text-base">
          Aperçu de nos réalisations et finitions de haute qualité.
        </p>
      </div>

      {/* Images Grid - Non-clickable photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pointer-events-none select-none">
        {paintingImages.map((img, idx) => (
          <div
            key={idx}
            className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-xl"
          >
            <Image
              src={img.url}
              alt={img.title || img.category}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
