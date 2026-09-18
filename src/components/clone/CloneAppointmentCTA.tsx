import React from "react";
import Image from "next/image";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneAppointmentCTA() {
  const { appointmentCTA } = CONEJO_DATA;

  return (
    <section id="contact" className="bg-[#f7f2ea] py-20 md:py-28 border-b border-[#eae3d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs tracking-[0.2em] uppercase font-semibold text-[#758474]">
              {appointmentCTA.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2f3832] font-normal leading-tight">
              {appointmentCTA.heading}
            </h2>
            <p className="text-base sm:text-lg text-[#5a655f] font-light leading-relaxed max-w-xl">
              {appointmentCTA.description}
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-white bg-[#758474] hover:bg-[#5f6e5e] transition-colors rounded-sm"
              >
                {appointmentCTA.buttonText}
              </a>
            </div>
          </div>

          {/* 2 Arched Images */}
          <div className="lg:col-span-5 flex justify-center gap-4 sm:gap-6">
            <div className="relative w-40 sm:w-48 h-64 sm:h-80 rounded-t-full overflow-hidden shadow-md border-4 border-white mt-6">
              <Image
                src={appointmentCTA.images[0]}
                alt="Conejo Valley Counseling office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
            <div className="relative w-40 sm:w-48 h-64 sm:h-80 rounded-t-full overflow-hidden shadow-md border-4 border-white -mt-4">
              <Image
                src={appointmentCTA.images[1]}
                alt="Conejo Valley therapist in session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
