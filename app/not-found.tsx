import Link from 'next/link';
import { PhoneCall, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-9xl font-black text-blue-500 mb-4 tracking-tighter">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page non trouvée</h2>
        <p className="text-slate-400 mb-10 text-lg">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
          DEB PRO SERVICES reste à votre disposition 24h/24 pour vos urgences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition">
            <Home className="w-5 h-5" /> Retour à l'accueil
          </Link>
          <a href="tel:0496325733" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition">
            <PhoneCall className="w-5 h-5" /> Urgence : 0496 32 57 33
          </a>
        </div>
      </div>
    </div>
  );
}
