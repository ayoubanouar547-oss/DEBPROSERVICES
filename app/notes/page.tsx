import { supabase } from '@/lib/supabase';

export const revalidate = 0; // Disable static rendering since we're fetching dynamic data

export default async function NotesPage() {
  const { data: notes, error } = await supabase
    .from('notes')
    .select('*');

  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-oswald text-slate-900 mb-8 font-bold">Notes from Supabase</h1>
        
        {error ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">
            <h3 className="font-bold mb-2">Erreur lors du chargement</h3>
            <p>{error.message}</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            {notes && notes.length > 0 ? (
              <ul className="space-y-4">
                {notes.map((note: any) => (
                  <li key={note.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900">{note.title}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500 text-center py-8">Aucune note trouvée dans la base de données.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
