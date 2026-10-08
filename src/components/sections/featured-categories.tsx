"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { motion } from "motion/react";

export function FeaturedCategoriesSection() {
  const t = useTranslations('FeaturedCategories');
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#F2F2F4] border-b border-[#17343A]/10" aria-labelledby="categories-heading">
      {/* Background Image: shakes-assets-nobg with soft grey fade */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="relative w-[650px] sm:w-[850px] md:w-[1050px] h-[420px] sm:h-[520px] md:h-[620px] opacity-65">
          <Image
            src="/assets/images/shakes-assets-nobg.png"
            alt=""
            fill
            className="object-contain object-center drop-shadow-md"
            priority={false}
          />
        </div>
        {/* Soft grey gradient fade overlay for contrast without hiding the shakes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F2F4]/80 via-[#F2F2F4]/50 to-[#F2F2F4]/80" />
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        {/* Title */}
        <motion.h2 
          variants={fadeUp} 
          id="categories-heading" 
          className="text-3xl sm:text-4xl font-black text-[#17343A] uppercase tracking-wide text-center mb-3"
          style={{ textShadow: "0 2px 10px rgba(255,255,255,0.9)" }}
        >
          {t('title')}
        </motion.h2>

        {/* Divider line */}
        <motion.div variants={fadeUp} className="w-14 h-1 bg-[#F4C84A] mb-8 rounded-full" />

        {/* Two column open text layout without cards */}
        <motion.div 
          variants={fadeUp} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8 text-center md:text-left"
        >
          <p 
            className="text-[#17343A] text-base sm:text-lg font-semibold leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(255,255,255,0.9)" }}
          >
            {t('p1')}
          </p>
          <p 
            className="text-[#17343A] text-base sm:text-lg font-semibold leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(255,255,255,0.9)" }}
          >
            {t('p2')}
          </p>
        </motion.div>

        {/* Centered Button */}
        <motion.div variants={fadeUp}>
          <Link
            href="/menu"
            className="clay-btn inline-flex items-center justify-center font-bold px-8 py-3 text-xs uppercase tracking-wider text-white"
          >
            <span>{t('viewMenu')}</span>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
