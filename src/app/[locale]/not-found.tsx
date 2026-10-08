import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowLeft, UtensilsCrossed } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Smart Snack Nutrition",
  description:
    "The page you are looking for doesn't exist. Browse our full menu of protein shakes, energy teas, and açaí bowls in Pembroke Pines.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center">
      {/* Decorative icon */}
      <div className="w-20 h-20 rounded-3xl bg-[#EBF8FA] text-[#55C5D5] flex items-center justify-center mb-8 shadow-sm">
        <UtensilsCrossed className="w-10 h-10" aria-hidden="true" />
      </div>

      {/* Status code */}
      <p className="text-xs font-bold text-[#55C5D5] uppercase tracking-widest mb-3">
        404 — Page Not Found
      </p>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17343A] tracking-tight mb-4 max-w-xl">
        This page doesn&apos;t exist yet.
      </h1>

      {/* Support copy */}
      <p className="text-base text-[#3D585E] leading-relaxed mb-10 max-w-md">
        But our protein shakes, mega energy teas, açaí bowls, and protein waffles do — right here in Pembroke Pines.
      </p>

      {/* Recovery CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
        <Button asChild variant="accent" size="default">
          <Link href="/menu">View Full Menu</Link>
        </Button>

        <Button asChild variant="secondary" size="default">
          <Link href="/location">
            <MapPin className="w-4 h-4 text-[#55C5D5]" aria-hidden="true" />
            Visit Us
          </Link>
        </Button>

        <Button asChild variant="outline" size="default">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
