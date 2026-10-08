import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/menu/product-card";
import { Badge } from "@/components/ui/badge";
import { Flame, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateProductCollectionSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.proteinShakes.title,
  description: SEO_PAGE_CONFIG.proteinShakes.description,
  path: "/protein-shakes",
});

export default function ProteinShakesPage() {
  const shakes = getProductsByCategory("protein-shakes");

  const collectionSchema = generateProductCollectionSchema(
    "Protein Shakes & Smoothies",
    "Gourmet 24g+ high protein shakes, smoothies, and meal replacements in Pembroke Pines, FL.",
    shakes,
    "/protein-shakes"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu" },
    { name: "Protein Shakes", url: "/protein-shakes" },
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
            { label: "Protein Shakes", current: true },
          ]}
        />
        
        {/* Category Hero */}
        <header className="max-w-3xl mb-12">
          <Badge variant="default" className="mb-3">
            <Flame className="w-3 h-3 mr-1 text-[#55C5D5]" />
            24g+ Quality Protein • Pembroke Pines, FL
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17343A] tracking-tight mb-4">
            Protein Shakes & Smoothies in Pembroke Pines
          </h1>
          <p className="text-base sm:text-lg text-[#3D585E] leading-relaxed mb-6">
            Looking for high protein shakes near you? Every shake at Smart Snack Nutrition is blended fresh with 24g+ of premium protein, low sugar, and 21 essential vitamins. Perfect for quick morning fuel, meal replacement, or post-workout recovery right here in Pembroke Pines, Florida.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#17343A] mb-8">
            <div className="flex items-center gap-1.5 bg-[#EBF8FA] px-3.5 py-1.5 rounded-full border border-[#55C5D5]/30">
              <CheckCircle2 className="w-4 h-4 text-[#55C5D5]" />
              <span>24g+ Premium Protein</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#EBF8FA] px-3.5 py-1.5 rounded-full border border-[#55C5D5]/30">
              <CheckCircle2 className="w-4 h-4 text-[#55C5D5]" />
              <span>Low Sugar Formulation</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#EBF8FA] px-3.5 py-1.5 rounded-full border border-[#55C5D5]/30">
              <CheckCircle2 className="w-4 h-4 text-[#55C5D5]" />
              <span>21 Essential Vitamins</span>
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
        <section className="mb-20" aria-labelledby="shakes-grid-heading">
          <h2 id="shakes-grid-heading" className="text-2xl font-bold text-[#17343A] mb-6">
            Gourmet High-Protein Shake Flavors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shakes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Educational Content & Local Signals Section */}
        <section className="bg-[#FDF9F3] rounded-3xl border border-[#17343A]/10 p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17343A] mb-4">
            Why Pembroke Pines Chooses Our High Protein Shakes
          </h2>
          <p className="text-base text-[#3D585E] leading-relaxed mb-6">
            Whether you are hitting the gym in Pembroke Pines, heading to work along Pines Boulevard, or looking for a guilt-free healthy meal replacement, our nutrition club delivers smooth, satisfying nutrition that tastes like dessert without compromising your fitness goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Clean Post-Workout Fuel</h3>
              <p className="text-sm text-[#3D585E]">
                High amino acid and protein profile crafted to repair muscle tissues and curb hunger for hours.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Micro-Nutrient Dense</h3>
              <p className="text-sm text-[#3D585E]">
                Fortified with 21 essential micronutrients, calcium, and fiber for total daily wellness.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Convenient Grab-and-Go</h3>
              <p className="text-sm text-[#3D585E]">
                Call ahead or stop by our Pembroke Pines location for lightning-fast preparation on busy days.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-linking Internal Categories Section */}
        <nav aria-label="Related Nutrition Categories" className="pt-8 border-t border-[#17343A]/10">
          <h2 className="text-xl font-bold text-[#17343A] mb-4">
            Explore More Healthy Drinks & Snacks Near You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                <span className="font-bold text-[#17343A] group-hover:text-[#E83C8B] transition-colors">Fresh Açaí & Oatmeal Bowls</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#E83C8B] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/waffles-snacks"
              className="group p-5 bg-white rounded-2xl border border-[#17343A]/10 hover:border-[#F4C84A] transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#F4C84A] uppercase tracking-wider block mb-1">Guilt-Free Bakery</span>
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
