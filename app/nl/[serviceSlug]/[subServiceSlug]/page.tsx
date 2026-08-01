import { dutchServices, getAlternatePath, localizeNlText, frToNlCitySlugMap, frToNlCityNameMap } from "@/lib/data/translations";
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
import { getProfessionMetaTitle } from "@/lib/utils/seo-content-generator";
import { PaintingGallery } from "@/components/sections/PaintingGallery";
import { DebouchageGallery } from "@/components/sections/DebouchageGallery";

function getDebouchageInitialType(slug: string) {
  if (slug.includes("wc") || slug.includes("toilet")) return "wc" as const;
  if (slug.includes("evier") || slug.includes("wastafel") || slug.includes("gootsteen")) return "evier" as const;
  if (slug.includes("egout") || slug.includes("riolering") || slug.includes("leidingen") || slug.includes("afvoer")) return "canalisation" as const;
  if (slug.includes("camera")) return "camera" as const;
  if (slug.includes("douche") || slug.includes("baignoire") || slug.includes("bad")) return "douche" as const;
  return "all" as const;
}

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
  const params: { serviceSlug: string; subServiceSlug: string }[] = [];
  dutchServices.forEach((service) => {
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
  const service = dutchServices.find((s) => s.slug === resolvedParams.serviceSlug);
  const subService = service?.subServices.find(
    (sub) => sub.slug === resolvedParams.subServiceSlug
  );

  if (!service || !subService) return {};

  const frSlugPath = getAlternatePath(`/nl/${resolvedParams.serviceSlug}/${resolvedParams.subServiceSlug}`, 'fr');

  return {
    title: getProfessionMetaTitle(subService.slug, "België", true),
    description: `Nood aan een expert voor ${subService.title.toLowerCase()}? ${subService.desc} Erkende technici met 24/7 spoedinterventie in heel België.`,
    keywords: `${subService.title} België, ${subService.title} spoed, expert ${subService.title.toLowerCase()}, reparatie 24h/24, ${service.title} België`,
    alternates: {
      canonical: `https://debservices.canalrose.be/nl/${service.slug}/${subService.slug}`,
      languages: {
        'fr': `https://debservices.canalrose.be${frSlugPath}`,
        'nl': `https://debservices.canalrose.be/nl/${service.slug}/${subService.slug}`
      }
    },
      openGraph: {
      title: `🚨 ${subService.title} België — Snelle Interventie ⚡`,
      description: `Expertise in ${subService.title.toLowerCase()} in heel België. Snelle service 24/7.`,
      url: `https://debservices.canalrose.be/nl/${service.slug}/${subService.slug}`,
      images: [
        {
          url: (subService as any).imageUrl || (service as any).imageUrl || `https://picsum.photos/seed/${service.id}-${subService.slug}/1200/800`,
          width: 800,
          height: 600,
          alt: subService.title,
        },
      ],
    },
  };
}

function buildLongNlClusterText(serviceName: string, cityName: string, serviceDesc?: string): string[] {
  return [
    `<h2 class="text-3xl font-black text-white mb-6 mt-12">Professionele aanpak voor ${serviceName} in ${cityName}</h2>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">Wanneer u te maken heeft met een dringende noodsituatie voor <strong>${serviceName}</strong> in ${cityName}, is een snelle en vakkundige service van cruciaal belang. Bij PRO SERVICES bieden wij gecertificeerde technici die binnen 30 tot 60 minuten ter plaatse zijn om de situatie te stabiliseren en te verhelpen.</p>`,
    `<div class="bg-blue-600/10 border-l-4 border-blue-400 p-6 my-8 rounded-r-2xl">
       <h3 class="text-xl font-bold text-blue-300 mb-3">Onze kwaliteitsgarantie</h3>
       <p class="text-white/90 text-lg leading-relaxed">${serviceDesc || "Wij maken uitsluitend gebruik van gecertificeerde onderdelen en de nieuwste diagnose-apparatuur."}</p>
     </div>`,
    `<h3 class="text-2xl font-bold text-blue-300 mb-4 mt-8">Waarom kiezen voor onze experts?</h3>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">Ons team is volledig uitgerust met moderne gereedschappen, waaronder thermografische lekdetectie, HD-camera-inspectie en krachtige hogedruk-reinigers. Wij bieden 100% transparante tarieven door vooraf een gratis offerte op te stellen, zodat u nooit voor verrassingen komt te staan.</p>`,
    `<div class="mt-12 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
       <h3 class="text-2xl font-bold text-white mb-6">Veelgestelde vragen over ${serviceName}</h3>
       <div class="space-y-6">
         <div>
           <p class="font-bold text-blue-400 mb-2">Q: Hoe snel kan een technicus aanwezig zijn in ${cityName}?</p>
           <p class="text-white/80">A: Voor dringende interventies streven we ernaar om binnen 30 tot 60 minuten ter plaatse te zijn.</p>
         </div>
         <div>
           <p class="font-bold text-blue-400 mb-2">Q: Ontvang ik vooraf een prijsopgave?</p>
           <p class="text-white/80">A: Ja, al onze interventies starten met een transparante en kosteloze offerte.</p>
         </div>
       </div>
     </div>`
  ];
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string; subServiceSlug: string }>;
}) {
  const resolvedParams = await params;
  const serviceInfo = dutchServices.find(
    (s) => s.slug === resolvedParams.serviceSlug,
  );
  const subServiceInfo = serviceInfo?.subServices.find(
    (sub) => sub.slug === resolvedParams.subServiceSlug,
  );

  if (!serviceInfo || !subServiceInfo) {
    notFound();
  }

  const paragraphs = [
    `Wanneer het gaat over <strong>${subServiceInfo.title.toLowerCase()}</strong>, is het inschakelen van een gekwalificeerde professional essentieel. Bij PRO SERVICES hebben we een unieke expertise opgebouwd in België voor de categorie ${serviceInfo.title.toLowerCase()}. Onze teams komen dag en nacht, inclusief zon- en feestdagen, tussenbeide om een snelle en efficiënte oplossing te garanderen.`,

    `De dienst <em>${subServiceInfo.title.toLowerCase()}</em> vereist specifieke knowhow en aangepast materiaal. Onze gecertificeerde technici komen naar u toe met volledig uitgeruste bedrijfswagens, waarmee 95% van de storingen al bij het eerste bezoek kan worden opgelost. ${subServiceInfo.desc}`,

    `Wacht niet tot de situatie verslechtert. Problemen met ${serviceInfo.title.toLowerCase()} kunnen aanzienlijke nevenschade veroorzaken (overstromingen, kortsluiting, gezondheidsrisico's). Door te kiezen voor PRO SERVICES voor uw behoefte aan ${subServiceInfo.title.toLowerCase()}, geniet u van één jaar garantie op onze interventies, volledige prijstransparantie met een gratis offerte vooraf, en een professionaliteit die wordt erkend door meer dan 5.000 tevreden klanten.`,

    `Wij dekken het hele Belgische grondgebied (Brussel, Wallonië en de Vlaamse rand). Zodra we uw oproep ontvangen, analyseert een dispatcher uw noodsituatie in <strong>${subServiceInfo.title.toLowerCase()}</strong> en stuurt de dichtstbijzijnde technicus op basis van uw postcode. De interventie is traceerbaar, veilig en respecteert strikt de geldende Belgische normen.`
  ];

  const massiveSEOContent = buildLongNlClusterText(
    subServiceInfo.title.toLowerCase(),
    "Belgische Gemeenten",
    subServiceInfo.desc
  );

  const heroImage = (subServiceInfo as any).imageUrl || (serviceInfo as any).imageUrl || `https://picsum.photos/seed/${serviceInfo.id}-${subServiceInfo.slug}/1200/800`;
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
                "@id": `https://debservices.canalrose.be/nl/${serviceInfo.slug}/${subServiceInfo.slug}#service`,
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
                  addressLocality: "Brussel",
                  addressRegion: "Brussel",
                  postalCode: "1000",
                  streetAddress: "Brussel Centrum",
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
                "@id": `https://debservices.canalrose.be/nl/${serviceInfo.slug}/${subServiceInfo.slug}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://debservices.canalrose.be/nl",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: serviceInfo.title,
                    item: `https://debservices.canalrose.be/nl/${serviceInfo.slug}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: subServiceInfo.title,
                    item: `https://debservices.canalrose.be/nl/${serviceInfo.slug}/${subServiceInfo.slug}`,
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
            src={heroImage}
            alt={`PRO SERVICES - ${subServiceInfo.title}`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#000814]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-[#000814]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/nl" className="hover:text-blue-400 font-medium">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/nl/${serviceInfo.slug}`}
              className="hover:text-blue-400 font-medium"
            >
              {serviceInfo.title}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">{subServiceInfo.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 rounded-full text-xs font-black uppercase tracking-[0.2em] text-white mb-8 shadow-xl shadow-blue-600/20">
                <IconComponent className="w-4 h-4" />
                Gespecialiseerde Interventie 24/7
              </div>
              <h1 className="text-[40px] leading-[1.1] md:text-5xl lg:text-7xl font-black leading-[1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-blue-200 uppercase tracking-tighter">
                {subServiceInfo.title}
              </h1>
              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed">
                {subServiceInfo.desc} Onze erkende technici komen bij u langs voor spoedinterventie 24u/24 en 7j/7 in heel België. Duurzame oplossingen en gegarandeerd vakwerk.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <a
                  href="tel:0498 35 25 88"
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
              </div>
            </div>

            <div className="lg:col-span-5 w-full max-w-lg mx-auto mt-8 lg:mt-0">
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <div className="bg-white/5 border-b border-white/10 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: PhoneCall, text: "Interventie < 60 min" },
              { icon: ChevronRight, text: "Gratis Offerte" },
              { icon: ChevronRight, text: "Erkend Technicus" },
              { icon: ChevronRight, text: "1 Jaar Garantie" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 text-slate-300"
              >
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <badge.icon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section with Images Gallery */}
      <section className="py-20 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-10">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] uppercase tracking-tight">
                Professionele expertise in {subServiceInfo.title}
              </h2>

              {serviceInfo.slug === "peinture" ? (
                <PaintingGallery />
              ) : serviceInfo.slug === "debouchage-canalisation" ? (
                <DebouchageGallery initialType={getDebouchageInitialType(resolvedParams.subServiceSlug)} isNl={true} />
              ) : (
                /* Secondary Images Gallery */
                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-white/10">
                    <Image
                      src={
                        serviceInfo.subServices[0]?.imageUrl ||
                        heroImage
                      }
                      alt={`Interventie techniek ${subServiceInfo.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-white/10">
                    <Image
                      src={
                        serviceInfo.subServices[1]?.imageUrl ||
                        heroImage
                      }
                      alt={`Professionele herstelling ${subServiceInfo.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="prose prose-xl prose-invert text-white max-w-none">
                <p className="text-2xl font-medium text-blue-200 mb-8 leading-relaxed">
                  PRO SERVICES is uw betrouwbare partner in België voor alle noden in verband met{" "}
                  <strong>{subServiceInfo.title.toLowerCase()}</strong>. Wij combineren snelle interventie en technische uitmuntendheid.
                </p>

                <div className="grid md:grid-cols-2 gap-8 not-prose mb-12">
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">
                      Onze garanties :
                    </h3>
                    <ul className="space-y-4">
                      {serviceInfo.features.map((f, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">
                      Waarom ons bellen ?
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Dringende interventie in minder dan een uur.</span>
                      </li>
                      <li className="flex gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>
                          Erkende en hooggekwalificeerde technici.
                        </span>
                      </li>
                      <li className="flex gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Ultramoderne diagnoseapparatuur.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: paragraphs[0] }} />
                <div dangerouslySetInnerHTML={{ __html: paragraphs[1] }} />

                <h3 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">
                  Veiligheid en Transparence
                </h3>
                <div dangerouslySetInnerHTML={{ __html: paragraphs[2] }} />

                <h3 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">
                  Actief in heel België
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
                    Andere diensten in {serviceInfo.title}
                  </h3>
                  <ul className="space-y-3">
                    {serviceInfo.subServices.map((sub: any) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/nl/${serviceInfo.slug}/${sub.slug}`}
                          className={`flex items-center gap-2 text-sm transition-colors ${sub.slug === subServiceInfo.slug ? "text-blue-400 font-bold" : "text-slate-400 hover:text-white"}`}
                        >
                          <ChevronRight className="w-4 h-4" />
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Emergency Box */}
                <div className="bg-gradient-to-br from-red-600 to-red-900 p-6 rounded-2xl border border-red-500/30 text-white shadow-2xl">
                  <h4 className="font-black text-2xl mb-2">Urgentie 24/7</h4>
                  <p className="text-red-100 text-sm mb-6">
                    Wij zijn onmiddellijk beschikbaar voor elk noodgeval i.v.m. {subServiceInfo.title.toLowerCase()}.
                  </p>
                  <a
                    href="tel:0498 35 25 88"
                    className="bg-white text-red-700 w-full px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition"
                  >
                    <PhoneCall className="w-5 h-5" /> Bel de technicus
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
              Interventie {subServiceInfo.title} per stad
            </h2>
            <p className="text-slate-400">
              Vind uw lokale expert voor een snelle herstelling.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {belgianCities.slice(0, 20).map((city) => {
              const nlCitySlug = frToNlCitySlugMap[city.slug] || city.slug;
              const nlCityName = frToNlCityNameMap[city.name] || city.name;
              return (
                <Link
                  key={city.slug}
                  href={`/nl/${serviceInfo.slug}-${nlCitySlug}`}
                  className="px-3 py-1 bg-slate-800 border border-white/10 rounded-full text-xs text-slate-300 hover:text-white transition"
                >
                  {nlCityName}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">
              Aanvraag voor interventie {subServiceInfo.title}
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ customFaqs={serviceInfo.faqs} />
      <ServiceSeoText serviceTitle={subServiceInfo.title} />
    </>
  );
}
