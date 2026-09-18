import React from "react";
import { MAYA_DATA } from "@/data/mayaData";
import { Shield, Sparkles, Activity, Compass } from "lucide-react";

export default function Approach() {
  const { approach } = MAYA_DATA;

  const principleIcons = [HeartHandIcon, Shield, Activity, Compass];

  function HeartHandIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    );
  }

  return (
    <section id="approach" className="bg-[#f3ede3] py-20 md:py-32 border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="eyebrow inline-block mb-2">{approach.eyebrow}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222924] font-normal leading-tight">
            {approach.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555f58] font-light leading-relaxed">
            {approach.subheading}
          </p>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {approach.corePrinciples.map((principle, idx) => {
            const Icon = principleIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border border-[#e5dfd5] shadow-soft hover:shadow-card hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#e8eee8] text-[#3a5646] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#222924] font-normal mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555f58] font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The 4 Explicit Profile Methods */}
        <div className="bg-[#faf8f5] rounded-3xl p-8 sm:p-12 border border-[#e5dfd5] shadow-soft">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#5d876e] font-semibold">
              Evidence-Based Modalities
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#222924] font-normal mt-1">
              Methods explicitly integrated into practice
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.methods.map((method, mIdx) => (
              <div
                key={mIdx}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#f0ebe1]"
              >
                <div className="w-8 h-8 rounded-full bg-[#3a5646] text-white flex items-center justify-center text-xs font-serif shrink-0 mt-0.5">
                  0{mIdx + 1}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#222924] mb-1">
                    {method.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555f58] font-light leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
