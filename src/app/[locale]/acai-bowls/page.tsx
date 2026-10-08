import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/menu/product-card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateProductCollectionSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.acaiBowls.title,
  description: SEO_PAGE_CONFIG.acaiBowls.description,
  path: "/acai-bowls",
});

export default function AcaiBowlsPage() {
  const bowls = getProductsByCategory("acai");

  const collectionSchema = generateProductCollectionSchema(
    "Fresh Açaí & Superfood Bowls",
    "Thick antioxidant açaí bowls and warm high-protein oatmeal bowls in Pembroke Pines, FL.",
    bowls,
    "/acai-bowls"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu" },
    { name: "Açaí Bowls", url: "/acai-bowls" },
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
            { label: "Açaí Bowls", current: true },
          ]}
        />
        
        {/* Category Hero */}
        <header className="max-w-3xl mb-12">
          <Badge variant="default" className="mb-3">
            <ShieldCheck className="w-3 h-3 mr-1 text-[#E83C8B]" />
            Antioxidant Superfoods • Pembroke Pines, FL
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17343A] tracking-tight mb-4">
            Fresh Açaí Bowls in Pembroke Pines
          </h1>
          <p className="text-base sm:text-lg text-[#3D585E] leading-relaxed mb-6">
            Looking for fresh açaí bowls near you? At Smart Snack Nutrition, every bowl is blended thick from pure antioxidant-rich açaí berries and crowned with fresh cut fruits, crunchy granola, and chia seeds. Enjoy chilled tropical superfoods or comforting warm protein oatmeal bowls right here in Pembroke Pines.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#17343A] mb-8">
            <div className="flex items-center gap-1.5 bg-[#FDF0F6] px-3.5 py-1.5 rounded-full border border-[#E83C8B]/30">
              <CheckCircle2 className="w-4 h-4 text-[#E83C8B]" />
              <span>Antioxidant-Dense Superfood Açaí</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FDF0F6] px-3.5 py-1.5 rounded-full border border-[#E83C8B]/30">
              <CheckCircle2 className="w-4 h-4 text-[#E83C8B]" />
              <span>Fresh Hand-Cut Fruit Toppings</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FDF0F6] px-3.5 py-1.5 rounded-full border border-[#E83C8B]/30">
              <CheckCircle2 className="w-4 h-4 text-[#E83C8B]" />
              <span>Warm High-Protein Oatmeal Options</span>
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
        <section className="mb-20" aria-labelledby="bowls-grid-heading">
          <h2 id="bowls-grid-heading" className="text-2xl font-bold text-[#17343A] mb-6">
            Signature Açaí & Superfood Bowls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bowls.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Educational Content & Local Signals Section */}
        <section className="bg-[#FDF9F3] rounded-3xl border border-[#17343A]/10 p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17343A] mb-4">
            Nutritious Superfoods Made Fresh In West Broward
          </h2>
          <p className="text-base text-[#3D585E] leading-relaxed mb-6">
            We believe healthy food should look stunning and taste phenomenal. Our Pembroke Pines kitchen prepares every bowl to order with real fruit, whole grains, and nutrient-dense toppings designed to fuel your active Florida lifestyle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Pure Antioxidants</h3>
              <p className="text-sm text-[#3D585E]">
                Organic wild açaí base rich in anthocyanins to defend against oxidative stress and keep you glowing.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Customizable Crunch</h3>
              <p className="text-sm text-[#3D585E]">
                Add organic chia seeds, gluten-friendly granola, toasted coconut shavings, or pure honey drizzle.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#17343A]/8">
              <h3 className="font-bold text-[#17343A] mb-2">Warm Protein Oatmeal</h3>
              <p className="text-sm text-[#3D585E]">
                Comforting rolled oats slow-infused with clean protein powder for slow-burning, lasting morning satiety.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-linking Internal Categories Section */}
        <nav aria-label="Related Nutrition Categories" className="pt-8 border-t border-[#17343A]/10">
          <h2 className="text-xl font-bold text-[#17343A] mb-4">
            Explore More Fresh Nutrition in Pembroke Pines
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
