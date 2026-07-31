import { dutchServices, parseNlServiceAndCity, localizeNlText, getAlternatePath, frToNlCitySlugMap, frToNlCityNameMap } from "@/lib/data/translations";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhoneCall, ChevronRight, CheckCircle, Wrench, Flame, Droplets, Zap, Wind, Truck, Home, Sun, Camera, Hammer, Sparkles, Trees, ShieldAlert } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { HeroQuoteForm } from "@/components/sections/HeroQuoteForm";
import { ServiceSeoText } from "@/components/sections/ServiceSeoText";
import { FAQ } from "@/components/sections/FAQ";
import Link from "next/link";
import { belgianCities } from "@/lib/data/cities";
import Image from "next/image";

const serviceIcons: Record<string, any> = {
  renovation: Home,
  plomberie: Wrench,
  debouchage: Droplets,
  chauffage: Flame,
  gaz: Flame,
  citerne: Truck,
  cng: Wind,
  electricite: Zap,
  climatisation: Wind,
  fosse: Truck,
  "panneaux-solaires": Sun,
  toiture: Home,
  "camera-surveillance": Camera,
  construction: Hammer,
  vitres: Sparkles,
  jardinage: Trees,
};

export function generateStaticParams() {
  return dutchServices.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { service, cityInfo, matchedTerm } = parseNlServiceAndCity(resolvedParams.serviceSlug);
  if (!service) return {};

  const frSlugPath = getAlternatePath(`/nl/${resolvedParams.serviceSlug}`, 'fr');

  if (cityInfo) {
    const isSolarService = service.slug === "zonnepanelen";
    const isRoofService = service.slug === "dakwerken";
    const isCameraService = service.slug === "camerabewaking";

    const title = isSolarService
      ? `☀️ Installateur Zonnepanelen ${cityInfo.name} — Gratis Offerte & Studie 🔋`
      : isRoofService
      ? `🏠 Dakdekker ${cityInfo.name} — Dakrenovatie & Lekherstelling 🌧️`
      : isCameraService
      ? `🛡️ Camerabewaking Installatie ${cityInfo.name} — Professionele Beveiliging 📹`
      : `🚨 ${matchedTerm} ${cityInfo.name} — Gratis Offerte & Interventie 30 Min ⚡`;

    const description = `Nood aan een expert in ${matchedTerm.toLowerCase()} in ${cityInfo.name}? PRO SERVICES biedt snelle interventies, gratis offertes en hoogwaardige diensten.`;

    return {
      title,
      description,
      alternates: {
        canonical: `https://debservices.canalrose.be/nl/${resolvedParams.serviceSlug}`,
        languages: {
          'fr': `https://debservices.canalrose.be${frSlugPath}`,
          'nl': `https://debservices.canalrose.be/nl/${resolvedParams.serviceSlug}`
        }
      },
      openGraph: {
        title,
        description,
        url: `https://debservices.canalrose.be/nl/${resolvedParams.serviceSlug}`,
        images: [
          {
            url: `https://picsum.photos/seed/${service.id}-${cityInfo.slug}/1200/800`,
            width: 1200,
            height: 630,
            alt: `Expert ${matchedTerm} in ${cityInfo.name}`,
          },
        ],
      },
    };
  }

  let description = `${service.title} in België: erkende technici voor alle dringende interventies. 24h/24 & 7j/7 bereikbaar. Direct gratis offerte via ☎ 0498 35 25 88.`;

  if (service.slug === "loodgieter") {
    description =
      "Loodgieter in België spoed 24/7: erkende technici voor lekken, installaties en snelle herstellingen. Gratis offerte. Bel direct ☎ 0498 35 25 88!";
  } else if (service.slug === "ontstopping") {
    description =
      "Ontstopping van leidingen in België 24/7: expert voor verstopte WC, riolen en gootstenen. Gratis offerte, snelle actie en garantie. Bel ☎ 0498 35 25 88!";
  } else if (service.slug === "verwarming") {
    description =
      "Gecertificeerde verwarmingsinstallateur in België: spoedherstelling verwarmingsketel 24/7. Onderhoud en installatie. Gratis offerte ☎ 0498 35 25 88.";
  } else if (service.slug === "gas") {
    description =
      "Gecertificeerde CERGA technici voor alle gasinterventies in België. Lekdetectie, conformiteit, aansluiting. Spoed 24/7 ☎ 0498 35 25 88.";
  } else if (service.slug === "elektriciteit") {
    description =
      "Elektricien in België spoed 24/7: AREI-keuring, zekeringkast vervangen en installatie. Erkende expert, gratis offerte. Bel ☎ 0498 35 25 88.";
  } else if (service.slug === "zonnepanelen") {
    description =
      "Installatie van fotovoltaïsche zonnepanelen en thuisbatterijen in België. Gecertificeerde installateurs, gratis rendementsstudie. Bel ☎ 0498 35 25 88.";
  } else if (service.slug === "dakwerken") {
    description =
      "Dakwerken in België: dringende herstelling van daklekken, renovatie en isolatie. Erkende dakdekkers, gratis offerte. Bel ☎ 0498 35 25 88.";
  } else if (service.slug === "camerabewaking") {
    description =
      "Installatie van camerabewaking en alarmen in België. HD IP-beveiligingssystemen verbonden met uw smartphone. Gratis offerte ☎ 0498 35 25 88.";
  } else if (service.slug === "bouwwerken") {
    description =
      "Aannemer voor ruwbouw- en metselwerken in België. Dragende muren openbreken, IPN-balken, betonplaten. Tienjarige garantie, gratis offerte ☎ 0498 35 25 88.";
  } else if (service.slug === "ruitenwasser") {
    description =
      "Professionele ruitenwasser in België. Wassen van ramen, veranda's, winkeletalages voor particulieren en bedrijven. Streeploos resultaat ☎ 0498 35 25 88.";
  } else if (service.slug === "tuinieren") {
    description =
      "Professionele tuinman in België: tuinonderhoud, snoeien, gevaarlijke bomen vellen en hagen knippen. Gratis offerte ☎ 0498 35 25 88.";
  }

  const isSolarService = service.slug === "zonnepanelen";
  const isRoofService = service.slug === "dakwerken";
  const isCameraService = service.slug === "camerabewaking";
  const isConstructionService = service.slug === "bouwwerken";
  const isCleanService = service.slug === "ruitenwasser";
  const isGardenService = service.slug === "tuinieren";

  const metaTitle = isSolarService
    ? `☀️ Installateur Zonnepanelen België — Gratis Offerte & Studie 🔋`
    : isRoofService
    ? `🏠 Dakdekker België — Dakrenovatie & Lekherstelling 🌧️`
    : isCameraService
    ? `🛡️ Camerabewaking Installatie België — Professionele Beveiliging 📹`
    : isConstructionService
    ? `🏗️ Aannemer Ruwbouw & Metselwerken België — Tienjarige Garantie 🧱`
    : isCleanService
    ? `✨ Professionele Ruitenwasser België — Streepvrij Resultaat 🪟`
    : isGardenService
    ? `🌳 Tuinman & Boomverzorging België — Groenonderhoud 🍃`
    : `🚨 Expert ${service.title} België — Gratis Offerte & Interventie 30 Min ⚡`;

  const ogTitle = isSolarService
    ? `☀️ Installateur Zonnepanelen België — Gratis Offerte & Studie 🔋`
    : isRoofService
    ? `🏠 Dakdekker België — Dakrenovatie & Lekherstelling 🌧️`
    : isCameraService
    ? `🛡️ Camerabewaking Installatie België — Professionele Beveiliging 📹`
    : isConstructionService
    ? `🏗️ Aannemer Ruwbouw & Metselwerken België — Tienjarige Garantie 🧱`
    : isCleanService
    ? `✨ Professionele Ruitenwasser België — Streepvrij Resultaat 🪟`
    : isGardenService
    ? `🌳 Tuinman & Boomverzorging België — Groenonderhoud 🍃`
    : `🚨 Expert ${service.title} België — Gratis Offerte ⚡`;

  return {
    title: metaTitle,
    description,
    keywords: `${service.title} België, ${service.title} 24h/24, expert ${service.title}, gratis offerte ${service.title}, zonnepanelen installatie, dakwerken belgie, ruitenwasser belgie, camerabewaking belgie, metselwerk belgie`,
    alternates: {
      canonical: `https://debservices.canalrose.be/nl/${service.slug}`,
      languages: {
        'fr': `https://debservices.canalrose.be${frSlugPath}`,
        'nl': `https://debservices.canalrose.be/nl/${service.slug}`
      }
    },
    openGraph: {
      title: ogTitle,
      description,
      url: `https://debservices.canalrose.be/nl/${service.slug}`,
      images: [
        {
          url: (service as any).imageUrl || `https://picsum.photos/seed/${service.id}/1200/800`,
          width: 1200,
          height: 630,
          alt: `Expert ${service.title} in België`,
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const resolvedParams = await params;
  const { service: serviceInfo, cityInfo, matchedTerm } = parseNlServiceAndCity(resolvedParams.serviceSlug);

  if (!serviceInfo) {
    notFound();
  }

  const isGasService = serviceInfo.slug === "gas";
  const isSolarService = serviceInfo.slug === "zonnepanelen";
  const isRoofService = serviceInfo.slug === "dakwerken";
  const isCameraService = serviceInfo.slug === "camerabewaking";
  const isConstructionService = serviceInfo.slug === "bouwwerken";
  const isCleanService = serviceInfo.slug === "ruitenwasser";
  const isGardenService = serviceInfo.slug === "tuinieren";

  let h1Title = `Expert ${serviceInfo.title} België — Erkende Technici 24u/24`;
  if (cityInfo) {
    if (isSolarService) {
      h1Title = `Zonnepanelen in ${cityInfo.name} : Groene & Duurzame Energie`;
    } else if (isRoofService) {
      h1Title = `Dakwerken in ${cityInfo.name} : Waterdichtheid & Renovatie`;
    } else if (isCameraService) {
      h1Title = `Camerabewaking in ${cityInfo.name} : Beveiliging 24u/24`;
    } else if (isConstructionService) {
      h1Title = `Bouwwerken & Metselwerken in ${cityInfo.name} : Ruwbouw & Renovatie`;
    } else if (isCleanService) {
      h1Title = `Ruitenwasser in ${cityInfo.name} : Streeploos Wassen van Ramen`;
    } else if (isGardenService) {
      h1Title = `Tuinman in ${cityInfo.name} : Boomverzorging & Tuinonderhoud`;
    } else {
      h1Title = `${matchedTerm} in ${cityInfo.name} — Gratis Offerte & Interventie`;
    }
  } else if (isGasService) {
    h1Title = `Expert ${serviceInfo.title} België — CERGA Gecertificeerde Technici 24u/24`;
  } else if (isSolarService) {
    h1Title = `Installateur Zonnepanelen België — Gratis Offerte & Rendementsstudie`;
  } else if (isRoofService) {
    h1Title = `Erkende Dakdekker België — Dakwerken, Reparatie & Renovatie`;
  } else if (isCameraService) {
    h1Title = `Installatie Camerabewaking België — Professionele Beveiliging`;
  } else if (isConstructionService) {
    h1Title = `Bouwwerken & Metselwerken België — Ruwbouw & Renovatie`;
  } else if (isCleanService) {
    h1Title = `Professionele Ruitenwasser België — Gratis Offerte`;
  } else if (isGardenService) {
    h1Title = `Tuinman & Boomverzorging België — Tuinonderhoud & Vellen van Bomen`;
  }

  let descriptionText = serviceInfo.description;
  if (cityInfo) {
    if (isSolarService) {
      descriptionText = `Bespaar tot 80% op uw elektriciteitsrekening in ${cityInfo.name}. Onze gecertificeerde teams ontwerpen uw fotovoltaïsche installatie met hoogwaardige thuisbatterijen. Gratis offerte en opbrengststudie.`;
    } else if (isRoofService) {
      descriptionText = `Een daklek of een complete dakrenovatie in ${cityInfo.name}? Onze ervaren dakdekkers grijpen snel in om de waterdichtheid, thermische isolatie en levensduur van uw dak te garanderen.`;
    } else if (isCameraService) {
      descriptionText = `Schrik inbrekers af en houd uw eigendom in ${cityInfo.name} in de gaten. Onze gecertificeerde technici installeren slimme camerabewakingssystemen verbonden met uw smartphone. Gratis offerte en beveiligingsaudit.`;
    } else if (isConstructionService) {
      descriptionText = `Nood aan een betrouwbare metselaar of aannemer in ${cityInfo.name}? PRO SERVICES verzorgt uw ruwbouwwerken, metselwerk, betonplaten en stalen IPN-balken met tienjarige garantie.`;
    } else if (isCleanService) {
      descriptionText = `Vind een professionele ruitenwasser in ${cityInfo.name} voor uw ramen, veranda of etalage. PRO SERVICES garandeert streeploos wassen met respect voor uw raamprofielen.`;
    } else if (isGardenService) {
      descriptionText = `Nood aan een gekwalificeerde tuinman of boomverzorger in ${cityInfo.name}? PRO SERVICES verzorgt het maaien van gras, knippen van hagen, vellen van bomen en tuinonderhoud of uw buitenruimte.`;
    } else {
      descriptionText = `Op zoek naar een professional voor uw ${matchedTerm.toLowerCase()} in ${cityInfo.name}? PRO SERVICES grijpt snel in in ${cityInfo.name} en omgeving. Of het nu gaat om een installatie, renovatie of spoedreparatie, onze gecertificeerde technici garanderen vakkundig, duurzaam werk tegen de beste prijs.`;
    }
  }

  const heroImage = cityInfo
    ? `https://picsum.photos/seed/${serviceInfo.id}-${cityInfo.slug}/1200/800`
    : (serviceInfo as any).imageUrl || `https://picsum.photos/seed/${serviceInfo.id}/1200/800`;

  const alternateFrPath = getAlternatePath(`/nl/${resolvedParams.serviceSlug}`, 'fr');
  const IconComponent = serviceIcons[serviceInfo.id] || ShieldAlert;

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
                "@id": `https://debservices.canalrose.be/nl/${serviceInfo.slug}#service`,
                name: cityInfo ? `${matchedTerm} in ${cityInfo.name} - PRO SERVICES` : `${serviceInfo.title} België - PRO SERVICES`,
                serviceType: serviceInfo.title,
                description: descriptionText,
                provider: {
                  "@id": "https://debservices.canalrose.be/#organization",
                },
                areaServed: cityInfo ? { "@type": "City", name: cityInfo.name } : { "@type": "Country", name: "Belgium" },
                offers: serviceInfo.subServices.map((sub: { title: string; desc: string }) => ({
                  "@type": "Offer",
                  name: sub.title,
                  description: sub.desc,
                  price: "50.00",
                  priceCurrency: "EUR"
                }))
              },
              {
                "@type": "Product",
                name: cityInfo ? `Dienst ${matchedTerm} ${cityInfo.name} - PRO SERVICES` : `Dienst ${serviceInfo.title} België - PRO SERVICES`,
                description: descriptionText,
                image: [
                  heroImage || "https://debservices.canalrose.be/technician.png",
                  "https://debservices.canalrose.be/logo.png"
                ],
                brand: {
                  "@type": "Brand",
                  name: "PRO SERVICES"
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "8942",
                  bestRating: "5",
                  worstRating: "1"
                },
                offers: {
                  "@type": "Offer",
                  url: `https://debservices.canalrose.be/nl/${serviceInfo.slug}`,
                  priceCurrency: "EUR",
                  price: "50.00",
                  priceValidUntil: "2028-12-31",
                  validFrom: "2024-01-01",
                  availability: "https://schema.org/InStock",
                  hasMerchantReturnPolicy: {
                    "@type": "MerchantReturnPolicy",
                    applicableCountry: "BE",
                    "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "EUR"
                    },
                    "shippingDestination": {
                      "@type": "DefinedRegion",
                      addressCountry: "BE"
                    }
                  }
                },
                review: [
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Marc Dubois"
                    },
                    datePublished: "2026-01-15",
                    reviewBody: `Uitstekende service voor ${serviceInfo.title.toLowerCase()}. Snelle interventie in België.`,
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                      worstRating: "1"
                    }
                  }
                ]
              },
              {
                "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "EmergencyService"],
                "@id": "https://debservices.canalrose.be/#organization",
                name: "PRO SERVICES",
                alternateName: ["Debservices", "Pro Service"],
                image: [
                  "https://debservices.canalrose.be/technician.png",
                  "https://debservices.canalrose.be/logo.png"
                ],
                logo: "https://debservices.canalrose.be/technician.png",
                url: "https://debservices.canalrose.be/nl",
                telephone: "+32496325733",
                priceRange: "€€",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "8942",
                  bestRating: "5",
                  worstRating: "1"
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Madeliefjesstraat 1/B006",
                  addressLocality: cityInfo ? cityInfo.name : "Grimbergen",
                  addressRegion: cityInfo ? cityInfo.province : "Vlaams-Brabant",
                  postalCode: "1850",
                  addressCountry: "BE"
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 50.9343749,
                  longitude: 4.3869474
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    opens: "00:00",
                    closes: "23:59"
                  }
                ]
              },
              ...(serviceInfo.faqs ? [{
                "@type": "FAQPage",
                "mainEntity": serviceInfo.faqs.map((faq: { question: string; answer: string }) => ({
                  "@type": "Question",
                  "name": cityInfo ? localizeNlText(faq.question, cityInfo.name) : faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": cityInfo ? localizeNlText(faq.answer, cityInfo.name) : faq.answer
                  }
                }))
              }] : [])
            ],
          }),
        }}
      />

      <section className="relative pt-32 pb-20 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt={cityInfo ? `PRO SERVICES - ${matchedTerm} in ${cityInfo.name}` : `PRO SERVICES - Interventie ${serviceInfo.title} in België`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#000814]/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-sm font-bold border border-white/10 mb-6 uppercase tracking-widest ${serviceInfo.color.text}`}
              >
                <IconComponent className="w-4 h-4" />
                {cityInfo ? `Professionele Dienst in ${cityInfo.name}` : "Professionele Dienst in België"}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 text-white drop-shadow-lg">
                {h1Title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                {descriptionText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0498 35 25 88"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4 md:px-8 md:py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/30"
                >
                  <PhoneCall className="w-5 h-5" /> Urgentie {matchedTerm}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full max-w-lg mx-auto mt-8 lg:mt-0">
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services / Clusters Overview */}
      <section className="py-24 relative z-10 text-white bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 text-white uppercase tracking-tight">
              Onze diensten van {serviceInfo.title} {cityInfo ? `in ${cityInfo.name}` : "in België"}
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Ontdek in detail al onze expertises {cityInfo ? `in ${cityInfo.name}` : "in België"}. Elk probleem heeft een passende oplossing bij PRO SERVICES.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceInfo.subServices.map((sub: any) => (
              <Link
                key={sub.slug}
                href={`/nl/${serviceInfo.slug}/${sub.slug}`}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden flex-shrink-0 z-10">
                  <Image
                    src={sub.imageUrl || heroImage}
                    alt={`Interventie ${sub.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="p-8 pt-6 flex flex-col flex-grow relative z-10">
                  <h3
                    className={`text-2xl font-bold mb-3 group-hover:${serviceInfo.color.text} transition-colors uppercase tracking-tight text-white`}
                  >
                    {sub.title}
                  </h3>
                  <p className="text-white mb-6 text-sm leading-relaxed flex-grow">
                    {sub.desc}
                  </p>
                  <div className="flex items-center text-sm font-bold uppercase tracking-wider text-white group-hover:text-blue-400 mt-auto transition-colors">
                    Meer informatie{" "}
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Image & Trust Section */}
      <section className="py-24 bg-[#000814] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10">
                    <Image
                      src={
                        serviceInfo.subServices[0]?.imageUrl ||
                        heroImage
                      }
                      alt="Expertise PRO SERVICES"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-3xl overflow-hidden border border-white/10">
                    <Image
                      src={
                        serviceInfo.subServices[1]?.imageUrl ||
                        heroImage
                      }
                      alt="Interventie techniek"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="relative h-48 rounded-3xl overflow-hidden border border-white/10">
                    <Image
                      src={
                        serviceInfo.subServices[2]?.imageUrl ||
                        heroImage
                      }
                      alt="Professioneel materiaal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10">
                    <Image
                      src={heroImage}
                      alt="Klantendienst"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Trust Badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl shadow-2xl z-20 border-4 border-[#000814]">
                <div className="text-4xl font-black text-white mb-1">15+</div>
                <div className="text-blue-100 text-sm font-bold uppercase tracking-widest">
                  Jaar ervaring
                </div>
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-4xl font-black mb-8 leading-tight">
                Waarom kiezen voor PRO SERVICES voor uw {matchedTerm} {cityInfo ? `in ${cityInfo.name}` : "in België"} ?
              </h2>
              <div className="space-y-6">
                {(serviceInfo.trustPoints ?? [
                  { title: "Sneldienst 24u/24", desc: "Wij zijn binnen 30 tot 60 minuten ter plaatse voor alle spoedinterventies overal in België." },
                  { title: "Transparante & Vaste Tarieven", desc: "Geen verborgen kosten. Een duidelijke offerte wordt u voorgelegd vóór de start van de werken." },
                  { title: "Erkende & Gecertificeerde Technici", desc: "Al onze professionals zijn gecertificeerd, verzekerd en opgeleid volgens de nieuwste Belgische normen." },
                  { title: "Tevredenheidsgarantie", desc: "Al onze werken zijn gegarandeerd. Wij vertrekken pas als het probleem 100% is opgelost." },
                ]).map((item: {title: string; desc: string}, i: number) => {
                  const localizedTitle = cityInfo ? localizeNlText(item.title, cityInfo.name) : item.title;
                  const localizedDesc = cityInfo ? localizeNlText(item.desc, cityInfo.name) : item.desc;
                  return (
                    <div
                      key={i}
                      className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                        <CheckCircle className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">{localizedTitle}</h3>
                        <p className="text-slate-400 leading-relaxed">
                          {localizedDesc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10">
                <a
                  href="tel:0498 35 25 88"
                  className="inline-flex items-center gap-3 bg-white text-[#1A3A8F] font-black px-10 py-5 rounded-2xl hover:bg-slate-100 transition shadow-2xl"
                >
                  <PhoneCall className="w-6 h-6" /> BEL UW EXPERT: 0498 35 25 88
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      {cityInfo && (
        <section className="py-20 bg-slate-950/25 border-t border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase">
                Lokale Service &amp; Nabijheid in {cityInfo.name}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                {isSolarService ? (
                  <>
                    Onze gecertificeerde teams van installateurs zijn actief in de hele gemeente <strong>{cityInfo.name}</strong> en omgeving. Dankzij onze diepgaande kennis van de lokale regelgeving en subsidies in de provincie <strong>{cityInfo.province}</strong>, garanderen wij een optimale rendementsstudie en een veilige installatie van uw fotovoltaïsche zonnepanelen en batterijopslag.
                  </>
                ) : isRoofService ? (
                  <>
                    Onze lokale dakdekkers zijn actief in <strong>{cityInfo.name}</strong> voor alle dringende of geplande dakwerken. Of het nu gaat om het herstellen van een daklek na stormschade in de regio <strong>{cityInfo.province}</strong>, het uitvoeren van een volledige ontmossing, of een totale dakrenovatie (pannen, leien, EPDM), wij bieden een snelle service met 10-jarige garantie.
                  </>
                ) : isCameraService ? (
                  <>
                    Beveilig uw huis, villa of winkel in <strong>{cityInfo.name}</strong> met de hulp van onze lokale experts. Wij ontwerpen en installeren de nieuwste generatie IP-camerabewakingssystemen in <strong>{cityInfo.name}</strong>. Our gratis veiligheidsaudits respecteren scrupuleusement de Belgische camerawetgeving voor uw totale gemoedsrust.
                  </>
                ) : (
                  <>
                    Dringend een technicus of herstelling nodig in {serviceInfo.title.toLowerCase()} in <strong>{cityInfo.name}</strong>? Onze gecertificeerde technici wonen in de buurt en zijn binnen 30 tot 60 minuten ter plaatse. Wij dekken de hele regio <strong>{cityInfo.province}</strong> 24u/24 en 7j/7 voor de professionele expertise die u verdient.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Local SEO Matrix */}
      <section className="py-24 border-t border-white/10 relative z-10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">
              {cityInfo ? `Onze interventies van ${serviceInfo.title} in ${cityInfo.name} en omgeving` : `Interventie ${serviceInfo.title} in heel België`}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Selecteer uw stad hieronder om onze diensten in de buurt te ontdekken en contact op te nemen met onze lokale technici.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {belgianCities.slice(0, 30).map((city) => {
              const nlSlug = frToNlCitySlugMap[city.slug] || city.slug;
              const nlName = frToNlCityNameMap[city.name] || city.name;
              return (
                <Link
                  key={city.slug}
                  href={`/nl/${serviceInfo.slug}-${nlSlug}`}
                  className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-full text-sm text-slate-300 hover:text-white hover:border-white/30 transition-colors"
                >
                  {nlName}
                </Link>
              );
            })}
            <Link
              href="/nl/zones-de-services"
              className="px-4 py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold rounded-full text-sm hover:bg-blue-600/40 transition"
            >
              Bekijk alle steden →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">
              Vraag een interventie aan voor {serviceInfo.title.toLowerCase()} {cityInfo ? `in ${cityInfo.name}` : ""}
            </h2>
            <p className="text-slate-400">
              Vul het contactformulier in om een gratis offerte te ontvangen of een niet-dringende interventie te plannen. U ontvangt binnen 24 uur antwoord.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ
        customFaqs={
          serviceInfo.faqs?.map((faq: { question: string; answer: string }) => ({
            question: cityInfo ? localizeNlText(faq.question, cityInfo.name) : faq.question,
            answer: cityInfo ? localizeNlText(faq.answer, cityInfo.name) : faq.answer,
          }))
        }
      />
      <ServiceSeoText serviceTitle={serviceInfo.title} cityName={cityInfo?.name} />
    </>
  );
}
