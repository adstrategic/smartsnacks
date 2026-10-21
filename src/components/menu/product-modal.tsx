"use client";

import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const shouldReduceMotion = useReducedMotion();

  // useSyncExternalStore is the idiomatic React 18 way to detect
  // client-side mounting without triggering a cascading setState render.
  const mounted = useSyncExternalStore(
    () => () => {},          // no external subscription needed
    () => true,              // client snapshot: mounted
    () => false,             // server snapshot: not mounted
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#17343A]/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={shouldReduceMotion ? { duration: 0.15 } : { duration: 0.3, type: "spring", bounce: 0.1 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#17343A] hover:bg-[#FDF0F6] hover:text-[#E83C8B] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Area */}
            <div className="overflow-y-auto flex-1 custom-scrollbar">
              
              {/* Product Hero Image */}
              <div className="relative w-full h-80 sm:h-96 bg-[#FDF9F3] overflow-hidden flex items-center justify-center p-4">
                {product.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 672px"
                      className="object-contain object-center drop-shadow-md"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#EBF8FA] text-[#55C5D5]/30">
                    <span className="font-extrabold text-4xl">SSN</span>
                  </div>
                )}
                
                {/* Soft Gradient Overlay transitioning from image into modal content */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                
                {/* Badges on Image */}
                <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
                  <Badge variant="default" className="shadow-sm">
                    {product.categoryLabel}
                  </Badge>
                  {product.proteinAmount && (
                    <span className="text-xs font-bold text-[#17343A] bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                      {product.proteinAmount}
                    </span>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8">
                
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17343A]">
                    {product.name}
                  </h2>
                </div>
                
                <p className="text-base text-[#3D585E] leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Highlights List */}
                <div className="bg-[#FDF9F3] border border-[#17343A]/10 rounded-2xl p-5 mb-8">
                  <h4 className="text-xs font-extrabold text-[#17343A] uppercase tracking-wider mb-4">
                    Product Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#55C5D5] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-[#3D585E]">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {product.isHerbalifeBased && (
                    <p className="text-[10px] text-[#708A90] mt-4 pt-4 border-t border-[#17343A]/10">
                      Crafted using select high-quality Herbalife ingredients mixed with fresh local ingredients.
                    </p>
                  )}
                </div>

                {/* Footer / CTA Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#17343A]/10">
                  <div className="text-center sm:text-left">
                    <p className="text-[#3D585E] text-xs font-bold uppercase tracking-wider mb-0.5">Availability</p>
                    <p className="text-[#17343A] font-medium text-sm">
                      Made Fresh to Order
                    </p>
                  </div>
                  
                  <div className="flex w-full sm:w-auto gap-3">
                    <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
                      Close
                    </Button>
                    {(product.id === "suplementos" || product.id === "add-ons") ? (
                      <Button asChild className="bg-[#E83C8B] hover:bg-[#d42d79] text-white font-bold w-full sm:w-auto">
                        <a
                          href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <span>Ordenar con Join the Club</span>
                          <span>↗</span>
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="accent" className="w-full sm:w-auto">
                        <Link href="/location" className="gap-2">
                          <span>Order In-Club</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
