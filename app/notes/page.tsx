import { supabase } from '@/lib/supabase';

export const revalidate = 0; // Disable static rendering since we're fetching dynamic data

export default async function NotesPage() {
  const { data: notes, error } = await supabase
    .from('notes')
    .select('*');

  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-oswald text-slate-900 mb-2 font-bold uppercase tracking-tight">Notes & Rapports</h1>
        <p className="text-slate-500 mb-8">Consultez les notes techniques et archives de nos interventions.</p>
        
        {error ? (
          <div className="bg-red-50 text-red-700 p-6 rounded-2xl border border-red-100 shadow-sm">
            <div className="flex items-center gap-3 mb-3 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
              <h3 className="font-bold text-lg">Erreur de communication avec la base de données</h3>
            </div>
            <p className="mb-4 text-slate-600 italic">Désolé, nous n'avons pas pu récupérer vos notes. Veuillez réessayer plus tard ou contacter le support technique si le problème persiste.</p>
            <div className="bg-white/80 p-3 rounded-xl border border-red-200 text-[10px] font-mono text-red-500 overflow-x-auto">
              <strong>Détail technique :</strong> {error.message || "Erreur inconnue"}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
            {notes && notes.length > 0 ? (
              <ul className="space-y-6">
                {notes.map((note: any) => (
                  <li key={note.id} className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors group">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-700 transition-colors">{note.title}</h3>
                        {note.created_at && (
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100 shrink-0">
                            {new Date(note.created_at).toLocaleDateString('fr-BE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                          </span>
                        )}
                      </div>
                      
                      {/* Affichage de la description ou du contenu */}
                      {(note.content || note.description) && (
                        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                          {note.content || note.description}
                        </p>
                      )}

                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Référence: {note.id.substring(0, 8)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-x text-slate-300"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 12 6 6"/><path d="m15 12-6 6"/></svg>
                </div>
                <p className="text-slate-500 font-medium whitespace-nowrap">Aucune note n'a encore été publiée sur cet interface.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
