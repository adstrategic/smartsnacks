import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { generateLocalBusinessSchema, generateFaqSchema } from "@/lib/schema";
import { FAQS } from "@/content/faqs";
import { HeroSection } from "@/components/hero/hero-section";
import { FeaturedCategoriesSection } from "@/components/sections/featured-categories";
import { FeaturedProductsSection } from "@/components/sections/featured-products";
import { ChooseYourGoalSection } from "@/components/sections/choose-your-goal";
import { CommunityLifestyleSection } from "@/components/sections/community-lifestyle";
import { InstagramFeedSection } from "@/components/sections/instagram-feed";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { HomeLocationSection } from "@/components/sections/home-location";
import { FinalCTASection } from "@/components/sections/final-cta";
import { MeetCrafterSection } from "@/components/sections/meet-crafter";
import { JoinClubSection } from "@/components/sections/join-club";
import { BannerSeparator } from "@/components/ui/banner-separator";
import { BodyScannerCTA } from "@/components/sections/body-scanner-cta";
import { WorkWithUsSection } from "@/components/sections/work-with-us";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.home.title,
  description: SEO_PAGE_CONFIG.home.description,
  path: "/",
});

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFaqSchema(FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <HeroSection />
        
        <FeaturedCategoriesSection />
        
        <FeaturedProductsSection />

        {/* Separator Banner 1: Shakes & Real Ingredients (separador1v2) */}
        <BannerSeparator
          src="/assets/images/separador1v2.jpeg"
          alt="Smart Snack Nutrition - Real Ingredients Real Results - Fresh Shakes in Pembroke Pines"
          href="/menu"
        />
        
        <ChooseYourGoalSection />
        
        <CommunityLifestyleSection />
        
        <InstagramFeedSection />

        {/* Separator Banner 2: Good Food. Real Nutrition (Açaí Bowl) */}
        <BannerSeparator
          src="/assets/images/banner-separator-acai.jpg"
          alt="Good Food. Real Nutrition. Fresh Açaí Bowls & Healthy Shakes"
          href="/menu"
        />
        
        <MeetCrafterSection />

        <JoinClubSection />
        
        <TestimonialsSection />

        {/* Separator Banner 3: Ready to Fuel Your Day? */}
        <BannerSeparator
          src="/assets/images/banner-separator-fuel.jpg"
          alt="Ready to Fuel Your Day? Pembroke Pines Nutrition Bar"
          href="/menu"
        />

        <BodyScannerCTA />
        
        <WorkWithUsSection />

        <FAQSection />
        
        <HomeLocationSection />
        
        <FinalCTASection />
      </main>

      {/* Anchor targets for smooth scrolling from hero/navigation */}
      <div id="menu" className="scroll-mt-24" />
      <div id="benefits" className="scroll-mt-24" />
      <div id="community" className="scroll-mt-24" />
    </>
  );
}
