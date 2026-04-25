import type {Metadata, Viewport} from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DEB PRO SERVICES | Plombier, Chauffage & Débouchage 24H/24',
  description: 'Intervention d\'urgence 24H/24 et 7J/7 en Belgique. Plomberie, débouchage de canalisation, chauffage, gaz, électricité et vidange de fosse septique.',
};

export const viewport: Viewport = {
  themeColor: '#000814',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${inter.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="antialiased font-body min-h-screen flex flex-col selection:bg-primary selection:text-white relative bg-[#000814] text-white" suppressHydrationWarning>
        {/* Advanced Background Animation blobs - Professional Blue/Cyan Palette */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#000814]">
          <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-blue-700/20 rounded-full blur-[150px] animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
          <div className="absolute middle-0 left-[-20%] w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[160px] animate-blob-slow"></div>
          
          {/* subtle grid pattern for a more technical/plumbing look */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
          
          {/* Subtle noise pattern */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>
        </div>

        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <CookieBanner />
        <MobileBottomNav />
        <SpeedInsights />
      </body>
    </html>
  );
}
