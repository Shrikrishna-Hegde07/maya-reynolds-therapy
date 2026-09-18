"use client";

import React from "react";
import { MAYA_DATA } from "@/data/mayaData";
import { Calendar, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface CTAProps {
  onOpenBooking?: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  const { cta } = MAYA_DATA;

  return (
    <section id="contact" className="bg-[#273a30] text-[#f4f7f5] py-20 md:py-28 relative overflow-hidden">
      {/* Background soft ambient circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3a5646]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#476c56]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#a9c4b2] font-semibold inline-block">
          {cta.eyebrow}
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
          {cta.heading}
        </h2>

        <p className="text-base sm:text-lg text-[#cfded3] font-light leading-relaxed max-w-2xl mx-auto">
          {cta.description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-[#273a30] bg-[#faf8f5] hover:bg-white active:scale-[0.98] transition-all rounded-sm shadow-soft cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{cta.primaryButton}</span>
          </button>

          <a
            href="#approach"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs tracking-[0.16em] uppercase font-semibold text-[#f4f7f5] border border-[#7ea48d] hover:bg-[#3a5646] transition-colors rounded-sm text-center"
          >
            <span>{cta.secondaryButton}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="pt-6 text-xs text-[#a9c4b2] flex items-center justify-center gap-2 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#7ea48d]" />
          <span>{cta.officeNotice}</span>
        </div>
      </div>
    </section>
  );
}
