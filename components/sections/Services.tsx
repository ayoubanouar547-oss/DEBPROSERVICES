'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data/services';
import { motion } from 'motion/react';

export function Services() {
  return (
    <section className="py-24 relative z-10 border-t border-white/10" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-2 text-sm">Nos Domaines d'Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
            Services Rapides et Professionnels
          </h3>
          <p className="text-white font-medium text-lg opacity-90">
            Nous couvrons l'ensemble de vos besoins résidentiels et commerciaux. Des urgences aux installations complètes, nos experts sont à votre disposition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass-card rounded-3xl hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col shadow-2xl"
              >
                <div className={`absolute right-0 top-0 w-32 h-32 rounded-full opacity-10 ${service.color.glow} transition-transform group-hover:scale-[4] blur-3xl z-0 pointer-events-none`}></div>
                
                {/* Card Image */}
                <div className="relative h-56 w-full overflow-hidden flex-shrink-0 z-10">
                  <img 
                    src={service.imageUrl || `https://picsum.photos/seed/${service.slug}/600/400`} 
                    alt={`Service de ${service.title}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className={`absolute bottom-4 left-6 w-16 h-16 rounded-2xl ${service.color.bg} ${service.color.text} flex items-center justify-center shadow-2xl border ${service.color.border} backdrop-blur-md`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-8 pt-8 flex flex-col flex-grow relative z-10">
                  <h4 className="text-3xl font-black font-oswald text-white mb-3 mt-4 tracking-tight leading-none uppercase">{service.title}</h4>
                  <p className="text-slate-400 font-medium mb-6 flex-grow text-base leading-relaxed">
                    {service.description.slice(0, 100)}...
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-[10px] font-black text-white uppercase tracking-[0.2em] bg-white/5 px-4 py-2 rounded-full border border-white/5 self-start transition-colors hover:bg-white/10">
                         <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ x: 5 }}>
                    <Link 
                      href={`/${service.slug}`}
                      className="mt-auto group inline-flex items-center text-sm font-black text-white transition-all uppercase tracking-[0.3em] bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/20"
                    >
                      DÉTAILS
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

