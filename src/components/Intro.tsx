import React from "react";
import { MAYA_DATA } from "@/data/mayaData";
import { Compass, Sparkles, HeartHandshake } from "lucide-react";

export default function Intro() {
  const { intro } = MAYA_DATA;

  return (
    <section className="bg-[#f5f1eb] py-20 md:py-28 border-b border-[#e5dfd5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="eyebrow inline-block">{intro.eyebrow}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] text-[#222924] font-normal leading-tight max-w-3xl mx-auto">
            {intro.heading}
          </h2>
          <div className="w-16 h-0.5 bg-[#7ea48d] mx-auto mt-4" />
        </div>

        {/* Narrative Paragraphs with refined editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-6 space-y-5 text-base sm:text-lg text-[#44403c] font-light leading-relaxed">
            <p>{intro.paragraphs[0]}</p>
            <p>{intro.paragraphs[1]}</p>
          </div>

          <div className="md:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-white/80 border border-[#e5dfd5] shadow-soft space-y-4">
              <p className="text-base sm:text-lg text-[#222924] font-light leading-relaxed italic border-l-2 border-[#5d876e] pl-4">
                “{intro.paragraphs[2]}”
              </p>
              <div className="pt-2 text-xs uppercase tracking-widest text-[#5d876e] font-semibold">
                — Dr. Maya Reynolds, PsyD
              </div>
            </div>

            {/* Quick 3 Pillar Cards */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-xl bg-white/60 border border-[#e5dfd5] flex flex-col items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-[#5d876e] mb-1.5" />
                <span className="text-xs font-medium text-[#222924]">Collaborative</span>
              </div>
              <div className="p-4 rounded-xl bg-white/60 border border-[#e5dfd5] flex flex-col items-center justify-center">
                <Compass className="w-5 h-5 text-[#5d876e] mb-1.5" />
                <span className="text-xs font-medium text-[#222924]">Paced Carefully</span>
              </div>
              <div className="p-4 rounded-xl bg-white/60 border border-[#e5dfd5] flex flex-col items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#5d876e] mb-1.5" />
                <span className="text-xs font-medium text-[#222924]">Mind & Body</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
