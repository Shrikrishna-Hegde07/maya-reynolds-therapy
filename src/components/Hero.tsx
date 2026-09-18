"use client";

import React from "react";
import Image from "next/image";
import { MAYA_DATA } from "@/data/mayaData";
import { MapPin, Video, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const { therapist, office } = MAYA_DATA;

  return (
    <section className="relative bg-[#faf8f5] overflow-hidden pt-8 pb-16 md:py-20 border-b border-[#e5dfd5]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#e6ede8]/50 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#f0ebe1]/60 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8eee8] border border-[#cfded3] text-[#3a5646] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#5d876e]" />
              <span>Santa Monica, CA • Adults & Professionals</span>
            </div>

            {/* Main H1 */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#222924] font-normal leading-[1.14] tracking-tight">
              Grounded, thoughtful therapy for adults navigating anxiety, trauma, and burnout.
            </h1>

            {/* Supporting Copy directly grounded in Maya's profile */}
            <p className="text-base sm:text-lg text-[#555f58] font-light leading-relaxed max-w-2xl">
              Offering therapy in Santa Monica for adults who feel overwhelmed by anxiety,
              stress, or the lingering effects of earlier life experiences. A warm,
              collaborative space designed to help you slow down, understand your mind and body,
              and build lasting resilience.
            </p>

            {/* CTAs & Key Info */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-white bg-[#3a5646] hover:bg-[#273a30] active:scale-[0.98] transition-all rounded-sm shadow-soft cursor-pointer group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#approach"
                className="inline-flex items-center justify-center px-7 py-4 text-xs tracking-[0.16em] uppercase font-semibold text-[#3a5646] border border-[#7ea48d] hover:bg-[#e6ede8] transition-colors rounded-sm text-center"
              >
                Explore My Approach
              </a>
            </div>

            {/* Practice badges */}
            <div className="pt-6 border-t border-[#e5dfd5]/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#555f58]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#5d876e] shrink-0" />
                <span>Private Santa Monica office (In-Person)</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#5d876e] shrink-0" />
                <span>Secure California Telehealth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Backing decorative frame */}
              <div className="absolute inset-0 bg-[#e6ede8] rounded-3xl transform rotate-2 translate-x-3 translate-y-3 -z-10" />
              <div className="absolute inset-0 border border-[#cfded3] rounded-3xl -z-10" />

              {/* Portrait Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-card bg-[#f3ece7]">
                <Image
                  src={therapist.portraitImage}
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                  fill
                  priority
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 450px, 500px"
                />

                {/* Overlaid subtle caption badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-[#e5dfd5] shadow-soft">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-serif text-base text-[#222924] font-medium leading-none">
                        {therapist.name}
                      </p>
                      <p className="text-[11px] text-[#5d876e] tracking-wider uppercase font-semibold mt-1">
                        {therapist.title}
                      </p>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase bg-[#e8eee8] text-[#3a5646] px-2 py-0.5 rounded font-medium shrink-0">
                      Santa Monica
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
