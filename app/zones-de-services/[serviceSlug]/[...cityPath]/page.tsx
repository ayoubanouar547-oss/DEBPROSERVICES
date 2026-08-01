import { resolveZoneServiceAndPath } from "@/lib/service-matcher";
import { Metadata } from "next";
import { belgianCities } from "@/lib/data/cities";
import { cityData, getFallbackCityData } from "@/lib/cityData";
import {
  PhoneCall,
  MapPin,
  ChevronRight,
  CheckCircle,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { ServiceSeoText } from "@/components/sections/ServiceSeoText";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import { PaintingGallery } from "@/components/sections/PaintingGallery";
import { DebouchageGallery } from "@/components/sections/DebouchageGallery";
import { buildLongClusterText, getProfessionMetaTitle } from "@/lib/utils/seo-content-generator";
import { frToNlCitySlugMap, frToNlCityNameMap, } from "@/lib/data/translations";
import { services } from "@/lib/data/services";

function getDebouchageInitialType(slug?: string) {
  if (!slug) return "all" as const;
  if (slug.includes("wc")) return "wc" as const;
  if (slug.includes("evier")) return "evier" as const;
  if (slug.includes("egout")) return "canalisation" as const;
  if (slug.includes("camera")) return "camera" as const;
  if (slug.includes("baignoire")) return "baignoire" as const;
  return "all" as const;
}

interface UnifiedParams {
  serviceSlug: string;
  cityPath: string[];
}

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<UnifiedParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { serviceSlug, cityPath } = resolvedParams;
  const { service, subService, cityInfo } = resolveZoneServiceAndPath(
    serviceSlug,
    cityPath,
    "fr"
  );
  
  const titleToUse = subService ? subService.title : service.title;
  const path = `/zones-de-services/${serviceSlug}/${cityPath.join("/")}`;
  const keywords = `${titleToUse}, ${cityInfo ? cityInfo.name : "Belgique"}, intervention urgence, dépannage 24/7, devis gratuit`;
  
  if (subService && cityInfo) {
    const subSlug = subService.slug || serviceSlug;
    const title = getProfessionMetaTitle(subSlug, cityInfo.name, false);
    return {
      title,
      description: `Besoin d'un expert pour : ${subService.title} à ${cityInfo.name} ? Nos techniciens agréés interviennent en 30 minutes, 24/7. Devis gratuit sans engagement.`,
      keywords,
      alternates: {
        canonical: path,
      },
      openGraph: {
        title,
        description: `Expert en ${subService.title} à ${cityInfo.name}. Intervention garantie 24h/24.`,
        url: `https://debservices.canalrose.be${path}`,
      },
    };
  } else if (cityInfo) {
    const title = getProfessionMetaTitle(serviceSlug, cityInfo.name, false);
    return {
      title,
      description: `Expert en ${service.title} à ${cityInfo.name}. Dépannage rapide 24h/24 et 7j/7. Devis gratuit et intervention garantie sous 30 min.`,
      keywords,
      alternates: {
        canonical: path,
      },
      openGraph: {
        title,
        description: `Dépannage d'urgence pour ${service.title} à ${cityInfo.name}.`,
        url: `https://debservices.canalrose.be${path}`,
      },
    };
  }

  return {
    title: getProfessionMetaTitle(serviceSlug, "Belgique", false),
  };
}

export default async function ZoneCityPage({
  params,
}: {
  params: Promise<UnifiedParams>;
}) {
  const resolvedParams = await params;
  const { serviceSlug, cityPath } = resolvedParams;

  const { service, subService, cityInfo } =
    resolveZoneServiceAndPath(serviceSlug, cityPath, "fr");

  if (!service || !cityInfo || !cityInfo) {
    return (
      <div className="bg-slate-900 min-h-[50vh] flex items-center justify-center text-white">
        <h1>Ville ou service introuvable.</h1>
      </div>
    );
  }

  let enrichedCityData = cityData[cityInfo.slug as keyof typeof cityData];
  if (!enrichedCityData) {
    enrichedCityData = getFallbackCityData(cityInfo.name);
  }

  const titleToUse = subService ? subService.title : service.title;
  const titleSlug = subService ? subService.slug : service.slug;

  const seoTextHtml = buildLongClusterText(
    titleToUse,
    cityInfo.name,
    titleSlug || serviceSlug
  );

  return (
    <main className="bg-slate-900 min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-900/30 blur-[150px] rounded-full mix-blend-screen" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-8 sm:mb-12 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <Link href="/zones-de-services" className="hover:text-white transition-colors">
              Zones
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <Link href={`/zones-de-services/${service.slug}`} className="hover:text-white transition-colors">
              {service.title}
            </Link>
            {subService && (
              <>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <Link href={`/zones-de-services/${service.slug}/${cityPath[0]}`} className="hover:text-white transition-colors truncate">
                  {subService.title}
                </Link>
              </>
            )}
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-white font-bold">{cityInfo.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-[40px] leading-[1.1] md:text-5xl lg:text-7xl font-black sm:leading-tight mb-4 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200 uppercase tracking-tight break-words">
                {titleToUse} <br />
                <span className="text-blue-500">{cityInfo.name}</span>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl text-blue-100/70 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
                Besoin d'un expert pour <strong>{titleToUse.toLowerCase()}</strong> à {cityInfo.name} ? Nos techniciens interviennent chez vous en 30 à 60 minutes, 24/7. Devis gratuit sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-16">
                <a
                  href="tel:0498 35 25 88"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                  0498 35 25 88
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center gap-3 text-slate-300 bg-white/5 p-4 rounded-xl border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-green-400 shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Devis Gratuit & Sans Engagement</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle className="w-6 h-6 text-blue-400 shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Garantie Qualité sur Intervention</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 rounded-3xl" />
              <div className="bg-white/5 border border-white/10 p-4 sm:p-8 rounded-3xl backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px]" />
                <h3 className="text-xl sm:text-2xl font-black mb-6 flex items-center gap-3">
                  <ShieldAlert className="w-6 h-6 text-red-500" />
                  Intervention Urgente
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-slate-900 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-16">
              <ServiceSeoText serviceTitle={titleToUse} cityName={cityInfo.name} />
              {serviceSlug === "debouchage-canalisation" && (
                <DebouchageGallery initialType={getDebouchageInitialType(subService?.slug)} isNl={false} />
              )}
              {serviceSlug === "peinture" && (
                <PaintingGallery />
              )}
            </div>
            
            <div className="lg:col-span-4 space-y-8 sticky top-32">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-900 p-8 rounded-3xl border border-blue-500/30 text-white shadow-2xl">
                <h4 className="font-black text-2xl mb-4">Urgence 24/7</h4>
                <p className="text-blue-100 mb-6">
                  Nos techniciens sont prêts à intervenir immédiatement à {cityInfo.name}.
                </p>
                <a
                  href="tel:0498 35 25 88"
                  className="bg-white text-blue-900 w-full px-6 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors"
                >
                  <PhoneCall className="w-6 h-6" />
                  0498 35 25 88
                </a>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h4 className="font-bold text-xl mb-6">Autres zones couvertes</h4>
                <ul className="space-y-3">
                  {belgianCities.slice(0, 5).map((c) => (
                    <li key={c.slug}>
                      <Link 
                        href={`/zones-de-services/${serviceSlug}${subService ? `/${subService.slug}` : ""}/${c.slug}`}
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ city={cityInfo.name} />
    </main>
  );
}
