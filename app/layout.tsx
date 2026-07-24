import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PreFooterLinks } from "@/components/layout/PreFooterLinks";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import ChatBot from "@/components/layout/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://debservices.canalrose.be"),
  title: {
    template: "%s",
    default: "DEB PRO SERVICES Belgique 🚀 Plomberie, Chauffage, Électricité, Gaz, Caméras, Solaires & Climatisation 24/7",
  },
  description:
    "DEB PRO SERVICES en Belgique : plomberie, débouchage, chauffage, gaz, électricité, climatisation, ventilation VMC, caméras de surveillance, panneaux solaires, vidange fosse septique, toiture, rénovation, jardinage & vitres. Intervention rapide 24/7.",
  keywords:
    "plomberie Belgique, électricité Belgique, gaz Belgique, climatisation Belgique, ventilation VMC, caméras de surveillance, panneaux solaires photovoltaïques, débouchage canalisation, chauffage urgence, vidange fosse septique, rénovation maison, toiture, Belgique 24/7",
  authors: [{ name: "Deb Pro Service" }],
  creator: "Deb Pro Service",
  publisher: "Deb Pro Service",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://debservices.canalrose.be",
  },
  openGraph: {
    title:
      "DEB PRO SERVICES Belgique 🚀 Tous vos Services & Dépannages 24h/24",
    description:
      "Services complets en Belgique 24/7 : Plomberie, Chauffage, Gaz, Électricité, Climatisation, Ventilation, Caméras de surveillance, Panneaux solaires, Vidange fosse septique, Rénovation & Dépannage rapide.",
    url: "https://debservices.canalrose.be",
    siteName: "Deb Pro Service",
    images: [
      {
        url: "https://picsum.photos/seed/debpro/1200/630",
        width: 1200,
        height: 630,
        alt: "Deb Pro Service - Plomberie et Débouchage en Belgique",
      },
    ],
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgence Plomberie, Chauffage & Débouchage en Belgique 🚀",
    description:
      "Dépannage d'urgence 24/7 pour plomberie, chauffage et débouchage. Intervention rapide et efficace.",
    images: ["https://picsum.photos/seed/debpro/1200/630"],
  },
  verification: {
    google: "EzJCaAlzhQ39X0jWHXeJrMgF3-RDrFjKMTgx5bs0UGE",
    other: {
      "msvalidate.01": "9DB75FAF1500A17D9FE4DE423F249119",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1A3A8F",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (typeof window !== "undefined") {
                    var currentFetch = window.fetch || (typeof fetch !== "undefined" ? fetch : null);
                    if (currentFetch) {
                      var patched = false;
                      var targets = [
                        window,
                        Window.prototype,
                        Object.getPrototypeOf(window),
                        Object.prototype
                      ];
                      for (var i = 0; i < targets.length; i++) {
                        try {
                          var target = targets[i];
                          if (target) {
                            Object.defineProperty(target, 'fetch', {
                              get: function() { return currentFetch; },
                              set: function(val) { currentFetch = val; },
                              configurable: true,
                              enumerable: true
                            });
                            patched = true;
                            break;
                          }
                        } catch (err) {
                          // Try next target
                        }
                      }
                      if (!patched) {
                        console.warn("Failed to patch window.fetch with getter/setter on any target");
                      }
                    }
                  }
                } catch (e) {
                  console.warn("Failed to patch window.fetch to be writable:", e);
                }
                
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'light') {
                    document.documentElement.classList.add('light-theme');
                  } else {
                    document.documentElement.classList.remove('light-theme');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        <link rel="preconnect" href="https://debouchageexpress24hh.odoo.com" />
        <link rel="preconnect" href="https://www.debouchageexpress24-24h.be" />
      </head>
      <body
        className="antialiased font-body min-h-screen flex flex-col selection:bg-primary selection:text-white relative bg-[#000814] text-white"
        suppressHydrationWarning
      >
        {/* Advanced Background Animation blobs - Professional Blue/Cyan Palette */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#000814]">
          <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-blue-700/20 rounded-full blur-[150px] animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
          <div className="absolute middle-0 left-[-20%] w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[160px] animate-blob-slow"></div>

          {/* subtle grid pattern for a more technical/plumbing look */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* CSS noise pattern instead of an external SVG for performance */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-noise"></div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Deb Pro Service",
              "url": "https://debservices.canalrose.be",
            })
          }}
        />

        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <PreFooterLinks />
        <Footer />
        <CookieBanner />
        <ChatBot />
        <MobileBottomNav />
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined" && 
                  window.self === window.top && 
                  !window.location.hostname.includes("localhost") && 
                  !window.location.hostname.includes("127.0.0.1") && 
                  !window.location.hostname.includes("run.app") && 
                  !window.location.hostname.includes("ais-")) {
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "wjxyfzz68l");
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
