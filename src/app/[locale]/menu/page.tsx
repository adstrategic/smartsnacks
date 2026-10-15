import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/content/categories";
import { generateMenuSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Scan, ArrowRight } from "lucide-react";
import { MenuExperience } from "@/components/menu/menu-experience";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.menu.title,
  description: SEO_PAGE_CONFIG.menu.description,
  path: "/menu",
});

export default async function MenuPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'MenuPromo' });
  const menuSchema = generateMenuSchema(PRODUCTS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Full Menu", current: true }]} />

        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="default" className="mb-3">
            Pembroke Pines, FL • Full Nutrition Menu
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17343A] tracking-tight mb-4">
            Healthy Drinks & <span className="text-[#55C5D5]">Protein Snacks</span>
          </h1>
          <p className="text-base sm:text-lg text-[#3D585E] leading-relaxed">
            Crafted fresh to order in Pembroke Pines using 24g+ quality protein, clean botanical energy extracts, and fresh superfoods. Filter by category below.
          </p>
        </header>

        {/* Scanner Promo Callout Banner */}
        <div className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#17343A] via-[#1C3E45] to-[#17343A] text-white p-6 sm:p-8 border border-[#55C5D5]/30 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#55C5D5]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#E83C8B]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#55C5D5]/20 text-[#55C5D5] border border-[#55C5D5]/30 flex items-center justify-center shrink-0 shadow-inner">
                <Scan className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4C84A]/15 text-[#F4C84A] text-[11px] font-black tracking-wider uppercase border border-[#F4C84A]/30 mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{t('badge')}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {t('title')}
                </h2>
                <p className="text-xs sm:text-sm text-[#EBF8FA]/80 max-w-2xl leading-relaxed">
                  {t('description')}
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#E83C8B] to-[#D22B77] text-white shadow-lg shadow-[#E83C8B]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{t('cta')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Menu Experience */}
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-[#17343A]">Loading menu items...</div>}>
          <MenuExperience initialProducts={PRODUCTS} />
        </Suspense>

        {/* Informational Disclaimer Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-[#FDF9F3] border border-[#17343A]/10 text-xs text-[#3D585E] flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-[#55C5D5] mt-0.5 shrink-0" />
          <p>
            Smart Snack Nutrition independently crafts fresh recipes for our local Pembroke Pines community using select high-grade nutritional products (including select Herbalife bases) and fresh wholesome ingredients. Inquire in-club for personalized nutritional adjustments and daily specials.
          </p>
        </div>
      </div>
    </div>
  );
}
