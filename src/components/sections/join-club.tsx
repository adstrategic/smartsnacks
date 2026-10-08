"use client";

import { motion } from "motion/react";
import { ImageCarousel } from "@/components/ui/image-carousel";

import { useTranslations } from 'next-intl';

const CAMBI_IMAGES = [
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.58.55 PM (1).jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.58.55 PM (2).jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.58.55 PM.jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.59.44 PM (1).jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.59.44 PM (2).jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.59.44 PM (3).jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.59.44 PM (4).jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.59.44 PM (5).jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.59.44 PM (6).jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.59.44 PM (7).jpeg",
  "/assets/resutados/WhatsApp Image 2026-10-08 at 4.59.44 PM.jpeg",
  "/assets/resutados/cambi3.png",
  "/assets/resutados/cambi6.png",
  "/assets/resutados/cambi7.png",
  "/assets/resutados/cambi9.png",
];

export function JoinClubSection() {
  const t = useTranslations('JoinClub');
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-32 sm:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Carousel for Member Transformations (cambi1 to cambi9) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-1"
          >
            <ImageCarousel
              images={CAMBI_IMAGES}
              altPrefix="Smart Snack Member Results"
              badgeText={t('badge')}
              aspectClassName="h-[480px] sm:h-[540px]"
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#17343A] uppercase tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
            <div className="w-20 h-1 bg-[#55C5D5] mb-8 rounded-full" />
            <p className="text-[#3D585E] text-lg leading-relaxed mb-6 font-medium">
              {t('p1')}
            </p>
            <p className="text-[#3D585E] leading-relaxed mb-8">
              {t('p2')}
            </p>
            
            <a 
              href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium" 
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn inline-flex text-white font-bold px-8 py-4 uppercase tracking-wider"
            >
              {t('joinBtn')}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
