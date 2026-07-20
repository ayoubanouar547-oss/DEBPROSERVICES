"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically load the real map component with SSR disabled
const DynamicCoverageMap = dynamic(
  () => import("./CoverageMapInner"),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden border border-white/10 bg-slate-950 flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
        <p className="text-sm font-semibold text-slate-400">
          Chargement de la carte interactive...
        </p>
      </div>
    ),
  }
);

export function CoverageMap() {
  return (
    <div className="w-full">
      <DynamicCoverageMap />
    </div>
  );
}
