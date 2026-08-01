'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { debouchageImages } from '@/lib/data/gallery-images';

interface DebouchageGalleryProps {
  initialType?: 'wc' | 'evier' | 'canalisation' | 'douche' | 'baignoire' | 'camera' | 'all';
  isNl?: boolean;
}

export function DebouchageGallery({ initialType = 'all', isNl = false }: DebouchageGalleryProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'wc' | 'evier' | 'canalisation' | 'douche' | 'baignoire' | 'camera'>(initialType);

  const filteredImages = activeTab === 'all'
    ? debouchageImages
    : debouchageImages.filter(img => img.type === activeTab);

  const tabs = [
    { id: 'all', label: isNl ? 'Alles' : 'Tous' },
    { id: 'wc', label: isNl ? 'Ontstopping WC' : 'Débouchage WC' },
    { id: 'evier', label: isNl ? 'Ontstopping Gootsteen' : 'Débouchage Évier' },
    { id: 'canalisation', label: isNl ? 'Ontstopping Afvoer' : 'Débouchage Canalisation' },
    { id: 'douche', label: isNl ? 'Ontstopping Douche' : 'Débouchage Douche' },
    { id: 'baignoire', label: isNl ? 'Ontstopping Bad' : 'Débouchage Baignoire' },
    { id: 'camera', label: isNl ? 'Camera-inspectie' : 'Inspection Caméra' },
  ] as const;

  return (
    <div className="relative z-10 w-full mb-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-xs font-bold text-cyan-400 mb-3 uppercase tracking-widest">
          <Sparkles className="w-3 h-3" /> {isNl ? 'Realisaties' : 'Galerie de réalisations'}
        </div>
        <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight text-white">
          {isNl ? 'Onze Interventies in Beeld' : 'Photos de nos interventions'}
        </h2>
        <p className="text-slate-300 text-base">
          {isNl 
            ? 'Ontdek onze professionele interventies en apparatuur voor elk ontstoppingsprobleem.' 
            : 'Aperçu de nos interventions professionnelles et de notre matériel de pointe.'}
        </p>
      </div>

      {/* Tabs Filter (only if initialType is 'all') */}
      {initialType === 'all' && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((img, idx) => (
          <div
            key={idx}
            className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-xl group"
          >
            <Image
              src={img.url}
              alt={isNl ? img.titleNl : img.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  {isNl ? img.categoryNl : img.category}
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                  {isNl ? img.titleNl : img.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
