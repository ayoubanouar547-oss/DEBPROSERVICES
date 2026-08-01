import { services } from "@/lib/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhoneCall, ChevronRight, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { HeroQuoteForm } from "@/components/sections/HeroQuoteForm";
import { ServiceSeoText } from "@/components/sections/ServiceSeoText";
import { FAQ } from "@/components/sections/FAQ";
import Link from "next/link";
import { belgianCities } from "@/lib/data/cities";
import Image from "next/image";
import { matchServiceAndCity } from "@/lib/service-matcher";
import { PaintingGallery } from "@/components/sections/PaintingGallery";
import { DebouchageGallery } from "@/components/sections/DebouchageGallery";
import { getProfessionMetaTitle } from "@/lib/utils/seo-content-generator";

// Helper function to dynamically parse service and city combinations for all of Belgium
function parseServiceAndCity(slug: string) {
  const result = matchServiceAndCity(slug, "fr");
  return {
    service: result.service,
    cityInfo: result.cityInfo,
    matchedTerm: result.matchedTerm,
  };
}

function localizeText(text: string, cityName: string) {
  if (!cityName) return text;
  return text
    .replace(/en Belgique/gi, `à ${cityName}`)
    .replace(/partout en Belgique/gi, `à ${cityName} et ses environs`)
    .replace(/dans toute la Belgique/gi, `à ${cityName} et ses alentours`)
    .replace(/Belgique/gi, cityName)
    .replace(/belge/gi, `de ${cityName}`)
    .replace(/belges/gi, `de ${cityName}`);
}

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
  const { service, cityInfo, matchedTerm } = parseServiceAndCity(resolvedParams.serviceSlug);
  if (!service) return {};

  if (cityInfo) {
    const isSolarService = service.slug === "installation-panneaux-solaires";
    const isRoofService = service.slug === "travaux-de-toiture";
    const isCameraService = service.slug === "installation-cameras-surveillance";

    const title = getProfessionMetaTitle(service.slug, cityInfo.name);

    const description = `Besoin d'un expert en ${matchedTerm.toLowerCase()} à ${cityInfo.name} ? PRO SERVICES propose des interventions rapides, devis gratuit et prestations de haute qualité.`;

    return {
      title,
      description,
      alternates: {
        canonical: `/${resolvedParams.serviceSlug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://debservices.canalrose.be/${resolvedParams.serviceSlug}`,
        images: [
          {
            url: service.imageUrl,
            width: 1200,
            height: 630,
            alt: `Artisan Expert ${matchedTerm} à ${cityInfo.name}`,
          },
        ],
      },
    };
  }

  let description = `${service.title} Belgique : techniciens agréés pour toute intervention urgente. Dépannage 24h/24 & 7j/7. Devis gratuit immédiat ☎ 0498 35 25 88.`;

  if (service.slug === "plomberie") {
    description =
      "Plombier Belgique urgence 24/7 : techniciens agréés pour fuites, installations et dépannages rapides. Devis gratuit. Intervention immédiate au ☎ 0498 35 25 88 !";
  } else if (service.slug === "debouchage-canalisation") {
    description =
      "Débouchage canalisation Belgique 24/7 : expert pour WC, égouts et éviers bouchés. Devis gratuit, action immédiate et garantie. Appelez le ☎ 0498 35 25 88 !";
  } else if (service.slug === "chauffage") {
    description =
      "Chauffagiste Belgique certifié : dépannage chaudière en urgence 24h/24. Entretien, installation et mise en service rapide. Devis gratuit ☎ 0498 35 25 88.";
  } else if (service.slug === "gaz") {
    description = 
      "Techniciens certifiés CERGA pour toute intervention gaz en Belgique. Détection de fuites, mise en conformité, raccordement. Urgence 24h/24 ☎ 0498 35 25 88";
  } else if (service.slug === "electricite") {
    description = 
      "Électricien Belgique urgence 24/7 : mise en conformité, dépannage tableau électrique et installation. Expert agréé, devis gratuit. Appelez le ☎ 0498 35 25 88.";
  } else if (service.slug === "installation-panneaux-solaires") {
    description = 
      "Installation de panneaux solaires photovoltaïques et batteries physiques en Belgique. Installateurs certifiés RESCert, étude de faisabilité gratuite et devis au meilleur prix. Contactez-nous au ☎ 0498 35 25 88.";
  } else if (service.slug === "travaux-de-toiture") {
    description = 
      "Travaux de toiture en Belgique : réparation urgente de fuites, rénovation de toit (ardoises, tuiles, EPDM), isolation thermique et démoussage. Couvreurs certifiés, devis gratuit. Appelez le ☎ 0498 35 25 88.";
  } else if (service.slug === "installation-cameras-surveillance") {
    description = 
      "Installation de caméras de surveillance et alarmes en Belgique. Systèmes de sécurité IP HD connectés sur smartphone pour maison et commerce. Devis gratuit & étude de sécurité offerte ☎ 0498 35 25 88.";
  } else if (service.slug === "travaux-de-construction-gros-oeuvre") {
    description = 
      "Entreprise de construction et maçonnerie en Belgique. Gros œuvre, dalles en béton, ouvertures de mur porteur avec poutrelles IPN/HEB, fondations et façades. Garantie décennale, devis gratuit ☎ 0498 35 25 88.";
  } else if (service.slug === "nettoyage-de-vitres") {
    description =
      "Lavage de vitres professionnel en Belgique. Nettoyage de vitrines, vérandas, fenêtres d'accès difficile, châssis et volets pour particuliers et commerces. Devis gratuit immédiat ☎ 0498 35 25 88.";
  } else if (service.slug === "travaux-de-jardinage-elagage") {
    description =
      "Jardinier paysagiste professionnel en Belgique : entretien de jardin, élagage et abattage d'arbres complexes, taille de haies. Devis gratuit immédiat ☎ 0498 35 25 88.";
  } else if (service.slug === "peinture") {
    description =
      "Entreprise de peinture en Belgique : peintres en bâtiment certifiés pour peinture intérieure, ravalement de façade, enduisage et ponçage. Finitions soignées, devis gratuit ☎ 0498 35 25 88.";
  }

  const isSolarService = service.slug === "installation-panneaux-solaires";
  const isRoofService = service.slug === "travaux-de-toiture";
  const isCameraService = service.slug === "installation-cameras-surveillance";
  const isConstructionService = service.slug === "travaux-de-construction-gros-oeuvre";
  const isCleanService = service.slug === "nettoyage-de-vitres";
  const isGardenService = service.slug === "travaux-de-jardinage-elagage";

  const metaTitle = isSolarService
    ? `☀️ Installateur Panneaux Solaires Belgique — Devis & Étude Gratuite 🔋`
    : isRoofService
    ? `🏠 Couvreur Belgique — Rénovation de Toiture & Réparation de Fuite 🌧️`
    : isCameraService
    ? `🛡️ Installation Caméras de Surveillance Belgique — Sécurité Professionnelle 📹`
    : isConstructionService
    ? `🏗️ Entreprise de Maçonnerie & Gros Œuvre Belgique — Devis Décennal 🧱`
    : isCleanService
    ? `✨ Lavage & Nettoyage de Vitres Belgique — Finition Sans Trace 🪟`
    : isGardenService
    ? `🌳 Jardinier & Élagage Belgique — Entretien d'Espaces Verts 🍃`
    : `🚨 Expert ${service.title} Belgique — Devis Gratuit & Intervention 30 Min ⚡`;

  const ogTitle = isSolarService
    ? `☀️ Installateur Panneaux Solaires Belgique — Devis & Étude Gratuite 🔋`
    : isRoofService
    ? `🏠 Couvreur Belgique — Rénovation de Toiture & Réparation de Fuite 🌧️`
    : isCameraService
    ? `🛡️ Installation Caméras de Surveillance Belgique — Sécurité Professionnelle 📹`
    : isConstructionService
    ? `🏗️ Entreprise de Maçonnerie & Gros Œuvre Belgique — Devis Décennal 🧱`
    : isCleanService
    ? `✨ Lavage & Nettoyage de Vitres Belgique — Finition Sans Trace 🪟`
    : isGardenService
    ? `🌳 Jardinier & Élagage Belgique — Entretien d'Espaces Verts 🍃`
    : `🚨 Expert ${service.title} Belgique — Devis Gratuit ⚡`;

  return {
    title: metaTitle,
    description,
    keywords: `${service.title} Belgique, ${service.title} 24h/24, expert ${service.title}, devis gratuit ${service.title}, installation solaire belgique, toiture belgique, couvreur belgique, cameras de surveillance belgique, securite maison belgique`,
    alternates: {
      canonical: `/${service.slug}`,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: `https://debservices.canalrose.be/${service.slug}`,
      images: [
        {
          url: service.imageUrl,
          width: 1200,
          height: 630,
          alt: `Artisan Expert ${service.title} en Belgique`,
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
  const { service: serviceInfo, cityInfo, matchedTerm } = parseServiceAndCity(resolvedParams.serviceSlug);

  if (!serviceInfo) {
    notFound();
  }

  const isGasService = serviceInfo.slug === "gaz";
  const isSolarService = serviceInfo.slug === "installation-panneaux-solaires";
  const isRoofService = serviceInfo.slug === "travaux-de-toiture";
  const isCameraService = serviceInfo.slug === "installation-cameras-surveillance";
  const isConstructionService = serviceInfo.slug === "travaux-de-construction-gros-oeuvre";
  const isCleanService = serviceInfo.slug === "nettoyage-de-vitres";
  const isGardenService = serviceInfo.slug === "travaux-de-jardinage-elagage";

  let h1Title = `Expert ${serviceInfo.title} Belgique — Techniciens Agréés 24h/24`;
  if (cityInfo) {
    if (isSolarService) {
      h1Title = `Panneaux Solaires à ${cityInfo.name} : Énergie Verte & Durable`;
    } else if (isRoofService) {
      h1Title = `Travaux de Toiture à ${cityInfo.name} : Étanchéité & Rénovation`;
    } else if (isCameraService) {
      h1Title = `Caméras de Surveillance à ${cityInfo.name} : Protection 24h/24`;
    } else if (isConstructionService) {
      h1Title = `Entreprise de Construction à ${cityInfo.name} : Gros Œuvre & Maçonnerie`;
    } else if (isCleanService) {
      h1Title = `Lavage de Vitres à ${cityInfo.name} : Nettoyage Sans Trace`;
    } else if (isGardenService) {
      h1Title = `Jardinier à ${cityInfo.name} : Élagage & Entretien de Jardin`;
    } else {
      h1Title = `${matchedTerm} à ${cityInfo.name} — Devis Gratuit & Intervention`;
    }
  } else if (isGasService) {
    h1Title = `Expert ${serviceInfo.title} Belgique — Techniciens Certifiés CERGA 24h/24`;
  } else if (isSolarService) {
    h1Title = `Installateur Panneaux Solaires Belgique — Devis & Étude Gratuite`;
  } else if (isRoofService) {
    h1Title = `Artisan Couvreur Belgique — Travaux, Réparation & Rénovation de Toiture`;
  } else if (isCameraService) {
    h1Title = `Installation de Caméras de Surveillance Belgique — Sécurité & Devis Gratuit`;
  } else if (isConstructionService) {
    h1Title = `Entreprise de Construction & Maçonnerie Belgique — Devis Gratuit`;
  } else if (isCleanService) {
    h1Title = `Entreprise de Nettoyage de Vitres Belgique — Devis Gratuit`;
  } else if (isGardenService) {
    h1Title = `Jardinier & Élagage Belgique — Entretien de Jardin & Abattage d'Arbres`;
  }

  let descriptionText = serviceInfo.description;
  if (cityInfo) {
    if (isSolarService) {
      descriptionText = `Réduisez jusqu'à 80% votre facture d'électricité à ${cityInfo.name}. Nos équipes certifiées conçoivent votre système photovoltaïque avec batterie physique de stockage de pointe. Devis gratuit et étude de rendement offerte.`;
    } else if (isRoofService) {
      descriptionText = `Une fuite d'eau de pluie ou une rénovation complète de toiture à ${cityInfo.name} ? Nos couvreurs expérimentés interviennent rapidement pour assurer l'étanchéité, l'isolation thermique et la longévité de votre toit.`;
    } else if (isCameraService) {
      descriptionText = `Dissuadez les intrusions et gardez un œil sur votre propriété à ${cityInfo.name}. Nos techniciens certifiés installent des solutions de vidéosurveillance intelligentes connectées à votre smartphone. Devis et audit de sécurité offerts.`;
    } else if (isConstructionService) {
      descriptionText = `Besoin d'un maçon ou d'une entreprise de construction de confiance à ${cityInfo.name} ? PRO SERVICES s'occupe de vos travaux de gros œuvre, maçonnerie, dalles béton et pose d'IPN avec garantie décennale.`;
    } else if (isCleanService) {
      descriptionText = `Trouvez un laveur de vitres professionnel à ${cityInfo.name} pour vos fenêtres, verrières ou vitrines. PRO SERVICES vous garantit un lavage de haute qualité, sans traces et respectueux de vos châssis.`;
    } else if (isGardenService) {
      descriptionText = `Besoin d'un jardinier paysagiste ou d'un élagueur qualifié à ${cityInfo.name} ? PRO SERVICES s'occupe de la tonte de pelouse, taille de haies, abattage d'arbres et aménagement paysager de votre extérieur.`;
    } else {
      descriptionText = `Vous recherchez un professionnel pour votre ${matchedTerm.toLowerCase()} à ${cityInfo.name} ? PRO SERVICES intervient rapidement à ${cityInfo.name} et ses environs. Que ce soit pour une installation, une rénovation ou un dépannage d'urgence, nos techniciens agréés et certifiés garantissent un travail soigné, durable et au meilleur prix.`;
    }
  }

  const heroImage = cityInfo
    ? `https://picsum.photos/seed/${serviceInfo.id}-${cityInfo.slug}/1200/800`
    : serviceInfo.imageUrl;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "EmergencyService"],
                "@id": "https://debservices.canalrose.be/#organization",
                name: "PRO SERVICES",
                image: [
                  heroImage || "https://debservices.canalrose.be/technician.png",
                  "https://debservices.canalrose.be/logo.png"
                ],
                logo: "https://debservices.canalrose.be/technician.png",
                url: "https://debservices.canalrose.be",
                telephone: "+32496325733",
                priceRange: "€€",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Madeliefjesstraat 1/B006",
                  addressLocality: cityInfo ? cityInfo.name : "Grimbergen",
                  addressRegion: "Vlaams-Brabant",
                  postalCode: "1850",
                  addressCountry: "BE"
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "8942",
                  bestRating: "5",
                  worstRating: "1"
                },
                review: [
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Jean-Pierre Petit"
                    },
                    datePublished: "2026-02-10",
                    reviewBody: `Service de ${serviceInfo.title.toLowerCase()} parfait. Intervention rapide et tarif très correct.`,
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                      worstRating: "1"
                    }
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Marie Janssens"
                    },
                    datePublished: "2026-03-01",
                    reviewBody: "Technicien compétent, poli et réactif. Je recommande sans hésitation.",
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
                "@type": "Service",
                "@id": `https://debservices.canalrose.be/${serviceInfo.slug}#service`,
                name: cityInfo ? `${matchedTerm} à ${cityInfo.name} - PRO SERVICES` : `${serviceInfo.title} Belgique - PRO SERVICES`,
                serviceType: serviceInfo.title,
                description: descriptionText,
                provider: {
                  "@id": "https://debservices.canalrose.be/#organization"
                },
                areaServed: cityInfo
                  ? {
                      "@type": "City",
                      name: cityInfo.name
                    }
                  : {
                      "@type": "Country",
                      name: "Belgium"
                    },
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
                name: cityInfo ? `Prestation ${matchedTerm} ${cityInfo.name} - PRO SERVICES` : `Prestation ${serviceInfo.title} Belgique - PRO SERVICES`,
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
                  url: `https://debservices.canalrose.be/${serviceInfo.slug}`,
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
                      name: "Jean-Pierre Petit"
                    },
                    datePublished: "2026-02-10",
                    reviewBody: `Service parfait pour ${serviceInfo.title.toLowerCase()}.`,
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                      worstRating: "1"
                    }
                  }
                ]
              },
              ...(serviceInfo.faqs ? [{
                "@type": "FAQPage",
                "mainEntity": serviceInfo.faqs.map((faq: { question: string; answer: string }) => ({
                  "@type": "Question",
                  "name": cityInfo ? localizeText(faq.question, cityInfo.name) : faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": cityInfo ? localizeText(faq.answer, cityInfo.name) : faq.answer
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
            alt={cityInfo ? `PRO SERVICES - ${matchedTerm} à ${cityInfo.name}` : `PRO SERVICES - Dépannage ${serviceInfo.title} en Belgique`}
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
                <serviceInfo.icon className="w-4 h-4" />
                {cityInfo ? `Service Pro & Agréé à ${cityInfo.name}` : "Service Pro & Agrée en Belgique"}
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
                  <PhoneCall className="w-5 h-5" /> Urgence {matchedTerm}
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
              Nos services de {serviceInfo.title} {cityInfo ? `à ${cityInfo.name}` : "en Belgique"}
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Découvrez en détail l'ensemble de nos champs d'expertise {cityInfo ? `à ${cityInfo.name}` : "en Belgique"}. Chaque
              problème a sa solution dédiée avec PRO SERVICES.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceInfo.subServices.map((sub: any) => (
              <Link
                key={sub.slug}
                href={`/${serviceInfo.slug}/${sub.slug}`}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden flex-shrink-0 z-10">
                  <Image
                    src={(sub as any).imageUrl || serviceInfo.imageUrl}
                    alt={`Intervention ${sub.title}`}
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
                    En savoir plus{" "}
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
              {serviceInfo.slug === "peinture" ? (
                <PaintingGallery />
              ) : serviceInfo.slug === "debouchage-canalisation" ? (
                <DebouchageGallery initialType="all" />
              ) : (
                <PaintingGallery />
              )}
              {/* Trust Badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl shadow-2xl z-20 border-4 border-[#000814]">
                <div className="text-4xl font-black text-white mb-1">15+</div>
                <div className="text-blue-100 text-sm font-bold uppercase tracking-widest">
                  Ans d'expérience
                </div>
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-4xl font-black mb-8 leading-tight">
                Pourquoi faire confiance à PRO SERVICES pour votre {matchedTerm} {cityInfo ? `à ${cityInfo.name}` : "en Belgique"} ?
              </h2>
              <div className="space-y-6">
                {((serviceInfo as any).trustPoints ?? [
                  { title: "Intervention Express 24h/24", desc: "Nous arrivons chez vous en moins de 30 à 60 minutes pour toute urgence partout en Belgique." },
                  { title: "Tarifs Fixes & Transparents", desc: "Aucun frais caché. Un devis clair vous est présenté avant chaque début de travaux." },
                  { title: "Techniciens Agréés & Certifiés", desc: "Tous nos professionnels sont certifiés, assurés et formés aux dernières normes belges en vigueur." },
                  { title: "Garantie de Satisfaction", desc: "Tous nos travaux sont garantis. Nous ne repartons que lorsque le problème est 100% résolu." },
                ]).map((item: {title: string; desc: string}, i: number) => {
                  const localizedTitle = cityInfo ? localizeText(item.title, cityInfo.name) : item.title;
                  const localizedDesc = cityInfo ? localizeText(item.desc, cityInfo.name) : item.desc;
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
                  <PhoneCall className="w-6 h-6" /> APPELEZ VOTRE EXPERT : 0498 35 25 88
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
                Installation &amp; Service de Proximité à {cityInfo.name}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                {isSolarService ? (
                  <>
                    Nos équipes d&apos;installateurs agréés interviennent sur toute la commune de <strong>{cityInfo.name}</strong> et ses environs. Grâce à notre connaissance approfondie de la réglementation de la province de <strong>{cityInfo.province}</strong> et des spécificités techniques locales, nous vous garantissons une étude de rendement optimale et une installation sécurisée de vos panneaux photovoltaïques et batteries de stockage physiques.
                  </>
                ) : isRoofService ? (
                  <>
                    Nos artisans couvreurs de proximité sont actifs à <strong>{cityInfo.name}</strong> pour tous travaux urgents ou programmés. Qu&apos;il s&apos;agisse de réparer une fuite de toiture suite à des intempéries dans la région de <strong>{cityInfo.province}</strong>, d&apos;effectuer un démoussage complet ou de rénover entièrement votre toit (tuiles, ardoises, EPDM), nous vous offrons un service rapide avec garantie décennale.
                  </>
                ) : isCameraService ? (
                  <>
                    Sécurisez votre maison, villa ou commerce à <strong>{cityInfo.name}</strong> avec l&apos;aide de nos experts locaux. Nous concevons et posons des systèmes de caméras de surveillance IP connectées de dernière génération à <strong>{cityInfo.name}</strong>. Nos audits de sécurité gratuits respectent scrupuleusement la législation caméras belge pour vous garantir une tranquillité d&apos;esprit totale.
                  </>
                ) : (
                  <>
                    Besoin d&apos;un dépannage rapide ou d&apos;une nouvelle installation en {serviceInfo.title.toLowerCase()} à <strong>{cityInfo.name}</strong> ? Nos techniciens certifiés résident à proximité et interviennent sous 30 à 60 minutes. Nous couvrons toute la région de <strong>{cityInfo.province}</strong> 24h/24 et 7j/7 pour vous apporter l&apos;expertise professionnelle que vous méritez.
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
              {cityInfo ? `Nos interventions de ${serviceInfo.title} à ${cityInfo.name} et alentours` : `Intervention ${serviceInfo.title} dans toute la Belgique`}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Sélectionnez votre ville ci-dessous pour découvrir nos services de
              proximité et contacter nos techniciens locaux.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {belgianCities.slice(0, 30).map((city) => (
              <Link
                key={city.slug}
                href={`/zones-de-services/${serviceInfo.slug}/${city.slug}`}
                className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-full text-sm text-slate-300 hover:text-white hover:border-white/30 transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href="/zones-de-services"
              className="px-4 py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold rounded-full text-sm hover:bg-blue-600/40 transition"
            >
              Voir toutes les villes →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">
              Demander une intervention de {serviceInfo.title.toLowerCase()} {cityInfo ? `à ${cityInfo.name}` : ""}
            </h2>
            <p className="text-slate-400">
              Remplissez le formulaire de contact pour obtenir un devis gratuit
              ou planifier une intervention non urgente {cityInfo ? `à ${cityInfo.name}` : ""}. Une réponse vous sera
              apportée sous 24h.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ
        customFaqs={
          serviceInfo.faqs?.map((faq: { question: string; answer: string }) => ({
            question: cityInfo ? localizeText(faq.question, cityInfo.name) : faq.question,
            answer: cityInfo ? localizeText(faq.answer, cityInfo.name) : faq.answer,
          }))
        }
      />
      <ServiceSeoText serviceTitle={serviceInfo.title} cityName={cityInfo?.name} />
    </>
  );
}
