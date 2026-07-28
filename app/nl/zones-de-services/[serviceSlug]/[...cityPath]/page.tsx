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
import { buildLongNlClusterText } from "@/lib/utils/seo-content-generator";
import { frToNlCitySlugMap, frToNlCityNameMap } from "@/lib/data/translations";

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

  const { dutchService, dutchSubService, cityInfo } = resolveZoneServiceAndPath(
    serviceSlug,
    cityPath,
    "nl"
  );

  const titleToUse = dutchSubService ? dutchSubService.title : dutchService.title;
  const path = `/nl/zones-de-services/${serviceSlug}/${cityPath.join("/")}`;
  const keywords = `${titleToUse}, ${cityInfo ? cityInfo.name : "België"}, spoedinterventie, reparatie 24/7, gratis offerte`;

  if (dutchSubService && cityInfo) {
    const title = `🚨 Devis Gratuit for ${titleToUse} in ${cityInfo.name} ⚡ Interventie 30 Min`;
    const description = `Expert in ${titleToUse.toLowerCase()} in ${cityInfo.name}. Snelle interventie in heel België 24/7. Erkende technici. Gratis offerte ☎ 0498 35 25 88`;
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

  if (dutchSubService) {
    const title = `🚨 ${titleToUse} België ⚡ Snelle Interventie 24/7`;
    const description = `Ontdek alle Belgische steden waar wij tussenbeide komen voor uw ${titleToUse.toLowerCase()}. Snelle service 24u/24.`;
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
    const title = `🚨 ${titleToUse} in ${cityInfo.name} ⚡ Interventie 30 Min | Devis Gratuit`;
    const description = `Erkend expert in ${titleToUse.toLowerCase()} in ${cityInfo.name}. Snelle interventie 24/7. Gratis offerte ☎ 0498 35 25 88`;
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
    title: `🚨 ${dutchService.title} België — Snelle Interventie 24/7`,
    description: `Expert in ${dutchService.title.toLowerCase()} in heel België. Transparante tarieven en 24/7 spoed service.`,
    alternates: { canonical: path },
  };
}

export default async function NlUnifiedZonePage({
  params,
}: {
  params: Promise<UnifiedParams>;
}) {
  const resolvedParams = await params;
  const { serviceSlug, cityPath } = resolvedParams;

  const { service, dutchService, subService, dutchSubService, cityInfo } =
    resolveZoneServiceAndPath(serviceSlug, cityPath, "nl");

  const titleToUse = dutchSubService ? dutchSubService.title : dutchService.title;
  const descToUse = dutchSubService ? dutchSubService.desc : dutchService.description;

  // Case 1: Subservice without City -> Show City Directory in Dutch
  if (dutchSubService && !cityInfo) {
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
            <Link
              href={`/nl/${dutchService.slug}`}
              className="hover:text-blue-400 transition-colors"
            >
              {dutchService.title}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{dutchSubService.title}</span>
          </div>

          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              Steden voor <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {dutchSubService.title}
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Wij komen in heel België op spoedinterventie voor uw{" "}
              {dutchSubService.title.toLowerCase()}. Selecteer uw stad voor een lokale vakman.
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
                          href={`/nl/zones-de-services/${dutchService.slug}/${dutchSubService.slug}/${nlCitySlug}`}
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
        </div>
      </div>
    );
  }

  // Case 2: City Landing Page in Dutch
  const activeCity = cityInfo || {
    name: "Brussel",
    slug: "brussel",
    province: "Brussel",
  };

  const cityDataObj = cityData[activeCity.slug] ?? getFallbackCityData(activeCity.name, activeCity.province);
  const localIntro = `Woont u in <strong>${activeCity.name}</strong> (${activeCity.province}) en zoekt u een expert voor <strong>${titleToUse.toLowerCase()}</strong>? Onze erkende technici komen binnen 30 tot 60 minuten ter plaatse voor een snelle en duurzame interventie.`;
  
  const massiveSEOContent = buildLongNlClusterText(
    titleToUse.toLowerCase(),
    activeCity.name,
    descToUse
  );

  const heroImg = (dutchSubService as any)?.imageUrl || (subService as any)?.imageUrl || (dutchService as any)?.imageUrl || service.imageUrl;

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
                "@id": `https://debservices.canalrose.be/nl/zones-de-services/${serviceSlug}/${cityPath.join("/")}#service`,
                name: `${titleToUse} in ${activeCity.name}`,
                serviceType: titleToUse,
                description: `${titleToUse} in ${activeCity.name}. Dringende interventie 24/7 in heel België. Erkende vakmensen.`,
                provider: {
                  "@id": "https://debservices.canalrose.be/#organization",
                },
                areaServed: {
                  "@type": "City",
                  name: activeCity.name,
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://debservices.canalrose.be/#organization",
                name: "Deb Pro Service",
                image: "https://debservices.canalrose.be/logo.png",
                url: "https://debservices.canalrose.be",
                telephone: "+32496325733",
                priceRange: "$$",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "6854",
                  bestRating: "5",
                  worstRating: "1",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: activeCity.name,
                  addressRegion: activeCity.province,
                  postalCode: "1000",
                  streetAddress: "Lokale Service",
                  addressCountry: "BE",
                },
              },
            ],
          }),
        }}
      />

      <section className="relative pt-32 pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImg}
            alt={`DEB PRO SERVICES - ${titleToUse} ${activeCity.name}`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#000814]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-[#000814]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/nl" className="hover:text-blue-400 font-medium">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/nl/zones-de-services" className="hover:text-blue-400 font-medium">
              Zones
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/nl/${dutchService.slug}`}
              className="hover:text-blue-400 font-medium"
            >
              {dutchService.title}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">{activeCity.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 rounded-full text-xs font-black uppercase tracking-widest text-white border border-blue-400/30 mb-8 shadow-2xl shadow-blue-600/30">
                <MapPin className="w-4 h-4" />
                Lokale technicus in {activeCity.name}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.05] mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200 uppercase tracking-tighter">
                {titleToUse} <br />
                <span className="text-blue-500">{activeCity.name}</span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-100/70 mb-8 md:mb-10 leading-relaxed max-w-2xl">
                Nood aan een expert voor <strong>{titleToUse.toLowerCase()}</strong> in {activeCity.name}? Onze technici komen binnen 30 tot 60 minuten ter plaatse, 24/7. Gratis offerte zonder verplichting.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <a
                  href="tel:0498352588"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black px-6 py-4 md:px-10 md:py-6 rounded-2xl flex items-center justify-center gap-4 transition-all shadow-2xl shadow-red-600/40 hover:-translate-y-1 text-base md:text-lg group"
                >
                  <PhoneCall className="w-6 h-6 md:w-7 md:h-7 animate-pulse group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <span className="block text-[10px] md:text-xs opacity-80 uppercase tracking-widest font-bold">
                      SOS Oproep 24/7
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
                  Snel Offerte
                </a>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                <Image
                  src={heroImg}
                  fill
                  priority={true}
                  alt={`${titleToUse} in ${activeCity.name}`}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 text-white">
                  {titleToUse} in {activeCity.name} : Onze Expertise
                </h2>
                <div className="prose prose-lg md:prose-xl prose-invert text-white">
                  <p dangerouslySetInnerHTML={{ __html: localIntro }} />
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-4xl font-black mb-8 md:mb-10 text-white">
                  Waarom kiezen voor ons in {activeCity.name}?
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {(dutchService.trustPoints || [
                    { title: "Snelle Interventie", desc: `Aankomst binnen 30-60 min in ${activeCity.name}.` },
                    { title: "Erkende Technici", desc: "Gecertificeerde vakmensen volgens Belgische normen." },
                    { title: "Transparante Prijzen", desc: "Gratis offerte vooraf, geen verborgen kosten." },
                    { title: "24/7 Beschikbaar", desc: "Dag en nacht bereikbaar, ook in het weekend." },
                  ]).map((item, idx) => (
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

              <div className="mt-16 prose prose-xl prose-invert text-white">
                <div
                  dangerouslySetInnerHTML={{
                    __html: massiveSEOContent.join(""),
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4 text-white uppercase tracking-tighter">
                    Andere diensten in {activeCity.name}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {dutchServices
                      .filter((s) => s.slug !== dutchService.slug)
                      .slice(0, 5)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/nl/zones-de-services/${s.slug}/${activeCity.slug}`}
                          className="text-xs bg-white/5 border border-white/10 p-3 rounded-xl text-slate-300 hover:text-white hover:border-blue-500/50 transition-all flex items-center justify-between group"
                        >
                          <span className="font-bold uppercase">
                            {s.title} {activeCity.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="bg-blue-600 p-8 rounded-3xl shadow-2xl shadow-blue-600/20">
                  <h3 className="text-2xl font-black text-white mb-4 italic">
                    DRINGENDE HERSTELLING?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Neem direct contact op voor snelle hulp in {activeCity.name}.
                  </p>
                  <a
                    href="tel:0498352588"
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
              Aanvraag voor {titleToUse} in {activeCity.name}
            </h2>
            <p className="text-slate-400">
              Vul het onderstaande formulier in voor een snelle en vrijblijvende offerte.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ customFaqs={dutchService.faqs} />
      <ServiceSeoText serviceTitle={`${titleToUse} in ${activeCity.name}`} />
    </>
  );
}
