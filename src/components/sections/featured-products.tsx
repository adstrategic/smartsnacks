"use client";

import { ProductCard } from "@/components/menu/product-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { motion } from "motion/react";
import { PRODUCTS } from "@/data/products";

export function FeaturedProductsSection() {
  const t = useTranslations('FeaturedProducts');
  // Select one shake, one acai bowl, and one waffle for signature products
  const signatureProducts = [
    PRODUCTS.find(p => p.category === "protein-shakes" && p.isFeatured),
    PRODUCTS.find(p => p.category === "acai" && p.isFeatured),
    PRODUCTS.find(p => p.category === "waffles" && p.isFeatured)
  ].filter(Boolean) as typeof PRODUCTS;

  const fadeUp: any = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
  };

  return (
    <section className="py-32 sm:py-40 bg-[#FDF9F3]" aria-labelledby="featured-heading">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUp} className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center justify-center bg-white border border-[#17343A]/10 text-[#17343A] rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            {t('highlights')}
          </div>
          <h2 id="featured-heading" className="text-4xl sm:text-6xl font-black text-[#17343A] tracking-tight leading-none mb-6" dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
        </motion.div>

        {/* Featured Products Grid */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
          {signatureProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* Centered CTA */}
        <motion.div variants={fadeUp}>
          <Link href="/menu">
            <Button variant="default" size="lg" className="group">
              <span>{t('viewMenu')}</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:scale-105 ml-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Button>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
