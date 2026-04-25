import { supabase } from '@/lib/supabase';

export const revalidate = 0; // Disable static rendering since we're fetching dynamic data

export default async function TodosPage() {
  const { data: todos, error } = await supabase
    .from('todos')
    .select('*');

  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-oswald text-slate-900 mb-8 font-bold">Liste des Tâches (Todos)</h1>
        
        {error ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">
            <h3 className="font-bold mb-2">Erreur lors du chargement</h3>
            <p>{error.message}</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            {todos && todos.length > 0 ? (
              <ul className="space-y-4">
                {todos.map((todo: any) => (
                  <li key={todo.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900">{todo.title}</h3>
                      {todo.description && <p className="text-slate-600 text-sm mt-1">{todo.description}</p>}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${todo.is_completed ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {todo.is_completed ? 'Terminé' : 'En cours'}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500 text-center py-8">Aucune tâche trouvée dans la base de données.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
