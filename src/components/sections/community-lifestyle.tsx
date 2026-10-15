"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function CommunityLifestyleSection() {
  const t = useTranslations("CommunityLifestyle");

  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-32 sm:py-40 bg-[#FDF9F3]" aria-labelledby="promos-heading">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 id="promos-heading" className="sr-only">Promotions and Lifestyle</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Large Hero Image + Welcoming Atmosphere */}
          <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-12">
            <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl group bg-[#F7FAFA]">
              <Image 
                src="/assets/images/colage1.png" 
                alt="Smart Snack Nutrition Lifestyle & Products Collage" 
                fill 
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            <div className="max-w-xl pr-0 lg:pr-8">
              <div className="w-16 h-1 bg-[#F4C84A] mb-8 rounded-full" />
              <h3 
                className="text-3xl sm:text-4xl font-black text-[#17343A] uppercase tracking-wide mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: t.raw("sanctuaryTitle") }}
              />
              <p className="text-[#3D585E] text-lg leading-relaxed">
                {t("sanctuaryDesc")}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Editorial Stack */}
          <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-12 lg:pt-8">
            
            {/* Premium Fuel */}
            <div className="border-t-2 border-[#17343A]/10 pt-8">
              <h3 className="text-2xl font-black text-[#17343A] uppercase tracking-wider mb-4">
                {t("premiumFuelTitle")}
              </h3>
              <p className="text-[#3D585E] text-lg leading-relaxed mb-8">
                {t("premiumFuelDesc")}
              </p>
              <Link href="/menu" className="inline-flex items-center text-[#E83C8B] font-black uppercase tracking-widest text-sm group">
                {t("viewMenus")}
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Community Events */}
            <div className="border-t-2 border-[#17343A]/10 pt-8">
              <div className="relative w-full h-[260px] rounded-[2rem] overflow-hidden mb-8 shadow-lg group">
                 <Image 
                  src="/assets/images/community-events.png" 
                  alt="Community Events" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-black text-[#17343A] uppercase tracking-wider mb-4">
                {t("communityEventsTitle")}
              </h3>
              <p className="text-[#3D585E] text-lg leading-relaxed mb-8">
                {t("communityEventsDesc")}
              </p>
              <a href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#55C5D5] font-black uppercase tracking-widest text-sm group">
                {t("joinClub")}
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* Combo Specials Highlight */}
            <Link 
              href="/menu" 
              className="group block bg-[#E83C8B] hover:bg-[#d42d79] transition-all duration-300 rounded-[2rem] p-8 sm:p-10 text-white relative overflow-hidden mt-4 shadow-xl"
            >
               <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                 <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M17 10l-4-4-4 4"/>
                   <path d="M13 6v16"/>
                 </svg>
               </div>
               
               <div className="border border-white/30 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-md mb-6">
                 <span>{t("comboBadge")}</span>
               </div>
               
               <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-wide mb-3 leading-tight">
                 {t("comboTitle")}
               </h3>
               <p className="text-white/95 text-lg font-medium leading-relaxed mb-6">
                 {t("comboDesc")}
               </p>

               <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white text-[#E83C8B] px-5 py-2.5 rounded-full shadow-md group-hover:bg-[#FDF9F3] transition-colors">
                 <span>{t("exploreMenu")}</span>
                 <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </div>
            </Link>

          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
