import React from "react";
import Image from "next/image";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneHowWeWork() {
  const { howWeWork } = CONEJO_DATA;

  return (
    <section id="methods" className="bg-[#f2eae0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 md:h-[440px] rounded-lg overflow-hidden shadow-lg border-8 border-white">
              <Image
                src={howWeWork.image}
                alt="Conejo Valley Counseling session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="inline-block text-xs tracking-[0.2em] uppercase font-semibold text-[#758474]">
              {howWeWork.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2f3832] font-normal leading-tight">
              {howWeWork.heading}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#525d57] font-light leading-relaxed">
              {howWeWork.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="pt-4">
              <a
                href="#methods"
                className="inline-block px-7 py-3.5 text-xs tracking-[0.16em] uppercase font-semibold text-white bg-[#758474] hover:bg-[#5f6e5e] transition-colors rounded-sm"
              >
                {howWeWork.ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
