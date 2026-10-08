"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from "motion/react";
import { SITE_CONFIG } from "@/lib/constants";
import { AutoplayVideo } from "@/components/ui/autoplay-video";

export function HeroSection() {
  const t = useTranslations('HeroSection');
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"text" | "video">("text");

  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;

    const runLoop = () => {
      setPhase("text");
      timeout1 = setTimeout(() => {
        setPhase("video");
        timeout2 = setTimeout(() => {
          runLoop();
        }, 6000); // 6s video phase
      }, 9000); // 9s text phase
    };

    runLoop();
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const fadeUp = (delay = 0): any => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.3 : 0.8, ease: "easeOut", delay: shouldReduceMotion ? 0 : delay },
  });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AutoplayVideo
          src="/assets/images/video-hero1.mp4"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay aligned to the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17343A]/90 via-[#17343A]/40 to-transparent" />
      </div>

      {/* Content Container aligned to left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left mt-20 min-h-[500px]">
        
        <motion.div 
          animate={{ opacity: phase === "text" ? 1 : 0, filter: phase === "text" ? "blur(0px)" : "blur(10px)" }}
          transition={{ duration: 0.8 }}
          style={{ pointerEvents: phase === "text" ? "auto" : "none" }}
          className="flex flex-col items-start w-full"
        >
          {/* Welcome Script (Subtitle) */}
          <motion.div {...fadeUp(0.1)} className="mb-3">
            <span className="font-serif italic text-xl sm:text-2xl text-[#F4C84A]">
              {t('welcomeTo')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            id="hero-heading"
            {...fadeUp(0.3)}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-5 max-w-3xl"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          />

          {/* Divider */}
          <motion.div {...fadeUp(0.5)} className="w-20 h-0.5 bg-[#55C5D5] mb-5 opacity-80" />

          {/* Description */}
          <motion.p
            {...fadeUp(0.6)}
            className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed mb-8 font-medium"
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <div className="w-full relative z-20 min-h-[90px] sm:h-[80px]">
          {phase === "text" && (
            <motion.div 
              layoutId="cta-buttons"
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto justify-start"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center clay-btn font-bold px-6 py-3 text-sm uppercase tracking-wider whitespace-nowrap"
              >
                <span>{t('viewFullMenu')}</span>
              </Link>
              <a
                href={SITE_CONFIG.herbalifeShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center clay-btn-aqua font-bold px-6 py-3 text-sm uppercase tracking-wider whitespace-nowrap"
              >
                <span>{t('shopProducts')}</span>
              </a>
            </motion.div>
          )}
        </div>
      </div>

      {phase === "video" && (
        <motion.div 
          layoutId="cta-buttons"
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 px-4 sm:px-0"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center clay-btn font-bold px-6 py-3 text-sm uppercase tracking-wider whitespace-nowrap"
          >
            <span>{t('viewFullMenu')}</span>
          </Link>
          <a
            href={SITE_CONFIG.herbalifeShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center clay-btn-aqua font-bold px-6 py-3 text-sm uppercase tracking-wider whitespace-nowrap"
          >
            <span>{t('shopProducts')}</span>
          </a>
        </motion.div>
      )}
    </section>
  );
}
