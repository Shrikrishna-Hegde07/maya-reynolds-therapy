import React from "react";
import Image from "next/image";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneQuoteBanner() {
  const { quoteBanner } = CONEJO_DATA;

  return (
    <section className="relative bg-[#38433b] text-[#f7f4ed] py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <Image
          src={quoteBanner.image}
          alt="Atmospheric therapy background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-12 h-0.5 bg-[#b2c0b0] mx-auto mb-8" />
        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic leading-snug">
          “{quoteBanner.text}”
        </blockquote>
        <div className="w-12 h-0.5 bg-[#b2c0b0] mx-auto mt-8" />
      </div>
    </section>
  );
}
