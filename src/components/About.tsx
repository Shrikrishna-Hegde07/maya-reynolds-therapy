import React from "react";
import Image from "next/image";
import { MAYA_DATA } from "@/data/mayaData";
import { MapPin, ShieldCheck } from "lucide-react";

export default function About() {
  const { about, therapist } = MAYA_DATA;

  return (
    <section id="about" className="bg-[#faf8f5] py-20 md:py-32 border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Maya's Portrait in Arch Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative border */}
              <div className="absolute -inset-3 rounded-t-[10rem] rounded-b-3xl border border-[#7ea48d]/40 -z-10" />
              <div className="relative aspect-[3/4] w-full rounded-t-[9.5rem] rounded-b-2xl overflow-hidden shadow-card border-4 border-white bg-[#f3ece7]">
                <Image
                  src={therapist.portraitImage}
                  alt="Dr. Maya Reynolds, PsyD in Santa Monica"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-6 right-4 sm:-right-4 bg-white p-4 rounded-xl shadow-soft border border-[#e5dfd5] max-w-[240px]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3a5646]">
                  <ShieldCheck className="w-4 h-4 text-[#5d876e]" />
                  <span>Licensed Clinical Psychologist</span>
                </div>
                <p className="text-[11px] text-[#616a64] mt-1 font-light">
                  Santa Monica, CA • In-Person & CA Telehealth
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
            <div className="space-y-2">
              <span className="eyebrow inline-block">{about.eyebrow}</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222924] font-normal leading-tight">
                {about.heading}
              </h2>
              <div className="flex items-center gap-2 text-sm text-[#5d876e] font-medium pt-1">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Santa Monica, California</span>
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#555f58] font-light leading-relaxed">
              {about.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Blockquote with refined typography */}
            <div className="pt-4">
              <div className="p-6 rounded-2xl bg-[#f5ede0] border-l-4 border-[#5d876e] shadow-2xs">
                <p className="font-serif text-lg sm:text-xl text-[#222924] font-normal italic leading-snug">
                  “{about.quote}”
                </p>
              </div>
            </div>

            {/* Grounded attributes tags */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
              <span className="px-3 py-1.5 rounded-full bg-[#e8eee8] text-[#3a5646]">
                Warm & Collaborative
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#e8eee8] text-[#3a5646]">
                Safety & Stabilization
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#e8eee8] text-[#3a5646]">
                Mindfulness & Somatics
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#e8eee8] text-[#3a5646]">
                Evidence-Based CBT & EMDR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
