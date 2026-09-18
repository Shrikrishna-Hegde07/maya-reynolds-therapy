import React from "react";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneExpertise() {
  const { expertiseGrid } = CONEJO_DATA;

  return (
    <section className="bg-[#faf7f2] py-20 md:py-24 border-b border-[#eae3d5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2f3832] font-normal mb-12">
          {expertiseGrid.heading}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {expertiseGrid.items.map((item, idx) => (
            <div
              key={idx}
              className="py-5 px-4 bg-white rounded-sm border border-[#eae2d4] text-[#3d4640] text-sm sm:text-base font-light tracking-wide shadow-2xs hover:border-[#758474] transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
