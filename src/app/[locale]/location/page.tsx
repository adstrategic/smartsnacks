import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { STORE_LOCATION } from "@/data/locations";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.location.title,
  description: SEO_PAGE_CONFIG.location.description,
  path: "/location",
});

export default function LocationPage() {
  const localSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Location & Hours", url: "/location" },
  ]);

  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Location & Hours", current: true }]} />
        
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="default" className="mb-3">
            Pembroke Pines, FL • Local Nutrition Club
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17343A] tracking-tight mb-4">
            Visit Smart Snack Nutrition in Pembroke Pines
          </h1>
          <p className="text-base sm:text-lg text-[#3D585E] leading-relaxed">
            Conveniently situated in Pembroke Pines, Florida. Drop by for handcrafted protein shakes, refreshing mega energy teas, or call ahead for express pickup on your way to work or the gym.
          </p>
        </header>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl border border-[#17343A]/10 p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF8FA] text-[#55C5D5] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#17343A] mb-1">
                    Store Address & Location
                  </h2>
                  <p className="text-sm text-[#3D585E] leading-relaxed">
                    {STORE_LOCATION.streetAddress}
                    <br />
                    {STORE_LOCATION.city}, {STORE_LOCATION.state} {STORE_LOCATION.postalCode}
                  </p>
                  <a
                    href={STORE_LOCATION.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#55C5D5] hover:text-[#17343A] mt-3"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-3xl border border-[#17343A]/10 p-7 shadow-xs">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF9E7] text-[#F4C84A] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#17343A]">
                    Weekly Operating Hours
                  </h2>
                  <span className="text-xs text-[#708A90]">
                    Eastern Time (Pembroke Pines, FL)
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[#17343A]/10 text-sm">
                {STORE_LOCATION.hours.map((schedule) => (
                  <div key={schedule.dayRange} className="py-2.5 flex items-center justify-between">
                    <span className="font-medium text-[#3D585E]">{schedule.dayRange}</span>
                    <span className="font-bold text-[#17343A]">{schedule.formatted}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Orders Card */}
            <div className="bg-white rounded-3xl border border-[#17343A]/10 p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF0F6] text-[#E83C8B] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#17343A] mb-1">
                    Call Ahead for Quick Pickup
                  </h2>
                  <p className="text-xs text-[#3D585E] mb-3">
                    Have your protein shake, loaded mega tea, or açaí bowl blended fresh and ready when you arrive.
                  </p>
                  <a
                    href={`tel:${STORE_LOCATION.phone}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E83C8B] bg-[#FDF0F6] hover:bg-[#FCE2EE] px-4 py-2 rounded-full border border-[#E83C8B]/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{STORE_LOCATION.displayPhone}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Showcase Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#17343A]/10 overflow-hidden shadow-md flex flex-col">
            <div className="p-6 bg-[#17343A] text-white flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg text-white">Smart Snack Nutrition</h2>
                <p className="text-xs text-[#55C5D5]">Pembroke Pines, Florida</p>
              </div>
              <Button asChild size="sm" className="bg-[#55C5D5] hover:bg-[#40B4C4] text-[#17343A] font-bold">
                <a href={STORE_LOCATION.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-1.5" />
                  <span>GET DIRECTIONS</span>
                </a>
              </Button>
            </div>

            {/* Map Frame / Placeholder */}
            <div className="h-96 sm:h-[420px] bg-[#FDF9F3] relative flex items-center justify-center p-6 text-center">
              <div className="max-w-sm flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#EBF8FA] text-[#55C5D5] flex items-center justify-center mb-4 shadow-sm">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-[#17343A] mb-1">
                  Pembroke Pines Location
                </h3>
                <p className="text-xs text-[#3D585E] mb-5">
                  {STORE_LOCATION.streetAddress}, {STORE_LOCATION.city}, {STORE_LOCATION.state} {STORE_LOCATION.postalCode}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={STORE_LOCATION.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#17343A] text-white text-xs font-bold hover:bg-[#20454D] shadow-md transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#55C5D5]" />
                    <span>LAUNCH GOOGLE MAPS</span>
                  </a>
                  <Button asChild variant="secondary" size="default">
                    <Link href="/menu">VIEW FULL MENU</Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Local Area Service Coverage */}
        <section className="bg-[#FDF9F3] rounded-3xl border border-[#17343A]/10 p-8 sm:p-12 mb-12">
          <h2 className="text-2xl font-bold text-[#17343A] mb-4">
            Serving Pembroke Pines & Surrounding Broward Communities
          </h2>
          <p className="text-base text-[#3D585E] leading-relaxed mb-6">
            Smart Snack Nutrition is proud to be a favorite local nutrition club for residents and athletes across Southwest Broward County. Whether you live in Pembroke Pines, work near Pines Boulevard, or commute from neighboring cities, our club provides fast, nourishing refreshments.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-2xl border border-[#17343A]/8">
              <span className="font-bold text-[#17343A] text-sm block">Pembroke Pines</span>
              <span className="text-xs text-[#708A90]">Zip 33028 & 33026</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#17343A]/8">
              <span className="font-bold text-[#17343A] text-sm block">Miramar</span>
              <span className="text-xs text-[#708A90]">Zip 33027 & 33029</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#17343A]/8">
              <span className="font-bold text-[#17343A] text-sm block">Weston</span>
              <span className="text-xs text-[#708A90]">South Broward</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#17343A]/8">
              <span className="font-bold text-[#17343A] text-sm block">Cooper City / Davie</span>
              <span className="text-xs text-[#708A90]">Minutes Away</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
