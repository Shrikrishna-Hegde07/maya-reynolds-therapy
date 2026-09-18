import React from "react";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneSpecialties() {
  const { specialties } = CONEJO_DATA;

  return (
    <section id="specialties" className="bg-[#faf7f2] py-20 md:py-28 border-b border-[#eae3d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2f3832] font-normal text-center mb-16">
          {specialties.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f5ece0] p-8 rounded-sm flex flex-col justify-between border border-[#eae0d2] hover:border-[#758474] transition-colors"
            >
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2f3832] font-normal mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5a655f] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <div>
                <a
                  href="#specialties"
                  className="inline-block text-xs tracking-[0.16em] uppercase font-semibold text-[#758474] hover:text-[#2f3832] border-b border-[#758474] pb-0.5 transition-colors"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
