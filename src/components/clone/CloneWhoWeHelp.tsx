import React from "react";
import Image from "next/image";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneWhoWeHelp() {
  const { whoWeHelp } = CONEJO_DATA;

  return (
    <section className="bg-[#faf7f2] py-20 md:py-28 border-b border-[#eae3d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2f3832] font-normal mb-16">
          {whoWeHelp.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {whoWeHelp.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-md overflow-hidden shadow-sm border border-[#e8dfd2] hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-serif text-2xl text-[#2f3832] font-normal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5d6861] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div>
                  <a
                    href="#specialties"
                    className="inline-block text-xs tracking-[0.16em] uppercase font-semibold text-[#758474] hover:text-[#2f3832] border-b border-[#758474] pb-1 transition-colors"
                  >
                    {item.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
