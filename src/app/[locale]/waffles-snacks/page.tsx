import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/menu/product-card";
import { Badge } from "@/components/ui/badge";
import { Cookie, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateProductCollectionSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.wafflesSnacks.title,
  description: SEO_PAGE_CONFIG.wafflesSnacks.description,
  path: "/waffles-snacks",
});

export default function WafflesSnacksPage() {
  const snacks = getProductsByCategory("waffles");

  const collectionSchema = generateProductCollectionSchema(
    "Protein Waffles & Healthy Snacks",
    "Belgian protein waffles, fudge protein brownies, and soft protein cookies in Pembroke Pines, FL.",
    snacks,
    "/waffles-snacks"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu" },
    { name: "Protein Waffles & Snacks", url: "/waffles-snacks" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Menu", href: "/menu" },
            { label: "Protein Waffles & Snacks", current: true },
          ]}
        />
        
        {/* Category Hero */}
        <header className="max-w-3xl mb-12">
          <Badge variant="default" className="mb-3">
            <Cookie className="w-3 h-3 mr-1 text-[#F4C84A]" />
            Guilt-Free Bakery • Pembroke Pines, FL
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17343A] tracking-tight mb-4">
            Protein Waffles & Healthy Snacks in Pembroke Pines
          </h1>
          <p className="text-base sm:text-lg text-[#3D585E] leading-relaxed mb-6">
            Looking for healthy snacks or protein waffles near you? Indulge your cravings with zero compromise. Our Belgian waffles are pressed fresh to order with high-protein batter, and our chewy protein brownies and cookies deliver genuine bakery flavor loaded with nourishing macros right in Pembroke Pines, Florida.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#17343A] mb-8">
            <div className="flex items-center gap-1.5 bg-[#FEF9E7] px-3.5 py-1.5 rounded-full border border-[#F4C84A]/40">
              <CheckCircle2 className="w-4 h-4 text-[#D9A726]" />
              <span>Pressed Hot & Fresh to Order</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FEF9E7] px-3.5 py-1.5 rounded-full border border-[#F4C84A]/40">
              <CheckCircle2 className="w-4 h-4 text-[#D9A726]" />
              <span>Formulated with High Protein Batter</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FEF9E7] px-3.5 py-1.5 rounded-full border border-[#F4C84A]/40">
              <CheckCircle2 className="w-4 h-4 text-[#D9A726]" />
              <span>Lower Sugar Bakery Indulgence</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="default" className="bg-[#E83C8B] hover:bg-[#D22B77] text-white">
              <Link href="/location">VISIT US IN PEMBROKE PINES</Link>
            </Button>
            <Button asChild variant="secondary" size="default">
              <Link href="/menu">VIEW FULL MENU</Link>
            </Button>
            <Button asChild variant="outline" size="default">
              <Link href="/location" className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#55C5D5]" />
                GET DIRECTIONS
              </Link>
            </Button>
          </div>
        </header>

        {/* Product Grid Section */}
        <section className="mb-20" aria-labelledby="snacks-grid-heading">
          <h2 id="snacks-grid-heading" className="text-2xl font-bold text-[#17343A] mb-6">
            Guilt-Free Bakery & High-Protein Snacks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {snacks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Educational Content & Local Signals Section */}
        <section className="bg-[#FDF9F3] rounded-3xl border border-[#17343A]/10 p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17343A] mb-4">
            Baked For Everyday Fitness & Healthy Lifestyle
          </h2>
          <p className="text-base text-[#3D585E] leading-relaxed mb-6">
            You don’t have to give up your favorite bakery classics to stay on track. Our nutrition club in Pembroke Pines crafts wholesome treats that satisfy your sweet tooth while keeping your blood sugar steady and muscle recovery prioritized.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Crisp Belgian Waffles</h3>
              <p className="text-sm text-[#3D585E]">
                Golden on the exterior and fluffy inside, served warm with sugar-free syrups and fruit additions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Rich Fudge Brownies</h3>
              <p className="text-sm text-[#3D585E]">
                Deep cocoa indulgence infused with quality protein to curb chocolate cravings guilt-free.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Soft Protein Cookies</h3>
              <p className="text-sm text-[#3D585E]">
                The ultimate on-the-go snack to stash in your gym bag or grab before your Pembroke Pines commute.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-linking Internal Categories Section */}
        <nav aria-label="Related Nutrition Categories" className="pt-8 border-t border-[#17343A]/10">
          <h2 className="text-xl font-bold text-[#17343A] mb-4">
            Pair Your Snack With A Refreshing Drink
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/protein-shakes"
              className="group p-5 bg-white rounded-2xl border border-[#17343A]/10 hover:border-[#55C5D5] transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#55C5D5] uppercase tracking-wider block mb-1">High Protein</span>
                <span className="font-bold text-[#17343A] group-hover:text-[#55C5D5] transition-colors">24g+ Protein Shakes</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#55C5D5] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/energy-teas"
              className="group p-5 bg-white rounded-2xl border border-[#17343A]/10 hover:border-[#55C5D5] transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#55C5D5] uppercase tracking-wider block mb-1">Clean Energy</span>
                <span className="font-bold text-[#17343A] group-hover:text-[#55C5D5] transition-colors">Mega Loaded Energy Teas</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#55C5D5] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/acai-bowls"
              className="group p-5 bg-white rounded-2xl border border-[#17343A]/10 hover:border-[#E83C8B] transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#E83C8B] uppercase tracking-wider block mb-1">Superfoods</span>
                <span className="font-bold text-[#17343A] group-hover:text-[#E83C8B] transition-colors">Fresh Açaí Bowls</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#E83C8B] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </nav>

      </div>
    </div>
  );
}
