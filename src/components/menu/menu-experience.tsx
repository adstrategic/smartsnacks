"use client";

import { useState, useRef } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/menu/product-card";
import { ProductModal } from "@/components/menu/product-modal";
import { ChevronDown, ChevronLeft, ChevronRight, Sparkles, Flame, Zap, ShieldCheck, Cookie, Coffee, Wine, PlusCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MenuExperienceProps {
  initialProducts: Product[];
}

interface MenuCategoryDef {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: any;
  accent: string;
  filterFn: (p: Product) => boolean;
}

const MENU_CATEGORIES: MenuCategoryDef[] = [
  {
    id: "shakes",
    name: "Batidos Proteicos (Shakes)",
    subtitle: "24g+ Proteína • 12 Recetas Gourmet de Reemplazo de Comida",
    description: "Espesos y deliciosos batidos con 24g+ de proteína, vitaminas y minerales. Hechos al momento con toppings de galleta, granola y salsas sin culpa.",
    icon: Flame,
    accent: "#55C5D5",
    filterFn: (p) => p.category === "protein-shakes",
  },
  {
    id: "mega-teas",
    name: "Mega Tea",
    subtitle: "24 Cal • 0g Azúcar • 4g Carbs • Antioxidantes y Vitamina C",
    description: "Nuestras 10 fórmulas exclusivas de Mega Tea con Liftoff efervescente, té herbal concentrado, aloe calmante y potenciadores de energía limpia sin bajón.",
    icon: Zap,
    accent: "#F4C84A",
    filterFn: (p) => p.category === "mega-teas",
  },
  {
    id: "bowls-waffles",
    name: "Bowls y Waffles",
    subtitle: "Acai Bowls, Oatmeal Bowls, Protein Waffles y Waffle de Pandebono",
    description: "Bowls de açaí orgánico con fruta fresca, avena tibia nutritiva, waffles de proteína y nuestro nuevo Waffle de Pandebono quesudo dorado al momento.",
    icon: ShieldCheck,
    accent: "#E83C8B",
    filterFn: (p) => p.id === "acai-bowls" || p.id === "oatmeal-bowls" || p.id === "protein-waffles" || p.id === "waffle-pandebono-proteina",
  },
  {
    id: "snacks",
    name: "Repostería Proteica y Snacks",
    subtitle: "Brownies, Cookies, Barras Proteicas, Chips y Pandebono",
    description: "Horneados frescos con proteína y snacks empacados prácticos para llevar antes o después de entrenar en Pembroke Pines.",
    icon: Cookie,
    accent: "#10B981",
    filterFn: (p) => p.category === "waffles-snacks",
  },
  {
    id: "coffee",
    name: "Cafés (Coffee)",
    subtitle: "Regular Coffee • VIP Coffee con 37g de Proteína",
    description: "House Blend, Mocha y Caramel Macchiato servidos calientes o fríos con espresso real y opción de 37g de proteína de alta asimilación.",
    icon: Coffee,
    accent: "#F4C84A",
    filterFn: (p) => p.category === "coffee",
  },
  {
    id: "specialties",
    name: "Tés y Bebidas Especiales",
    subtitle: "Té Regular, Mangonada, Horchata y Selección de Hot Teas",
    description: "Especialidades frías artesanales con chamoy y Tajín, horchata cremosa con canela y colección completa de tés calientes reconfortantes.",
    icon: Wine,
    accent: "#8B5CF6",
    filterFn: (p) => (p.category === "specialties" && p.id !== "suplementos" && p.id !== "add-ons" && p.id !== "suplementos-add-ons") || p.category === "energy-teas",
  },
  {
    id: "functional-addons",
    name: "Funcionales y Agregados (Add-Ons)",
    subtitle: "Bebidas Embotelladas preparadas y Suplementos Personalizados",
    description: "Bebidas listas para llevar y potenciadores a tu medida: Colágeno, Fibra, Probióticos, Liftoff, Niteworks, BCAAs, Pre-Workout y Prolessa Duo.",
    icon: PlusCircle,
    accent: "#06B6D4",
    filterFn: (p) => p.category === "functional-drinks" || p.id === "suplementos" || p.id === "add-ons" || p.id === "suplementos-add-ons",
  },
];

function CategoryCarousel({ products, onSelectProduct }: { products: Product[]; onSelectProduct: (p: Product) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Previous items"
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 text-[#17343A] shadow-lg border border-[#17343A]/10 items-center justify-center hover:bg-[#55C5D5] hover:text-white transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Next items"
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 text-[#17343A] shadow-lg border border-[#17343A]/10 items-center justify-center hover:bg-[#55C5D5] hover:text-white transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 px-1 snap-x snap-mandatory scroll-smooth scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[300px] sm:w-[340px] shrink-0 snap-start"
          >
            <ProductCard
              product={product}
              onClick={() => onSelectProduct(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MenuExperience({ initialProducts }: MenuExperienceProps) {
  // All accordions open by default for rich browsing
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    shakes: true,
    "mega-teas": true,
    "bowls-waffles": true,
    snacks: true,
    coffee: true,
    specialties: true,
    "functional-addons": true,
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    setOpenSections({
      shakes: true,
      "mega-teas": true,
      "bowls-waffles": true,
      snacks: true,
      coffee: true,
      specialties: true,
      "functional-addons": true,
    });
  };

  const collapseAll = () => {
    setOpenSections({
      shakes: false,
      "mega-teas": false,
      "bowls-waffles": false,
      snacks: false,
      coffee: false,
      specialties: false,
      "functional-addons": false,
    });
  };

  return (
    <div>
      {/* Category Pills & Quick Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#17343A]/10">
        <div className="flex flex-wrap gap-2.5">
          {MENU_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isOpen = openSections[cat.id];
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setOpenSections((prev) => ({ ...prev, [cat.id]: !prev[cat.id] }));
                  const element = document.getElementById(`category-${cat.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isOpen
                    ? "bg-[#17343A] text-white shadow-md scale-105"
                    : "bg-white text-[#17343A] border border-[#17343A]/15 hover:border-[#55C5D5]"
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#55C5D5]" />
                <span>{cat.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#3D585E]">
          <button
            type="button"
            onClick={expandAll}
            className="hover:text-[#17343A] hover:underline cursor-pointer"
          >
            Expand All
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={collapseAll}
            className="hover:text-[#17343A] hover:underline cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion Categories */}
      <div className="space-y-8">
        {MENU_CATEGORIES.map((cat) => {
          const categoryProducts = initialProducts.filter(cat.filterFn);
          if (categoryProducts.length === 0) return null;

          const isOpen = openSections[cat.id];
          const Icon = cat.icon;

          return (
            <div
              key={cat.id}
              id={`category-${cat.id}`}
              className="bg-white rounded-3xl border border-[#17343A]/10 shadow-sm overflow-hidden scroll-mt-28 transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleSection(cat.id)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#FDF9F3]/60 transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF8FA] flex items-center justify-center text-[#55C5D5] shrink-0 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-xl sm:text-2xl font-black text-[#17343A] uppercase tracking-tight">
                        {cat.name}
                      </h2>
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-[#FDF9F3] text-[#17343A] border border-[#17343A]/10 px-2.5 py-0.5 rounded-full">
                        {categoryProducts.length} Items
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#3D585E] mt-1 line-clamp-1 sm:line-clamp-none">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold text-[#55C5D5] hidden sm:inline">
                    {isOpen ? "Hide Carousel" : "Show Carousel"}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#17343A] text-white" : "bg-[#FDF9F3] text-[#17343A]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </button>

              {/* Accordion Body with Horizontal Carousel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#17343A]/5">
                      <p className="text-sm text-[#3D585E] mb-6 max-w-2xl">
                        {cat.description}
                      </p>

                      <CategoryCarousel
                        products={categoryProducts}
                        onSelectProduct={(p) => setSelectedProduct(p)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
