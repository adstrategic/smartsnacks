"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations('Navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: t('menu'), href: "/menu" },
    { label: t('ourStory'), href: "/#meet-the-crafter" },
    { label: t('location'), href: "/#location" },
    { label: t('contact'), href: "/contact" },
  ];

  const headerBg = isHome && !isScrolled 
    ? "bg-transparent absolute w-full top-0" 
    : "bg-[#FDF9F3]/95 backdrop-blur-md border-b border-[#17343A]/10 sticky top-0";

  const textColor = isHome && !isScrolled ? "text-white" : "text-[#17343A]";
  const logoColor = isHome && !isScrolled ? "text-white" : "text-[#55C5D5]";

  return (
    <header className={`z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="group flex items-center justify-center select-none"
            aria-label="Smart Snack Nutrition - Home"
          >
            <div className={`relative transition-all duration-300 w-52 sm:w-64 h-16 sm:h-20 ${isHome && !isScrolled ? 'drop-shadow-md' : ''}`}>
              <Image 
                src="/assets/images/logo-smartsancks.png" 
                alt="Smart Snack Nutrition Logo" 
                fill 
                className="object-contain object-left" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-60 ${textColor}`}
              >
                {link.label}
              </Link>
            ))}

            <LanguageSwitcher textColor={textColor} />

            {/* Primary Action Button */}
            <Link
              href="/menu"
              className="ml-4 clay-btn-yellow inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider px-6 py-2.5"
            >
              {t('orderNow')}
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center z-50">
            <button
              type="button"
              className={`relative w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-500 z-50 ${
                isMobileMenuOpen 
                  ? 'text-white hover:bg-white/10' 
                  : (isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-[#17343A] hover:bg-[#17343A]/5')
              }`}
              aria-controls="mobile-nav"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-5 h-4">
                <span className={`absolute left-0 top-0 w-full h-0.5 bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-2' : ''}`} />
                <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-[#17343A]/90 backdrop-blur-3xl animate-in fade-in duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col justify-center px-8"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
            {navLinks.map((link, i) => (
              <div key={link.href} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-3xl font-black text-white hover:text-[#55C5D5] transition-colors animate-in slide-in-from-bottom-12 fade-in duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] fill-mode-both"
                  style={{ animationDelay: `${100 + i * 50}ms` }}
                >
                  {link.label}
                </Link>
              </div>
            ))}

            <div className="overflow-hidden mt-6 flex items-center justify-between">
              <a
                href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-3 text-lg font-bold text-[#F4C84A] hover:text-white transition-colors animate-in slide-in-from-bottom-12 fade-in duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] fill-mode-both"
                style={{ animationDelay: `${100 + navLinks.length * 50}ms` }}
              >
                <span>{t('shopProducts')}</span>
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </a>
              <div 
                className="animate-in slide-in-from-bottom-12 fade-in duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] fill-mode-both"
                style={{ animationDelay: `${100 + navLinks.length * 50}ms` }}
              >
                <LanguageSwitcher textColor="text-white" />
              </div>
            </div>

            <div className="pt-8 overflow-hidden">
              <div 
                className="animate-in slide-in-from-bottom-12 fade-in duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] fill-mode-both"
                style={{ animationDelay: `${150 + navLinks.length * 50}ms` }}
              >
                <Link
                  href="/menu"
                  className="w-full justify-center bg-[#55C5D5] text-[#17343A] hover:bg-[#42B3C3] inline-flex items-center font-bold px-8 py-4 uppercase tracking-wider rounded-full text-sm transition-transform active:scale-[0.98]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('exploreMenu')}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}


    </header>
  );
}
