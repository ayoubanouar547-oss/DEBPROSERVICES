"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-slate-950 text-white flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl font-bold mb-4">Une erreur est survenue</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-semibold"
        >
          Réessayer
        </button>
      </body>
    </html>
  );
}
