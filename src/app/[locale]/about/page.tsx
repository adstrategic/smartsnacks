import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Flame, Sparkles, Users, Coffee } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.about.title,
  description: SEO_PAGE_CONFIG.about.description,
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  const pillars = [
    { title: "ENERGY", desc: "Clean stamina and mental clarity through revitalizing botanical mega teas and soothing aloe hydration.", icon: Zap },
    { title: "PROTEIN", desc: "24g+ high-quality protein in shakes, waffles, and snacks for muscle recovery and steady satiety.", icon: Flame },
    { title: "NUTRITION", desc: "Thoughtfully balanced macros, essential vitamins, and wholesome superfoods in every cup and bowl.", icon: Sparkles },
    { title: "FLAVOR", desc: "Unmatched gourmet tastes crafted to order so healthy habits always feel like an indulgent reward.", icon: Coffee },
    { title: "COMMUNITY", desc: "An inviting, upbeat neighborhood hub where Pembroke Pines neighbors connect and inspire each other.", icon: Users },
    { title: "LIFESTYLE", desc: "Empowering sustainable wellness habits that seamlessly fit busy workdays, school runs, and workouts.", icon: Heart },
  ];

  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us", current: true }]} />
        
        {/* About Hero */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-3">
            Our Story • Pembroke Pines, FL
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17343A] tracking-tight mb-6">
            More Than Nutrition. A Pembroke Pines <span className="text-[#55C5D5]">Lifestyle</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#3D585E] leading-relaxed">
            Smart Snack Nutrition was founded to make high-protein wellness and clean herbal energy approachable, delicious, and community-centered right here in Pembroke Pines, Florida.
          </p>
        </header>

        {/* Brand Pillars Grid */}
        <section aria-labelledby="pillars-heading" className="mb-20">
          <h2 id="pillars-heading" className="text-2xl sm:text-3xl font-bold text-[#17343A] text-center mb-10">
            Our 6 Core Wellness Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-3xl border border-[#17343A]/10 p-8 shadow-xs hover:border-[#55C5D5] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF8FA] text-[#55C5D5] flex items-center justify-center font-bold mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#17343A] tracking-wide mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#3D585E] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Community Atmosphere Callout */}
        <section className="bg-[#17343A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden mb-16 shadow-xl">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold tracking-widest text-[#55C5D5] uppercase mb-2 block">
              Pembroke Pines Wellness Bar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Your Daily Spot for Positive Vibes & Real Fuel
            </h2>
            <p className="text-[#EBF8FA] text-sm sm:text-base leading-relaxed mb-8">
              Whether you are stopping by for a post-workout protein shake, a midday Mega Tea energy recharge, or catching up with friends over Belgian protein waffles, you will always be greeted with warmth and good energy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="default" className="bg-[#E83C8B] hover:bg-[#D22B77] text-white">
                <Link href="/location">VISIT US</Link>
              </Button>
              <Button asChild variant="secondary" size="default">
                <Link href="/menu">VIEW FULL MENU</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Nutritional Transparency & Informational Reference */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FDF9F3] border border-[#17343A]/10 text-xs text-[#3D585E] leading-relaxed">
          <h3 className="font-bold text-[#17343A] text-sm mb-2">
            Nutritional Foundation & Independent Craftsmanship
          </h3>
          <p>
            Smart Snack Nutrition independently operates in Pembroke Pines, Florida. We combine wholesome fruits, superfoods, and select nutritional bases (including select Herbalife products) into our customized recipes. Herbalife is a registered trademark; mentions are purely informational and do not represent direct corporate endorsement or official partnership. Smart Snack Nutrition remains our independent local brand dedicated to serving our community.
          </p>
        </div>

      </div>
    </div>
  );
}
