import { services } from "@/lib/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhoneCall, ChevronRight, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { ServiceSeoText } from "@/components/sections/ServiceSeoText";
import { FAQ } from "@/components/sections/FAQ";
import Link from "next/link";
import { belgianCities } from "@/lib/data/cities";
import Image from "next/image";

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

  let description = `Service de ${service.title.toLowerCase()}. Intervention urgente 24h/24 et 7j/7 en Belgique. Devis gratuit.`;

  if (service.slug === "plomberie") {
    description =
      "Plomberie urgence 24/7: technicien agréé en Belgique. Fuites ou installations. Devis gratuit et dépannage rapide. Contactez DEB PRO SERVICES !";
  } else if (service.slug === "debouchage-canalisation") {
    description =
      "Débouchage urgence 24/7: technicien agréé en Belgique. WC, égouts, éviers bouchés. Devis gratuit, action immédiate. Contactez DEB PRO SERVICES !";
  } else if (service.slug === "chauffage") {
    description =
      "Chauffage urgence 24/7: chauffagiste et technicien agréé en Belgique. Dépannage chaudière, devis gratuit. Appelez DEB PRO SERVICES maintenant !";
  } else if (service.slug === "renovation-maison") {
    description =
      "Rénovation maison & appartement en Belgique. Spécialiste douche italienne, salle de bain et rénovation totale. Devis gratuit, travail pro 24/7. Contactez-nous !";
  }

  return {
    title: `${service.title} Belgique | DEB PRO SERVICES ☎ 24H/24`,
    description,
    keywords: `${service.title} Belgique, ${service.title} urgent, ${service.title} 24h/24, expert ${service.title}, devis gratuit ${service.title}`,
    alternates: {
      canonical: `/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} Belgique | DEB PRO SERVICES`,
      description,
      url: `https://debservices.canalrose.be/${service.slug}`,
      images: [
        {
          url: service.imageUrl,
          width: 800,
          height: 600,
          alt: service.title,
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
  const serviceInfo = services.find(
    (s) => s.slug === resolvedParams.serviceSlug,
  );

  if (!serviceInfo) {
    notFound();
  }

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
                "@id": `https://debservices.canalrose.be/${serviceInfo.slug}#service`,
                name: serviceInfo.title,
                serviceType: serviceInfo.title,
                description: serviceInfo.description,
                provider: {
                  "@id": "https://debservices.canalrose.be/#organization",
                },
                areaServed: {
                  "@type": "Country",
                  name: "Belgium",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: `Services de ${serviceInfo.title}`,
                  itemListElement: serviceInfo.subServices.map((sub, i) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: sub.title,
                      description: sub.desc,
                    },
                    position: i + 1,
                  })),
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://debservices.canalrose.be/#organization",
                name: "DEB PRO SERVICES",
                image: "https://debservices.canalrose.be/logo.png",
                url: "https://debservices.canalrose.be",
                telephone: "+32496325733",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Brussels",
                  addressRegion: "Brussels",
                  postalCode: "1000",
                  streetAddress: "Centre",
                  addressCountry: "BE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 50.8503,
                  longitude: 4.3517,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": `https://debservices.canalrose.be/${serviceInfo.slug}#breadcrumb`,
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
                    name: serviceInfo.title,
                    item: `https://debservices.canalrose.be/${serviceInfo.slug}`,
                  },
                ],
              },
            ],
          }),
        }}
      />

      <section className="relative pt-32 pb-20 overflow-hidden text-white border-b border-white/10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={serviceInfo.imageUrl}
            alt={`DEB PRO SERVICES - ${serviceInfo.title}`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#000814]/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-[#000814]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-sm font-bold border border-white/10 mb-6 uppercase tracking-widest ${serviceInfo.color.text}`}
            >
              <serviceInfo.icon className="w-4 h-4" />
              Service Pro & Agrée
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 text-white drop-shadow-lg">
              Expert {serviceInfo.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {serviceInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0496325733"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4 md:px-8 md:py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/30"
              >
                <PhoneCall className="w-5 h-5" /> Urgence {serviceInfo.title}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services / Clusters Overview */}
      <section className="py-24 relative z-10 text-white bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 text-white uppercase tracking-tight">
              Nos domaines d'intervention en {serviceInfo.title}
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Découvrez en détail l'ensemble de nos champs d'expertise. Chaque
              problème a sa solution dédiée avec DEB PRO SERVICES.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceInfo.subServices.map((sub) => (
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10">
                    <Image
                      src={
                        serviceInfo.subServices[0]?.imageUrl ||
                        serviceInfo.imageUrl
                      }
                      alt="Expertise DEB PRO SERVICES"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-3xl overflow-hidden border border-white/10">
                    <Image
                      src={
                        serviceInfo.subServices[1]?.imageUrl ||
                        serviceInfo.imageUrl
                      }
                      alt="Intervention technique"
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
                        serviceInfo.imageUrl
                      }
                      alt="Équipement professionnel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10">
                    <Image
                      src={serviceInfo.imageUrl}
                      alt="Service client"
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
                  Ans d'expérience
                </div>
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-4xl font-black mb-8 leading-tight">
                Pourquoi faire confiance à DEB PRO SERVICES pour votre{" "}
                {serviceInfo.title} ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Intervention Express 24h/24",
                    desc: "Nous arrivons chez vous en moins de 30 à 60 minutes pour toute urgence partout en Belgique.",
                  },
                  {
                    title: "Tarifs Fixes & Transparents",
                    desc: "Aucun frais caché. Un devis clair vous est présenté avant chaque début de travaux.",
                  },
                  {
                    title: "Matériel High-Tech",
                    desc: "Caméras HD, furets électriques et camions hydrocureurs pour des résultats impeccables.",
                  },
                  {
                    title: "Garantie de Satisfaction",
                    desc: "Tous nos travaux sont garantis. Nous ne repartons que lorsque le problème est 100% résolu.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <CheckCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a
                  href="tel:0496325733"
                  className="inline-flex items-center gap-3 bg-white text-[#1A3A8F] font-black px-10 py-5 rounded-2xl hover:bg-slate-100 transition shadow-2xl"
                >
                  <PhoneCall className="w-6 h-6" /> APPELEZ VOTRE EXPERT : 0496
                  32 57 33
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Matrix */}
      <section className="py-24 border-t border-white/10 relative z-10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">
              Intervention {serviceInfo.title} dans toute la Belgique
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
              Demander une intervention {serviceInfo.title}
            </h2>
            <p className="text-slate-400">
              Remplissez le formulaire de contact pour obtenir un devis gratuit
              ou planifier une intervention non urgente. Une réponse vous sera
              apportée sous 24h.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ customFaqs={(serviceInfo as any).faqs} />
      <ServiceSeoText serviceTitle={serviceInfo.title} />
    </>
  );
}
