import type {Metadata, Viewport} from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';

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
  metadataBase: new URL('https://debservices.canalrose.be'),
  title: 'DEB PRO SERVICES | Plombier, Chauffage & Débouchage 24H/24 en Belgique',
  description: 'Expertise en plomberie, débouchage de canalisation, chauffage, gaz, électricité et vidange de fosse septique. Intervention d\'urgence 24H/24 partout en Belgique. Devis gratuit.',
  keywords: 'plombier Belgique, débouchage canalisation, chauffage urgence, vidange fosse septique, électricien urgent, gaz certifié, dépannage chaudière, Bruxelles, Wallonie, Flandre',
  authors: [{ name: 'DEB PRO SERVICES' }],
  creator: 'DEB PRO SERVICES',
  publisher: 'DEB PRO SERVICES',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://debservices.canalrose.be',
  },
  openGraph: {
    title: 'DEB PRO SERVICES | Solution d\'urgence Plomberie & Débouchage 24H/24',
    description: 'Une urgence ? Nos plombiers et déboucheurs interviennent en 30 minutes partout en Belgique. Qualité garantie, tarifs transparents.',
    url: 'https://debservices.canalrose.be',
    siteName: 'DEB PRO SERVICES',
    images: [
      {
        url: 'https://picsum.photos/seed/debpro/1200/630',
        width: 1200,
        height: 630,
        alt: 'DEB PRO SERVICES - Plomberie et Débouchage en Belgique',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEB PRO SERVICES | Plombier & Débouchage 24H/24 en Belgique',
    description: 'Dépannage d\'urgence 24/7 pour plomberie, chauffage et débouchage. Intervention rapide et efficace.',
    images: ['https://picsum.photos/seed/debpro/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#1A3A8F',
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
          
          {/* CSS noise pattern instead of an external SVG for performance */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-noise"></div>
        </div>

        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <CookieBanner />
        <MobileBottomNav />
      </body>
    </html>
  );
}
