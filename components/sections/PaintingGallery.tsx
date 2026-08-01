'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { paintingImages } from '@/lib/data/gallery-images';

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
