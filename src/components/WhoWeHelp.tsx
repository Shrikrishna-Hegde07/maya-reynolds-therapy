import React from "react";
import { MAYA_DATA } from "@/data/mayaData";
import { Briefcase, Palette, Award, CheckCircle2 } from "lucide-react";

export default function WhoWeHelp() {
  const { whoWeHelp } = MAYA_DATA;

  const icons = [Award, Briefcase, Palette];

  return (
    <section id="who-i-help" className="bg-[#faf8f5] py-20 md:py-28 border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow inline-block mb-2">{whoWeHelp.eyebrow}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] text-[#222924] font-normal leading-tight">
            {whoWeHelp.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555f58] font-light leading-relaxed">
            {whoWeHelp.subheading}
          </p>
        </div>

        {/* 3 Group Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {whoWeHelp.groups.map((group, idx) => {
            const Icon = icons[idx] || Award;
            return (
              <div
                key={idx}
                className="group relative p-8 sm:p-10 rounded-2xl bg-[#ffffff] border border-[#e5dfd5] shadow-soft hover:shadow-card hover:border-[#7ea48d] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e8eee8] text-[#3a5646] flex items-center justify-center mb-6 group-hover:bg-[#3a5646] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl text-[#222924] font-normal mb-3">
                    {group.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#555f58] font-light leading-relaxed mb-6">
                    {group.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#f0ebe1] flex items-start gap-2.5 text-xs text-[#44403c] font-normal bg-[#faf8f5] p-3.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#5d876e] shrink-0 mt-0.5" />
                  <span>{group.details}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
