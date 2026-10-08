import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Join Our Team | Smart Snack Nutrition",
  description: "Join our team at Smart Snack Nutrition. Build your wellness business and partner with us through Herbalife.",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-24 sm:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-8 duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <div className="inline-flex items-center justify-center bg-[#EBF8FA] text-[#17343A] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Opportunity
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#17343A] tracking-tight mb-6 leading-tight">
            Build Your Wellness <span className="text-[#55C5D5]">Business</span>
          </h1>
          <p className="text-[#3D585E] text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with Smart Snack Nutrition and Herbalife. Turn your passion for health into a rewarding career and help others achieve their goals.
          </p>
        </div>

        {/* Content & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-[#17343A]/10 shadow-[0_12px_24px_rgba(0,0,0,0.03)] relative overflow-hidden">
            <h2 className="text-2xl font-bold text-[#17343A] mb-4">Why Join Us?</h2>
            <ul className="space-y-4 text-[#3D585E] mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#55C5D5] font-bold">✓</span>
                <span>Be part of a thriving local community in Pembroke Pines.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#55C5D5] font-bold">✓</span>
                <span>Access premium Herbalife nutrition products at a discount.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#55C5D5] font-bold">✓</span>
                <span>Create an independent business with flexible hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#55C5D5] font-bold">✓</span>
                <span>Full training, mentorship, and support to grow your club.</span>
              </li>
            </ul>
            <p className="text-xs text-[#17343A]/50 italic">
              Income applicable to the individuals (or examples) depicted and not average.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-[#17343A]/10 shadow-[0_12px_24px_rgba(0,0,0,0.03)]">
            <h2 className="text-2xl font-bold text-[#17343A] mb-6">Start Your Journey</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-[#17343A] uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#FDF9F3] border border-[#17343A]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#55C5D5]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#17343A] uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#FDF9F3] border border-[#17343A]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#55C5D5]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-[#17343A] uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-[#FDF9F3] border border-[#17343A]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#55C5D5]"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#17343A] uppercase tracking-wider mb-2">Why are you interested?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#FDF9F3] border border-[#17343A]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#55C5D5]"
                  placeholder="Tell us a little about yourself..."
                />
              </div>
              <Button type="button" variant="default" className="w-full group">
                <span>Submit Application</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
