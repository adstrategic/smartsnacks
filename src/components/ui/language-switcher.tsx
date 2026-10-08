"use client";

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export function LanguageSwitcher({ textColor }: { textColor?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  
  const nextLocale = locale === 'es' ? 'en' : 'es';

  return (
    <Link 
      href={pathname}
      locale={nextLocale}
      className={`flex items-center gap-1.5 font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-70 ${textColor || ''}`}
    >
      <span className={locale === 'es' ? 'underline decoration-2 underline-offset-4 decoration-[#55C5D5] opacity-100' : 'opacity-60'}>ES</span>
      <span className="opacity-30">|</span>
      <span className={locale === 'en' ? 'underline decoration-2 underline-offset-4 decoration-[#55C5D5] opacity-100' : 'opacity-60'}>EN</span>
    </Link>
  );
}
