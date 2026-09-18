import React from "react";
import Image from "next/image";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneHero() {
  const { hero } = CONEJO_DATA;

  return (
    <section className="bg-[#faf7f2] pt-12 pb-20 md:py-24 border-b border-[#eae3d5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-[#758474]">
              {hero.badge}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2f3832] font-normal leading-[1.15]">
              {hero.title}
            </h1>
            <p className="text-base sm:text-lg text-[#5d6861] max-w-xl font-light leading-relaxed">
              {hero.description}
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-white bg-[#758474] hover:bg-[#5f6e5e] transition-colors rounded-sm shadow-sm"
              >
                {hero.primaryCta}
              </a>
            </div>
          </div>

          {/* Arched Images layout */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end gap-4 sm:gap-6">
            <div className="relative w-40 sm:w-48 md:w-56 h-64 sm:h-80 md:h-96 rounded-t-full overflow-hidden shadow-md border-4 border-white mt-8">
              <Image
                src={hero.images[0]}
                alt="Conejo Valley Counseling therapist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 224px"
                priority
              />
            </div>
            <div className="relative w-40 sm:w-48 md:w-56 h-64 sm:h-80 md:h-96 rounded-t-full overflow-hidden shadow-md border-4 border-white -mt-4">
              <Image
                src={hero.images[1]}
                alt="Therapy space at Conejo Valley Counseling"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 224px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
