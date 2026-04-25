'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  nom: z.string().min(2, "Le nom est trop court").max(100),
  telephone: z.string().min(8, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide").optional().or(z.literal('')),
  service: z.enum(['plomberie', 'chauffage', 'gaz', 'electricite', 'climatisation', 'fosse']),
  ville: z.string().min(2, "Veuillez entrer votre ville"),
  message: z.string().min(10, "Le message est trop court, merci de préciser.").max(1000),
  honeypot: z.string().max(0, "Invalid field") // Anti-spam
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Erreur lors de l\'envois');
      }

      setStatus('success');
      reset();
    } catch (e) {
      console.error(e);
      setStatus('error');
      setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez nous contacter par téléphone.");
    }
  };

  return (
    <section className="py-32 relative z-10 bg-[#00040a] border-t border-white/5" id="contact">
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-red-900/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-red-500 font-black tracking-[0.4em] uppercase mb-6 text-xs">SOS INTERVENTION</h2>
              <h3 className="text-4xl md:text-7xl font-black text-white mb-8 font-oswald uppercase tracking-tighter leading-none">
                Demandez un <br/><span className="text-blue-500">Devis Express</span>
              </h3>
              <p className="text-slate-400 text-xl font-medium leading-relaxed">
                Besoin d'une intervention immédiate ? Remplissez ce formulaire. Nous traitons les demandes prioritaires en moins de 15 minutes.
              </p>
            </div>
            
            <div className="space-y-6">
               <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
                  <h4 className="font-black text-white uppercase tracking-widest text-lg mb-4 font-oswald italic">Transparence Totale</h4>
                  <p className="text-slate-400 text-base leading-relaxed font-medium">Nos prix sont fixes et annoncés à l'avance. Pas de surprises sur la facture, juste un service de qualité premium.</p>
               </div>
               
               <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-600/10 border border-blue-500/20 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-blue-400">Certifié Belge</div>
                  <div className="bg-green-600/10 border border-green-500/20 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-green-400">Assurance Incluse</div>
                  <div className="bg-yellow-600/10 border border-yellow-500/20 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-yellow-400">Réponse Flash</div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 blur-3xl pointer-events-none"></div>
            
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 border-2 border-green-500/30"
                >
                  <CheckCircle className="w-12 h-12" />
                </motion.div>
                <div className="space-y-2">
                  <h4 className="text-4xl font-black text-white uppercase font-oswald tracking-tight">Signal Reçu !</h4>
                  <p className="text-slate-400 text-lg font-medium">Un technicien analyse votre demande. Restez joignable.</p>
                </div>
                <button onClick={() => setStatus('idle')} className="bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all">Nouveau Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <input type="text" {...register('honeypot')} className="hidden" aria-hidden="true" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-[0.2em]">Identité</label>
                    <input 
                      type="text" 
                      {...register('nom')} 
                      className={`w-full px-6 py-5 rounded-2xl bg-white/5 border ${errors.nom ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/[0.08] text-lg font-bold`}
                      placeholder="Votre nom complet"
                    />
                    {errors.nom && <p className="text-xs text-red-500 font-bold uppercase tracking-widest px-2">{errors.nom.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-[0.2em]">Contact Direct</label>
                    <input 
                      type="tel" 
                      {...register('telephone')} 
                      className={`w-full px-6 py-5 rounded-2xl bg-white/5 border ${errors.telephone ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/[0.08] text-lg font-bold`}
                      placeholder="04XX XX XX XX"
                    />
                    {errors.telephone && <p className="text-xs text-red-500 font-bold uppercase tracking-widest px-2">{errors.telephone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-[0.2em]">Type d'Urgence</label>
                    <select 
                      {...register('service')} 
                      className={`w-full px-6 py-5 rounded-2xl bg-[#0d1525] border ${errors.service ? 'border-red-500/50' : 'border-white/10'} text-white focus:outline-none focus:border-blue-500/50 transition-all text-lg font-bold appearance-none cursor-pointer`}
                    >
                      <option value="plomberie">Plomberie</option>
                      <option value="chauffage">Chauffage</option>
                      <option value="gaz">Gaz</option>
                      <option value="electricite">Électricité</option>
                      <option value="climatisation">Climatisation</option>
                      <option value="fosse">Vidange Fosse</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-[0.2em]">Localisation</label>
                    <input 
                      type="text" 
                      {...register('ville')} 
                      className={`w-full px-6 py-5 rounded-2xl bg-white/5 border ${errors.ville ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/[0.08] text-lg font-bold`}
                      placeholder="Ville ou Commune"
                    />
                    {errors.ville && <p className="text-xs text-red-500 font-bold uppercase tracking-widest px-2">{errors.ville.message}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-[0.2em]">Description du problème</label>
                  <textarea 
                    {...register('message')} 
                    rows={4}
                    className={`w-full px-6 py-5 rounded-2xl bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/[0.08] text-lg font-bold resize-none`}
                    placeholder="Précisez la nature de l'urgence ou du projet..."
                  />
                  {errors.message && <p className="text-xs text-red-500 font-bold uppercase tracking-widest px-2">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[#CC1F1F] hover:bg-[#E52D2D] text-white font-black py-7 px-8 rounded-2xl transition-all shadow-2xl shadow-red-900/20 flex justify-center items-center gap-4 uppercase tracking-[0.3em] disabled:opacity-50 text-xl border-b-4 border-[#8B1515] active:translate-y-1 active:border-b-0"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-8 h-8 animate-spin" /> Analyse en cours...</>
                  ) : (
                    <>Envoyer Prioritairement <Send className="w-6 h-6" /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
