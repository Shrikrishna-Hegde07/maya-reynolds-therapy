import React from "react";
import Image from "next/image";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneHope() {
  const { hopeSection } = CONEJO_DATA;

  return (
    <section id="about" className="bg-[#f5ede0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2f3832] leading-snug font-normal">
              {hopeSection.heading}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#525d57] leading-relaxed font-light">
              {hopeSection.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="pt-4">
              <a
                href="#about"
                className="inline-block px-7 py-3.5 text-xs tracking-[0.16em] uppercase font-semibold text-[#2f3832] border border-[#2f3832] hover:bg-[#2f3832] hover:text-white transition-colors rounded-sm"
              >
                {hopeSection.ctaText}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 md:h-[420px] rounded-lg overflow-hidden shadow-lg border-8 border-white/60">
              <Image
                src={hopeSection.image}
                alt="Therapy space at Conejo Valley Family Counseling"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
