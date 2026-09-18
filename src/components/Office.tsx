"use client";

import React from "react";
import Image from "next/image";
import { MAYA_DATA } from "@/data/mayaData";
import { MapPin, Sun, Shield, Feather, Video, Calendar } from "lucide-react";

interface OfficeProps {
  onOpenBooking?: () => void;
}

export default function Office({ onOpenBooking }: OfficeProps) {
  const { office } = MAYA_DATA;

  const attributeIcons = [Shield, Feather, Sun, MapPin];

  return (
    <section id="office" className="bg-[#f2ece2] py-20 md:py-32 border-b border-[#e5dfd5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6ede8] border border-[#cfded3] text-[#3a5646] text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>SANTA MONICA PRACTICE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222924] font-normal leading-tight">
            Our Office: A Calm Space for Healing
          </h2>
          <p className="text-base sm:text-lg text-[#555f58] font-light leading-relaxed">
            {office.description}
          </p>
        </div>

        {/* Asymmetric Editorial Gallery with PDF Office Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16">
          {/* Main Large Office Image (Seating Area) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-card border-4 border-white bg-[#e8e2d8] group">
              <Image
                src={office.images[0].src}
                alt={office.images[0].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                <span className="text-xs uppercase tracking-widest text-[#cfded3] font-semibold">
                  Santa Monica Office
                </span>
                <p className="font-serif text-base sm:text-lg font-light">
                  {office.images[0].caption}
                </p>
              </div>
            </div>

            {/* Office Attributes Pills below main photo */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {office.attributes.map((attr, idx) => {
                const Icon = attributeIcons[idx] || Feather;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/80 border border-[#e5dfd5] text-center flex flex-col items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Icon className="w-4 h-4 text-[#5d876e]" />
                    <span className="text-xs font-medium text-[#222924]">{attr}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Secondary Image & In-Person / Telehealth Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-card border-4 border-white bg-[#e8e2d8] group">
              <Image
                src={office.images[1].src}
                alt={office.images[1].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                <p className="font-serif text-sm sm:text-base font-light">
                  {office.images[1].caption}
                </p>
              </div>
            </div>

            {/* Practice Details Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#e5dfd5] shadow-soft space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#e8eee8] text-[#3a5646] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#222924] font-medium leading-none">
                    Office Location
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555f58] font-light mt-1.5">
                    {office.address}
                  </p>
                  <p className="text-xs text-[#5d876e] font-semibold mt-1">
                    {office.inPersonAvailability}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#f0ebe1]">
                <div className="w-9 h-9 rounded-lg bg-[#e8eee8] text-[#3a5646] flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#222924] font-medium leading-none">
                    Telehealth Sessions
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555f58] font-light mt-1.5">
                    {office.telehealthAvailability}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs tracking-[0.16em] uppercase font-semibold text-white bg-[#3a5646] hover:bg-[#273a30] transition-colors rounded-sm cursor-pointer shadow-soft"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request an In-Person or Telehealth Session</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
