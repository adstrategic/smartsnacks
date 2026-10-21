"use client";

import { useState } from "react";
import { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Use a placeholder if no image exists
  const imageSrc = product.image || "/assets/images/hero_shakes_teas.jpg";

  const handleCardClick = (e: React.MouseEvent) => {
    // Toggle the card expansion
    setIsExpanded((prev) => !prev);
  };

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative w-full shrink-0 bg-white rounded-[2rem] border border-[#17343A]/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 ease-out cursor-pointer overflow-hidden flex flex-col"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsExpanded((prev) => !prev);
        }
      }}
      aria-expanded={isExpanded}
    >
      {/* ========================================================= */}
      {/* 1. LARGE FULL-BLEED / HIGH-FIT PRODUCT IMAGE              */}
      {/* ========================================================= */}
      <div
        className={`relative w-full bg-[#F7FAFA] overflow-hidden transition-[height] duration-300 ease-out flex items-center justify-center ${
          isExpanded ? "h-[400px] sm:h-[440px]" : "h-[350px] sm:h-[390px]"
        }`}
      >
        {/* Ambient subtle backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/40 via-transparent to-white/90" />

        {/* Product Image: object-contain with zero padding so it fits in boldly & completely */}
        <div className="relative w-full h-full p-1 sm:p-2">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            priority={product.isFeatured}
          />
        </div>

        {/* Category Badge - Floating Top Right */}
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-white/95 backdrop-blur-md text-[#17343A] font-bold px-3 py-1 text-[10px] tracking-wider uppercase border border-[#17343A]/10 rounded-full shadow-sm">
            {product.categoryLabel}
          </Badge>
        </div>

        {/* Quick Expand Toggle Indicator - Floating Top Left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#17343A] group-hover:text-[#E83C8B] font-bold px-2.5 py-1 text-[10px] tracking-wider uppercase border border-[#17343A]/10 rounded-full shadow-sm transition-colors">
            <span className="hidden xs:inline">{isExpanded ? "Cerrar" : "Info"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isExpanded ? "rotate-180 text-[#E83C8B]" : "text-[#17343A]/70"
              }`}
            />
          </span>
        </div>

        {/* Soft bottom gradient fade into the title & info area */}
        <div
          className={`absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-300 ${
            isExpanded
              ? "h-20 bg-gradient-to-t from-white via-white/80 to-transparent"
              : "h-12 bg-gradient-to-t from-white via-white/60 to-transparent"
          }`}
        />
      </div>

      {/* ========================================================= */}
      {/* 2. PRODUCT NAME ONLY (DEFAULT STATE)                      */}
      {/* ========================================================= */}
      <div className="px-5 pt-3.5 pb-4 bg-white relative z-10 flex flex-col flex-1">
        
        {/* Title Row: Bold, clean, centered/left styled as user's screenshot */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl sm:text-2xl font-black text-[#E83C8B] group-hover:text-[#d42d79] tracking-tight transition-colors leading-tight">
            {product.name}
          </h3>

          {product.proteinAmount && (
            <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-wider text-[#55C5D5] bg-[#EBF8FA] border border-[#55C5D5]/20 px-2.5 py-1 rounded-full">
              {product.proteinAmount}
            </span>
          )}
        </div>

        {/* ========================================================= */}
        {/* 3. PRODUCT TEXT REVEALED ON INTERACTION (EXPANDED ONLY)    */}
        {/* ========================================================= */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isExpanded
              ? "max-h-[600px] opacity-100 pt-3.5 mt-2.5 border-t border-[#17343A]/10"
              : "max-h-0 opacity-0"
          }`}
        >
          {/* Main Short Description */}
          <p className="text-sm font-semibold text-[#17343A] leading-snug mb-2">
            {product.shortDescription}
          </p>

          {/* Full Detailed Description */}
          <p className="text-xs sm:text-sm text-[#3D585E] leading-relaxed mb-3">
            {product.description}
          </p>

          {/* Ingredients & Highlights Box */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="bg-[#FDF9F3] rounded-xl p-3 border border-[#17343A]/10 mb-3">
              <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#17343A] mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#E83C8B]" />
                Ingredientes & Destacados
              </span>
              <div className="grid grid-cols-1 gap-1">
                {product.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-1.5 text-xs text-[#3D585E]">
                    <Check className="w-3 h-3 text-[#55C5D5] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick macro pill in expanded view */}
          {product.caloriesPlaceholder && (
            <div className="text-[11px] font-semibold text-[#708A90] mb-2">
              {product.caloriesPlaceholder}
            </div>
          )}

          {/* Herbalife / Preparation note */}
          {product.isHerbalifeBased && (
            <p className="text-[10px] text-[#708A90] italic leading-relaxed mb-3">
              Elaborado con ingredientes selectos Herbalife y fruta fresca local.
            </p>
          )}

          {/* Special notice & Join the Club ordering for Suplementos & Add-ons */}
          {(product.id === "suplementos" || product.id === "add-ons") && (
            <div className="bg-[#EBF8FA] border border-[#55C5D5]/30 rounded-xl p-3 mb-3 text-left">
              <p className="text-xs font-bold text-[#17343A] mb-1">
                ¿Cómo ordenar estos productos?
              </p>
              <p className="text-[11px] text-[#3D585E] leading-relaxed mb-2.5">
                Pregunta en nuestro club qué opciones tenemos disponibles en tienda hoy, o pide directamente online con nuestro enlace de Join the Club:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#E83C8B] hover:bg-[#d42d79] text-white text-[11px] font-bold rounded-lg shadow-sm transition-colors"
                >
                  <span>Pedir con Join the Club</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          )}

          {/* Action to open full modal if user wants complete details */}
          {onClick && (
            <button
              type="button"
              onClick={handleOpenModal}
              className="w-full text-center py-2 px-3 rounded-xl bg-[#17343A]/5 hover:bg-[#17343A]/10 text-xs font-bold text-[#17343A] transition-colors mt-1"
            >
              Ver ficha completa
            </button>
          )}
        </div>

        {/* Minimal indicator text that shows 'Toca para ver detalles' or 'Cerrar' */}
        <div className="mt-2 flex items-center justify-end text-[10px] font-bold text-[#E83C8B] uppercase tracking-wider">
          <span className="inline-flex items-center gap-1">
            <span>{isExpanded ? "Cerrar" : "Ver detalles"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </span>
        </div>

      </div>
    </div>
  );
}
