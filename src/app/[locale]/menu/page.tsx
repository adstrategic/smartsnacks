import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/content/categories";
import { generateMenuSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { MenuExperience } from "@/components/menu/menu-experience";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.menu.title,
  description: SEO_PAGE_CONFIG.menu.description,
  path: "/menu",
});

export default function MenuPage() {
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
        <header className="text-center max-w-3xl mx-auto mb-12">
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
