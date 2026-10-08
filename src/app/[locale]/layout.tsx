import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { STORE_LOCATION } from "@/data/locations";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#10B981",
  width: "device-width",
  initialScale: 1,
};

import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Smart Snack Nutrition | Nutrition Club & Healthy Snacks in Pembroke Pines, FL",
  description:
    "Local nutrition club on Pines Boulevard in Pembroke Pines, FL. Serving 24g+ protein shakes, clean energy mega teas, fresh açaí bowls, and healthy snacks.",
  keywords: [
    "Smart Snack Nutrition",
    "Pembroke Pines",
    "Pines Boulevard",
    "local nutrition",
    "protein shakes",
    "protein shakes Pembroke Pines",
    "energy teas",
    "energy tea Pembroke Pines",
    "healthy snacks",
    "healthy snacks Pembroke Pines",
    "açaí",
    "acai bowls Pembroke Pines",
    "wellness",
    "nutrition club Pembroke Pines",
  ],
  authors: [{ name: "Smart Snack Nutrition" }],
  creator: "Smart Snack Nutrition",
  publisher: "Smart Snack Nutrition",
  metadataBase: new URL("https://smartsnacknutrition.com"),
  icons: {
    icon: "/assets/images/icon-smartsnack.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smart Snack Nutrition | Local Nutrition, Shakes & Energy in Pembroke Pines, FL",
    description:
      "Handcrafted protein shakes, energizing mega teas, fresh açaí bowls, and healthy snacks near Pines Boulevard in Pembroke Pines, Florida.",
    url: "https://smartsnacknutrition.com",
    siteName: "Smart Snack Nutrition",
    images: [
      {
        url: "https://smartsnacknutrition.com/assets/images/hero_shakes_teas.jpg",
        width: 1200,
        height: 630,
        alt: "Smart Snack Nutrition — Protein Shakes, Energy Teas & Açaí Bowls in Pembroke Pines, FL",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Snack Nutrition | Pembroke Pines, FL",
    description:
      "24g+ protein shakes, loaded herbal teas, fresh açaí bowls, and healthy snacks on Pines Blvd.",
    images: ["https://smartsnacknutrition.com/assets/images/hero_shakes_teas.jpg"],
    creator: "@smartsnacknutrition",
    site: "@smartsnacknutrition",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Pembroke Pines",
    "geo.position": "26.0123;-80.3421",
    ICBM: "26.0123, -80.3421",
  },
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function RootLayout(props: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const params = await props.params;
  const { locale } = params;
  const { children } = props;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // GA Measurement ID (configurable via env, with placeholder fallback)
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang={locale} className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FDF9F3] text-[#17343A] flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {/* Accessible skip link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#17343A] text-white px-4 py-2 rounded-md font-bold shadow-lg"
          >
            Skip to main content
          </a>

          {/* Global Layout Landmarks */}
          <Header />
          
          <main id="main-content" className="flex-1">
            {children}
          </main>

        <footer className="relative overflow-hidden bg-[#17343A] text-[#EBF8FA]/80 pt-16 pb-12 border-t border-[#17343A]/20 text-xs">
          {/* Centered Background Watermark Logo */}
          <div 
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[620px] md:h-[620px] opacity-[0.07]">
              <Image 
                src="/assets/images/logo-bn-mitadd-fotter.png" 
                alt="" 
                fill 
                className="object-contain"
                priority={false}
              />
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
              
              {/* Brand Column */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                    <Image 
                      src="/assets/images/icon-smartsnack.png" 
                      alt="Smart Snack Nutrition Icon"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-lg text-white tracking-tight leading-tight">
                      SMART <span className="text-[#55C5D5]">SNACK</span>
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#E83C8B] font-bold">
                      Nutrition Club
                    </span>
                  </div>
                </div>
                <p className="text-[#EBF8FA]/70 text-xs leading-relaxed max-w-sm mb-4">
                  Pembroke Pines, Florida&apos;s neighborhood wellness hub. Dedicated to fueling your active lifestyle with 24g+ protein shakes, clean energy mega teas, fresh açaí bowls, and wholesome protein treats.
                </p>
                <p className="text-[#EBF8FA]/50 text-[11px] leading-relaxed max-w-sm">
                  Smart Snack Nutrition independently crafts fresh recipes using select high-grade nutritional products. Herbalife is a registered trademark; mentions are informational and do not imply direct corporate endorsement.
                </p>
              </div>

              {/* Menu Categories */}
              <div>
                <h4 className="font-bold text-white text-sm mb-3">Menu & Fuel</h4>
                <ul className="space-y-2">
                  <li><Link href="/menu" className="hover:text-[#55C5D5] transition-colors">Full Menu</Link></li>
                  <li><Link href="/protein-shakes" className="hover:text-[#55C5D5] transition-colors">Protein Shakes</Link></li>
                  <li><Link href="/energy-teas" className="hover:text-[#55C5D5] transition-colors">Mega Energy Teas</Link></li>
                  <li><Link href="/acai-bowls" className="hover:text-[#55C5D5] transition-colors">Açaí & Oatmeal Bowls</Link></li>
                  <li><Link href="/waffles-snacks" className="hover:text-[#55C5D5] transition-colors">Waffles & Snacks</Link></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white text-sm mb-3">Explore Club</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="hover:text-[#55C5D5] transition-colors">Our Story & Vibe</Link></li>
                  <li><Link href="/location" className="hover:text-[#55C5D5] transition-colors">Hours & Directions</Link></li>
                  <li><Link href="/contact" className="hover:text-[#55C5D5] transition-colors">Order Ahead / Contact</Link></li>
                  <li>
                    <a
                      href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F4C84A] hover:text-[#f7d678] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Shop Products Online</span>
                      <span>↗</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Pembroke Pines Hours */}
              <div>
                <h4 className="font-bold text-white text-sm mb-3">Visit Pembroke Pines</h4>
                <p className="text-white text-xs mb-1 font-medium">{STORE_LOCATION.streetAddress}</p>
                <p className="text-[#EBF8FA]/70 text-xs mb-3">
                  {STORE_LOCATION.city}, {STORE_LOCATION.state} {STORE_LOCATION.postalCode}
                </p>
                <p className="text-[#EBF8FA]/70 text-[11px] leading-tight mb-2">
                  {STORE_LOCATION.hours.map((h) => (
                    <span key={h.dayRange} className="block">
                      <strong className="text-white">{h.dayRange}:</strong> {h.formatted}
                    </span>
                  ))}
                </p>
                <a href={`tel:${STORE_LOCATION.phone}`} className="text-[#55C5D5] hover:underline font-semibold block text-xs mt-2">
                  Call: {STORE_LOCATION.displayPhone}
                </a>
              </div>

            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[#EBF8FA]/60 text-[11px]">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left">
                <p>&copy; 2026 Smart Snack Nutrition. All rights reserved. Pembroke Pines, Florida.</p>
                <span className="hidden sm:inline text-white/20">•</span>
                <p>
                  Built by{" "}
                  <a 
                    href="https://www.addstrategic.com/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#55C5D5] hover:text-white font-semibold transition-colors underline-offset-2 hover:underline"
                  >
                    ADDSTRATEGIC
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
                <Link href="/join" className="hover:text-[#55C5D5] transition-colors font-bold">Join Our Team</Link>
                <Link href="/location" className="hover:text-white transition-colors">Location</Link>
                <Link href="/menu" className="hover:text-white transition-colors">Menu</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                <span className="hidden md:inline text-white/20">|</span>
                <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Analytics Integrations */}
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={gaId} />}
        
        <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
