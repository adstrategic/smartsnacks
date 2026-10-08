"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useTranslations } from 'next-intl';

export function BodyScannerCTA() {
  const t = useTranslations('BodyScannerCTA');
  return (
    <section 
      id="body-scanner"
      className="relative w-full bg-[#17343A] overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="scanner-heading"
    >
      {/* Background Decor Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[600px] lg:h-[800px] bg-[#55C5D5] opacity-[0.06] rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#E83C8B] opacity-[0.04] rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-[#1C3E45] rounded-3xl sm:rounded-[2.5rem] border border-white/10 p-6 sm:p-10 lg:p-16 shadow-[0_24px_50px_rgba(0,0,0,0.35),inset_0_2px_4px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 w-full">
            <div className="inline-flex items-center justify-center bg-white/5 text-[#55C5D5] rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-[0.2em] border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
              {t('freeConsultation')}
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h2 id="scanner-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {t('titleStart')} <span className="text-[#F4C84A]">{t('titleHighlight')}</span>
              </h2>
              <p className="text-[#EBF8FA]/75 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t('description')}
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-3.5 text-left inline-block max-w-md mx-auto lg:mx-0 w-full">
              {[
                t('bullet1'),
                t('bullet2'),
                t('bullet3')
              ].map((item, i) => (
                <li key={i} className="flex items-start sm:items-center gap-3 text-[#EBF8FA]/85 text-sm sm:text-base">
                  <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#55C5D5]/20 text-[#55C5D5] mt-0.5 sm:mt-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 sm:pt-4">
              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full sm:w-auto justify-center shadow-[0_8px_20px_rgba(232,60,139,0.3)] group inline-flex items-center text-base"
                >
                  <span>{t('buttonText')}</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:scale-105 ml-3 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Animation Graphic - Biometric HUD Terminal */}
          <div className="flex-1 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 relative">
            <div className="relative w-full aspect-[4/5] max-h-[460px] bg-[#0E2024]/90 backdrop-blur-md rounded-3xl border border-[#55C5D5]/30 shadow-[0_0_40px_rgba(85,197,213,0.18)] overflow-hidden flex flex-col justify-between p-4 sm:p-5 isolate">
              
              {/* HUD Header */}
              <div className="w-full flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-wider text-[#55C5D5]/90 border-b border-white/10 pb-2.5 z-20">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55C5D5] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55C5D5]"></span>
                  </span>
                  <span className="font-bold tracking-widest uppercase">{t('scannerActive')}</span>
                </div>
                <span className="text-white/40">SYS.v2.4</span>
              </div>

              {/* Center Silhouette & Laser Stage */}
              <div className="relative w-full flex-1 flex items-center justify-center my-1 overflow-hidden">
                {/* Subtle Radar Rings */}
                <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#55C5D5]/15 animate-[spin_25s_linear_infinite] pointer-events-none" />
                <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-[#55C5D5]/20 animate-[spin_18s_linear_infinite_reverse] pointer-events-none" />

                {/* Silhouette Graphic */}
                <div className="relative w-full h-full flex items-center justify-center mix-blend-screen select-none">
                  <img 
                    src="/assets/images/human_silhouette.jpg" 
                    alt="Biometric Body Scanner Diagnostic" 
                    className="w-full h-full max-h-[340px] object-contain filter drop-shadow-[0_0_18px_rgba(85,197,213,0.45)] opacity-95" 
                  />
                </div>

                {/* Scanning Laser Line */}
                <div className="absolute inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#55C5D5] to-transparent shadow-[0_0_12px_#55C5D5,0_0_24px_#55C5D5] animate-[scanLaser_3s_ease-in-out_infinite_alternate] z-10 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-2 bg-[#55C5D5] blur-[2px] rounded-full" />
                </div>

                {/* Laser Light Glow Cone */}
                <div className="absolute inset-x-4 h-12 bg-gradient-to-b from-[#55C5D5]/25 to-transparent pointer-events-none animate-[scanGlow_3s_ease-in-out_infinite_alternate] z-10" />

                {/* Biometric Data Floating Badges (safely positioned within HUD frame) */}
                <div className="absolute top-3 left-1 sm:left-2 bg-[#17343A]/90 backdrop-blur-md border border-[#55C5D5]/50 rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex items-center gap-1.5 z-20 animate-[floatSoft_4s_ease-in-out_infinite_alternate]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55C5D5]" />
                  <span>{t('age')}: <strong className="text-[#55C5D5]">25</strong></span>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 bg-[#17343A]/90 backdrop-blur-md border border-[#F4C84A]/50 rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex items-center gap-1.5 z-20 animate-[floatSoft_5s_ease-in-out_infinite_alternate_reverse]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C84A]" />
                  <span>{t('muscle')}: <strong className="text-[#F4C84A] font-bold">{t('optimal')}</strong></span>
                </div>

                <div className="absolute bottom-3 left-1 sm:left-2 bg-[#17343A]/90 backdrop-blur-md border border-[#E83C8B]/50 rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex items-center gap-1.5 z-20 animate-[floatSoft_4.5s_ease-in-out_infinite_alternate]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E83C8B]" />
                  <span>{t('bodyFat')}: <strong className="text-[#E83C8B] font-bold">14%</strong></span>
                </div>
              </div>

              {/* HUD Footer Status */}
              <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] text-[#EBF8FA]/70 font-mono border-t border-white/10 pt-2 z-20">
                <span className="flex items-center gap-1">
                  <span className="text-[#55C5D5]">✓</span> {t('nonInvasive')}
                </span>
                <span className="text-[#F4C84A] font-bold tracking-wider">{t('duration')}</span>
              </div>

            </div>
          </div>
          
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanLaser {
          0% { top: 6%; opacity: 0.2; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 92%; opacity: 0.2; }
        }
        @keyframes scanGlow {
          0% { top: 6%; opacity: 0; }
          15% { opacity: 0.7; }
          85% { opacity: 0.7; }
          100% { top: 78%; opacity: 0; }
        }
      `}} />
    </section>
  );
}
