"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, Circle, AlertTriangle, Loader2 } from "lucide-react";

export default function TodosPage() {
  const [todos, setTodos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTodos(data || []);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function toggleTodo(id: string, currentStatus: boolean) {
    if (updatingId) return; // Prevent multiple clicks

    try {
      setUpdatingId(id);
      const { error } = await supabase
        .from("todos")
        .update({ is_completed: !currentStatus })
        .eq("id", id);

      if (error) throw error;

      // Update local state for immediate feedback
      setTodos((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, is_completed: !currentStatus } : t,
        ),
      );
    } catch (err: any) {
      alert(`Oups ! Impossible de mettre à jour la tâche : ${err.message}`);
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-slate-50/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-oswald text-slate-900 mb-2 font-bold uppercase tracking-tight">
              Liste des Tâches
            </h1>
            <p className="text-slate-500 text-lg">
              Gérez vos interventions et le suivi des chantiers en temps réel.
            </p>
          </div>
          <button
            onClick={fetchTodos}
            className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors"
          >
            Actualiser la liste
          </button>
        </div>

        {loading && !todos.length ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
            <p className="text-slate-500 font-medium">
              Chargement des données en cours...
            </p>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-700 p-8 rounded-3xl border border-red-100 shadow-xl shadow-red-200/20">
            <div className="flex items-center gap-4 mb-4 text-red-600">
              <AlertTriangle className="w-8 h-8" />
              <h3 className="font-bold text-xl uppercase tracking-tight">
                Dysfonctionnement du service
              </h3>
            </div>
            <p className="mb-6 text-slate-600 leading-relaxed">
              Une erreur est survenue lors de la tentative de connexion à nos
              serveurs de données. Cela peut provenir d'une maintenance ou d'un
              problème réseau.
            </p>
            <div className="bg-white/80 p-4 rounded-xl border border-red-200 text-xs font-mono text-red-500">
              <strong>Rapport d'erreur Supabase :</strong>{" "}
              {error.message || "Impossible de décoder l'erreur."}
            </div>
            <button
              onClick={fetchTodos}
              className="mt-6 w-full md:w-auto bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
            >
              Réessayer la connexion
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-50 bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {todos.length} {todos.length > 1 ? "Tâches" : "Tâche"}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Dernière mise à jour: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>

            <div className="p-4 md:p-8">
              {todos && todos.length > 0 ? (
                <ul className="space-y-4">
                  {todos.map((todo: any) => (
                    <li
                      key={todo.id}
                      className={`group p-6 border-2 transition-all duration-300 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:shadow-lg ${todo.is_completed ? "bg-slate-50/50 border-slate-100 opacity-80" : "bg-white border-transparent shadow-md hover:border-blue-100"}`}
                      onClick={() => toggleTodo(todo.id, !!todo.is_completed)}
                    >
                      <div className="flex items-start gap-5">
                        <div className="mt-1 shrink-0 relative">
                          {updatingId === todo.id ? (
                            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                          ) : todo.is_completed ? (
                            <CheckCircle2 className="w-8 h-8 text-emerald-500 fill-emerald-50" />
                          ) : (
                            <Circle className="w-8 h-8 text-slate-300 group-hover:text-blue-400 transition-colors" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3
                            className={`font-bold text-lg leading-tight transition-all ${todo.is_completed ? "text-slate-400 line-through" : "text-slate-900"}`}
                          >
                            {todo.title}
                          </h3>
                          {todo.description && (
                            <p
                              className={`text-sm mt-1 transition-all ${todo.is_completed ? "text-slate-400" : "text-slate-500"}`}
                            >
                              {todo.description}
                            </p>
                          )}
                          <div className="flex items-center gap-3 mt-3">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              ID: {todo.id.substring(0, 6)}
                            </span>
                            {todo.created_at && (
                              <span className="text-[10px] font-medium text-slate-300">
                                Créé le{" "}
                                {new Date(todo.created_at).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="md:shrink-0">
                        <span
                          className={`inline-flex items-center justify-center px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter transition-all ${todo.is_completed ? "bg-emerald-100/50 text-emerald-600 border border-emerald-100" : "bg-blue-600 text-white shadow-lg shadow-blue-600/20"}`}
                        >
                          {todo.is_completed ? "Complété" : "À faire"}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-slate-200" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 whitespace-nowrap">
                    Tout est en ordre !
                  </h3>
                  <p className="text-slate-500 max-w-xs mx-auto">
                    Toutes vos tâches ont été traitées ou aucune n'a été
                    planifiée.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
