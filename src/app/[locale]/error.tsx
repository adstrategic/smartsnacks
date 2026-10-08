"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to error reporting service in production
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center">
      {/* Icon */}
      <div className="w-20 h-20 rounded-3xl bg-[#FDF0F6] text-[#E83C8B] flex items-center justify-center mb-8 shadow-sm">
        <AlertTriangle className="w-10 h-10" aria-hidden="true" />
      </div>

      {/* Heading */}
      <p className="text-xs font-bold text-[#E83C8B] uppercase tracking-widest mb-3">
        Something went wrong
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17343A] tracking-tight mb-4 max-w-xl">
        An unexpected error occurred.
      </h1>
      <p className="text-base text-[#3D585E] leading-relaxed mb-10 max-w-md">
        We&apos;re sorry about that. Please try again, or head back to the menu.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={reset}
          variant="accent"
          size="default"
          className="gap-2"
        >
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
          Try Again
        </Button>

        <Button asChild variant="secondary" size="default">
          <Link href="/menu">View Full Menu</Link>
        </Button>

        <Button asChild variant="outline" size="default">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
