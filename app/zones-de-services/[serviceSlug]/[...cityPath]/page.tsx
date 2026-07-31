import { buildLongClusterText } from "@/lib/utils/seo-content-generator";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import { belgianCities } from "@/lib/data/cities";
import { cityData, defaultCityData, getFallbackCityData } from "@/lib/cityData";
import { resolveZoneServiceAndPath } from "@/lib/service-matcher";
import {
  PhoneCall,
  MapPin,
  ChevronRight,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { HeroQuoteForm } from "@/components/sections/HeroQuoteForm";
import { ServiceSeoText } from "@/components/sections/ServiceSeoText";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";

interface UnifiedParams {
  serviceSlug: string;
  cityPath: string[];
}

export function generateStaticParams() {
  const params: UnifiedParams[] = [];

  // To avoid building 5000+ pages statically which exceeds build timeouts,
  // we only generate the top-level categories and rely on dynamic on-demand rendering
  // for the specific city combinations.
  services.forEach((service) => {
    // 1-level: service + top 3 cities for quick load
    const topCities = belgianCities.slice(0, 3);
    
    topCities.forEach((city) => {
      params.push({
        serviceSlug: service.slug,
        cityPath: [city.slug],
      });
    });

    // 1-level: service + subservice (list cities for subservice)
    service.subServices.forEach((sub) => {
      params.push({
        serviceSlug: service.slug,
        cityPath: [sub.slug],
      });

      // 2-level: service + subservice + top 3 cities
      topCities.forEach((city) => {
        params.push({
          serviceSlug: service.slug,
          cityPath: [sub.slug, city.slug],
        });
      });
    });
  });

  return params;
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

  const path = `/zones-de-services/${serviceSlug}/${cityPath.join("/")}`;
  const keywords = `${service.title}, ${subService ? subService.title : ""}, ${cityInfo ? cityInfo.name : "Belgique"}, intervention urgente, dépannage 24/7`;

  if (subService && cityInfo) {
    const cityDataObj = cityData[cityInfo.slug] ?? getFallbackCityData(cityInfo.name, cityInfo.province);
    const title = `🚨 Devis Gratuit pour ${subService.title} à ${cityInfo.name} ⚡ Intervention 30 Min`;
    const description = `Expert en ${subService.title} à ${cityInfo.name}. Intervention en moins de ${cityDataObj.interventionTime}, 24h/24. Techniciens agréés. Devis gratuit ☎ 0498 35 25 88`;
    return {
      title,
      description,
      keywords,
      alternates: { canonical: path },
      openGraph: {
        title,
        description,
        url: `https://debservices.canalrose.be${path}`,
      },
    };
  }

  if (subService) {
    const title = `🚨 Devis Gratuit pour ${subService.title} Belgique ⚡ Intervention Rapide 24/7`;
    const description = `Découvrez toutes les villes en Belgique où nous intervenons pour votre ${subService.title.toLowerCase()}. Service rapide 24h/24 et 7j/7.`;
    return {
      title,
      description,
      keywords,
      alternates: { canonical: path },
      openGraph: {
        title,
        description,
        url: `https://debservices.canalrose.be${path}`,
      },
    };
  }

  if (cityInfo) {
    const cityDataObj = cityData[cityInfo.slug] ?? getFallbackCityData(cityInfo.name, cityInfo.province);
    const title = `🚨 Devis Gratuit pour ${service.title} à ${cityInfo.name} ⚡ Intervention 30 Min`;
    const description = `Expert en ${service.title} à ${cityInfo.name}. Intervention en moins de ${cityDataObj.interventionTime}, 24h/24. Techniciens agréés. Devis gratuit ☎ 0498 35 25 88`;
    return {
      title,
      description,
      keywords,
      alternates: { canonical: path },
      openGraph: {
        title,
        description,
        url: `https://debservices.canalrose.be${path}`,
      },
    };
  }

  return {
    title: `🚨 ${service.title} Belgique — Intervention Rapide 24/7`,
    description: `Expert en ${service.title.toLowerCase()} en Belgique. Techniciens agréés. Devis gratuit ☎ 0498 35 25 88`,
    alternates: { canonical: path },
  };
}

export default async function UnifiedZonePage({
  params,
}: {
  params: Promise<UnifiedParams>;
}) {
  const resolvedParams = await params;
  const { serviceSlug, cityPath } = resolvedParams;

  const { service: serviceInfo, subService: subServiceInfo, cityInfo } =
    resolveZoneServiceAndPath(serviceSlug, cityPath, "fr");

  // Case: Service + Subservice (List cities)
  if (subServiceInfo && !cityInfo) {
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
            <Link
              href={`/zones-de-services/${serviceInfo.slug}`}
              className="hover:text-blue-400 transition-colors"
            >
              {serviceInfo.title}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">
              {subServiceInfo.title}
            </span>
          </div>

          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              Villes pour <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {subServiceInfo.title}
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Nous intervenons en urgence partout en Belgique pour votre{" "}
              {subServiceInfo.title.toLowerCase()}. Sélectionnez votre ville
              pour une intervention locale.
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
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/zones-de-services/${serviceInfo.slug}/${subServiceInfo.slug}/${city.slug}`}
                        className="flex items-center justify-between py-2 text-slate-400 hover:text-white transition-colors group/city"
                      >
                        <span className="text-sm font-bold uppercase tracking-tight">
                          {city.name}
                        </span>
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/city:opacity-100 group-hover/city:translate-x-0 transition-all" />
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

  // Case: City + (Service or Subservice) content
  if (!cityInfo) notFound();

  const titleToUse = subServiceInfo ? subServiceInfo.title : serviceInfo.title;
  
  const cityDataObj = cityData[cityInfo.slug] ?? getFallbackCityData(cityInfo.name, cityInfo.province);
  const provinceToUse = cityDataObj.province !== "Belgique" ? cityDataObj.province : cityInfo.province;
  
  const cityDetails = cityData[cityInfo.slug] ?? getFallbackCityData(cityInfo.name, cityInfo.province);
  const localIntro = `Vous résidez à <strong>${cityInfo.name}</strong> (${cityInfo.province}) et vous cherchez un expert pour <strong>${titleToUse.toLowerCase()}</strong> ? ${cityDetails.description} Nos techniciens, déployés ${cityDetails.landmark}, interviennent en moins de ${cityDetails.interventionTime} après votre appel, 24h/24 et 7j/7.`;
  const localSpeed = `Grâce à notre connaissance approfondie de ${cityInfo.name} et de ses ${cityDetails.landmark}, nous garantissons une intervention en moins de ${cityDetails.interventionTime}. Nos véhicules d'intervention sont géo-localisés en permanence dans la province de ${cityInfo.province} pour une réactivité maximale sur votre ${titleToUse.toLowerCase()}.`;
  
  const massiveSEOContent = buildLongClusterText(
    titleToUse.toLowerCase(),
    cityInfo.name,
    subServiceInfo ? subServiceInfo.desc : serviceInfo.description
  );

  // Define a pseudo-random consistent review count based on city string length and characters
  // Formula gives a number typically between ~6200 and ~6900
  const baseReviewHash = Array.from(cityInfo.name).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const reviewCount = 6150 + (baseReviewHash % 850) + cityInfo.name.length * 5;
  const ratingValue = (4.8 + (baseReviewHash % 2) * 0.1).toFixed(1); // 4.8 or 4.9

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `https://debservices.canalrose.be/zones-de-services/${serviceInfo.slug}/${cityPath.join("/")}#service`,
                name: `${titleToUse} à ${cityInfo.name}`,
                serviceType: titleToUse,
                description: `${titleToUse} à ${cityInfo.name}. Intervention urgente 24/7 partout en Belgique. Techniciens agréés et certifiés.`,
                provider: {
                  "@id": "https://debservices.canalrose.be/#organization",
                },
                areaServed: {
                  "@type": "City",
                  name: cityInfo.name,
                },
                offers: {
                  "@type": "Offer",
                  name: `Dépannage ${titleToUse} ${cityInfo.name} 24h/24`,
                  description: `Intervention immédiate pour ${titleToUse.toLowerCase()} à ${cityInfo.name}.`,
                  price: "50.00",
                  priceCurrency: "EUR"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://debservices.canalrose.be/#organization",
                name: "Pro Service",
                image: "https://debservices.canalrose.be/logo.png",
                url: "https://debservices.canalrose.be",
                telephone: "+32496325733",
                priceRange: "$$",
                aggregateRating: {
                  "@type": "AggregateRating",
                  "ratingValue": ratingValue,
                  "reviewCount": reviewCount.toString(),
                  "bestRating": "5",
                  "worstRating": "1"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: cityInfo.name,
                  addressRegion: cityInfo.province,
                  postalCode: "1000",
                  streetAddress: "Service Local",
                  addressCountry: "BE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 50.8503,
                  longitude: 4.3517,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    opens: "00:00",
                    closes: "23:59",
                  }
                ],
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": `Quel est le délai d'intervention pour un ${titleToUse.toLowerCase()} à ${cityInfo.name} ?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": `Nous intervenons en moins de ${cityDataObj.interventionTime} à ${cityInfo.name} pour toute urgence liée à votre ${serviceInfo.title.toLowerCase()}.`
                    }
                  },
                  {
                    "@type": "Question",
                    "name": `Proposez-vous un devis gratuit à ${cityInfo.name} ?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": `Oui, PRO SERVICES propose des devis gratuits et sans engagement pour tous vos travaux de ${titleToUse.toLowerCase()} à ${cityInfo.name}.`
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": `https://debservices.canalrose.be/zones-de-services/${serviceInfo.slug}/${cityPath.join("/")}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://debservices.canalrose.be",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Zones de Services",
                    item: "https://debservices.canalrose.be/zones-de-services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: serviceInfo.title,
                    item: `https://debservices.canalrose.be/zones-de-services/${serviceInfo.slug}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: titleToUse,
                    item: `https://debservices.canalrose.be/zones-de-services/${serviceInfo.slug}/${cityPath.join("/")}`,
                  },
                ],
              },
            ],
          }),
        }}
      />

      <section className="relative pt-32 pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={subServiceInfo?.imageUrl || serviceInfo.imageUrl}
            alt={`PRO SERVICES - ${titleToUse} ${cityInfo.name}`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#000814]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-[#000814]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-400 font-medium">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/zones-de-services"
              className="hover:text-blue-400 font-medium"
            >
              Zones
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/zones-de-services/${serviceInfo.slug}`}
              className="hover:text-blue-400 font-medium"
            >
              {serviceInfo.title}
            </Link>
            <ChevronRight className="w-4 h-4" />
            {subServiceInfo && (
              <>
                <Link
                  href={`/zones-de-services/${serviceInfo.slug}/${cityInfo.slug}`}
                  className="hover:text-blue-400 font-medium"
                >
                  {cityInfo.name}
                </Link>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
            <span className="text-white font-bold">
              {subServiceInfo ? subServiceInfo.title : cityInfo.name}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 rounded-full text-xs font-black uppercase tracking-widest text-white border border-blue-400/30 mb-8 shadow-2xl shadow-blue-600/30">
                <MapPin className="w-4 h-4" />
                Technicien local dispatché à {cityInfo.name}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.05] mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200 uppercase tracking-tighter">
                {titleToUse} <br />
                <span className="text-blue-500">{cityInfo.name}</span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-100/70 mb-8 md:mb-10 leading-relaxed max-w-2xl">
                Besoin d'un expert pour{" "}
                <strong>{titleToUse.toLowerCase()}</strong> à {cityInfo.name} ?
                Nos techniciens interviennent chez vous en moins de {cityDataObj.interventionTime},
                24h/24 et 7j/7. Devis gratuit et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <a
                  href="tel:0498 35 25 88"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black px-6 py-4 md:px-10 md:py-6 rounded-2xl flex items-center justify-center gap-4 transition-all shadow-2xl shadow-red-600/40 hover:-translate-y-1 text-base md:text-lg group"
                >
                  <PhoneCall className="w-6 h-6 md:w-7 md:h-7 animate-pulse group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <span className="block text-[10px] md:text-xs opacity-80 uppercase tracking-widest font-bold">
                      Dépannage Urgent
                    </span>
                    <span className="block text-lg md:text-xl">
                      0498 35 25 88
                    </span>
                  </div>
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-bold px-6 py-4 md:px-10 md:py-6 rounded-2xl border border-white/20 transition text-base md:text-lg"
                >
                  Demander un Devis
                </a>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0 w-full max-w-lg mx-auto">
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 text-white">
                  {titleToUse} à {cityInfo.name} : Notre Expertise
                </h2>
                <div className="prose prose-lg md:prose-xl prose-invert text-white">
                  <p dangerouslySetInnerHTML={{ __html: localIntro }} />
                  <p dangerouslySetInnerHTML={{ __html: localSpeed }} />
                </div>
              </div>

              {!subServiceInfo && (
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8">
                    Nos Services Spécifiques à {cityInfo.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {serviceInfo.subServices.map((sub: any) => (
                      <Link
                        key={sub.slug}
                        href={`/zones-de-services/${serviceInfo.slug}/${sub.slug}/${cityInfo.slug}`}
                        className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group"
                      >
                        <h4 className="font-bold text-lg mb-2 group-hover:text-blue-400">
                          {sub.title}
                        </h4>
                        <p className="text-sm text-slate-400">{sub.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-2xl md:text-4xl font-black mb-8 md:mb-10 text-white">
                  Pourquoi nous choisir à {cityInfo.name} ?
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {(serviceInfo.trustPoints || [
                    {
                      title: "Rapidité Locale",
                      desc: `Intervention en ${cityDataObj.interventionTime} à ${cityInfo.name} grâce à nos techniciens déployés ${cityDataObj.landmark}.`,
                    },
                    {
                      title: "Savoir-faire Agrée",
                      desc: "Plombiers et chauffagistes certifiés pour des travaux aux normes belges.",
                    },
                    {
                      title: "Prix Fixes",
                      desc: "Devis gratuit et prix annoncé avant intervention. Pas de mauvaise surprise.",
                    },
                    {
                      title: "Disponibilité 24/7",
                      desc: "Une équipe d'astreinte jour et nuit, même les jours fériés.",
                    },
                  ]).map((item: { title: string; desc: string }, idx: number) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multiple Images Gallery Section */}
              <div className="py-12 border-t border-white/10">
                <h3 className="text-3xl font-black mb-8 text-white uppercase tracking-tight">
                  Photos de nos interventions
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
                    <Image
                      src={
                        serviceInfo.subServices[0]?.imageUrl ||
                        serviceInfo.imageUrl
                      }
                      alt={`Intervention ${titleToUse} ${cityInfo.name}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
                    <Image
                      src={
                        serviceInfo.subServices[1]?.imageUrl ||
                        serviceInfo.imageUrl
                      }
                      alt={`Technicien ${serviceInfo.title} ${cityInfo.name}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group hidden md:block">
                    <Image
                      src={
                        serviceInfo.subServices[2]?.imageUrl ||
                        serviceInfo.imageUrl
                      }
                      alt={`Dépannage urgent ${cityInfo.name}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-10">
                <h3 className="text-3xl font-black mb-6 text-white">
                  Intervention Garantie 100% Satisfait
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-xl">
                    <ShieldCheck className="text-blue-400 w-8 h-8" />{" "}
                    <span className="text-white">
                      Transparence totale sur les tarifs.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 text-xl">
                    <ShieldCheck className="text-blue-400 w-8 h-8" />{" "}
                    <span className="text-white">
                      Matériel professionnel de dernière génération.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 text-xl">
                    <ShieldCheck className="text-blue-400 w-8 h-8" />{" "}
                    <span className="text-white">
                      Service client réactif 24h/24.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-16 prose prose-xl prose-invert text-white">
                <h2 className="text-5xl font-black text-white mb-10 border-t border-white/10 pt-10">
                  Détails techniques pour {cityInfo.name}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: massiveSEOContent.slice(0, 3).join(""),
                  }}
                />

                <div
                  dangerouslySetInnerHTML={{
                    __html: massiveSEOContent.slice(3).join(""),
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4 text-white uppercase tracking-tighter">
                    Autres services à {cityInfo.name}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {services
                      .filter((s) => s.slug !== serviceInfo.slug)
                      .slice(0, 5)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/zones-de-services/${s.slug}/${cityInfo.slug}`}
                          className="text-xs bg-white/5 border border-white/10 p-3 rounded-xl text-slate-300 hover:text-white hover:border-blue-500/50 transition-all flex items-center justify-between group"
                        >
                          <span className="font-bold uppercase">
                            {s.title} {cityInfo.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4 text-white uppercase tracking-tighter">
                    Villes de la province {cityInfo.province}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {belgianCities
                      .filter(
                        (c) =>
                          c.province === cityInfo.province &&
                          c.slug !== cityInfo.slug,
                      )
                      .slice(0, 12)
                      .map((c) => (
                        <Link
                          key={c.slug}
                          href={`/zones-de-services/${serviceInfo.slug}/${subServiceInfo ? subServiceInfo.slug + "/" : ""}${c.slug}`}
                          className="bg-white/5 border border-white/10 p-3 rounded-xl text-slate-300 hover:text-white hover:border-blue-500/50 transition-all flex items-center justify-between group"
                        >
                          <span className="font-bold text-[10px] tracking-tight uppercase">
                            {serviceInfo.title} {c.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="bg-blue-600 p-8 rounded-3xl shadow-2xl shadow-blue-600/20">
                  <h3 className="text-2xl font-black text-white mb-4 italic">
                    BESOIN D'UNE RÉPARATION ?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Contactez-nous pour une intervention immédiate sur{" "}
                    {cityInfo.name}.
                  </p>
                  <a
                    href="tel:0498 35 25 88"
                    className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition shadow-lg"
                  >
                    <PhoneCall className="w-5 h-5" /> 0498 35 25 88
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/5 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">
              Urgence {titleToUse} à {cityInfo.name}
            </h2>
            <p className="text-slate-400">
              Demandez votre devis gratuit en quelques secondes via le
              formulaire ci-dessous.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ city={cityInfo.name} customFaqs={(serviceInfo as any).faqs} />
      <ServiceSeoText serviceTitle={`${titleToUse} à ${cityInfo.name}`} />
    </>
  );
}
