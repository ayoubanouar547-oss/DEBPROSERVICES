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
    <section className="py-24 relative z-10" id="contact">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-2 text-sm">Devis Rapide</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
              Demandez une intervention ou un devis gratuit
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              Remplissez le formulaire ci-dessous avec le maximum de détails. Notre équipe vous recontactera très rapidement avec un diagnostic ou un devis précis.
            </p>
            
            <div className="space-y-6">
               <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Notre Garantie</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Vos données sont sécurisées et nous ne les communiquerons jamais à des tiers. Les devis envoyés via ce formulaire sont 100% gratuits et sans aucun engagement.</p>
               </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4 border border-green-500/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-white">Message Envoyé !</h4>
                <p className="text-slate-400">Nous avons bien reçu votre demande et vous recontacterons dans les plus brefs délais.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-blue-400 font-bold uppercase tracking-wider text-sm hover:text-white transition-colors">Envoyer un autre message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot hidden field */}
                <input type="text" {...register('honeypot')} className="hidden" aria-hidden="true" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">Nom Complet *</label>
                    <input 
                      type="text" 
                      {...register('nom')} 
                      className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.nom ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      placeholder="Jean Dupont"
                    />
                    {errors.nom && <p className="mt-2 text-xs text-red-400 font-bold">{errors.nom.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">Téléphone *</label>
                    <input 
                      type="tel" 
                      {...register('telephone')} 
                      className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.telephone ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      placeholder="0470 00 00 00"
                    />
                    {errors.telephone && <p className="mt-2 text-xs text-red-400 font-bold">{errors.telephone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">Service Demandé *</label>
                    <select 
                      {...register('service')} 
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.service ? 'border-red-500/50' : 'border-white/10'} text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none`}
                    >
                      <option value="plomberie">Plomberie</option>
                      <option value="chauffage">Chauffage</option>
                      <option value="gaz">Gaz</option>
                      <option value="electricite">Électricité</option>
                      <option value="climatisation">Climatisation</option>
                      <option value="fosse">Vidange Fosse</option>
                    </select>
                    {errors.service && <p className="mt-2 text-xs text-red-400 font-bold">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">Ville / Code Postal *</label>
                    <input 
                      type="text" 
                      {...register('ville')} 
                      className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.ville ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      placeholder="1000 Bruxelles"
                    />
                    {errors.ville && <p className="mt-2 text-xs text-red-400 font-bold">{errors.ville.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">Email <span className="font-normal text-slate-500 lowercase">(Optionnel)</span></label>
                  <input 
                    type="email" 
                    {...register('email')} 
                    className={`w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                    placeholder="adresse@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">Détails de l'intervention *</label>
                  <textarea 
                    {...register('message')} 
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none`}
                    placeholder="Décrivez votre problème afin qu'on prépare le matériel adéquat..."
                  />
                  {errors.message && <p className="mt-2 text-xs text-red-400 font-bold">{errors.message.message}</p>}
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 text-red-400 text-sm font-bold rounded-xl border border-red-500/20">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-red-600/20 flex justify-center items-center gap-2 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...</>
                  ) : (
                    <>Envoyer la demande <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
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
