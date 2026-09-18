import React from "react";
import { MAYA_DATA } from "@/data/mayaData";
import { CheckCircle2 } from "lucide-react";

export default function Specialties() {
  const { areasOfFocus } = MAYA_DATA;

  return (
    <section id="focus" className="bg-[#faf8f5] py-20 md:py-28 border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="eyebrow inline-block">CHALLENGES WE ADDRESS</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] text-[#222924] font-normal leading-tight">
            Areas of Clinical Focus
          </h2>
          <p className="text-sm sm:text-base text-[#555f58] font-light leading-relaxed">
            Support for the unique mental, emotional, and physical toll of persistent pressure.
          </p>
        </div>

        {/* Dynamic Bento-style Tile Layout visually distinct from Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areasOfFocus.map((area, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-white border border-[#e5dfd5] shadow-2xs hover:shadow-soft hover:border-[#5d876e] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-widest uppercase font-mono text-[#78716c]">
                    0{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#cfded3] group-hover:bg-[#5d876e] transition-colors" />
                </div>
                <h3 className="font-serif text-xl text-[#222924] font-normal mb-2">
                  {area.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#555f58] font-light leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#f5f1eb] flex items-center gap-1.5 text-[11px] text-[#5d876e] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Evidence-based care</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
