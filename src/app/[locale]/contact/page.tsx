import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SEO_PAGE_CONFIG } from "@/content/seo";
import { STORE_LOCATION } from "@/data/locations";
import { SOCIAL_LINKS } from "@/data/socials";
import { ContactForm } from "@/components/contact/contact-form";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, MessageCircle, Clock, Navigation } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: SEO_PAGE_CONFIG.contact.title,
  description: SEO_PAGE_CONFIG.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  const whatsapp = SOCIAL_LINKS.find((s) => s.platform === "WhatsApp");
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact & Order Ahead", current: true }]} />
        
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-3">
            Pembroke Pines, FL • Order Ahead & Questions
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17343A] tracking-tight mb-4">
            Get in Touch & Order Ahead
          </h1>
          <p className="text-base sm:text-lg text-[#3D585E] leading-relaxed">
            Have a question about nutritional ingredients, want to arrange a group office order, or need your shake and tea ready for rapid pickup in Pembroke Pines? We are here to help.
          </p>
        </header>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Action Methods */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone */}
            <div className="bg-white rounded-3xl border border-[#17343A]/10 p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF8FA] text-[#55C5D5] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-bold text-[#17343A] text-base mb-1">
                    Call Direct For Express Pickup
                  </h2>
                  <p className="text-xs text-[#3D585E] mb-3">
                    Fastest way to order ahead and have your drink waiting upon arrival.
                  </p>
                  <a
                    href={`tel:${STORE_LOCATION.phone}`}
                    className="font-bold text-[#E83C8B] hover:text-[#D22B77] text-sm bg-[#FDF0F6] px-4 py-2 rounded-full border border-[#E83C8B]/20 inline-block transition-colors"
                  >
                    {STORE_LOCATION.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            {whatsapp && (
              <div className="bg-white rounded-3xl border border-[#17343A]/10 p-7 shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF8FA] text-[#55C5D5] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-[#17343A] text-base mb-1">
                      WhatsApp Messaging
                    </h2>
                    <p className="text-xs text-[#3D585E] mb-3">
                      Send us your custom flavor requests and estimated pickup time.
                    </p>
                    <a
                      href={whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-[#55C5D5] hover:text-[#17343A] text-sm"
                    >
                      <span>START CHAT</span>
                      &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Visit */}
            <div className="bg-white rounded-3xl border border-[#17343A]/10 p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF9E7] text-[#F4C84A] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-bold text-[#17343A] text-base mb-1">
                    Store Location
                  </h2>
                  <p className="text-xs text-[#3D585E] mb-3 leading-relaxed">
                    {STORE_LOCATION.streetAddress}, {STORE_LOCATION.city}, {STORE_LOCATION.state} {STORE_LOCATION.postalCode}
                  </p>
                  <a
                    href={STORE_LOCATION.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[#55C5D5] hover:text-[#17343A] text-xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>GET DIRECTIONS &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours summary */}
            <div className="bg-white rounded-3xl border border-[#17343A]/10 p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF9F3] text-[#17343A] flex items-center justify-center shrink-0 border border-[#17343A]/10">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-bold text-[#17343A] text-base mb-1">
                    Operating Hours
                  </h2>
                  <p className="text-xs text-[#3D585E] leading-relaxed">
                    Mon–Sat: 7:00 AM – 6:00 PM <br />
                    Sun: 9:00 AM – 3:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#17343A]/10 p-8 sm:p-10 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#17343A] mb-1">
                Send an Online Message
              </h2>
              <p className="text-xs text-[#3D585E]">
                Fill in your details below and our Pembroke Pines team will get back to you promptly.
              </p>
            </div>

            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
