import { services } from "@/lib/data/services";
import { Metadata } from "next";
import { belgianCities } from "@/lib/data/cities";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, MapPin, Search } from "lucide-react";
import { ensureTitleLength, ensureDescriptionLength } from "@/lib/utils/seo-content-generator";

export function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.serviceSlug);

  if (!service) return {};

  const path = `/zones-de-services/${service.slug}`;
  const finalTitle = ensureTitleLength(`${service.title} Belgique — Zones d'Intervention 24/7`);
  const finalDesc = ensureDescriptionLength(`Découvrez les villes couvertes en Belgique pour vos travaux de ${service.title.toLowerCase()}. Intervention rapide 24/7.`);

  return {
    title: finalTitle,
    description: finalDesc,
    keywords: `zones intervention ${service.title.toLowerCase()}, plombier ${service.title}, dépannage ${service.title} Belgique`,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `🚨 Zones d'Intervention ${service.title} - Dépannage Rapide`,
      description: `Présence nationale pour vos besoins en ${service.title.toLowerCase()}. Intervention express en moins d'une heure.`,
      url: `https://debservices.canalrose.be${path}`,
    },
  };
}

export default async function ServiceZonesPage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const resolvedParams = await params;
  const serviceInfo = services.find(
    (s) => s.slug === resolvedParams.serviceSlug,
  );

  if (!serviceInfo) {
    notFound();
  }

  const provinces = Array.from(
    new Set(belgianCities.map((c) => c.province)),
  ).sort();

  return (
    <div className="bg-slate-900 min-h-screen pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href="/zones-de-services"
            className="hover:text-blue-400 transition-colors"
          >
            Zones de Services
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{serviceInfo.title}</span>
        </div>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
            <MapPin className="w-4 h-4" />
            Couverture Nationale
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
            Zones d'Intervention <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {serviceInfo.title}
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Nous intervenons en moins de 30 minutes dans toutes les communes
            listées ci-dessous pour vos besoins en{" "}
            {serviceInfo.title.toLowerCase()}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {provinces.map((province) => {
            const cities = belgianCities
              .filter((c) => c.province === province)
              .sort((a, b) => a.name.localeCompare(b.name));
            return (
              <div
                key={province}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group"
              >
                <h2 className="text-2xl font-black mb-6 flex items-center justify-between">
                  {province}
                  <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full font-mono text-slate-400">
                    {cities.length}
                  </span>
                </h2>
                <div className="grid grid-cols-1 gap-1">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/zones-de-services/${serviceInfo.slug}/${city.slug}`}
                      className="flex items-center justify-between py-2 text-slate-400 hover:text-white transition-colors group/city"
                    >
                      <span className="text-sm font-bold uppercase tracking-tight">
                        {city.name}
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/city:opacity-100 group-hover/city:translate-x-0 transition-all font-bold" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
