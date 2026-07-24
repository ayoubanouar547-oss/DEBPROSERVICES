"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Medal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviewsNewFR = [
  {
    name: "Jean D.",
    city: "Bruxelles",
    body: "Intervention hyper rapide un dimanche soir ! Le technicien a débouché notre canalisation en moins de 30 minutes. Tarifs clairs, aucune surprise.",
    rating: 5,
    date: "il y a 2 jours",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Marie L.",
    city: "Liège",
    body: "Société très sérieuse. Mon chauffe-eau est tombé en panne, ils ont détecté le problème de gaz rapidement et réparé ça avec un très grand professionnalisme.",
    rating: 5,
    date: "il y a 1 semaine",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Antoine V.",
    city: "Namur",
    body: "Excellent service. Remplacement complet de mon tableau électrique défectueux. Devis respecté et équipe très courtoise. Je recommande chaudement.",
    rating: 5,
    date: "il y a 3 semaines",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sarah K.",
    city: "Mons",
    body: "Urgence fuite d'eau traitée en 45 minutes chrono ! Le plombier a été d'une efficacité redoutable et a sauvé notre parquet.",
    rating: 5,
    date: "il y a 1 mois",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Thomas B.",
    city: "Charleroi",
    body: "Installation d'un nouveau système de chauffage central. Travail millimétré, propre et des conseils d'or pour l'entretien. 10/10.",
    rating: 5,
    date: "il y a 2 mois",
    image: "https://i.pravatar.cc/150?img=15",
  },
];

const reviewsNewNL = [
  {
    name: "Jan D.",
    city: "Brussel",
    body: "Super snelle interventie op een zondagavond! De technicus heeft onze leiding in minder dan 30 minuten ontstopt. Transparante tarieven, geen verrassingen.",
    rating: 5,
    date: "2 dagen geleden",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Marie L.",
    city: "Luik",
    body: "Zeer professioneel bedrijf. Mijn boiler begaf het, ze vonden het gasprobleem heel snel en herstelden het met grote vakkundigheid.",
    rating: 5,
    date: "1 week geleden",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Antoon V.",
    city: "Namen",
    body: "Uitstekende service. Volledige vervanging van mijn defecte zekeringkast. Offerte gerespecteerd en zeer beleefd team. Warm aanbevolen.",
    rating: 5,
    date: "3 weken geleden",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sarah K.",
    city: "Bergen",
    body: "Dringend waterlek opgelost in slechts 45 minuten! De loodgieter was uiterst efficiënt en heeft ons parket gered.",
    rating: 5,
    date: "1 maand geleden",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Thomas B.",
    city: "Charleroi",
    body: "Installatie van een nieuw centraal verwarmingssysteem. Zeer nauwkeurig, schoon werk en uitstekend onderhoudsadvies. 10/10.",
    rating: 5,
    date: "2 maanden geleden",
    image: "https://i.pravatar.cc/150?img=15",
  },
];

const reviewsReturningFR = [
  {
    name: "Entreprise XYZ",
    city: "Bruxelles",
    body: "DEB PRO SERVICES gère la maintenance de tous nos locaux commerciaux. Leur réactivité est inégalée sur le marché belge. Des partenaires de confiance.",
    rating: 5,
    date: "Partenaire VIP",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Sophie M.",
    city: "Tournai",
    body: "C'est la troisième fois que je fais appel à eux (plomberie, gaz, puis chaudière). Toujours le même constat : l'excellence absolue. Bravo à l'équipe !",
    rating: 5,
    date: "Cliente fidèle",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Laurent G.",
    city: "Wavre",
    body: "Suite à un grave problème d'égouttage, l'équipe a déployé l'inspection caméra et le camion pompe. Intervention spectaculaire et radicale.",
    rating: 5,
    date: "il y a 4 jours",
    image: "https://i.pravatar.cc/150?img=53",
  },
  {
    name: "Immo Confort",
    city: "Anvers",
    body: "Nous sous-traitons nos urgences électriques et sanitaires à DEB PRO SERVICES pour nos 50+ locataires. Zéro plainte client depuis 2 ans.",
    rating: 5,
    date: "Partenaire B2B",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Chantal R.",
    city: "Louvain-la-Neuve",
    body: "Un service 5 étoiles ! Débouchage express de ma fosse septique qui débordait un jour férié. Ils m'ont sauvé la mise en 1h. Tarifs hyper transparents.",
    rating: 5,
    date: "il y a 1 mois",
    image: "https://i.pravatar.cc/150?img=44",
  },
];

const reviewsReturningNL = [
  {
    name: "Bedrijf XYZ",
    city: "Brussel",
    body: "DEB PRO SERVICES beheert het onderhoud van al onze commerciële panden. Hun reactiesnelheid is ongeëvenaard op de Belgische markt. Betrouwbare partner.",
    rating: 5,
    date: "VIP Partner",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Sophie M.",
    city: "Doornik",
    body: "Dit is de derde keer dat ik ze bel (loodgieterij, gas, en ketel). Altijd dezelfde vaststelling: absolute perfectie. Bravo aan het hele team!",
    rating: 5,
    date: "Vaste klant",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Laurent G.",
    city: "Waver",
    body: "Na een ernstig rioolprobleem heeft het team camera-inspectie en de pompwagen ingezet. Spectaculaire en radicale interventie.",
    rating: 5,
    date: "4 dagen geleden",
    image: "https://i.pravatar.cc/150?img=53",
  },
  {
    name: "Immo Confort",
    city: "Antwerpen",
    body: "Wij besteden onze elektriciteits- en sanitaire noodgevallen voor onze 50+ huurders uit aan DEB PRO SERVICES. Al 2 jaar nul klachten.",
    rating: 5,
    date: "B2B Partner",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Chantal R.",
    city: "Louvain-la-Neuve",
    body: "Een 5-sterrenservice! Snelle lediging van mijn septic tank die overliep op een feestdag. Ze hielpen me binnen een uur uit de brand. Transparante tarieven.",
    rating: 5,
    date: "1 maand geleden",
    image: "https://i.pravatar.cc/150?img=44",
  },
];

export function Testimonials() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const [mounted, setMounted] = useState(false);
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const visited = localStorage.getItem("debpro_has_visited");
    if (visited) {
      setIsReturningUser(true);
    } else {
      localStorage.setItem("debpro_has_visited", "true");
    }
  }, []);

  const reviewsNew = isNl ? reviewsNewNL : reviewsNewFR;
  const reviewsReturning = isNl ? reviewsReturningNL : reviewsReturningFR;

  const activeReviews = isReturningUser ? reviewsReturning : reviewsNew;

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const length = activeReviews.length;
        return (prev + 1) % length;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isReturningUser, mounted, activeReviews.length]);

  const themePrimary = {
    bgConfig: "bg-[#010918]/80",
    border: "border-blue-500/10",
    textHighlight: "text-blue-400",
    glow: "shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)]",
    star: "fill-yellow-400 text-yellow-400",
    badge: isNl ? "Geverifieerde Reviews" : "Avis vérifiés",
    title: isNl ? "Wat Belgen over ons vertellen" : "Ce que les belges disent de nous",
    subtitle: isNl 
      ? "Klanttevredenheid staat centraal in onze werking. Ontdek de ervaringen van onze klanten met onze spoeddiensten." 
      : "La satisfaction client est au cœur de notre stratégie. Découvrez leurs expériences avec nos équipes d'urgence.",
    btnHover: "hover:bg-blue-600/20 hover:text-blue-300 hover:border-blue-500/30",
  };

  const themeReturning = {
    bgConfig: "bg-[#010918]/80",
    border: "border-amber-500/20",
    textHighlight: "text-amber-400",
    glow: "shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)]",
    star: "fill-amber-500 text-amber-500",
    badge: isNl ? "Premium Toegang" : "Accès Premium",
    title: isNl ? "Onze trouwe klanten bevestigen de kwaliteit" : "Nos clients fidèles confirment notre excellence",
    subtitle: isNl
      ? "Fijn u weer te zien bij DEB PRO SERVICES! Ontdek wat onze vaste B2B-partners en particuliere klanten van ons vinden."
      : "Heureux de vous revoir sur DEB PRO SERVICES ! Découvrez ce que nos partenaires de longue date pensent de nos prestations.",
    btnHover: "hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-500/40",
  };

  const theme = mounted && isReturningUser ? themeReturning : themePrimary;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + activeReviews.length) % activeReviews.length,
    );
  };


  const getVisibleReview = (offset: number) => {
    const i =
      (currentIndex + offset + activeReviews.length) % activeReviews.length;
    return activeReviews[i];
  };

  const getActiveSlides = () => {
    return [getVisibleReview(0), getVisibleReview(1), getVisibleReview(2)];
  };

  return (
    <section className="py-24 relative z-10 border-t border-white/5 overflow-hidden bg-[#00040A]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-12 h-[2px] ${isReturningUser ? "bg-amber-500" : "bg-blue-500"}`}></span>
              {isReturningUser && (
                <Medal className={`w-4 h-4 ${theme.textHighlight}`} />
              )}
              <h2
                className={`${theme.textHighlight} font-black tracking-widest uppercase text-sm`}
              >
                {theme.badge}
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {theme.title}
            </h3>
            <p className="text-slate-400 text-lg font-medium border-l-2 border-white/10 pl-6">
              {theme.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`backdrop-blur-xl px-8 py-5 rounded-[2rem] border ${theme.border} flex items-center gap-5 bg-white/5 shadow-2xl relative overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${isReturningUser ? "from-amber-500/10 to-transparent" : "from-blue-500/10 to-transparent"} pointer-events-none`} />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-white leading-none tracking-tighter">
                  4.9<span className="text-lg text-slate-500">/5</span>
                </div>
                <div className="flex mt-1.5 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i === 4 ? `opacity-50 ${theme.star}` : theme.star}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-12 w-px bg-white/10 mx-2 hidden sm:block"></div>
            <div className="hidden sm:block relative z-10">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">
                Note Globale
              </div>
              <div className="text-sm font-black text-white uppercase tracking-wider">
                {isReturningUser ? "Clients VIP" : "Vérifiés Google"}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Carousel Area */}
        <div className="relative w-full mx-auto pb-12">
          {/* Desktop Navigation Overlays */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 flex justify-between z-20 pointer-events-none hidden xl:flex">
            <button
              onClick={handlePrev}
              className={`pointer-events-auto p-4 rounded-2xl bg-[#010918]/80 border ${theme.border} text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 shadow-2xl ${theme.btnHover}`}
              aria-label={isNl ? "Vorige getuigenis" : "Témoignage précédent"}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className={`pointer-events-auto p-4 rounded-2xl bg-[#010918]/80 border ${theme.border} text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 shadow-2xl ${theme.btnHover}`}
              aria-label={isNl ? "Volgende getuigenis" : "Témoignage suivant"}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout" initial={false}>
                {getActiveSlides().map((review, idx) => {
                  const isVisibleMobile = idx === 0;
                  const isVisibleTablet = idx < 2;

                  return (
                    <motion.div
                      key={`${currentIndex}-${idx}`}
                      initial={{ opacity: 1, scale: 1, y: 0 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 1, scale: 1, y: -30 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className={`${isVisibleMobile ? "flex" : "hidden md:flex"} ${!isVisibleTablet && "md:hidden lg:flex"} flex-col ${theme.bgConfig} backdrop-blur-3xl p-10 rounded-[2.5rem] border ${theme.border} ${theme.glow} relative hover:border-white/20 transition-all duration-500 hover:-translate-y-2`}
                    >
                      <Quote
                        className={`absolute top-8 right-8 w-12 h-12 opacity-[0.03] ${theme.textHighlight}`}
                      />

                      <div className="flex mb-8 gap-1.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${theme.star}`} />
                        ))}
                      </div>

                      <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10 italic flex-grow">
                        "{review.body}"
                      </p>

                      <div className="flex items-center gap-5 mt-auto pt-6 border-t border-white/5">
                        <div
                          className="w-14 h-14 rounded-[1.25rem] overflow-hidden border-2 border-white/10 shadow-lg shrink-0 relative p-1"
                        >
                          <div className="relative w-full h-full rounded-2xl overflow-hidden">
                             <Image
                               src={review.image}
                               alt={`Photo de profil de ${review.name}`}
                               fill
                               sizes="56px"
                               className="object-cover"
                               referrerPolicy="no-referrer"
                             />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-black text-white text-base truncate mb-1">
                            {review.name}
                          </h4>
                          <p
                            className={`text-[10px] font-black uppercase tracking-widest ${theme.textHighlight} truncate`}
                          >
                            {review.city}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Handlers */}
          <div className="flex justify-center gap-4 mt-12 xl:hidden">
            <button
              onClick={handlePrev}
              className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-white ${theme.btnHover}`}
              aria-label={isNl ? "Vorige getuigenis" : "Témoignage précédent"}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-white ${theme.btnHover}`}
              aria-label={isNl ? "Volgende getuigenis" : "Témoignage suivant"}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {activeReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-500 rounded-full ${currentIndex === idx ? `w-12 h-2 ${isReturningUser ? "bg-amber-500" : "bg-blue-500"}` : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Aller au témoignage ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
