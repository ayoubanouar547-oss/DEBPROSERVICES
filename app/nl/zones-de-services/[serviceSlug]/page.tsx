import { resolveZoneServiceAndPath } from "@/lib/service-matcher";
import { Metadata } from "next";
import { belgianCities } from "@/lib/data/cities";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { ServiceSeoText } from "@/components/sections/ServiceSeoText";
import { FAQ } from "@/components/sections/FAQ";
import { frToNlCitySlugMap, frToNlCityNameMap } from "@/lib/data/translations";

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { dutchService } = resolveZoneServiceAndPath(
    resolvedParams.serviceSlug,
    [],
    "nl"
  );

  return {
    title: `${dutchService.title} België — Interventiezones 24/7`,
    description: `Ontdek alle steden in België voor uw ${dutchService.title.toLowerCase()}. Erkende technici en snelle 24/7 service.`,
    alternates: { canonical: `/nl/zones-de-services/${resolvedParams.serviceSlug}` },
  };
}

export default async function NlServiceZoneCategoryPage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const resolvedParams = await params;
  const { dutchService } = resolveZoneServiceAndPath(
    resolvedParams.serviceSlug,
    [],
    "nl"
  );

  const provinces = Array.from(
    new Set(belgianCities.map((c) => c.province))
  ).sort();

  return (
    <div className="bg-slate-900 min-h-screen pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/nl" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href="/nl/zones-de-services"
            className="hover:text-blue-400 transition-colors"
          >
            Dienstenzones
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{dutchService.title}</span>
        </div>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
            Actiezones voor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {dutchService.title}
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            {dutchService.description} Selecteer uw gemeente of stad voor een
            lokale interventie.
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
                </h2>
                <div className="grid grid-cols-1 gap-1">
                  {cities.map((city) => {
                    const nlCitySlug = frToNlCitySlugMap[city.slug] || city.slug;
                    const nlCityName = frToNlCityNameMap[city.name] || city.name;
                    return (
                      <Link
                        key={city.slug}
                        href={`/nl/zones-de-services/${dutchService.slug}/${nlCitySlug}`}
                        className="flex items-center justify-between py-2 text-slate-400 hover:text-white transition-colors group/city"
                      >
                        <span className="text-sm font-bold uppercase tracking-tight">
                          {nlCityName}
                        </span>
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/city:opacity-100 group-hover/city:translate-x-0 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <ContactForm />
        </div>
      </div>
      <FAQ customFaqs={dutchService.faqs} />
      <ServiceSeoText serviceTitle={dutchService.title} />
    </div>
  );
}
