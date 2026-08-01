import { buildLongClusterText, getProfessionMetaTitle } from "@/lib/utils/seo-content-generator";
import { Metadata } from "next";
import { services } from "@/lib/data/services";
import { notFound } from "next/navigation";
import { PhoneCall, ChevronRight, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { HeroQuoteForm } from "@/components/sections/HeroQuoteForm";
import { ServiceSeoText } from "@/components/sections/ServiceSeoText";
import { FAQ } from "@/components/sections/FAQ";
import Link from "next/link";
import { belgianCities } from "@/lib/data/cities";
import Image from "next/image";
import { PaintingGallery } from "@/components/sections/PaintingGallery";
import { DebouchageGallery } from "@/components/sections/DebouchageGallery";

function getDebouchageInitialType(slug: string) {
  if (slug.includes("wc")) return "wc" as const;
  if (slug.includes("evier")) return "evier" as const;
  if (slug.includes("egout")) return "canalisation" as const;
  if (slug.includes("camera")) return "camera" as const;
  return "all" as const;
}

export function generateStaticParams() {
  const params: { serviceSlug: string; subServiceSlug: string }[] = [];
  services.forEach((service) => {
    service.subServices.forEach((sub) => {
      params.push({
        serviceSlug: service.slug,
        subServiceSlug: sub.slug,
      });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string; subServiceSlug: string }>;
}) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.serviceSlug);
  const subService = service?.subServices.find(
    (sub) => sub.slug === resolvedParams.subServiceSlug,
  );

  if (!service || !subService) return {};

  return {
    title: getProfessionMetaTitle(subService.slug, "Belgique"),
    description: `Besoin d'un expert pour : ${subService.title} ? ${subService.desc} Techniciens agrées avec intervention en urgence 24h/24 et 7j/7 partout en Belgique.`,
    keywords: `${subService.title} Belgique, ${subService.title} urgent, expert ${subService.title.toLowerCase()}, dépannage 24h/24, ${service.title} Belgique`,
    alternates: {
      canonical: `/${service.slug}/${subService.slug}`,
    },
    openGraph: {
      title: `🚨 ${subService.title} Belgique — Action Rapide ⚡`,
      description: `Expertise en ${subService.title.toLowerCase()} partout en Belgique. Intervention rapide 24/7.`,
      url: `https://debservices.canalrose.be/${service.slug}/${subService.slug}`,
      images: [
        {
           url: (subService as any).imageUrl || service.imageUrl,
          width: 800,
          height: 600,
          alt: subService.title,
        },
      ],
    },
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string; subServiceSlug: string }>;
}) {
  const resolvedParams = await params;
  const serviceInfo = services.find(
    (s) => s.slug === resolvedParams.serviceSlug,
  );
  const subServiceInfo = serviceInfo?.subServices.find(
    (sub) => sub.slug === resolvedParams.subServiceSlug,
  );

  if (!serviceInfo || !subServiceInfo) {
    notFound();
  }

  // Generate a long programmatic text for SEO Clusters
  const paragraphs = [
    `Lorsqu'il s'agit de <strong>${subServiceInfo.title.toLowerCase()}</strong>, faire appel à des professionnels qualifiés est indispensable. Chez PRO SERVICES, nous avons développé une expertise unique en Belgique concernant la catégorie ${serviceInfo.title.toLowerCase()}. Nos équipes interviennent de jour comme de nuit, dimanches et jours fériés inclus pour assurer un dépannage rapide et efficace.`,

    `Le service de <em>${subServiceInfo.title.toLowerCase()}</em> demande un savoir-faire spécifique et un matériel adapté. Nos techniciens certifiés se déplacent chez vous avec des véhicules utilitaires complètement équipés, permettant de résoudre 95% des pannes dès la première visite. ${subServiceInfo.desc}`,

    `N'attendez pas que la situation se dégrade. Les problèmes liés à la ${serviceInfo.title.toLowerCase()} peuvent engendrer des dégâts collatéraux importants (inondations, courts-circuits, risques pour la santé). En choisissant PRO SERVICES pour votre besoin en ${subServiceInfo.title.toLowerCase()}, vous bénéficiez d'une garantie d'un an sur nos interventions, d'une transparence tatale sur nos prix avec devis gratuit avant travaux, et d'un professionnalisme reconnu par plus de 5000 clients satisfaits.`,

    `Nous couvrons l'ensemble du territoire belge (Bruxelles, Wallonie, et la périphérie flamande). Dès réception de votre appel, un dispatcheur analyse votre urgence en <strong>${subServiceInfo.title.toLowerCase()}</strong> et envoie le technicien le plus proche de votre code postal. L'intervention est tracée, sécurisée, et respecte rigoureusement les normes belges en vigueur.`,
  ];

  const massiveSEOContent = buildLongClusterText(
    subServiceInfo.title.toLowerCase(),
    "Belgique",
    subServiceInfo.desc
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": `https://debservices.canalrose.be/${serviceInfo.slug}/${subServiceInfo.slug}#article`,
                headline: `Pourquoi choisir PRO SERVICES pour votre ${subServiceInfo.title} en Belgique ?`,
                description: subServiceInfo.desc,
                author: {
                  "@type": "Organization",
                  name: "Pro Service",
                  url: "https://debservices.canalrose.be",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Pro Service",
                  url: "https://debservices.canalrose.be",
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://debservices.canalrose.be/${serviceInfo.slug}/${subServiceInfo.slug}`,
                },
                inLanguage: "fr-BE",
              },
              {
                "@type": "Service",
                "@id": `https://debservices.canalrose.be/${serviceInfo.slug}/${subServiceInfo.slug}#service`,
                name: `${subServiceInfo.title}`,
                serviceType: subServiceInfo.title,
                description: subServiceInfo.desc,
                provider: {
                  "@id": "https://debservices.canalrose.be/#organization",
                },
                areaServed: {
                  "@type": "Country",
                  name: "Belgium",
                },
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
                  "ratingValue": "4.9",
                  "reviewCount": "6854",
                  "bestRating": "5",
                  "worstRating": "1"
                },
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
                "@id": `https://debservices.canalrose.be/${serviceInfo.slug}/${subServiceInfo.slug}#breadcrumb`,
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
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: subServiceInfo.title,
                    item: `https://debservices.canalrose.be/${serviceInfo.slug}/${subServiceInfo.slug}`,
                  },
                ],
              },
            ],
          }),
        }}
      />

      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={(subServiceInfo as any).imageUrl || serviceInfo.imageUrl}
            alt={`PRO SERVICES - ${subServiceInfo.title}`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#000814]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-[#000814]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap scrollbar-none pb-2">
            <Link href="/" className="hover:text-blue-400 font-medium">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <Link
              href={`/${serviceInfo.slug}`}
              className="hover:text-blue-400 font-medium"
            >
              {serviceInfo.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-white font-bold">{subServiceInfo.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600 rounded-full text-xs font-black uppercase tracking-[0.15em] text-white mb-6 sm:mb-8 shadow-xl shadow-blue-600/20">
                <serviceInfo.icon className="w-4 h-4" />
                Intervention Spécialisée 24/7
              </div>
              <h1 className="text-4xl sm:text-[40px] leading-[1.1] md:text-5xl lg:text-7xl font-black sm:leading-[1] mb-4 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-blue-200 uppercase tracking-tight break-words">
                {subServiceInfo.title}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-blue-100/80 mb-6 sm:mb-10 leading-relaxed max-w-2xl">
                {subServiceInfo.desc} Nos techniciens agréés interviennent en
                urgence 24h/24 et 7j/7 partout en Belgique avec le matériel
                adéquat. Solutions durables et travaux garantis.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <a
                  href="tel:0498 35 25 88"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3.5 sm:px-10 sm:py-6 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-2xl shadow-red-600/40 hover:-translate-y-1 text-sm sm:text-lg group"
                >
                  <PhoneCall className="w-5 h-5 sm:w-7 sm:h-7 animate-pulse group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <span className="block text-[10px] sm:text-xs opacity-80 uppercase tracking-widest font-bold">
                      Appel SOS 24/7
                    </span>
                    <span className="block text-base sm:text-xl">
                      0498 35 25 88
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full max-w-lg mx-auto mt-6 lg:mt-0">
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <div className="bg-white/5 border-b border-white/10 py-6 sm:py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: PhoneCall, text: "Intervention < 60 min" },
              { icon: ChevronRight, text: "Devis Gratuit" },
              { icon: ChevronRight, text: "Technicien Agrée" },
              { icon: ChevronRight, text: "Travail Garanti 1 an" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 sm:gap-3 text-slate-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                  <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section with Images Gallery */}
      <section className="py-12 sm:py-20 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-8 space-y-8 sm:space-y-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight break-words">
                Pourquoi faire appel à nos experts pour votre {subServiceInfo.title} en Belgique ?
              </h2>

              {serviceInfo.slug === "peinture" ? (
                <PaintingGallery />
              ) : serviceInfo.slug === "debouchage-canalisation" ? (
                <DebouchageGallery initialType={getDebouchageInitialType(resolvedParams.subServiceSlug)} isNl={false} />
              ) : (
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={subServiceInfo.imageUrl || serviceInfo.imageUrl}
                    alt={subServiceInfo.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="prose prose-sm sm:prose-lg md:prose-xl prose-invert text-white max-w-none">
                <p className="text-lg sm:text-2xl font-medium text-blue-200 mb-6 sm:mb-8 leading-relaxed">
                  PRO SERVICES est votre partenaire de confiance en Belgique
                  pour tout besoin lié à la{" "}
                  <strong>{subServiceInfo.title.toLowerCase()}</strong>. Nous
                  combinons rapidité d'intervention et excellence technique.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 not-prose mb-8 sm:mb-12">
                  <div className="bg-white/5 p-5 sm:p-8 rounded-3xl border border-white/10">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">
                      Ce que nous garantissons :
                    </h3>
                    <ul className="space-y-3 sm:space-y-4 text-xs sm:text-base">
                      {serviceInfo.features.map((f, i) => (
                        <li key={i} className="flex gap-2.5 sm:gap-3 text-slate-300">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 p-5 sm:p-8 rounded-3xl border border-white/10">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">
                      Pourquoi nous appeler ?
                    </h3>
                    <ul className="space-y-3 sm:space-y-4 text-xs sm:text-base">
                      <li className="flex gap-2.5 sm:gap-3 text-slate-300">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        <span>Intervention urgente en moins d'une heure.</span>
                      </li>
                      <li className="flex gap-2.5 sm:gap-3 text-slate-300">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        <span>
                          Techniciens certifiés et hautement qualifiés.
                        </span>
                      </li>
                      <li className="flex gap-2.5 sm:gap-3 text-slate-300">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        <span>Matériel de diagnostic de pointe.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: paragraphs[0] }} />
                <div dangerouslySetInnerHTML={{ __html: paragraphs[1] }} />

                <h3 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">
                  Quelles sont nos garanties de sécurité et de transparence tarifaire ?
                </h3>
                <div dangerouslySetInnerHTML={{ __html: paragraphs[2] }} />

                <h3 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">
                  Dans quelles communes en Belgique nos techniciens interviennent-ils 24/7 ?
                </h3>
                <div dangerouslySetInnerHTML={{ __html: paragraphs[3] }} />

                {/* Massive Content */}
                <div className="mt-16 border-t border-white/10 pt-16">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: massiveSEOContent.join(""),
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                {/* Sidebar Cluster Links */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4 text-white">
                    Autres services en {serviceInfo.title}
                  </h3>
                  <ul className="space-y-3">
                    {serviceInfo.subServices.map((sub: any) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/${serviceInfo.slug}/${sub.slug}`}
                          className={`flex items-center gap-2 text-sm transition-colors ${sub.slug === subServiceInfo.slug ? "text-blue-400 font-bold" : "text-slate-400 hover:text-white"}`}
                        >
                          <ChevronRight className="w-4 h-4" />
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image 3 - Emergency Box */}
                <div className="bg-gradient-to-br from-red-600 to-red-900 p-6 rounded-2xl border border-red-500/30 text-white shadow-2xl">
                  <h4 className="font-black text-2xl mb-2">Urgence 24/7</h4>
                  <p className="text-red-100 text-sm mb-6">
                    Nous sommes mobilisés pour toute urgence liée à :{" "}
                    {subServiceInfo.title}.
                  </p>
                  <a
                    href="tel:0498 35 25 88"
                    className="bg-white text-red-700 w-full px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition"
                  >
                    <PhoneCall className="w-5 h-5" /> Appeler le technicien
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white mb-4">
              Intervention {subServiceInfo.title} par ville
            </h2>
            <p className="text-slate-400">
              Trouvez votre expert local pour un dépannage rapide.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {belgianCities.slice(0, 20).map((city) => (
              <Link
                key={city.slug}
                href={`/zones-de-services/${serviceInfo.slug}/${subServiceInfo.slug}/${city.slug}`}
                className="px-3 py-1 bg-slate-800 border border-white/10 rounded-full text-xs text-slate-300 hover:text-white transition"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">
              Demande d'intervention pour {subServiceInfo.title}
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ customFaqs={(serviceInfo as any).faqs} />
      <ServiceSeoText serviceTitle={subServiceInfo.title} />
    </>
  );
}
