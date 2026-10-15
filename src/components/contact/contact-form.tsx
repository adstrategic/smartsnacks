"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email address."),
  phone: z.string().min(10, "Please provide a valid phone number (at least 10 digits)."),
  inquiryType: z.enum(["Order Ahead", "Catering / Group Shakes", "General Question", "Nutrition Coaching"]),
  message: z.string().min(5, "Please share a brief message or your order preferences."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "Order Ahead",
    },
  });

  const onSubmit = async () => {
    // In production, dispatch to API route or email service
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">
          Message Received!
        </h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto mb-4">
          Thank you for reaching out to Smart Snack Nutrition in Pembroke Pines. A team member will respond shortly.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          {...register("name")}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
        />
        {errors.name && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.name.message}</span>
          </p>
        )}
      </div>

      {/* Grid: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(786) 554-7333"
            {...register("phone")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="inquiryType" className="block text-xs font-semibold text-slate-700 mb-1">
          Topic / Request
        </label>
        <select
          id="inquiryType"
          {...register("inquiryType")}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
        >
          <option value="Order Ahead">Order Ahead / Quick Pickup</option>
          <option value="Catering / Group Shakes">Catering & Office Deliveries</option>
          <option value="Nutrition Coaching">Nutrition Coaching & Goals</option>
          <option value="General Question">General Question</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
          Message or Order Details
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us what you'd like to order or ask..."
          {...register("message")}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full justify-center gap-2 mt-2"
        size="lg"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
      </Button>
    </form>
  );
}
