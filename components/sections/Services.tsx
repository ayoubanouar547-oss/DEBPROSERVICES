"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data/services";
import { dutchServices } from "@/lib/data/translations";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 0 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 80, damping: 20 }
  },
};

export function Services() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const currentServicesList = isNl ? dutchServices : services;

  return (
    <section
      className="py-24 relative z-10 border-t border-white/5 overflow-hidden bg-[#00040A]"
      id="services"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-cyan-900/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[2px] bg-blue-500"></span>
              <h2 className="text-blue-400 font-black tracking-widest uppercase text-sm">
                {isNl ? "Onze Expertisegebieden" : "Nos Domaines d'Expertise"}
              </h2>
            </motion.div>
            <motion.h3
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
            >
              {isNl ? (
                <>
                  Snelle en Professionele <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Kwaliteitsdiensten
                  </span>
                </>
              ) : (
                <>
                  Services Rapides <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    et Professionnels
                  </span>
                </>
              )}
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 font-medium text-lg max-w-md border-l-2 border-white/10 pl-6 py-2">
              {isNl ? (
                "Wij dekken al uw residentiële en commerciële behoeften. Van dringende spoedinterventies tot complete nieuwe installaties."
              ) : (
                "Nous couvrons l'ensemble de vos besoins résidentiels et commerciaux. Des urgences aux installations complètes."
              )}
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {currentServicesList.map((service, index) => {
            // Re-map the icon since dutchServices objects match by id
            const originalService = services.find(s => s.id === service.id);
            const Icon = originalService ? originalService.icon : ArrowRight;

            return (
              <motion.div
                variants={itemVariants}
                key={service.id}
                viewport={{ once: true }}
                className="group relative bg-[#010918]/80 backdrop-blur-xl rounded-[2rem] border border-white/5 hover:border-blue-500/30 overflow-hidden flex flex-col transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div
                  className={`absolute right-0 top-0 w-40 h-40 rounded-full opacity-0 ${service.color.glow} transition-all duration-700 group-hover:opacity-20 group-hover:scale-[2.5] blur-[40px] z-0 pointer-events-none`}
                ></div>

                {/* Card Image Area */}
                <div className="relative h-60 w-full overflow-hidden flex-shrink-0 z-10 mask-image-b group-hover:h-52 leading-none transition-all duration-500">
                  <Image
                    src={originalService?.imageUrl || `https://picsum.photos/seed/${service.slug}/600/400`}
                    alt={isNl ? `Erkende ${service.title} in België` : `Service de ${service.title} en Belgique`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010918] via-[#010918]/80 to-transparent transition-opacity duration-500"></div>

                  <div
                    className={`absolute bottom-4 left-6 w-14 h-14 rounded-2xl ${service.color.bg} ${service.color.text} flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-md transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="px-8 pb-8 flex flex-col flex-grow relative z-10">
                  <h4 className="text-2xl font-black font-heading text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 font-medium mb-6 flex-grow text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                    {service.description.slice(0, 110)}...
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-xs font-bold text-slate-200"
                      >
                        <CheckCircle2 className={`w-4 h-4 mr-2 ${service.color.text} shrink-0 mt-0.5`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {service.testimonial && (
                    <div className="mb-6 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto overflow-hidden transition-all duration-500">
                       <div className="p-4 rounded-xl bg-white/5 border border-white/5 relative italic flex flex-col gap-3">
                        <p className="text-slate-300 text-xs">"{service.testimonial.text}"</p>
                        <div className="flex justify-between items-end">
                           <span className="text-[9px] font-bold text-yellow-400 uppercase">{ service.testimonial.author }</span>
                           <div className="flex text-yellow-500 gap-[1px]">
                             {[1,2,3,4,5].map(s => <svg key={s} className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                           </div>
                        </div>
                       </div>
                    </div>
                  )}

                  <Link
                    href={isNl ? `/nl/${service.slug}` : `/${service.slug}`}
                    className="mt-auto w-full inline-flex items-center justify-between text-sm font-black text-white group/link bg-white/5 px-6 py-4 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all uppercase tracking-widest relative overflow-hidden"
                  >
                    <span className="relative z-10">{isNl ? "Bekijk Details" : "Détails du Service"}</span>
                    <div className="relative z-10 bg-white/10 p-1.5 rounded-lg group-hover/link:bg-blue-500 transition-colors">
                       <ArrowRight className="w-4 h-4 group-hover/link:-rotate-45 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

