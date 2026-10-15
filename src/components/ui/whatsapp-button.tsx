import Link from "next/link";
import { STORE_LOCATION } from "@/data/locations";

export function WhatsAppButton() {
  const whatsappNumber = STORE_LOCATION.phone.replace("+", "");

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-8 fade-in duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
      <Link
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Smart%20Snack%20Nutrition!`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.96] hover:-translate-y-1"
        aria-label="Contact us on WhatsApp: +1 (786) 554-7333"
      >
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="relative z-10 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      </Link>
    </div>
  );
}
