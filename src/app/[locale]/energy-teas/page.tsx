import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/menu/product-card";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateProductCollectionSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.energyTeas.title,
  description: SEO_PAGE_CONFIG.energyTeas.description,
  path: "/energy-teas",
});

export default function EnergyTeasPage() {
  const teas = getProductsByCategory("energy-teas");

  const collectionSchema = generateProductCollectionSchema(
    "Mega Loaded Energy Teas & Healthy Drinks",
    "Zero-sugar crash loaded mega energy teas and healthy botanical drinks in Pembroke Pines, FL.",
    teas,
    "/energy-teas"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu" },
    { name: "Energy Teas", url: "/energy-teas" },
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
            { label: "Energy Teas", current: true },
          ]}
        />
        
        {/* Category Hero */}
        <header className="max-w-3xl mb-12">
          <Badge variant="default" className="mb-3">
            <Zap className="w-3 h-3 mr-1 text-[#55C5D5]" />
            Zero Sugar Crash Energy • Pembroke Pines, FL
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17343A] tracking-tight mb-4">
            Energy Tea & Healthy Drinks in Pembroke Pines
          </h1>
          <p className="text-base sm:text-lg text-[#3D585E] leading-relaxed mb-6">
            Looking for natural energy tea near you? Say goodbye to sugary soda crashes. Our Mega Loaded Energy Teas are layered with revitalizing botanical extracts, B-complex vitamins, and soothing aloe to sharpen focus, support metabolism, and keep you energized under the South Florida sun.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#17343A] mb-8">
            <div className="flex items-center gap-1.5 bg-[#EBF8FA] px-3.5 py-1.5 rounded-full border border-[#55C5D5]/30">
              <CheckCircle2 className="w-4 h-4 text-[#55C5D5]" />
              <span>Zero Sugar Crash Alertness</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#EBF8FA] px-3.5 py-1.5 rounded-full border border-[#55C5D5]/30">
              <CheckCircle2 className="w-4 h-4 text-[#55C5D5]" />
              <span>Vitamins B6, B12 & Biotin</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#EBF8FA] px-3.5 py-1.5 rounded-full border border-[#55C5D5]/30">
              <CheckCircle2 className="w-4 h-4 text-[#55C5D5]" />
              <span>Hydrating Soothing Aloe Vera</span>
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
        <section className="mb-20" aria-labelledby="teas-grid-heading">
          <h2 id="teas-grid-heading" className="text-2xl font-bold text-[#17343A] mb-6">
            Signature Mega Energy Drinks & Loaded Teas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teas.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Educational Content & Local Signals Section */}
        <section className="bg-[#FDF9F3] rounded-3xl border border-[#17343A]/10 p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17343A] mb-4">
            Clean Energy Drinks Without The Sugar Spike
          </h2>
          <p className="text-base text-[#3D585E] leading-relaxed mb-6">
            Traditional canned energy drinks are often packed with artificial fillers and excessive refined sugar that leave you sluggish 90 minutes later. Our Pembroke Pines nutrition club prepares refreshing herbal blends formulated with botanical thermogenics and pure hydration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Sustained Alertness</h3>
              <p className="text-sm text-[#3D585E]">
                Clean herbal caffeine derived from green and black tea bases paired with B-complex vitamins for smooth clarity.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Digestive Aloe Vera</h3>
              <p className="text-sm text-[#3D585E]">
                Infused with premium aloe vera concentrate to soothe digestion and maximize cellular hydration in humid Florida weather.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Made Fresh Daily</h3>
              <p className="text-sm text-[#3D585E]">
                Vibrant multi-layer recipes handcrafted to order right in Pembroke Pines for an instant morning or afternoon boost.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-linking Internal Categories Section */}
        <nav aria-label="Related Nutrition Categories" className="pt-8 border-t border-[#17343A]/10">
          <h2 className="text-xl font-bold text-[#17343A] mb-4">
            Explore More Healthy Drinks & Treats in Pembroke Pines
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
              href="/acai-bowls"
              className="group p-5 bg-white rounded-2xl border border-[#17343A]/10 hover:border-[#E83C8B] transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#E83C8B] uppercase tracking-wider block mb-1">Superfoods</span>
                <span className="font-bold text-[#17343A] group-hover:text-[#E83C8B] transition-colors">Fresh Açaí & Oatmeal Bowls</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#E83C8B] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/waffles-snacks"
              className="group p-5 bg-white rounded-2xl border border-[#17343A]/10 hover:border-[#F4C84A] transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#F4C84A] uppercase tracking-wider block mb-1">Bakery</span>
                <span className="font-bold text-[#17343A] group-hover:text-[#17343A] transition-colors">Protein Waffles & Snacks</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#F4C84A] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </nav>

      </div>
    </div>
  );
}
