"use client";

import { MapPin, Phone, Mail, Navigation, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { STORE_LOCATION } from "@/data/locations";
import { motion } from "motion/react";

export function HomeLocationSection() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="location" className="w-full relative overflow-hidden bg-white border-y border-[#17343A]/10" aria-label="Location and Opening Hours">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 lg:grid-cols-3 w-full min-h-[580px] lg:min-h-[620px]"
      >
        {/* Column 1: Easy to Find */}
        <motion.div variants={fadeUp} className="flex flex-col items-center justify-center p-10 sm:p-14 lg:p-16 text-center border-b lg:border-b-0 lg:border-r border-[#17343A]/10 bg-white">
            <div className="w-14 h-14 rounded-2xl bg-[#EBF8FA] flex items-center justify-center text-[#17343A] mb-5 shadow-xs">
              <MapPin className="w-7 h-7 text-[#55C5D5]" />
            </div>
            
            <h3 className="text-2xl font-black text-[#17343A] uppercase tracking-wide mb-3">
              Easy to Find
            </h3>
            <div className="w-10 h-0.5 bg-[#F4C84A] mb-6" />
            
            <address className="not-italic text-[#3D585E] text-base leading-relaxed mb-6">
              <strong className="text-[#17343A] font-bold block mb-1">Smart Snack Nutrition</strong>
              {STORE_LOCATION.streetAddress}<br />
              {STORE_LOCATION.city}, {STORE_LOCATION.state} {STORE_LOCATION.postalCode}
            </address>

            <div className="flex flex-col gap-2.5 mb-8 w-full max-w-xs">
              <a 
                href={`tel:${STORE_LOCATION.phone}`} 
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#17343A] hover:text-[#55C5D5] transition-colors py-1.5 px-3 rounded-lg hover:bg-[#EBF8FA]"
              >
                <Phone className="w-4 h-4 text-[#55C5D5]" />
                <span>{STORE_LOCATION.displayPhone}</span>
              </a>
              <a 
                href={`mailto:${STORE_LOCATION.email}`} 
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#E83C8B] hover:underline py-1.5 px-3"
              >
                <Mail className="w-4 h-4 text-[#E83C8B]" />
                <span>{STORE_LOCATION.email}</span>
              </a>
            </div>

            <a
              href={STORE_LOCATION.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn-aqua inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white px-7 py-3.5"
            >
              <Navigation className="w-4 h-4 text-white" />
              <span>Get Directions</span>
            </a>
          </motion.div>

          {/* Column 2: Interactive Google Map */}
          <motion.div variants={fadeUp} className="relative min-h-[350px] lg:min-h-full w-full bg-slate-100 flex flex-col">
            <iframe 
              src={STORE_LOCATION.embedMapUrlPlaceholder} 
              className="w-full h-full min-h-[350px] border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Smart Snack Nutrition Pembroke Pines Map Location"
            />
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md border border-[#17343A]/10 flex items-center gap-2 text-xs font-bold text-[#17343A] pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pembroke Pines, FL</span>
            </div>
          </motion.div>

          {/* Column 3: Opening Hours & Call-to-Action */}
          <motion.div variants={fadeUp} className="bg-[#17343A] text-white p-8 sm:p-12 flex flex-col items-center justify-center text-center">
            <span className="font-serif italic text-3xl text-[#F4C84A] mb-1">
              Welcome
            </span>
            <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-8">
              Opening Hours
            </h3>

            <div className="w-full max-w-[280px] flex flex-col gap-4 text-sm mb-8">
              {STORE_LOCATION.hours.map((h, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-white/10">
                  <span className="font-semibold text-white/90">{h.dayRange}</span>
                  <span className="text-[#F4C84A] font-bold">{h.formatted}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs text-white/80 font-medium mb-8">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#55C5D5]" /> Dine-in
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#55C5D5]" /> Takeout
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#55C5D5]" /> Pickup
              </span>
            </div>

            <Link
              href="/menu"
              className="clay-btn-yellow inline-flex items-center justify-center font-bold px-10 py-4 text-sm uppercase tracking-wider text-[#17343A]"
            >
              Order Ahead
            </Link>
          </motion.div>
        </motion.div>
    </section>
  );
}
