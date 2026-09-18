"use client";

import React from "react";
import Image from "next/image";
import { MAYA_DATA } from "@/data/mayaData";
import { Check, Calendar } from "lucide-react";

interface ServicesProps {
  onOpenBooking?: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const { services } = MAYA_DATA;

  return (
    <section id="services" className="bg-[#f7f4ed] py-20 md:py-32 border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="eyebrow inline-block">THERAPY SERVICES</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222924] font-normal leading-tight">
            Comprehensive care tailored for your emotional and physiological needs.
          </h2>
          <p className="text-base sm:text-lg text-[#555f58] font-light leading-relaxed">
            Integrating evidence-based modalities like CBT, EMDR, and somatic techniques with
            grounded, depth-oriented space.
          </p>
        </div>

        {/* 3 Dedicated Editorial Service Features */}
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-[#cfded3]/40 rounded-3xl -z-10 group-hover:bg-[#cfded3]/70 transition-colors" />
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card border border-[#e5dfd5]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Badge in image corner */}
                      <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#3a5646] font-serif text-sm font-semibold tracking-wider shadow-sm">
                        {service.number}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#5d876e] font-semibold">
                      Service {service.number} • {service.summary}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#222924] font-normal leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-base text-[#555f58] font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="pt-2 space-y-2.5">
                    <p className="text-xs uppercase tracking-wider text-[#78716c] font-semibold">
                      Key Aspects of Care:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#44403c]">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#5d876e] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase font-semibold text-[#3a5646] hover:text-[#273a30] border-b-2 border-[#5d876e] pb-1 hover:border-[#273a30] transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Inquire About {service.title}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
