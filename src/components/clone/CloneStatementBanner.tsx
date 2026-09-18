import React from "react";
import Image from "next/image";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneStatementBanner() {
  const { statementBanner } = CONEJO_DATA;

  return (
    <section className="relative min-h-[380px] md:min-h-[460px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={statementBanner.image}
          alt="Conejo Valley therapeutic landscape"
          fill
          className="object-cover brightness-[0.7]"
          sizes="100vw"
        />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-snug drop-shadow-sm">
          {statementBanner.heading}
        </h2>
      </div>
    </section>
  );
}
