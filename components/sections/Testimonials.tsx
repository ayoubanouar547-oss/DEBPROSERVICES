// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Medal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviewsNew = [
  { name: "Jean D.", city: "Bruxelles", body: "Intervention hyper rapide un dimanche soir ! Le technicien a débouché notre canalisation en moins de 30 minutes. Tarifs clairs, aucune surprise.", rating: 5, date: "il y a 2 jours", image: "https://i.pravatar.cc/150?img=11" },
  { name: "Marie L.", city: "Liège", body: "Société très sérieuse. Mon chauffe-eau est tombé en panne, ils ont détecté le problème de gaz rapidement et réparé ça avec un très grand professionnalisme.", rating: 5, date: "il y a 1 semaine", image: "https://i.pravatar.cc/150?img=5" },
  { name: "Antoine V.", city: "Namur", body: "Excellent service. Remplacement complet de mon tableau électrique défectueux. Devis respecté et équipe très courtoise. Je recommande chaudement.", rating: 5, date: "il y a 3 semaines", image: "https://i.pravatar.cc/150?img=12" },
  { name: "Sarah K.", city: "Mons", body: "Urgence fuite d'eau traitée en 45 minutes chrono ! Le plombier a été d'une efficacité redoutable et a sauvé notre parquet.", rating: 5, date: "il y a 1 mois", image: "https://i.pravatar.cc/150?img=9" },
  { name: "Thomas B.", city: "Charleroi", body: "Installation d'un nouveau système de chauffage central. Travail millimétré, propre et des conseils d'or pour l'entretien. 10/10.", rating: 5, date: "il y a 2 mois", image: "https://i.pravatar.cc/150?img=15" }
];

const reviewsReturning = [
  { name: "Entreprise XYZ", city: "Bruxelles", body: "DEB PRO SERVICES gère la maintenance de tous nos locaux commerciaux. Leur réactivité est inégalée sur le marché belge. Des partenaires de confiance.", rating: 5, date: "Partenaire VIP", image: "https://i.pravatar.cc/150?img=33" },
  { name: "Sophie M.", city: "Tournai", body: "C'est la troisième fois que je fais appel à eux (plomberie, gaz, puis chaudière). Toujours le même constat : l'excellence absolue. Bravo à l'équipe !", rating: 5, date: "Cliente fidèle", image: "https://i.pravatar.cc/150?img=47" },
  { name: "Laurent G.", city: "Wavre", body: "Suite à un grave problème d'égouttage, l'équipe a déployé l'inspection caméra et le camion pompe. Intervention spectaculaire et radicale.", rating: 5, date: "il y a 4 jours", image: "https://i.pravatar.cc/150?img=53" },
  { name: "Immo Confort", city: "Anvers", body: "Nous sous-traitons nos urgences électriques et sanitaires à DEB PRO SERVICES pour nos 50+ locataires. Zéro plainte client depuis 2 ans.", rating: 5, date: "Partenaire B2B", image: "https://i.pravatar.cc/150?img=14" },
  { name: "Chantal R.", city: "Louvain-la-Neuve", body: "Un service 5 étoiles ! Débouchage express de ma fosse septique qui débordait un jour férié. Ils m'ont sauvé la mise en 1h. Tarifs hyper transparents.", rating: 5, date: "il y a 1 mois", image: "https://i.pravatar.cc/150?img=44" }
];

export function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Vérification du localStorage pour savoir si le client est déjà venu
    const visited = localStorage.getItem('debpro_has_visited');
    if (visited) {
      setIsReturningUser(true);
    } else {
      localStorage.setItem('debpro_has_visited', 'true');
    }
  }, []);

  // Auto-play the carousel must be declared BEFORE the early return
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const length = isReturningUser ? reviewsReturning.length : reviewsNew.length;
        return (prev + 1) % length;
      });
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [currentIndex, isReturningUser, mounted]);

  if (!mounted) return null; // Avoid hydration mismatch

  const activeReviews = isReturningUser ? reviewsReturning : reviewsNew;

  // Theme constants based on user state (Le style qui change dynamiquement pour le retour du client)
  const theme = isReturningUser ? {
    bgConfig: "bg-gradient-to-br from-amber-700/20 to-orange-900/40",
    border: "border-amber-500/30",
    textHighlight: "text-amber-400",
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.2)]",
    star: "fill-amber-500 text-amber-500",
    badge: "Accès Premium",
    title: "Nos clients fidèles confirment notre excellence",
    subtitle: "Heureux de vous revoir sur DEB PRO SERVICES ! Découvrez ce que nos partenaires de longue date pensent de la constance de nos prestations.",
    btnHover: "hover:bg-amber-500/20 hover:text-amber-300"
  } : {
    bgConfig: "bg-white/5",
    border: "border-white/10",
    textHighlight: "text-blue-400",
    glow: "shadow-[0_0_40px_rgba(21,101,192,0.15)]",
    star: "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]",
    badge: "Avis vérifiés",
    title: "Ce que les particuliers et professionnels disent de nous",
    subtitle: "La satisfaction client est au cœur de notre stratégie. Découvrez leurs expériences avec nos équipes d'urgence.",
    btnHover: "hover:bg-[#1565c0]/20 hover:text-blue-300"
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeReviews.length) % activeReviews.length);
  };

  const getVisibleReview = (offset: number) => {
    const i = (currentIndex + offset + activeReviews.length) % activeReviews.length;
    return activeReviews[i];
  };

  const getActiveSlides = () => {
    // Return 3 slides for desktop, 1 for mobile
    return [
      getVisibleReview(0),
      getVisibleReview(1),
      getVisibleReview(2)
    ];
  };

  return (
    <section className="py-24 relative z-10 border-t border-white/5 overflow-hidden">
      {/* Dynamic Background Glow based on theme */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-colors duration-1000 ${isReturningUser ? 'bg-amber-600' : 'bg-[#1565c0]'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
               {isReturningUser && <Medal className={`w-5 h-5 ${theme.textHighlight}`} />}
               <h2 className={`${theme.textHighlight} font-bold tracking-widest uppercase text-sm transition-colors duration-500`}>{theme.badge}</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 transition-colors duration-500">
              {theme.title}
            </h3>
            <p className="text-white opacity-90 text-lg transition-colors duration-500 font-medium">
              {theme.subtitle}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`backdrop-blur-xl px-6 py-4 rounded-xl border ${theme.border} flex items-center gap-4 bg-slate-950/80 shadow-2xl transition-all duration-500 glass-card`}
          >
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="text-2xl font-black text-white leading-none">4.9/5</div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i === 4 ? `opacity-50 ${theme.star}` : theme.star} transition-colors duration-500`} />)}
                </div>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10 mx-2 hidden sm:block"></div>
            <div className="hidden sm:block">
              <div className="text-xs font-black text-white opacity-60 uppercase tracking-widest leading-none mb-1">Avis Clients</div>
              <div className="text-sm font-black text-white uppercase tracking-tight">{isReturningUser ? 'Membres VIP' : 'Vérifiés Google'}</div>
            </div>
          </motion.div>
        </div>

        {/* Le Carousel Impressionnant (Multiple reviews on desktop) */}
        <div className="relative w-full mx-auto mt-12 pb-12">
           <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-[calc(100%+4rem)] -ml-8 z-20 pointer-events-none px-4 hidden xl:flex">
             <button onClick={() => { handlePrev(); }} className={`pointer-events-auto p-4 rounded-full bg-slate-900/90 border ${theme.border} text-white backdrop-blur-2xl transition-all duration-300 hover:scale-110 shadow-2xl ${theme.btnHover}`}>
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button onClick={() => { handleNext(); }} className={`pointer-events-auto p-4 rounded-full bg-slate-900/90 border ${theme.border} text-white backdrop-blur-2xl transition-all duration-300 hover:scale-110 shadow-2xl ${theme.btnHover}`}>
               <ChevronRight className="w-6 h-6" />
             </button>
           </div>

           <div className="relative">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout" initial={false}>
                  {getActiveSlides().map((review, idx) => {
                    // Hidden secondary reviews on mobile
                    const isVisibleMobile = idx === 0;
                    const isVisibleTablet = idx < 2;
                    
                    return (
                      <motion.div 
                        key={`${currentIndex}-${idx}`}
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30, delay: idx * 0.1 }}
                        className={`${isVisibleMobile ? 'flex' : 'hidden md:flex'} ${!isVisibleTablet && 'md:hidden lg:flex'} flex-col ${theme.bgConfig} backdrop-blur-3xl p-8 rounded-[2rem] border border-white/10 ${theme.glow} relative transition-all duration-500 hover:border-white/20 glass-card`}
                      >
                        <Quote className={`absolute top-6 right-8 w-12 h-12 opacity-[0.05] ${theme.textHighlight}`} />
                        
                        <div className="flex mb-6 gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                             <Star key={i} className={`w-4 h-4 ${theme.star}`} />
                          ))}
                        </div>
                        
                        <p className="text-lg text-white font-medium leading-relaxed mb-8 italic flex-grow">
                          "{review.body}"
                        </p>
                        
                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                          <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${theme.border} shadow-lg shrink-0`}>
                            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-white text-base truncate">{review.name}</h4>
                            <p className={`text-xs font-extrabold uppercase tracking-widest ${theme.textHighlight} truncate`}>{review.city}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
             </div>
           </div>

           {/* Mobile Handlers (Swipe indicators style) */}
           <div className="flex justify-center gap-4 mt-12 md:hidden">
              <button 
                onClick={handlePrev} 
                aria-label="Témoignage précédent"
                className={`p-4 rounded-xl bg-white/5 border border-white/10 text-white ${theme.btnHover} glass-card`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext} 
                aria-label="Témoignage suivant"
                className={`p-4 rounded-xl bg-white/5 border border-white/10 text-white ${theme.btnHover} glass-card`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
           </div>

           {/* Carousel Indicators */}
           <div className="flex justify-center gap-3 mt-10">
             {activeReviews.map((_, idx) => (
               <button 
                 key={idx} 
                 onClick={() => setCurrentIndex(idx)}
                 className="p-2 -m-2 transition-all duration-300 group"
                 aria-label={`Aller au témoignage ${idx + 1}`}
               >
                 <div className={`transition-all duration-500 rounded-full ${currentIndex === idx ? `w-10 h-2 ${isReturningUser ? 'bg-amber-500' : 'bg-blue-400'}` : 'w-2 h-2 bg-slate-700 group-hover:bg-slate-600'}`} />
               </button>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}
